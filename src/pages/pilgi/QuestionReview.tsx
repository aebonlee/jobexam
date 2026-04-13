import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import QuestionCard from '../../components/QuestionCard';
import { SUBJECTS } from '../../config/site';

export default function QuestionReview() {
  const location = useLocation();
  const { questions = [], answers = {} } = location.state || {};
  const [filter, setFilter] = useState('wrong');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredQuestions = questions.filter(q => {
    if (filter === 'wrong') return answers[q.id] && answers[q.id] !== q.correct_answer;
    if (filter === 'correct') return answers[q.id] === q.correct_answer;
    if (filter === 'unanswered') return !answers[q.id];
    return true;
  });

  if (!questions.length) {
    return (
      <div className="loading-page" style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="text-center">
          <p>복습할 문제가 없습니다.</p>
          <Link to="/pilgi" className="btn btn-primary mt-3">필기 홈으로</Link>
        </div>
      </div>
    );
  }

  const currentQuestion = filteredQuestions[currentIndex];
  const currentSubject = currentQuestion ? SUBJECTS.find(s => s.id === currentQuestion.subject_id) : null;

  return (
    <>
      <SEOHead title="오답 복습" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-magnifying-glass" /> 오답 복습</h1>
          <p className="page-desc">틀린 문제를 다시 확인하고 해설을 읽어보세요</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="review-filters">
          {[
            { key: 'wrong', label: '오답', icon: 'fa-solid fa-xmark' },
            { key: 'correct', label: '정답', icon: 'fa-solid fa-check' },
            { key: 'unanswered', label: '미답변', icon: 'fa-solid fa-minus' },
            { key: 'all', label: '전체', icon: 'fa-solid fa-list' },
          ].map(f => (
            <button
              key={f.key}
              className={`study-filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => { setFilter(f.key); setCurrentIndex(0); }}
            >
              <i className={f.icon} /> {f.label} ({questions.filter(q => {
                if (f.key === 'wrong') return answers[q.id] && answers[q.id] !== q.correct_answer;
                if (f.key === 'correct') return answers[q.id] === q.correct_answer;
                if (f.key === 'unanswered') return !answers[q.id];
                return true;
              }).length})
            </button>
          ))}
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="text-center mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>해당 조건의 문제가 없습니다.</p>
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
              showResult={true}
              showExplanation={true}
              questionIndex={questions.indexOf(currentQuestion)}
            />

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
