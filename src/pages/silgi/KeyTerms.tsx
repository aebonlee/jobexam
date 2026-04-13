import { useState } from 'react';
import SEOHead from '../../components/SEOHead';

const KEY_TERMS = [
  { term: '직업상담', definition: '개인이 자신의 직업적 문제를 해결하고 직업 선택·적응·발달을 도모할 수 있도록 전문 상담사가 도움을 제공하는 과정', category: '직업상담학' },
  { term: '내담자 중심 상담', definition: 'Rogers의 인간중심 상담이론에 기반하여 공감적 이해, 무조건적 긍정적 존중, 일치성을 핵심 조건으로 하는 상담 방법', category: '직업상담학' },
  { term: '행동주의 상담', definition: '학습이론에 기반하여 관찰 가능한 행동의 변화를 목표로 하는 상담 접근법. 체계적 탈감법, 토큰경제 등의 기법 활용', category: '직업상담학' },
  { term: 'Holland 유형론', definition: '현실형(R), 탐구형(I), 예술형(A), 사회형(S), 기업형(E), 관습형(C) 6가지 유형으로 개인과 직업 환경을 분류하는 이론', category: '직업심리학' },
  { term: 'Super의 발달이론', definition: '직업발달을 성장기, 탐색기, 확립기, 유지기, 쇠퇴기의 5단계로 나누는 생애발달 이론', category: '직업심리학' },
  { term: '직업심리검사', definition: '개인의 적성, 흥미, 성격 등을 측정하여 직업 선택과 적응에 활용하는 표준화된 검사 도구', category: '직업심리학' },
  { term: '한국표준직업분류(KSCO)', definition: '통계청에서 발행하는 직업분류 체계로, 대분류 10개, 중분류, 소분류, 세분류, 세세분류로 구성', category: '직업정보론' },
  { term: '워크넷(WorkNet)', definition: '고용노동부 산하 한국고용정보원이 운영하는 온라인 취업 지원 서비스', category: '직업정보론' },
  { term: '노동시장', definition: '노동력의 수요(기업)와 공급(근로자)이 만나 임금과 고용량이 결정되는 시장', category: '노동시장론' },
  { term: '인적자본론', definition: 'Becker에 의해 체계화된 이론으로, 교육·훈련에 대한 투자가 개인의 생산성과 임금을 높인다는 이론', category: '노동시장론' },
  { term: '실업', definition: '일할 능력과 의사가 있음에도 취업하지 못한 상태. 마찰적, 구조적, 경기적 실업으로 구분', category: '노동시장론' },
  { term: '근로기준법', definition: '근로조건의 최저 기준을 정하여 근로자의 기본적 생활을 보장하는 법률', category: '노동관계법규' },
  { term: '고용보험법', definition: '실업 예방, 고용 촉진, 근로자의 직업능력 개발·향상, 실업급여 지급을 위한 법률', category: '노동관계법규' },
  { term: '직업안정법', definition: '직업소개, 직업지도 등 직업안정 업무에 관한 사항을 규정하는 법률', category: '노동관계법규' },
  { term: '구조화된 면접', definition: '사전에 정해진 질문 목록에 따라 모든 지원자에게 동일한 질문을 하는 면접 방식', category: '직업상담학' },
];

export default function KeyTerms() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['전체', ...new Set(KEY_TERMS.map(t => t.category))];

  const filtered = KEY_TERMS.filter(t => {
    const matchCategory = selectedCategory === '전체' || t.category === selectedCategory;
    const matchSearch = !searchTerm ||
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <SEOHead title="핵심 용어" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-book" /> 핵심 용어</h1>
          <p className="page-desc">실기 시험에 자주 출제되는 핵심 용어를 정리했습니다</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="terms-toolbar">
          <input
            type="text"
            className="form-input"
            placeholder="용어 검색..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ maxWidth: 300 }}
          />
          <div className="study-filters" style={{ marginTop: 16 }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`study-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="key-terms-grid">
          {filtered.map((term, idx) => (
            <div key={idx} className="term-card">
              <div className="term-card-header">
                <h4 className="term-name">{term.term}</h4>
                <span className="term-category">{term.category}</span>
              </div>
              <p className="term-definition">{term.definition}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
