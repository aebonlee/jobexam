import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { supabase, setSharedSession, getSharedSession, clearSharedSession, TABLES } from '../lib/supabase';
import { useToast } from './ToastContext';
import { useIdleTimeout } from '../hooks/useIdleTimeout';
import { SUPERADMIN_EMAILS } from '../config/admin';
import ProfileCompleteModal from '../components/ProfileCompleteModal';

const AuthContext = createContext({});

const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;
const DISMISS_KEY = 'je_profile_modal_dismissed';

/** 이메일 기반 최고관리자 즉시 판별 (DB 쿼리 불필요) */
function checkSuperAdminByEmail(currentUser: any): boolean {
  const allEmails = [
    currentUser.email,
    currentUser.user_metadata?.email,
  ].filter(Boolean).map((e: string) => e.toLowerCase());
  return allEmails.some(e => SUPERADMIN_EMAILS.includes(e));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [_userProfile, _setUserProfile] = useState<any>(null);
  const [_profileDismissed, _setProfileDismissed] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem(DISMISS_KEY) === '1'
  );
  const [_signingIn, _setSigningIn] = useState(false);
  const { showToast } = useToast();
  const adminCheckDone = useRef(false);

  // user_profiles 프로필 로드 (프로필 완성 체크용)
  const _loadUserProfile = useCallback(async (uid: string) => {
    try {
      const { data } = await supabase.from('user_profiles').select('name,phone').eq('id', uid).maybeSingle();
      _setUserProfile(data);
    } catch { _setUserProfile(null); }
  }, []);

  useEffect(() => {
    adminCheckDone.current = false;

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.refresh_token) setSharedSession(session.refresh_token);
      if (event === 'SIGNED_OUT') clearSharedSession();

      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        const email = (currentUser.email || currentUser.user_metadata?.email || '').toLowerCase();
        const name = currentUser.user_metadata?.full_name || currentUser.user_metadata?.name || '';

        // 즉시 이메일 기반 관리자 판별 (DB 쿼리 전)
        const isSuperByEmail = checkSuperAdminByEmail(currentUser);
        if (isSuperByEmail) setIsAdmin(true);

        // 프로필 upsert와 DB 관리자 확인을 병렬 실행 (속도 개선)
        if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
          const profileWork = (async () => {
            try {
              await supabase.from(TABLES.PROFILES).upsert({
                id: currentUser.id,
                email,
                ...(name ? { name } : {}),
              }, {
                onConflict: 'id',
                ignoreDuplicates: false,
              });
            } catch (err) {
              console.warn('profiles upsert 실패:', err);
            }

            try {
              const upsertData: Record<string, unknown> = {
                id: currentUser.id,
                email,
                display_name: name || '',
                provider: currentUser.app_metadata?.provider || 'email',
                signup_domain: window.location.hostname,
                visited_sites: [window.location.hostname],
              };
              if (name) upsertData.name = name;
              await supabase.from('user_profiles').upsert(upsertData, { onConflict: 'id' });
            } catch (err) {
              console.warn('user_profiles upsert 실패:', err);
            }

            // upsert 성공 여부와 무관하게 항상 프로필 로드
            await _loadUserProfile(currentUser.id);
          })();

          const adminWork = (async () => {
            try {
              const { data } = await supabase
                .from(TABLES.PROFILES)
                .select('role')
                .eq('id', currentUser.id)
                .maybeSingle();
              setIsAdmin(isSuperByEmail || data?.role === 'admin' || data?.role === 'superadmin');
            } catch {
              setIsAdmin(isSuperByEmail);
            }
            adminCheckDone.current = true;
          })();

          await Promise.all([profileWork, adminWork]);
        } else {
          // TOKEN_REFRESHED 등 다른 이벤트에서도 관리자 확인
          try {
            const { data } = await supabase
              .from(TABLES.PROFILES)
              .select('role')
              .eq('id', currentUser.id)
              .maybeSingle();
            setIsAdmin(isSuperByEmail || data?.role === 'admin' || data?.role === 'superadmin');
          } catch {
            setIsAdmin(isSuperByEmail);
          }
          adminCheckDone.current = true;
        }
      } else {
        setIsAdmin(false);
        adminCheckDone.current = true;
      }

      if (event === 'INITIAL_SESSION') {
        if (!currentUser) {
          const rt = getSharedSession();
          if (rt) {
            try {
              const { data } = await supabase.auth.refreshSession({ refresh_token: rt });
              if (!data.session) {
                clearSharedSession();
              } else {
                return;
              }
            } catch { clearSharedSession(); }
          }
        }
        setLoading(false);
      }
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setLoading(false);
      }
      if (event === 'SIGNED_OUT') {
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
      }
    });

    // Fallback: 15초 타임아웃 (프로필 upsert + 관리자 확인 시간 확보)
    const fallback = setTimeout(() => {
      setLoading((prev) => {
        if (prev) console.warn('Auth: timeout, forcing loading=false');
        return false;
      });
    }, 15000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(fallback);
    };
  }, []);

  const signInWithGoogle = async () => {
    if (_signingIn) return;
    _setSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: SITE_URL },
      });
      if (error) {
        console.error('Google login error:', error.message);
        showToast('Google 로그인에 실패했습니다.', 'error');
        _setSigningIn(false);
      }
    } catch (err: any) {
      console.error('Google login error:', err);
      showToast('Google 로그인에 실패했습니다.', 'error');
      _setSigningIn(false);
    }
  };

  const signInWithKakao = async () => {
    if (_signingIn) return;
    _setSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: SITE_URL,
          scopes: 'profile_nickname profile_image account_email',
        },
      });
      if (error) {
        console.error('Kakao login error:', error.message);
        showToast('카카오 로그인에 실패했습니다.', 'error');
        _setSigningIn(false);
      }
    } catch (err: any) {
      console.error('Kakao login error:', err);
      showToast('카카오 로그인에 실패했습니다.', 'error');
      _setSigningIn(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      clearSharedSession();
      showToast('로그아웃되었습니다.', 'success');
    } catch (err: any) {
      console.error('Logout error:', err);
      clearSharedSession();
      setUser(null);
      setIsAdmin(false);
      showToast('로그아웃되었습니다.', 'success');
    }
  };

  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
    enabled: !!user,
    onTimeout: async () => {
      try { await supabase.auth.signOut(); } catch { /* ignore */ }
      clearSharedSession();
      setUser(null);
      setIsAdmin(false);
    },
  });

  const refreshProfile = useCallback(async () => {
    if (user) await _loadUserProfile(user.id);
  }, [user, _loadUserProfile]);
  const needsProfileCompletion = !!user && !!_userProfile && !_userProfile.name && !_profileDismissed;

  const dismissProfileModal = useCallback(() => {
    sessionStorage.setItem(DISMISS_KEY, '1');
    _setProfileDismissed(true);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signingIn: _signingIn, signInWithGoogle, signInWithKakao, signOut }}>
      {children}
      {needsProfileCompletion && (
        <ProfileCompleteModal user={user} onComplete={refreshProfile} onDismiss={dismissProfileModal} />
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
