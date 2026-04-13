import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, TABLES } from '../../lib/supabase';

function MySilgiStatus({ user }: { user: any }) {
  const [data, setData] = useState<{
    totalPractice: number;
    avgMatch: number;
    passRate: number;
  }>({ totalPractice: 0, avgMatch: 0, passRate: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const { data: sessions } = await supabase
          .from(TABLES.EXAM_SESSIONS)
          .select('score_total, is_pass')
          .eq('user_id', user.id)
          .eq('exam_type', 'silgi_practice')
          .not('completed_at', 'is', null)
          .order('completed_at', { ascending: false })
          .limit(5);

        if (sessions && sessions.length > 0) {
          const passCount = sessions.filter((s: any) => s.is_pass).length;
          const avgMatch = Math.round(sessions.reduce((sum: number, s: any) => sum + (s.score_total || 0), 0) / sessions.length);

          setData({
            totalPractice: sessions.length,
            avgMatch,
            passRate: Math.round((passCount / sessions.length) * 100),
          });
        }
      } catch {
        // fail silently
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [user.id]);

  if (loading) {
    return (
      <div className="my-status-card" style={{ borderLeftColor: '#10B981' }}>
        <h3><i className="fa-solid fa-chart-line" style={{ color: '#10B981' }} /> 나의 실기 현황</h3>
        <p style={{ color: 'var(--text-secondary)' }}>불러오는 중...</p>
      </div>
    );
  }

  if (data.totalPractice === 0) {
    return (
      <div className="my-status-card" style={{ borderLeftColor: '#10B981' }}>
        <h3><i className="fa-solid fa-chart-line" style={{ color: '#10B981' }} /> 나의 실기 현황</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>아직 실기 연습 기록이 없습니다. 첫 연습을 시작해보세요!</p>
        <Link to="/silgi/practice" className="btn btn-primary btn-sm">실기 연습 시작</Link>
      </div>
    );
  }

  return (
    <div className="my-status-card" style={{ borderLeftColor: '#10B981' }}>
      <h3><i className="fa-solid fa-chart-line" style={{ color: '#10B981' }} /> 나의 실기 현황</h3>
      <div className="my-status-stats">
        <div className="my-status-stat">
          <span className="my-status-stat-label">연습</span>
          <span className="my-status-stat-value">{data.totalPractice}회</span>
        </div>
        <div className="my-status-stat">
          <span className="my-status-stat-label">평균 점수</span>
          <span className="my-status-stat-value">{data.avgMatch}점</span>
        </div>
        <div className="my-status-stat">
          <span className="my-status-stat-label">합격률</span>
          <span className="my-status-stat-value">{data.passRate}%</span>
        </div>
      </div>
      <div className="my-status-actions">
        <Link to="/dashboard" className="btn btn-primary btn-sm">대시보드 보기</Link>
        <Link to="/silgi/practice" className="btn btn-secondary btn-sm">연습 시작</Link>
      </div>
    </div>
  );
}

export default function SilgiHome() {
  const { user } = useAuth();

  return (
    <>
      <SEOHead title="실기 시험" description="직업상담사 2급 실기 시험 준비" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-file-pen" /> 실기 시험</h1>
          <p className="page-desc">직업상담 실무 - 주관식/서술형, 150분, 60점 이상 합격</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {/* My Status */}
        {user ? (
          <MySilgiStatus user={user} />
        ) : (
          <div className="my-status-login-banner">
            <i className="fa-solid fa-circle-info" />
            <span><Link to="/login">로그인</Link>하면 학습 현황을 확인할 수 있습니다</span>
          </div>
        )}

        <div className="pilgi-modes">
          <Link to="/silgi/practice" className="pilgi-mode-card">
            <div className="pilgi-mode-icon study">
              <i className="fa-solid fa-pen" />
            </div>
            <h3>서술형 연습</h3>
            <p>주관식/서술형 문제를 풀고 모범답안과 비교하세요</p>
            <span className="pilgi-mode-badge">모범답안 비교</span>
          </Link>

          <Link to="/silgi/past" className="pilgi-mode-card">
            <div className="pilgi-mode-icon exam">
              <i className="fa-solid fa-scroll" />
            </div>
            <h3>기출문제 해설</h3>
            <p>회차별 기출문제와 상세 해설을 확인하세요</p>
            <span className="pilgi-mode-badge">해설 포함</span>
          </Link>

          <Link to="/silgi/frequent" className="pilgi-mode-card">
            <div className="pilgi-mode-icon study">
              <i className="fa-solid fa-fire" />
            </div>
            <h3>5개년 빈출 정리</h3>
            <p>2019~2023 5개년 빈출 기출문제 177문항 상세 해설</p>
            <span className="pilgi-mode-badge">177문항</span>
          </Link>

          <Link to="/silgi/terms" className="pilgi-mode-card">
            <div className="pilgi-mode-icon exam">
              <i className="fa-solid fa-book" />
            </div>
            <h3>핵심 용어</h3>
            <p>실기 시험에 자주 출제되는 핵심 용어를 학습하세요</p>
            <span className="pilgi-mode-badge">핵심 정리</span>
          </Link>
        </div>

        <div className="silgi-info mt-4">
          <h3>실기 시험 안내</h3>
          <ul>
            <li>과목: 직업상담 실무</li>
            <li>문제 유형: 주관식 (단답형, 서술형, 계산형)</li>
            <li>시험 시간: 150분</li>
            <li>합격 기준: 100점 만점 중 60점 이상</li>
          </ul>
        </div>
      </div>
    </>
  );
}
