import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { SUBJECTS } from '../../config/site';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, TABLES } from '../../lib/supabase';

function MyPilgiStatus({ user }: { user: any }) {
  const [data, setData] = useState<{
    lastScore: number | null;
    passRate: number;
    totalExams: number;
    weakSubject: string | null;
    weakScore: number | null;
  }>({ lastScore: null, passRate: 0, totalExams: 0, weakSubject: null, weakScore: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const { data: sessions } = await supabase
          .from(TABLES.EXAM_SESSIONS)
          .select('score_total, is_pass, score_by_subject')
          .eq('user_id', user.id)
          .eq('exam_type', 'pilgi')
          .not('completed_at', 'is', null)
          .order('completed_at', { ascending: false })
          .limit(5);

        if (sessions && sessions.length > 0) {
          const passCount = sessions.filter((s: any) => s.is_pass).length;
          const lastSession = sessions[0];

          let weakSubject: string | null = null;
          let weakScore: number | null = null;
          if (lastSession.score_by_subject) {
            const scores = lastSession.score_by_subject as Record<string, number>;
            let minScore = Infinity;
            for (const [code, score] of Object.entries(scores)) {
              if (score < minScore) {
                minScore = score;
                weakSubject = SUBJECTS.find(s => s.code === code)?.name || code;
                weakScore = score;
              }
            }
          }

          setData({
            lastScore: lastSession.score_total,
            passRate: Math.round((passCount / sessions.length) * 100),
            totalExams: sessions.length,
            weakSubject,
            weakScore,
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
      <div className="my-status-card">
        <h3><i className="fa-solid fa-chart-line" /> 나의 필기 현황</h3>
        <p style={{ color: 'var(--text-secondary)' }}>불러오는 중...</p>
      </div>
    );
  }

  if (data.totalExams === 0) {
    return (
      <div className="my-status-card">
        <h3><i className="fa-solid fa-chart-line" /> 나의 필기 현황</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>아직 시험 기록이 없습니다. 첫 CBT를 시작해보세요!</p>
        <Link to="/pilgi/select" className="btn btn-primary btn-sm">필기 CBT 시작</Link>
      </div>
    );
  }

  return (
    <div className="my-status-card">
      <h3><i className="fa-solid fa-chart-line" /> 나의 필기 현황</h3>
      <div className="my-status-stats">
        <div className="my-status-stat">
          <span className="my-status-stat-label">최근 점수</span>
          <span className="my-status-stat-value">{data.lastScore}점</span>
        </div>
        <div className="my-status-stat">
          <span className="my-status-stat-label">합격률</span>
          <span className="my-status-stat-value">{data.passRate}%</span>
        </div>
        <div className="my-status-stat">
          <span className="my-status-stat-label">시험</span>
          <span className="my-status-stat-value">{data.totalExams}회</span>
        </div>
      </div>
      {data.weakSubject && (
        <div className="my-status-weak">
          약점 과목: <strong>{data.weakSubject} ({data.weakScore}점)</strong>
        </div>
      )}
      <div className="my-status-actions">
        <Link to="/dashboard" className="btn btn-primary btn-sm">대시보드 보기</Link>
        <Link to="/wrong-answers" className="btn btn-secondary btn-sm">오답노트 보기</Link>
      </div>
    </div>
  );
}

export default function PilgiHome() {
  const { user } = useAuth();

  return (
    <>
      <SEOHead title="필기 시험" description="직업상담사 2급 필기 시험 준비" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-pen-to-square" /> 필기 시험</h1>
          <p className="page-desc">5과목 100문항, 4지선다. 평균 60점 이상 + 과목당 40점 이상 합격</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {/* My Status */}
        {user ? (
          <MyPilgiStatus user={user} />
        ) : (
          <div className="my-status-login-banner">
            <i className="fa-solid fa-circle-info" />
            <span><Link to="/login">로그인</Link>하면 학습 현황을 확인할 수 있습니다</span>
          </div>
        )}

        {/* Mode Selection */}
        <div className="pilgi-modes">
          <Link to="/pilgi/select" className="pilgi-mode-card">
            <div className="pilgi-mode-icon exam">
              <i className="fa-solid fa-desktop" />
            </div>
            <h3>시험 모드</h3>
            <p>실제 시험과 동일한 환경으로 100문항을 100분 내에 풀어보세요</p>
            <span className="pilgi-mode-badge">100분 타이머</span>
          </Link>

          <Link to="/pilgi/study" className="pilgi-mode-card">
            <div className="pilgi-mode-icon study">
              <i className="fa-solid fa-book-open" />
            </div>
            <h3>학습 모드</h3>
            <p>답 선택 즉시 정답과 해설을 확인하며 학습할 수 있습니다</p>
            <span className="pilgi-mode-badge">즉시 해설</span>
          </Link>
        </div>

        {/* Subject Overview */}
        <div className="section-header mt-4">
          <div className="section-badge">SUBJECTS</div>
          <h2 className="section-title">과목 안내</h2>
        </div>
        <div className="pilgi-subjects-grid">
          {SUBJECTS.map(subject => (
            <div key={subject.code} className="pilgi-subject-card" style={{ borderTopColor: subject.color }}>
              <div className="pilgi-subject-icon" style={{ color: subject.color, background: `${subject.color}12` }}>
                <i className={subject.icon} />
              </div>
              <h4>{subject.name}</h4>
              <p>20문항 / 과목당 40점 이상</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
