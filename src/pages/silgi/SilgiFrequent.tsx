import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import {
  FREQUENT_CATEGORIES,
  SILGI_FREQUENT,
  getQuestionsByCategory,
  getCategoryCounts,
} from '../../data/silgiFrequent';

function FrequentCard({ question, isOpen, onToggle }) {
  const cat = FREQUENT_CATEGORIES.find((c) => c.id === question.category);
  return (
    <div className={`sq-card ${isOpen ? 'sq-card--open' : ''}`}>
      <button className="sq-card-header" onClick={onToggle} type="button">
        <div className="sq-card-num">Q{question.num}</div>
        <div className="sq-card-title-area">
          <h3 className="sq-card-title">{question.title}</h3>
          <div className="sq-card-meta">
            <span
              className="sq-badge"
              style={{ background: `${cat?.color}18`, color: cat?.color }}
            >
              {cat?.label}
            </span>
            <span className="sq-badge sq-badge--keyword">{question.keyword}</span>
          </div>
        </div>
        <div className="sq-card-toggle">
          <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`} />
        </div>
      </button>

      {isOpen && (
        <div className="sq-card-body">
          <div className="sq-frequency">
            <i className="fa-solid fa-chart-bar" />
            <span>출제 이력: {question.frequency}</span>
          </div>
          <div className="sq-section">
            <div className="sq-section-label">
              <i className="fa-solid fa-check-circle" />
              <span>상세 해설</span>
            </div>
            <div
              className="sq-section-content"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SilgiFrequent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const counts = useMemo(() => getCategoryCounts(), []);

  const filtered = useMemo(() => {
    let list = getQuestionsByCategory(activeCategory);
    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      list = list.filter(
        (q) =>
          q.title.toLowerCase().includes(term) ||
          q.keyword.toLowerCase().includes(term)
      );
    }
    return list;
  }, [activeCategory, searchTerm]);

  const toggleQuestion = (num: number) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  const expandAll = () => {
    setOpenQuestions(new Set(filtered.map((q) => q.num)));
  };

  const collapseAll = () => {
    setOpenQuestions(new Set());
  };

  return (
    <>
      <SEOHead
        title="8개년 빈출 기출정리"
        description="직업상담사 2급 실기 2018~2025 8개년 빈출 기출문제 상세 해설"
      />
      <div className="page-header">
        <div className="container">
          <Link to="/silgi" className="sq-back-link">
            <i className="fa-solid fa-arrow-left" /> 실기 시험
          </Link>
          <h1>8개년 빈출 기출정리</h1>
          <p className="page-desc">
            2018~2025 실기 빈출문제 {SILGI_FREQUENT.length}문항 · 과목별 상세 해설
          </p>
        </div>
      </div>

      <div className="container silgi-exam-page">
        {/* Category Filter */}
        <div className="freq-filter">
          {FREQUENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`freq-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenQuestions(new Set());
              }}
              type="button"
              style={
                activeCategory === cat.id
                  ? { background: cat.color, borderColor: cat.color, color: '#fff' }
                  : undefined
              }
            >
              <i className={cat.icon} />
              <span>{cat.label}</span>
              <span className="freq-filter-count">{counts[cat.id]}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="freq-search">
          <i className="fa-solid fa-search" />
          <input
            type="text"
            placeholder="문제 검색 (제목, 키워드)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="freq-search-clear"
              onClick={() => setSearchTerm('')}
              type="button"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="sq-controls">
          <button className="sq-control-btn" onClick={expandAll} type="button">
            <i className="fa-solid fa-angles-down" /> 전체 펼치기
          </button>
          <button className="sq-control-btn" onClick={collapseAll} type="button">
            <i className="fa-solid fa-angles-up" /> 전체 접기
          </button>
          <span className="sq-control-count">
            {filtered.length}문항{' '}
            {searchTerm && `(검색: "${searchTerm}")`}
          </span>
        </div>

        {/* Question List */}
        <div className="sq-list">
          {filtered.length > 0 ? (
            filtered.map((q) => (
              <FrequentCard
                key={q.num}
                question={q}
                isOpen={openQuestions.has(q.num)}
                onToggle={() => toggleQuestion(q.num)}
              />
            ))
          ) : (
            <div className="freq-empty">
              <i className="fa-solid fa-search" />
              <p>검색 결과가 없습니다.</p>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="sq-bottom-nav">
          <Link to="/silgi" className="btn btn-secondary">
            <i className="fa-solid fa-arrow-left" /> 실기 시험
          </Link>
          <Link to="/silgi/past" className="btn btn-primary">
            <i className="fa-solid fa-scroll" /> 기출문제 해설
          </Link>
        </div>
      </div>
    </>
  );
}
