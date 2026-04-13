import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import QuestionCard from '../../components/QuestionCard';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { supabase, TABLES } from '../../lib/supabase';
import { SUBJECTS } from '../../config/site';
import { loadPilgiQuestions } from '../../data/pilgiLoader';

export default function StudyMode() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const { user } = useAuth();
  const { showToast } = useToast();

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const subject = selectedSubject !== 'all'
        ? SUBJECTS.find(s => s.code === selectedSubject)
        : null;
      const data = await loadPilgiQuestions({
        subjectId: subject?.id || null,
        limit: 50,
      });
      setQuestions(data || []);
      setCurrentIndex(0);
      setAnswers({});
      setShowResult({});
    } catch (err: any) {
      console.error(err);
      showToast('문제를 불러오는데 실패했습니다.', 'error');
    }
    setLoading(false);
  }, [selectedSubject, showToast]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  useEffect(() => {
    if (!user) return;
    supabase.from(TABLES.BOOKMARKS)
      .select('question_id')
      .eq('user_id', user.id)
      .then(({ data }) => {
        if (data) setBookmarkedIds(data.map(b => b.question_id));
      });
  }, [user]);

  const handleSelectAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowResult(prev => ({ ...prev, [questionId]: true }));
  };

  const handleToggleBookmark = async (questionId) => {
    if (!user) {
      showToast('로그인 후 북마크를 이용할 수 있습니다.', 'info');
      return;
    }

    const isBookmarked = bookmarkedIds.includes(questionId);
    if (isBookmarked) {
      await supabase.from(TABLES.BOOKMARKS)
        .delete()
        .eq('user_id', user.id)
        .eq('question_id', questionId);
      setBookmarkedIds(prev => prev.filter(id => id !== questionId));
      showToast('북마크가 해제되었습니다.', 'info');
    } else {
      await supabase.from(TABLES.BOOKMARKS)
        .insert({ user_id: user.id, question_id: questionId });
      setBookmarkedIds(prev => [...prev, questionId]);
      showToast('북마크에 추가되었습니다.', 'success');
    }
  };

  const currentQuestion = questions[currentIndex];
  const currentSubject = currentQuestion ? SUBJECTS.find(s => s.id === currentQuestion.subject_id) : null;

  return (
    <>
      <SEOHead title="학습 모드" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-book-open" /> 학습 모드</h1>
          <p className="page-desc">답을 선택하면 즉시 정답과 해설을 확인할 수 있습니다</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {/* Subject Filter */}
        <div className="study-filters">
          <button
            className={`study-filter-btn ${selectedSubject === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedSubject('all')}
          >
            전체
          </button>
          {SUBJECTS.map(s => (
            <button
              key={s.code}
              className={`study-filter-btn ${selectedSubject === s.code ? 'active' : ''}`}
              onClick={() => setSelectedSubject(s.code)}
              style={selectedSubject === s.code ? { background: s.color, borderColor: s.color, color: '#FFF' } : {}}
            >
              {s.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading-page"><div className="loading-spinner" /></div>
        ) : questions.length === 0 ? (
          <div className="text-center mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>등록된 문제가 없습니다.</p>
          </div>
        ) : (
          <>
            {currentSubject && (
              <div className="study-subject-badge" style={{ background: `${currentSubject.color}15`, color: currentSubject.color }}>
                <i className={currentSubject.icon} /> {currentSubject.name}
              </div>
            )}

            <QuestionCard
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={(answer) => handleSelectAnswer(currentQuestion.id, answer)}
              showResult={!!showResult[currentQuestion.id]}
              showExplanation={!!showResult[currentQuestion.id]}
              questionIndex={currentIndex}
              isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
              onToggleBookmark={handleToggleBookmark}
            />

            <div className="exam-nav-buttons mt-3">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-chevron-left" /> 이전
              </button>
              <span className="exam-page-info">{currentIndex + 1} / {questions.length}</span>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex >= questions.length - 1}
              >
                다음 <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
