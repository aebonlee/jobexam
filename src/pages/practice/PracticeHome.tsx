import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

export default function PracticeHome() {
  return (
    <>
      <SEOHead title="문제풀기" description="직업상담사 2급 필기 CBT 및 실기 연습 문제를 풀어보세요." />

      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-pen-to-square" /> 문제풀기</h1>
          <p className="page-desc">필기 CBT와 실기 연습 문제로 실전 감각을 키워보세요.</p>
        </div>
      </div>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="practice-grid">
          <Link to="/pilgi" className="practice-card" style={{ '--card-color': '#3B82F6' } as React.CSSProperties}>
            <div className="practice-card-icon" style={{ background: '#3B82F6' }}>
              <i className="fa-solid fa-desktop" />
            </div>
            <div className="practice-card-body">
              <h3 className="practice-card-title">필기 CBT</h3>
              <p className="practice-card-desc">5과목 100문항 4지선다 — 실제 시험과 동일한 CBT 환경에서 연습하세요.</p>
              <div className="practice-card-meta">
                <span className="practice-card-badge"><i className="fa-solid fa-clock" /> 100분</span>
                <span className="practice-card-badge"><i className="fa-solid fa-list-ol" /> 100문항</span>
                <span className="practice-card-badge"><i className="fa-solid fa-check-double" /> 평균 60점 합격</span>
              </div>
            </div>
            <div className="practice-card-arrow">
              <i className="fa-solid fa-chevron-right" />
            </div>
          </Link>

          <Link to="/silgi" className="practice-card" style={{ '--card-color': '#10B981' } as React.CSSProperties}>
            <div className="practice-card-icon" style={{ background: '#10B981' }}>
              <i className="fa-solid fa-file-pen" />
            </div>
            <div className="practice-card-body">
              <h3 className="practice-card-title">실기 연습</h3>
              <p className="practice-card-desc">서술형·계산형 문제를 직접 풀어보며 실기 시험을 대비하세요.</p>
              <div className="practice-card-meta">
                <span className="practice-card-badge"><i className="fa-solid fa-clock" /> 150분</span>
                <span className="practice-card-badge"><i className="fa-solid fa-pen" /> 서술형</span>
                <span className="practice-card-badge"><i className="fa-solid fa-calculator" /> 계산형</span>
              </div>
            </div>
            <div className="practice-card-arrow">
              <i className="fa-solid fa-chevron-right" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
