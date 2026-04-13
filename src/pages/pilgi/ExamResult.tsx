import { useLocation, useNavigate, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { RadarChart } from '../../components/ScoreChart';
import { SUBJECTS, EXAM_CONFIG } from '../../config/site';
import { checkPass, getGrade, formatTime } from '../../utils/scoring';

export default function ExamResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, answers, session, subjectScores } = location.state || {};

  if (!session) {
    return (
      <div className="loading-page" style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="text-center">
          <p>결과 데이터가 없습니다.</p>
          <Link to="/pilgi" className="btn btn-primary mt-3">필기 홈으로</Link>
        </div>
      </div>
    );
  }

  const { isPass, failedSubjects, avgPass, allSubjectsPass } = checkPass(subjectScores, session.score_total);
  const grade = getGrade(session.score_total);
  const correctRate = questions?.length
    ? Math.round((session.correct_count / questions.length) * 100)
    : 0;

  // 과목별 정렬 (점수 낮은 순)
  const sortedSubjects = [...SUBJECTS].sort(
    (a, b) => (subjectScores[a.code] ?? 0) - (subjectScores[b.code] ?? 0)
  );
  const bestSubject = [...SUBJECTS].sort(
    (a, b) => (subjectScores[b.code] ?? 0) - (subjectScores[a.code] ?? 0)
  )[0];

  return (
    <>
      <SEOHead title="시험 결과" />

      {/* Hero Banner */}
      <div className={`er-hero ${isPass ? 'er-hero--pass' : 'er-hero--fail'}`}>
        <div className="er-hero-deco er-hero-deco--1" />
        <div className="er-hero-deco er-hero-deco--2" />
        <div className="er-hero-deco er-hero-deco--3" />
        <div className="container">
          <div className="er-hero-inner">
            <div className="er-hero-icon">
              <i className={isPass ? 'fa-solid fa-trophy' : 'fa-solid fa-rotate-left'} />
            </div>
            <div className="er-hero-result">
              <span className="er-hero-badge">
                {isPass ? '합격' : '불합격'}
              </span>
              <p className="er-hero-msg">
                {isPass
                  ? '축하합니다! 합격 기준을 충족했습니다.'
                  : '아쉽지만 합격 기준에 미달했습니다. 다시 도전해보세요!'}
              </p>
            </div>
            <div className="er-hero-score-box">
              <span className="er-hero-score">{session.score_total}</span>
              <span className="er-hero-score-unit">점</span>
              <span className="er-hero-score-sub">/ 100점</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>

        {/* Pass Criteria Check */}
        <div className="er-criteria">
          <div className={`er-criteria-item ${avgPass ? 'er-criteria--ok' : 'er-criteria--no'}`}>
            <i className={avgPass ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'} />
            <div>
              <strong>평균 {EXAM_CONFIG.pilgi.passScore}점 이상</strong>
              <span>{session.score_total}점 — {avgPass ? '충족' : '미달'}</span>
            </div>
          </div>
          <div className={`er-criteria-item ${allSubjectsPass ? 'er-criteria--ok' : 'er-criteria--no'}`}>
            <i className={allSubjectsPass ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'} />
            <div>
              <strong>과목별 {EXAM_CONFIG.pilgi.subjectMinScore}점 이상</strong>
              <span>{allSubjectsPass ? '전 과목 충족' : `${failedSubjects.length}과목 과락`}</span>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="er-stats">
          <div className="er-stat">
            <div className="er-stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
              <i className="fa-solid fa-check-double" />
            </div>
            <div className="er-stat-body">
              <span className="er-stat-value">{session.correct_count}<small> / {questions?.length || 100}</small></span>
              <span className="er-stat-label">정답 수</span>
            </div>
          </div>
          <div className="er-stat">
            <div className="er-stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
              <i className="fa-solid fa-percentage" />
            </div>
            <div className="er-stat-body">
              <span className="er-stat-value">{correctRate}%</span>
              <span className="er-stat-label">정답률</span>
            </div>
          </div>
          <div className="er-stat">
            <div className="er-stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
              <i className="fa-solid fa-clock" />
            </div>
            <div className="er-stat-body">
              <span className="er-stat-value">{formatTime(session.time_spent_sec)}</span>
              <span className="er-stat-label">소요 시간</span>
            </div>
          </div>
          <div className="er-stat">
            <div className="er-stat-icon" style={{ background: `${grade.color}18`, color: grade.color }}>
              <i className="fa-solid fa-award" />
            </div>
            <div className="er-stat-body">
              <span className="er-stat-value" style={{ color: grade.color }}>{grade.label}</span>
              <span className="er-stat-label">등급</span>
            </div>
          </div>
        </div>

        {/* Failed Subjects Warning */}
        {failedSubjects.length > 0 && (
          <div className="er-fail-alert">
            <div className="er-fail-alert-header">
              <i className="fa-solid fa-triangle-exclamation" />
              <strong>과락 과목 ({failedSubjects.length}과목)</strong>
            </div>
            <div className="er-fail-list">
              {failedSubjects.map(s => (
                <div key={s.code} className="er-fail-item">
                  <i className={s.icon} style={{ color: s.color }} />
                  <span className="er-fail-name">{s.name}</span>
                  <span className="er-fail-score">{subjectScores[s.code]}점</span>
                  <span className="er-fail-gap">(-{EXAM_CONFIG.pilgi.subjectMinScore - subjectScores[s.code]}점 부족)</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subject Scores */}
        <section className="er-section">
          <h3 className="er-section-title">
            <i className="fa-solid fa-chart-bar" /> 과목별 성적
          </h3>
          <div className="er-subjects">
            {SUBJECTS.map(subject => {
              const score = subjectScores[subject.code] ?? 0;
              const passed = score >= EXAM_CONFIG.pilgi.subjectMinScore;
              return (
                <div key={subject.code} className={`er-subject ${passed ? '' : 'er-subject--fail'}`}>
                  <div className="er-subject-top">
                    <div className="er-subject-info">
                      <span className="er-subject-icon" style={{ background: `${subject.color}15`, color: subject.color }}>
                        <i className={subject.icon} />
                      </span>
                      <span className="er-subject-name">{subject.name}</span>
                    </div>
                    <div className="er-subject-right">
                      <span className={`er-subject-badge ${passed ? 'er-subject-badge--pass' : 'er-subject-badge--fail'}`}>
                        {passed ? '통과' : '과락'}
                      </span>
                      <span className="er-subject-score" style={{ color: passed ? subject.color : 'var(--color-wrong)' }}>
                        {score}점
                      </span>
                    </div>
                  </div>
                  <div className="er-subject-bar">
                    <div
                      className="er-subject-bar-fill"
                      style={{
                        width: `${score}%`,
                        background: passed
                          ? `linear-gradient(90deg, ${subject.color}cc, ${subject.color})`
                          : 'linear-gradient(90deg, #EF4444cc, #EF4444)',
                      }}
                    />
                    <div className="er-subject-bar-mark" style={{ left: '40%' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Radar Chart + Best/Weak Summary */}
        <section className="er-section">
          <h3 className="er-section-title">
            <i className="fa-solid fa-chart-pie" /> 과목별 분석
          </h3>
          <div className="er-analysis">
            <div className="er-analysis-chart">
              <RadarChart scores={subjectScores} />
            </div>
            <div className="er-analysis-summary">
              <div className="er-analysis-card er-analysis-card--best">
                <div className="er-analysis-card-icon">
                  <i className="fa-solid fa-star" />
                </div>
                <div>
                  <span className="er-analysis-card-label">최고 과목</span>
                  <span className="er-analysis-card-value" style={{ color: bestSubject.color }}>
                    {bestSubject.name}
                  </span>
                  <span className="er-analysis-card-score">{subjectScores[bestSubject.code]}점</span>
                </div>
              </div>
              {sortedSubjects[0] && (
                <div className="er-analysis-card er-analysis-card--weak">
                  <div className="er-analysis-card-icon">
                    <i className="fa-solid fa-bullseye" />
                  </div>
                  <div>
                    <span className="er-analysis-card-label">보강 필요</span>
                    <span className="er-analysis-card-value" style={{ color: sortedSubjects[0].color }}>
                      {sortedSubjects[0].name}
                    </span>
                    <span className="er-analysis-card-score">{subjectScores[sortedSubjects[0].code]}점</span>
                  </div>
                </div>
              )}
              <div className="er-analysis-tip">
                {isPass
                  ? '합격을 축하합니다! 실기 시험도 함께 준비해보세요.'
                  : `${sortedSubjects[0]?.name} 과목을 집중 학습하면 합격에 한 걸음 더 가까워집니다.`}
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="er-actions">
          <Link
            to={`/pilgi/review/${session.id}`}
            className="er-action-btn er-action-btn--primary"
            state={{ questions, answers }}
          >
            <i className="fa-solid fa-magnifying-glass" />
            <span>오답 복습</span>
            <small>틀린 문제 확인하기</small>
          </Link>
          <Link to="/pilgi/select" className="er-action-btn er-action-btn--secondary">
            <i className="fa-solid fa-rotate-right" />
            <span>다시 시험보기</span>
            <small>새로운 문제 도전</small>
          </Link>
          <Link to="/dashboard" className="er-action-btn er-action-btn--secondary">
            <i className="fa-solid fa-chart-pie" />
            <span>대시보드</span>
            <small>전체 학습 현황</small>
          </Link>
        </div>

      </div>
    </>
  );
}
