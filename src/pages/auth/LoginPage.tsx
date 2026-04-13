import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';

export default function LoginPage() {
  const { user, signInWithGoogle, signInWithKakao } = useAuth();

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="login-page">
      <SEOHead title="로그인" />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span>For</span><span style={{ opacity: 0.7 }}>Job</span>
            </div>
            <h1 className="login-title">로그인</h1>
            <p className="login-subtitle">소셜 계정으로 간편하게 시작하세요</p>
          </div>

          <div className="login-buttons">
            <button className="login-btn google-btn" onClick={signInWithGoogle}>
              <span className="login-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </span>
              Google로 계속하기
            </button>

            <button className="login-btn kakao-btn" onClick={signInWithKakao}>
              <span className="login-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#000000" d="M12 3C6.48 3 2 6.36 2 10.5c0 2.69 1.79 5.05 4.48 6.39-.15.54-.97 3.48-1 3.63 0 .11.04.22.13.28.06.04.14.06.21.06.09 0 .17-.03.24-.09.89-.66 3.29-2.44 3.82-2.85.68.1 1.39.15 2.12.15 5.52 0 10-3.36 10-7.5S17.52 3 12 3z"/>
                </svg>
              </span>
              카카오로 계속하기
            </button>
          </div>

          <p className="login-terms">
            로그인 시 <a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에 동의하게 됩니다.
          </p>

          <div className="login-footer">
            학습 기록은 로그인 후 자동으로 저장됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}
