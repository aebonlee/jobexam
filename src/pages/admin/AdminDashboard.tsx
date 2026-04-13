import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import { supabase, TABLES } from '../../lib/supabase';
import { useToast } from '../../contexts/ToastContext';
import '../../styles/admin.css';

function generateCouponCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `JP-${code}`;
}

type Tab = 'members' | 'orders' | 'coupons';

export default function AdminDashboard() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Tab>('members');
  const [orders, setOrders] = useState<any[]>([]);
  const [coupons, setCoupons] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [redemptions, setRedemptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [couponQty, setCouponQty] = useState(10);
  const [couponDays, setCouponDays] = useState(1);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [ordersRes, couponsRes, profilesRes, redemptionsRes] = await Promise.all([
      supabase.from(TABLES.ORDERS).select('*').order('created_at', { ascending: false }),
      supabase.from(TABLES.COUPONS).select('*').order('created_at', { ascending: false }),
      supabase.from(TABLES.PROFILES).select('*').order('created_at', { ascending: false }),
      supabase.from(TABLES.COUPON_REDEMPTIONS).select('*').order('created_at', { ascending: false }),
    ]);
    if (ordersRes.data) setOrders(ordersRes.data);
    if (couponsRes.data) setCoupons(couponsRes.data);
    if (redemptionsRes.data) setRedemptions(redemptionsRes.data);

    // 회원 목록: 프로필 + 주문 + 쿠폰 사용 기록에서 통합
    const emailMap: Record<string, { email: string; firstSeen: string; source: string }> = {};
    (profilesRes.data || []).forEach((p: any) => {
      const e = (p.email || '').toLowerCase();
      if (e && !emailMap[e]) emailMap[e] = { email: e, firstSeen: p.created_at, source: '가입' };
    });
    (ordersRes.data || []).forEach((o: any) => {
      const e = (o.user_email || '').toLowerCase();
      if (e && !emailMap[e]) emailMap[e] = { email: e, firstSeen: o.created_at, source: '주문' };
    });
    (redemptionsRes.data || []).forEach((r: any) => {
      const e = (r.user_email || '').toLowerCase();
      if (e && !emailMap[e]) emailMap[e] = { email: e, firstSeen: r.created_at, source: '쿠폰' };
    });
    setMembers(Object.values(emailMap).sort((a, b) => new Date(b.firstSeen).getTime() - new Date(a.firstSeen).getTime()));
    setLoading(false);
  };

  // Stats
  const uniqueEmails = members;
  const totalRevenue = orders
    .filter(o => o.payment_status === 'paid')
    .reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const activeCoupons = coupons.filter(c => c.is_active && c.used_count < c.max_uses).length;

  // Generate coupons
  const handleGenerateCoupons = async () => {
    if (couponQty < 1 || couponQty > 100) {
      showToast('1~100 사이의 수량을 입력해주세요.', 'error');
      return;
    }
    setGenerating(true);
    const planType = couponDays === 1 ? '1day_trial' : `${couponDays}day`;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 90); // 쿠폰 자체 유효기한 90일
    const newCoupons = Array.from({ length: couponQty }, () => ({
      code: generateCouponCode(),
      plan_type: planType,
      days: couponDays,
      max_uses: 1,
      used_count: 0,
      is_active: true,
      expires_at: expiresAt.toISOString().split('T')[0],
      created_by: 'admin',
    }));

    const { error } = await supabase.from(TABLES.COUPONS).insert(newCoupons);
    if (error) {
      showToast('쿠폰 생성 실패: ' + error.message, 'error');
    } else {
      showToast(`${couponQty}개 쿠폰이 생성되었습니다.`, 'success');
      loadData();
    }
    setGenerating(false);
  };

  const handleDeactivateCoupon = async (id: string) => {
    const { error } = await supabase.from(TABLES.COUPONS).update({ is_active: false }).eq('id', id);
    if (error) {
      showToast('비활성화 실패', 'error');
    } else {
      showToast('쿠폰이 비활성화되었습니다.', 'success');
      setCoupons(prev => prev.map(c => c.id === id ? { ...c, is_active: false } : c));
    }
  };

  const handleCopyAllCodes = () => {
    const activeCodes = coupons.filter(c => c.is_active && c.used_count < c.max_uses).map(c => c.code);
    if (activeCodes.length === 0) {
      showToast('복사할 활성 쿠폰이 없습니다.', 'error');
      return;
    }
    navigator.clipboard.writeText(activeCodes.join('\n'));
    showToast(`${activeCodes.length}개 쿠폰 코드가 복사되었습니다.`, 'success');
  };

  const STATUS_LABELS: Record<string, { text: string; cls: string }> = {
    paid: { text: '결제완료', cls: 'pass' },
    pending: { text: '대기중', cls: '' },
    failed: { text: '실패', cls: 'fail' },
    cancelled: { text: '취소', cls: 'fail' },
    refunded: { text: '환불', cls: 'fail' },
  };

  const PLAN_LABELS: Record<string, string> = {
    '3month': '3개월 이용권',
    '6month': '6개월 이용권',
    '12month': '12개월 이용권',
    '30day': '30일 이용권',
    '90day': '90일 이용권',
    'lifetime': '평생 이용권',
    '1day_trial': '1일 체험 이용권',
    '1day': '1일 이용권',
    '3day': '3일 이용권',
    '7day': '7일 이용권',
    '10day': '10일 이용권',
    '14day': '14일 이용권',
    '60day': '60일 이용권',
    '365day': '365일 이용권',
  };

  if (loading) {
    return (
      <div className="loading-page"><div className="loading-spinner" /></div>
    );
  }

  return (
    <>
      <SEOHead title="관리자 대시보드" />

      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-shield-halved" /> 관리자 대시보드</h1>
          <p className="page-desc">회원, 주문, 쿠폰을 관리하세요</p>
        </div>
      </div>

      <div className="container admin-dashboard">
        {/* Stats */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-icon"><i className="fa-solid fa-users" /></div>
            <div className="admin-stat-value">{members.length}</div>
            <div className="admin-stat-label">총 회원수</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon"><i className="fa-solid fa-receipt" /></div>
            <div className="admin-stat-value">{orders.length}</div>
            <div className="admin-stat-label">총 주문수</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon"><i className="fa-solid fa-won-sign" /></div>
            <div className="admin-stat-value">{totalRevenue.toLocaleString()}</div>
            <div className="admin-stat-label">총 매출</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon"><i className="fa-solid fa-ticket" /></div>
            <div className="admin-stat-value">{activeCoupons}</div>
            <div className="admin-stat-label">활성 쿠폰</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="admin-tabs">
          <button className={`admin-tab ${activeTab === 'members' ? 'active' : ''}`} onClick={() => setActiveTab('members')}>
            <i className="fa-solid fa-users" /> 회원 관리
          </button>
          <button className={`admin-tab ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
            <i className="fa-solid fa-receipt" /> 주문 관리
          </button>
          <button className={`admin-tab ${activeTab === 'coupons' ? 'active' : ''}`} onClick={() => setActiveTab('coupons')}>
            <i className="fa-solid fa-ticket" /> 쿠폰 관리
          </button>
        </div>

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="admin-panel">
            <h2>회원 목록 ({members.length}명)</h2>
            {members.length === 0 ? (
              <p className="admin-empty">등록된 회원이 없습니다.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>이메일</th>
                      <th>가입경로</th>
                      <th>주문수</th>
                      <th>쿠폰</th>
                      <th>최초 확인일</th>
                      <th>이용 상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map(member => {
                      const email = member.email;
                      const userOrders = orders.filter(o => (o.user_email || '').toLowerCase() === email);
                      const paidOrders = userOrders.filter(o => o.payment_status === 'paid');
                      const latestPaid = paidOrders[0];
                      const orderActive = latestPaid?.expires_at && new Date(latestPaid.expires_at) > new Date();
                      const userRedemptions = redemptions.filter(r => (r.user_email || '').toLowerCase() === email);
                      // 쿠폰 기반 접근 확인
                      let couponActive = false;
                      if (userRedemptions.length > 0) {
                        const couponIds = [...new Set(userRedemptions.map(r => r.coupon_id))];
                        for (const r of userRedemptions) {
                          const cp = coupons.find(c => c.id === r.coupon_id);
                          const days = cp?.days || 1;
                          const exp = new Date(new Date(r.created_at).getTime() + days * 86400000);
                          if (exp > new Date()) { couponActive = true; break; }
                        }
                      }
                      const isActive = orderActive || couponActive;
                      return (
                        <tr key={email}>
                          <td>{email}</td>
                          <td><span className="table-badge">{member.source}</span></td>
                          <td>{userOrders.length}</td>
                          <td>{userRedemptions.length}</td>
                          <td>{new Date(member.firstSeen).toLocaleDateString('ko-KR')}</td>
                          <td>
                            <span className={`table-badge ${isActive ? 'pass' : ''}`}>
                              {isActive ? (couponActive && !orderActive ? '쿠폰 이용중' : '이용중') : '만료/없음'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="admin-panel">
            <h2>주문 목록</h2>
            {orders.length === 0 ? (
              <p className="admin-empty">주문이 없습니다.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>주문번호</th>
                      <th>이메일</th>
                      <th>플랜</th>
                      <th>금액</th>
                      <th>상태</th>
                      <th>결제일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => {
                      const status = STATUS_LABELS[order.payment_status] || { text: order.payment_status, cls: '' };
                      return (
                        <tr key={order.id}>
                          <td className="order-num-cell">{order.order_number}</td>
                          <td>{order.user_email || '-'}</td>
                          <td>{PLAN_LABELS[order.plan_type] || order.plan_type}</td>
                          <td>{(order.total_amount || 0).toLocaleString()}원</td>
                          <td><span className={`table-badge ${status.cls}`}>{status.text}</span></td>
                          <td>{new Date(order.created_at).toLocaleDateString('ko-KR')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Coupons Tab */}
        {activeTab === 'coupons' && (
          <div className="admin-panel">
            <h2>쿠폰 관리</h2>

            <div className="admin-coupon-form">
              <h3><i className="fa-solid fa-plus" /> 쿠폰 발행</h3>
              <div className="coupon-form-row">
                <label>이용 기간:</label>
                <select
                  value={couponDays}
                  onChange={e => setCouponDays(Number(e.target.value))}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '14px' }}
                >
                  <option value={1}>1일</option>
                  <option value={3}>3일</option>
                  <option value={7}>7일</option>
                  <option value={10}>10일</option>
                  <option value={14}>14일</option>
                  <option value={30}>30일</option>
                  <option value={60}>60일</option>
                  <option value={90}>90일</option>
                  <option value={365}>365일</option>
                </select>
                <label>발행 수량:</label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={couponQty}
                  onChange={e => setCouponQty(Number(e.target.value))}
                  className="coupon-qty-input"
                />
                <button className="btn btn-primary" onClick={handleGenerateCoupons} disabled={generating}>
                  {generating ? '생성 중...' : '쿠폰 생성'}
                </button>
                <button className="btn btn-secondary" onClick={handleCopyAllCodes}>
                  <i className="fa-solid fa-copy" /> 활성 코드 복사
                </button>
              </div>
              <p className="coupon-form-note">{couponDays}일 이용권 (1회용) 쿠폰이 생성됩니다.</p>
            </div>

            {coupons.length === 0 ? (
              <p className="admin-empty">발행된 쿠폰이 없습니다.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>코드</th>
                      <th>이용기간</th>
                      <th>사용/최대</th>
                      <th>상태</th>
                      <th>생성일</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coupons.map(coupon => (
                      <tr key={coupon.id}>
                        <td className="coupon-code-cell">{coupon.code}</td>
                        <td>{coupon.days || 1}일</td>
                        <td>{coupon.used_count}/{coupon.max_uses}</td>
                        <td>
                          <span className={`table-badge ${coupon.is_active && coupon.used_count < coupon.max_uses ? 'pass' : 'fail'}`}>
                            {!coupon.is_active ? '비활성' : coupon.used_count >= coupon.max_uses ? '소진' : '활성'}
                          </span>
                        </td>
                        <td>{new Date(coupon.created_at).toLocaleDateString('ko-KR')}</td>
                        <td>
                          {coupon.is_active && coupon.used_count < coupon.max_uses && (
                            <button className="btn-sm btn-danger" onClick={() => handleDeactivateCoupon(coupon.id)}>
                              비활성화
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
