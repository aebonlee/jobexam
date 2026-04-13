export default function QuestionNav({ questions, answers, currentIndex, onNavigate, bookmarkedIds = [] }: {
  questions: any[];
  answers: Record<number, number>;
  currentIndex: number;
  onNavigate: (idx: number) => void;
  bookmarkedIds?: number[];
}) {
  return (
    <div className="question-nav">
      <div className="question-nav-title">
        문항 네비게이션
        <span style={{ float: 'right', fontWeight: 500, color: 'var(--text-secondary)' }}>
          {Object.keys(answers).length} / {questions.length}
        </span>
      </div>
      <div className="question-nav-grid">
        {questions.map((q, idx) => {
          let cls = 'question-nav-btn';
          if (idx === currentIndex) cls += ' current';
          else if (bookmarkedIds.includes(q.id)) cls += ' bookmarked';
          else if (answers[q.id]) cls += ' answered';
          return (
            <button
              key={q.id}
              className={cls}
              onClick={() => onNavigate(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      <div className="question-nav-legend">
        <span className="nav-legend-item"><span className="nav-legend-dot current" /> 현재</span>
        <span className="nav-legend-item"><span className="nav-legend-dot answered" /> 답변</span>
        <span className="nav-legend-item"><span className="nav-legend-dot bookmarked" /> 북마크</span>
        <span className="nav-legend-item"><span className="nav-legend-dot" /> 미답변</span>
      </div>
    </div>
  );
}
