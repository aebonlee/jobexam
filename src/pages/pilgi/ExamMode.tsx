import { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Timer from '../../components/Timer';
import QuestionCard from '../../components/QuestionCard';
import QuestionNav from '../../components/QuestionNav';
import Modal from '../../components/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { supabase, TABLES } from '../../lib/supabase';
import { calculatePilgiScore, checkPass } from '../../utils/scoring';
import { EXAM_CONFIG, SUBJECTS } from '../../config/site';
import SEOHead from '../../components/SEOHead';

const EXAM_STORAGE_KEY = 'jobexam_exam_progress';

export default function ExamMode() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showToast } = useToast();

  const [questions] = useState(() => {
    if (location.state?.questions?.length) return location.state.questions;
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) { const p = JSON.parse(saved); return p.questions || []; }
    } catch { /* ignore */ }
    return [];
  });
  const [session] = useState(() => {
    if (location.state?.session) return location.state.session;
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) { const p = JSON.parse(saved); return p.session || null; }
    } catch { /* ignore */ }
    return null;
  });
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (location.state?.questions?.length) return 0;
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) { const p = JSON.parse(saved); return p.currentIndex || 0; }
    } catch { /* ignore */ }
    return 0;
  });
  const [answers, setAnswers] = useState(() => {
    if (location.state?.questions?.length) return {};
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) { const p = JSON.parse(saved); return p.answers || {}; }
    } catch { /* ignore */ }
    return {};
  });
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [startTime] = useState(() => {
    if (location.state?.questions?.length) return Date.now();
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) { const p = JSON.parse(saved); return p.startTime || Date.now(); }
    } catch { /* ignore */ }
    return Date.now();
  });
  const [displayMode, setDisplayMode] = useState(() =>
    localStorage.getItem('jobexam-exam-layout') || 'single'
  );
  const [questionSize, setQuestionSize] = useState(() =>
    localStorage.getItem('jobexam-exam-size') || 'md'
  );

  useEffect(() => {
    if (!questions.length) {
      navigate('/pilgi/select', { replace: true });
    }
  }, [questions, navigate]);

  useEffect(() => {
    localStorage.setItem('jobexam-exam-layout', displayMode);
  }, [displayMode]);
  useEffect(() => {
    localStorage.setItem('jobexam-exam-size', questionSize);
  }, [questionSize]);

  const handleSelectAnswer = useCallback((questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  // sessionStorage 자동저장 (모바일 앱 전환 대비)
  useEffect(() => {
    if (questions.length) {
      sessionStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify({
        questions, session, answers, currentIndex, startTime,
      }));
    }
  }, [answers, currentIndex, questions, session, startTime]);

  // Load bookmarks from Supabase
  useEffect(() => {
    if (!user) return;
    supabase.from(TABLES.BOOKMARKS)
      .select('question_id')
      .eq('user_id', user.id)
      .then(({ data, error }) => {
        if (error) { console.warn('북마크 로드 실패:', error); return; }
        if (data) setBookmarkedIds(data.map(b => b.question_id));
      });
  }, [user]);

  const handleToggleBookmark = useCallback(async (questionId) => {
    const isBookmarked = bookmarkedIds.includes(questionId);
    if (isBookmarked) {
      setBookmarkedIds(prev => prev.filter(id => id !== questionId));
      if (user) {
        const { error } = await supabase.from(TABLES.BOOKMARKS)
          .delete()
          .eq('user_id', user.id)
          .eq('question_id', questionId);
        if (error) {
          setBookmarkedIds(prev => [...prev, questionId]);
          showToast('북마크 해제에 실패했습니다.', 'error');
          return;
        }
      }
      showToast('북마크가 해제되었습니다.', 'info');
    } else {
      setBookmarkedIds(prev => [...prev, questionId]);
      if (user) {
        const { error } = await supabase.from(TABLES.BOOKMARKS)
          .insert({ user_id: user.id, question_id: questionId });
        if (error) {
          setBookmarkedIds(prev => prev.filter(id => id !== questionId));
          showToast('북마크 추가에 실패했습니다.', 'error');
          return;
        }
      }
      showToast('북마크에 추가되었습니다.', 'success');
    }
  }, [user, bookmarkedIds, showToast]);

  const handleSubmit = async () => {
    setSubmitting(true);
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const { subjectScores, totalScore, totalCorrect } = calculatePilgiScore(questions, answers);
    const { isPass } = checkPass(subjectScores, totalScore);

    const resultData = {
      score_total: totalScore,
      correct_count: totalCorrect,
      score_by_subject: subjectScores,
      is_pass: isPass,
      time_spent_sec: timeSpent,
      completed_at: new Date().toISOString(),
    };

    try {
      if (user && session && !String(session.id).startsWith('local_')) {
        await supabase
          .from(TABLES.EXAM_SESSIONS)
          .update(resultData)
          .eq('id', session.id);

        // Save individual answers
        const answerRows = questions.map(q => ({
          session_id: session.id,
          question_id: q.id,
          selected_answer: answers[q.id] || null,
          is_correct: answers[q.id] === q.correct_answer,
        }));
        await supabase.from(TABLES.EXAM_ANSWERS).insert(answerRows);

        // Update wrong answers
        const wrongQuestions = questions.filter(q => answers[q.id] && answers[q.id] !== q.correct_answer);
        for (const q of wrongQuestions) {
          try {
            const { data: existing } = await supabase
              .from(TABLES.WRONG_ANSWERS)
              .select('id, wrong_count')
              .eq('user_id', user.id)
              .eq('question_id', q.id)
              .maybeSingle();

            if (existing) {
              await supabase.from(TABLES.WRONG_ANSWERS)
                .update({ wrong_count: existing.wrong_count + 1, resolved: false })
                .eq('id', existing.id);
            } else {
              await supabase.from(TABLES.WRONG_ANSWERS).insert({
                user_id: user.id,
                question_id: q.id,
                wrong_count: 1,
                resolved: false,
              });
            }
          } catch (wErr) {
            console.warn('오답 기록 실패:', q.id, wErr);
          }
        }
      }

      sessionStorage.removeItem(EXAM_STORAGE_KEY);
      navigate(`/pilgi/result/${session?.id || 'local'}`, {
        state: { questions, answers, session: { ...session, ...resultData }, subjectScores },
        replace: true,
      });
    } catch (err: any) {
      console.error(err);
      showToast('결과 저장에 실패했습니다.', 'error');
      sessionStorage.removeItem(EXAM_STORAGE_KEY);
      navigate(`/pilgi/result/${session?.id || 'local'}`, {
        state: { questions, answers, session: { ...session, ...resultData }, subjectScores },
        replace: true,
      });
    }
    setSubmitting(false);
  };

  const handleSubmitRef = useRef(handleSubmit);
  handleSubmitRef.current = handleSubmit;

  const handleTimeUp = useCallback(() => {
    showToast('시간이 종료되었습니다. 자동 제출합니다.', 'info');
    handleSubmitRef.current();
  }, [showToast]);

  if (!questions.length) return null;

  const currentQuestion = questions[currentIndex];
  const currentSubject = SUBJECTS.find(s => s.id === currentQuestion?.subject_id);
  const answeredCount = Object.keys(answers).length;
  const step = displayMode === 'dual' ? 2 : 1;
  const visibleQuestions = displayMode === 'dual'
    ? questions.slice(currentIndex, currentIndex + 2)
    : [currentQuestion];
  const pageInfo = displayMode === 'dual'
    ? `${currentIndex + 1}–${Math.min(currentIndex + 2, questions.length)} / ${questions.length}`
    : `${currentIndex + 1} / ${questions.length}`;
  const isLastPage = displayMode === 'dual'
    ? currentIndex + 2 >= questions.length
    : currentIndex >= questions.length - 1;

  return (
    <div className="exam-container">
      <SEOHead title="필기 시험" />

      {/* Exam Header */}
      <div className="exam-header">
        <div className="exam-header-left">
          <div className="exam-subject-badge" style={{ background: `${currentSubject?.color}15`, color: currentSubject?.color, borderColor: currentSubject?.color }}>
            <i className={currentSubject?.icon} /> {currentSubject?.name}
          </div>
          <span className="exam-progress-text">{answeredCount} / {questions.length} 답변</span>
        </div>
        <Timer
          totalSeconds={EXAM_CONFIG.pilgi.timeLimit}
          onTimeUp={handleTimeUp}
          running={true}
        />
      </div>

      {/* Exam Body */}
      <div className={`exam-body ${displayMode === 'dual' ? 'dual-mode' : ''}`}>
        <div className={`exam-main size-${questionSize}`}>
          {/* Display Toolbar */}
          <div className="exam-display-toolbar">
            <div className="display-toggle-group display-layout-toggle">
              <span className="display-toggle-label">보기</span>
              <button
                className={`display-toggle-btn ${displayMode === 'single' ? 'active' : ''}`}
                onClick={() => setDisplayMode('single')}
              >
                <i className="fa-solid fa-square" /> 1열
              </button>
              <button
                className={`display-toggle-btn ${displayMode === 'dual' ? 'active' : ''}`}
                onClick={() => setDisplayMode('dual')}
              >
                <i className="fa-solid fa-table-columns" /> 2열
              </button>
            </div>
            <div className="display-toggle-group">
              <span className="display-toggle-label">크기</span>
              <button className={`display-toggle-btn ${questionSize === 'sm' ? 'active' : ''}`} onClick={() => setQuestionSize('sm')}>작게</button>
              <button className={`display-toggle-btn ${questionSize === 'md' ? 'active' : ''}`} onClick={() => setQuestionSize('md')}>보통</button>
              <button className={`display-toggle-btn ${questionSize === 'lg' ? 'active' : ''}`} onClick={() => setQuestionSize('lg')}>크게</button>
            </div>
          </div>

          {/* Question Cards */}
          <div className={displayMode === 'dual' ? 'exam-questions-dual' : ''}>
            {visibleQuestions.map((q, i) => (
              <QuestionCard
                key={q.id}
                question={q}
                selectedAnswer={answers[q.id]}
                onSelectAnswer={(answer) => handleSelectAnswer(q.id, answer)}
                questionIndex={currentIndex + i}
                isBookmarked={bookmarkedIds.includes(q.id)}
                onToggleBookmark={handleToggleBookmark}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="exam-nav-buttons">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - step))}
              disabled={currentIndex === 0}
            >
              <i className="fa-solid fa-chevron-left" /> 이전
            </button>
            <span className="exam-page-info">{pageInfo}</span>
            {!isLastPage ? (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + step))}
              >
                다음 <i className="fa-solid fa-chevron-right" />
              </button>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowSubmitModal(true)}
              >
                <i className="fa-solid fa-paper-plane" /> 제출
              </button>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="exam-sidebar">
          <QuestionNav
            questions={questions}
            answers={answers}
            currentIndex={currentIndex}
            onNavigate={setCurrentIndex}
            bookmarkedIds={bookmarkedIds}
          />
          <button
            className="btn btn-primary"
            onClick={() => setShowSubmitModal(true)}
            style={{ width: '100%', marginTop: 16 }}
          >
            <i className="fa-solid fa-paper-plane" /> 시험 제출
          </button>
        </div>
      </div>

      {/* Submit Modal */}
      <Modal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        title="시험 제출"
        actions={
          <>
            <button className="btn btn-secondary btn-sm" onClick={() => setShowSubmitModal(false)}>취소</button>
            <button className="btn btn-primary btn-sm" onClick={handleSubmit} disabled={submitting}>
              {submitting ? '제출 중...' : '제출하기'}
            </button>
          </>
        }
      >
        <p>시험을 제출하시겠습니까?</p>
        <p style={{ marginTop: 8 }}>
          <strong>{answeredCount}</strong>문항 답변 완료 /
          <strong style={{ color: 'var(--color-wrong)' }}> {questions.length - answeredCount}</strong>문항 미답변
        </p>
      </Modal>
    </div>
  );
}
