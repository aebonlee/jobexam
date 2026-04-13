import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

export default function PracticeResult() {
  return (
    <>
      <SEOHead title="실기 연습 결과" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-chart-column" /> 실기 연습 결과</h1>
        </div>
      </div>
      <div className="container text-center" style={{ paddingBottom: 80 }}>
        <p style={{ color: 'var(--text-secondary)', marginTop: 40 }}>
          실기 서술형 연습을 완료하면 결과가 표시됩니다.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
          <Link to="/silgi/practice" className="btn btn-primary">
            <i className="fa-solid fa-pen-fancy" /> 서술형 연습 시작
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            <i className="fa-solid fa-chart-pie" /> 대시보드
          </Link>
        </div>
      </div>
    </>
  );
}
