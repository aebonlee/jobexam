import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';
import QuestionCard from '../../components/QuestionCard';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { supabase, TABLES } from '../../lib/supabase';
import { SUBJECTS } from '../../config/site';

function BookmarksContent() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState({});

  useEffect(() => {
    if (!user) return;
    loadBookmarks();
  }, [user]);

  const loadBookmarks = async () => {
    setLoading(true);
    const { data: bookmarks } = await supabase
      .from(TABLES.BOOKMARKS)
      .select('question_id')
      .eq('user_id', user.id);

    if (bookmarks?.length) {
      const ids = bookmarks.map(b => b.question_id);
      const { data: questions } = await supabase
        .from(TABLES.QUESTIONS)
        .select('*')
        .in('id', ids)
        .order('subject_id')
        .order('question_number');

      setQuestions(questions || []);
    } else {
      setQuestions([]);
    }
    setLoading(false);
  };

  const handleRemoveBookmark = async (questionId) => {
    await supabase.from(TABLES.BOOKMARKS)
      .delete()
      .eq('user_id', user.id)
      .eq('question_id', questionId);
    setQuestions(prev => prev.filter(q => q.id !== questionId));
    showToast('북마크가 해제되었습니다.', 'info');
    if (currentIndex >= questions.length - 1) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const handleSelectAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowResult(prev => ({ ...prev, [questionId]: true }));
  };

  const currentQuestion = questions[currentIndex];
  const currentSubject = currentQuestion ? SUBJECTS.find(s => s.id === currentQuestion.subject_id) : null;

  return (
    <>
      <SEOHead title="북마크" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-bookmark" /> 북마크</h1>
          <p className="page-desc">북마크한 문제를 복습하세요 ({questions.length}개)</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {loading ? (
          <div className="loading-page"><div className="loading-spinner" /></div>
        ) : questions.length === 0 ? (
          <div className="text-center mt-4">
            <i className="fa-regular fa-bookmark" style={{ fontSize: 48, color: 'var(--text-light)', opacity: 0.3, marginBottom: 16, display: 'block' }} />
            <p style={{ color: 'var(--text-secondary)' }}>북마크한 문제가 없습니다.</p>
            <p style={{ color: 'var(--text-light)', fontSize: 14, marginTop: 8 }}>학습 모드에서 문제를 북마크해보세요.</p>
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
              isBookmarked={true}
              onToggleBookmark={handleRemoveBookmark}
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

export default function Bookmarks() {
  return (
    <AuthGuard>
      <BookmarksContent />
    </AuthGuard>
  );
}
