import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { checkSubscription, checkFreeTrial, isExpiringSoon } from '../utils/subscription';
import { supabase, TABLES } from '../lib/supabase';

const ACCESS_KEY = 'je_coupon_access';

interface SubscriptionState {
  hasAccess: boolean;
  subscription: any | null;
  expiresAt: Date | null;
  expiringSoon: boolean;
  freeTrialRemaining: number;
  loading: boolean;
  refresh: () => Promise<void>;
  grantAccess: (expiresAt: Date, sub?: any) => void;
}

/** localStorage에 쿠폰 접근 권한 저장 */
function saveAccessLocal(userId: string, expiresAt: Date, sub: any) {
  try {
    localStorage.setItem(ACCESS_KEY, JSON.stringify({
      userId, expiresAt: expiresAt.toISOString(), sub,
    }));
  } catch { /* quota 등 무시 */ }
}

/** localStorage에서 유효한 접근 권한 로드 */
function loadAccessLocal(userId: string) {
  try {
    const raw = localStorage.getItem(ACCESS_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (d.userId !== userId) return null;
    const exp = new Date(d.expiresAt);
    if (exp <= new Date()) {
      localStorage.removeItem(ACCESS_KEY);
      return null;
    }
    return { expiresAt: exp, subscription: d.sub };
  } catch {
    return null;
  }
}

const SubscriptionContext = createContext<SubscriptionState | null>(null);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user, isAdmin } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [subscription, setSubscription] = useState<any>(null);
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);
  const [freeTrialRemaining, setFreeTrialRemaining] = useState(1);
  const [loading, setLoading] = useState(true);
  const refreshSeq = useRef(0);

  const grantAccess = useCallback((expires: Date, sub?: any) => {
    const s = sub || { plan_type: 'coupon', payment_method: 'coupon' };
    setHasAccess(true);
    setExpiresAt(expires);
    setSubscription(s);
    setLoading(false);
    if (user?.id) saveAccessLocal(user.id, expires, s);
  }, [user]);

  const refresh = useCallback(async () => {
    const seq = ++refreshSeq.current;

    if (!user) {
      setHasAccess(false);
      setSubscription(null);
      setExpiresAt(null);
      setFreeTrialRemaining(1);
      setLoading(false);
      return;
    }

    // 관리자는 즉시 접근 허용 (DB 쿼리 불필요)
    if (isAdmin) {
      setHasAccess(true);
      setSubscription({ plan_type: 'admin' });
      setExpiresAt(new Date('2099-12-31'));
      setFreeTrialRemaining(0);
      setLoading(false);
      return;
    }

    // localStorage 캐시가 있으면 즉시 사용 (스피너 방지)
    const cached = loadAccessLocal(user.id);
    if (cached) {
      setHasAccess(true);
      setSubscription(cached.subscription);
      setExpiresAt(cached.expiresAt);
      setLoading(false);
    } else {
      setLoading(true);
    }

    // 실패한 주문 자동 복구
    try {
      const raw = localStorage.getItem('je_failed_order');
      if (raw && supabase) {
        const failed: any[] = JSON.parse(raw);
        const stillFailed: any[] = [];
        for (const payload of failed) {
          const { error } = await supabase.from(TABLES.ORDERS).insert(payload);
          if (error) {
            stillFailed.push(payload);
          }
        }
        if (stillFailed.length > 0) {
          localStorage.setItem('je_failed_order', JSON.stringify(stillFailed));
        } else {
          localStorage.removeItem('je_failed_order');
          localStorage.removeItem('je_pending_orders');
          console.info('미저장 주문이 자동 복구되었습니다.');
        }
      }
    } catch { /* 복구 실패 시 다음 로드에서 재시도 */ }

    if (seq !== refreshSeq.current) return;

    try {
      const withTimeout = <T,>(p: Promise<T>, ms: number): Promise<T> =>
        Promise.race([p, new Promise<never>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

      const [subResult, trialResult] = await withTimeout(
        Promise.all([
          checkSubscription(user.id, { isAdmin }),
          checkFreeTrial(user.id),
        ]),
        10000,
      );

      if (seq !== refreshSeq.current) return;

      if (subResult.hasAccess) {
        setHasAccess(true);
        setSubscription(subResult.subscription);
        setExpiresAt(subResult.expiresAt);
        if (subResult.expiresAt) {
          saveAccessLocal(user.id, subResult.expiresAt, subResult.subscription);
        }
      } else if (!cached) {
        setHasAccess(false);
        setSubscription(null);
        setExpiresAt(null);
      }
      setFreeTrialRemaining(trialResult.canTrial ? 1 : 0);
    } catch (err) {
      console.error('Subscription check error:', err);
      if (seq !== refreshSeq.current) return;
      if (!cached) {
        const local = loadAccessLocal(user.id);
        if (local) {
          setHasAccess(true);
          setSubscription(local.subscription);
          setExpiresAt(local.expiresAt);
        }
      }
    }
    if (seq === refreshSeq.current) {
      setLoading(false);
    }
  }, [user, isAdmin]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const expiringSoon = isExpiringSoon(expiresAt);

  return (
    <SubscriptionContext.Provider value={{
      hasAccess, subscription, expiresAt, expiringSoon,
      freeTrialRemaining, loading, refresh, grantAccess,
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error('useSubscription must be used within SubscriptionProvider');
  return ctx;
}
