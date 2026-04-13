import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { PLANS } from '../../config/site';

const FEATURES_LIST = [
  '시험안내 열람',
  '서비스 소개 열람',
  '필기 CBT 1회 체험',
  '필기 CBT 무제한',
  '실기 연습',
  '과목별 학습',
  '학습 요약',
  '대시보드·분석',
  '오답노트',
  '북마크',
  '합격 예측',
];

const FREE_ACCESS = [true, true, true, false, false, false, false, false, false, false, false];
const PAID_ACCESS = [true, true, true, true, true, true, true, true, true, true, true];

const PLAN_FEATURES = [
  '필기 CBT 모의시험 무제한',
  '실기 주관식 연습',
  '5과목 이론 학습',
  '학습 요약 노트',
  '대시보드 & 성적 분석',
  '합격 예측 AI',
  '오답노트 & 북마크',
];

function formatPrice(price: number) {
  return price.toLocaleString('ko-KR');
}

export default function Pricing() {
  return (
    <>
      <SEOHead title="요금제" description="JobPath 이용권 요금제 안내" />

      <div className="about-hero">
        <div className="container">
          <h1><i className="fa-solid fa-tags" /> 요금제</h1>
          <p>시험 횟차에 맞춰 합리적인 가격으로 준비하세요</p>
        </div>
      </div>

      <div className="container">
        <div className="pricing-grid">
          {PLANS.map(plan => (
            <div key={plan.id} className={`pricing-card${plan.recommended ? ' pricing-card--recommended' : ''}`}>
              <h3>{plan.label}</h3>
              <p className="pricing-period">{(plan as any).desc || `${Math.round((plan.days || 0) / 30)}개월간 이용`}</p>
              <div className="pricing-price">{formatPrice(plan.price)}원</div>
              <p className="pricing-price-sub">
                월 {Math.round(plan.price / Math.round((plan.days || 30) / 30)).toLocaleString()}원
              </p>
              <ul className="pricing-features">
                {PLAN_FEATURES.map((f, i) => (
                  <li key={i}><i className="fa-solid fa-check" /> {f}</li>
                ))}
              </ul>
              <Link to="/checkout" className={`btn btn-block ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`}>
                구매하기
              </Link>
            </div>
          ))}
        </div>

        <div className="pricing-compare">
          <h2>기능 비교</h2>
          <table>
            <thead>
              <tr>
                <th>기능</th>
                <th>무료</th>
                <th>유료 이용권</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES_LIST.map((f, i) => (
                <tr key={i}>
                  <td>{f}</td>
                  <td>{FREE_ACCESS[i] ? <i className="fa-solid fa-check check" /> : <i className="fa-solid fa-xmark cross" />}</td>
                  <td>{PAID_ACCESS[i] ? <i className="fa-solid fa-check check" /> : <i className="fa-solid fa-xmark cross" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="coupon-banner" style={{ background: 'rgba(27, 58, 107, 0.05)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '24px 28px', marginBottom: 40, textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 12 }}>
            <i className="fa-solid fa-ticket" style={{ marginRight: 8, color: 'var(--primary-blue)' }} />
            쿠폰이 있으신가요?
          </p>
          <Link to="/coupon" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <i className="fa-solid fa-gift" /> 쿠폰 등록하기
          </Link>
        </div>

        <div className="guide-faq">
          <h2><i className="fa-solid fa-circle-question" /> 결제 FAQ</h2>
          <div className="faq-item">
            <h4><i className="fa-solid fa-q" /> 결제 수단은 무엇인가요?</h4>
            <p>신용카드(KG이니시스) 결제를 지원합니다.</p>
          </div>
          <div className="faq-item">
            <h4><i className="fa-solid fa-q" /> 이용 기간은 언제부터 시작되나요?</h4>
            <p>결제 완료 시점부터 시작됩니다. 시험 회차에 맞춰 3개월/6개월/12개월 중 선택하세요.</p>
          </div>
          <div className="faq-item">
            <h4><i className="fa-solid fa-q" /> 환불 규정은 어떻게 되나요?</h4>
            <p>결제 후 7일 이내, 유료 콘텐츠 이용 이력이 없는 경우 전액 환불 가능합니다.</p>
          </div>
          <div className="faq-item">
            <h4><i className="fa-solid fa-q" /> 여러 기기에서 사용 가능한가요?</h4>
            <p>네, 동일 계정으로 로그인하면 PC, 태블릿, 모바일 어디서든 이용 가능합니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
