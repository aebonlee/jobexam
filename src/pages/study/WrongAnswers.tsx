import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';
import QuestionCard from '../../components/QuestionCard';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { supabase, TABLES } from '../../lib/supabase';
import { SUBJECTS } from '../../config/site';

function WrongAnswersContent() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [wrongItems, setWrongItems] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState({});
  const [filter, setFilter] = useState('unresolved');

  useEffect(() => {
    if (!user) return;
    loadWrongAnswers();
  }, [user]);

  const loadWrongAnswers = async () => {
    setLoading(true);
    const { data: wrongs } = await supabase
      .from(TABLES.WRONG_ANSWERS)
      .select('*')
      .eq('user_id', user.id)
      .order('wrong_count', { ascending: false });

    setWrongItems(wrongs || []);

    if (wrongs?.length) {
      const ids = wrongs.map(w => w.question_id);
      const { data: qs } = await supabase
        .from(TABLES.QUESTIONS)
        .select('*')
        .in('id', ids);

      setQuestions(qs || []);
    } else {
      setQuestions([]);
    }
    setLoading(false);
  };

  const handleResolve = async (questionId) => {
    const wrong = wrongItems.find(w => w.question_id === questionId);
    if (!wrong) return;

    await supabase.from(TABLES.WRONG_ANSWERS)
      .update({ resolved: !wrong.resolved })
      .eq('id', wrong.id);

    setWrongItems(prev => prev.map(w =>
      w.id === wrong.id ? { ...w, resolved: !w.resolved } : w
    ));
    showToast(wrong.resolved ? '미해결로 변경했습니다.' : '해결 완료로 표시했습니다.', 'success');
  };

  const filteredQuestions = questions.filter(q => {
    const wrong = wrongItems.find(w => w.question_id === q.id);
    if (!wrong) return false;
    if (filter === 'unresolved') return !wrong.resolved;
    if (filter === 'resolved') return wrong.resolved;
    return true;
  });

  const handleSelectAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowResult(prev => ({ ...prev, [questionId]: true }));
  };

  const currentQuestion = filteredQuestions[currentIndex];
  const currentWrong = currentQuestion ? wrongItems.find(w => w.question_id === currentQuestion.id) : null;
  const currentSubject = currentQuestion ? SUBJECTS.find(s => s.id === currentQuestion.subject_id) : null;

  return (
    <>
      <SEOHead title="오답노트" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-rotate-left" /> 오답노트</h1>
          <p className="page-desc">틀린 문제를 반복 학습하여 실력을 올리세요</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="study-filters">
          {[
            { key: 'unresolved', label: '미해결' },
            { key: 'resolved', label: '해결' },
            { key: 'all', label: '전체' },
          ].map(f => (
            <button
              key={f.key}
              className={`study-filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => { setFilter(f.key); setCurrentIndex(0); }}
            >
              {f.label} ({questions.filter(q => {
                const w = wrongItems.find(w => w.question_id === q.id);
                if (!w) return false;
                if (f.key === 'unresolved') return !w.resolved;
                if (f.key === 'resolved') return w.resolved;
                return true;
              }).length})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading-page"><div className="loading-spinner" /></div>
        ) : filteredQuestions.length === 0 ? (
          <div className="text-center mt-4">
            <i className="fa-solid fa-circle-check" style={{ fontSize: 48, color: 'var(--color-correct)', opacity: 0.3, marginBottom: 16, display: 'block' }} />
            <p style={{ color: 'var(--text-secondary)' }}>
              {filter === 'unresolved' ? '미해결 오답이 없습니다!' : '오답 기록이 없습니다.'}
            </p>
          </div>
        ) : (
          <>
            {currentSubject && (
              <div className="study-subject-badge" style={{ background: `${currentSubject.color}15`, color: currentSubject.color }}>
                <i className={currentSubject.icon} /> {currentSubject.name}
                {currentWrong && (
                  <span className="wrong-count-badge">
                    {currentWrong.wrong_count}회 오답
                  </span>
                )}
              </div>
            )}

            <QuestionCard
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={(answer) => handleSelectAnswer(currentQuestion.id, answer)}
              showResult={!!showResult[currentQuestion.id]}
              showExplanation={!!showResult[currentQuestion.id]}
              questionIndex={questions.indexOf(currentQuestion)}
            />

            <div className="wrong-answer-actions mt-2">
              <button
                className={`btn btn-sm ${currentWrong?.resolved ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => handleResolve(currentQuestion.id)}
              >
                <i className={currentWrong?.resolved ? 'fa-solid fa-rotate-left' : 'fa-solid fa-check'} />
                {currentWrong?.resolved ? '미해결로 변경' : '해결 완료'}
              </button>
            </div>

            <div className="exam-nav-buttons mt-3">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-chevron-left" /> 이전
              </button>
              <span className="exam-page-info">{currentIndex + 1} / {filteredQuestions.length}</span>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                disabled={currentIndex >= filteredQuestions.length - 1}
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

export default function WrongAnswers() {
  return (
    <AuthGuard>
      <WrongAnswersContent />
    </AuthGuard>
  );
}
