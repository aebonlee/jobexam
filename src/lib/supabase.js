import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    detectSessionInUrl: true,
    autoRefreshToken: true,
    persistSession: true,
  },
});

/* ── SSO 크로스도메인 쿠키 헬퍼 ── */
const SSO_KEY = 'dreamit_sso';
const _isLocal = typeof window !== 'undefined' &&
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
const _cookieDomain = _isLocal ? '' : ';domain=.dreamitbiz.com';

export function setSharedSession(rt) {
  document.cookie = `${SSO_KEY}=${rt}${_cookieDomain};path=/;max-age=2592000;SameSite=Lax${_isLocal ? '' : ';Secure'}`;
}
export function getSharedSession() {
  const m = document.cookie.match(/(^| )dreamit_sso=([^;]+)/);
  return m ? m[2] : null;
}
export function clearSharedSession() {
  document.cookie = `${SSO_KEY}=${_cookieDomain};path=/;max-age=0`;
}

const PREFIX = 'jobexam_';

export const TABLES = {
  PROFILES: `${PREFIX}profiles`,
  SUBJECTS: `${PREFIX}subjects`,
  QUESTIONS: `${PREFIX}questions`,
  SILGI_QUESTIONS: `${PREFIX}silgi_questions`,
  EXAM_SESSIONS: `${PREFIX}exam_sessions`,
  EXAM_ANSWERS: `${PREFIX}exam_answers`,
  BOOKMARKS: `${PREFIX}bookmarks`,
  WRONG_ANSWERS: `${PREFIX}wrong_answers`,
  ORDERS: `${PREFIX}orders`,
  COUPONS: `${PREFIX}coupons`,
  COUPON_REDEMPTIONS: `${PREFIX}coupon_redemptions`,
};
