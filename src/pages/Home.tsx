import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { SUBJECTS } from '../config/site';
import { useAuth } from '../contexts/AuthContext';
import { supabase, TABLES } from '../lib/supabase';

/* ───────── 시험 일정 데이터 ───────── */
const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

interface ExamEvent {
  label: string;
  type: '필기접수' | '필기시험' | '필기발표' | '실기접수' | '실기시험' | '최종발표';
  startDate: Date;
  endDate?: Date;          // 기간이 있는 경우
  days: number;            // D-day (startDate 기준)
  dateStr: string;         // "5.9(토)~5.29(금)" 또는 "6.10(수)"
}

function fmtDate(d: Date) {
  return `${d.getMonth() + 1}.${d.getDate()}(${DAY_NAMES[d.getDay()]})`;
}

function getExamEvents(): ExamEvent[] {
  const raw: { label: string; type: ExamEvent['type']; start: Date; end?: Date }[] = [
    // ── 2회 ──
    { label: '2회 필기접수', type: '필기접수', start: new Date(2026, 3, 20), end: new Date(2026, 3, 23) },
    { label: '2회 필기시험', type: '필기시험', start: new Date(2026, 4, 9), end: new Date(2026, 4, 29) },
    { label: '2회 필기발표', type: '필기발표', start: new Date(2026, 5, 10) },
    { label: '2회 실기접수', type: '실기접수', start: new Date(2026, 5, 22), end: new Date(2026, 5, 25) },
    { label: '2회 실기시험', type: '실기시험', start: new Date(2026, 6, 18), end: new Date(2026, 7, 5) },
    { label: '2회 최종발표', type: '최종발표', start: new Date(2026, 8, 11) },
    // ── 3회 ──
    { label: '3회 필기접수', type: '필기접수', start: new Date(2026, 6, 20), end: new Date(2026, 6, 23) },
    { label: '3회 필기시험', type: '필기시험', start: new Date(2026, 7, 7), end: new Date(2026, 8, 1) },
    { label: '3회 필기발표', type: '필기발표', start: new Date(2026, 8, 9) },
    { label: '3회 실기접수', type: '실기접수', start: new Date(2026, 8, 21), end: new Date(2026, 8, 28) },
    { label: '3회 실기시험', type: '실기시험', start: new Date(2026, 9, 24), end: new Date(2026, 10, 13) },
    { label: '3회 최종발표', type: '최종발표', start: new Date(2026, 11, 18) },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return raw
    .map(e => {
      const diff = Math.ceil((e.start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      const dateStr = e.end ? `${fmtDate(e.start)}~${fmtDate(e.end)}` : fmtDate(e.start);
      return { label: e.label, type: e.type, startDate: e.start, endDate: e.end, days: diff, dateStr };
    })
    .filter(e => {
      // 기간 이벤트: 종료일 이전이면 표시, 단일 이벤트: 당일까지 표시
      const ref = e.endDate ?? e.startDate;
      return Math.ceil((ref.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) >= 0;
    });
}

/** 가장 가까운 이벤트의 D-day (LoggedInHome 배지용) */
function getDday(): { label: string; type: string; days: number; dateStr: string } | null {
  const events = getExamEvents();
  if (events.length === 0) return null;
  const e = events[0];
  const typeLabel = e.type === '필기시험' || e.type === '실기시험' ? '시험' : e.type === '필기접수' || e.type === '실기접수' ? '접수' : '발표';
  return { label: e.label, type: typeLabel, days: e.days, dateStr: e.dateStr };
}

/* ═══════════════════════════════════════════
   LoggedInHome — 개인화 대시보드형 홈
   ═══════════════════════════════════════════ */
function LoggedInHome({ user }: { user: any }) {
  const [stats, setStats] = useState<{
    lastPilgiScore: number | null;
    lastSilgiScore: number | null;
    totalExams: number;
    pilgiPass: boolean | null;
    weakSubject: string | null;
    weakScore: number | null;
    bookmarkCount: number;
    wrongCount: number;
  }>({
    lastPilgiScore: null, lastSilgiScore: null, totalExams: 0,
    pilgiPass: null, weakSubject: null, weakScore: null,
    bookmarkCount: 0, wrongCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const dday = getDday();

  useEffect(() => {
    async function fetchStats() {
      try {
        const uid = user.id;
        const [pilgiRes, silgiRes, countRes, bookmarkRes, wrongRes] = await Promise.all([
          supabase.from(TABLES.EXAM_SESSIONS)
            .select('score_total, is_pass, score_by_subject')
            .eq('user_id', uid).eq('exam_type', 'pilgi')
            .not('completed_at', 'is', null)
            .order('completed_at', { ascending: false }).limit(1),
          supabase.from(TABLES.EXAM_SESSIONS)
            .select('score_total')
            .eq('user_id', uid).eq('exam_type', 'silgi_practice')
            .not('completed_at', 'is', null)
            .order('completed_at', { ascending: false }).limit(1),
          supabase.from(TABLES.EXAM_SESSIONS)
            .select('id', { count: 'exact', head: true })
            .eq('user_id', uid).not('completed_at', 'is', null),
          supabase.from(TABLES.BOOKMARKS)
            .select('id', { count: 'exact', head: true })
            .eq('user_id', uid),
          supabase.from(TABLES.WRONG_ANSWERS)
            .select('id', { count: 'exact', head: true })
            .eq('user_id', uid).eq('resolved', false),
        ]);

        let weakSubject: string | null = null;
        let weakScore: number | null = null;
        const last = pilgiRes.data?.[0];
        if (last?.score_by_subject) {
          let min = Infinity;
          for (const [code, score] of Object.entries(last.score_by_subject as Record<string, number>)) {
            if (score < min) { min = score; weakSubject = SUBJECTS.find(s => s.code === code)?.name || code; weakScore = score; }
          }
        }

        setStats({
          lastPilgiScore: last?.score_total ?? null,
          lastSilgiScore: silgiRes.data?.[0]?.score_total ?? null,
          totalExams: countRes.count ?? 0,
          pilgiPass: last?.is_pass ?? null,
          weakSubject, weakScore,
          bookmarkCount: bookmarkRes.count ?? 0,
          wrongCount: wrongRes.count ?? 0,
        });
      } catch { /* */ } finally { setLoading(false); }
    }
    fetchStats();
  }, [user.id]);

  const displayName = user.user_metadata?.name || user.user_metadata?.full_name || '학습자';

  return (
    <div className="ph">
      {/* ── Hero Banner ── */}
      <section className="ph-hero">
        <div className="ph-hero-bg">
          <div className="ph-hero-circle ph-hero-circle--1" />
          <div className="ph-hero-circle ph-hero-circle--2" />
          <div className="ph-hero-circle ph-hero-circle--3" />
        </div>
        <div className="container ph-hero-inner">
          <div className="ph-hero-text">
            <h1>
              안녕하세요, <span className="ph-name">{displayName}</span>님!
            </h1>
            <p>오늘도 합격을 향해 한 걸음 더 가까이</p>
          </div>
          {dday && (
            <div className="ph-dday">
              <i className="fa-solid fa-calendar-check" />
              <span className="ph-dday-type">{dday.type}</span>
              <span className="ph-dday-label">{dday.label}</span>
              <span className="ph-dday-num">D-{dday.days === 0 ? 'Day' : dday.days}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="ph-stats-strip">
        <div className="container">
          <div className="ph-stats-row">
            <div className="ph-stat-chip">
              <div className="ph-stat-chip-icon" style={{ background: 'rgba(27,58,107,0.1)', color: '#1B3A6B' }}>
                <i className="fa-solid fa-pen-to-square" />
              </div>
              <div className="ph-stat-chip-body">
                <span className="ph-stat-chip-label">최근 필기</span>
                <span className="ph-stat-chip-value">
                  {loading ? '...' : stats.lastPilgiScore !== null ? `${stats.lastPilgiScore}점` : '-'}
                </span>
              </div>
              {!loading && stats.pilgiPass !== null && (
                <span className={`ph-stat-badge ${stats.pilgiPass ? 'pass' : 'fail'}`}>
                  {stats.pilgiPass ? '합격' : '불합격'}
                </span>
              )}
            </div>
            <div className="ph-stat-chip">
              <div className="ph-stat-chip-icon" style={{ background: 'rgba(61,109,181,0.1)', color: '#3D6DB5' }}>
                <i className="fa-solid fa-file-pen" />
              </div>
              <div className="ph-stat-chip-body">
                <span className="ph-stat-chip-label">최근 실기</span>
                <span className="ph-stat-chip-value">
                  {loading ? '...' : stats.lastSilgiScore !== null ? `${stats.lastSilgiScore}점` : '-'}
                </span>
              </div>
            </div>
            <div className="ph-stat-chip">
              <div className="ph-stat-chip-icon" style={{ background: 'rgba(42,79,138,0.1)', color: '#2A4F8A' }}>
                <i className="fa-solid fa-list-check" />
              </div>
              <div className="ph-stat-chip-body">
                <span className="ph-stat-chip-label">총 시험</span>
                <span className="ph-stat-chip-value">{loading ? '...' : `${stats.totalExams}회`}</span>
              </div>
            </div>
            <div className="ph-stat-chip">
              <div className="ph-stat-chip-icon" style={{ background: 'rgba(30,77,128,0.1)', color: '#1E4D80' }}>
                <i className="fa-solid fa-bookmark" />
              </div>
              <div className="ph-stat-chip-body">
                <span className="ph-stat-chip-label">북마크</span>
                <span className="ph-stat-chip-value">{loading ? '...' : `${stats.bookmarkCount}개`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container ph-body">
        {/* ── 약점과목 알림 ── */}
        {!loading && stats.weakSubject && (
          <div className="ph-alert">
            <i className="fa-solid fa-triangle-exclamation" />
            <span>
              약점 과목: <strong>{stats.weakSubject} ({stats.weakScore}점)</strong> — 집중 학습이 필요합니다
            </span>
            <Link to="/wrong-answers" className="ph-alert-link">오답 복습 <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        )}

        {/* ── Quick Actions ── */}
        <h2 className="ph-section-title"><i className="fa-solid fa-bolt" /> 바로 시작하기</h2>
        <div className="ph-actions">
          <Link to="/pilgi/select" className="ph-action-card ph-action--blue">
            <div className="ph-action-top">
              <div className="ph-action-icon"><i className="fa-solid fa-desktop" /></div>
              <i className="fa-solid fa-arrow-right ph-action-arrow" />
            </div>
            <h3>필기 CBT</h3>
            <p>실전 모의시험으로 실력 점검</p>
          </Link>
          <Link to="/silgi/practice" className="ph-action-card ph-action--green">
            <div className="ph-action-top">
              <div className="ph-action-icon"><i className="fa-solid fa-pen" /></div>
              <i className="fa-solid fa-arrow-right ph-action-arrow" />
            </div>
            <h3>실기 연습</h3>
            <p>서술형 문제 풀고 모범답안 비교</p>
          </Link>
          <Link to="/wrong-answers" className="ph-action-card ph-action--red">
            <div className="ph-action-top">
              <div className="ph-action-icon"><i className="fa-solid fa-rotate-left" /></div>
              {!loading && stats.wrongCount > 0 && (
                <span className="ph-action-badge">{stats.wrongCount}</span>
              )}
              <i className="fa-solid fa-arrow-right ph-action-arrow" />
            </div>
            <h3>오답노트</h3>
            <p>틀린 문제 반복 학습</p>
          </Link>
          <Link to="/summary" className="ph-action-card ph-action--purple">
            <div className="ph-action-top">
              <div className="ph-action-icon"><i className="fa-solid fa-graduation-cap" /></div>
              <i className="fa-solid fa-arrow-right ph-action-arrow" />
            </div>
            <h3>학습 요약</h3>
            <p>핵심 개념 빠르게 복습</p>
          </Link>
        </div>

        {/* ── 과목별 바로가기 ── */}
        <h2 className="ph-section-title"><i className="fa-solid fa-book-open" /> 과목별 학습</h2>
        <div className="ph-subjects">
          {SUBJECTS.map(s => (
            <Link key={s.code} to={`/learn/${s.code}`} className="ph-subject-pill" style={{ '--accent': s.color } as any}>
              <i className={s.icon} />
              <span>{s.name}</span>
              <i className="fa-solid fa-chevron-right ph-pill-arrow" />
            </Link>
          ))}
        </div>

        {/* ── 학습 가이드 ── */}
        <h2 className="ph-section-title"><i className="fa-solid fa-route" /> 오늘의 학습 가이드</h2>
        <div className="ph-guide">
          <div className="ph-guide-step">
            <div className="ph-guide-num">1</div>
            <div className="ph-guide-content">
              <h4>기출문제 풀기</h4>
              <p>기출 CBT로 출제 패턴을 파악하세요</p>
            </div>
            <Link to="/pilgi/select" className="ph-guide-link">시작 <i className="fa-solid fa-arrow-right" /></Link>
          </div>
          <div className="ph-guide-step">
            <div className="ph-guide-num">2</div>
            <div className="ph-guide-content">
              <h4>오답 복습</h4>
              <p>틀린 문제를 해설과 함께 다시 풀어보세요</p>
            </div>
            <Link to="/wrong-answers" className="ph-guide-link">복습 <i className="fa-solid fa-arrow-right" /></Link>
          </div>
          <div className="ph-guide-step">
            <div className="ph-guide-num">3</div>
            <div className="ph-guide-content">
              <h4>실기 서술형 연습</h4>
              <p>주관식 문제 답안 작성 후 모범답안 비교</p>
            </div>
            <Link to="/silgi/practice" className="ph-guide-link">연습 <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        </div>

        {/* ── Dashboard CTA ── */}
        <div className="ph-cta">
          <div className="ph-cta-inner">
            <div className="ph-cta-text">
              <h3>상세 학습 분석이 궁금하다면?</h3>
              <p>과목별 레이더 차트, 합격 예측, 점수 추이를 대시보드에서 확인하세요</p>
            </div>
            <Link to="/dashboard" className="btn btn-primary btn-lg ph-cta-btn">
              <i className="fa-solid fa-chart-pie" /> 대시보드 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   LandingHome — 비로그인 랜딩 페이지
   ═══════════════════════════════════════════ */
function LandingHome() {
  const dday = getDday();
  const allEvents = getExamEvents();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle" style={{
              width: `${4 + i * 3}px`, height: `${4 + i * 3}px`,
              left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%`,
              '--duration': `${15 + i * 3}s`, '--delay': `${i * 2}s`,
            } as React.CSSProperties} />
          ))}
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-award" /> 2026년 직업상담사 1급·2급
            </div>
            <h1 className="hero-title">
              직업상담사<br />
              <span className="highlight">합격을 위한 최적의 학습</span>
            </h1>
            <p className="hero-description">
              기출문제 CBT, 모의시험, 과목별 분석, 오답노트까지.<br />
              체계적인 시험 준비로 한 번에 합격하세요.
            </p>
            <div className="hero-buttons">
              <Link to="/pilgi" className="btn btn-primary">
                <i className="fa-solid fa-pen-to-square" /> 필기 시작하기
              </Link>
              <Link to="/info" className="btn btn-secondary">
                <i className="fa-solid fa-circle-info" /> 시험 안내
              </Link>
            </div>
          </div>

          {/* 시험 일정 — hero-content 밖, container 안 (전폭 사용) */}
          {allEvents.length > 0 && (
            <div className="hero-exam-schedule">
              <div className="hero-schedule-title">
                <i className="fa-solid fa-calendar-check" /> 2026 시험 일정
              </div>
              <div className="hero-schedule-cards">
                {allEvents.slice(0, 3).map((evt, idx) => {
                  const typeClass =
                    evt.type === '필기시험' || evt.type === '실기시험' ? 'exam'
                    : evt.type === '필기접수' || evt.type === '실기접수' ? 'register'
                    : 'announce';
                  const typeIcon =
                    typeClass === 'exam' ? 'fa-solid fa-pen-to-square'
                    : typeClass === 'register' ? 'fa-solid fa-clipboard-list'
                    : 'fa-solid fa-bullhorn';
                  const ddayText = evt.days < 0 ? '진행중' : evt.days === 0 ? 'D-Day' : `D-${evt.days}`;
                  return (
                    <div key={idx} className={`hero-schedule-card ${typeClass}${idx === 0 ? ' nearest' : ''}`}>
                      <span className={`hero-schedule-type ${typeClass}`}>
                        <i className={typeIcon} /> {evt.type}
                      </span>
                      <div className="hero-schedule-info">
                        <span className="hero-schedule-label">{evt.label}</span>
                        <span className="hero-schedule-date">{evt.dateStr}</span>
                      </div>
                      <span className={`hero-schedule-dday ${typeClass}`}>{ddayText}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="scroll-indicator">
          <div className="mouse"><div className="wheel" /></div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

      {/* Subjects */}
      <section className="home-section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">SUBJECTS</div>
            <h2 className="section-title">5개 필기 과목</h2>
            <p className="section-subtitle">과목별 맞춤 학습으로 약점을 보완하고 합격을 준비하세요</p>
          </div>
          <div className="home-subjects-grid">
            {SUBJECTS.map((subject, idx) => (
              <div key={subject.code} className="home-subject-card"
                style={{ borderLeftColor: subject.color }}>
                <div className="home-subject-icon" style={{ background: `${subject.color}15`, color: subject.color }}>
                  <i className={subject.icon} />
                </div>
                <h4>{subject.name}</h4>
                <p className="home-subject-desc">
                  {subject.code === 'counseling' && '상담이론, 상담기법, 직업상담 과정 등'}
                  {subject.code === 'psychology' && '직업심리검사, 직업적성, 흥미이론 등'}
                  {subject.code === 'jobinfo' && '직업분류, 직업정보 수집·분석, 워크넷 등'}
                  {subject.code === 'labor_market' && '노동시장 이론, 임금, 실업, 인적자본 등'}
                  {subject.code === 'labor_law' && '근로기준법, 고용보험법, 직업안정법 등'}
                </p>
                <span className="home-subject-questions">20문항 / 과목</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="home-section home-features-section" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">FEATURES</div>
            <h2 className="section-title">학습 기능</h2>
            <p className="section-subtitle">합격을 위한 다양한 학습 도구를 제공합니다</p>
          </div>
          <div className="home-features-grid">
            {[
              { icon: 'fa-solid fa-desktop', title: 'CBT 모의시험', desc: '실제 시험과 동일한 환경의 온라인 CBT로 실전 감각을 키우세요', color: '#1B3A6B', highlight: true },
              { icon: 'fa-solid fa-book-open', title: '학습 모드', desc: '답 선택 즉시 정답과 해설을 확인하며 효율적으로 학습하세요', color: '#2A4F8A' },
              { icon: 'fa-solid fa-chart-pie', title: '과목별 분석', desc: '레이더 차트로 강점과 약점을 한눈에 파악하세요', color: '#3D6DB5' },
              { icon: 'fa-solid fa-rotate-left', title: '오답 노트', desc: '틀린 문제를 모아 반복 학습으로 실력을 올리세요', color: '#1E4D80' },
              { icon: 'fa-solid fa-trophy', title: '합격 예측', desc: '최근 시험 결과를 분석하여 합격 확률을 예측합니다', color: '#0F2444', highlight: true },
              { icon: 'fa-solid fa-file-pen', title: '실기 연습', desc: '서술형 문제와 모범답안 비교로 실기도 준비하세요', color: '#1B3A6B', highlight: true },
            ].map((feat, idx) => (
              <div key={idx} className={`home-feature-card${(feat as any).highlight ? ' home-feature-card--highlight' : ''}`} style={{ borderLeftColor: feat.color }}>
                <div className="home-feature-icon" style={{ color: feat.color, background: `${feat.color}12` }}>
                  <i className={feat.icon} />
                </div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Roadmap */}
      <section className="home-section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">ROADMAP</div>
            <h2 className="section-title">학습 로드맵</h2>
            <p className="section-subtitle">체계적인 4단계 학습 프로세스를 따라가세요</p>
          </div>
          <div className="home-overview-grid">
            {[
              { icon: 'fa-solid fa-book-open', step: 'STEP 1', title: '이론 학습', desc: '과목별 핵심 이론과 개념을 먼저 학습합니다', link: '/learn' },
              { icon: 'fa-solid fa-pen-to-square', step: 'STEP 2', title: '기출문제 풀이', desc: 'CBT 모의시험으로 실전 감각을 익힙니다', link: '/pilgi/select' },
              { icon: 'fa-solid fa-rotate-left', step: 'STEP 3', title: '오답 복습', desc: '틀린 문제를 분석하고 약점을 보완합니다', link: '/wrong-answers' },
              { icon: 'fa-solid fa-trophy', step: 'STEP 4', title: '합격 달성', desc: '반복 학습으로 합격 점수를 안정적으로 확보합니다', link: '/dashboard' },
            ].map((item, idx) => (
              <Link key={idx} to={item.link} className="home-overview-step" style={{ textDecoration: 'none' }}>
                <div className="home-overview-step-num">{item.step}</div>
                <div className="home-overview-icon"><i className={item.icon} /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            {dday && (
              <div className="home-stat-item home-stat-dday">
                <span className="home-stat-number">D-{dday.days === 0 ? 'Day' : dday.days}</span>
                <span className="home-stat-label">{dday.label} ({dday.dateStr})</span>
              </div>
            )}
            <div className="home-stat-item">
              <span className="home-stat-number">5</span>
              <span className="home-stat-label">필기 과목</span>
            </div>
            <div className="home-stat-item">
              <span className="home-stat-number">100</span>
              <span className="home-stat-label">문항 / 100분</span>
            </div>
            <div className="home-stat-item">
              <span className="home-stat-number">60</span>
              <span className="home-stat-label">점 (합격기준)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-content">
            <h2>지금 바로 시작하세요</h2>
            <p>첫 필기 CBT 1회 무료 체험! 합리적인 이용권으로 모든 학습 콘텐츠를 이용하세요.</p>
            <div className="home-cta-buttons">
              <Link to="/about/pricing" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-tags" /> 요금제 보기
              </Link>
              <Link to="/login" className="btn btn-secondary btn-lg">
                <i className="fa-solid fa-rocket" /> 무료 체험하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <SEOHead />
      <LandingHome />
    </>
  );
}

export { LoggedInHome };
