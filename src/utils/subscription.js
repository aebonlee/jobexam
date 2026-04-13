import { supabase, TABLES } from '../lib/supabase';

/**
 * 구독(이용권) 상태 확인 유틸리티
 */

/**
 * 현재 유효한 구독 조회
 * @param {string} userId
 * @returns {Promise<{hasAccess: boolean, subscription: object|null, expiresAt: Date|null}>}
 */
export async function checkSubscription(userId) {
  if (!userId) return { hasAccess: false, subscription: null, expiresAt: null };

  // 최고관리자 바이패스: 이메일 확인
  try {
    const { data: { user } } = await supabase.auth.getUser();
    const email = (user?.email || '').toLowerCase();
    if (email === 'aebon@kakao.com' || email === 'aebon@kyonggi.ac.kr') {
      const farFuture = new Date('2099-12-31');
      return { hasAccess: true, subscription: { plan_type: 'admin' }, expiresAt: farFuture };
    }
  } catch { /* skip */ }

  const now = new Date();

  // 1) 주문(orders) 기반 확인
  const { data, error } = await supabase
    .from(TABLES.ORDERS)
    .select('*')
    .eq('user_id', userId)
    .eq('payment_status', 'paid')
    .order('created_at', { ascending: false });

  if (!error && data?.length) {
    const active = data
      .filter(o => o.expires_at && new Date(o.expires_at) > now)
      .sort((a, b) => new Date(b.expires_at) - new Date(a.expires_at));

    if (active.length > 0) {
      return {
        hasAccess: true,
        subscription: active[0],
        expiresAt: new Date(active[0].expires_at),
      };
    }
  }

  // 2) 쿠폰 사용 기록(coupon_redemptions) fallback
  //    주문 생성이 RLS 등으로 실패한 경우에도 접근 허용
  try {
    const { data: redemptions } = await supabase
      .from(TABLES.COUPON_REDEMPTIONS)
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (redemptions?.length) {
      const couponIds = [...new Set(redemptions.map(r => r.coupon_id))];
      const { data: coupons } = await supabase
        .from(TABLES.COUPONS)
        .select('id, days')
        .in('id', couponIds);

      const couponMap = {};
      (coupons || []).forEach(c => { couponMap[c.id] = c.days || 1; });

      for (const r of redemptions) {
        const days = couponMap[r.coupon_id] || 1;
        const expiresAt = new Date(new Date(r.created_at).getTime() + days * 24 * 60 * 60 * 1000);
        if (expiresAt > now) {
          return {
            hasAccess: true,
            subscription: { plan_type: `${days}day`, payment_method: 'coupon' },
            expiresAt,
          };
        }
      }
    }
  } catch { /* skip */ }

  return { hasAccess: false, subscription: null, expiresAt: null };
}

/**
 * 무료 체험 횟수 확인
 * @param {string} userId
 * @returns {Promise<number>} 사용한 무료 체험 횟수
 */
export async function getUsedFreeTrials(userId) {
  if (!userId) return 0;

  const { count, error } = await supabase
    .from(TABLES.EXAM_SESSIONS)
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('exam_type', 'pilgi')
    .not('completed_at', 'is', null);

  if (error) return 0;
  return count || 0;
}

/**
 * 무료 체험 가능 여부 확인
 * @param {string} userId
 * @returns {Promise<{canTrial: boolean, usedCount: number}>}
 */
export async function checkFreeTrial(userId) {
  const usedCount = await getUsedFreeTrials(userId);
  return { canTrial: usedCount < 1, usedCount };
}

/**
 * 만료 임박 여부 (7일 이내)
 * @param {Date|null} expiresAt
 * @returns {boolean}
 */
export function isExpiringSoon(expiresAt) {
  if (!expiresAt) return false;
  const diff = new Date(expiresAt) - new Date();
  return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
}
