import { useState, useEffect, useMemo } from 'react';
import SEOHead from '../../components/SEOHead';
import { supabase, TABLES } from '../../lib/supabase';
import { useToast } from '../../contexts/ToastContext';
import { RadarChart, BarChart } from '../../components/ScoreChart';
import { SUBJECTS } from '../../config/site';
import '../../styles/admin.css';

function generateCouponCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `JP-${code}`;
}

type Tab = 'members' | 'orders' | 'coupons' | 'progress';

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
  const [orderFilter, setOrderFilter] = useState('all');
  const [orderSearch, setOrderSearch] = useState('');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [cancelMemo, setCancelMemo] = useState('');
  const [updatingOrder, setUpdatingOrder] = useState(false);

  // 회원 학습현황 state
  const [progressSearch, setProgressSearch] = useState('');
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [memberPilgi, setMemberPilgi] = useState<any[]>([]);
  const [memberSilgi, setMemberSilgi] = useState<any[]>([]);
  const [memberAvgScores, setMemberAvgScores] = useState<Record<string, number>>({});
  const [progressLoading, setProgressLoading] = useState(false);

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
    if (ordersRes.error) console.error('[Admin] orders 조회 오류:', ordersRes.error.message);
    if (couponsRes.error) console.error('[Admin] coupons 조회 오류:', couponsRes.error.message);
    if (profilesRes.error) console.error('[Admin] profiles 조회 오류:', profilesRes.error.message);
    if (redemptionsRes.error) console.error('[Admin] redemptions 조회 오류:', redemptionsRes.error.message);

    if (ordersRes.data) setOrders(ordersRes.data);
    if (couponsRes.data) setCoupons(couponsRes.data);
    if (redemptionsRes.data) setRedemptions(redemptionsRes.data);

    // 회원 목록: 프로필 기반 + 주문/쿠폰 데이터 보강
    const emailMap: Record<string, { email: string; name: string; phone: string; firstSeen: string; lastActivity: string; source: string }> = {};

    // 프로필에서 시작 (모든 가입자)
    (profilesRes.data || []).forEach((p: any) => {
      const e = (p.email || '').toLowerCase();
      if (!e) return;
      emailMap[e] = { email: e, name: p.name || '', phone: '', firstSeen: p.created_at, lastActivity: p.created_at, source: '가입' };
    });

    // 주문에서 보강 (전화번호, 이름, 마지막활동일)
    (ordersRes.data || []).forEach((o: any) => {
      const e = (o.user_email || '').toLowerCase();
      if (!e) return;
      if (!emailMap[e]) {
        emailMap[e] = { email: e, name: o.user_name || '', phone: o.user_phone || '', firstSeen: o.created_at, lastActivity: o.created_at, source: '주문' };
      } else {
        if (!emailMap[e].name && o.user_name) emailMap[e].name = o.user_name;
        if (!emailMap[e].phone && o.user_phone) emailMap[e].phone = o.user_phone;
        if (new Date(o.created_at) > new Date(emailMap[e].lastActivity)) emailMap[e].lastActivity = o.created_at;
      }
    });

    // 쿠폰 사용에서 보강
    (redemptionsRes.data || []).forEach((r: any) => {
      const e = (r.user_email || '').toLowerCase();
      if (!e) return;
      if (!emailMap[e]) {
        emailMap[e] = { email: e, name: '', phone: '', firstSeen: r.created_at, lastActivity: r.created_at, source: '쿠폰' };
      } else {
        if (new Date(r.created_at) > new Date(emailMap[e].lastActivity)) emailMap[e].lastActivity = r.created_at;
      }
    });

    setMembers(Object.values(emailMap).sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()));
    setLoading(false);
  };

  // Stats
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
    expiresAt.setDate(expiresAt.getDate() + 90);
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

  // 주문 관리 함수
  const handleOrderStatusChange = async (orderId: string, newStatus: string, reason = '') => {
    setUpdatingOrder(true);
    try {
      const updatePayload: any = { payment_status: newStatus };
      if (newStatus === 'paid') updatePayload.paid_at = new Date().toISOString();
      if (newStatus === 'cancelled' || newStatus === 'refunded') {
        updatePayload.cancelled_at = new Date().toISOString();
        if (reason) updatePayload.cancel_reason = reason;
      }
      const { error } = await supabase.from(TABLES.ORDERS).update(updatePayload).eq('id', orderId);
      if (error) throw error;
      showToast('주문 상태가 변경되었습니다.', 'success');
      setExpandedOrder(null);
      setCancelMemo('');
      loadData();
    } catch (err: any) {
      showToast(`상태 변경 실패: ${err?.message || '알 수 없는 오류'}`, 'error');
      console.error('Order status update error:', err);
    }
    setUpdatingOrder(false);
  };

  const orderSummary = useMemo(() => {
    const paid = orders.filter(o => o.payment_status === 'paid');
    const cancelled = orders.filter(o => o.payment_status === 'cancelled');
    const refunded = orders.filter(o => o.payment_status === 'refunded');
    return {
      total: orders.length,
      paidCount: paid.length,
      paidAmount: paid.reduce((s, o) => s + (o.total_amount || 0), 0),
      cancelledCount: cancelled.length,
      refundedCount: refunded.length,
    };
  }, [orders]);

  const filteredOrders = useMemo(() => {
    let list = orders;
    if (orderFilter !== 'all') list = list.filter(o => (o.payment_status || 'pending') === orderFilter);
    if (orderSearch.trim()) {
      const q = orderSearch.toLowerCase();
      list = list.filter(o =>
        (o.order_number || '').toLowerCase().includes(q) ||
        (o.user_email || '').toLowerCase().includes(q) ||
        (o.user_name || '').toLowerCase().includes(q)
      );
    }
    return list;
  }, [orders, orderFilter, orderSearch]);

  // 회원 학습현황: 회원 선택 시 데이터 로드
  const handleSelectMember = async (member: any) => {
    setSelectedMember(member);
    setProgressLoading(true);
    try {
      // 프로필에서 user_id 조회
      const { data: profile } = await supabase
        .from(TABLES.PROFILES)
        .select('id')
        .eq('email', member.email)
        .single();

      if (!profile) {
        showToast('해당 회원의 프로필을 찾을 수 없습니다.', 'error');
        setMemberPilgi([]);
        setMemberSilgi([]);
        setMemberAvgScores({});
        setProgressLoading(false);
        return;
      }

      const [pilgiRes, silgiRes] = await Promise.all([
        supabase.from(TABLES.EXAM_SESSIONS).select('*')
          .eq('user_id', profile.id)
          .eq('exam_type', 'pilgi')
          .not('completed_at', 'is', null)
          .order('completed_at', { ascending: false }),
        supabase.from(TABLES.EXAM_SESSIONS).select('*')
          .eq('user_id', profile.id)
          .eq('exam_type', 'silgi_practice')
          .not('completed_at', 'is', null)
          .order('completed_at', { ascending: false }),
      ]);

      const pilgiData = pilgiRes.data || [];
      const silgiData = silgiRes.data || [];
      setMemberPilgi(pilgiData);
      setMemberSilgi(silgiData);

      // 과목별 평균 점수 계산
      const totals: Record<string, number> = {};
      const counts: Record<string, number> = {};
      SUBJECTS.forEach(s => { totals[s.code] = 0; counts[s.code] = 0; });
      pilgiData.forEach((session: any) => {
        if (session.score_by_subject) {
          Object.entries(session.score_by_subject).forEach(([code, score]) => {
            totals[code] = (totals[code] || 0) + (score as number);
            counts[code] = (counts[code] || 0) + 1;
          });
        }
      });
      const avgs: Record<string, number> = {};
      SUBJECTS.forEach(s => {
        avgs[s.code] = counts[s.code] ? Math.round(totals[s.code] / counts[s.code]) : 0;
      });
      setMemberAvgScores(avgs);
    } catch (err) {
      console.error('회원 학습현황 로드 오류:', err);
      showToast('학습현황 로드에 실패했습니다.', 'error');
    }
    setProgressLoading(false);
  };

  // 회원 학습현황: 검색 필터 (이름/이메일/전화번호)
  const filteredMembers = useMemo(() => {
    if (!progressSearch.trim()) return members;
    const q = progressSearch.toLowerCase();
    return members.filter(m =>
      (m.name || '').toLowerCase().includes(q) ||
      (m.email || '').toLowerCase().includes(q) ||
      (m.phone || '').includes(q)
    );
  }, [members, progressSearch]);

  // 필기/실기 통계 계산
  const pilgiStats = useMemo(() => {
    const total = memberPilgi.length;
    const avg = total ? Math.round(memberPilgi.reduce((s, e) => s + (e.score_total || 0), 0) / total) : 0;
    const passCount = memberPilgi.filter((s: any) => s.is_pass).length;
    const passRate = total ? Math.round((passCount / total) * 100) : 0;
    return { total, avg, passCount, passRate };
  }, [memberPilgi]);

  const silgiStats = useMemo(() => {
    const total = memberSilgi.length;
    const avg = total ? Math.round(memberSilgi.reduce((s, e) => s + (e.score_total || 0), 0) / total) : 0;
    const passCount = memberSilgi.filter((s: any) => s.is_pass).length;
    const passRate = total ? Math.round((passCount / total) * 100) : 0;
    return { total, avg, passCount, passRate };
  }, [memberSilgi]);

  const weakSubjects = useMemo(() => {
    return SUBJECTS.filter(s => memberAvgScores[s.code] > 0 && memberAvgScores[s.code] < 60);
  }, [memberAvgScores]);

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
          <button className={`admin-tab ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => setActiveTab('progress')}>
            <i className="fa-solid fa-chart-line" /> 회원 학습현황
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
                      <th>이름</th>
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
                      let couponActive = false;
                      if (userRedemptions.length > 0) {
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
                          <td style={{ fontWeight: 600 }}>{member.name || '-'}</td>
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
            {/* 주문 요약 */}
            <div className="admin-order-summary">
              <div className="admin-order-summary-card">
                <span className="admin-order-summary-label">전체 주문</span>
                <span className="admin-order-summary-value">{orderSummary.total}건</span>
              </div>
              <div className="admin-order-summary-card paid">
                <span className="admin-order-summary-label">결제완료</span>
                <span className="admin-order-summary-value">{orderSummary.paidCount}건 / {orderSummary.paidAmount.toLocaleString()}원</span>
              </div>
              <div className="admin-order-summary-card cancelled">
                <span className="admin-order-summary-label">취소/환불</span>
                <span className="admin-order-summary-value">{orderSummary.cancelledCount + orderSummary.refundedCount}건</span>
              </div>
            </div>

            {/* 필터 + 검색 */}
            <div className="admin-order-toolbar">
              <div className="admin-order-filters">
                {['all', 'paid', 'pending', 'cancelled', 'refunded', 'failed'].map(f => {
                  const count = f === 'all' ? orders.length : orders.filter(o => (o.payment_status || 'pending') === f).length;
                  if (f !== 'all' && count === 0) return null;
                  const label = f === 'all' ? '전체' : (STATUS_LABELS[f]?.text || f);
                  return (
                    <button key={f} className={`admin-order-filter-btn ${orderFilter === f ? 'active' : ''}`} onClick={() => setOrderFilter(f)}>
                      {label} ({count})
                    </button>
                  );
                })}
              </div>
              <input
                type="text"
                className="admin-order-search"
                placeholder="주문번호, 이메일, 이름 검색..."
                value={orderSearch}
                onChange={e => setOrderSearch(e.target.value)}
              />
            </div>

            {filteredOrders.length === 0 ? (
              <p className="admin-empty">해당 조건의 주문이 없습니다.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>주문번호</th>
                      <th>주문자</th>
                      <th>플랜</th>
                      <th>금액</th>
                      <th>상태</th>
                      <th>만료일</th>
                      <th>결제일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map(order => {
                      const status = STATUS_LABELS[order.payment_status] || { text: order.payment_status, cls: '' };
                      const isExpanded = expandedOrder === order.id;
                      const isExpired = order.expires_at && new Date(order.expires_at) < new Date();
                      return (
                        <tbody key={order.id}>
                          <tr className={`admin-order-row ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedOrder(isExpanded ? null : order.id)} style={{ cursor: 'pointer' }}>
                            <td className="order-num-cell">{order.order_number}</td>
                            <td>{order.user_name || order.user_email?.split('@')[0] || '-'}<br /><small style={{ color: 'var(--text-light)', fontSize: '11px' }}>{order.user_email}</small></td>
                            <td>{PLAN_LABELS[order.plan_type] || order.plan_type}</td>
                            <td style={{ fontWeight: 700 }}>{(order.total_amount || 0).toLocaleString()}원</td>
                            <td><span className={`table-badge ${status.cls}`}>{status.text}</span></td>
                            <td>
                              {order.expires_at ? (
                                <span style={{ color: isExpired ? '#DC2626' : '#059669', fontWeight: 600, fontSize: '13px' }}>
                                  {new Date(order.expires_at).toLocaleDateString('ko-KR')}
                                  {isExpired ? ' (만료)' : ''}
                                </span>
                              ) : '-'}
                            </td>
                            <td>{new Date(order.created_at).toLocaleDateString('ko-KR')}</td>
                          </tr>
                          {isExpanded && (
                            <tr>
                              <td colSpan={7} style={{ padding: 0 }}>
                                <div className="admin-order-detail">
                                  <div className="admin-order-detail-info">
                                    <dl>
                                      <dt>주문번호</dt><dd>{order.order_number}</dd>
                                      <dt>이메일</dt><dd>{order.user_email || '-'}</dd>
                                      <dt>전화번호</dt><dd>{order.user_phone || '-'}</dd>
                                      <dt>결제수단</dt><dd>{order.payment_method || 'card'}</dd>
                                      {order.portone_payment_id && <><dt>결제 ID</dt><dd style={{ fontFamily: 'monospace', fontSize: '12px' }}>{order.portone_payment_id}</dd></>}
                                      {order.paid_at && <><dt>결제일시</dt><dd>{new Date(order.paid_at).toLocaleString('ko-KR')}</dd></>}
                                      {order.cancelled_at && <><dt>취소일시</dt><dd style={{ color: '#DC2626' }}>{new Date(order.cancelled_at).toLocaleString('ko-KR')}</dd></>}
                                      {order.cancel_reason && <><dt>취소사유</dt><dd style={{ color: '#DC2626' }}>{order.cancel_reason}</dd></>}
                                    </dl>
                                  </div>
                                  <div className="admin-order-actions">
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>상태 변경:</span>
                                    {['pending', 'paid', 'cancelled', 'refunded'].map(s => (
                                      <button
                                        key={s}
                                        className={`btn-sm ${order.payment_status === s ? 'active' : ''}`}
                                        disabled={order.payment_status === s || updatingOrder}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (s === 'cancelled' || s === 'refunded') {
                                            setCancelMemo('');
                                          } else {
                                            handleOrderStatusChange(order.id, s);
                                          }
                                        }}
                                        style={{
                                          background: order.payment_status === s ? 'var(--primary-blue)' : 'rgba(27,58,107,0.08)',
                                          color: order.payment_status === s ? '#fff' : 'var(--text-primary)',
                                          opacity: order.payment_status === s ? 0.6 : 1,
                                        }}
                                      >
                                        {STATUS_LABELS[s]?.text || s}
                                      </button>
                                    ))}
                                  </div>
                                  {(order.payment_status !== 'cancelled' && order.payment_status !== 'refunded') && (
                                    <div className="admin-order-cancel-form" onClick={e => e.stopPropagation()}>
                                      <input
                                        type="text"
                                        placeholder="취소/환불 사유를 입력하세요..."
                                        value={cancelMemo}
                                        onChange={e => setCancelMemo(e.target.value)}
                                        style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '13px' }}
                                      />
                                      <button
                                        className="btn-sm btn-danger"
                                        disabled={updatingOrder || !cancelMemo.trim()}
                                        onClick={() => handleOrderStatusChange(order.id, 'cancelled', cancelMemo.trim())}
                                      >
                                        취소 확정
                                      </button>
                                      <button
                                        className="btn-sm"
                                        disabled={updatingOrder || !cancelMemo.trim()}
                                        onClick={() => handleOrderStatusChange(order.id, 'refunded', cancelMemo.trim())}
                                        style={{ background: 'rgba(139,92,246,0.1)', color: '#7C3AED' }}
                                      >
                                        환불 처리
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
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

        {/* 회원 학습현황 Tab */}
        {activeTab === 'progress' && (
          <div className="admin-panel">
            <h2><i className="fa-solid fa-chart-line" /> 회원 학습현황 ({filteredMembers.length}명)</h2>

            {/* 검색바 */}
            <input
              type="text"
              className="admin-member-search"
              placeholder="이름, 이메일, 전화번호로 검색..."
              value={progressSearch}
              onChange={e => setProgressSearch(e.target.value)}
            />

            {/* 회원 목록 테이블 */}
            {filteredMembers.length === 0 ? (
              <p className="admin-empty">검색 결과가 없습니다.</p>
            ) : (
              <div className="admin-table-wrap" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                <table className="admin-table admin-progress-table">
                  <thead>
                    <tr>
                      <th>회원명</th>
                      <th>이메일</th>
                      <th>전화번호</th>
                      <th>가입일</th>
                      <th>마지막 활동</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.map(member => {
                      const email = member.email;
                      const userOrders = orders.filter(o => (o.user_email || '').toLowerCase() === email);
                      const paidOrders = userOrders.filter(o => o.payment_status === 'paid');
                      const latestPaid = paidOrders[0];
                      const orderActive = latestPaid?.expires_at && new Date(latestPaid.expires_at) > new Date();
                      const userRedemptions = redemptions.filter(r => (r.user_email || '').toLowerCase() === email);
                      let couponActive = false;
                      if (userRedemptions.length > 0) {
                        for (const r of userRedemptions) {
                          const cp = coupons.find(c => c.id === r.coupon_id);
                          const days = cp?.days || 1;
                          const exp = new Date(new Date(r.created_at).getTime() + days * 86400000);
                          if (exp > new Date()) { couponActive = true; break; }
                        }
                      }
                      const isActive = orderActive || couponActive;
                      const statusText = isActive
                        ? (couponActive && !orderActive ? '쿠폰 이용중' : '이용중')
                        : (userOrders.length > 0 ? '만료' : '미결제');

                      return (
                        <tr key={email}>
                          <td>
                            <span className="admin-member-name" onClick={() => handleSelectMember(member)}>{member.name || '-'}</span>
                          </td>
                          <td>{email}</td>
                          <td>{member.phone || '-'}</td>
                          <td>{new Date(member.firstSeen).toLocaleDateString('ko-KR')}</td>
                          <td>{new Date(member.lastActivity).toLocaleDateString('ko-KR')}</td>
                          <td>
                            <span className={`table-badge ${isActive ? 'pass' : ''}`}>{statusText}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* 회원 학습현황 모달 */}
            {selectedMember && (
              <div className="admin-modal-overlay" onClick={() => setSelectedMember(null)}>
                <div className="admin-modal" onClick={e => e.stopPropagation()}>
                  <div className="admin-modal-header">
                    <h3>
                      <i className="fa-solid fa-user" /> {selectedMember.name || selectedMember.email} 학습 현황
                    </h3>
                    <button className="admin-modal-close" onClick={() => setSelectedMember(null)}>
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <div className="admin-modal-body">
                    {progressLoading ? (
                      <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div className="loading-spinner" />
                      </div>
                    ) : (
                      <>
                        {/* 필기 통계 */}
                        <div className="dashboard-stats-grid">
                          <div className="stat-card">
                            <div className="stat-label">필기 시험수</div>
                            <span className="stat-number">{pilgiStats.total}</span>
                          </div>
                          <div className="stat-card">
                            <div className="stat-label">필기 평균</div>
                            <span className="stat-number">{pilgiStats.avg}점</span>
                          </div>
                          <div className="stat-card">
                            <div className="stat-label">필기 합격률</div>
                            <span className="stat-number">{pilgiStats.passRate}%</span>
                          </div>
                          <div className="stat-card">
                            <div className="stat-label">필기 합격</div>
                            <span className="stat-number">{pilgiStats.passCount}회</span>
                          </div>
                        </div>

                        {/* 실기 통계 */}
                        <div className="dashboard-stats-grid" style={{ marginTop: '16px' }}>
                          <div className="stat-card">
                            <div className="stat-label">실기 연습수</div>
                            <span className="stat-number">{silgiStats.total}</span>
                          </div>
                          <div className="stat-card">
                            <div className="stat-label">실기 평균</div>
                            <span className="stat-number">{silgiStats.avg}점</span>
                          </div>
                          <div className="stat-card">
                            <div className="stat-label">실기 합격률</div>
                            <span className="stat-number">{silgiStats.passRate}%</span>
                          </div>
                          <div className="stat-card">
                            <div className="stat-label">실기 합격</div>
                            <span className="stat-number">{silgiStats.passCount}회</span>
                          </div>
                        </div>

                        {pilgiStats.total === 0 && silgiStats.total === 0 ? (
                          <p className="admin-empty">해당 회원의 학습 기록이 없습니다.</p>
                        ) : (
                          <>
                            {/* 차트 영역 */}
                            <div className="dashboard-charts" style={{ marginTop: '24px' }}>
                              {pilgiStats.total > 0 && (
                                <div className="dashboard-card">
                                  <h4>과목별 평균 점수</h4>
                                  <RadarChart scores={memberAvgScores} />
                                </div>
                              )}
                              {pilgiStats.total > 0 && (
                                <div className="dashboard-card">
                                  <h4>필기 점수 추이</h4>
                                  <BarChart sessions={[...memberPilgi].reverse()} />
                                </div>
                              )}
                            </div>

                            {/* 약점 과목 */}
                            {weakSubjects.length > 0 && (
                              <div className="dashboard-card" style={{ marginTop: '16px' }}>
                                <h4><i className="fa-solid fa-triangle-exclamation" style={{ color: '#F59E0B' }} /> 약점 과목</h4>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                                  {weakSubjects.map(s => (
                                    <span key={s.code} className="table-badge fail">
                                      {s.name} ({memberAvgScores[s.code]}점)
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* 최근 필기 시험 */}
                            {memberPilgi.length > 0 && (
                              <div className="dashboard-card" style={{ marginTop: '16px' }}>
                                <h4>최근 필기 시험</h4>
                                <div className="admin-table-wrap">
                                  <table className="admin-table">
                                    <thead>
                                      <tr>
                                        <th>회차</th>
                                        <th>점수</th>
                                        <th>합격여부</th>
                                        <th>응시일</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {memberPilgi.slice(0, 10).map((s: any, i: number) => (
                                        <tr key={s.id}>
                                          <td>{memberPilgi.length - i}회</td>
                                          <td style={{ fontWeight: 700 }}>{s.score_total}점</td>
                                          <td>
                                            <span className={`table-badge ${s.is_pass ? 'pass' : 'fail'}`}>
                                              {s.is_pass ? '합격' : '불합격'}
                                            </span>
                                          </td>
                                          <td>{new Date(s.completed_at).toLocaleDateString('ko-KR')}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {/* 최근 실기 연습 */}
                            {memberSilgi.length > 0 && (
                              <div className="dashboard-card" style={{ marginTop: '16px' }}>
                                <h4>최근 실기 연습</h4>
                                <div className="admin-table-wrap">
                                  <table className="admin-table">
                                    <thead>
                                      <tr>
                                        <th>회차</th>
                                        <th>점수</th>
                                        <th>합격여부</th>
                                        <th>연습일</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {memberSilgi.slice(0, 10).map((s: any, i: number) => (
                                        <tr key={s.id}>
                                          <td>{memberSilgi.length - i}회</td>
                                          <td style={{ fontWeight: 700 }}>{s.score_total}점</td>
                                          <td>
                                            <span className={`table-badge ${s.is_pass ? 'pass' : 'fail'}`}>
                                              {s.is_pass ? '합격' : '불합격'}
                                            </span>
                                          </td>
                                          <td>{new Date(s.completed_at).toLocaleDateString('ko-KR')}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
