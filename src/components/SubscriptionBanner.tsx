import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../contexts/SubscriptionContext';

export default function SubscriptionBanner() {
  const { user } = useAuth();
  const { hasAccess, expiringSoon, expiresAt, freeTrialRemaining, loading } = useSubscription();

  if (loading || !user) return null;

  // 만료 임박
  if (hasAccess && expiringSoon && expiresAt) {
    const daysLeft = Math.ceil((expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    return (
      <div className="sub-banner sub-banner--warning">
        <div className="container sub-banner-inner">
          <span>
            <i className="fa-solid fa-clock" /> 이용권이 <strong>{daysLeft}일</strong> 후 만료됩니다.
          </span>
          <Link to="/about/pricing" className="btn btn-sm btn-primary">연장하기</Link>
        </div>
      </div>
    );
  }

  // 무료 체험 안내 (비구독 + 체험 가능)
  if (!hasAccess && freeTrialRemaining > 0) {
    return (
      <div className="sub-banner sub-banner--info">
        <div className="container sub-banner-inner">
          <span>
            <i className="fa-solid fa-gift" /> 필기 CBT <strong>1회 무료 체험</strong>이 가능합니다!
          </span>
          <div className="sub-banner-btns">
            <Link to="/pilgi/select" className="btn btn-sm btn-primary">무료 체험</Link>
            <Link to="/coupon" className="btn btn-sm btn-coupon">쿠폰 등록</Link>
          </div>
        </div>
      </div>
    );
  }

  // 구독 없음 (체험도 끝남)
  if (!hasAccess && freeTrialRemaining === 0) {
    return (
      <div className="sub-banner sub-banner--upgrade">
        <div className="container sub-banner-inner">
          <span>
            <i className="fa-solid fa-crown" /> 이용권을 구매하면 모든 학습 콘텐츠를 이용할 수 있습니다.
          </span>
          <div className="sub-banner-btns">
            <Link to="/about/pricing" className="btn btn-sm btn-primary">요금제 보기</Link>
            <Link to="/coupon" className="btn btn-sm btn-coupon">쿠폰 등록</Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
