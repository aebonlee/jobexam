import SEOHead from '../../components/SEOHead';

const SPECIALTIES = [
  '생성형 AI 활용 교육',
  'AI 프롬프트 엔지니어링',
  '디지털 마케팅 & 브랜딩',
  '교수설계 및 강사 양성',
  '데이터 분석 & 시각화',
];

const CAREERS = [
  '현) DreamIT 대표',
  '현) AI 교육 전문 강사',
  '전) 대학교 겸임교수',
  '전) IT 기업 교육 담당',
];

const EDUCATIONS = [
  '경영학박사 (정보관리 전공)',
  '직업학박사 수료 (고용정책, 직업교육훈련 전공)',
  '정보과학 석사 (이학석사, 이학사, 경영학사, 문학사)',
];

const CERTIFICATIONS = [
  '평생교육사 2급',
  '한국어교원 2급',
  '직업능력개발훈련교사 2급/3급 — 20.정보통신 대표 직종 모든 자격 보유 (인공지능, 정보보호 외 다수)',
  '정보처리산업기사 외 국가기술자격, 공인자격 등 80여 가지 취득',
];

const STATS = [
  { label: '누적 강의', value: '500+' },
  { label: '총 강의시간', value: '3,000+' },
  { label: '평균 만족도', value: '4.9/5.0' },
  { label: '교육 기관', value: '100+' },
];

export default function InstructorIntro() {
  return (
    <>
      <SEOHead title="제작자 소개" description="JobExam 제작자 이애본 박사 소개 — AI 교육 전문 강사" />

      <div className="about-hero">
        <div className="container">
          <h1><i className="fa-solid fa-chalkboard-user" /> 제작자 소개</h1>
          <p>AI 교육 전문 강사</p>
        </div>
      </div>

      <div className="container">
        {/* Profile */}
        <div className="instructor-profile">
          <div className="instructor-avatar">
            <i className="fa-solid fa-chalkboard-user" />
          </div>
          <div className="instructor-info">
            <h2>이애본</h2>
            <p className="instructor-degree">경영학박사 (정보관리 전공)</p>
            <p className="instructor-position">AI 교육 전문 강사 / 컨설턴트</p>
            <div className="instructor-specialties">
              <h3><i className="fa-solid fa-star" /> 전문분야</h3>
              <ul>
                {SPECIALTIES.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="instructor-stats">
          {STATS.map((s, i) => (
            <div key={i} className="instructor-stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Career, Education, Certifications */}
        <div className="instructor-sections">
          <div className="about-section">
            <h3><i className="fa-solid fa-briefcase" /> 주요 경력</h3>
            <ul>
              {CAREERS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="about-section">
            <h3><i className="fa-solid fa-graduation-cap" /> 학력</h3>
            <ul>
              {EDUCATIONS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="about-section">
            <h3><i className="fa-solid fa-certificate" /> 자격</h3>
            <ul>
              {CERTIFICATIONS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="instructor-contact">
          <h3><i className="fa-solid fa-address-card" /> 연락처</h3>
          <div className="instructor-contact-item">
            <i className="fa-solid fa-envelope" />
            <a href="mailto:aebonlee@gmail.com">aebonlee@gmail.com</a>
          </div>
          <div className="instructor-contact-item">
            <i className="fa-solid fa-globe" />
            <a href="https://www.dreamitbiz.com" target="_blank" rel="noreferrer">www.dreamitbiz.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
