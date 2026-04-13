import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { getExamById } from '../../data/silgiExams';

function QuestionCard({ question, isOpen, onToggle }) {
  return (
    <div className={`sq-card ${isOpen ? 'sq-card--open' : ''}`}>
      <button className="sq-card-header" onClick={onToggle} type="button">
        <div className="sq-card-num">Q{question.num}</div>
        <div className="sq-card-title-area">
          <h3 className="sq-card-title">{question.title}</h3>
          <div className="sq-card-meta">
            <span className="sq-badge sq-badge--points">{question.points}점</span>
            <span className="sq-badge sq-badge--keyword">{question.keyword}</span>
          </div>
        </div>
        <div className="sq-card-toggle">
          <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`} />
        </div>
      </button>

      {isOpen && (
        <div className="sq-card-body">
          {/* 출제빈도 */}
          <div className="sq-frequency">
            <i className="fa-solid fa-chart-bar" />
            <span>출제 이력: {question.frequency}</span>
          </div>

          {/* 해설 */}
          <div className="sq-section">
            <div className="sq-section-label">
              <i className="fa-solid fa-check-circle" />
              <span>해설</span>
            </div>
            <div
              className="sq-section-content"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            />
          </div>

          {/* 더 나아가기 */}
          {question.advanced && (
            <div className="sq-section sq-section--advanced">
              <div className="sq-section-label">
                <i className="fa-solid fa-graduation-cap" />
                <span>더 나아가기</span>
              </div>
              <div
                className="sq-section-content"
                dangerouslySetInnerHTML={{ __html: question.advanced }}
              />
            </div>
          )}

          {/* 꿀팁 */}
          {question.tips && (
            <div className="sq-section sq-section--tips">
              <div className="sq-section-label">
                <i className="fa-solid fa-lightbulb" />
                <span>꿀팁</span>
              </div>
              <p className="sq-section-content">{question.tips}</p>
            </div>
          )}

          {/* 부분점수 */}
          <div className="sq-partial-score">
            <i className="fa-solid fa-pen" />
            <span>부분 점수: {question.partialScore}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SilgiExamDetail() {
  const { examId } = useParams();
  const exam = getExamById(examId);
  const [openQuestions, setOpenQuestions] = useState(new Set());

  if (!exam) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>시험을 찾을 수 없습니다</h1>
          </div>
        </div>
        <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
          <p>요청하신 기출문제를 찾을 수 없습니다.</p>
          <Link to="/silgi/past" className="btn btn-primary" style={{ marginTop: 20 }}>목록으로 돌아가기</Link>
        </div>
      </>
    );
  }

  const toggleQuestion = (num) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  const expandAll = () => {
    setOpenQuestions(new Set(exam.questions.map((q) => q.num)));
  };

  const collapseAll = () => {
    setOpenQuestions(new Set());
  };

  const totalPoints = exam.questions.reduce((sum, q) => sum + q.points, 0);

  return (
    <>
      <SEOHead
        title={exam.title}
        description={`${exam.title} 기출문제 ${exam.questions.length}문항 상세 해설`}
      />
      <div className="page-header">
        <div className="container">
          <Link to="/silgi/past" className="sq-back-link">
            <i className="fa-solid fa-arrow-left" /> 기출문제 목록
          </Link>
          <h1>{exam.title}</h1>
          <p className="page-desc">
            총 {exam.questions.length}문항 · {totalPoints}점 만점 · 150분
          </p>
        </div>
      </div>

      <div className="container silgi-exam-page">
        {/* Controls */}
        <div className="sq-controls">
          <button className="sq-control-btn" onClick={expandAll} type="button">
            <i className="fa-solid fa-angles-down" /> 전체 펼치기
          </button>
          <button className="sq-control-btn" onClick={collapseAll} type="button">
            <i className="fa-solid fa-angles-up" /> 전체 접기
          </button>
          <span className="sq-control-count">
            {openQuestions.size} / {exam.questions.length} 펼침
          </span>
        </div>

        {/* Questions */}
        <div className="sq-list">
          {exam.questions.map((question) => (
            <QuestionCard
              key={question.num}
              question={question}
              isOpen={openQuestions.has(question.num)}
              onToggle={() => toggleQuestion(question.num)}
            />
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="sq-bottom-nav">
          <Link to="/silgi/past" className="btn btn-secondary">
            <i className="fa-solid fa-list" /> 기출문제 목록
          </Link>
          <Link to="/silgi" className="btn btn-primary">
            <i className="fa-solid fa-pen-to-square" /> 실기 연습하기
          </Link>
        </div>
      </div>
    </>
  );
}
