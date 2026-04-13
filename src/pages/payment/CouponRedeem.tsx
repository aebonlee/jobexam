import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';
import { useAuth } from '../../contexts/AuthContext';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { useToast } from '../../contexts/ToastContext';
import { supabase, TABLES } from '../../lib/supabase';
import '../../styles/admin.css';

function CouponRedeemContent() {
  const { user } = useAuth();
  const { refresh, grantAccess } = useSubscription();
  const { showToast } = useToast();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [couponDays, setCouponDays] = useState(1);

  const handleRedeem = async () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      showToast('쿠폰 코드를 입력해주세요.', 'error');
      return;
    }

    setLoading(true);

    // 1. Find coupon
    const { data: coupon, error: findErr } = await supabase
      .from(TABLES.COUPONS)
      .select('*')
      .eq('code', trimmed)
      .single();

    if (findErr || !coupon) {
      showToast('유효하지 않은 쿠폰 코드입니다.', 'error');
      setLoading(false);
      return;
    }

    // 2. Validate
    if (!coupon.is_active) {
      showToast('비활성화된 쿠폰입니다.', 'error');
      setLoading(false);
      return;
    }
    if (coupon.used_count >= coupon.max_uses) {
      showToast('이미 모두 사용된 쿠폰입니다.', 'error');
      setLoading(false);
      return;
    }
    if (coupon.expires_at && new Date(coupon.expires_at) < new Date()) {
      showToast('만료된 쿠폰입니다.', 'error');
      setLoading(false);
      return;
    }

    // 3. Check if user already used this coupon
    const { data: existing } = await supabase
      .from(TABLES.COUPON_REDEMPTIONS)
      .select('id')
      .eq('coupon_id', coupon.id)
      .eq('user_id', user!.id)
      .limit(1);

    if (existing && existing.length > 0) {
      showToast('이미 사용한 쿠폰입니다.', 'error');
      setLoading(false);
      return;
    }

    // 4. Record redemption
    const { error: redeemErr } = await supabase
      .from(TABLES.COUPON_REDEMPTIONS)
      .insert({
        coupon_id: coupon.id,
        user_id: user!.id,
        user_email: user!.email || user!.user_metadata?.email || '',
      });

    if (redeemErr) {
      showToast('쿠폰 등록에 실패했습니다.', 'error');
      setLoading(false);
      return;
    }

    // 5. Increment used_count
    await supabase
      .from(TABLES.COUPONS)
      .update({ used_count: coupon.used_count + 1 })
      .eq('id', coupon.id);

    // 6. Create order with coupon duration
    const couponDays = coupon.days || 1;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + couponDays * 24 * 60 * 60 * 1000);
    const orderNumber = `CP-${Date.now()}`;
    const planType = couponDays === 1 ? '1day_trial' : `${couponDays}day`;

    const { error: orderErr } = await supabase.from(TABLES.ORDERS).insert({
      user_id: user!.id,
      user_email: user!.email || user!.user_metadata?.email || '',
      order_number: orderNumber,
      plan_type: planType,
      total_amount: 0,
      payment_method: 'coupon',
      payment_status: 'paid',
      paid_at: now.toISOString(),
      expires_at: expiresAt.toISOString(),
    });

    if (orderErr) {
      console.error('Order creation error:', orderErr);
    }

    // 7. 즉시 접근 권한 부여 (DB 쿼리 의존 없이)
    grantAccess(expiresAt, { plan_type: planType, payment_method: 'coupon' });
    // 백그라운드로 refresh도 시도
    refresh().catch(() => {});

    showToast(`쿠폰이 등록되었습니다! ${couponDays}일 이용권이 활성화되었습니다.`, 'success');
    setSuccess(true);
    setCouponDays(couponDays);
    setLoading(false);
  };

  return (
    <>
      <SEOHead title="쿠폰 등록" description="쿠폰 코드를 입력하여 이용권을 활성화하세요" />

      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-ticket" /> 쿠폰 등록</h1>
          <p className="page-desc">쿠폰 코드를 입력하여 이용권을 활성화하세요</p>
        </div>
      </div>

      <div className="container">
        <div className="coupon-redeem">
          {success ? (
            <div className="coupon-success">
              <i className="fa-solid fa-circle-check" />
              <h2>쿠폰 등록 완료!</h2>
              <p>{couponDays}일 이용권이 활성화되었습니다.</p>
              <div className="coupon-success-actions">
                <Link to="/pilgi/select" className="btn btn-primary">필기 CBT 시작</Link>
                <Link to="/orders" className="btn btn-secondary">주문 내역 확인</Link>
              </div>
            </div>
          ) : (
            <div className="coupon-form-card">
              <div className="coupon-form-icon">
                <i className="fa-solid fa-gift" />
              </div>
              <h2>쿠폰 코드 입력</h2>
              <p>홍보용 무료 체험 쿠폰 코드를 입력해주세요.</p>
              <div className="coupon-input-group">
                <input
                  type="text"
                  value={code}
                  onChange={e => setCode(e.target.value.toUpperCase())}
                  placeholder="예: JP-XXXXXXXX"
                  className="coupon-input"
                  maxLength={20}
                  disabled={loading}
                  onKeyDown={e => e.key === 'Enter' && handleRedeem()}
                />
                <button className="btn btn-primary" onClick={handleRedeem} disabled={loading}>
                  {loading ? '확인 중...' : '등록하기'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function CouponRedeem() {
  return (
    <AuthGuard>
      <CouponRedeemContent />
    </AuthGuard>
  );
}
