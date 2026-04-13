import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { getExamList } from '../../data/silgiExams';

export default function SilgiExamList() {
  const exams = getExamList();

  return (
    <>
      <SEOHead title="실기 기출문제" description="직업상담사 2급 실기 기출문제 해설 - 회차별 기출문제와 상세 해설" />
      <div className="page-header">
        <div className="container">
          <h1>실기 기출문제 해설</h1>
          <p className="page-desc">회차별 실기 기출문제와 상세 해설을 확인하세요</p>
        </div>
      </div>

      <div className="container silgi-exam-page">
        <div className="silgi-exam-stats-row">
          <div className="silgi-exam-stat">
            <span className="silgi-exam-stat-value">{exams.length}</span>
            <span className="silgi-exam-stat-label">수록 회차</span>
          </div>
          <div className="silgi-exam-stat">
            <span className="silgi-exam-stat-value">
              {exams.reduce((sum, e) => sum + e.questions.length, 0)}
            </span>
            <span className="silgi-exam-stat-label">총 문항 수</span>
          </div>
          <div className="silgi-exam-stat">
            <span className="silgi-exam-stat-value">주관식</span>
            <span className="silgi-exam-stat-label">출제 유형</span>
          </div>
        </div>

        <div className="silgi-exam-grid">
          {exams.map((exam) => (
            <Link key={exam.id} to={`/silgi/past/${exam.id}`} className="silgi-exam-card">
              <div className="silgi-exam-card-badge">{exam.year}년 제{exam.round}회</div>
              <h3>{exam.title}</h3>
              <div className="silgi-exam-card-info">
                <div className="silgi-exam-card-info-item">
                  <i className="fa-solid fa-file-lines" />
                  <span>{exam.questions.length}문항</span>
                </div>
                <div className="silgi-exam-card-info-item">
                  <i className="fa-solid fa-star" />
                  <span>{exam.totalPoints}점 만점</span>
                </div>
                <div className="silgi-exam-card-info-item">
                  <i className="fa-solid fa-clock" />
                  <span>150분</span>
                </div>
              </div>
              <div className="silgi-exam-card-arrow">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </Link>
          ))}
        </div>

        <div className="silgi-exam-notice">
          <i className="fa-solid fa-circle-info" />
          <p>기출문제 데이터는 지속적으로 추가됩니다. 해설은 학습 참고용이며, 실제 시험에서는 출제 의도에 맞게 답안을 작성하세요.</p>
        </div>
      </div>
    </>
  );
}
