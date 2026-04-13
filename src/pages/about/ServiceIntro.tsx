import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const FEATURES = [
  { icon: 'fa-solid fa-file-lines', title: '필기 CBT', desc: '실제 시험과 동일한 형식의 CBT 모의시험. 5과목 100문항, 100분 타이머.' },
  { icon: 'fa-solid fa-pen-fancy', title: '실기 연습', desc: '주관식 실기 문제 풀이. 키워드 일치율 기반 채점 및 모범답안 비교.' },
  { icon: 'fa-solid fa-book-open', title: '과목별 학습', desc: '직업상담학, 직업심리학, 직업정보론, 노동시장론, 노동관계법규 이론 학습.' },
  { icon: 'fa-solid fa-chart-pie', title: '학습 분석', desc: '과목별 점수 추이, 약점 분석, 합격 예측까지 데이터 기반 학습 관리.' },
  { icon: 'fa-solid fa-bookmark', title: '오답노트·북마크', desc: '틀린 문제 자동 수집, 중요 문제 북마크로 반복 학습.' },
  { icon: 'fa-solid fa-trophy', title: '합격 예측', desc: '최근 시험 성적 기반 합격 확률을 실시간으로 분석.' },
];

export default function ServiceIntro() {
  return (
    <>
      <SEOHead title="사이트 소개" description="JobExam 직업상담사 1급·2급 시험 준비 플랫폼 소개" />

      <div className="about-hero">
        <div className="container">
          <h1><i className="fa-solid fa-circle-info" /> 사이트 소개</h1>
          <p>직업상담사 1급·2급 시험 합격을 위한 올인원 CBT 학습 플랫폼</p>
        </div>
      </div>

      <div className="container">
        <div className="about-section">
          <h2><i className="fa-solid fa-bullseye" /> JobExam이란?</h2>
          <p>
            JobExam은 직업상담사 1급·2급 자격증 시험 준비를 위한 온라인 CBT 학습 플랫폼입니다.
            필기 모의시험, 실기 연습, 과목별 이론 학습, 오답노트, 합격 예측까지
            시험 준비에 필요한 모든 기능을 제공합니다.
          </p>
        </div>

        <div className="about-features">
          {FEATURES.map((f, i) => (
            <div key={i} className="about-feature-card">
              <div className="about-feature-icon"><i className={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-section">
          <h2><i className="fa-solid fa-lock-open" /> 무료 / 유료 안내</h2>
          <p>기본적인 시험 안내와 서비스 소개는 누구나 무료로 이용할 수 있습니다. 학습 콘텐츠는 유료 이용권으로 이용하세요.</p>
          <table className="about-access-table">
            <thead>
              <tr><th>기능</th><th>접근</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td>시험 안내·일정</td><td><span className="badge-free">무료</span></td><td>필기/실기 시험 개요 및 일정 안내</td></tr>
              <tr><td>서비스 소개·이용안내</td><td><span className="badge-free">무료</span></td><td>플랫폼 소개 및 이용 방법</td></tr>
              <tr><td>필기 CBT 1회 체험</td><td><span className="badge-free">무료</span></td><td>로그인 후 첫 1회 무료 체험</td></tr>
              <tr><td>필기 CBT 무제한</td><td><span className="badge-paid">유료</span></td><td>모든 기출문제 CBT 무제한 응시</td></tr>
              <tr><td>실기 연습</td><td><span className="badge-paid">유료</span></td><td>주관식 실기 문제 풀이</td></tr>
              <tr><td>과목별 학습</td><td><span className="badge-paid">유료</span></td><td>5과목 이론 학습 콘텐츠</td></tr>
              <tr><td>대시보드·분석</td><td><span className="badge-paid">유료</span></td><td>학습 현황, 점수 추이, 합격 예측</td></tr>
              <tr><td>오답노트·북마크</td><td><span className="badge-paid">유료</span></td><td>틀린 문제 관리 및 북마크</td></tr>
            </tbody>
          </table>
        </div>

        <div className="about-cta">
          <h3>지금 시작하세요</h3>
          <p>합리적인 가격으로 직업상담사 시험을 준비하세요.</p>
          <Link to="/about/pricing" className="btn btn-lg">요금제 보기</Link>
        </div>
      </div>
    </>
  );
}
