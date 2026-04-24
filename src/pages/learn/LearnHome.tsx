import { Link } from 'react-router-dom';
import { CURRICULUM, SUBJECT_ORDER } from '../../data/curriculum';
import SEOHead from '../../components/SEOHead';

export default function LearnHome() {
  return (
    <>
      <SEOHead title="과목별 학습하기" description="직업상담사 2급 과목별 핵심 이론과 개념을 정리한 학습 페이지입니다." />

      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-graduation-cap" /> 과목별 학습하기</h1>
          <p className="page-desc">직업상담사 2급 시험 핵심 이론과 개념을 과목별로 정리했습니다.</p>
        </div>
      </div>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="learn-grid">
          {SUBJECT_ORDER.map(code => {
            const subject = CURRICULUM[code];
            const totalTopics = subject.chapters.reduce((sum, ch) => sum + ch.topics.length, 0);

            return (
              <Link to={`/learn/${code}`} key={code} className="learn-card" style={{ '--card-color': subject.color } as React.CSSProperties}>
                <div className="learn-card-icon" style={{ background: subject.color }}>
                  <i className={subject.icon} />
                </div>
                <div className="learn-card-body">
                  <h3 className="learn-card-title">{subject.name}</h3>
                  <p className="learn-card-desc">{subject.description}</p>
                  <div className="learn-card-meta">
                    <span className="learn-card-badge">
                      <i className="fa-solid fa-layer-group" /> {subject.chapters.length}개 챕터
                    </span>
                    <span className="learn-card-badge">
                      <i className="fa-solid fa-file-lines" /> {totalTopics}개 토픽
                    </span>
                  </div>
                </div>
                <div className="learn-card-arrow">
                  <i className="fa-solid fa-chevron-right" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
