import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../contexts/SubscriptionContext';
import type { ReactNode } from 'react';

interface PaidGuardProps {
  children: ReactNode;
  allowFreeTrial?: boolean;
}

export default function PaidGuard({ children, allowFreeTrial = false }: PaidGuardProps) {
  const { user, loading: authLoading } = useAuth();
  const { hasAccess, freeTrialRemaining, loading: subLoading } = useSubscription();

  if (authLoading || subLoading) {
    return <div className="loading-page"><div className="loading-spinner" /></div>;
  }

  if (!user) {
    return (
      <div className="paid-guard-block">
        <div className="paid-guard-card">
          <i className="fa-solid fa-lock" />
          <h2>로그인이 필요합니다</h2>
          <p>이 콘텐츠를 이용하려면 로그인해 주세요.</p>
          <Link to="/login" className="btn btn-primary">로그인</Link>
        </div>
      </div>
    );
  }

  // 최고관리자 바이패스
  const email = (user.email || '').toLowerCase();
  if (email === 'aebon@kakao.com' || email === 'aebon@kyonggi.ac.kr') {
    return <>{children}</>;
  }

  // 유료 접근 권한 있음
  if (hasAccess) {
    return <>{children}</>;
  }

  // 무료 체험 허용 & 잔여 횟수 있음
  if (allowFreeTrial && freeTrialRemaining > 0) {
    return <>{children}</>;
  }

  return (
    <div className="paid-guard-block">
      <div className="paid-guard-card">
        <i className="fa-solid fa-crown" />
        <h2>유료 콘텐츠입니다</h2>
        <p>
          {allowFreeTrial
            ? '무료 체험을 모두 사용했습니다. 이용권을 구매하시면 모든 콘텐츠를 이용할 수 있습니다.'
            : '이 콘텐츠를 이용하려면 이용권을 구매해 주세요.'}
        </p>
        <div className="paid-guard-actions">
          <Link to="/about/pricing" className="btn btn-primary">요금제 보기</Link>
          <Link to="/checkout" className="btn btn-secondary">바로 구매</Link>
        </div>
      </div>
    </div>
  );
}
