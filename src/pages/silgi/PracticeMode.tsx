import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { SILGI_FREQUENT, FREQUENT_CATEGORIES } from '../../data/silgiFrequent';
import { supabase, TABLES } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { formatTime } from '../../utils/scoring';

type Phase = 'setup' | 'practice' | 'result';

interface QuestionResult {
  questionNum: number;
  category: string;
  title: string;
  userAnswer: string;
  keywords: string[];
  matched: string[];
  score: number;
}

/* ── helpers ── */

function getFreqCount(frequency: string) {
  return (frequency.match(/,/g) || []).length + 1;
}

function extractKeywords(item: any): string[] {
  const kws = new Set<string>();
  const rx = /<strong>(.*?)<\/strong>/g;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(item.answer)) !== null) {
    const t = m[1].replace(/<[^>]*>/g, '').trim();
    if (t.length >= 2 && t.length <= 40 && !/^[0-9.]+$/.test(t)) kws.add(t);
  }
  return [...kws];
}

function matchKeywords(answer: string, keywords: string[]) {
  const lower = answer.toLowerCase().replace(/\s+/g, '');
  return keywords.filter(kw => lower.includes(kw.toLowerCase().replace(/\s+/g, '')));
}

function highlightKeywords(text: string, keywords: string[], matched: string[]) {
  if (!text) return '';
  let result = text;
  matched.forEach(kw => {
    const rx = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    result = result.replace(rx, '<mark class="kw-highlight">$1</mark>');
  });
  return result;
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, ' ').trim();
}

const GRADE_FILTERS = [
  { id: 'all', label: '전체', icon: 'fa-solid fa-list' },
  { id: '5', label: '최다빈출 (5+)', icon: 'fa-solid fa-fire-flame-curved', cls: 'sq-freq-grade--5' },
  { id: '4', label: '고빈출 (4회)', icon: 'fa-solid fa-fire', cls: 'sq-freq-grade--4' },
  { id: '3', label: '빈출 (3회)', icon: 'fa-solid fa-bolt', cls: 'sq-freq-grade--3' },
  { id: '2', label: '출제 (2회)', icon: 'fa-solid fa-circle-check', cls: 'sq-freq-grade--2' },
  { id: '1', label: '1회', icon: 'fa-regular fa-circle', cls: 'sq-freq-grade--1' },
];

const COUNT_OPTIONS = [10, 20, 30, 0]; // 0 = all

/* ── Component ── */

export default function PracticeMode() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Phase
  const [phase, setPhase] = useState<Phase>('setup');

  // Setup
  const [selCategory, setSelCategory] = useState('all');
  const [selGrade, setSelGrade] = useState('all');
  const [selCount, setSelCount] = useState(20);

  // Practice
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [saving, setSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<number>(0);

  // Timer
  useEffect(() => {
    if (phase === 'practice') {
      timerRef.current = window.setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [phase, startTime]);

  // Filtered pool
  const filteredPool = useMemo(() => {
    let pool = [...SILGI_FREQUENT].map(q => ({ ...q, freqCount: getFreqCount(q.frequency) }));
    if (selCategory !== 'all') pool = pool.filter(q => q.category === selCategory);
    if (selGrade !== 'all') {
      const grade = Number(selGrade);
      if (grade >= 5) pool = pool.filter(q => q.freqCount >= 5);
      else pool = pool.filter(q => q.freqCount === grade);
    }
    return pool;
  }, [selCategory, selGrade]);

  const handleStart = () => {
    let pool = [...filteredPool];
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    // Limit
    if (selCount > 0) pool = pool.slice(0, selCount);
    if (!pool.length) {
      showToast('조건에 맞는 문제가 없습니다.', 'error');
      return;
    }
    setQuestions(pool);
    setCurrentIdx(0);
    setUserAnswer('');
    setRevealed(false);
    setResults([]);
    setStartTime(Date.now());
    setElapsed(0);
    setPhase('practice');
  };

  const currentQ = questions[currentIdx];
  const currentKeywords = useMemo(() => currentQ ? extractKeywords(currentQ) : [], [currentQ]);
  const currentMatched = useMemo(() => revealed ? matchKeywords(userAnswer, currentKeywords) : [], [revealed, userAnswer, currentKeywords]);

  const handleReveal = () => {
    setRevealed(true);
    const matched = matchKeywords(userAnswer, currentKeywords);
    const score = currentKeywords.length > 0 ? Math.round((matched.length / currentKeywords.length) * 100) : 0;
    setResults(prev => [...prev, {
      questionNum: currentQ.num,
      category: currentQ.category,
      title: currentQ.title,
      userAnswer,
      keywords: currentKeywords,
      matched,
      score,
    }]);
  };

  const handleNext = () => {
    if (currentIdx >= questions.length - 1) {
      clearInterval(timerRef.current);
      setPhase('result');
      return;
    }
    setCurrentIdx(prev => prev + 1);
    setUserAnswer('');
    setRevealed(false);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    // Go back — remove last result if going back from revealed
    setCurrentIdx(prev => prev - 1);
    const prevResult = results.find(r => r.questionNum === questions[currentIdx - 1]?.num);
    setUserAnswer(prevResult?.userAnswer || '');
    setRevealed(!!prevResult);
  };

  const handleFinish = () => {
    // If current question not yet revealed, reveal first
    if (!revealed && userAnswer.trim()) {
      handleReveal();
    }
    clearInterval(timerRef.current);
    setPhase('result');
  };

  // Result calculations
  const totalScore = useMemo(() => {
    if (!results.length) return 0;
    return Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
  }, [results]);

  const subjectScores = useMemo(() => {
    const map: Record<string, { total: number; sum: number }> = {};
    results.forEach(r => {
      if (!map[r.category]) map[r.category] = { total: 0, sum: 0 };
      map[r.category].total++;
      map[r.category].sum += r.score;
    });
    const scores: Record<string, number> = {};
    Object.entries(map).forEach(([cat, { total, sum }]) => {
      scores[cat] = Math.round(sum / total);
    });
    return scores;
  }, [results]);

  const isPass = totalScore >= 60;

  const handleSave = useCallback(async () => {
    if (!user) {
      showToast('로그인이 필요합니다.', 'error');
      return;
    }
    setSaving(true);
    try {
      const correctCount = results.filter(r => r.score >= 60).length;
      const { error } = await supabase.from(TABLES.EXAM_SESSIONS).insert({
        user_id: user.id,
        exam_type: 'silgi_practice',
        score_total: totalScore,
        correct_count: correctCount,
        total_questions: results.length,
        time_spent_sec: elapsed,
        is_pass: isPass,
        score_by_subject: subjectScores,
        completed_at: new Date().toISOString(),
        status: 'completed',
      });
      if (error) throw error;
      showToast('결과가 저장되었습니다!', 'success');
    } catch (err: any) {
      showToast('저장 실패: ' + (err.message || ''), 'error');
    }
    setSaving(false);
  }, [user, results, totalScore, elapsed, isPass, subjectScores, showToast]);

  /* ═══════ RENDER: SETUP ═══════ */
  if (phase === 'setup') {
    return (
      <>
        <SEOHead title="실기 서술형 연습" />
        <div className="page-header">
          <div className="container">
            <h1><i className="fa-solid fa-pen-fancy" /> 실기 서술형 연습</h1>
            <p className="page-desc">서술형 문제를 풀고 모범답안과 비교하세요</p>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: 80 }}>
          <div className="practice-setup">
            {/* Category Filter */}
            <div className="practice-setup-section">
              <h3><i className="fa-solid fa-layer-group" /> 과목 선택</h3>
              <div className="practice-setup-options">
                {FREQUENT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    className={`practice-setup-btn ${selCategory === cat.id ? 'active' : ''}`}
                    style={selCategory === cat.id ? { borderColor: cat.color, color: cat.color } : {}}
                    onClick={() => setSelCategory(cat.id)}
                  >
                    <i className={cat.icon} /> {cat.label}
                    <span className="practice-setup-btn-count">
                      {cat.id === 'all' ? SILGI_FREQUENT.length : SILGI_FREQUENT.filter(q => q.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency Grade Filter */}
            <div className="practice-setup-section">
              <h3><i className="fa-solid fa-signal" /> 빈출 등급</h3>
              <div className="practice-setup-options">
                {GRADE_FILTERS.map(g => (
                  <button
                    key={g.id}
                    className={`practice-setup-btn ${selGrade === g.id ? 'active' : ''} ${g.cls || ''}`}
                    onClick={() => setSelGrade(g.id)}
                  >
                    <i className={g.icon} /> {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Count */}
            <div className="practice-setup-section">
              <h3><i className="fa-solid fa-hashtag" /> 문제 수</h3>
              <div className="practice-setup-options">
                {COUNT_OPTIONS.map(n => (
                  <button
                    key={n}
                    className={`practice-setup-btn ${selCount === n ? 'active' : ''}`}
                    onClick={() => setSelCount(n)}
                  >
                    {n === 0 ? '전체' : `${n}문제`}
                  </button>
                ))}
              </div>
              <p className="practice-setup-note">
                선택 조건: <strong>{filteredPool.length}문제</strong> 중 {selCount === 0 ? '전체' : `${Math.min(selCount, filteredPool.length)}문제`} 랜덤 출제
              </p>
            </div>

            <button className="btn btn-primary btn-lg practice-start-btn" onClick={handleStart} disabled={!filteredPool.length}>
              <i className="fa-solid fa-play" /> 연습 시작
            </button>
          </div>
        </div>
      </>
    );
  }

  /* ═══════ RENDER: PRACTICE ═══════ */
  if (phase === 'practice' && currentQ) {
    const progress = ((currentIdx + 1) / questions.length) * 100;
    const freqCount = currentQ.freqCount || getFreqCount(currentQ.frequency);
    const catInfo = FREQUENT_CATEGORIES.find(c => c.id === currentQ.category);

    return (
      <>
        <SEOHead title={`실기 연습 ${currentIdx + 1}/${questions.length}`} />
        <div className="page-header page-header--compact">
          <div className="container">
            <div className="practice-topbar">
              <span className="practice-progress-label">
                <i className="fa-solid fa-pen" /> {currentIdx + 1} / {questions.length}
              </span>
              <span className="practice-timer">
                <i className="fa-regular fa-clock" /> {formatTime(elapsed)}
              </span>
              <button className="btn btn-sm btn-secondary" onClick={handleFinish}>
                <i className="fa-solid fa-flag-checkered" /> 연습 종료
              </button>
            </div>
            <div className="practice-progress-bar">
              <div className="practice-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: 80 }}>
          <div className="practice-question-card">
            <div className="practice-question-header">
              <span className="practice-question-num">Q{currentIdx + 1}</span>
              <div className="practice-question-badges">
                {catInfo && (
                  <span className="sq-badge sq-badge--keyword" style={{ color: catInfo.color, borderColor: catInfo.color }}>
                    <i className={catInfo.icon} /> {catInfo.label}
                  </span>
                )}
                <span className="sq-badge sq-badge--freq">
                  <i className="fa-solid fa-chart-bar" /> {freqCount}회 출제
                </span>
              </div>
            </div>

            <p className="practice-question-text">{currentQ.title}</p>

            {!revealed ? (
              <>
                <div className="practice-answer-area">
                  <label className="practice-label">답안 작성</label>
                  <textarea
                    ref={textareaRef}
                    className="answer-textarea"
                    value={userAnswer}
                    onChange={e => setUserAnswer(e.target.value)}
                    placeholder="답안을 작성하세요... (핵심 키워드를 포함하여 서술)"
                    rows={8}
                  />
                  <div className="answer-char-count">{userAnswer.length}자</div>
                </div>
                <button
                  className="btn btn-primary practice-reveal-btn"
                  onClick={handleReveal}
                  disabled={!userAnswer.trim()}
                >
                  <i className="fa-solid fa-eye" /> 모범답안 확인
                </button>
              </>
            ) : (
              <>
                {/* Side-by-side Comparison */}
                <div className="practice-comparison">
                  <div className="practice-comparison-col">
                    <h4 className="practice-comparison-title practice-comparison-title--mine">
                      <i className="fa-solid fa-user" /> 내 답안
                    </h4>
                    <div
                      className="practice-comparison-text"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(
                          userAnswer.replace(/\n/g, '<br/>'),
                          currentKeywords,
                          currentMatched,
                        ),
                      }}
                    />
                  </div>
                  <div className="practice-comparison-col">
                    <h4 className="practice-comparison-title practice-comparison-title--model">
                      <i className="fa-solid fa-star" /> 모범답안
                    </h4>
                    <div className="practice-comparison-text sq-section-content" dangerouslySetInnerHTML={{ __html: currentQ.answer }} />
                  </div>
                </div>

                {/* Keyword Analysis */}
                {currentKeywords.length > 0 && (
                  <div className="keyword-analysis">
                    <div className="keyword-analysis-title">
                      <i className="fa-solid fa-key" /> 키워드 매칭 ({currentMatched.length}/{currentKeywords.length})
                    </div>
                    <div className="keyword-list">
                      {currentKeywords.map((kw, i) => (
                        <span key={i} className={currentMatched.includes(kw) ? 'keyword-match' : 'keyword-miss'}>
                          {kw}
                        </span>
                      ))}
                    </div>
                    <div className="keyword-score">
                      키워드 일치율:
                      <span className="keyword-score-value">
                        {currentKeywords.length > 0 ? Math.round((currentMatched.length / currentKeywords.length) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="practice-nav">
                  <button className="btn btn-secondary btn-sm" onClick={handlePrev} disabled={currentIdx === 0}>
                    <i className="fa-solid fa-chevron-left" /> 이전
                  </button>
                  <span className="practice-nav-info">{currentIdx + 1} / {questions.length}</span>
                  {currentIdx < questions.length - 1 ? (
                    <button className="btn btn-primary btn-sm" onClick={handleNext}>
                      다음 <i className="fa-solid fa-chevron-right" />
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-sm" onClick={() => { clearInterval(timerRef.current); setPhase('result'); }}>
                      결과 보기 <i className="fa-solid fa-chart-column" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  /* ═══════ RENDER: RESULT ═══════ */
  if (phase === 'result') {
    const weakCats = Object.entries(subjectScores)
      .filter(([, score]) => score < 60)
      .sort(([, a], [, b]) => a - b);

    return (
      <>
        <SEOHead title="실기 연습 결과" />
        <div className="page-header">
          <div className="container">
            <h1><i className="fa-solid fa-chart-column" /> 실기 연습 결과</h1>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: 80 }}>
          {/* Score Banner */}
          <div className={`practice-result-banner ${isPass ? 'pass' : 'fail'}`}>
            <div className="practice-result-banner-score">{totalScore}점</div>
            <div className="practice-result-banner-label">{isPass ? '합격 수준' : '불합격 수준'}</div>
            <div className="practice-result-banner-sub">
              키워드 매칭 평균 | 합격 기준 60%
            </div>
          </div>

          {/* Stats Row */}
          <div className="practice-result-stats">
            <div className="practice-result-stat">
              <span className="practice-result-stat-value">{results.length}</span>
              <span className="practice-result-stat-label">풀이 문제</span>
            </div>
            <div className="practice-result-stat">
              <span className="practice-result-stat-value">{results.filter(r => r.score >= 60).length}</span>
              <span className="practice-result-stat-label">합격 문제</span>
            </div>
            <div className="practice-result-stat">
              <span className="practice-result-stat-value">{formatTime(elapsed)}</span>
              <span className="practice-result-stat-label">소요 시간</span>
            </div>
            <div className="practice-result-stat">
              <span className="practice-result-stat-value">{totalScore}%</span>
              <span className="practice-result-stat-label">평균 일치율</span>
            </div>
          </div>

          {/* Subject Breakdown */}
          <div className="practice-result practice-result--subjects">
            <h3><i className="fa-solid fa-chart-pie" /> 과목별 점수</h3>
            <div className="practice-result-breakdown">
              {FREQUENT_CATEGORIES.filter(c => c.id !== 'all').map(cat => {
                const score = subjectScores[cat.id] ?? 0;
                const count = results.filter(r => r.category === cat.id).length;
                if (!count) return null;
                return (
                  <div key={cat.id} className="practice-result-subject-row">
                    <div className="practice-result-subject-info">
                      <span style={{ color: cat.color }}><i className={cat.icon} /> {cat.label}</span>
                      <span className="practice-result-subject-count">{count}문제</span>
                    </div>
                    <div className="practice-result-bar-track">
                      <div
                        className={`practice-result-bar-fill ${score >= 60 ? 'pass' : 'fail'}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className={`practice-result-subject-score ${score >= 60 ? 'pass' : 'fail'}`}>
                      {score}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weak Areas */}
          {weakCats.length > 0 && (
            <div className="practice-result practice-result--weak">
              <h3><i className="fa-solid fa-triangle-exclamation" /> 약점 분석</h3>
              <ul className="practice-result-weak-list">
                {weakCats.map(([catId, score]) => {
                  const cat = FREQUENT_CATEGORIES.find(c => c.id === catId);
                  return (
                    <li key={catId}>
                      <strong>{cat?.label || catId}</strong> 과목 키워드 매칭률이 <strong style={{ color: '#DC2626' }}>{score}%</strong>로 낮습니다.
                      핵심 키워드를 다시 학습하세요.
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Question Detail */}
          <div className="practice-result practice-result--detail">
            <h3><i className="fa-solid fa-list-ol" /> 문제별 결과</h3>
            <div className="practice-result-breakdown">
              {results.map((r, i) => {
                const cat = FREQUENT_CATEGORIES.find(c => c.id === r.category);
                return (
                  <div key={i} className="practice-result-item">
                    <span className="practice-result-question">
                      <span className="practice-result-q-num">Q{i + 1}</span>
                      <span className="practice-result-q-cat" style={{ color: cat?.color }}>
                        {cat?.label}
                      </span>
                      <span className="practice-result-q-title">{r.title.length > 40 ? r.title.slice(0, 40) + '...' : r.title}</span>
                    </span>
                    <span className={`practice-result-points ${r.score >= 80 ? 'full' : r.score >= 60 ? 'partial' : 'zero'}`}>
                      {r.matched.length}/{r.keywords.length} ({r.score}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="practice-result-actions">
            {user && (
              <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                <i className="fa-solid fa-cloud-arrow-up" /> {saving ? '저장 중...' : '결과 저장'}
              </button>
            )}
            <button className="btn btn-secondary" onClick={() => { setPhase('setup'); setResults([]); }}>
              <i className="fa-solid fa-rotate-right" /> 다시 연습
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/silgi')}>
              <i className="fa-solid fa-house" /> 실기 홈
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
              <i className="fa-solid fa-chart-pie" /> 대시보드
            </button>
          </div>
        </div>
      </>
    );
  }

  return null;
}
