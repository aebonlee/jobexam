import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import SEOHead from '../../components/SEOHead';

export default function RegisterPage() {
  const { user } = useAuth();
  const [form, setForm] = useState({ displayName: '', email: '', password: '', passwordConfirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (user) return <Navigate to="/dashboard" replace />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.displayName.trim()) {
      setError('이름을 입력해주세요.');
      return;
    }
    if (!form.email.trim()) {
      setError('이메일을 입력해주세요.');
      return;
    }
    if (form.password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*\d)/.test(form.password)) {
      setError('비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.');
      return;
    }
    if (form.password !== form.passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true);
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            display_name: form.displayName,
            full_name: form.displayName,
            signup_domain: window.location.hostname,
          },
          emailRedirectTo: `${window.location.origin}/login`,
        },
      });
      if (signUpError) {
        if (signUpError.message.includes('already registered')) {
          setError('이미 등록된 이메일입니다. 로그인해주세요.');
        } else {
          setError(signUpError.message);
        }
        return;
      }
      setSuccess(true);
    } catch {
      setError('회원가입 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="login-page">
        <SEOHead title="회원가입 완료" />
        <div className="login-container">
          <div className="login-card" style={{ textAlign: 'center' }}>
            <div className="login-header">
              <div className="login-logo">
                <span>For</span><span style={{ opacity: 0.7 }}>Job</span>
              </div>
              <h1 className="login-title">이메일 인증 안내</h1>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
              <strong>{form.email}</strong>로 인증 메일을 발송했습니다.<br />
              메일의 링크를 클릭하면 가입이 완료됩니다.
            </p>
            <Link to="/login" className="login-submit" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              로그인 페이지로 이동
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <SEOHead title="회원가입" />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span>For</span><span style={{ opacity: 0.7 }}>Job</span>
            </div>
            <h1 className="login-title">회원가입</h1>
            <p className="login-subtitle">이메일로 가입하고 학습을 시작하세요</p>
          </div>

          {error && (
            <div className="login-error">{error}</div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="displayName"
                placeholder="이름"
                value={form.displayName}
                onChange={handleChange}
                autoComplete="name"
                style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', fontSize: '15px' }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="이메일"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', fontSize: '15px' }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="비밀번호 (8자 이상, 영문+숫자)"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', fontSize: '15px' }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                value={form.passwordConfirm}
                onChange={handleChange}
                autoComplete="new-password"
                style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', fontSize: '15px' }}
              />
            </div>
            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? '처리 중...' : '회원가입'}
            </button>
          </form>

          <div className="login-footer">
            이미 계정이 있으신가요?{' '}
            <Link to="/login" className="login-footer-link">로그인</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
