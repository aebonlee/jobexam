import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, TABLES } from '../../lib/supabase';

const STATUS_LABELS: Record<string, { text: string; cls: string }> = {
  paid: { text: '결제완료', cls: 'pass' },
  pending: { text: '대기중', cls: '' },
  failed: { text: '실패', cls: 'fail' },
  cancelled: { text: '취소', cls: 'fail' },
  refunded: { text: '환불', cls: 'fail' },
};

function OrderHistoryContent() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    loadOrders();
  }, [user]);

  const loadOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(TABLES.ORDERS)
      .select('*')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false });

    if (!error) setOrders(data || []);
    setLoading(false);
  };

  return (
    <>
      <SEOHead title="주문 내역" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-receipt" /> 주문 내역</h1>
          <p className="page-desc">결제 및 이용권 내역을 확인하세요</p>
        </div>
      </div>

      <div className="container checkout-container">
        {loading ? (
          <div className="loading-page"><div className="loading-spinner" /></div>
        ) : orders.length === 0 ? (
          <div className="checkout-empty">
            <i className="fa-solid fa-receipt" style={{ fontSize: 48, opacity: 0.3, marginBottom: 16 }} />
            <p>주문 내역이 없습니다.</p>
            <Link to="/about/pricing" className="btn btn-primary" style={{ marginTop: 16 }}>요금제 보기</Link>
          </div>
        ) : (
          <div className="order-list">
            {orders.map(order => {
              const status = STATUS_LABELS[order.payment_status] || { text: order.payment_status, cls: '' };
              const isActive = order.payment_status === 'paid' &&
                order.expires_at && new Date(order.expires_at) > new Date();

              return (
                <div key={order.id} className="order-card">
                  <div className="order-card-header">
                    <div>
                      <span className="order-number">{order.order_number}</span>
                      <span className="order-date">{new Date(order.created_at).toLocaleDateString('ko-KR')}</span>
                    </div>
                    <span className={`table-badge ${status.cls}`}>{status.text}</span>
                  </div>
                  <div className="order-card-body">
                    <div className="order-plan">
                      <strong>
                        {order.plan_type === '3month' && '3개월 이용권'}
                        {order.plan_type === '6month' && '6개월 이용권'}
                        {order.plan_type === '12month' && '12개월 이용권'}
                        {order.plan_type === '30day' && '30일 이용권'}
                        {order.plan_type === '90day' && '90일 이용권'}
                        {order.plan_type === 'lifetime' && '평생 이용권'}
                        {order.plan_type === '1day_trial' && '1일 체험 이용권'}
                      </strong>
                      {isActive && <span className="badge-active">이용중</span>}
                    </div>
                    <div className="order-amount">{order.total_amount?.toLocaleString()}원</div>
                  </div>
                  {order.expires_at && order.payment_status === 'paid' && (
                    <div className="order-card-footer">
                      만료: {new Date(order.expires_at).toLocaleDateString('ko-KR')}
                      {isActive && ` (${Math.ceil((new Date(order.expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24))}일 남음)`}
                    </div>
                  )}
                  {/* 기존 평생 이용권 호환 */}
                  {order.plan_type === 'lifetime' && order.payment_status === 'paid' && !order.expires_at && (
                    <div className="order-card-footer">기간 제한 없음 (평생)</div>
                  )}
                  {order.cancel_reason && (
                    <div className="order-card-footer cancel">
                      취소 사유: {order.cancel_reason}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default function OrderHistory() {
  return (
    <AuthGuard>
      <OrderHistoryContent />
    </AuthGuard>
  );
}
