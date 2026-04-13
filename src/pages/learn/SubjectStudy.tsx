import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CURRICULUM, SUBJECT_ORDER, getSubject, getAdjacentSubjects } from '../../data/curriculum';
import SEOHead from '../../components/SEOHead';

export default function SubjectStudy() {
  const { subjectCode } = useParams();
  const navigate = useNavigate();
  const subject = getSubject(subjectCode);
  const { prev, next } = getAdjacentSubjects(subjectCode);

  const [openChapters, setOpenChapters] = useState({});
  const [openTopics, setOpenTopics] = useState({});
  const chapterRefs = useRef({});

  useEffect(() => {
    if (!subject) {
      navigate('/learn', { replace: true });
      return;
    }
    // 첫 번째 챕터 자동 열기
    setOpenChapters({ 0: true });
    setOpenTopics({});
    window.scrollTo(0, 0);
  }, [subjectCode, subject, navigate]);

  if (!subject) return null;

  const toggleChapter = (idx) => {
    setOpenChapters(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleTopic = (chIdx, topIdx) => {
    const key = `${chIdx}-${topIdx}`;
    setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToChapter = (idx) => {
    setOpenChapters(prev => ({ ...prev, [idx]: true }));
    chapterRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const prevSubject = prev ? CURRICULUM[prev] : null;
  const nextSubject = next ? CURRICULUM[next] : null;

  return (
    <>
      <SEOHead title={`${subject.name} 학습`} description={subject.description} />

      <div className="page-header" style={{ '--subject-color': subject.color }}>
        <div className="container">
          <Link to="/learn" className="subject-back-link">
            <i className="fa-solid fa-arrow-left" /> 과목 목록
          </Link>
          <h1>
            <i className={subject.icon} style={{ color: subject.color }} /> {subject.name}
          </h1>
          <p className="page-desc">{subject.description}</p>
        </div>
      </div>

      <div className="container subject-study-layout">
        {/* 사이드바 - 챕터 네비게이션 */}
        <aside className="chapter-nav">
          <div className="chapter-nav-title">목차</div>
          <ul className="chapter-nav-list">
            {subject.chapters.map((ch, idx) => (
              <li key={idx}>
                <button
                  className={`chapter-nav-item ${openChapters[idx] ? 'active' : ''}`}
                  onClick={() => scrollToChapter(idx)}
                >
                  <span className="chapter-nav-num">{idx + 1}</span>
                  {ch.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* 메인 콘텐츠 */}
        <div className="subject-study-main">
          {subject.chapters.map((chapter, chIdx) => (
            <div
              key={chIdx}
              className="chapter-accordion"
              ref={el => (chapterRefs.current[chIdx] = el)}
            >
              <button
                className={`chapter-header ${openChapters[chIdx] ? 'open' : ''}`}
                onClick={() => toggleChapter(chIdx)}
                style={{ '--chapter-color': subject.color }}
              >
                <div className="chapter-header-left">
                  <span className="chapter-num" style={{ background: subject.color }}>
                    {chIdx + 1}
                  </span>
                  <span className="chapter-title">{chapter.title}</span>
                  <span className="chapter-count">{chapter.topics.length}개 토픽</span>
                </div>
                <i className={`fa-solid fa-chevron-down chapter-toggle-icon ${openChapters[chIdx] ? 'open' : ''}`} />
              </button>

              {openChapters[chIdx] && (
                <div className="chapter-body">
                  {chapter.topics.map((topic, topIdx) => {
                    const topicKey = `${chIdx}-${topIdx}`;
                    return (
                      <div key={topIdx} className="topic-item">
                        <button
                          className={`topic-header ${openTopics[topicKey] ? 'open' : ''}`}
                          onClick={() => toggleTopic(chIdx, topIdx)}
                        >
                          <span className="topic-title-text">
                            <i className="fa-solid fa-bookmark" style={{ color: subject.color, opacity: 0.7 }} />
                            {topic.title}
                          </span>
                          <i className={`fa-solid fa-chevron-down topic-toggle-icon ${openTopics[topicKey] ? 'open' : ''}`} />
                        </button>
                        {openTopics[topicKey] && (
                          <div
                            className="topic-content"
                            style={{ '--topic-accent': subject.color }}
                            dangerouslySetInnerHTML={{ __html: topic.content }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* 이전/다음 과목 네비게이션 */}
          <div className="subject-nav-bottom">
            {prevSubject ? (
              <Link to={`/learn/${prev}`} className="subject-nav-btn prev">
                <i className="fa-solid fa-arrow-left" />
                <div>
                  <span className="subject-nav-label">이전 과목</span>
                  <span className="subject-nav-name">{prevSubject.name}</span>
                </div>
              </Link>
            ) : <div />}
            {nextSubject ? (
              <Link to={`/learn/${next}`} className="subject-nav-btn next">
                <div>
                  <span className="subject-nav-label">다음 과목</span>
                  <span className="subject-nav-name">{nextSubject.name}</span>
                </div>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </>
  );
}
