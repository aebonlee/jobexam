import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { SUBJECTS, SUBJECTS_1 } from '../../config/site';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, TABLES } from '../../lib/supabase';

function getDday(): { label: string; days: number } | null {
  const exams = [
    { label: '2회 필기시험', date: new Date(2026, 4, 9) },
    { label: '3회 필기 접수', date: new Date(2026, 6, 20) },
    { label: '3회 필기시험', date: new Date(2026, 7, 7) },
  ];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const exam of exams) {
    const diff = Math.ceil((exam.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (diff >= 0) {
      return { label: exam.label, days: diff };
    }
  }
  return null;
}

function MyExamStatus({ user }: { user: any }) {
  const [stats, setStats] = useState<{
    pilgiExams: number;
    silgiExams: number;
    lastPilgiPass: boolean | null;
  }>({ pilgiExams: 0, silgiExams: 0, lastPilgiPass: null });
  const [loading, setLoading] = useState(true);
  const dday = getDday();

  useEffect(() => {
    async function fetch() {
      try {
        const [pilgiRes, silgiRes] = await Promise.all([
          supabase
            .from(TABLES.EXAM_SESSIONS)
            .select('is_pass')
            .eq('user_id', user.id)
            .eq('exam_type', 'pilgi')
            .not('completed_at', 'is', null)
            .order('completed_at', { ascending: false })
            .limit(5),
          supabase
            .from(TABLES.EXAM_SESSIONS)
            .select('id', { count: 'exact', head: true })
            .eq('user_id', user.id)
            .eq('exam_type', 'silgi_practice')
            .not('completed_at', 'is', null),
        ]);

        setStats({
          pilgiExams: pilgiRes.data?.length ?? 0,
          silgiExams: silgiRes.count ?? 0,
          lastPilgiPass: pilgiRes.data?.[0]?.is_pass ?? null,
        });
      } catch {
        // fail silently
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [user.id]);

  return (
    <div className="my-status-card" style={{ borderLeftColor: '#F59E0B' }}>
      <h3><i className="fa-solid fa-user-check" style={{ color: '#F59E0B' }} /> 나의 시험 준비 현황</h3>

      {dday && (
        <div className="my-status-dday">
          <i className="fa-solid fa-calendar-check" />
          {dday.label}까지 D-{dday.days === 0 ? 'Day' : dday.days}
        </div>
      )}

      {loading ? (
        <p style={{ color: 'var(--text-secondary)' }}>불러오는 중...</p>
      ) : (
        <>
          <div className="my-status-stats">
            <div className="my-status-stat">
              <span className="my-status-stat-label">필기 시험</span>
              <span className="my-status-stat-value">{stats.pilgiExams}회</span>
            </div>
            <div className="my-status-stat">
              <span className="my-status-stat-label">실기 연습</span>
              <span className="my-status-stat-value">{stats.silgiExams}회</span>
            </div>
            <div className="my-status-stat">
              <span className="my-status-stat-label">최근 필기</span>
              <span className="my-status-stat-value">
                {stats.lastPilgiPass === null ? '-' : stats.lastPilgiPass ? '합격' : '불합격'}
              </span>
            </div>
          </div>
          <div className="my-status-actions">
            <Link to="/dashboard" className="btn btn-primary btn-sm">대시보드 보기</Link>
            <Link to="/pilgi/select" className="btn btn-secondary btn-sm">필기 CBT 시작</Link>
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   2급 출제기준 데이터
   ═══════════════════════════════════════════ */
const CRITERIA_2_PILGI = [
  { subject: '직업상담학', color: '#3B82F6', items: ['직업상담의 개념', '직업상담 이론', '직업상담의 접근방법', '직업상담 기법'] },
  { subject: '직업심리학', color: '#8B5CF6', items: ['진로발달이론', '직업심리검사', '초기면담 및 사정', '직업스트레스'], newItems: ['초기면담 및 사정'] },
  { subject: '직업정보론', color: '#10B981', items: ['직업·산업분류 활용', '직업정보 수집·분석', '직업정보 제공'], newItems: ['직업정보 수집·분석'] },
  { subject: '노동시장론', color: '#F59E0B', items: ['노동시장의 이해', '임금의 제 이론', '실업의 제 이론'] },
  { subject: '노동관계법규(I)', color: '#EF4444', items: ['근로기준법', '최저임금법', '직업안정법', '고용보험법', '고용정책기본법', '파견근로자보호법', '근로자직업능력개발법', '남녀고용평등법', '고용상 연령차별금지법', '장애인고용촉진법'] },
];

const CRITERIA_2_SILGI = [
  { area: '직업상담진단', isNew: false },
  { area: '초기면담', isNew: false },
  { area: '진로상담', isNew: false },
  { area: '취업상담', isNew: false },
  { area: '직업복귀상담', isNew: true },
  { area: '직업훈련상담', isNew: true },
  { area: '집단상담', isNew: true },
  { area: '행정', isNew: true },
];

/* ═══════════════════════════════════════════
   1급 출제기준 데이터
   ═══════════════════════════════════════════ */
const CRITERIA_1_PILGI = [
  { subject: '직업심리 및 전직지원', color: '#6366F1', items: ['직업심리학 심화', '전직지원 이론과 실제', '직업적응 심층분석'] },
  { subject: '심층직업상담 및 슈퍼비전', color: '#EC4899', items: ['심층상담 기법', '슈퍼비전 이론과 실제', '상담사례 분석'] },
  { subject: '직업정보가공', color: '#14B8A6', items: ['직업정보 수집·가공', '직업정보 데이터베이스 구축', '직업정보 품질관리'] },
  { subject: '노동시장분석', color: '#F97316', items: ['노동시장 동향 분석', '고용구조 분석', '임금·실업 심층분석'] },
  { subject: '고용노동관계법규(II)', color: '#EF4444', items: ['고용정책 관련 법규 심화', '노동관계법 심화', '사회보장법 관련 규정'] },
];

const CRITERIA_1_SILGI = [
  { area: '직업상담 및 전직지원 실무', isNew: false },
  { area: '심층상담 실무', isNew: false },
  { area: '직업정보 가공 실무', isNew: false },
  { area: '노동시장 분석 보고서 작성', isNew: false },
];

/* ═══════════════════════════════════════════
   2급 탭 콘텐츠
   ═══════════════════════════════════════════ */
function Level2Content({ user }: { user: any }) {
  const dday = getDday();

  return (
    <>
      {/* My Status or Login Banner */}
      {user ? (
        <MyExamStatus user={user} />
      ) : (
        <div className="my-status-login-banner">
          <i className="fa-solid fa-circle-info" />
          <span>
            <Link to="/login">로그인</Link>하면 맞춤 시험 준비 현황을 확인할 수 있습니다
            {dday && <> &middot; {dday.label}까지 <strong>D-{dday.days === 0 ? 'Day' : dday.days}</strong></>}
          </span>
        </div>
      )}

      {/* Overview */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon overview"><i className="fa-solid fa-clipboard-list" /></span>
          <h2>시험 개요</h2>
        </div>
        <div className="info-cert-name">
          <h3 className="info-cert-name-kr">직업상담사 2급</h3>
          <span className="info-cert-name-en">Vocational Counselor</span>
        </div>
        <p className="info-card-text">
          구직자와 구인자에게 직업정보를 제공하고 직업상담을 수행할 수 있는 전문 인력을 양성하기 위한 국가기술자격이며,
          학력, 경력, 연령 제한 없이 <strong>누구나 응시 가능</strong>합니다.
          과정평가형 자격 취득도 가능한 종목입니다.
        </p>
        <div className="info-highlight-row">
          <div className="info-highlight">
            <span className="info-highlight-label">관련 부처</span>
            <span className="info-highlight-value">고용노동부</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">시행 기관</span>
            <span className="info-highlight-value">한국산업인력공단</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">응시 자격</span>
            <span className="info-highlight-value">제한 없음</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">연 시행</span>
            <span className="info-highlight-value">3회</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">기타 사항</span>
            <span className="info-highlight-value">과정평가형 취득 가능</span>
          </div>
        </div>
      </section>

      {/* Two Column: Written + Practical */}
      <div className="info-grid-2">
        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon pilgi"><i className="fa-solid fa-pen-to-square" /></span>
            <h2>필기시험</h2>
          </div>
          <table className="info-table">
            <tbody>
              <tr><th>과목 수</th><td>5과목</td></tr>
              <tr><th>문항 수</th><td>총 100문항 (과목당 20문항)</td></tr>
              <tr><th>문제 유형</th><td>객관식 4지 택일형</td></tr>
              <tr><th>시험 시간</th><td><strong>100분</strong> (1시간 40분)</td></tr>
              <tr><th>합격 기준</th><td>전 과목 평균 <strong>60점</strong> 이상 + 과목당 <strong>40점</strong> 이상</td></tr>
            </tbody>
          </table>
          <div className="info-alert">
            <i className="fa-solid fa-triangle-exclamation" />
            <span>한 과목이라도 <strong>40점 미만</strong>이면 과락으로 불합격됩니다.</span>
          </div>
          <div className="info-card-action">
            <Link to="/pilgi" className="btn btn-primary">필기 학습 시작</Link>
          </div>
        </section>

        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon silgi"><i className="fa-solid fa-file-pen" /></span>
            <h2>실기시험</h2>
          </div>
          <table className="info-table">
            <tbody>
              <tr><th>과목</th><td>직업상담 실무</td></tr>
              <tr><th>문제 유형</th><td>주관식 (단답형, 서술형, 계산형)</td></tr>
              <tr><th>시험 시간</th><td><strong>150분</strong> (2시간 30분)</td></tr>
              <tr><th>합격 기준</th><td>100점 만점 중 <strong>60점</strong> 이상</td></tr>
            </tbody>
          </table>
          <div className="info-alert info-alert-info">
            <i className="fa-solid fa-circle-info" />
            <span>필기시험 합격 후 2년 이내에 실기시험에 합격해야 합니다.</span>
          </div>
          <div className="info-card-action">
            <Link to="/silgi" className="btn btn-primary">실기 학습 시작</Link>
          </div>
        </section>
      </div>

      {/* Subjects */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon subjects"><i className="fa-solid fa-book-open" /></span>
          <h2>필기 과목 (5과목)</h2>
        </div>
        <div className="info-subjects-grid">
          {SUBJECTS.map((subject, idx) => (
            <div key={subject.code} className="info-subject-item" style={{ '--accent': subject.color } as any}>
              <div className="info-subject-num">{idx + 1}</div>
              <div className="info-subject-body">
                <h4>{subject.name}</h4>
                <p>
                  {subject.code === 'counseling' && '직업상담의 개념, 상담이론(파슨스/로저스/엘리스), 상담기법, 직업상담 과정, 직업적응이론'}
                  {subject.code === 'psychology' && '직업발달이론(Super/Holland/Ginzberg), 직업심리검사, 직업적성·흥미·성격검사, 타당도·신뢰도'}
                  {subject.code === 'jobinfo' && '직업정보 제공·수집, 직업분류, 한국표준직업분류(KSCO), 한국표준산업분류(KSIC), 직무분석'}
                  {subject.code === 'labor_market' && '노동시장 이론, 노동공급·수요, 임금이론, 실업이론, 인적자본론, 노동이동'}
                  {subject.code === 'labor_law' && '근로기준법, 고용보험법, 직업안정법, 근로자직업능력개발법, 파견법, 남녀고용평등법'}
                </p>
              </div>
              <Link to={`/learn/${subject.code}`} className="info-subject-link" title={`${subject.name} 학습하기`}>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 출제기준 (2025~2027) ── */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon criteria"><i className="fa-solid fa-list-check" /></span>
          <h2>출제기준 (2025~2027)</h2>
        </div>
        <div className="info-alert info-alert-info" style={{ marginBottom: 24 }}>
          <i className="fa-solid fa-circle-info" />
          <span>2025~2027년 적용 출제기준입니다. 기존 대비 <strong>초기면담</strong>, <strong>직업정보 수집 강화</strong>, <strong>실기 4개 영역 신규</strong> 추가되었습니다.</span>
        </div>

        <h3 className="info-criteria-subtitle"><i className="fa-solid fa-pen-to-square" /> 필기 출제기준 (5과목)</h3>
        <div className="info-criteria-grid">
          {CRITERIA_2_PILGI.map(c => (
            <div key={c.subject} className="info-criteria-card" style={{ '--accent': c.color } as any}>
              <h4>{c.subject}</h4>
              <ul className="info-criteria-items">
                {c.items.map(item => (
                  <li key={item}>
                    {item}
                    {c.newItems?.includes(item) && <span className="info-criteria-badge-new">신규</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="info-criteria-subtitle" style={{ marginTop: 32 }}><i className="fa-solid fa-file-pen" /> 실기 출제기준 (8개 영역)</h3>
        <div className="info-criteria-grid">
          {CRITERIA_2_SILGI.map(c => (
            <div key={c.area} className="info-criteria-card info-criteria-card--silgi">
              <h4>
                {c.area}
                {c.isNew && <span className="info-criteria-badge-new">신규</span>}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon schedule"><i className="fa-solid fa-calendar-days" /></span>
          <h2>2026년 시험 일정</h2>
        </div>
        <div className="info-table-wrap">
          <table className="info-table schedule full-schedule">
            <thead>
              <tr>
                <th>구분</th>
                <th>필기원서접수<br /><small>(인터넷, 휴일제외)</small></th>
                <th>필기시험</th>
                <th>필기합격<br />(예정자)발표</th>
                <th>실기원서접수<br /><small>(휴일제외)</small></th>
                <th>실기시험</th>
                <th>최종합격자<br />발표일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2026년<br />정기 기사 1회</strong></td>
                <td>2026.01.12<br />~<br />2026.01.15<br /><small className="info-schedule-extra">[빈자리접수:<br />2026.01.24~01.25]</small></td>
                <td>2026.01.30<br />~<br />2026.03.03</td>
                <td>2026.03.11</td>
                <td>2026.03.23<br />~<br />2026.03.26<br /><small className="info-schedule-extra">[빈자리접수:<br />2026.04.12~04.13]</small></td>
                <td>2026.04.18<br />~<br />2026.05.06</td>
                <td>2026.06.12</td>
              </tr>
              <tr>
                <td><strong>2026년<br />정기 기사 2회</strong></td>
                <td>2026.04.20<br />~<br />2026.04.23<br /><small className="info-schedule-extra">[빈자리접수:<br />2026.05.03~05.04]</small></td>
                <td>2026.05.09<br />~<br />2026.05.29</td>
                <td>2026.06.10</td>
                <td>2026.06.22<br />~<br />2026.06.25</td>
                <td>2026.07.18<br />~<br />2026.08.05</td>
                <td>2026.09.11</td>
              </tr>
              <tr>
                <td><strong>2026년<br />정기 기사 3회</strong></td>
                <td>2026.07.20<br />~<br />2026.07.23</td>
                <td>2026.08.07<br />~<br />2026.09.01</td>
                <td>2026.09.09</td>
                <td>2026.09.21<br />~<br />2026.09.28</td>
                <td>2026.10.24<br />~<br />2026.11.13</td>
                <td>2026.12.18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-alert info-alert-info" style={{ marginTop: 16 }}>
          <i className="fa-solid fa-clock" />
          <span>접수는 첫날 <strong>10:00</strong>부터 마지막 날 <strong>18:00</strong>까지 · 수수료: 필기 <strong>19,400원</strong> / 실기 <strong>20,800원</strong></span>
        </div>
        <p className="info-note">
          * 시험 접수 및 상세 일정은 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer"><strong>큐넷(Q-Net)</strong></a>에서 반드시 확인하세요.<br />
          * 필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00입니다.<br />
          * 시험 일정은 종목별, 지역별로 상이할 수 있으며, 접수 일정 전에 공지되는 해당 회별 수험자 안내(Q-net 공지사항)를 참조하세요.
        </p>
      </section>

      {/* 검정현황 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon stats"><i className="fa-solid fa-chart-column" /></span>
          <h2>검정현황 (합격률 추이)</h2>
        </div>
        <p className="info-card-text">
          최근 10년간 필기 합격률은 <strong>약 49~63%</strong>, 실기 합격률은 <strong>약 38~47%</strong> 수준입니다.
          2024년 기준 필기 <strong>58.7%</strong>, 실기 <strong>47.1%</strong>로 상대적으로 높은 합격률을 보이고 있습니다.
        </p>
        <div className="info-table-wrap">
          <table className="info-table schedule stats-table">
            <thead>
              <tr>
                <th rowSpan={2}>연도</th>
                <th colSpan={3} className="info-th-group pilgi">필기</th>
                <th colSpan={3} className="info-th-group silgi">실기</th>
              </tr>
              <tr>
                <th>응시</th><th>합격</th><th>합격률</th>
                <th>응시</th><th>합격</th><th>합격률</th>
              </tr>
            </thead>
            <tbody>
              {[
                { y: '2024', pa: 15513, pp: 9099, pr: '58.7%', sa: 11951, sp: 5630, sr: '47.1%' },
                { y: '2023', pa: 16060, pp: 9440, pr: '58.8%', sa: 11479, sp: 5187, sr: '45.2%' },
                { y: '2022', pa: 18059, pp: 8778, pr: '48.6%', sa: 13011, sp: 4937, sr: '37.9%' },
                { y: '2021', pa: 24155, pp: 13364, pr: '55.3%', sa: 16135, sp: 7731, sr: '47.9%' },
                { y: '2020', pa: 19074, pp: 11827, pr: '62.0%', sa: 15701, sp: 7241, sr: '46.1%' },
                { y: '2019', pa: 22283, pp: 11690, pr: '52.5%', sa: 15119, sp: 6648, sr: '44.0%' },
                { y: '2018', pa: 23328, pp: 12235, pr: '52.4%', sa: 14504, sp: 6955, sr: '48.0%' },
                { y: '2017', pa: 19484, pp: 9517, pr: '48.8%', sa: 12653, sp: 5227, sr: '41.3%' },
                { y: '2016', pa: 20516, pp: 10289, pr: '50.2%', sa: 13762, sp: 5313, sr: '38.6%' },
                { y: '2015', pa: 19595, pp: 10221, pr: '52.2%', sa: 14114, sp: 5039, sr: '35.7%' },
              ].map(row => (
                <tr key={row.y}>
                  <td><strong>{row.y}</strong></td>
                  <td>{row.pa.toLocaleString()}</td>
                  <td>{row.pp.toLocaleString()}</td>
                  <td><strong className="rate-pilgi">{row.pr}</strong></td>
                  <td>{row.sa.toLocaleString()}</td>
                  <td>{row.sp.toLocaleString()}</td>
                  <td><strong className="rate-silgi">{row.sr}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="info-stats-summary">
          <div className="info-stats-summary-item">
            <span className="info-stats-summary-label">누적 합계</span>
            <span>필기 응시 <strong>374,360</strong>명 / 합격 <strong>181,642</strong>명 (<strong>48.5%</strong>)</span>
          </div>
          <div className="info-stats-summary-item">
            <span className="info-stats-summary-label">누적 합계</span>
            <span>실기 응시 <strong>243,074</strong>명 / 합격 <strong>85,389</strong>명 (<strong>35.1%</strong>)</span>
          </div>
        </div>

        {/* 2024 수험자 동향 */}
        <div className="info-trend-2024">
          <h3><i className="fa-solid fa-users" /> 2024년 수험자 동향 (필기)</h3>
          <div className="info-trend-grid">
            <div className="info-trend-card male">
              <div className="info-trend-icon"><i className="fa-solid fa-mars" /></div>
              <div className="info-trend-body">
                <span className="info-trend-label">남성</span>
                <span className="info-trend-numbers">접수 4,494 / 응시 2,908 / 합격 1,532</span>
                <span className="info-trend-rate">합격률 <strong>52.7%</strong></span>
              </div>
            </div>
            <div className="info-trend-card female">
              <div className="info-trend-icon"><i className="fa-solid fa-venus" /></div>
              <div className="info-trend-body">
                <span className="info-trend-label">여성</span>
                <span className="info-trend-numbers">접수 14,431 / 응시 9,292 / 합격 5,484</span>
                <span className="info-trend-rate">합격률 <strong>59.0%</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 우대현황 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon benefit"><i className="fa-solid fa-medal" /></span>
          <h2>자격증 우대현황</h2>
        </div>
        <p className="info-card-text">
          직업상담사 2급 자격 취득 시 공무원 채용 가산점, 경력경쟁채용 응시 자격, 직업능력개발훈련교사 자격 취득 등
          <strong>다양한 법적 우대</strong>를 받을 수 있습니다.
        </p>
        <div className="info-table-wrap">
          <table className="info-table benefit-table">
            <thead>
              <tr><th>우대 법령</th><th>활용 내용</th></tr>
            </thead>
            <tbody>
              <tr><td>공무원임용시험령 제27조</td><td>경력경쟁채용시험 등의 응시</td></tr>
              <tr><td>공무원임용시험령 제31조</td><td>6급 이하 공무원 채용시험 가산 대상 자격증</td></tr>
              <tr><td>국가공무원법 제36조의2</td><td>공무원 채용시험 응시 가점</td></tr>
              <tr><td>교육감소속지방공무원평정규칙 제23조</td><td>5급 이하 공무원, 연구사 및 지도사 가점</td></tr>
              <tr><td>군무원인사법시행령 제10조</td><td>경력경쟁채용 신규채용 요건</td></tr>
              <tr><td>군인사법시행규칙 제14조</td><td>부사관 임용 자격</td></tr>
              <tr><td>근로자직업능력개발법시행령 제28조</td><td>직업능력개발훈련교사 자격 취득</td></tr>
              <tr><td>근로자직업능력개발법시행령 제27조</td><td>직업능력개발훈련교사의 정의</td></tr>
              <tr><td>근로자직업능력개발법시행령 제44조</td><td>교원 임용 시 자격증 소지자 우대</td></tr>
              <tr><td>국가기술자격법 제14조</td><td>국가기술자격 취득자 우대</td></tr>
              <tr><td>국가기술자격법시행령 제27조</td><td>공공기관 등 채용 시 국가기술자격 취득자 우대</td></tr>
              <tr><td>중소기업인력지원특별법 제28조</td><td>해당 직종 관련 분야 신기술 창업 지원</td></tr>
              <tr><td>지방공무원임용령 제55조의3</td><td>6급 이하 공무원 신규임용 시 필기시험 점수 가산</td></tr>
              <tr><td>국회인사규칙 제20조</td><td>동종 직무 자격증 소지자 경력경쟁채용</td></tr>
              <tr><td>비상대비자원관리법 제2조</td><td>비상대비 자원의 인력자원 범위</td></tr>
            </tbody>
          </table>
        </div>
        <p className="info-note">
          * 법령별 세부 우대현황에 대한 적용은 관련 법령을 담당하는 부처의 유권해석에 따릅니다.
          (2020년 하반기 법제처 조사 기준, 법령 개정에 따라 변경될 수 있음)
        </p>
      </section>

      {/* Study Tips */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon tips"><i className="fa-solid fa-lightbulb" /></span>
          <h2>효율적인 공부 방법</h2>
        </div>
        <div className="info-tips-grid">
          <div className="info-tip-card">
            <div className="info-tip-num">1</div>
            <div className="info-tip-body">
              <h4>기출문제 중심 학습</h4>
              <p>
                직업상담사 필기 시험은 <strong>문제은행 방식</strong>의 비중이 높습니다.
                이론을 완벽히 이해하기보다는, 기출문제를 반복해서 풀며
                자주 나오는 개념을 익히는 것이 훨씬 효율적입니다.
              </p>
            </div>
          </div>
          <div className="info-tip-card">
            <div className="info-tip-num">2</div>
            <div className="info-tip-body">
              <h4>오답 노트 작성</h4>
              <p>
                틀린 문제는 <strong>왜 틀렸는지 확인</strong>하고,
                관련 이론을 가볍게 찾아보는 방식으로 보완하세요.
                같은 유형의 문제를 다시 틀리지 않는 것이 핵심입니다.
              </p>
            </div>
          </div>
          <div className="info-tip-card">
            <div className="info-tip-num">3</div>
            <div className="info-tip-body">
              <h4>반복 횟수 늘리기</h4>
              <p>
                최소 <strong>3~5개년</strong> 이상의 기출문제를
                <strong> 3회 이상 반복</strong>해서 풀어보시는 것을 추천합니다.
                반복할수록 출제 패턴이 눈에 들어옵니다.
              </p>
            </div>
          </div>
        </div>
        <div className="info-card-action" style={{ marginTop: 28 }}>
          <Link to="/pilgi" className="btn btn-primary" style={{ marginRight: 12 }}>기출문제 풀기</Link>
          <Link to="/wrong-answers" className="btn btn-secondary">오답노트 보기</Link>
        </div>
      </section>

      {/* Links */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon links"><i className="fa-solid fa-link" /></span>
          <h2>유용한 링크</h2>
        </div>
        <div className="info-links-grid">
          <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
            <div className="info-link-icon"><i className="fa-solid fa-award" /></div>
            <div>
              <strong>Q-Net (큐넷)</strong>
              <p>시험 접수 및 합격자 조회</p>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
          </a>
          <a href="https://www.work.go.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
            <div className="info-link-icon"><i className="fa-solid fa-briefcase" /></div>
            <div>
              <strong>워크넷</strong>
              <p>직업정보 및 채용공고</p>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
          </a>
          <a href="https://www.keis.or.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
            <div className="info-link-icon"><i className="fa-solid fa-building-columns" /></div>
            <div>
              <strong>한국고용정보원</strong>
              <p>고용동향 및 직업연구</p>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
          </a>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════
   1급 탭 콘텐츠
   ═══════════════════════════════════════════ */
function Level1Content() {
  return (
    <>
      {/* 시험 개요 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon overview"><i className="fa-solid fa-clipboard-list" /></span>
          <h2>1급 시험 개요</h2>
        </div>
        <div className="info-cert-name">
          <h3 className="info-cert-name-kr">직업상담사 1급</h3>
          <span className="info-cert-name-en">Vocational Counselor, Senior</span>
        </div>
        <p className="info-card-text">
          2급 대비 심화된 직업상담 전문 역량을 인증하는 국가기술자격으로,
          응시자격에 <strong>경력 제한</strong>이 있습니다.
          과정평가형 자격 취득도 가능한 종목입니다.
        </p>
        <div className="info-highlight-row">
          <div className="info-highlight">
            <span className="info-highlight-label">관련 부처</span>
            <span className="info-highlight-value">고용노동부</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">시행 기관</span>
            <span className="info-highlight-value">한국산업인력공단</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">응시 자격</span>
            <span className="info-highlight-value">경력 필요</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">연 시행</span>
            <span className="info-highlight-value">1회 (3회차)</span>
          </div>
          <div className="info-highlight">
            <span className="info-highlight-label">기타 사항</span>
            <span className="info-highlight-value">과정평가형 취득 가능</span>
          </div>
        </div>
      </section>

      {/* 응시자격 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon benefit"><i className="fa-solid fa-user-check" /></span>
          <h2>응시 자격</h2>
        </div>
        <div className="info-alert info-alert-info" style={{ marginBottom: 20 }}>
          <i className="fa-solid fa-circle-info" />
          <span>1급은 2급과 달리 <strong>경력 또는 학력 요건</strong>이 필요합니다.</span>
        </div>
        <table className="info-table">
          <tbody>
            <tr><th>요건 1</th><td>직업상담사 <strong>2급 취득 후</strong> 해당 실무 <strong>3년</strong> 이상 종사</td></tr>
            <tr><th>요건 2</th><td>해당 실무 <strong>5년</strong> 이상 종사자</td></tr>
            <tr><th>요건 3</th><td>관련 학과 대학졸업(예정)자로 해당 실무 <strong>4년</strong> 이상 종사</td></tr>
            <tr><th>요건 4</th><td>기타 국가기술자격법 시행규칙에 따른 요건 충족자</td></tr>
          </tbody>
        </table>
        <p className="info-note">
          * 정확한 응시자격은 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer"><strong>큐넷(Q-Net)</strong></a>에서 확인하세요.
        </p>
      </section>

      {/* 필기·실기 */}
      <div className="info-grid-2">
        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon pilgi"><i className="fa-solid fa-pen-to-square" /></span>
            <h2>필기시험</h2>
          </div>
          <table className="info-table">
            <tbody>
              <tr><th>과목 수</th><td>5과목</td></tr>
              <tr><th>문항 수</th><td>총 100문항 (과목당 20문항)</td></tr>
              <tr><th>문제 유형</th><td>객관식 4지 택일형</td></tr>
              <tr><th>시험 시간</th><td><strong>150분</strong> (2시간 30분)</td></tr>
              <tr><th>합격 기준</th><td>전 과목 평균 <strong>60점</strong> 이상 + 과목당 <strong>40점</strong> 이상</td></tr>
            </tbody>
          </table>
        </section>

        <section className="info-card">
          <div className="info-card-header">
            <span className="info-card-icon silgi"><i className="fa-solid fa-file-pen" /></span>
            <h2>실기시험</h2>
          </div>
          <table className="info-table">
            <tbody>
              <tr><th>과목</th><td>직업상담 및 전직지원 실무</td></tr>
              <tr><th>문제 유형</th><td>필답형 (서술형)</td></tr>
              <tr><th>시험 시간</th><td><strong>150분</strong> (2시간 30분)</td></tr>
              <tr><th>합격 기준</th><td>100점 만점 중 <strong>60점</strong> 이상</td></tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* 1급 필기 과목 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon subjects"><i className="fa-solid fa-book-open" /></span>
          <h2>필기 과목 (5과목)</h2>
        </div>
        <div className="info-subjects-grid">
          {SUBJECTS_1.map((subject, idx) => (
            <div key={subject.code} className="info-subject-item" style={{ '--accent': subject.color } as any}>
              <div className="info-subject-num">{idx + 1}</div>
              <div className="info-subject-body">
                <h4>{subject.name}</h4>
                <p>
                  {subject.code === 'job_psychology' && '직업심리학 심화, 전직지원 이론과 실제, 직업적응 심층분석'}
                  {subject.code === 'deep_counseling' && '심층상담 기법, 슈퍼비전 이론과 실제, 상담사례 분석'}
                  {subject.code === 'job_info_proc' && '직업정보 수집·가공, 데이터베이스 구축, 품질관리'}
                  {subject.code === 'labor_analysis' && '노동시장 동향 분석, 고용구조 분석, 임금·실업 심층분석'}
                  {subject.code === 'labor_law_2' && '고용정책 관련 법규 심화, 노동관계법 심화, 사회보장법'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1급 출제기준 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon criteria"><i className="fa-solid fa-list-check" /></span>
          <h2>출제기준</h2>
        </div>

        <h3 className="info-criteria-subtitle"><i className="fa-solid fa-pen-to-square" /> 필기 출제기준 (5과목)</h3>
        <div className="info-criteria-grid">
          {CRITERIA_1_PILGI.map(c => (
            <div key={c.subject} className="info-criteria-card" style={{ '--accent': c.color } as any}>
              <h4>{c.subject}</h4>
              <ul className="info-criteria-items">
                {c.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="info-criteria-subtitle" style={{ marginTop: 32 }}><i className="fa-solid fa-file-pen" /> 실기 출제기준</h3>
        <div className="info-criteria-grid">
          {CRITERIA_1_SILGI.map(c => (
            <div key={c.area} className="info-criteria-card info-criteria-card--silgi">
              <h4>{c.area}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 1급 시험일정 (3회차만) */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon schedule"><i className="fa-solid fa-calendar-days" /></span>
          <h2>2026년 시험 일정</h2>
        </div>
        <div className="info-alert info-alert-info" style={{ marginBottom: 20 }}>
          <i className="fa-solid fa-circle-info" />
          <span>1급은 연 <strong>1회(정기 기사 3회)</strong>만 시행됩니다.</span>
        </div>
        <div className="info-table-wrap">
          <table className="info-table schedule full-schedule">
            <thead>
              <tr>
                <th>구분</th>
                <th>필기원서접수<br /><small>(인터넷, 휴일제외)</small></th>
                <th>필기시험</th>
                <th>필기합격<br />(예정자)발표</th>
                <th>실기원서접수<br /><small>(휴일제외)</small></th>
                <th>실기시험</th>
                <th>최종합격자<br />발표일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2026년<br />정기 기사 3회</strong></td>
                <td>2026.07.20<br />~<br />2026.07.23</td>
                <td>2026.08.07<br />~<br />2026.09.01</td>
                <td>2026.09.09</td>
                <td>2026.09.21<br />~<br />2026.09.28</td>
                <td>2026.10.24<br />~<br />2026.11.13</td>
                <td>2026.12.18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-alert info-alert-info" style={{ marginTop: 16 }}>
          <i className="fa-solid fa-clock" />
          <span>접수는 첫날 <strong>10:00</strong>부터 마지막 날 <strong>18:00</strong>까지 · 수수료: 필기 <strong>19,400원</strong> / 실기 <strong>20,800원</strong></span>
        </div>
        <p className="info-note">
          * 시험 접수 및 상세 일정은 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer"><strong>큐넷(Q-Net)</strong></a>에서 반드시 확인하세요.<br />
          * 필기시험 합격예정자 및 최종합격자 발표시간은 해당 발표일 09:00입니다.<br />
          * 시험 일정은 종목별, 지역별로 상이할 수 있으며, 접수 일정 전에 공지되는 해당 회별 수험자 안내(Q-net 공지사항)를 참조하세요.
        </p>
      </section>

      {/* 검정현황 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon stats"><i className="fa-solid fa-chart-column" /></span>
          <h2>검정현황 (합격률 추이)</h2>
        </div>
        <p className="info-card-text">
          1급은 응시 인원이 적지만, 최근 필기 합격률은 <strong>약 70~83%</strong>, 실기 합격률은 <strong>약 67~72%</strong>로 상승 추세입니다.
          2024년 기준 필기 <strong>81.6%</strong>, 실기 <strong>70.8%</strong>입니다.
        </p>
        <div className="info-table-wrap">
          <table className="info-table schedule stats-table">
            <thead>
              <tr>
                <th rowSpan={2}>연도</th>
                <th colSpan={3} className="info-th-group pilgi">필기</th>
                <th colSpan={3} className="info-th-group silgi">실기</th>
              </tr>
              <tr>
                <th>응시</th><th>합격</th><th>합격률</th>
                <th>응시</th><th>합격</th><th>합격률</th>
              </tr>
            </thead>
            <tbody>
              {[
                { y: '2024', pa: 755, pp: 616, pr: '81.6%', sa: 600, sp: 425, sr: '70.8%' },
                { y: '2023', pa: 650, pp: 538, pr: '82.8%', sa: 512, sp: 343, sr: '67.0%' },
                { y: '2022', pa: 622, pp: 477, pr: '76.7%', sa: 459, sp: 330, sr: '71.9%' },
                { y: '2021', pa: 435, pp: 303, pr: '69.7%', sa: 389, sp: 259, sr: '66.6%' },
                { y: '2020', pa: 406, pp: 291, pr: '71.7%', sa: 325, sp: 72, sr: '22.2%' },
                { y: '2019', pa: 584, pp: 328, pr: '56.2%', sa: 352, sp: 247, sr: '70.2%' },
                { y: '2018', pa: 340, pp: 165, pr: '48.5%', sa: 198, sp: 66, sr: '33.3%' },
                { y: '2017', pa: 362, pp: 172, pr: '47.5%', sa: 256, sp: 91, sr: '35.5%' },
                { y: '2016', pa: 276, pp: 117, pr: '42.4%', sa: 220, sp: 51, sr: '23.2%' },
                { y: '2015', pa: 336, pp: 198, pr: '58.9%', sa: 238, sp: 109, sr: '45.8%' },
                { y: '2014', pa: 252, pp: 136, pr: '54.0%', sa: 186, sp: 50, sr: '26.9%' },
                { y: '2013', pa: 212, pp: 83, pr: '39.2%', sa: 179, sp: 30, sr: '16.8%' },
                { y: '2012', pa: 189, pp: 107, pr: '56.6%', sa: 163, sp: 25, sr: '15.3%' },
                { y: '2011', pa: 137, pp: 69, pr: '50.4%', sa: 107, sp: 16, sr: '15.0%' },
                { y: '2010', pa: 110, pp: 55, pr: '50.0%', sa: 75, sp: 12, sr: '16.0%' },
                { y: '2009', pa: 62, pp: 27, pr: '43.5%', sa: 35, sp: 0, sr: '0%' },
                { y: '2008', pa: 72, pp: 26, pr: '36.1%', sa: 50, sp: 7, sr: '14.0%' },
                { y: '2007', pa: 98, pp: 33, pr: '33.7%', sa: 51, sp: 31, sr: '60.8%' },
                { y: '2006', pa: 96, pp: 44, pr: '45.8%', sa: 55, sp: 2, sr: '3.6%' },
                { y: '2005', pa: 90, pp: 47, pr: '52.2%', sa: 53, sp: 18, sr: '34.0%' },
                { y: '2004', pa: 43, pp: 10, pr: '23.3%', sa: 19, sp: 0, sr: '0%' },
                { y: '2003', pa: 67, pp: 15, pr: '22.4%', sa: 11, sp: 0, sr: '0%' },
              ].map(row => (
                <tr key={row.y}>
                  <td><strong>{row.y}</strong></td>
                  <td>{row.pa.toLocaleString()}</td>
                  <td>{row.pp.toLocaleString()}</td>
                  <td><strong className="rate-pilgi">{row.pr}</strong></td>
                  <td>{row.sa.toLocaleString()}</td>
                  <td>{row.sp.toLocaleString()}</td>
                  <td><strong className="rate-silgi">{row.sr}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="info-stats-summary">
          <div className="info-stats-summary-item">
            <span className="info-stats-summary-label">누적 합계</span>
            <span>필기 응시 <strong>6,194</strong>명 / 합격 <strong>3,857</strong>명 (<strong>62.3%</strong>)</span>
          </div>
          <div className="info-stats-summary-item">
            <span className="info-stats-summary-label">누적 합계</span>
            <span>실기 응시 <strong>4,533</strong>명 / 합격 <strong>2,184</strong>명 (<strong>48.2%</strong>)</span>
          </div>
        </div>

        {/* 2024 수험자 동향 */}
        <div className="info-trend-2024">
          <h3><i className="fa-solid fa-users" /> 2024년 수험자 동향 (필기)</h3>
          <div className="info-trend-grid">
            <div className="info-trend-card male">
              <div className="info-trend-icon"><i className="fa-solid fa-mars" /></div>
              <div className="info-trend-body">
                <span className="info-trend-label">남성</span>
                <span className="info-trend-numbers">접수 92 / 응시 66 / 합격 43</span>
                <span className="info-trend-rate">합격률 <strong>65.2%</strong></span>
              </div>
            </div>
            <div className="info-trend-card female">
              <div className="info-trend-icon"><i className="fa-solid fa-venus" /></div>
              <div className="info-trend-body">
                <span className="info-trend-label">여성</span>
                <span className="info-trend-numbers">접수 845 / 응시 689 / 합격 573</span>
                <span className="info-trend-rate">합격률 <strong>83.2%</strong></span>
              </div>
            </div>
          </div>
          <p className="info-note" style={{ marginTop: 12 }}>
            * 수험자동향 데이터는 원서접수 시 수집된 데이터로, 종목별 검정현황 데이터와 다를 수 있음
          </p>
        </div>
      </section>

      {/* 우대현황 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon benefit"><i className="fa-solid fa-medal" /></span>
          <h2>자격증 우대현황</h2>
        </div>
        <p className="info-card-text">
          직업상담사 1급 자격 취득 시 공무원 채용 가산점, 경력경쟁채용 응시 자격, 직업능력개발훈련교사 자격 취득 등
          <strong>다양한 법적 우대</strong>를 받을 수 있습니다.
        </p>
        <div className="info-table-wrap">
          <table className="info-table benefit-table">
            <thead>
              <tr><th>우대 법령</th><th>활용 내용</th></tr>
            </thead>
            <tbody>
              <tr><td>공무원임용시험령 제27조</td><td>경력경쟁채용시험 등의 응시</td></tr>
              <tr><td>공무원임용시험령 제31조</td><td>6급 이하 공무원 채용시험 가산 대상 자격증</td></tr>
              <tr><td>국가공무원법 제36조의2</td><td>공무원 채용시험 응시 가점</td></tr>
              <tr><td>교육감소속지방공무원평정규칙 제23조</td><td>5급 이하 공무원, 연구사 및 지도사 가점</td></tr>
              <tr><td>군무원인사법시행령 제10조</td><td>경력경쟁채용 신규채용 요건</td></tr>
              <tr><td>군무원인사법시행규칙 제18조</td><td>채용시험의 특전</td></tr>
              <tr><td>군인사법시행규칙 제14조</td><td>부사관 임용 자격</td></tr>
              <tr><td>근로자직업능력개발법시행령 제24조</td><td>직업능력개발훈련시설의 지정 인력</td></tr>
              <tr><td>근로자직업능력개발법시행령 제27조</td><td>직업능력개발훈련교사의 정의</td></tr>
              <tr><td>근로자직업능력개발법시행령 제28조</td><td>직업능력개발훈련교사 자격 취득</td></tr>
              <tr><td>근로자직업능력개발법시행령 제44조</td><td>교원 임용 시 자격증 소지자 우대</td></tr>
              <tr><td>기초연구진흥및기술개발지원에관한법률시행규칙 제2조</td><td>연구전담요원의 자격 기준</td></tr>
              <tr><td>국가기술자격법 제14조</td><td>국가기술자격 취득자 우대</td></tr>
              <tr><td>국가기술자격법시행규칙 제21조</td><td>시험위원의 자격</td></tr>
              <tr><td>국가기술자격법시행령 제27조</td><td>공공기관 등 채용 시 국가기술자격 취득자 우대</td></tr>
              <tr><td>중소기업인력지원특별법 제28조</td><td>해당 직종 관련 분야 신기술 창업 지원</td></tr>
              <tr><td>지방공무원수당등에관한규정 제14조</td><td>특수업무수당 지급</td></tr>
              <tr><td>지방공무원임용령 제17조</td><td>경력경쟁시험 등의 임용 요건</td></tr>
              <tr><td>지방공무원임용령 제55조의3</td><td>6급 이하 공무원 신규임용 시 필기시험 점수 가산</td></tr>
              <tr><td>지방공무원평정규칙 제23조</td><td>5급 이하 공무원, 연구사 및 지도사 가점</td></tr>
              <tr><td>국회인사규칙 제20조</td><td>동종 직무 자격증 소지자 경력경쟁채용</td></tr>
              <tr><td>비상대비자원관리법 제2조</td><td>비상대비 자원의 인력자원 범위</td></tr>
            </tbody>
          </table>
        </div>
        <p className="info-note">
          * 본 자료는 2020년 하반기 법제처(law.go.kr) 조사 기준이며, 법령 개정에 따라 변경될 수 있습니다.<br />
          * 법령별 세부 우대현황에 대한 적용은 관련 법령을 담당하는 부처의 유권해석에 따릅니다.
        </p>
      </section>

      {/* 1급 안내 */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon tips"><i className="fa-solid fa-lightbulb" /></span>
          <h2>1급 학습 안내</h2>
        </div>
        <div className="info-alert info-alert-info">
          <i className="fa-solid fa-circle-info" />
          <span>1급 CBT 학습 콘텐츠(기출문제, 모의시험 등)는 <strong>향후 업데이트 예정</strong>입니다. 현재는 시험 정보 안내를 제공합니다.</span>
        </div>
      </section>

      {/* Links */}
      <section className="info-card">
        <div className="info-card-header">
          <span className="info-card-icon links"><i className="fa-solid fa-link" /></span>
          <h2>유용한 링크</h2>
        </div>
        <div className="info-links-grid">
          <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
            <div className="info-link-icon"><i className="fa-solid fa-award" /></div>
            <div>
              <strong>Q-Net (큐넷)</strong>
              <p>시험 접수 및 합격자 조회</p>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
          </a>
          <a href="https://www.work.go.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
            <div className="info-link-icon"><i className="fa-solid fa-briefcase" /></div>
            <div>
              <strong>워크넷</strong>
              <p>직업정보 및 채용공고</p>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
          </a>
          <a href="https://www.keis.or.kr" target="_blank" rel="noopener noreferrer" className="info-link-card">
            <div className="info-link-icon"><i className="fa-solid fa-building-columns" /></div>
            <div>
              <strong>한국고용정보원</strong>
              <p>고용동향 및 직업연구</p>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square info-link-ext" />
          </a>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════
   ExamInfo — Main Component
   ═══════════════════════════════════════════ */
export default function ExamInfo() {
  const { user } = useAuth();
  const [level, setLevel] = useState<'level2' | 'level1'>('level2');

  return (
    <>
      <SEOHead title="시험 안내" description="직업상담사 1급·2급 자격시험 안내 - 시험 개요, 일정, 합격 기준, 출제기준" />
      <div className="page-header">
        <div className="container">
          <h1>직업상담사 시험 안내</h1>
          <p className="page-desc">국가기술자격 시험에 대한 핵심 정보를 안내합니다</p>
        </div>
      </div>

      <div className="container info-page">
        {/* 2급 / 1급 탭 */}
        <div className="info-level-tabs">
          <button
            className={`info-level-tab${level === 'level2' ? ' active' : ''}`}
            onClick={() => setLevel('level2')}
          >
            직업상담사 2급
          </button>
          <button
            className={`info-level-tab${level === 'level1' ? ' active' : ''}`}
            onClick={() => setLevel('level1')}
          >
            직업상담사 1급
          </button>
        </div>

        {level === 'level2' ? <Level2Content user={user} /> : <Level1Content />}
      </div>
    </>
  );
}
