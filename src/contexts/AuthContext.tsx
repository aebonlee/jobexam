import { createContext, useContext, useEffect, useState } from 'react';
import { supabase, setSharedSession, getSharedSession, clearSharedSession, TABLES } from '../lib/supabase';
import { useToast } from './ToastContext';
import { SUPERADMIN_EMAILS } from '../config/admin';

const AuthContext = createContext({});

const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.refresh_token) setSharedSession(session.refresh_token);
      if (event === 'SIGNED_OUT') clearSharedSession();

      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        // 최고관리자 이메일 fallback (DB 장애 시에도 접근 보장)
        const allEmails = [
          currentUser.email,
          currentUser.user_metadata?.email,
        ].filter(Boolean).map(e => (e as string).toLowerCase());
        const isSuperByEmail = allEmails.some(e => SUPERADMIN_EMAILS.includes(e));

        try {
          const { data } = await supabase
            .from(TABLES.PROFILES)
            .select('role')
            .eq('id', currentUser.id)
            .single();
          setIsAdmin(isSuperByEmail || data?.role === 'admin' || data?.role === 'superadmin');
        } catch {
          setIsAdmin(isSuperByEmail);
        }
      } else {
        setIsAdmin(false);
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
                // refreshSession 성공 → TOKEN_REFRESHED 이벤트에서 loading 해제
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

    // Fallback: 5초 타임아웃 (INITIAL_SESSION이 오지 않는 경우 방지)
    const fallback = setTimeout(() => {
      setLoading((prev) => {
        if (prev) console.warn('Auth: INITIAL_SESSION timeout, forcing loading=false');
        return false;
      });
    }, 5000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(fallback);
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: SITE_URL },
      });
      if (error) {
        console.error('Google login error:', error.message);
        showToast('Google 로그인에 실패했습니다.', 'error');
      }
    } catch (err: any) {
      console.error('Google login error:', err);
      showToast('Google 로그인에 실패했습니다.', 'error');
    }
  };

  const signInWithKakao = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: { redirectTo: SITE_URL },
      });
      if (error) {
        console.error('Kakao login error:', error.message);
        showToast('카카오 로그인에 실패했습니다.', 'error');
      }
    } catch (err: any) {
      console.error('Kakao login error:', err);
      showToast('카카오 로그인에 실패했습니다.', 'error');
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message);
        showToast('로그아웃에 실패했습니다.', 'error');
      } else {
        showToast('로그아웃되었습니다.', 'success');
      }
    } catch (err: any) {
      console.error('Logout error:', err);
      showToast('로그아웃에 실패했습니다.', 'error');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signInWithGoogle, signInWithKakao, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
