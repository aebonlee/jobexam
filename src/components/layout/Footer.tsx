import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { path: '/pilgi', label: '필기 안내' },
    { path: '/silgi', label: '실기 안내' },
    { path: '/pilgi/select', label: '필기 CBT' },
    { path: '/silgi/practice', label: '실기 연습' },
    { path: '/learn', label: '과목별 학습' },
    { path: '/dashboard', label: '대시보드' },
    { path: '/about/pricing', label: '요금제' },
    { path: '/info', label: '시험 일정' },
  ];

  const familySites = [
    { name: 'DreamIT Biz', url: 'https://dreamitbiz.com' },
    { name: 'Coding Study', url: 'https://coding.dreamitbiz.com' },
    { name: 'Python Master', url: 'https://python.dreamitbiz.com' },
  ];

  const handleFamilySite = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank', 'noopener');
      e.target.value = '';
    }
  };

  return (
    <footer className="footer" aria-label="사이트 푸터">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="brand-main">Job</span><span className="brand-sub">Exam</span>
            </h3>
            <p>직업상담사 시험 준비 플랫폼</p>
            <p className="footer-desc">CBT 모의시험, 과목별 학습, 실기 연습까지 직업상담사 합격을 위한 올인원 학습 도구</p>
            <div className="footer-family">
              <select onChange={handleFamilySite} defaultValue="">
                <option value="" disabled>Family Site</option>
                {familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">바로가기</h4>
            <ul className="footer-quick-links">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">고객센터</h4>
            <ul className="footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>010-3700-0629</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span>카카오톡: dreamitbiz</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>평일 09:00 ~ 18:00</span>
              </li>
            </ul>
            <div className="footer-legal-links">
              <Link to="/terms">이용약관</Link>
              <Link to="/privacy">개인정보처리방침</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DreamIT Biz. All rights reserved. | 대표이사: 이애본 | 사업자등록번호: 601-45-20154</p>
        </div>
      </div>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="맨 위로">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </footer>
  );
}
