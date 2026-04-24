import { useState, useEffect, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!loading) { setTimedOut(false); return; }
    const t = setTimeout(() => setTimedOut(true), 8000);
    return () => clearTimeout(t);
  }, [loading]);

  if (loading) {
    if (timedOut) {
      return (
        <div className="paid-guard-block">
          <div className="paid-guard-card">
            <i className="fa-solid fa-circle-exclamation" />
            <h2>연결 지연</h2>
            <p>서버 연결이 지연되고 있습니다. 페이지를 새로고침해 주세요.</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              새로고침
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="loading-page">
        <div className="loading-spinner" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
