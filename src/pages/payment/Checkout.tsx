import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { useToast } from '../../contexts/ToastContext';
import { requestPayment } from '../../utils/portone';
import { supabase, TABLES } from '../../lib/supabase';
import { PLANS } from '../../config/site';

function generateOrderNumber() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `JP-${ymd}-${rand}`;
}

function CheckoutContent() {
  const { user } = useAuth();
  const { items, clearCart, cartTotal, addItem, removeItem } = useCart();
  const { refresh } = useSubscription();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.user_metadata?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleAddPlan = (planId: string) => {
    addItem(planId);
    setSelectedPlan('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      showToast('이용권을 선택해 주세요.', 'error');
      return;
    }
    if (!name.trim() || !email.trim() || !phone.trim()) {
      showToast('주문자 정보를 모두 입력해 주세요.', 'error');
      return;
    }

    setProcessing(true);
    const orderNumber = generateOrderNumber();

    try {
      // PortOne 결제 요청
      const result = await requestPayment({
        orderNumber,
        name: items.map(i => i.label).join(', '),
        amount: cartTotal,
        buyerName: name,
        buyerEmail: email,
        buyerTel: phone,
        payMethod: 'card',
      });

      if (!result.success) {
        showToast(result.error || '결제에 실패했습니다.', 'error');
        setProcessing(false);
        return;
      }

      // Supabase에 주문 저장
      const now = new Date();
      for (const item of items) {
        const expiresAt = item.days
          ? new Date(now.getTime() + item.days * 24 * 60 * 60 * 1000).toISOString()
          : null;

        await supabase.from(TABLES.ORDERS).insert({
          order_number: orderNumber,
          user_id: user!.id,
          user_email: email,
          user_name: name,
          user_phone: phone,
          plan_type: item.id,
          total_amount: item.price,
          payment_method: 'card',
          payment_status: 'paid',
          portone_payment_id: result.paymentId,
          paid_at: now.toISOString(),
          expires_at: expiresAt,
        });
      }

      clearCart();
      await refresh();
      showToast('결제가 완료되었습니다!', 'success');
      navigate('/confirmation', { state: { orderNumber, items, total: cartTotal, paidAt: now.toISOString() } });
    } catch (err: any) {
      console.error(err);
      showToast('결제 처리 중 오류가 발생했습니다.', 'error');
    }
    setProcessing(false);
  };

  return (
    <>
      <SEOHead title="결제" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-credit-card" /> 결제</h1>
          <p className="page-desc">이용권을 선택하고 결제를 진행하세요</p>
        </div>
      </div>

      <div className="container checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          {/* 이용권 선택 */}
          <div className="checkout-section">
            <h2><i className="fa-solid fa-tags" /> 이용권 선택</h2>
            <div className="checkout-plans">
              {PLANS.map(plan => {
                const inCart = items.find(i => i.id === plan.id);
                return (
                  <div key={plan.id} className={`checkout-plan-card${inCart ? ' selected' : ''}${plan.recommended ? ' recommended' : ''}`}>
                    <div className="checkout-plan-info">
                      <h3>{plan.label}</h3>
                      <p>{(plan as any).desc || `${Math.round((plan.days || 0) / 30)}개월간 이용`}</p>
                    </div>
                    <div className="checkout-plan-price">{plan.price.toLocaleString()}원</div>
                    {inCart ? (
                      <button type="button" className="btn btn-sm btn-secondary" onClick={() => removeItem(plan.id)}>
                        <i className="fa-solid fa-xmark" /> 제거
                      </button>
                    ) : (
                      <button type="button" className="btn btn-sm btn-primary" onClick={() => handleAddPlan(plan.id)}>
                        <i className="fa-solid fa-plus" /> 추가
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 장바구니 요약 */}
          {items.length > 0 && (
            <div className="checkout-section">
              <h2><i className="fa-solid fa-cart-shopping" /> 주문 내역</h2>
              <div className="checkout-summary">
                {items.map(item => (
                  <div key={item.id} className="checkout-summary-item">
                    <span>{item.label}</span>
                    <span>{item.price.toLocaleString()}원</span>
                  </div>
                ))}
                <div className="checkout-summary-total">
                  <strong>합계</strong>
                  <strong>{cartTotal.toLocaleString()}원</strong>
                </div>
              </div>
            </div>
          )}

          {/* 주문자 정보 */}
          <div className="checkout-section">
            <h2><i className="fa-solid fa-user" /> 주문자 정보</h2>
            <div className="checkout-fields">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="이메일을 입력하세요" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">전화번호</label>
                <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="010-0000-0000" />
              </div>
            </div>
          </div>

          {/* 결제 버튼 */}
          <button type="submit" className="btn btn-primary btn-block btn-lg checkout-submit" disabled={processing || items.length === 0}>
            {processing ? (
              <><i className="fa-solid fa-spinner fa-spin" /> 결제 처리 중...</>
            ) : (
              <><i className="fa-solid fa-lock" /> {cartTotal.toLocaleString()}원 결제하기</>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default function Checkout() {
  return (
    <AuthGuard>
      <CheckoutContent />
    </AuthGuard>
  );
}
