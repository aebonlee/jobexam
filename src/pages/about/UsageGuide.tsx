import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const STEPS = [
  { num: 1, title: '회원가입 / 로그인', desc: 'Google 또는 Kakao 계정으로 간편하게 로그인하세요. 별도의 회원가입 절차 없이 소셜 로그인만으로 시작합니다.' },
  { num: 2, title: '무료 체험', desc: '로그인 후 필기 CBT 1회를 무료로 체험할 수 있습니다. 실제 시험과 동일한 형식을 먼저 경험해 보세요.' },
  { num: 3, title: '이용권 구매', desc: '30일, 90일, 평생 이용권 중 선택하여 구매하세요. 결제 즉시 모든 학습 콘텐츠를 이용할 수 있습니다.' },
  { num: 4, title: '학습 시작', desc: '과목별 이론 학습 → 필기 CBT 모의시험 → 오답 복습 → 실기 연습 순서로 체계적으로 학습하세요.' },
  { num: 5, title: '성과 분석', desc: '대시보드에서 학습 현황, 과목별 점수, 합격 예측을 확인하고 약점을 보완하세요.' },
];

const MENUS = [
  { icon: 'fa-solid fa-clipboard-list', label: '시험안내 — 필기/실기 시험 개요, 일정, 과목 소개' },
  { icon: 'fa-solid fa-book-open', label: '학습하기 — 5과목 이론 학습, 학습 요약, 실기 기출해설' },
  { icon: 'fa-solid fa-pen-to-square', label: '문제풀기 — 필기 CBT 모의시험, 실기 주관식 연습' },
  { icon: 'fa-solid fa-user', label: '나의학습 — 대시보드, 북마크, 오답노트' },
  { icon: 'fa-solid fa-circle-info', label: '서비스 — 서비스 소개, 이용 안내, 요금제' },
  { icon: 'fa-solid fa-cart-shopping', label: '결제 — 이용권 구매, 주문 내역 확인' },
];

const FAQS = [
  { q: '무료로 어디까지 이용할 수 있나요?', a: '시험안내, 서비스 소개 페이지는 로그인 없이 무료입니다. 로그인 후 필기 CBT 1회 무료 체험이 가능합니다.' },
  { q: '이용권 기간은 언제부터 시작되나요?', a: '결제 완료 시점부터 시작됩니다. 30일 이용권은 결제 후 30일간, 평생 이용권은 기한 없이 이용 가능합니다.' },
  { q: '결제 수단은 무엇이 있나요?', a: '신용카드(KG이니시스) 결제를 지원합니다.' },
  { q: '환불이 가능한가요?', a: '결제 후 7일 이내, 유료 콘텐츠 이용 이력이 없는 경우 전액 환불 가능합니다. 고객센터로 문의해 주세요.' },
  { q: '여러 기기에서 이용할 수 있나요?', a: '네, 동일 계정으로 로그인하면 PC, 태블릿, 모바일 등 어디서든 이용 가능합니다.' },
];

export default function UsageGuide() {
  return (
    <>
      <SEOHead title="이용 안내" description="JobPath 이용 방법 안내" />

      <div className="about-hero">
        <div className="container">
          <h1><i className="fa-solid fa-compass" /> 이용 안내</h1>
          <p>JobPath를 처음 이용하시는 분을 위한 가이드입니다</p>
        </div>
      </div>

      <div className="container">
        <div className="about-section">
          <h2><i className="fa-solid fa-shoe-prints" /> 시작하기</h2>
          <p>5단계로 간단하게 시작하세요.</p>
        </div>

        <div className="guide-steps">
          {STEPS.map(s => (
            <div key={s.num} className="guide-step">
              <div className="guide-step-number">{s.num}</div>
              <div className="guide-step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-section">
          <h2><i className="fa-solid fa-bars" /> 메뉴 안내</h2>
          <p>상단 메뉴를 통해 원하는 기능에 빠르게 접근하세요.</p>
          <div className="guide-menu-list">
            {MENUS.map((m, i) => (
              <div key={i} className="guide-menu-item">
                <i className={m.icon} />
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="guide-faq">
          <h2><i className="fa-solid fa-circle-question" /> 자주 묻는 질문 (FAQ)</h2>
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item">
              <h4><i className="fa-solid fa-q" /> {f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <h3>준비되셨나요?</h3>
          <p>지금 바로 학습을 시작하세요.</p>
          <Link to="/login" className="btn btn-lg">로그인하기</Link>
        </div>
      </div>
    </>
  );
}
