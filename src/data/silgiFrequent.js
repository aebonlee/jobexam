/* ============================================
   JobPath - 실기 8개년 빈출 기출정리 (2018~2025)
   총 201문항 (1~201번) | 4개 과목 분류
   워크북 8개년 기출 데이터 기반 확장 (2026-04-06)
   ============================================ */

export const FREQUENT_CATEGORIES = [
  { id: 'all', label: '전체', color: '#6366F1', icon: 'fa-solid fa-list' },
  { id: 'counseling', label: '직업상담학', color: '#3B82F6', icon: 'fa-solid fa-comments' },
  { id: 'psychology', label: '직업심리학', color: '#8B5CF6', icon: 'fa-solid fa-brain' },
  { id: 'jobinfo', label: '직업정보론', color: '#10B981', icon: 'fa-solid fa-circle-info' },
  { id: 'labor_market', label: '노동시장론', color: '#F59E0B', icon: 'fa-solid fa-chart-line' },
];

export const SILGI_FREQUENT = [
  /* ===================================================================
     직업상담학 (counseling)
     =================================================================== */
  {
    num: 1, category: 'counseling',
    title: '부처(Butcher)의 집단 직업상담의 과정 3단계 모델에 대해 쓰고 설명하시오.',
    frequency: '24-3, 22-3, 21-3, 21-1, 20-2',
    keyword: '부처(Butcher) 집단직업상담 3단계',
    answer: `<ol>
<li><strong>탐색단계</strong><br/>자기개방, 흥미와 적성에 대한 탐색, 측정결과에 대한 피드백, 자아상과 피드백 내용 간 불일치의 해결</li>
<li><strong>전환단계</strong><br/>자신의 지식과 직업세계의 연결이 이루어지는 단계, 가치와 피드백 간 불일치 해결</li>
<li><strong>행동단계</strong><br/>목표를 설정하고 정보의 수집과 공유가 이루어지며, 목표를 달성하기 위한 구체적인 행동을 하는 단계</li>
</ol>`,
  },
  {
    num: 2, category: 'counseling',
    title: '아들러(Adler)의 개인주의 상담과정의 목표 5가지를 쓰시오.',
    frequency: '25-1, 22-3, 20-1, 18-2',
    keyword: '아들러(Adler) 개인주의 상담 목표',
    answer: `<ol>
<li>사회적 관심을 갖도록 돕는다.</li>
<li>패배감을 극복하고 열등감을 감소시킬 수 있도록 돕는다.</li>
<li>내담자의 잘못된 가치와 목표를 수정하도록 돕는다.</li>
<li>잘못된 동기를 바꾸도록 돕는다.</li>
<li>내담자가 타인과의 동질감을 갖도록 돕는다.</li>
<li>사회의 구성원으로 기여하도록 돕는다.</li>
</ol>`,
  },
  {
    num: 3, category: 'counseling',
    title: '크라이티스(Crites)의 포괄적 직업상담의 상담과정을 단계별로 설명하시오.',
    frequency: '22-3, 19-1',
    keyword: '크라이티스(Crites) 포괄적 직업상담',
    answer: `<ol>
<li><strong>제1단계 : 진단</strong><br/>내담자의 진로문제 진단 및 문제파악을 위해 심리검사 자료와 상담을 통한 자료가 수집된다.</li>
<li><strong>제2단계 : 명료화 및 해석</strong><br/>의사결정 과정을 방해하는 태도와 행동을 확인해 대안을 탐색한다. 상담자와 내담자가 함께 문제의 원인을 명료화하고 해결방안을 모색하는 단계이다.</li>
<li><strong>제3단계 : 문제해결</strong><br/>문제해결을 위해 어떤 행동을 실제로 취해야 하는지 결정한다.</li>
</ol>`,
  },
  {
    num: 4, category: 'counseling',
    title: '직업적응 이론에서 개인과 환경이 상호작용하는 특성을 나타내는 4가지 성격유형 요소를 설명하시오.',
    frequency: '22-3, 20-2',
    keyword: '직업적응이론(TWA) 성격유형 요소',
    answer: `<ol>
<li><strong>민첩성</strong><br/>개인이 얼마나 빠르게 환경에 적응할 수 있는가를 의미하는 것으로 속도를 중시한다.</li>
<li><strong>역량</strong><br/>개인이 환경과 상호작용을 하는 활동수준, 또는 강도를 의미. 높은 에너지를 가진 사람이 더 많은 역량이 있다고 볼 수 있다.</li>
<li><strong>리듬</strong><br/>과제를 수행하는 과정의 패턴이 얼마나 꾸준하고 주기적인가 또는 불규칙한가를 의미한다.</li>
<li><strong>지구력(지속성)</strong><br/>개인이 불만족스러운 환경을 참고 얼마나 오래 상호작용을 유지할 수 있는가를 나타낸다.</li>
</ol>`,
  },
  {
    num: 5, category: 'counseling',
    title: '롭퀴스트와 데이비스의 직업적응 이론에서 직업적응방식의 유형을 쓰고 설명하시오.',
    frequency: '23-2, 19-1',
    keyword: '직업적응이론(TWA) 적응방식 유형',
    answer: `<ol>
<li><strong>융통성</strong> : 개인이 작업환경과 개인의 환경 사이 부조화를 참아낼 수 있는 정도</li>
<li><strong>끈기</strong> : 환경이 자신에게 맞지 않아도 얼마나 오래 견딜 수 있는지</li>
<li><strong>반응성</strong> : 개인이 작업환경에 반응하는 정도</li>
<li><strong>적극성</strong> : 개인이 작업환경을 자신과 더 조화롭게 만들기 위해 노력하는 정도</li>
</ol>`,
  },
  {
    num: 6, category: 'counseling',
    title: '직업적응 이론(TWA)에서 중요하게 다루는 직업가치 6가지를 쓰시오.',
    frequency: '25-3, 24-1, 22-3',
    keyword: '직업적응이론(TWA) 직업가치',
    answer: `<ol><li>지위</li><li>성취</li><li>이타심</li><li>안정성</li><li>보호(안락함, 편안함)</li><li>자율성</li></ol>`,
  },
  {
    num: 7, category: 'counseling',
    title: '크롬볼츠(Krumboltz)가 제시한 진로선택에 영향을 주는 요인 4가지를 쓰시오.',
    frequency: '22-3, 18-2',
    keyword: '크롬볼츠(Krumboltz) 진로선택 영향요인',
    answer: `<ol><li>유전적 요인과 특별한 능력</li><li>환경적 조건과 사건</li><li>학습경험</li><li>과제 접근 기술</li></ol>`,
  },
  {
    num: 42, category: 'counseling',
    title: '인터넷을 이용한 사이버상담의 필요성을 6가지 쓰시오.',
    frequency: '22-3',
    keyword: '사이버상담 필요성',
    answer: `<ol>
<li>접근이 용이하다.</li>
<li>익명성이 보장되어 솔직한 표현이 가능하다.</li>
<li>직접 대면하는 것이 아니므로 심리적인 부담이 덜하다.</li>
<li>상담 중 자료의 탐색이 용이하다.</li>
<li>가명을 이용하여 상담 사례를 소개하는 것이 가능하다.</li>
<li>내담자 주도로 자기 성찰 능력을 기를 수 있다.</li>
</ol>`,
  },
  {
    num: 49, category: 'counseling',
    title: '발달적 직업상담에서 진로 자서전과 의사결정 일기를 각각 설명하시오.',
    frequency: '24-3, 19-3',
    keyword: '진로 자서전 / 의사결정 일기',
    answer: `<ol>
<li><strong>진로 자서전</strong><br/>내담자가 과거에 어떤 의사결정을 했는지 자유롭게 기술하는 자료이다.</li>
<li><strong>의사결정 일기</strong><br/>진로 자서전의 보충 역할을 하는 것으로, 내담자의 일상적인 의사결정 방식을 작성하도록 하는 것이다.</li>
</ol>`,
  },
  {
    num: 61, category: 'counseling',
    title: '보딘이 제시한 직업문제의 심리적 원인 5가지를 쓰고 설명하시오.',
    frequency: '23-2, 21-1, 19-2, 18-3',
    keyword: '보딘(Bordin) 심리적 원인',
    answer: `<ol>
<li><strong>의존성</strong> : 직업을 스스로 결정하지 못하고 타인에게 의존하는 경우</li>
<li><strong>자아갈등(내적갈등)</strong> : 자아의 내적 갈등으로 인해 직업을 선택하지 못하는 경우</li>
<li><strong>정보의 부족</strong> : 정보가 부족하여 직업을 결정하지 못하는 경우</li>
<li><strong>선택에 대한 불안</strong> : 자신이 하려는 일에 대한 타인의 반응 때문에 불안하여 직업 선택에 어려움을 겪는 경우</li>
<li><strong>확신의 부족(문제 없음)</strong> : 문제 없는 직업 선택을 하였으나 이에 대한 확신이 부족한 경우</li>
</ol>`,
  },
  {
    num: 62, category: 'counseling',
    title: '보딘의 3단계 직업상담과정을 쓰고 각각에 대해 설명하시오.',
    frequency: '20-3, 18-2',
    keyword: '보딘(Bordin) 3단계 직업상담과정',
    answer: `<ol>
<li><strong>탐색과 계약설정 단계</strong><br/>내담자의 욕구와 정신 역동성을 탐색하고 상담을 구조화한다.</li>
<li><strong>중대한 결정 단계</strong><br/>내담자의 성격에 맞는 직업을 선택할 것인지, 직업에 맞게 성격을 변화시킬 것인지 중대한 결정을 한다.</li>
<li><strong>변화를 위한 노력 단계</strong><br/>내담자가 결정한 방향으로 변화할 수 있도록 노력한다.</li>
</ol>`,
  },
  {
    num: 63, category: 'counseling',
    title: '형태주의(게슈탈트) 상담의 상담기법을 4가지 쓰시오.',
    frequency: '24-2, 23-2, 19-3, 18-2',
    keyword: '게슈탈트 상담기법',
    answer: `<ol>
<li><strong>꿈작업</strong> : 꿈이 현재 일어난 일인 것처럼 연기하도록 하는 기법</li>
<li><strong>빈의자 기법</strong> : 빈의자에 상대가 있다고 생각하고 감정을 표현하도록 하는 기법</li>
<li><strong>과장하기</strong> : 내담자가 자신의 말과 행동을 과장하여 욕구와 감정을 명확하게 이해시키는 기법</li>
<li><strong>신체자각</strong> : 신체 감각을 통해 감정을 자각하도록 하는 기법</li>
<li><strong>언어자각</strong> : 언어를 통해 자신의 욕구를 알 수 있도록 하는 기법</li>
<li><strong>욕구와 감정의 자각</strong> : 현재 상황에서 느끼는 욕구와 감정을 자각하도록 하는 기법</li>
<li><strong>자기 부분들 간의 대화</strong> : 내담자 안에 내재된 자아들 간의 대화를 유도하는 기법</li>
</ol>`,
  },
  {
    num: 64, category: 'counseling',
    title: '게슈탈트 상담의 상담기법 3가지만 쓰고 설명하시오.',
    frequency: '19-3',
    keyword: '게슈탈트 상담기법 상세',
    answer: `<ol>
<li><strong>빈의자 기법</strong> : 빈의자에 상대가 있다고 생각하고 내담자가 감정을 표현하도록 하는 기법</li>
<li><strong>꿈작업</strong> : 꿈이 현재 일어난 일인 것처럼 연기하도록 하는 기법</li>
<li><strong>과장하기</strong> : 내담자가 자신의 말과 행동을 과장하여 표현하도록 하여, 스스로의 욕구와 감정을 명확하게 이해시키는 기법</li>
<li><strong>신체자각</strong> : 내담자가 느끼고 있는 욕구와 감정을 신체 감각을 통해 자각하도록 하는 기법</li>
<li><strong>언어자각</strong> : 내담자가 언어를 통해 자신의 욕구를 알 수 있도록 하는 기법</li>
<li><strong>욕구와 감정의 자각</strong> : 현재 상황에서 내담자가 느끼는 욕구와 감정을 자각하도록 하는 기법</li>
<li><strong>자기 부분들 간의 대화</strong> : 내담자 안에 내재된 자아들 간의 대화를 유도하는 기법</li>
</ol>`,
  },
  {
    num: 65, category: 'counseling',
    title: '내담자중심 상담기법에서 상담자의 태도 3가지를 쓰시오.',
    frequency: '25-3, 24-1, 20-1',
    keyword: '내담자중심 상담 상담자 태도',
    answer: `<ol>
<li><strong>일치성 또는 진실성</strong> : 상담자가 자신의 감정이나 생각을 있는 그대로 솔직하게 표현하는 것</li>
<li><strong>무조건적인 수용</strong> : 내담자의 말을 비판하거나 평가하지 않고 존중하는 태도</li>
<li><strong>공감적 이해</strong> : 내담자의 감정과 경험을 마치 자신의 것처럼 이해하고자 하는 태도</li>
</ol>`,
  },
  {
    num: 66, category: 'counseling',
    title: '형태주의 상담의 목표 6가지를 쓰시오.',
    frequency: '22-2',
    keyword: '게슈탈트 상담 목표',
    answer: `<ol>
<li>자기 인식을 증가시키도록 한다.</li>
<li>자신의 경험에 대한 주체가 자신이라는 태도가 형성되도록 한다.</li>
<li>타인의 권리를 침해하지 않으면서 자신의 욕구를 충족시킬 수 있는 기술을 개발하고 가치관을 형성시킨다.</li>
<li>모든 감각이 더 잘 인식되도록 한다.</li>
<li>행동의 결과가 수용되며, 행동을 결정할 책임이 자신에게 있음을 인정하게 된다.</li>
<li>외적 지지에서 내적 지지로 바꾸도록 돕는다.</li>
<li>타인에게 요구하거나 도움을 청할 수 있게 되며, 동시에 타인에게 도움을 줄 수 있도록 한다.</li>
</ol>`,
  },
  {
    num: 68, category: 'counseling',
    title: '실존주의 상담자들이 중요하게 생각하는 주제 4가지를 쓰고 설명하시오.',
    frequency: '23-2, 23-1, 20-2',
    keyword: '실존주의 궁극적 관심사',
    answer: `<ol>
<li><strong>삶의 의미성</strong> : 인간은 삶을 통해 존재 의미를 발견해야 한다.</li>
<li><strong>죽음과 비존재</strong> : 삶과 죽음은 분리될 수 없으며, 인간은 비존재에 대한 불안감을 가진다.</li>
<li><strong>진실성</strong> : 개인의 실존 회복을 위해 진실성 있는 노력이 필요하다.</li>
<li><strong>자유와 책임</strong> : 인간은 자유로운 존재이며, 스스로 선택할 능력과 책임이 있다.</li>
</ol>`,
  },
  {
    num: 69, category: 'counseling',
    title: '홀랜드의 육각형 모델에서 일관성, 변별성, 정체성에 대해 설명하시오.',
    frequency: '25-1, 23-2',
    keyword: '홀랜드 육각형 모델 해석차원',
    answer: `<ol>
<li><strong>일관성</strong> : 육각형 모델에서 어떤 쌍들은 다른 쌍에 비해 더 많은 공통점을 갖고 있다.</li>
<li><strong>변별성</strong> : 특정 성격 유형은 다른 어떤 유형과는 유사하고 어떤 유형과는 차별화 된다.</li>
<li><strong>정체성</strong> : 개인에게 정체성은 목표, 흥미, 재능 등이고, 환경에서 정체성은 투명성, 안정성, 일, 목표 등이다.</li>
</ol>`,
  },
  {
    num: 70, category: 'counseling',
    title: '고트프레드슨의 직업과 관련된 개인발달의 4단계를 쓰시오.',
    frequency: '25-1, 23-2',
    keyword: '고트프레드슨(Gottfredson) 직업포부 발달단계',
    answer: `<ol>
<li><strong>힘과 크기 지향성</strong> : 사고과정이 구체화되며 어른이 된다는 것의 의미를 알게 된다.</li>
<li><strong>성역할 지향성</strong> : 자아개념이 성의 발달에 의해 영향을 받는다.</li>
<li><strong>사회적 가치 지향성</strong> : 사회계층에 대한 개념이 생기면서 '상황 속 자아'를 인식한다.</li>
<li><strong>내적, 고유한 자아 지향성</strong> : 자아성찰과 사회계층의 맥락에서 직업적 포부가 발달한다.</li>
</ol>`,
  },
  {
    num: 73, category: 'counseling',
    title: '진로상담 과정에서 관계수립을 위한 기본 상담기술 6가지를 쓰시오.',
    frequency: '25-3, 23-1, 20-1',
    keyword: '기본 상담기술',
    answer: `<ol><li>공감</li><li>적극적 경청</li><li>명료화</li><li>반영</li><li>수용</li><li>요약과 재진술</li><li>감정이입</li><li>환언</li><li>직면</li></ol>`,
  },
  {
    num: 74, category: 'counseling',
    title: '행동주의 직업상담의 불안감소기법과 학습촉진기법을 각각 쓰고 설명하시오.',
    frequency: '23-1, 22-1',
    keyword: '불안감소기법 / 학습촉진기법',
    answer: `<h4>불안감소기법</h4>
<ol>
<li><strong>체계적 둔감법</strong> : 불안 위계 목록에 따라 점진적으로 불안을 경험하게 하여 둔감화시키는 방법</li>
<li><strong>홍수법</strong> : 두려워하는 자극에 장시간 지속적으로 노출시켜 두려움을 제거하는 방법</li>
<li><strong>역조건 형성</strong> : 공포를 느꼈던 장면에 바람직한 반응을 연합시켜 부적절한 반응을 소거하는 방법</li>
<li><strong>혐오치료</strong> : 문제행동에 혐오자극을 제시하여 부적절한 행동을 감소시키는 방법</li>
</ol>
<h4>학습촉진기법</h4>
<ol>
<li><strong>강화</strong> : 내담자의 바람직한 직업결정에 긍정적·부정적 반응을 보여 촉진하는 방법</li>
<li><strong>대리학습(모델링)</strong> : 다른 사람의 진로결정 행동 및 결과를 관찰하여 학습을 촉진하는 방법</li>
<li><strong>변별학습</strong> : 상이한 자극을 구별하게 하여 직업결정 능력을 비교해 보도록 하는 방법</li>
</ol>`,
  },
  {
    num: 75, category: 'counseling',
    title: '행동주의 상담의 적응 행동 증진기법 3가지를 설명하시오.',
    frequency: '24-1, 21-2, 18-1',
    keyword: '적응 행동 증진기법',
    answer: `<ol>
<li><strong>강화</strong> : 내담자의 행동에 적절하게 긍정·부정적 반응을 보여 바람직한 행동을 강화</li>
<li><strong>변별학습</strong> : 검사도구를 사용해 직업결정 능력 등을 변별하고 비교해보도록 하는 것</li>
<li><strong>사회적 모델링과 대리학습</strong> : 타인의 행동 관찰과 모방을 통해 학습을 촉진</li>
<li><strong>행동조성</strong> : 행동을 단계별로 세분화해 단계마다 강화를 제공하여 학습 촉진</li>
<li><strong>상표제도(토큰경제)</strong> : 바람직한 행동이 이뤄질 때마다 그에 상응하는 보상을 하는 것</li>
</ol>`,
  },
  {
    num: 76, category: 'counseling',
    title: '윌리엄슨의 직업상담 문제유형 4가지를 쓰고 설명하시오.',
    frequency: '25-2, 22-2, 21-3, 20-4, 18-1',
    keyword: '윌리엄슨 직업상담 문제유형',
    answer: `<ol>
<li><strong>진로 무선택</strong> : 직업을 선택해 본 적이 없거나, 어떤 것을 선택할지 모르는 유형</li>
<li><strong>불확실한 선택</strong> : 진로를 선택하였으나 이에 대한 확신이 없는 유형</li>
<li><strong>어리석은 선택</strong> : 자신의 특성을 고려하지 않고 특정 직업의 특권이나 갈망으로 직업을 선택한 유형</li>
<li><strong>흥미와 적성의 불일치</strong> : 자신의 흥미나 적성에 모순되는 직업을 선택한 유형</li>
</ol>`,
  },
  {
    num: 77, category: 'counseling',
    title: '집단상담의 형태를 3가지 쓰고 각각 설명하시오.',
    frequency: '19-2',
    keyword: '집단상담 형태',
    answer: `<ol>
<li><strong>성장 집단</strong> : 내담자의 내적, 외적 성장을 위한 집단</li>
<li><strong>교육 집단</strong> : 내담자의 교육을 목표로 하는 집단</li>
<li><strong>상담 집단</strong> : 구성원의 문제 해결, 자아 발견 등을 목표로 하는 집단</li>
</ol>`,
  },
  {
    num: 78, category: 'counseling',
    title: '톨버트가 제시한 집단상담 과정에서 나타나는 활동 유형을 제시하시오.',
    frequency: '19-1',
    keyword: '톨버트 집단상담 활동유형',
    answer: `<ol><li>자기탐색</li><li>상호작용</li><li>개인적 정보의 검토 및 목표와의 연결</li><li>직업적·교육적 정보의 획득과 검토</li><li>의사결정</li></ol>`,
  },
  {
    num: 79, category: 'counseling',
    title: '집단상담의 장점 6가지를 쓰시오.',
    frequency: '24-2, 23-1, 20-4, 19-1',
    keyword: '집단상담 장점',
    answer: `<ol>
<li>시간과 비용이 경제적이다.</li>
<li>내담자가 사회성을 기를 수 있다.</li>
<li>직업 성숙도가 낮은 내담자에게 적합하다.</li>
<li>타인을 보고 관찰하여 학습하는 효과가 있다.</li>
<li>개인에 대한 집중도가 낮아 내담자의 부담감을 감소시킬 수 있다.</li>
<li>구체적인 경험 및 현실 검증의 기회가 제공된다.</li>
</ol>`,
  },
  {
    num: 80, category: 'counseling',
    title: '집단상담의 단점 3가지를 쓰시오.',
    frequency: '20-4',
    keyword: '집단상담 단점',
    answer: `<ol>
<li>다수 내담자로 인해 비밀 보장이 어렵다.</li>
<li>상담을 위한 집단을 구성하기 어렵다.</li>
<li>모든 구성원이 만족하는 상담을 하기 어렵다.</li>
</ol>`,
  },
  {
    num: 81, category: 'counseling',
    title: '로저스의 인간중심 상담의 철학적 가정 4가지를 쓰시오.',
    frequency: '23-1, 18-3',
    keyword: '로저스 인간중심 상담 철학적 가정',
    answer: `<ol>
<li>인간은 가치를 지닌 유일한 존재이다.</li>
<li>인간은 성장력을 가지고 있다.</li>
<li>인간은 선한 존재이다.</li>
<li>인간은 자유로운 존재이다.</li>
<li>인간은 자신의 진로를 선택할 권리가 있다.</li>
</ol>`,
  },
  {
    num: 87, category: 'counseling',
    title: '홀랜드 직업흥미검사의 6가지 유형을 쓰시오.',
    frequency: '25-2, 23-1, 22-1, 20-3, 20-1, 19-2, 18-2',
    keyword: '홀랜드(Holland) 흥미유형 RIASEC',
    answer: `<ol><li>현실형</li><li>탐구형</li><li>예술형</li><li>사회형</li><li>진취형(기업형)</li><li>관습형</li></ol>`,
  },
  {
    num: 88, category: 'counseling',
    title: '인지적 명확성이 부족한 내담자의 유형 5가지를 쓰시오.',
    frequency: '21-1',
    keyword: '인지적 명확성 부족 유형',
    answer: `<ol><li>단순 오정보</li><li>복잡한 오정보</li><li>구체성의 결여</li><li>강박적 사고</li><li>양면적 사고</li></ol>`,
  },
  {
    num: 89, category: 'counseling',
    title: '내담자와의 상담목표 설정 시 유의사항 5가지를 쓰시오.',
    frequency: '25-2, 22-2, 20-3',
    keyword: '상담목표 설정 유의사항',
    answer: `<ol>
<li>내담자가 바라고 원하는 것을 목표로 하여야 한다.</li>
<li>상담 목표는 상담자의 기술과 양립 가능한 것이어야 한다.</li>
<li>상담 목표는 구체적인 것이어야 한다.</li>
<li>상담 목표는 실현 가능한 것이어야 한다.</li>
<li>상담 목표는 기한이 있어야 한다.</li>
</ol>`,
  },
  {
    num: 90, category: 'counseling',
    title: '내담자와의 초기면담 수행 시 상담자가 유의해야 할 사항 4가지를 쓰시오.',
    frequency: '20-3',
    keyword: '초기면담 유의사항',
    answer: `<ol><li>내담자와 만나기</li><li>상담 전 사례자료 검토하기</li><li>상담의 초기 목표 명확히 제시하기</li><li>비밀 유지에 대해 설명하기</li></ol>`,
  },
  {
    num: 91, category: 'counseling',
    title: '내담자의 행동을 이해하고 해석하는 데 기본이 되는 상담 기법을 6가지 쓰시오.',
    frequency: '25-3, 21-2',
    keyword: '상담 기법 (행동이해/해석)',
    answer: `<ol>
<li>가정 사용하기</li><li>의미있는 질문하기</li><li>전이된 오류 정정하기</li><li>분류 및 재구성하기</li>
<li>저항감 재인식하기</li><li>근거없는 믿음 확인하기</li><li>왜곡된 사고 확인하기</li><li>반성의 장 마련하기</li><li>변명에 초점 맞추기</li>
</ol>`,
  },
  {
    num: 95, category: 'counseling',
    title: '벡의 인지치료에서 인지적 오류의 유형을 쓰시오.',
    frequency: '25-3, 22-2, 19-3, 18-3',
    keyword: '벡(Beck) 인지적 오류',
    answer: `<ol>
<li><strong>흑백논리</strong> : 중간이 없이 이분법적으로 사고할 때 생기는 오류</li>
<li><strong>선택적 추상화</strong> : 부정적인 일부를 근거로 결론을 내려 전체에 적용하는 오류</li>
<li><strong>과잉 일반화</strong> : 특정 사건의 결과를 관계 없는 상황에 적용할 때 생기는 오류</li>
<li><strong>개인화</strong> : 외부 사건을 자신과 관련짓는 오류</li>
<li><strong>의미의 확대 및 축소</strong> : 사건의 의미를 지나치게 크게 혹은 작게 왜곡하는 오류</li>
<li><strong>임의적 추론</strong> : 근거 없이 자의적으로 결론을 내리는 오류</li>
</ol>`,
  },
  {
    num: 96, category: 'counseling',
    title: '벡의 인지적 상담에서 인지적 오류 3가지를 제시하고 간략히 설명하시오.',
    frequency: '22-2',
    keyword: '벡(Beck) 인지적 오류 간략',
    answer: `<ol>
<li><strong>흑백논리</strong> : 중간이 없이 이분법적으로 사고할 때 생기는 오류이다.</li>
<li><strong>선택적 추상화</strong> : 부정적인 일부를 근거로 결론을 내린 후, 이를 전체에 적용하여 파악하려 할 때 생기는 오류이다.</li>
<li><strong>과잉 일반화</strong> : 특정 사건의 결과를 관계 없는 상황에 적용할 때 생기는 오류이다.</li>
</ol>`,
  },
  {
    num: 97, category: 'counseling',
    title: '벡의 인지행동적 상담에서 부정적 사고를 반박하는 방법 3가지를 설명하시오.',
    frequency: '25-1, 19-3',
    keyword: '벡(Beck) 인지행동 상담기법',
    answer: `<ol>
<li><strong>언어적 기법</strong> : 비합리적 신념을 논박하여 내담자의 언어를 변화시키는 방법</li>
<li><strong>정서적 기법</strong> : 내담자가 합리적 정서를 상상하도록 하는 방법</li>
<li><strong>행동적 기법</strong> : 내담자에게 목표 행동을 부여하고 실행하도록 하여 신념체계를 변화시키는 방법</li>
</ol>`,
  },
  {
    num: 102, category: 'counseling',
    title: '인지 정서 상담기법의 기본 가정, 기본개념, 상담의 목표를 쓰시오.',
    frequency: '20-4',
    keyword: '인지정서 상담(REBT) 기본가정/개념/목표',
    answer: `<ol>
<li><strong>기본가정</strong> : 인간은 합리적일 수도, 비합리적일 수도 있는 존재이며, 내담자의 문제는 비합리적 사고로 인해 생긴다.</li>
<li><strong>기본개념</strong> : 내담자의 문제를 해결하기 위해 상담자의 논박이 필요하며, ABCDEF 모델을 제시한다.</li>
<li><strong>상담의 목표</strong> : 내담자의 비합리적 신념을 합리적 신념으로 변화시켜 문제를 해결한다.</li>
</ol>`,
  },
  {
    num: 103, category: 'counseling',
    title: 'ABCDEF 모형의 의미를 쓰시오.',
    frequency: '24-3, 22-2, 21-3, 21-2, 20-3, 20-2, 18-1, 18-3',
    keyword: 'REBT ABCDEF 모형',
    answer: `<ol>
<li><strong>A (선행사건)</strong> : 내담자의 감정이나 행동에 영향을 미치는 사건</li>
<li><strong>B (비합리적 신념)</strong> : 선행사건에 대한 비합리적 신념체계</li>
<li><strong>C (결과)</strong> : 비합리적 신념으로 인한 부적응적인 정서·행동적 결과</li>
<li><strong>D (논박)</strong> : 비합리적 신념을 논리적으로 반박하는 것</li>
<li><strong>E (효과)</strong> : 논박으로 인해 비합리적 신념이 합리적 신념으로 전환</li>
<li><strong>F (새로운 감정)</strong> : 합리적 신념에서 비롯된 긍정적이고 수용적인 감정</li>
</ol>`,
  },
  {
    num: 104, category: 'counseling',
    title: 'ABCDEF 기법을 사례에 적용하여 설명하시오. (정리해고 사례)',
    frequency: '21-1',
    keyword: 'REBT ABCDEF 사례 적용',
    answer: `<ol>
<li><strong>A (선행사건)</strong> : 회사에서 정리해고를 당하는 사건이 발생하였다.</li>
<li><strong>B (비합리적 신념)</strong> : 해고가 자신이 무가치한 존재인 것을 의미한다는 비합리적 신념을 갖게 되었다.</li>
<li><strong>C (결과)</strong> : 비합리적 신념의 결과로 우울증과 자살 시도 등의 행동이 발생하였다.</li>
<li><strong>D (논박)</strong> : 상담을 통해 정리해고가 무가치함을 의미하는 것이 아님을 논박한다.</li>
<li><strong>E (효과)</strong> : 논박의 효과로 우울감을 극복하고 자신을 재평가한다.</li>
<li><strong>F (새로운 감정)</strong> : 자신에 대해 긍정적으로 평가하기 시작하고 다시 구직활동을 한다.</li>
</ol>`,
  },

  /* ===================================================================
     직업심리학 (psychology)
     =================================================================== */
  {
    num: 8, category: 'psychology',
    title: '규준 제작 시 사용되는 확률표집방법 3가지를 쓰고 설명하시오.',
    frequency: '25-3, 24-1, 22-3, 20-2, 18-3',
    keyword: '확률표집방법',
    answer: `<ol>
<li><strong>단순 무선 표집</strong> : 구성원들에게 번호를 부여하고 무작위로 번호를 뽑아 표집. 모집단의 구성원이 표본에 속할 확률이 동일</li>
<li><strong>층화표집</strong> : 모집단이 서로 이질적인 하위 집단으로 구성된 경우 각 하위 집단에서 표집하여 추출</li>
<li><strong>군집표집</strong> : 모집단이 서로 동질적인 하위 집단으로 구성된 경우에 한 집단 자체를 표본으로 추출</li>
</ol>`,
  },
  {
    num: 9, category: 'psychology',
    title: '측정오차를 줄이기 위한 구체적인 방법 6가지를 쓰시오.',
    frequency: '25-2, 22-3, 19-2',
    keyword: '측정오차 감소 방법',
    answer: `<ol><li>검사 문항의 수를 늘린다.</li><li>신뢰도에 나쁜 영향을 주는 문항을 제거한다.</li><li>표준화된 검사를 사용한다.</li><li>균일한 검사 조건을 유지한다.</li><li>검사 실시와 채점 방식을 표준화한다.</li><li>적절한 표본을 추출하여 측정한다.</li></ol>`,
  },
  {
    num: 10, category: 'psychology',
    title: '준거 타당도 계수의 크기에 영향을 미치는 요인을 쓰고 설명하시오.',
    frequency: '24-3, 22-3, 22-2, 18-1, 18-3',
    keyword: '준거타당도 계수 영향요인',
    answer: `<ol>
<li><strong>표집오차</strong> : 표집집단이 전체 모집단을 대표하지 못하게 되어 발생하는 오차</li>
<li><strong>준거측정치의 신뢰도</strong> : 준거측정치의 신뢰도가 낮으면 검사의 타당도도 낮아짐</li>
<li><strong>준거측정치의 타당도</strong> : 준거를 측정하는 도구가 해당 준거를 잘 반영하는지</li>
<li><strong>범위 제한</strong> : 자료가 전체 범위를 포괄하지 않고 일부만 포괄하는 경우 상관계수가 실제보다 작아짐</li>
</ol>`,
  },
  {
    num: 11, category: 'psychology',
    title: '자기 보고형 검사(설문지 형태 검사)의 장점 5가지를 쓰시오.',
    frequency: '22-3, 19-2',
    keyword: '자기보고형 검사 장점',
    answer: `<ol><li>검사 실시 시간이 짧다.</li><li>검사 비용이 경제적이다.</li><li>검사 결과에 대한 해석이 용이하다.</li><li>신뢰도와 타당도가 높은 편이다.</li><li>검사 환경의 영향을 적게 받는다.</li></ol>`,
  },
  {
    num: 12, category: 'psychology',
    title: '자기 보고형 검사(설문지 형태의 검사)가 가지는 단점 3가지를 쓰시오.',
    frequency: '19-3',
    keyword: '자기보고형 검사 단점',
    answer: `<ol>
<li>내담자가 문항의 의도를 파악하여 방어를 할 수 있다.</li>
<li>내담자의 반응이 제한적이어서 다양한 반응 관찰이 어렵고 무의식까지 관찰할 수 없다.</li>
<li>내담자의 반응 경향성에 따라 답변이 오염될 수 있다.</li>
</ol>`,
  },
  {
    num: 13, category: 'psychology',
    title: '투사적 검사와 비교하여 객관적 검사의 장점 3가지를 쓰시오.',
    frequency: '24-1, 21-2',
    keyword: '객관적 검사 장점',
    answer: `<ol><li>검사의 실시가 간편하다.</li><li>시간과 노력이 절감된다.</li><li>검사의 신뢰도와 타당도가 검증되어 있다.</li><li>검사의 객관성이 보장된다.</li><li>부적합한 응답을 최소화할 수 있다.</li><li>비용적 측면에서 경제적이다.</li></ol>`,
  },
  {
    num: 14, category: 'psychology',
    title: '투사적 검사의 장점과 단점을 각 3가지씩 쓰시오.',
    frequency: '24-3, 20-3, 18-1',
    keyword: '투사적 검사 장단점',
    answer: `<h4>장점</h4><ol><li>수검자의 방어를 무력화할 수 있다.</li><li>수검자의 무의식을 이끌어 낼 수 있다.</li><li>수검자의 다양한 반응을 관찰할 수 있다.</li></ol>
<h4>단점</h4><ol><li>검사 결과 해석을 위해 고도로 훈련된 전문가가 필요하다.</li><li>검사 시행에 비용과 시간이 많이 든다.</li><li>신뢰도와 타당도가 낮다.</li></ol>`,
  },
  {
    num: 15, category: 'psychology',
    title: '진로 성숙도 검사(CMI)의 태도 척도와 능력 척도를 각각 쓰시오.',
    frequency: '22-3',
    keyword: 'CMI 태도/능력 척도',
    answer: `<h4>태도척도</h4><ol><li>진로 결정성</li><li>참여도</li><li>독립성</li><li>성향</li><li>타협성</li></ol>
<h4>능력척도</h4><ol><li>자기평가</li><li>직업정보</li><li>목표선정</li><li>계획</li><li>문제해결</li></ol>`,
  },
  {
    num: 16, category: 'psychology',
    title: 'CMI검사에서 능력척도 3가지를 쓰고 설명하시오.',
    frequency: '25-3, 20-3',
    keyword: 'CMI 능력척도 상세',
    answer: `<ol>
<li><strong>자기평가</strong> : 자신의 능력과 성격, 흥미를 이해하는 능력</li>
<li><strong>직업정보</strong> : 관심 직업에 대해 얼마나 정보를 가지고 있고, 수집할 수 있는지에 대한 능력</li>
<li><strong>목표선정</strong> : 자신이 갖고 있는 정보와 직업세계를 연결하여 직업 목표를 선정하는 능력</li>
</ol>`,
  },
  {
    num: 43, category: 'psychology',
    title: '틴슬레이와 브래들리가 제시한 검사 해석의 4단계를 설명하시오.',
    frequency: '23-2, 20-4',
    keyword: '검사 해석 4단계',
    answer: `<ol>
<li><strong>해석 준비하기</strong> : 검사 결과와 내담자의 정보를 어떻게 연관지어 해석할 수 있는지 검토</li>
<li><strong>내담자 준비시키기</strong> : 내담자가 검사 결과를 수용할 수 있도록 준비</li>
<li><strong>결과 전달하기</strong> : 내담자가 이해할 수 있도록 검사 결과를 전달</li>
<li><strong>추후활동</strong> : 내담자가 검사 결과를 잘 이해했는지 확인하고 의견 교환</li>
</ol>`,
  },
  {
    num: 44, category: 'psychology',
    title: '틴슬레이와 브래들리가 제시한 검사 결과 검토의 2단계를 쓰고 설명하시오.',
    frequency: '22-3',
    keyword: '검사 결과 검토 2단계',
    answer: `<ol>
<li><strong>이해 단계</strong> : 규준을 참조하여 검사점수의 의미를 충분히 이해하는 단계</li>
<li><strong>통합 단계</strong> : 이해를 통해 얻은 정보와 상담자가 수집한 다른 정보들을 통합하는 단계</li>
</ol>`,
  },
  {
    num: 46, category: 'psychology',
    title: '수퍼의 직업발달(진로발달) 5단계를 쓰고 설명하시오.',
    frequency: '25-1, 23-2, 20-4',
    keyword: '수퍼(Super) 발달단계',
    answer: `<ol>
<li><strong>성장기</strong> : 가정과 학교에서 자아개념을 발달시키는 시기</li>
<li><strong>탐색기</strong> : 여러 가지 활동을 통해 자아를 검증하고 자신에게 맞는 직업을 탐색하는 시기</li>
<li><strong>확립기</strong> : 자신에게 적합한 직업을 선택하여 기반을 다지는 시기</li>
<li><strong>유지기</strong> : 자신의 직업에 안착하여 안정된 생활을 유지하는 시기</li>
<li><strong>쇠퇴기</strong> : 은퇴를 준비하며 새로운 직업이나 활동을 모색하는 시기</li>
</ol>`,
  },
  {
    num: 47, category: 'psychology',
    title: '수퍼의 경력개발 단계 중 성장기의 3단계를 쓰고 설명하시오.',
    frequency: '19-2',
    keyword: '수퍼(Super) 성장기 하위단계',
    answer: `<ol>
<li><strong>환상기</strong> : 아동적 욕구가 지배적이며, 직업에 대해 환상을 갖고 있는 단계</li>
<li><strong>흥미기</strong> : 흥미에 따라 직업을 선택하는 단계</li>
<li><strong>능력기</strong> : 직업을 선택할 때 조건을 고려하며, 능력을 중요하게 생각하는 단계</li>
</ol>`,
  },
  {
    num: 48, category: 'psychology',
    title: '수퍼의 발달적 직업상담에서 평가 3가지를 설명하시오.',
    frequency: '25-2, 22-3, 20-4',
    keyword: '수퍼(Super) 평가 유형',
    answer: `<ol>
<li><strong>문제의 평가</strong> : 내담자가 겪고 있는 어려움이나 상담에 대한 기대를 평가</li>
<li><strong>개인의 평가</strong> : 심리검사나 사례 연구 등을 통해 내담자 개인의 상태에 대해 분석하고 평가</li>
<li><strong>예언 평가</strong> : 내담자가 직업적으로 성공하고 만족할 수 있는지 예언</li>
</ol>`,
  },
  {
    num: 50, category: 'psychology',
    title: '집단 내 규준 3가지를 쓰고 설명하시오.',
    frequency: '25-2, 24-2, 23-2, 23-1, 21-2, 20-1, 19-1, 18-3',
    keyword: '집단 내 규준',
    answer: `<ol>
<li><strong>백분위 점수</strong> : 개인이 집단에서 차지하는 상대적 위치. 100개의 동일한 구간으로 나누어 측정</li>
<li><strong>표준 점수</strong> : 평균으로부터 떨어진 거리를 표준편차 단위로 측정</li>
<li><strong>표준 등급</strong> : 9개의 구간으로 나누어 어디에 속하는지 측정(스테나인)</li>
</ol>`,
  },
  {
    num: 51, category: 'psychology',
    title: '규준 참조 검사와 준거 참조 검사를 각각 예를 들어 설명하시오.',
    frequency: '21-3, 21-1, 19-2',
    keyword: '규준참조검사 / 준거참조검사',
    answer: `<ol>
<li><strong>규준참조검사</strong> : 개인의 점수를 다른 사람의 점수와 비교하여 평가하는 상대평가. 예) 각종 심리검사</li>
<li><strong>준거참조검사</strong> : 개인의 점수를 기준 점수와 비교하여 평가하는 절대평가. 예) 국가 자격시험</li>
</ol>`,
  },
  {
    num: 52, category: 'psychology',
    title: '직업심리검사의 신뢰도를 추정하는 방법 3가지를 쓰고 설명하시오.',
    frequency: '23-2, 21-3, 20-2, 18-1',
    keyword: '신뢰도 추정 방법',
    answer: `<ol>
<li><strong>검사-재검사 신뢰도</strong> : 동일한 사람에게 동일한 검사를 시간 간격을 두고 두 번 실시하여 상관관계로 추정</li>
<li><strong>동형 검사 신뢰도</strong> : 신뢰도가 검증된 검사와 유사한 검사를 함께 실시하여 두 검사 점수 간 상관관계로 추정</li>
<li><strong>반분 신뢰도</strong> : 한 개의 검사를 두 부분으로 나누어 각 부분 간의 결과를 비교하여 추정</li>
</ol>`,
  },
  {
    num: 53, category: 'psychology',
    title: '반분 신뢰도를 추정하기 위해 사용하는 방법 3가지를 쓰고 설명하시오.',
    frequency: '24-2, 19-3',
    keyword: '반분 신뢰도 추정 방법',
    answer: `<ol>
<li><strong>전후 반분법</strong> : 검사 문항을 전반부와 후반부로 나누는 방법</li>
<li><strong>기우 반분법</strong> : 검사 문항을 짝수와 홀수로 나누는 방법</li>
<li><strong>짝진 임의 배치법</strong> : 유사한 두 문항씩 짝을 지은 후, 각 짝에서 한 문항을 임의로 선택하여 양분하는 방법</li>
</ol>`,
  },
  {
    num: 54, category: 'psychology',
    title: '극대수행검사와 습관적 수행 검사를 설명하고 대표적 유형을 각각 쓰시오.',
    frequency: '20-4',
    keyword: '극대수행검사 / 습관적 수행검사',
    answer: `<ol>
<li><strong>극대수행검사</strong> : 난이도가 낮은 다수의 문제를 제한 시간 내에 풀도록 하는 검사. 예) 지능검사, 적성검사, 성취도검사</li>
<li><strong>습관적 수행검사</strong> : 일상생활에서 이루어지는 습관적 행동에 대해 최대한 정직하게 응답할 것을 요구하는 검사. 예) 성격검사, 흥미검사, 태도검사</li>
</ol>`,
  },
  {
    num: 55, category: 'psychology',
    title: '측정의 기본 단위인 척도의 4가지 유형을 쓰고 설명하시오.',
    frequency: '24-2, 20-2',
    keyword: '척도의 4가지 유형',
    answer: `<ol>
<li><strong>명명척도</strong> : 측정 대상 간 숫자의 차이만 있는 척도</li>
<li><strong>서열척도</strong> : 측정 대상 간에 숫자의 차이와 순위관계 정보가 있는 척도</li>
<li><strong>등간척도</strong> : 측정 대상 간 숫자의 차이와 순위 정보 그리고 간격이 포함된 척도</li>
<li><strong>비율척도</strong> : 측정 대상 간 숫자의 차이, 순위, 간격, 비율을 모두 포함하는 척도</li>
</ol>`,
  },
  {
    num: 56, category: 'psychology',
    title: '심리검사에서 신뢰도의 종류와 신뢰도에 영향을 주는 요인을 각각 3가지씩 쓰시오.',
    frequency: '23-1, 21-2, 21-1',
    keyword: '신뢰도 종류 / 영향요인',
    answer: `<h4>신뢰도의 종류</h4><ol><li>검사-재검사 신뢰도</li><li>동형 검사 신뢰도</li><li>반분 신뢰도</li></ol>
<h4>신뢰도에 영향을 주는 요인</h4><ol><li>개인차</li><li>문항 수</li><li>문항 반응 수</li><li>검사유형</li><li>신뢰도 추정방법</li></ol>`,
  },
  {
    num: 57, category: 'psychology',
    title: '심리검사 사용의 윤리적 문제와 관련하여 주의할 사항 6가지를 쓰시오.',
    frequency: '24-1, 22-2, 19-3',
    keyword: '심리검사 윤리적 주의사항',
    answer: `<ol>
<li>심리검사가 시대에 뒤떨어질 수 있음을 인정한다.</li>
<li>피검사자가 이해하기 쉬운 용어를 사용한다.</li>
<li>피검사자의 비밀을 보장한다.</li>
<li>검사의 결과는 목적에 맞게 제한적으로 사용한다.</li>
<li>타당도와 신뢰도가 높은 검사를 활용한다.</li>
<li>적절한 훈련을 받은 사람이 검사를 실시한다.</li>
</ol>`,
  },
  {
    num: 58, category: 'psychology',
    title: '검사-재검사 신뢰도에 영향을 미치는 요인 4가지를 쓰시오.',
    frequency: '25-2, 23-1, 20-3, 18-2',
    keyword: '검사-재검사 신뢰도 영향요인',
    answer: `<ol><li>검사와 재검사 사이의 시간 간격</li><li>검사가 시행되는 환경의 변화</li><li>응답자의 속성 변화</li><li>응답자가 검사를 치른 경험</li></ol>`,
  },
  {
    num: 59, category: 'psychology',
    title: '구성타당도의 유형에 속하는 타당도 2가지를 쓰고 설명하시오.',
    frequency: '25-3, 23-2, 20-4, 20-3, 19-3',
    keyword: '구성타당도 유형',
    answer: `<ol>
<li><strong>수렴 타당도</strong> : 검사 결과가 그 속성과 관계 있는 변인들과 얼마나 높은 상관관계를 갖는지를 나타내는 타당도</li>
<li><strong>변별 타당도</strong> : 검사 결과가 그 속성과 관계 없는 변인들과 얼마나 낮은 상관관계를 갖는지를 나타내는 타당도</li>
<li><strong>요인분석법</strong> : 검사 문항 간의 상관관계를 분석하여 상관성이 높은 문항끼리 묶어주는 방법</li>
</ol>`,
  },
  {
    num: 83, category: 'psychology',
    title: '예언 타당도와 동시(공인) 타당도를 예를 포함하여 설명하시오.',
    frequency: '23-1, 18-2',
    keyword: '예언타당도 / 동시타당도',
    answer: `<ol>
<li><strong>예언타당도</strong> : 검사 점수가 미래 행위를 얼마나 잘 예측하는가의 타당도. 예) 적성검사에서 점수가 높았던 사람이 입사 후 우수한 업무 실적을 냈다면 예언타당도가 높다.</li>
<li><strong>동시(공인)타당도</strong> : 이미 타당도가 검증된 검사와 유사한 검사를 실시하고 두 검사 점수를 비교하여 측정하는 타당도. 예) 토익 점수가 높은 사람이 새로 개발한 영어 시험 점수가 높다면 동시타당도가 높다.</li>
</ol>`,
  },
  {
    num: 84, category: 'psychology',
    title: '직업상담을 위한 심리검사 선정 시 고려사항 3가지를 쓰시오.',
    frequency: '23-1, 20-1',
    keyword: '심리검사 선정 고려사항',
    answer: `<ol>
<li>신뢰도와 타당도가 검증된 검사를 선정한다.</li>
<li>검사를 하는 목적에 부합하는 검사를 선정해야 한다.</li>
<li>검사의 간편성, 경제성 등을 고려해야 한다.</li>
<li>검사 선택 시 내담자도 포함하여야 한다.</li>
<li>내담자의 문제점을 파악한 후 검사를 선정해야 한다.</li>
</ol>`,
  },
  {
    num: 85, category: 'psychology',
    title: '심리검사 제작을 위한 예비문항 제작 시 고려사항 5가지를 쓰시오.',
    frequency: '21-2',
    keyword: '예비문항 제작 고려사항',
    answer: `<ol>
<li><strong>문항의 적절성</strong> : 성별, 종교, 인종, 문화 등 특정집단에 유리하도록 제작해서는 안 된다.</li>
<li><strong>문항의 난이도</strong> : 수검자의 수준에 따라 난이도를 적절하게 구성한다.</li>
<li><strong>문항의 구조화</strong> : 문항 내용은 구체적이고 명확해야 한다.</li>
<li><strong>문항의 동기유발</strong> : 문항은 수검자로 하여금 학습동기를 유발할 수 있어야 한다.</li>
<li><strong>문항의 참신성</strong> : 기존검사에 중복되지 않는 새로운 문항을 제시한다.</li>
<li><strong>문항의 중립성</strong> : 특정집단에 불쾌감을 주는 문항이 포함되지 않도록 주의한다.</li>
</ol>`,
  },
  {
    num: 98, category: 'psychology',
    title: '부정적인 심리검사 결과를 내담자에게 통보하는 방법 4가지를 쓰시오.',
    frequency: '25-2, 22-2, 20-1',
    keyword: '부정적 검사결과 통보 방법',
    answer: `<ol>
<li>내담자가 충격을 받지 않도록 주의하여 설명한다.</li>
<li>전문적 용어나 통계적 숫자보다는 일상적인 용어를 사용하여 설명한다.</li>
<li>적절한 해석과 함께 검사 결과를 설명한다.</li>
<li>검사결과가 유출되지 않도록 비밀보장에 유의한다.</li>
</ol>`,
  },
  {
    num: 99, category: 'psychology',
    title: '심리검사의 사용목적 3가지를 쓰고 설명하시오.',
    frequency: '22-2, 20-1',
    keyword: '심리검사 사용목적',
    answer: `<ol>
<li><strong>개인적 기능</strong> : 내담자의 자기이해를 증진시키고 성공 가능성이 높은 진로를 선택할 수 있도록 돕는다.</li>
<li><strong>예측적 기능</strong> : 내담자의 성격이나 적성 등을 파악하여 수행능력을 예측한다.</li>
<li><strong>진단적 기능</strong> : 내담자의 문제 원인을 파악하고 해결한다.</li>
<li><strong>조사적 기능</strong> : 특정 집단의 성향을 조사하여 집단의 특징을 규명한다.</li>
</ol>`,
  },
  {
    num: 101, category: 'psychology',
    title: '표집 절차의 오류를 해결하기 위한 방법 3가지를 쓰고 설명하시오.',
    frequency: '24-3, 22-2, 19-3',
    keyword: '정규분포 이탈 해결 방법',
    answer: `<ol>
<li><strong>완곡법</strong> : 검사결과가 정규분포와 비슷한 모양을 갖는 경우, 점수를 더하거나 빼서 정상분포 모양이 되도록 하는 방법</li>
<li><strong>절미법</strong> : 꼬리가 작은 경우 분포 곡선에서 한쪽으로 치우친 편포의 꼬리를 잘라내는 방법</li>
<li><strong>면적 환산법</strong> : 각 점수의 백분위를 찾아, 이에 해당하는 Z점수를 찾는 방법</li>
</ol>`,
  },

  /* ===================================================================
     직업정보론 (jobinfo)
     =================================================================== */
  {
    num: 17, category: 'jobinfo',
    title: '직무분석 방법 중 최초분석법의 종류를 쓰시오.',
    frequency: '24-2, 22-3, 21-1',
    keyword: '최초분석법 종류',
    answer: `<ol><li>면접법</li><li>관찰법</li><li>체험법</li><li>설문지법</li><li>중요사건법(결정적 사건법)</li><li>녹화법</li><li>작업일지법</li></ol>`,
  },
  {
    num: 18, category: 'jobinfo',
    title: '최초 분석법에 해당하는 방법을 쓰고 각각 설명하시오.',
    frequency: '19-1',
    keyword: '최초분석법 상세',
    answer: `<ol>
<li><strong>체험법</strong> : 직무 분석자가 직접 직무를 체험하여 자료를 얻는 방법</li>
<li><strong>면접법</strong> : 직무 분석자가 직무 담당자와 면접을 진행하여 자료를 얻는 방법</li>
<li><strong>설문지법</strong> : 직무 담당자에게 설문지를 작성하도록 하여 자료를 얻는 방법</li>
<li><strong>관찰법</strong> : 직무 분석자가 현장에서 직무 담당자를 관찰하여 자료를 얻는 방법</li>
<li><strong>결정적 사건법</strong> : 직무에서 크게 성공하거나 실패한 경우와 관련된 자료를 수집하여 분석하는 방법</li>
<li><strong>녹화법</strong> : 작업 장면을 녹화하여 직무에 관한 자료를 얻는 방법</li>
<li><strong>작업일지법</strong> : 직무 담당자가 작성한 작업 일지를 바탕으로 자료를 얻는 방법</li>
</ol>`,
  },
  {
    num: 19, category: 'jobinfo',
    title: '한국 직업사전의 부가직업정보 중 작업강도 5단계를 쓰시오.',
    frequency: '20-1',
    keyword: '작업강도 5단계',
    answer: `<ol><li>아주 가벼운 작업</li><li>가벼운 작업</li><li>보통작업</li><li>힘든작업</li><li>아주 힘든 작업</li></ol>`,
  },
  {
    num: 20, category: 'jobinfo',
    title: '직무기능의 사물 세부사항을 쓰시오.',
    frequency: '20-3',
    keyword: '직무기능 - 사물',
    answer: `<ol><li>설치</li><li>정밀작업</li><li>제어조작</li><li>조작운전</li><li>수동조작</li><li>유지</li><li>투입-인출</li><li>단순작업</li></ol>`,
  },
  {
    num: 21, category: 'jobinfo',
    title: '부가직업정보 중 정규 교육, 숙련기간, 직무기능의 의미를 기술하시오.',
    frequency: '22-3',
    keyword: '정규교육 / 숙련기간 / 직무기능',
    answer: `<ol>
<li><strong>정규교육</strong> : 해당 직무를 수행하기 위해 필요한 정규교육 수준</li>
<li><strong>숙련기간</strong> : 해당 직무를 평균적인 수준으로 수행하기 위해 필요한 교육·훈련 등의 기간</li>
<li><strong>직무기능</strong> : 해당 직무를 수행하는 과정에서 자료, 사람, 사물과 맺는 관계의 특성</li>
</ol>`,
  },
  {
    num: 22, category: 'jobinfo',
    title: '직무기능 중 사람과 관련된 세부사항을 쓰시오.',
    frequency: '22-2',
    keyword: '직무기능 - 사람',
    answer: `<ol><li>자문</li><li>협의</li><li>교육</li><li>감독</li><li>오락제공</li><li>설득</li><li>말하기-신호</li><li>서비스 제공</li></ol>`,
  },
  {
    num: 23, category: 'jobinfo',
    title: '직무기능 중 자료와 관련된 세부사항을 쓰시오.',
    frequency: '22-2, 21-3',
    keyword: '직무기능 - 자료',
    answer: `<ol><li>종합</li><li>조정</li><li>분석</li><li>수집</li><li>계산</li><li>기록</li><li>비교</li></ol>`,
  },
  {
    num: 24, category: 'jobinfo',
    title: '부가직업 정보 중 육체활동의 구분을 쓰시오.',
    frequency: '23-2, 20-4',
    keyword: '육체활동 구분',
    answer: `<ol><li>균형감각</li><li>시각</li><li>청각</li><li>언어력</li><li>손사용</li><li>웅크림</li></ol>`,
  },
  {
    num: 25, category: 'jobinfo',
    title: '한국직업사전에 수록된 부가 직업정보 5가지를 쓰시오.',
    frequency: '25-2, 24-1, 21-1, 18-1',
    keyword: '부가직업정보 종류',
    answer: `<ol><li>작업 강도</li><li>작업 환경</li><li>작업 장소</li><li>육체활동</li><li>정규 교육</li></ol>`,
  },
  {
    num: 26, category: 'jobinfo',
    title: '직무기능 중 자료에 대한 기능별 설명',
    frequency: '23-1',
    keyword: '직무기능 자료 상세',
    answer: `<table>
<tr><th>기능</th><th>설명</th></tr>
<tr><td><strong>조정</strong></td><td>데이터의 분석에 기초하여 시간, 장소, 작업순서, 활동 등을 결정. 결정을 실행하거나 상황을 보고한다.</td></tr>
<tr><td><strong>분석</strong></td><td>조사하고 평가한다. 평가와 관련된 대안적 행위의 제시가 빈번하게 포함된다.</td></tr>
<tr><td><strong>수집</strong></td><td>자료, 사람, 사물에 관한 정보를 수집, 대조, 분류한다.</td></tr>
<tr><td><strong>계산</strong></td><td>사칙연산을 실시하고 관련하여 규정된 활동을 수행하거나 보고한다. 수를 세는 것은 포함되지 않는다.</td></tr>
<tr><td><strong>기록</strong></td><td>데이터를 옮겨 적거나 입력하거나 표시한다.</td></tr>
<tr><td><strong>비교</strong></td><td>자료, 사람, 사물의 기능적, 구조적, 조합적 특성을 판단한다.</td></tr>
</table>`,
  },
  {
    num: 27, category: 'jobinfo',
    title: '한국직업사전의 작업강도 상세 기준 (빈칸채우기)',
    frequency: '22-2',
    keyword: '작업강도 상세 기준',
    answer: `<ol>
<li><strong>아주 가벼운 작업</strong> : 최고 <strong>4</strong>kg</li>
<li><strong>보통 작업</strong> : 최고 <strong>20</strong>kg, 빈번히 <strong>10</strong>kg</li>
<li><strong>힘든 작업</strong> : 최고 <strong>40</strong>kg, 빈번히 <strong>20</strong>kg</li>
</ol>`,
  },
  {
    num: 28, category: 'jobinfo',
    title: '한국 표준산업분류의 세 가지 분류기준을 쓰시오.',
    frequency: '25-1, 19-1',
    keyword: 'KSIC 분류기준',
    answer: `<ol><li>산출물의 특성</li><li>투입물의 특성</li><li>생산활동의 일반적인 결합형태(생산공정)</li></ol>`,
  },
  {
    num: 29, category: 'jobinfo',
    title: '한국 표준직업분류에서 직업으로 보지 않는 활동을 쓰시오.',
    frequency: '25-2, 24-2, 22-2, 20-1, 19-3',
    keyword: '직업으로 보지 않는 활동',
    answer: `<ol><li>이자, 임대료 등의 수입</li><li>연금법, 고용보험법 등에 의한 수입</li><li>경마, 경륜, 복권 등에 의한 수입</li><li>예금이나 적금의 인출</li><li>가사활동</li><li>사회 수용 시설 내 경제활동</li><li>수형자의 강제노동</li></ol>`,
  },
  {
    num: 30, category: 'jobinfo',
    title: '한국표준직업분류의 포괄적 업무와 다수 직업 종사자의 분류 원칙을 쓰시오.',
    frequency: '22-3',
    keyword: 'KSCO 분류 원칙 종합',
    answer: `<h4>포괄적인 업무에 대한 직업분류 원칙</h4><ol><li>주된 직무 우선원칙</li><li>최상급 직능 수준 우선 원칙</li><li>생산업무 우선 원칙</li></ol>
<h4>다수 직업 종사자의 분류 원칙</h4><ol><li>취업시간 우선의 원칙</li><li>수입우선의 원칙</li><li>조사 시 최근의 직업 원칙</li></ol>`,
  },
  {
    num: 31, category: 'jobinfo',
    title: '다수 직업 종사자의 분류 원칙을 순서대로 쓰고 설명하시오.',
    frequency: '24-3, 22-1, 21-3, 19-2, 18-2',
    keyword: 'KSCO 다수직업 분류 원칙',
    answer: `<ol>
<li><strong>취업시간 우선의 원칙</strong> : 투자하는 취업 시간이 가장 긴 직업으로 분류</li>
<li><strong>수입우선의 원칙</strong> : 시간으로 분류하기 어려운 경우, 수입이 높은 직업으로 분류</li>
<li><strong>조사 시 최근의 직업 원칙</strong> : 시간과 수입으로 결정할 수 없는 경우 가장 최근 직업으로 분류</li>
</ol>`,
  },
  {
    num: 32, category: 'jobinfo',
    title: '포괄적 업무 분류 원칙 3가지를 설명하시오.',
    frequency: '23-1, 20-4, 20-3, 20-2',
    keyword: 'KSCO 포괄적 업무 분류 원칙',
    answer: `<ol>
<li><strong>주된 직무 우선 원칙</strong> : 여러 직무를 수행하는 경우 가장 주된 직업으로 분류</li>
<li><strong>최상급 직능 수준 우선 원칙</strong> : 가장 높은 직무능력을 필요로 하는 일로 분류</li>
<li><strong>생산업무 우선 원칙</strong> : 생산과 공급이 함께 이루어지는 경우 생산으로 분류</li>
</ol>`,
  },
  {
    num: 33, category: 'jobinfo',
    title: '한국표준산업분류에서 생산단위 활동형태 3가지를 설명하시오.',
    frequency: '25-2, 23-2, 22-3, 21-2',
    keyword: 'KSIC 생산단위 활동형태',
    answer: `<ol>
<li><strong>주된 산업활동</strong> : 생산된 재화 또는 제공된 서비스 중에서 부가가치가 가장 큰 활동</li>
<li><strong>부차적 산업활동</strong> : 주된 산업활동 이외의 재화 생산 및 서비스 제공 활동</li>
<li><strong>보조활동</strong> : 회계, 창고, 운송 등과 같이 주된 산업활동과 부차적 산업활동을 지원하는 활동</li>
</ol>`,
  },
  {
    num: 34, category: 'jobinfo',
    title: '한국 표준산업분류의 산업, 산업활동, 산업활동의 범위, 산업분류의 정의를 쓰시오.',
    frequency: '24-1, 22-2, 21-1, 20-2, 20-1, 18-3',
    keyword: 'KSIC 기본 정의',
    answer: `<ol>
<li><strong>산업</strong> : 유사한 산업활동에 종사하는 생산단위의 집합</li>
<li><strong>산업활동</strong> : 각 생산단위가 노동, 자본, 자원 등을 투입하여 재화 또는 서비스를 생산·제공하는 일련의 활동과정</li>
<li><strong>산업활동의 범위</strong> : 영리, 비영리 활동은 포함하지만 가사활동은 포함되지 않는다.</li>
<li><strong>산업분류</strong> : 생산단위가 수행하는 생산활동을 그 유사성에 따라 체계적으로 분류한 것</li>
</ol>`,
  },
  {
    num: 35, category: 'jobinfo',
    title: '한국표준직업분류에서 직무 유사성의 판단기준 4가지를 쓰시오.',
    frequency: '21-2',
    keyword: 'KSCO 직무 유사성 판단기준',
    answer: `<ol><li>지식</li><li>경험</li><li>기능</li><li>직무수행자가 입직하기 위해 필요한 요건</li></ol>`,
  },
  {
    num: 36, category: 'jobinfo',
    title: '한국 표준산업분류에서 산업 결정방법과 산업분류의 적용원칙을 쓰시오.',
    frequency: '20-4',
    keyword: 'KSIC 산업 결정방법/적용원칙',
    answer: `<h4>산업 결정방법</h4>
<ol>
<li>생산단위가 수행하는 주된 산업으로 결정한다.</li>
<li>계절적으로 산업이 달라지는 경우, 조사기간 중 산출액이 가장 많은 산업으로 결정한다.</li>
<li>휴업·청산 중인 경우에는 영업 중 또는 청산을 시작하기 전 산업으로 결정, 설립 중인 경우에는 개시하는 산업으로 결정한다.</li>
</ol>
<h4>산업분류 적용원칙</h4>
<ol>
<li>산출물, 투입물, 생산공정을 모두 고려하여 분류한다.</li>
<li>대분류를 결정한 후 중, 소, 세, 세세 단위로 분류한다.</li>
<li>산업활동이 결합되어 있는 경우에는 생산단위의 주된 활동으로 분류한다.</li>
</ol>`,
  },
  {
    num: 37, category: 'jobinfo',
    title: '한국표준직업분류와 직능 수준의 관계 (빈칸 채우기)',
    frequency: '25-3, 23-2, 21-1',
    keyword: 'KSCO 대분류와 직능수준',
    answer: `<table>
<tr><th>대분류 항목</th><th>직능수준</th></tr>
<tr><td>관리자</td><td>제<strong>4</strong>직능수준 혹은 제<strong>3</strong>직능수준 필요</td></tr>
<tr><td>판매종사자</td><td>제<strong>2</strong>직능수준 필요</td></tr>
<tr><td>장치·기계 조작 및 조립 종사자</td><td>제<strong>2</strong>직능수준 필요</td></tr>
<tr><td>군인</td><td>제<strong>2</strong>직능수준 이상 필요</td></tr>
<tr><td>단순 노무직</td><td>제<strong>1</strong>직능수준</td></tr>
</table>`,
  },
  {
    num: 45, category: 'jobinfo',
    title: '직무평가 방법을 쓰고 설명하시오.',
    frequency: '25-1, 23-2, 21-3',
    keyword: '직무평가방법',
    answer: `<ol>
<li><strong>서열법</strong> : 직무의 상대적 중요도에 따라 순위를 정하는 방법</li>
<li><strong>분류법</strong> : 사전에 작성한 등급표에 따라 직무에 등급을 부여하는 방법</li>
<li><strong>점수법</strong> : 직무의 구성 요소별 중요도에 따라 점수를 부여한 후 계산하여 가치를 평가하는 방법</li>
<li><strong>요소비교법</strong> : 핵심이 되는 직무를 기준으로 비교함으로써 상대적 가치를 결정하는 방법</li>
</ol>`,
  },
  {
    num: 82, category: 'jobinfo',
    title: '직무분석 방법 중 면접법의 장점과 단점을 각각 2가지씩 쓰시오.',
    frequency: '23-1',
    keyword: '면접법 장단점',
    answer: `<h4>장점</h4><ol>
<li>수행자의 정신적인 활동까지 파악할 수 있다.</li>
<li>질문지법에 비해 응답률이 높다.</li>
<li>추가질문, 설명 등을 통해 답변의 오류를 줄일 수 있다.</li>
</ol>
<h4>단점</h4><ol>
<li>피면접자의 주관적인 의견이 반영되어 분석의 정확도에 영향을 줄 수 있다.</li>
<li>정보의 수집에 많은 시간과 노력이 필요하다.</li>
<li>익명성이 보장되지 않아 민감한 질문은 하기 어렵다.</li>
</ol>`,
  },
  {
    num: 86, category: 'jobinfo',
    title: '한국 표준산업분류에서 통계 단위의 산업을 결정하는 방법을 쓰시오.',
    frequency: '24-3, 23-1, 21-3, 20-3',
    keyword: 'KSIC 산업 결정 방법',
    answer: `<ol>
<li>생산 단위가 수행하는 주된 산업활동의 종류에 따라 결정한다.</li>
<li>계절에 따라 산업이 달라지는 경우에는 조사 기간 중 산출액이 많았던 산업으로 결정한다.</li>
<li>휴업·청산 중인 경우에는 영업 중 또는 청산을 시작하기 전 산업으로, 설립 중인 경우에는 개시하는 산업으로 결정한다.</li>
</ol>`,
  },
  {
    num: 92, category: 'jobinfo',
    title: '직무분석 방법 중 결정적 사건법의 단점을 3가지 쓰시오.',
    frequency: '22-2, 19-3',
    keyword: '결정적 사건법 단점',
    answer: `<ol>
<li>응답자의 주관적 의견 개입으로 인해 사건이 왜곡될 수 있다.</li>
<li>직무를 전체적으로 반영하지 못하고 일부만 강조될 수 있다.</li>
<li>정확한 조사를 위해 특별히 훈련받은 사람이 필요하다.</li>
<li>조사를 위하여 많은 시간과 노력을 필요로 한다.</li>
<li>일상적 업무 정보가 배제될 수 있다.</li>
</ol>`,
  },
  {
    num: 93, category: 'jobinfo',
    title: '직무분석 자료 활용의 용도 4가지를 쓰시오.',
    frequency: '24-3, 24-1, 20-3, 18-1',
    keyword: '직무분석 자료 활용',
    answer: `<ol>
<li>구인과 채용에 활용한다.</li><li>직무평가의 기초 자료로 활용한다.</li><li>승진, 배치 등에 활용한다.</li><li>교육과 훈련에 활용한다.</li>
<li>직무수행평가 및 인사고과에 활용한다.</li><li>작업환경 개선, 산업 안전 관리에 활용한다.</li><li>직무 분류에 활용한다.</li>
</ol>`,
  },
  {
    num: 94, category: 'jobinfo',
    title: '겔라트가 제시한 직업 의사결정의 상담과정 8단계를 순서대로 쓰시오.',
    frequency: '22-2, 19-3, 19-1',
    keyword: '겔라트(Gelatt) 의사결정 8단계',
    answer: `<ol>
<li>목표의식</li><li>정보수집</li><li>대안의 열거</li><li>대안의 결과 예측</li><li>대안의 실현 가능성 예측</li><li>가치평가</li><li>의사결정</li><li>평가 &amp; 재투입</li>
</ol>`,
  },

  /* ===================================================================
     노동시장론 (labor_market)
     =================================================================== */
  {
    num: 38, category: 'labor_market',
    title: '내부 노동시장의 형성 요인과 장점을 각각 3가지씩 쓰시오.',
    frequency: '23-2, 22-3, 18-1',
    keyword: '내부노동시장 형성요인/장점',
    answer: `<h4>형성 요인</h4><ol><li>숙련의 특수성</li><li>현장훈련</li><li>기업 내의 관습</li></ol>
<h4>장점</h4><ol>
<li>우수한 인적자원을 확보하고 유지할 수 있다.</li>
<li>승진, 배치전환 등을 통하여 동기를 유발할 수 있다.</li>
<li>인적자원 확보 및 동기유발을 통해 생산성이 향상된다.</li>
</ol>`,
  },
  {
    num: 39, category: 'labor_market',
    title: '내부 노동시장의 형성 요인을 3가지 쓰고 각각에 대해 설명하시오.',
    frequency: '23-2',
    keyword: '내부노동시장 형성요인 상세',
    answer: `<ol>
<li><strong>숙련의 특수성</strong> : 기업에서 필요로 하는 숙련도는 기록이나 문서로는 전수가 불가능하여, 축적됨에 따라 내부노동시장을 형성하게 된다.</li>
<li><strong>현장훈련</strong> : 문서화되지 않은 노하우가 실제 현장에서만 전수되어 내부노동시장을 형성한다.</li>
<li><strong>관습</strong> : 기업 내의 고유한 관습은 다른 기업과 차별화된 근로조건, 근로환경을 만들어 내부노동시장을 형성하게 한다.</li>
</ol>`,
  },
  {
    num: 41, category: 'labor_market',
    title: '산업별로 임금격차가 발생하는 원인 3가지를 쓰고 설명하시오.',
    frequency: '19-3',
    keyword: '산업별 임금격차 원인 상세',
    answer: `<ol>
<li><strong>노동조합의 존재 여부</strong> : 강력한 노동조합이 존재하는 산업은 그렇지 않은 산업에 비해 급여가 높기 때문에 임금격차가 발생한다.</li>
<li><strong>보상적 임금</strong> : 근무 환경이나 조건이 열악한 산업의 경우 이에 대하여 금전적으로 보상이 이루어지게 되므로 임금격차가 발생한다.</li>
<li><strong>노동생산성의 차이</strong> : 노동생산성이 높은 산업은 그렇지 못한 산업에 비해 임금이 높기 때문에 임금격차가 발생한다.</li>
</ol>`,
  },
  {
    num: 40, category: 'labor_market',
    title: '산업별로 임금격차가 발생하는 원인을 쓰시오.',
    frequency: '25-1, 22-3, 19-3',
    keyword: '산업별 임금격차 원인',
    answer: `<ol>
<li><strong>노동조합의 존재 여부</strong> : 강력한 노동조합이 존재하는 산업은 급여가 높음</li>
<li><strong>보상적 임금</strong> : 근무 환경이나 조건이 열악한 산업의 경우 금전적 보상</li>
<li><strong>노동생산성의 차이</strong> : 노동생산성이 높은 산업은 임금이 높음</li>
<li>지리적 요인</li>
<li>산업의 종류</li>
</ol>`,
  },
  {
    num: 60, category: 'labor_market',
    title: '야호다의 박탈이론에서 고용으로 인한 잠재효과 5가지를 쓰시오.',
    frequency: '23-2',
    keyword: '야호다(Jahoda) 박탈이론',
    answer: `<ol><li>시간의 조직화</li><li>사회적 접촉</li><li>공동의 목표 참여</li><li>의미 있는 활동</li><li>사회적 정체감과 지위 확보</li></ol>`,
  },
  {
    num: 67, category: 'labor_market',
    title: '기혼여성의 경제활동 참가율을 낮게 하는 요인 6가지를 쓰시오.',
    frequency: '23-2, 21-1, 18-3',
    keyword: '기혼여성 경제활동참가율 저해요인',
    answer: `<ol><li>배우자 소득의 증가</li><li>많은 자녀의 수</li><li>높은 사회 전체 실업률</li><li>낮은 자녀의 연령</li><li>열악한 법적, 제도적 환경</li><li>낮은 여성의 교육수준</li></ol>`,
  },
  {
    num: 71, category: 'labor_market',
    title: '노동수요의 탄력성 공식과 영향 요인을 쓰시오.',
    frequency: '25-2, 23-1, 21-3, 19-3, 19-2',
    keyword: '노동수요 탄력성',
    answer: `<h4>공식</h4>
<p>노동수요 탄력성 = | 노동수요 변화율 / 임금 변화율 |</p>
<h4>영향을 주는 요인</h4>
<ol><li>총생산비에서 노동 비용이 차지하는 비중</li><li>다른 생산요소의 노동에 대한 대체 가능성</li><li>노동 외 생산요소의 공급 탄력성</li><li>생산품에 대한 수요의 탄력성</li></ol>`,
  },
  {
    num: 72, category: 'labor_market',
    title: '임금의 하방경직성의 의미와 원인 5가지를 쓰시오.',
    frequency: '24-3, 23-1, 18-2',
    keyword: '임금 하방경직성',
    answer: `<h4>의미</h4>
<p>한번 인상된 임금이 경제 여건의 변화에도 불구하고 하락하지 않고 현재 수준을 유지하는 현상</p>
<h4>원인</h4>
<ol><li>최저임금제</li><li>강력한 노동조합의 존재</li><li>장기 고용계약</li><li>연공급제 임금 형태</li><li>노동자의 화폐환상</li></ol>`,
  },
  {
    num: 100, category: 'labor_market',
    title: '노동수요의 임금 탄력성 계산 문제',
    frequency: '22-2',
    keyword: '노동수요 탄력성 계산',
    answer: `<p><strong>조건:</strong> Ld = 5,000 - 2W, W = 2,000원</p>
<h4>① 임금 탄력성</h4>
<p>탄력성 = (△Ld/△W) × (W/Ld)</p>
<p>△Ld/△W = -2 (기울기)</p>
<p>W = 2,000일 때, Ld = 5,000 - (2×2,000) = 1,000</p>
<p>|-2 × (2,000/1,000)| = <strong>4</strong></p>
<h4>② 근로자의 수입</h4>
<p>수입 = Ld × W = 1,000 × 2,000 = <strong>2,000,000원</strong></p>`,
  },

  /* ===================================================================
     추가 문항 105~177 (2019~2023 빈출 기출)
     =================================================================== */

  /* ---------- 직업상담학 (counseling) 추가 ---------- */
  {
    num: 105, category: 'counseling',
    title: '직업상담사가 갖추어야 할 자질(자격요건) 5가지를 쓰시오.',
    frequency: '24-3, 22-1, 20-2',
    keyword: '직업상담사 자질/자격요건',
    answer: `<ol>
<li><strong>인간에 대한 깊은 관심과 이해</strong> : 내담자의 감정, 경험, 가치관에 공감하고 이해하려는 태도가 필요하다.</li>
<li><strong>직업 및 노동시장에 대한 전문 지식</strong> : 다양한 직업 정보, 고용 동향, 자격제도 등에 대한 최신 지식을 갖추어야 한다.</li>
<li><strong>상담 기법에 대한 숙련</strong> : 경청, 공감, 반영, 질문 등 기본 상담기법을 능숙하게 활용할 수 있어야 한다.</li>
<li><strong>심리검사 실시 및 해석 능력</strong> : 적성검사, 흥미검사 등 다양한 심리검사를 실시하고 결과를 해석할 수 있어야 한다.</li>
<li><strong>윤리의식과 비밀보장</strong> : 내담자의 개인정보를 철저히 보호하고 윤리적 기준을 준수해야 한다.</li>
<li><strong>자기 성찰 능력</strong> : 자신의 편견이나 가치관이 상담에 영향을 미치지 않도록 지속적으로 자기 점검을 해야 한다.</li>
</ol>`,
  },
  {
    num: 112, category: 'counseling',
    title: '직업상담의 목적(목표) 4가지를 쓰시오.',
    frequency: '21-2, 19-1',
    keyword: '직업상담 목적/목표',
    answer: `<ol>
<li><strong>자기이해 촉진</strong> : 내담자가 자신의 흥미, 적성, 가치관, 성격 등을 정확하게 이해할 수 있도록 돕는다.</li>
<li><strong>직업세계 이해</strong> : 다양한 직업의 특성, 전망, 요구 조건 등 직업세계에 대한 정보를 제공하여 올바른 이해를 돕는다.</li>
<li><strong>합리적 의사결정 능력 배양</strong> : 내담자가 자신에게 적합한 진로를 스스로 선택하고 결정할 수 있는 능력을 기른다.</li>
<li><strong>진로계획 수립 및 실행 지원</strong> : 구체적인 진로계획을 수립하고 이를 실행할 수 있도록 실질적인 도움을 제공한다.</li>
</ol>`,
  },
  {
    num: 113, category: 'counseling',
    title: '역전이(counter-transference)의 개념과 유형 3가지를 쓰고 설명하시오.',
    frequency: '22-1, 20-3',
    keyword: '역전이 개념/유형',
    answer: `<p><strong>개념:</strong> 역전이란 상담자가 내담자에 대해 무의식적으로 갖는 감정적 반응으로, 상담자의 과거 경험이나 미해결 문제가 내담자에게 투사되는 현상이다.</p>
<ol>
<li><strong>긍정적 역전이</strong> : 상담자가 내담자에게 지나치게 호감이나 동정심을 느끼는 것으로, 객관적 판단을 방해할 수 있다.</li>
<li><strong>부정적 역전이</strong> : 상담자가 내담자에게 불쾌감, 거부감, 적대감 등 부정적 감정을 느끼는 것으로, 상담 관계를 악화시킬 수 있다.</li>
<li><strong>동일시 역전이</strong> : 상담자가 내담자와 자신을 동일시하여 객관적 거리를 유지하지 못하는 것으로, 상담자 자신의 문제를 내담자에게 투영하는 현상이다.</li>
</ol>`,
  },
  {
    num: 114, category: 'counseling',
    title: '프로이트의 방어기제(defense mechanism) 6가지를 쓰고 설명하시오.',
    frequency: '23-1, 21-2',
    keyword: '방어기제',
    answer: `<ol>
<li><strong>억압</strong> : 불안을 일으키는 생각이나 충동을 무의식 속으로 밀어내어 의식하지 못하게 하는 기제</li>
<li><strong>합리화</strong> : 자신의 행동에 대해 그럴듯한 이유를 붙여 정당화하는 기제</li>
<li><strong>투사</strong> : 자신의 받아들이기 어려운 감정이나 충동을 타인에게 전가하는 기제</li>
<li><strong>반동형성</strong> : 실제 감정과 반대되는 행동이나 태도를 표현하는 기제</li>
<li><strong>퇴행</strong> : 불안 상황에서 발달의 이전 단계로 돌아가는 행동을 보이는 기제</li>
<li><strong>승화</strong> : 사회적으로 용납되지 않는 충동을 사회적으로 수용 가능한 형태로 전환하는 기제</li>
</ol>`,
  },
  {
    num: 115, category: 'counseling',
    title: '메이(May)가 제시한 불안의 3가지 유형을 쓰고 설명하시오.',
    frequency: '20-4, 19-2',
    keyword: '메이(May) 불안 유형',
    answer: `<ol>
<li><strong>정상적 불안</strong> : 위협적 상황에 대한 적절한 반응으로, 인간의 성장과 발전에 기여하는 건강한 불안이다. 상황에 비례하고 억압을 수반하지 않는다.</li>
<li><strong>신경증적 불안</strong> : 위협의 정도에 비해 과도한 불안 반응을 보이는 것으로, 억압을 수반하고 비합리적이며 일상생활을 방해한다.</li>
<li><strong>실존적 불안</strong> : 죽음, 자유, 고독, 무의미 등 인간 존재의 근본 조건에서 비롯되는 불안으로, 삶의 유한성을 인식할 때 경험한다.</li>
</ol>`,
  },
  {
    num: 118, category: 'counseling',
    title: '번(Berne)의 교류분석(TA)에서 자아상태 3가지를 쓰고 설명하시오.',
    frequency: '23-2, 22-1, 20-3, 18-2',
    keyword: '교류분석(TA) 자아상태',
    answer: `<ol>
<li><strong>부모자아(P, Parent)</strong> : 어린 시절 부모나 양육자로부터 배운 가치관, 태도, 행동양식을 반영하는 자아상태이다. 비판적 부모(CP)와 양육적 부모(NP)로 구분된다.</li>
<li><strong>성인자아(A, Adult)</strong> : 객관적 사실에 근거하여 합리적으로 판단하고 행동하는 자아상태이다. 현실을 있는 그대로 검토하고 분석하는 기능을 한다.</li>
<li><strong>아동자아(C, Child)</strong> : 어린 시절의 감정, 욕구, 충동을 그대로 간직하고 있는 자아상태이다. 자유로운 아동(FC)과 순응하는 아동(AC)으로 구분된다.</li>
</ol>`,
  },
  {
    num: 119, category: 'counseling',
    title: '교류분석(TA)에서 교류유형(의사소통 유형) 3가지를 쓰고 설명하시오.',
    frequency: '22-2, 20-1',
    keyword: '교류분석 교류유형',
    answer: `<ol>
<li><strong>상보교류(보완적 교류)</strong> : 의사소통의 자극과 반응이 서로 평행을 이루는 교류로, 예상된 반응이 돌아오므로 원활한 의사소통이 이루어진다. 예) A→A, P→C에 대한 C→P 반응</li>
<li><strong>교차교류</strong> : 의사소통의 자극에 대해 예상과 다른 자아상태에서 반응이 돌아오는 교류로, 의사소통이 단절되거나 갈등이 발생한다. 예) A→A 자극에 대해 P→C 반응</li>
<li><strong>이면교류(이중교류)</strong> : 표면적인 메시지(사회적 수준)와 이면적인 메시지(심리적 수준)가 동시에 전달되는 교류로, 숨겨진 의도가 존재한다.</li>
</ol>`,
  },
  {
    num: 125, category: 'counseling',
    title: '생애진로사정(Life Career Assessment)의 구성요소 4가지를 쓰고 설명하시오.',
    frequency: '25-2, 24-3, 24-1, 22-1, 20-4, 18-1',
    keyword: '생애진로사정 구성요소',
    answer: `<ol>
<li><strong>진로사정</strong> : 내담자의 직업적 경험, 직무 만족도, 직업적 성취 등 진로와 관련된 전반적인 정보를 평가하는 것이다.</li>
<li><strong>전형적인 하루</strong> : 내담자의 하루 일과를 상세히 살펴봄으로써 생활방식, 시간 활용, 활동 패턴 등을 파악하는 것이다.</li>
<li><strong>강점과 장애물</strong> : 내담자의 강점(자원, 능력)과 진로 발달을 방해하는 장애물을 파악하여 진로계획에 반영하는 것이다.</li>
<li><strong>요약</strong> : 위 세 가지 사정 결과를 종합하여 내담자에게 피드백을 제공하고 행동계획을 수립하는 것이다.</li>
</ol>`,
  },
  {
    num: 127, category: 'counseling',
    title: '생애진로사정에서 사용하는 기법(도구) 3가지를 쓰고 설명하시오.',
    frequency: '20-2, 19-3',
    keyword: '생애진로사정 기법',
    answer: `<ol>
<li><strong>생애진로무지개</strong> : 수퍼(Super)의 이론에 기반하여 인생의 다양한 역할(자녀, 학생, 시민, 근로자 등)을 시각적으로 표현하는 기법이다.</li>
<li><strong>직업카드분류</strong> : 직업카드를 좋아하는 것, 싫어하는 것, 모르는 것으로 분류하여 흥미와 가치관을 탐색하는 기법이다.</li>
<li><strong>생애역할 분석</strong> : 내담자가 현재 수행하고 있는 다양한 역할의 비중과 만족도를 분석하여 역할 간 갈등이나 조화를 파악하는 기법이다.</li>
</ol>`,
  },
  {
    num: 128, category: 'counseling',
    title: '생애진로사정의 4단계 과정을 순서대로 쓰시오.',
    frequency: '19-1',
    keyword: '생애진로사정 4단계',
    answer: `<ol>
<li><strong>1단계: 진로사정 면접</strong> — 내담자의 진로 이력, 교육, 직업 경험 등을 체계적으로 수집하는 단계</li>
<li><strong>2단계: 전형적 하루 탐색</strong> — 내담자의 하루 일과를 상세히 탐색하여 생활 패턴, 시간 사용, 역할 수행 양상을 파악하는 단계</li>
<li><strong>3단계: 강점과 장애물 파악</strong> — 내담자의 자원과 역량(강점)을 확인하고, 진로 발달을 방해하는 장애요인을 규명하는 단계</li>
<li><strong>4단계: 종합 요약 및 계획</strong> — 수집된 정보를 종합하여 내담자에게 피드백하고, 구체적인 행동계획을 수립하는 단계</li>
</ol>`,
  },
  {
    num: 131, category: 'counseling',
    title: 'ABCDE 기법을 사례에 적용하여 설명하시오. (실직 사례)',
    frequency: '21-3',
    keyword: 'REBT ABCDE 사례 적용',
    answer: `<p><em>사례: 직장에서 해고된 40대 남성이 극도의 우울감과 무기력감을 호소</em></p>
<ol>
<li><strong>A (선행사건, Activating event)</strong> : 회사의 구조조정으로 갑자기 해고를 당했다.</li>
<li><strong>B (비합리적 신념, Belief)</strong> : "나는 무능한 사람이다", "다시는 직장을 구할 수 없을 것이다"라는 비합리적 신념을 갖게 되었다.</li>
<li><strong>C (결과, Consequence)</strong> : 심한 우울감, 자존감 저하, 사회적 위축, 구직활동 포기 등의 부적응적 행동이 나타났다.</li>
<li><strong>D (논박, Disputing)</strong> : "해고가 당신의 무능을 의미하는가?", "구조조정은 개인의 능력과 무관한 경우가 많지 않은가?" 등으로 비합리적 신념을 논박한다.</li>
<li><strong>E (효과, Effect)</strong> : 논박을 통해 합리적 신념("해고는 나의 가치와 무관하다", "새로운 기회를 찾을 수 있다")으로 전환되어 구직활동을 재개하고 자신감을 회복한다.</li>
</ol>`,
  },
  {
    num: 132, category: 'counseling',
    title: '진로시간전망 검사의 개념과 구성요소를 설명하시오.',
    frequency: '25-1, 22-1, 19-2',
    keyword: '진로시간전망 검사',
    answer: `<p><strong>개념:</strong> 진로시간전망(Career Time Perspective)은 개인이 과거, 현재, 미래에 걸쳐 자신의 진로를 어떻게 인식하고 계획하는지를 측정하는 검사이다. 시간에 대한 관점이 진로 의사결정에 미치는 영향을 평가한다.</p>
<h4>구성요소</h4>
<ol>
<li><strong>연속성</strong> : 과거, 현재, 미래의 진로 경험이 연속적으로 연결되어 있다고 인식하는 정도</li>
<li><strong>방향성</strong> : 미래의 진로 목표를 향해 나아가고 있다는 방향 감각의 정도</li>
<li><strong>통합성</strong> : 과거 경험을 현재와 미래에 통합하여 활용할 수 있다고 느끼는 정도</li>
<li><strong>분화성</strong> : 미래의 진로를 구체적이고 세밀하게 구분하여 계획할 수 있는 정도</li>
</ol>`,
  },
  {
    num: 133, category: 'counseling',
    title: '진로시간전망에서 과거, 현재, 미래 차원의 의미를 각각 설명하시오.',
    frequency: '19-3',
    keyword: '진로시간전망 시간차원',
    answer: `<ol>
<li><strong>과거 차원</strong> : 개인의 과거 진로 경험, 성공과 실패 경험, 의사결정 이력 등이 현재의 진로 태도에 미치는 영향을 의미한다. 과거 경험을 긍정적으로 통합하면 현재 진로 결정에 도움이 된다.</li>
<li><strong>현재 차원</strong> : 현재 수행하고 있는 역할, 활동, 관계 등이 진로 발달에 미치는 영향을 의미한다. 현재에 충실하면서도 미래를 준비하는 균형이 중요하다.</li>
<li><strong>미래 차원</strong> : 미래의 진로 목표, 계획, 기대, 희망 등을 의미한다. 미래에 대한 긍정적이고 현실적인 전망을 가질수록 진로 발달에 도움이 된다.</li>
</ol>`,
  },
  {
    num: 136, category: 'counseling',
    title: '흥미 사정(interest assessment)에 사용되는 기법 4가지를 쓰고 설명하시오.',
    frequency: '21-1, 19-2',
    keyword: '흥미 사정 기법',
    answer: `<ol>
<li><strong>표준화된 흥미 검사</strong> : 스트롱 흥미검사, 홀랜드 자기탐색검사 등 표준화된 검사 도구를 사용하여 객관적으로 흥미를 측정하는 방법이다.</li>
<li><strong>직업카드분류</strong> : 다양한 직업이 적힌 카드를 분류하게 하여 내담자의 흥미, 가치관, 선호를 탐색하는 비공식적 방법이다.</li>
<li><strong>흥미 목록 작성</strong> : 내담자가 좋아하는 활동, 과목, 취미 등을 자유롭게 목록으로 작성하게 하여 흥미 패턴을 파악하는 방법이다.</li>
<li><strong>표현된 흥미(expressed interest) 면접</strong> : 면담을 통해 내담자가 직접 표현하는 흥미를 파악하는 방법이다. 내담자가 "나는 ~에 관심이 있다"고 직접 말한 것을 기록한다.</li>
</ol>`,
  },
  {
    num: 143, category: 'counseling',
    title: '직무 스트레스와 관련된 A유형과 B유형 행동양식을 비교 설명하시오.',
    frequency: '22-2, 20-1',
    keyword: '직무스트레스 A/B 유형',
    answer: `<table>
<tr><th>구분</th><th>A유형</th><th>B유형</th></tr>
<tr><td><strong>특징</strong></td><td>시간에 쫓기는 느낌, 경쟁적, 공격적, 성취 지향적, 조급함</td><td>느긋함, 여유로움, 비경쟁적, 인내심이 강함</td></tr>
<tr><td><strong>스트레스</strong></td><td>스트레스에 취약하고 관상동맥 질환 등 건강 위험이 높다</td><td>스트레스에 비교적 강하고 건강 위험이 낮다</td></tr>
<tr><td><strong>업무 태도</strong></td><td>한 번에 여러 일을 처리하려 하고, 마감에 예민하다</td><td>일을 순서대로 처리하며, 시간 압박에 덜 민감하다</td></tr>
<tr><td><strong>대인관계</strong></td><td>타인의 느린 속도에 짜증을 느끼고 직접적이다</td><td>타인과의 관계에서 편안하고 수용적이다</td></tr>
</table>`,
  },
  {
    num: 144, category: 'counseling',
    title: '체계적 둔감화(systematic desensitization)의 절차 3단계를 쓰고 설명하시오.',
    frequency: '24-2, 21-3, 19-1',
    keyword: '체계적 둔감화 절차',
    answer: `<p><strong>개념:</strong> 울프(Wolpe)가 개발한 행동치료 기법으로, 불안을 유발하는 자극에 점진적으로 노출시키면서 이완 반응을 연합시켜 불안을 감소시키는 방법이다.</p>
<ol>
<li><strong>1단계: 이완훈련</strong> — 내담자에게 근육 이완법(점진적 근육이완법)을 훈련시켜 불안과 양립할 수 없는 이완 상태를 유도한다.</li>
<li><strong>2단계: 불안 위계 목록 작성</strong> — 불안을 유발하는 장면을 가장 약한 것부터 가장 강한 것까지 순서대로 목록을 작성한다(보통 10~15개).</li>
<li><strong>3단계: 둔감화 실시</strong> — 이완 상태에서 불안 위계 목록의 가장 약한 장면부터 상상하게 하여, 불안 없이 상상할 수 있으면 다음 단계로 진행한다. 모든 장면에 대해 불안이 사라질 때까지 반복한다.</li>
</ol>`,
  },
  {
    num: 145, category: 'counseling',
    title: '상담에서 언어적 표현과 비언어적 표현을 각각 3가지씩 쓰시오.',
    frequency: '21-1, 19-3',
    keyword: '언어적/비언어적 표현',
    answer: `<h4>언어적 표현</h4>
<ol>
<li><strong>질문</strong> : 내담자에게 개방형 또는 폐쇄형 질문을 통해 정보를 수집하고 탐색을 촉진하는 표현</li>
<li><strong>반영</strong> : 내담자의 말을 재진술하거나 감정을 반영하여 이해하고 있음을 전달하는 표현</li>
<li><strong>해석</strong> : 내담자의 행동이나 감정의 의미를 상담자가 설명하여 통찰을 돕는 표현</li>
</ol>
<h4>비언어적 표현</h4>
<ol>
<li><strong>눈 맞춤(시선 접촉)</strong> : 적절한 눈 맞춤을 통해 관심과 존중을 전달한다.</li>
<li><strong>고개 끄덕임</strong> : 내담자의 말에 동의하거나 경청하고 있음을 나타내는 동작이다.</li>
<li><strong>몸의 자세</strong> : 상체를 약간 앞으로 기울이는 것은 관심과 참여를 나타내고, 팔짱을 끼는 것은 방어적 태도를 나타낸다.</li>
</ol>`,
  },
  {
    num: 151, category: 'counseling',
    title: '구조조정 실직자 상담 시 상담자가 유의해야 할 사항 4가지를 쓰시오.',
    frequency: '22-1, 19-2',
    keyword: '구조조정 실직자 상담 유의사항',
    answer: `<ol>
<li><strong>심리적 충격 인정</strong> : 실직으로 인한 분노, 상실감, 우울감 등의 심리적 충격을 충분히 인정하고 공감해야 한다.</li>
<li><strong>자존감 회복 지원</strong> : 해고가 개인의 능력 부족이 아니라 조직 차원의 결정임을 인식시켜 자존감 회복을 돕는다.</li>
<li><strong>구체적 재취업 정보 제공</strong> : 구직 방법, 이력서 작성법, 면접 기술 등 실질적인 재취업 정보와 기술을 제공한다.</li>
<li><strong>경제적·사회적 자원 연계</strong> : 실업급여, 직업훈련, 취업지원 프로그램 등 활용 가능한 사회적 자원을 안내한다.</li>
</ol>`,
  },
  {
    num: 157, category: 'counseling',
    title: '직업상담의 일반적인 과정 5단계를 순서대로 쓰고 설명하시오.',
    frequency: '20-4, 19-1',
    keyword: '직업상담 5단계',
    answer: `<ol>
<li><strong>관계형성 단계</strong> : 상담자와 내담자 간 신뢰관계(라포)를 형성하고, 상담의 목적과 구조를 설명하는 단계이다.</li>
<li><strong>진단 및 사정 단계</strong> : 심리검사, 면접 등을 통해 내담자의 흥미, 적성, 가치관 등을 파악하고 문제를 진단하는 단계이다.</li>
<li><strong>목표설정 단계</strong> : 상담의 구체적인 목표를 설정하고 내담자와 합의하는 단계이다.</li>
<li><strong>개입(실행) 단계</strong> : 설정된 목표를 달성하기 위해 다양한 상담 기법을 적용하여 문제를 해결하는 단계이다.</li>
<li><strong>종결 및 추수지도 단계</strong> : 상담 목표 달성 여부를 평가하고 상담을 종결하며, 사후관리를 실시하는 단계이다.</li>
</ol>`,
  },
  {
    num: 161, category: 'counseling',
    title: '가치 사정(value assessment)의 방법 3가지를 쓰고 설명하시오.',
    frequency: '21-2, 19-1',
    keyword: '가치 사정 방법',
    answer: `<ol>
<li><strong>가치 목록(value inventory)</strong> : 직업가치, 생활가치 등을 체계적으로 나열한 목록에서 자신에게 중요한 가치를 선택하고 순위를 매기는 방법이다.</li>
<li><strong>가치카드분류</strong> : 다양한 가치가 적힌 카드를 "매우 중요", "중요", "중요하지 않음"으로 분류하여 자신의 가치관을 탐색하는 방법이다.</li>
<li><strong>가치 경매</strong> : 제한된 가상 화폐로 다양한 가치에 입찰하게 하여 내담자가 가장 중요하게 여기는 가치를 파악하는 방법이다.</li>
</ol>`,
  },
  {
    num: 162, category: 'counseling',
    title: 'REBT에서 엘리스가 제시한 3가지 당위성(비합리적 신념)을 쓰고 설명하시오.',
    frequency: '22-2, 20-4',
    keyword: 'REBT 3가지 당위성(must)',
    answer: `<ol>
<li><strong>자기 자신에 대한 당위성</strong> : "나는 반드시 잘해야 하며, 그렇지 못하면 나는 무가치한 존재이다."라는 신념. 자기비하와 우울을 초래한다.</li>
<li><strong>타인에 대한 당위성</strong> : "다른 사람은 반드시 나를 공정하게 대해야 하며, 그렇지 않으면 그들은 나쁜 사람이다."라는 신념. 분노와 적대감을 초래한다.</li>
<li><strong>세상(환경)에 대한 당위성</strong> : "세상은 반드시 내가 원하는 대로 되어야 하며, 그렇지 않으면 끔찍한 일이다."라는 신념. 좌절감과 자기연민을 초래한다.</li>
</ol>`,
  },
  {
    num: 165, category: 'counseling',
    title: '윌리엄슨의 특성-요인 상담의 과정(절차) 6단계를 쓰시오.',
    frequency: '25-2, 23-1, 22-1',
    keyword: '윌리엄슨 특성요인 상담과정',
    answer: `<ol>
<li><strong>분석</strong> : 내담자에 관한 객관적인 자료를 수집하는 단계(심리검사, 학업성적, 이력서 등)</li>
<li><strong>종합</strong> : 수집된 자료를 정리하여 내담자의 특성, 강점, 약점 등을 종합적으로 파악하는 단계</li>
<li><strong>진단</strong> : 종합된 자료를 바탕으로 내담자의 문제 원인을 진단하는 단계</li>
<li><strong>예언(예측)</strong> : 진단 결과에 따라 내담자의 성공 가능성을 예측하는 단계</li>
<li><strong>상담(처치)</strong> : 내담자와 상담자가 함께 문제를 해결하기 위한 대안을 탐색하고 실행하는 단계</li>
<li><strong>추수지도</strong> : 상담 이후에도 내담자의 적응 상태를 확인하고 필요시 추가 상담을 제공하는 단계</li>
</ol>`,
  },
  {
    num: 167, category: 'counseling',
    title: '직업적응이론(TWA)에서 사용하는 검사도구 3가지를 쓰고 설명하시오.',
    frequency: '21-3, 19-2',
    keyword: 'TWA 검사도구',
    answer: `<ol>
<li><strong>MIQ(미네소타 중요도 질문지, Minnesota Importance Questionnaire)</strong> : 직업 관련 욕구(needs)와 가치를 측정하는 도구로, 개인이 직업에서 얼마나 중요하게 여기는 욕구를 파악한다.</li>
<li><strong>MSQ(미네소타 만족도 질문지, Minnesota Satisfaction Questionnaire)</strong> : 현재 직업에 대한 만족도를 측정하는 도구로, 내적 만족(성취감, 자율성)과 외적 만족(임금, 근무환경) 등을 평가한다.</li>
<li><strong>MJDQ(미네소타 직무기술 질문지, Minnesota Job Description Questionnaire)</strong> : 직무환경이 제공하는 강화인(reinforcer)의 수준을 측정하는 도구로, 직무 환경의 특성을 파악한다.</li>
</ol>`,
  },
  {
    num: 169, category: 'counseling',
    title: '실존주의 상담에서 제시하는 양식세계(modes of being) 3가지를 쓰고 설명하시오.',
    frequency: '22-2, 20-3',
    keyword: '실존주의 양식세계',
    answer: `<ol>
<li><strong>주위세계(Umwelt, 환경세계)</strong> : 생물학적 세계로, 자연환경과 인간의 생물학적 욕구 및 본능과 관련된 세계이다. 인간이 자연환경 속에서 생물학적으로 적응하는 차원을 말한다.</li>
<li><strong>공존세계(Mitwelt, 대인관계 세계)</strong> : 다른 사람들과의 관계 속에서 경험하는 세계이다. 사회적 관계, 타인과의 상호작용, 공동체 의식 등 대인관계 차원을 말한다.</li>
<li><strong>자기세계(Eigenwelt, 자아세계)</strong> : 자기 자신과의 관계에서 경험하는 세계이다. 자기인식, 자기이해, 내면적 경험 등 개인의 주관적·심리적 차원을 말한다.</li>
</ol>`,
  },
  {
    num: 170, category: 'counseling',
    title: '로(Roe)의 직업분류에서 수직적 차원(직업의 수준) 6단계를 쓰시오.',
    frequency: '24-2, 21-1, 19-3',
    keyword: '로(Roe) 수직차원 직업수준',
    answer: `<ol>
<li><strong>전문·관리직 (1수준, 독립적 책임)</strong> : 최고 수준의 전문적 지식과 독립적 판단이 요구되는 직업</li>
<li><strong>전문·관리직 (2수준)</strong> : 전문적 훈련은 받았으나 독립적 책임보다는 중간 수준의 전문직</li>
<li><strong>준전문·소사업가 (3수준)</strong> : 일정 수준의 교육과 훈련을 받은 준전문직</li>
<li><strong>숙련직 (4수준)</strong> : 체계적인 직업훈련을 이수한 숙련 기능직</li>
<li><strong>반숙련직 (5수준)</strong> : 비교적 짧은 훈련기간이 필요한 반숙련 직업</li>
<li><strong>비숙련직 (6수준)</strong> : 특별한 교육이나 훈련이 필요하지 않은 단순 노무직</li>
</ol>`,
  },
  {
    num: 174, category: 'counseling',
    title: '교류분석(TA)의 생활자세 4가지를 쓰고 설명하시오.',
    frequency: '22-1, 20-2',
    keyword: '교류분석 생활자세(life position)',
    answer: `<ol>
<li><strong>I\'m OK - You\'re OK (자기긍정-타인긍정)</strong> : 가장 건강한 자세로, 자신과 타인을 모두 존중하고 긍정적으로 바라본다. 협력적이고 건설적인 대인관계를 맺는다.</li>
<li><strong>I\'m OK - You\'re Not OK (자기긍정-타인부정)</strong> : 자신은 괜찮지만 타인에게 문제가 있다고 보는 자세이다. 타인을 비난하거나 지배하려는 경향이 있다.</li>
<li><strong>I\'m Not OK - You\'re OK (자기부정-타인긍정)</strong> : 자신은 부족하고 타인은 괜찮다고 보는 자세이다. 열등감, 위축감, 우울감을 느끼기 쉽다.</li>
<li><strong>I\'m Not OK - You\'re Not OK (자기부정-타인부정)</strong> : 자신과 타인 모두 부정적으로 바라보는 가장 비건강한 자세이다. 무기력, 절망감, 사회적 고립으로 이어질 수 있다.</li>
</ol>`,
  },

  /* ---------- 직업심리학 (psychology) 추가 ---------- */
  {
    num: 106, category: 'psychology',
    title: '직업상담을 위한 심리검사 선택 시 고려해야 할 사항 5가지를 쓰시오.',
    frequency: '22-1, 20-1',
    keyword: '심리검사 선택 고려사항',
    answer: `<ol>
<li><strong>검사의 타당도와 신뢰도</strong> : 측정하고자 하는 것을 정확히 측정하는지(타당도), 일관된 결과를 제공하는지(신뢰도)를 확인해야 한다.</li>
<li><strong>검사의 목적 부합성</strong> : 상담 목적(진로 탐색, 적성 파악, 흥미 확인 등)에 부합하는 검사를 선택해야 한다.</li>
<li><strong>내담자의 특성</strong> : 내담자의 연령, 교육 수준, 문화적 배경 등을 고려하여 적절한 검사를 선택해야 한다.</li>
<li><strong>검사의 실용성</strong> : 실시 시간, 비용, 채점 방법의 용이성 등 실용적 측면을 고려해야 한다.</li>
<li><strong>규준의 적절성</strong> : 검사의 규준이 내담자가 속한 집단에 적합한지 확인해야 한다.</li>
</ol>`,
  },
  {
    num: 107, category: 'psychology',
    title: '질적(비표준화) 측정도구 3가지를 쓰고 설명하시오.',
    frequency: '24-3, 21-3, 19-1',
    keyword: '질적 측정도구',
    answer: `<ol>
<li><strong>직업카드분류</strong> : 다양한 직업이 적힌 카드를 선호 정도에 따라 분류하게 하여 내담자의 흥미, 가치관, 직업 선호를 파악하는 도구이다.</li>
<li><strong>생애진로사정</strong> : 내담자의 과거, 현재, 미래의 진로 경험과 계획을 총체적으로 탐색하여 진로 발달 상태를 평가하는 도구이다.</li>
<li><strong>진로 자서전</strong> : 내담자가 자신의 진로 발달 과정을 자유롭게 기술하게 하여 진로 경험, 의사결정 패턴, 가치관 등을 파악하는 도구이다.</li>
</ol>`,
  },
  {
    num: 109, category: 'psychology',
    title: '스피어만(Spearman)의 지능 2요인설을 설명하시오.',
    frequency: '22-1, 20-3',
    keyword: '스피어만 지능 2요인설',
    answer: `<p>스피어만은 지능이 <strong>일반요인(g요인)</strong>과 <strong>특수요인(s요인)</strong>의 2가지 요인으로 구성된다고 주장했다.</p>
<ol>
<li><strong>일반요인(g요인, General Factor)</strong> : 모든 지적 활동의 기초가 되는 공통 요인으로, 모든 지능검사 수행에 영향을 미친다. 추상적 사고, 추론, 문제해결 등의 능력이 포함된다. 유전적 요인에 크게 영향을 받는다.</li>
<li><strong>특수요인(s요인, Specific Factor)</strong> : 특정 과제나 영역에서만 작용하는 요인으로, 수학, 언어, 공간지각 등 개별 과제마다 다른 특수한 능력이다. 교육이나 경험에 의해 발달할 수 있다.</li>
</ol>
<p><em>스피어만은 g요인이 더 중요하다고 보았으며, 이를 '정신 에너지'에 비유했다.</em></p>`,
  },
  {
    num: 111, category: 'psychology',
    title: '검사-재검사 신뢰도의 단점(한계) 4가지를 쓰시오.',
    frequency: '25-3, 22-1, 20-2, 18-3',
    keyword: '검사-재검사 신뢰도 단점',
    answer: `<ol>
<li><strong>연습효과(학습효과)</strong> : 동일한 검사를 두 번 실시하므로 두 번째 검사에서 점수가 높아지는 연습효과가 발생할 수 있다.</li>
<li><strong>기억효과</strong> : 첫 번째 검사의 내용을 기억하여 두 번째 검사에서 동일하게 응답할 수 있어 실제 신뢰도보다 높게 추정될 수 있다.</li>
<li><strong>시간 간격의 문제</strong> : 두 검사 간 시간 간격이 너무 짧으면 연습/기억효과가 크고, 너무 길면 실제 특성의 변화로 신뢰도가 낮아질 수 있다.</li>
<li><strong>반응 경향의 변화</strong> : 검사를 두 번 실시하는 동안 수검자의 동기, 건강, 정서 상태 등이 변할 수 있어 정확한 추정이 어렵다.</li>
</ol>`,
  },
  {
    num: 116, category: 'psychology',
    title: 'GATB(일반적성검사)의 적성(요인) 9가지를 쓰시오.',
    frequency: '25-1, 23-2, 22-1, 21-2',
    keyword: 'GATB 9가지 적성요인',
    answer: `<ol>
<li><strong>G (일반학습능력)</strong> : 일반적인 학습 및 이해 능력</li>
<li><strong>V (언어능력)</strong> : 언어의 의미를 이해하고 활용하는 능력</li>
<li><strong>N (수리능력)</strong> : 산술 연산을 빠르고 정확하게 수행하는 능력</li>
<li><strong>S (공간지각능력)</strong> : 평면이나 입체 도형의 관계를 이해하는 능력</li>
<li><strong>P (형태지각능력)</strong> : 대상의 세부적인 형태를 지각하고 비교하는 능력</li>
<li><strong>Q (사무지각능력)</strong> : 문자, 숫자 등의 세부적 차이를 빠르고 정확하게 지각하는 능력</li>
<li><strong>K (운동조정능력)</strong> : 눈과 손의 협응으로 빠르고 정확하게 동작하는 능력</li>
<li><strong>F (손가락 재주)</strong> : 손가락으로 작은 물체를 빠르고 정확하게 조작하는 능력</li>
<li><strong>M (손 재주)</strong> : 손과 팔을 사용하여 물체를 기민하게 다루는 능력</li>
</ol>`,
  },
  {
    num: 122, category: 'psychology',
    title: '타당도의 종류를 쓰고 각각 설명하시오 (빈칸 채우기).',
    frequency: '25-1, 22-2, 21-1',
    keyword: '타당도 종류 종합',
    answer: `<ol>
<li><strong>내용타당도</strong> : 검사 내용이 측정하고자 하는 영역을 얼마나 잘 대표하는지를 나타내는 타당도이다. 전문가의 논리적 판단에 의해 평가된다.</li>
<li><strong>구성(구인)타당도</strong> : 검사가 이론적 개념(구인)을 얼마나 잘 측정하는지를 나타내는 타당도이다. 수렴타당도, 변별타당도, 요인분석 등으로 검증한다.</li>
<li><strong>준거타당도</strong> : 검사 결과가 외적 준거와 얼마나 관련되는지를 나타내는 타당도이다. 예언타당도(미래 준거)와 동시타당도(현재 준거)로 구분된다.</li>
<li><strong>안면(액면)타당도</strong> : 검사가 겉보기에 측정하려는 것을 측정하는 것 같은지에 대한 주관적 판단이다. 통계적 타당도가 아닌 외관상 타당도이다.</li>
</ol>`,
  },
  {
    num: 129, category: 'psychology',
    title: '준거장면(criterion scene)에서 검사를 분류하는 방법 4가지를 쓰시오.',
    frequency: '21-3, 19-2',
    keyword: '준거장면 검사 분류',
    answer: `<ol>
<li><strong>현재 장면 검사(동시적 준거)</strong> : 검사 실시 시점에서의 행동이나 수행을 기준으로 분류하는 방법이다. 현재의 직무 수행 능력을 평가한다.</li>
<li><strong>미래 장면 검사(예측적 준거)</strong> : 미래의 행동이나 수행을 예측하기 위한 검사로 분류하는 방법이다. 입사 후 직무 수행 능력을 예측한다.</li>
<li><strong>지필(지필검사) 장면</strong> : 종이와 연필을 사용하여 실시하는 검사로 분류하는 방법이다. 필기시험, 객관식 검사 등이 해당된다.</li>
<li><strong>실제 장면(작업표본) 검사</strong> : 실제 작업 상황이나 유사 상황에서 수행을 직접 관찰하여 평가하는 검사이다.</li>
</ol>`,
  },
  {
    num: 130, category: 'psychology',
    title: '흥미 사정(interest assessment)의 목적 4가지를 쓰시오.',
    frequency: '21-2, 19-1',
    keyword: '흥미 사정 목적',
    answer: `<ol>
<li><strong>자기이해 촉진</strong> : 내담자가 자신의 흥미 유형과 패턴을 이해하여 자기인식을 높이는 데 도움을 준다.</li>
<li><strong>진로 대안 탐색</strong> : 흥미와 관련된 다양한 직업 대안을 탐색하고 발견하도록 돕는다.</li>
<li><strong>진로 의사결정 지원</strong> : 흥미 정보를 활용하여 합리적인 진로 의사결정을 내릴 수 있도록 지원한다.</li>
<li><strong>진로 변경 시 참고 자료 제공</strong> : 직업 전환이나 진로 변경을 고려할 때 흥미 정보를 참고자료로 활용할 수 있다.</li>
</ol>`,
  },
  {
    num: 137, category: 'psychology',
    title: '성격 5요인 모델(Big Five)의 요인을 쓰고 설명하시오.',
    frequency: '25-2, 24-1, 23-1, 21-3, 20-2',
    keyword: '성격 5요인(Big Five/OCEAN)',
    answer: `<ol>
<li><strong>개방성(Openness)</strong> : 새로운 경험, 아이디어, 가치에 대해 열린 태도를 가지는 정도. 상상력이 풍부하고 창의적이며 지적 호기심이 강하다.</li>
<li><strong>성실성(Conscientiousness)</strong> : 목표 지향적이고 조직적이며 자기통제력이 높은 정도. 책임감이 강하고 계획적이며 규칙을 잘 따른다.</li>
<li><strong>외향성(Extraversion)</strong> : 사교적이고 활동적이며 타인과의 상호작용을 즐기는 정도. 에너지가 넘치고 긍정적 정서를 잘 표현한다.</li>
<li><strong>우호성(Agreeableness)</strong> : 타인에게 협조적이고 친절하며 신뢰를 주는 정도. 이타적이고 배려심이 많으며 갈등을 회피하는 경향이 있다.</li>
<li><strong>신경증(Neuroticism)</strong> : 정서적으로 불안정하고 스트레스에 취약한 정도. 불안, 우울, 분노 등 부정적 정서를 경험하기 쉽다.</li>
</ol>`,
  },
  {
    num: 138, category: 'psychology',
    title: '성격 5요인 중 성실성(Conscientiousness)과 직업 성과의 관계를 설명하시오.',
    frequency: '20-4',
    keyword: '성격 5요인 성실성과 직무성과',
    answer: `<p>성격 5요인 중 <strong>성실성</strong>은 다양한 직업과 직무에서 직무 성과를 가장 일관되게 예측하는 요인으로 알려져 있다.</p>
<ol>
<li><strong>성실성이 높은 사람의 특징</strong> : 목표 지향적, 조직적, 근면 성실, 자기통제력이 높고 계획적으로 일을 수행한다.</li>
<li><strong>직무 성과와의 관계</strong> : 성실성은 모든 직업군에서 직무 성과와 정적(+) 상관을 보이며, 특히 관리직, 영업직, 전문직에서 높은 예측력을 가진다.</li>
<li><strong>교육 및 훈련 성과</strong> : 성실한 사람은 교육훈련에 더 적극적으로 참여하고, 학습 성과도 높은 경향이 있다.</li>
<li><strong>조직시민행동</strong> : 성실한 사람은 자신의 직무 범위를 넘어서 조직에 도움이 되는 자발적 행동을 더 많이 한다.</li>
</ol>`,
  },
  {
    num: 139, category: 'psychology',
    title: '심리검사 결과에서 개인 간 차이가 발생하는 원인 4가지를 쓰시오.',
    frequency: '21-2, 19-3',
    keyword: '검사 결과 차이 원인',
    answer: `<ol>
<li><strong>실제 특성의 차이</strong> : 개인마다 능력, 흥미, 성격 등 실제 특성이 다르기 때문에 검사 결과에 차이가 나타난다.</li>
<li><strong>검사 상황(환경) 요인</strong> : 검사 장소의 소음, 온도, 조명 등 물리적 환경이 검사 수행에 영향을 미칠 수 있다.</li>
<li><strong>수검자 상태 요인</strong> : 검사 당시 수검자의 건강, 피로, 동기, 불안 수준 등 심리적·신체적 상태가 영향을 미친다.</li>
<li><strong>검사 도구 자체의 오차</strong> : 문항의 모호성, 채점 오류, 검사 도구의 측정 오차 등이 결과 차이에 영향을 줄 수 있다.</li>
</ol>`,
  },
  {
    num: 141, category: 'psychology',
    title: '스트롱(Strong) 흥미검사의 척도 구성을 설명하시오.',
    frequency: '25-3, 22-2, 21-1, 18-2',
    keyword: '스트롱 흥미검사 척도',
    answer: `<ol>
<li><strong>일반직업주제(GOT, General Occupational Themes)</strong> : 홀랜드의 RIASEC 6유형에 기반한 척도로, 수검자의 전반적인 흥미 유형을 파악한다.</li>
<li><strong>기본흥미척도(BIS, Basic Interest Scales)</strong> : 30개의 세부 영역으로 구성되어 특정 활동이나 주제에 대한 흥미를 측정한다. GOT보다 더 구체적인 흥미 정보를 제공한다.</li>
<li><strong>개인스타일척도(PSS, Personal Style Scales)</strong> : 업무 방식, 학습 환경, 리더십 스타일, 위험 감수 등 개인의 선호 스타일을 측정한다.</li>
<li><strong>직업척도(OS, Occupational Scales)</strong> : 특정 직업에 종사하는 사람들의 흥미 패턴과 수검자의 흥미 패턴을 비교하여 직업별 유사성을 나타낸다.</li>
</ol>`,
  },
  {
    num: 142, category: 'psychology',
    title: '동시타당도와 예측타당도를 비교하여 설명하시오.',
    frequency: '22-1, 20-3',
    keyword: '동시타당도 vs 예측타당도',
    answer: `<table>
<tr><th>구분</th><th>동시타당도</th><th>예측타당도</th></tr>
<tr><td><strong>개념</strong></td><td>검사 점수와 현재 시점의 준거 간 상관관계</td><td>검사 점수와 미래 시점의 준거 간 상관관계</td></tr>
<tr><td><strong>시간</strong></td><td>검사와 준거를 동시에 측정</td><td>검사 후 일정 기간 경과 후 준거 측정</td></tr>
<tr><td><strong>목적</strong></td><td>현재 상태의 진단 및 분류</td><td>미래 행동이나 수행의 예측</td></tr>
<tr><td><strong>예시</strong></td><td>새 우울검사와 기존 우울검사를 동시에 실시하여 상관 비교</td><td>입사 적성검사 점수와 1년 후 업무성과 간 상관 비교</td></tr>
</table>`,
  },
  {
    num: 146, category: 'psychology',
    title: '성능검사(최대수행검사)와 성향검사(습관적 수행검사)를 비교 설명하시오.',
    frequency: '21-3, 19-2',
    keyword: '성능검사 vs 성향검사',
    answer: `<table>
<tr><th>구분</th><th>성능검사(최대수행검사)</th><th>성향검사(습관적 수행검사)</th></tr>
<tr><td><strong>목적</strong></td><td>수검자가 최대한 발휘할 수 있는 능력을 측정</td><td>수검자의 일상적인 행동 특성을 측정</td></tr>
<tr><td><strong>응답 방식</strong></td><td>정답이 있으며, 맞히기 위해 최선을 다해야 함</td><td>정답이 없으며, 솔직하게 응답해야 함</td></tr>
<tr><td><strong>측정 대상</strong></td><td>지능, 적성, 성취도 등 인지적 능력</td><td>성격, 흥미, 가치관, 태도 등 정의적 특성</td></tr>
<tr><td><strong>예시</strong></td><td>지능검사, 적성검사, 학력검사</td><td>성격검사, 흥미검사, 가치관검사</td></tr>
</table>`,
  },
  {
    num: 147, category: 'psychology',
    title: '흥미검사의 종류를 3가지 쓰고 설명하시오.',
    frequency: '21-1, 19-3',
    keyword: '흥미검사 종류',
    answer: `<ol>
<li><strong>스트롱 직업흥미검사(SII)</strong> : 홀랜드의 RIASEC 모형을 기반으로 일반직업주제, 기본흥미, 직업척도, 개인스타일 등을 측정하는 가장 널리 사용되는 흥미검사이다.</li>
<li><strong>자기탐색검사(SDS)</strong> : 홀랜드가 직접 개발한 검사로, 수검자가 스스로 검사를 실시하고 채점할 수 있다. RIASEC 6유형 중 자신의 유형을 찾는다.</li>
<li><strong>쿠더 흥미검사(Kuder Interest Inventory)</strong> : 강제선택 형식으로 활동에 대한 선호를 측정하며, 직업군별 흥미를 파악한다. 10가지 직업영역에 대한 흥미를 측정한다.</li>
</ol>`,
  },
  {
    num: 152, category: 'psychology',
    title: 'Z점수(표준점수) 계산 문제를 풀이하시오.',
    frequency: '21-2, 19-1',
    keyword: 'Z점수 계산',
    answer: `<h4>공식</h4>
<p><strong>Z = (X - M) / SD</strong></p>
<p>X : 원점수, M : 평균, SD : 표준편차</p>
<h4>풀이 예시</h4>
<p>조건: 평균(M) = 60, 표준편차(SD) = 10, 원점수(X) = 80</p>
<p>Z = (80 - 60) / 10 = <strong>2.0</strong></p>
<p><em>Z점수가 2.0이라는 것은 해당 점수가 평균보다 표준편차 2배만큼 높다는 것을 의미한다. 정규분포에서 상위 약 2.28%에 해당한다.</em></p>
<h4>T점수 변환</h4>
<p><strong>T = 50 + 10Z</strong> = 50 + 10(2.0) = <strong>70</strong></p>`,
  },
  {
    num: 158, category: 'psychology',
    title: '역량검사(power test)와 속도검사(speed test)를 비교 설명하시오.',
    frequency: '21-1, 19-2',
    keyword: '역량검사 vs 속도검사',
    answer: `<table>
<tr><th>구분</th><th>역량검사(power test)</th><th>속도검사(speed test)</th></tr>
<tr><td><strong>시간 제한</strong></td><td>충분한 시간이 주어진다 (시간 제한이 거의 없음)</td><td>엄격한 시간 제한이 있다</td></tr>
<tr><td><strong>문항 난이도</strong></td><td>쉬운 문항에서 어려운 문항 순으로 배열 (난이도 차이가 큼)</td><td>비슷한 난이도의 문항으로 구성 (난이도 차이가 적음)</td></tr>
<tr><td><strong>측정 대상</strong></td><td>수검자가 최대한 발휘할 수 있는 능력 수준을 측정</td><td>제한 시간 내에 얼마나 빠르고 정확하게 풀 수 있는지를 측정</td></tr>
<tr><td><strong>예시</strong></td><td>지능검사, 적성검사 (어려운 문항에서 변별)</td><td>사무능력검사, 타자속도검사 (속도에서 변별)</td></tr>
</table>`,
  },
  {
    num: 172, category: 'psychology',
    title: '준거장면(criterion scene)에서 검사를 분류하는 4가지 방법을 쓰시오.',
    frequency: '20-4, 19-3',
    keyword: '준거장면 검사 분류 4가지',
    answer: `<ol>
<li><strong>지필장면(Paper-and-Pencil Tests)</strong> : 종이와 펜을 사용하여 실시하는 검사. 객관식, 주관식 형태의 필기시험이 해당된다.</li>
<li><strong>구술장면(Oral Tests)</strong> : 구두로 질문하고 답하는 면접이나 구술시험 형태의 검사이다.</li>
<li><strong>실험장면(Simulation Tests)</strong> : 실제 직무 상황을 모의로 재현하여 수행을 평가하는 검사. 역할연기, 인바스켓 등이 해당된다.</li>
<li><strong>실제장면(Work Sample Tests)</strong> : 실제 직무 현장에서 직접 수행하게 하여 평가하는 검사. 작업표본검사가 대표적이다.</li>
</ol>`,
  },
  {
    num: 173, category: 'psychology',
    title: '심리검사에서 검사자 변인과 수검자 변인을 각각 3가지씩 쓰시오.',
    frequency: '22-1, 19-3',
    keyword: '검사자/수검자 변인',
    answer: `<h4>검사자 변인</h4>
<ol>
<li><strong>검사자의 태도와 행동</strong> : 검사자의 친절함, 엄격함, 격려 등이 수검자의 반응에 영향을 미친다.</li>
<li><strong>검사 실시 절차의 차이</strong> : 검사 지시문의 전달 방식, 시간 관리 등 절차상의 차이가 결과에 영향을 줄 수 있다.</li>
<li><strong>검사자의 기대효과</strong> : 검사자가 수검자에 대해 가진 기대나 편견이 무의식적으로 검사 결과에 영향을 미칠 수 있다.</li>
</ol>
<h4>수검자 변인</h4>
<ol>
<li><strong>검사 불안</strong> : 검사 상황에 대한 불안이 실제 능력보다 낮은 점수를 받게 할 수 있다.</li>
<li><strong>반응 경향(세트)</strong> : 사회적 바람직성, 묵인 반응 경향 등 특정한 방향으로 응답하려는 경향이 있다.</li>
<li><strong>동기 수준</strong> : 수검자의 검사 참여 동기에 따라 성실하게 응답하는 정도가 달라진다.</li>
</ol>`,
  },

  /* ---------- 직업정보론 (jobinfo) 추가 ---------- */
  {
    num: 108, category: 'jobinfo',
    title: '한국표준산업분류의 적용 원칙 3가지를 쓰고 설명하시오.',
    frequency: '24-1, 22-2, 20-1',
    keyword: 'KSIC 산업분류 적용원칙',
    answer: `<ol>
<li><strong>산출물의 특성</strong> : 생산되는 재화나 서비스의 물리적 구성, 가공 단계, 용도 등 산출물의 특성에 따라 분류한다. 가장 기본적인 분류 기준이다.</li>
<li><strong>투입물의 특성</strong> : 원재료, 생산 기술, 생산 과정 등 투입 요소의 특성에 따라 분류한다. 산출물로 분류가 어려운 경우 보조적으로 사용한다.</li>
<li><strong>생산활동의 일반적 결합형태(생산공정)</strong> : 생산활동이 어떤 방식으로 조직되고 수행되는지에 따라 분류한다. 동일한 산출물이라도 생산 방식이 다르면 다르게 분류할 수 있다.</li>
</ol>`,
  },
  {
    num: 120, category: 'jobinfo',
    title: '브레이필드(Brayfield)가 제시한 직업정보의 기능 4가지를 쓰시오.',
    frequency: '25-1, 22-1, 21-1',
    keyword: '브레이필드 직업정보 기능',
    answer: `<ol>
<li><strong>정보적 기능</strong> : 직업에 대한 사실적이고 객관적인 정보를 제공하여 내담자의 직업 세계 이해를 돕는 기능이다.</li>
<li><strong>조정적 기능</strong> : 내담자가 이미 가지고 있는 직업 정보의 오류를 수정하고 올바르게 조정하는 기능이다.</li>
<li><strong>동기적(동기부여) 기능</strong> : 직업 정보를 통해 내담자의 진로 탐색과 직업 선택에 대한 동기를 유발하는 기능이다.</li>
<li><strong>강화적 기능</strong> : 내담자가 이미 내린 진로 결정에 대한 확신을 강화시켜 주는 기능이다.</li>
</ol>`,
  },
  {
    num: 121, category: 'jobinfo',
    title: '공공직업정보의 특성(특징) 4가지를 쓰시오.',
    frequency: '25-3, 21-3, 19-1',
    keyword: '공공직업정보 특성',
    answer: `<ol>
<li><strong>공공성</strong> : 공공기관에서 제공하므로 특정 집단이나 기업의 이익이 아닌 공익을 위해 제공된다.</li>
<li><strong>객관성</strong> : 체계적인 조사와 분석에 기반하여 제공되므로 객관적이고 신뢰할 수 있는 정보이다.</li>
<li><strong>무료성(접근성)</strong> : 누구나 무료로 이용할 수 있으며, 접근이 용이하다.</li>
<li><strong>포괄성</strong> : 특정 직업이나 산업에 한정되지 않고, 다양한 직업과 산업에 대한 광범위한 정보를 포괄한다.</li>
</ol>`,
  },
  {
    num: 153, category: 'jobinfo',
    title: '미시적 고용정보와 거시적 고용정보를 각각 설명하고 예시를 드시오.',
    frequency: '22-2, 20-4',
    keyword: '미시적/거시적 고용정보',
    answer: `<ol>
<li><strong>미시적 고용정보</strong> : 개별 기업이나 특정 직업에 관한 구체적인 정보를 말한다. 개인의 취업 의사결정에 직접적으로 활용된다.
<br/><em>예시:</em> 특정 기업의 채용 공고, 임금 수준, 근무 조건, 직무 내용, 직업별 자격 요건 등</li>
<li><strong>거시적 고용정보</strong> : 국가 경제 전체의 고용 동향과 노동시장 상황에 관한 정보를 말한다. 정책 수립이나 장기적 진로 계획에 활용된다.
<br/><em>예시:</em> 실업률, 경제활동참가율, 산업별 고용 동향, 직업별 전망, GDP 성장률 등</li>
</ol>`,
  },
  {
    num: 166, category: 'jobinfo',
    title: '직무기술서(job description)에 포함되는 정보 6가지를 쓰시오.',
    frequency: '22-1, 20-2',
    keyword: '직무기술서 포함 정보',
    answer: `<ol>
<li><strong>직무명칭</strong> : 해당 직무의 공식적인 이름</li>
<li><strong>직무개요</strong> : 직무의 전반적인 내용과 목적을 간략히 기술한 것</li>
<li><strong>수행 직무(직무내용)</strong> : 실제로 수행하는 구체적인 업무 내용과 과제</li>
<li><strong>작업 조건</strong> : 근무 시간, 물리적 환경, 위험 요소 등 작업 환경에 관한 정보</li>
<li><strong>사용 장비 및 도구</strong> : 직무 수행에 필요한 기계, 장비, 도구 등의 정보</li>
<li><strong>관련 직무와의 관계</strong> : 직무 간의 수직적·수평적 관계, 보고 체계, 감독 관계 등</li>
</ol>`,
  },

  /* ---------- 노동시장론 (labor_market) 추가 ---------- */
  {
    num: 110, category: 'labor_market',
    title: '고용률 계산 문제를 풀이하시오.',
    frequency: '25-3, 23-1, 21-2, 19-3, 18-1',
    keyword: '고용률 계산',
    answer: `<h4>공식</h4>
<p><strong>고용률 = (취업자 수 / 15세 이상 인구) × 100</strong></p>
<h4>풀이 예시</h4>
<p>조건: 15세 이상 인구 = 40,000천명, 취업자 = 24,000천명</p>
<p>고용률 = (24,000 / 40,000) × 100 = <strong>60%</strong></p>
<p><em>참고: 고용률은 경제활동참가율과 달리 비경제활동인구를 분모에 포함하므로, 실질적인 고용 상황을 더 정확히 반영한다.</em></p>`,
  },
  {
    num: 117, category: 'labor_market',
    title: '최저임금제의 기대효과(긍정적 효과) 4가지를 쓰시오.',
    frequency: '25-2, 23-2, 22-1, 20-3, 18-2, 18-3',
    keyword: '최저임금제 기대효과',
    answer: `<ol>
<li><strong>저임금 근로자의 생활 안정</strong> : 최소한의 임금을 보장하여 저임금 근로자의 기본적인 생활을 보장한다.</li>
<li><strong>소득분배 개선</strong> : 임금의 하한선을 설정하여 임금 격차를 줄이고 소득분배의 형평성을 향상시킨다.</li>
<li><strong>노동생산성 향상</strong> : 적정 임금 지급으로 근로자의 근무 의욕과 동기가 높아져 생산성이 향상된다.</li>
<li><strong>경제 활성화(소비 촉진)</strong> : 저소득 근로자의 소득 증가로 소비가 증가하여 내수 경제가 활성화된다.</li>
</ol>`,
  },
  {
    num: 123, category: 'labor_market',
    title: '실업률 계산 문제를 풀이하시오.',
    frequency: '25-3, 24-1, 23-2, 22-1, 21-3',
    keyword: '실업률 계산',
    answer: `<h4>공식</h4>
<p><strong>실업률 = (실업자 수 / 경제활동인구) × 100</strong></p>
<p>경제활동인구 = 취업자 + 실업자</p>
<h4>풀이 예시</h4>
<p>조건: 15세 이상 인구 = 40,000천명, 취업자 = 24,000천명, 실업자 = 1,000천명</p>
<p>경제활동인구 = 24,000 + 1,000 = 25,000천명</p>
<p>실업률 = (1,000 / 25,000) × 100 = <strong>4%</strong></p>
<p><em>경제활동참가율 = (25,000 / 40,000) × 100 = 62.5%</em></p>`,
  },
  {
    num: 124, category: 'labor_market',
    title: '이윤극대화 조건에서 노동수요량 계산 문제를 풀이하시오.',
    frequency: '22-2, 21-1',
    keyword: '이윤극대화 노동수요량',
    answer: `<h4>이윤극대화 조건</h4>
<p><strong>MRP = MFC</strong> (한계수입생산 = 한계요소비용)</p>
<p>완전경쟁시장에서: <strong>VMP = W</strong> (한계생산가치 = 임금)</p>
<p>VMP = P × MP (생산물 가격 × 한계생산)</p>
<h4>풀이 예시</h4>
<p>조건: 생산함수 Q = 100L - L², 생산물 가격 P = 10, 임금 W = 200</p>
<p>MP = dQ/dL = 100 - 2L</p>
<p>VMP = P × MP = 10(100 - 2L) = 1,000 - 20L</p>
<p>이윤극대화: VMP = W → 1,000 - 20L = 200</p>
<p>20L = 800 → <strong>L = 40명</strong></p>`,
  },
  {
    num: 126, category: 'labor_market',
    title: '실업률, 임금근로자 비율, 경제활동참가율을 각각 계산하시오.',
    frequency: '22-1, 20-4',
    keyword: '고용지표 종합 계산',
    answer: `<h4>주요 공식 정리</h4>
<ol>
<li><strong>실업률</strong> = (실업자 / 경제활동인구) × 100</li>
<li><strong>경제활동참가율</strong> = (경제활동인구 / 15세 이상 인구) × 100</li>
<li><strong>임금근로자 비율</strong> = (임금근로자 / 전체 취업자) × 100</li>
</ol>
<h4>풀이 예시</h4>
<p>조건: 15세이상 인구 = 40,000, 경활인구 = 25,000, 취업자 = 24,000, 실업자 = 1,000, 임금근로자 = 18,000</p>
<p>① 실업률 = (1,000/25,000) × 100 = <strong>4%</strong></p>
<p>② 경활참가율 = (25,000/40,000) × 100 = <strong>62.5%</strong></p>
<p>③ 임금근로자 비율 = (18,000/24,000) × 100 = <strong>75%</strong></p>`,
  },
  {
    num: 134, category: 'labor_market',
    title: '노동수요의 임금 탄력성 계산 문제를 풀이하시오.',
    frequency: '23-1, 22-2',
    keyword: '노동수요 탄력성 계산',
    answer: `<h4>공식</h4>
<p><strong>노동수요 탄력성 (Ed) = |노동수요량 변화율 / 임금 변화율|</strong></p>
<p>= |(△L/L) / (△W/W)| = |(△L/△W) × (W/L)|</p>
<h4>풀이 예시</h4>
<p>조건: 임금 10% 인상 시 노동수요 20% 감소</p>
<p>Ed = |(-20%) / (10%)| = <strong>2</strong></p>
<h4>판정 기준</h4>
<ol>
<li>Ed > 1 : <strong>탄력적</strong> (임금변화율보다 고용변화율이 크다)</li>
<li>Ed = 1 : <strong>단위탄력적</strong></li>
<li>Ed < 1 : <strong>비탄력적</strong> (임금변화율보다 고용변화율이 작다)</li>
</ol>`,
  },
  {
    num: 135, category: 'labor_market',
    title: '비수요부족 실업의 유형 3가지를 쓰고 설명하시오.',
    frequency: '24-2, 22-2, 20-3, 18-1',
    keyword: '비수요부족 실업 유형',
    answer: `<ol>
<li><strong>마찰적 실업</strong> : 근로자가 더 나은 직장을 찾기 위해 자발적으로 직장을 이동하는 과정에서 일시적으로 발생하는 실업이다. 노동시장의 정보 부족이나 탐색 시간 때문에 발생하며, 자연실업의 일부이다.</li>
<li><strong>구조적 실업</strong> : 산업 구조의 변화, 기술 혁신 등으로 특정 산업이나 지역의 노동수요와 공급 사이에 불일치가 생겨 발생하는 실업이다. 장기적이고 해결이 어렵다.</li>
<li><strong>계절적 실업</strong> : 계절에 따라 특정 산업의 노동수요가 변동하여 발생하는 실업이다. 농업, 건설업, 관광업 등에서 주로 나타난다.</li>
</ol>`,
  },
  {
    num: 140, category: 'labor_market',
    title: '한계생산(MP) 및 한계생산가치(VMP) 계산 문제를 풀이하시오.',
    frequency: '22-1, 20-4',
    keyword: '한계생산/한계생산가치 계산',
    answer: `<h4>공식</h4>
<p><strong>한계생산(MP)</strong> = △Q / △L (노동 1단위 추가 시 생산량 변화)</p>
<p><strong>한계생산가치(VMP)</strong> = P × MP (생산물 가격 × 한계생산)</p>
<h4>풀이 예시</h4>
<p>조건: 노동자 수 3→4명일 때 총생산량 30→38</p>
<p>MP = (38 - 30) / (4 - 3) = <strong>8개</strong></p>
<p>생산물 가격 P = 1,000원일 때</p>
<p>VMP = 1,000 × 8 = <strong>8,000원</strong></p>
<p><em>이윤극대화 조건: VMP = W이므로, 임금이 8,000원이면 4번째 노동자까지 고용한다.</em></p>`,
  },
  {
    num: 148, category: 'labor_market',
    title: '생산성 임금제에서의 임금 계산 문제를 풀이하시오.',
    frequency: '22-2, 19-3',
    keyword: '생산성임금제 계산',
    answer: `<h4>개념</h4>
<p>생산성임금제란 근로자의 생산성(노동생산성)에 연동하여 임금을 결정하는 제도이다.</p>
<h4>공식</h4>
<p><strong>임금인상률 = 노동생산성 증가율 + 물가상승률</strong></p>
<p>노동생산성 = 총생산량 / 근로자 수</p>
<h4>풀이 예시</h4>
<p>조건: 전년도 노동생산성 = 100, 금년도 노동생산성 = 110, 물가상승률 = 3%</p>
<p>노동생산성 증가율 = (110-100)/100 × 100 = <strong>10%</strong></p>
<p>적정 임금인상률 = 10% + 3% = <strong>13%</strong></p>`,
  },
  {
    num: 149, category: 'labor_market',
    title: '임금의 하방경직성의 의미와 발생 원인 5가지를 쓰시오.',
    frequency: '24-3, 23-2, 22-1, 18-2',
    keyword: '임금 하방경직성 원인',
    answer: `<h4>의미</h4>
<p>임금의 하방경직성이란 한번 인상된 임금이 경기 침체 등 경제 상황이 악화되더라도 쉽게 하락하지 않고 현재 수준을 유지하려는 현상을 말한다.</p>
<h4>발생 원인</h4>
<ol>
<li><strong>최저임금제</strong> : 법적으로 임금의 하한선이 정해져 있어 그 이하로 내릴 수 없다.</li>
<li><strong>노동조합의 교섭력</strong> : 강력한 노동조합이 임금 인하에 저항한다.</li>
<li><strong>장기 고용계약</strong> : 계약 기간 동안 임금 변동이 어렵다.</li>
<li><strong>효율임금이론</strong> : 기업이 근로자의 생산성을 높이기 위해 시장임금보다 높은 임금을 유지한다.</li>
<li><strong>화폐환상(money illusion)</strong> : 근로자가 명목임금 삭감에 민감하게 반응하여 실질임금보다 명목임금에 집착한다.</li>
</ol>`,
  },
  {
    num: 150, category: 'labor_market',
    title: '한계노동비용(MFC) 계산 문제를 풀이하시오.',
    frequency: '21-3, 19-2',
    keyword: '한계노동비용 계산',
    answer: `<h4>공식</h4>
<p><strong>한계노동비용(MFC)</strong> = △TC / △L (노동 1단위 추가 시 총비용 변화)</p>
<p>완전경쟁 노동시장에서: MFC = W (시장임금)</p>
<p>수요독점 노동시장에서: MFC > W (한계노동비용이 임금보다 크다)</p>
<h4>풀이 예시 (수요독점)</h4>
<p>조건: 노동공급함수 W = 100 + 10L</p>
<p>총노동비용 TC = W × L = (100 + 10L) × L = 100L + 10L²</p>
<p>MFC = dTC/dL = 100 + 20L</p>
<p>L = 5일 때: MFC = 100 + 20(5) = <strong>200</strong>, W = 100 + 10(5) = <strong>150</strong></p>
<p><em>수요독점에서는 MFC가 항상 W보다 크므로, 완전경쟁보다 적은 노동자를 고용하고 낮은 임금을 지불한다.</em></p>`,
  },
  {
    num: 154, category: 'labor_market',
    title: '노동시장 이론 3가지를 쓰고 설명하시오.',
    frequency: '22-1, 20-3',
    keyword: '노동시장 이론',
    answer: `<ol>
<li><strong>신고전학파 노동시장이론</strong> : 노동시장이 일반 상품시장과 동일한 원리로 작동한다고 본다. 임금은 노동의 수요와 공급에 의해 결정되며, 시장이 완전경쟁일 때 효율적 배분이 이루어진다.</li>
<li><strong>이중노동시장이론(분절노동시장이론)</strong> : 노동시장이 1차 노동시장(양호한 고용조건)과 2차 노동시장(열악한 고용조건)으로 분절되어 있다고 본다. 두 시장 간 이동이 제한적이다.</li>
<li><strong>내부노동시장이론</strong> : 기업 내부에 독자적인 노동시장이 형성되어 있다고 본다. 채용, 임금, 승진 등이 외부 노동시장이 아닌 기업 내 관행과 규칙에 의해 결정된다.</li>
</ol>`,
  },
  {
    num: 155, category: 'labor_market',
    title: '노동수요의 탄력성을 크게 하는 요인(마샬의 파생수요 법칙) 4가지를 쓰시오.',
    frequency: '25-2, 22-1, 21-2',
    keyword: '마샬 파생수요 법칙(힉스-마샬)',
    answer: `<ol>
<li><strong>생산물 수요의 탄력성이 클수록</strong> : 생산물 가격 변화에 수요가 민감하게 반응할수록 노동수요의 탄력성도 크다.</li>
<li><strong>다른 생산요소의 대체 가능성이 클수록</strong> : 노동을 기계 등 다른 요소로 대체하기 쉬울수록 임금 변화에 노동수요가 민감하게 반응한다.</li>
<li><strong>총생산비에서 노동비용이 차지하는 비중이 클수록</strong> : 노동비용 비중이 높으면 임금 변화가 생산비에 미치는 영향이 크므로 탄력성이 크다.</li>
<li><strong>다른 생산요소의 공급 탄력성이 클수록</strong> : 대체 요소의 공급이 탄력적이면 노동 대체가 용이하여 탄력성이 크다.</li>
</ol>`,
  },
  {
    num: 156, category: 'labor_market',
    title: '개별 노동공급곡선이 후방굴절(backward-bending)하는 이유를 설명하시오.',
    frequency: '25-3, 22-2, 20-4',
    keyword: '노동공급곡선 후방굴절',
    answer: `<p>개별 노동공급곡선은 일정 임금 수준까지는 우상향하다가, 임금이 충분히 높아지면 뒤로 굽어지는(후방굴절) 형태를 보인다.</p>
<h4>원인: 대체효과와 소득효과</h4>
<ol>
<li><strong>대체효과</strong> : 임금이 상승하면 여가의 기회비용이 커지므로, 여가 시간을 줄이고 노동시간을 늘린다. → 노동공급 증가</li>
<li><strong>소득효과</strong> : 임금이 상승하면 소득이 증가하므로, 여가(정상재)의 소비를 늘리고 노동시간을 줄인다. → 노동공급 감소</li>
</ol>
<p><strong>저임금 구간:</strong> 대체효과 > 소득효과 → 노동공급 증가 (우상향)</p>
<p><strong>고임금 구간:</strong> 소득효과 > 대체효과 → 노동공급 감소 (후방굴절)</p>`,
  },
  {
    num: 159, category: 'labor_market',
    title: '고용지표(실업률, 경제활동참가율) 종합 계산 문제를 풀이하시오.',
    frequency: '23-1, 22-1',
    keyword: '실업률/경활참가율 계산',
    answer: `<h4>핵심 공식 요약</h4>
<ol>
<li>경제활동인구 = 취업자 + 실업자</li>
<li>비경제활동인구 = 15세 이상 인구 - 경제활동인구</li>
<li><strong>실업률</strong> = (실업자 / 경활인구) × 100</li>
<li><strong>경활참가율</strong> = (경활인구 / 15세이상 인구) × 100</li>
<li><strong>고용률</strong> = (취업자 / 15세이상 인구) × 100</li>
</ol>
<h4>풀이 예시</h4>
<p>조건: 15세이상 인구 50,000, 취업자 25,000, 실업자 2,500</p>
<p>경활인구 = 25,000 + 2,500 = 27,500</p>
<p>실업률 = (2,500/27,500) × 100 ≒ <strong>9.09%</strong></p>
<p>경활참가율 = (27,500/50,000) × 100 = <strong>55%</strong></p>
<p>고용률 = (25,000/50,000) × 100 = <strong>50%</strong></p>`,
  },
  {
    num: 160, category: 'labor_market',
    title: '노동수요 함수에서 탄력성 계산 문제를 풀이하시오.',
    frequency: '21-2, 19-3',
    keyword: '노동수요함수 탄력성',
    answer: `<h4>풀이 예시</h4>
<p>조건: 노동수요함수 Ld = 200 - 4W, 현재 임금 W = 30</p>
<ol>
<li><strong>현재 노동수요량</strong>: Ld = 200 - 4(30) = 200 - 120 = <strong>80명</strong></li>
<li><strong>노동수요 탄력성</strong>:
<br/>Ed = |△Ld/△W × W/Ld| = |-4 × 30/80| = |(-120)/80| = <strong>1.5</strong></li>
<li><strong>판정</strong>: Ed = 1.5 > 1 이므로 <strong>탄력적</strong> (임금 변화에 고용이 민감하게 반응)</li>
</ol>
<p><em>탄력적이므로 임금이 상승하면 고용량이 크게 감소하고, 총 임금지급액도 감소한다.</em></p>`,
  },
  {
    num: 163, category: 'labor_market',
    title: '완전경쟁시장에서 이윤극대화 노동수요량 계산 문제를 풀이하시오.',
    frequency: '22-1, 20-3',
    keyword: '이윤극대화 계산 (완전경쟁)',
    answer: `<h4>이윤극대화 조건</h4>
<p><strong>VMP = W</strong> (한계생산가치 = 임금)</p>
<h4>풀이 예시</h4>
<p>조건: 생산함수 Q = 60L - 0.5L², 생산물 가격 P = 100, 임금 W = 1,000</p>
<ol>
<li>한계생산(MP) = dQ/dL = 60 - L</li>
<li>한계생산가치(VMP) = P × MP = 100(60 - L) = 6,000 - 100L</li>
<li>이윤극대화: VMP = W → 6,000 - 100L = 1,000</li>
<li>100L = 5,000 → <strong>L = 50명</strong></li>
</ol>
<p>생산량 Q = 60(50) - 0.5(50²) = 3,000 - 1,250 = <strong>1,750개</strong></p>
<p>총수입 = 100 × 1,750 = 175,000 / 총비용 = 1,000 × 50 = 50,000</p>
<p>이윤 = 175,000 - 50,000 = <strong>125,000</strong></p>`,
  },
  {
    num: 164, category: 'labor_market',
    title: '취업자 중 임금근로자 수 계산 문제를 풀이하시오.',
    frequency: '21-3, 19-1',
    keyword: '임금근로자 계산',
    answer: `<h4>주요 개념</h4>
<p><strong>취업자</strong> = 임금근로자 + 비임금근로자(자영업자 + 무급가족종사자)</p>
<h4>풀이 예시</h4>
<p>조건: 전체 취업자 = 24,000천명, 자영업자 = 5,000천명, 무급가족종사자 = 1,000천명</p>
<p>비임금근로자 = 5,000 + 1,000 = 6,000천명</p>
<p>임금근로자 = 24,000 - 6,000 = <strong>18,000천명</strong></p>
<p>임금근로자 비율 = (18,000/24,000) × 100 = <strong>75%</strong></p>`,
  },
  {
    num: 168, category: 'labor_market',
    title: '인적자본론에서 인적자본 투자의 대상(유형) 3가지를 쓰고 설명하시오.',
    frequency: '22-2, 21-1',
    keyword: '인적자본 투자 대상',
    answer: `<ol>
<li><strong>정규교육(학교교육)</strong> : 초등학교부터 대학까지의 정규 교육과정에 대한 투자이다. 일반적 지식과 기술을 습득하여 노동생산성을 향상시키며, 학력이 높을수록 임금이 높아지는 경향이 있다.</li>
<li><strong>직업훈련(현장훈련, OJT)</strong> : 기업 내에서 이루어지는 직업 관련 훈련에 대한 투자이다. 일반훈련(general training)과 특수훈련(specific training)으로 구분되며, 일반훈련의 비용은 근로자가, 특수훈련의 비용은 기업이 부담하는 경향이 있다.</li>
<li><strong>이주(migration)</strong> : 더 나은 고용 기회가 있는 지역이나 국가로 이동하는 것에 대한 투자이다. 이주 비용(이사, 정보 탐색, 심리적 비용 등)과 이주 후 기대되는 소득 증가를 비교하여 의사결정한다.</li>
</ol>`,
  },
  {
    num: 171, category: 'labor_market',
    title: '고용률과 경제활동참가율의 차이를 설명하고 계산하시오.',
    frequency: '22-2, 20-3',
    keyword: '고용률 vs 경활참가율',
    answer: `<h4>개념 비교</h4>
<table>
<tr><th>구분</th><th>고용률</th><th>경제활동참가율</th></tr>
<tr><td>공식</td><td>(취업자/15세이상인구)×100</td><td>(경활인구/15세이상인구)×100</td></tr>
<tr><td>분자</td><td>취업자만 포함</td><td>취업자 + 실업자 포함</td></tr>
<tr><td>특징</td><td>실질적인 고용 상황 반영</td><td>구직의향 포함한 경제활동 의사</td></tr>
</table>
<h4>풀이 예시</h4>
<p>조건: 15세이상 인구=50,000, 취업자=30,000, 실업자=2,000</p>
<p>고용률 = (30,000/50,000)×100 = <strong>60%</strong></p>
<p>경활참가율 = (32,000/50,000)×100 = <strong>64%</strong></p>`,
  },
  {
    num: 175, category: 'labor_market',
    title: '실업자 수 계산 문제를 풀이하시오.',
    frequency: '21-2, 19-3',
    keyword: '실업자 수 계산',
    answer: `<h4>공식</h4>
<p>실업자 = 경제활동인구 - 취업자</p>
<p>경제활동인구 = 15세 이상 인구 × (경제활동참가율/100)</p>
<h4>풀이 예시</h4>
<p>조건: 15세 이상 인구 = 40,000천명, 경활참가율 = 65%, 실업률 = 4%</p>
<p>경활인구 = 40,000 × 0.65 = 26,000천명</p>
<p>실업자 = 26,000 × 0.04 = <strong>1,040천명</strong></p>
<p>취업자 = 26,000 - 1,040 = <strong>24,960천명</strong></p>
<p>비경활인구 = 40,000 - 26,000 = <strong>14,000천명</strong></p>`,
  },
  {
    num: 176, category: 'labor_market',
    title: '이중노동시장론에서 1차 노동시장의 특징 5가지를 쓰시오.',
    frequency: '22-1, 20-2',
    keyword: '1차 노동시장 특징',
    answer: `<ol>
<li><strong>높은 임금 수준</strong> : 2차 노동시장에 비해 높은 임금과 양호한 보상 체계를 제공한다.</li>
<li><strong>고용 안정성</strong> : 장기 고용이 보장되고, 해고나 실업의 위험이 상대적으로 낮다.</li>
<li><strong>양호한 근로조건</strong> : 깨끗한 작업 환경, 복리후생, 산업안전 등 근로조건이 양호하다.</li>
<li><strong>승진 기회</strong> : 체계적인 승진 사다리(경력사다리)가 존재하여 내부 승진 기회가 많다.</li>
<li><strong>내부노동시장 발달</strong> : 기업 내부에서 교육·훈련이 활발하고, 채용보다 내부 이동이 중요하다.</li>
</ol>`,
  },
  {
    num: 177, category: 'labor_market',
    title: '던롭(Dunlop)의 노사관계 시스템 이론의 구성요소 3가지를 쓰고 설명하시오.',
    frequency: '24-2, 22-2, 21-1',
    keyword: '던롭 노사관계 시스템',
    answer: `<p>던롭은 노사관계를 하나의 시스템으로 보고, 이 시스템이 <strong>행위자(actors)</strong>, <strong>환경(contexts)</strong>, <strong>이데올로기(ideology)</strong>, <strong>규칙(rules)</strong>으로 구성된다고 보았다.</p>
<h4>3대 행위자</h4>
<ol>
<li><strong>근로자와 근로자 단체(노동조합)</strong> : 임금, 근로조건 등에 관한 근로자의 이해를 대변하고 교섭하는 주체이다.</li>
<li><strong>경영자와 경영자 단체(사용자)</strong> : 기업의 경영 의사결정을 하고 근로조건을 결정하는 주체이다.</li>
<li><strong>정부와 전문 기관</strong> : 노사관계의 규칙을 제정하고 분쟁을 조정·중재하며 노동 정책을 수립하는 주체이다.</li>
</ol>
<h4>환경(맥락)</h4>
<p>기술적 특성, 시장·예산 제약, 권력 관계의 3가지 환경이 노사관계에 영향을 미친다.</p>`,
  },

  /* ===================================================================
     추가 문항 178~201 (2018, 2024, 2025 확장)
     =================================================================== */

  /* ---------- 직업상담학 (counseling) 2025/2024/2018 추가 ---------- */
  {
    num: 178, category: 'counseling',
    title: '하렌(Harren)의 의사결정 유형 3가지를 쓰고 설명하시오.',
    frequency: '25-2',
    keyword: '하렌(Harren) 의사결정 유형',
    answer: `<ol>
<li><strong>합리적 유형</strong> : 정보를 체계적으로 수집하고 논리적으로 분석하여 신중하게 의사결정을 내리는 유형이다.</li>
<li><strong>직관적 유형</strong> : 감정이나 느낌에 기반하여 빠르게 의사결정을 내리는 유형이다. 결정 과정에서 상상력과 감각을 활용한다.</li>
<li><strong>의존적 유형</strong> : 타인의 기대나 의견에 의존하여 의사결정을 내리는 유형이다. 책임을 타인에게 전가하려는 경향이 있다.</li>
</ol>`,
  },
  {
    num: 179, category: 'counseling',
    title: '톨버트(Tolbert)가 제시한 집단직업상담의 핵심요소 6가지를 쓰시오.',
    frequency: '25-3',
    keyword: '톨버트(Tolbert) 집단직업상담 핵심요소',
    answer: `<ol>
<li>구성원 간의 상호작용</li>
<li>집단 목표의 명확한 설정</li>
<li>구성원 간의 신뢰와 응집력</li>
<li>집단 규범의 형성</li>
<li>구성원 개인의 목표와 집단 목표의 통합</li>
<li>집단 경험의 일반화 및 적용</li>
</ol>`,
  },
  {
    num: 180, category: 'counseling',
    title: '특성-요인 상담의 3가지 기본가정(기본전제)을 쓰고 설명하시오.',
    frequency: '25-3',
    keyword: '특성-요인 상담 기본가정',
    answer: `<ol>
<li><strong>개인차의 가정</strong> : 각 개인은 고유한 특성(흥미, 적성, 능력 등)을 가지고 있으며, 이러한 특성은 측정 가능하다.</li>
<li><strong>직업차의 가정</strong> : 각 직업은 고유한 요구 조건(요인)이 있으며, 직업마다 필요한 능력과 특성이 다르다.</li>
<li><strong>매칭의 가정</strong> : 개인의 특성과 직업의 요인을 합리적으로 연결(매칭)하면 직업 만족과 성공을 높일 수 있다.</li>
</ol>`,
  },
  {
    num: 181, category: 'counseling',
    title: '아들러(Adler)가 주장한 열등감 콤플렉스의 원인 3가지를 쓰시오.',
    frequency: '18-1',
    keyword: '아들러 열등감 콤플렉스 원인',
    answer: `<ol>
<li><strong>기관 열등감</strong> : 선천적으로 신체적 결함이나 약점을 가진 경우 열등감이 형성된다.</li>
<li><strong>과잉보호(응석받이)</strong> : 과잉보호를 받고 자란 아이는 독립심이 부족하여 사회에 나갔을 때 열등감을 느끼게 된다.</li>
<li><strong>양육태만(무시)</strong> : 부모로부터 무시당하거나 방치된 아이는 자신이 무가치하다고 느끼며 열등감이 형성된다.</li>
</ol>`,
  },
  {
    num: 182, category: 'counseling',
    title: '의사교류분석 상담(TA)의 제한점 3가지를 쓰시오.',
    frequency: '18-1',
    keyword: '교류분석(TA) 제한점',
    answer: `<ol>
<li>이론의 단순화로 인해 인간의 복잡한 심리를 충분히 설명하지 못할 수 있다.</li>
<li>자아상태 분석이 지나치게 도식적이어서 개인의 독특한 경험을 간과할 수 있다.</li>
<li>상담자의 주관적 판단에 의존하여 분석의 객관성이 떨어질 수 있다.</li>
</ol>`,
  },

  /* ---------- 직업심리학 (psychology) 2025/2024/2018 추가 ---------- */
  {
    num: 183, category: 'psychology',
    title: '규준의 종류 중 발달규준 3가지를 쓰고 각각에 대해 설명하시오.',
    frequency: '25-1',
    keyword: '발달규준',
    answer: `<ol>
<li><strong>연령규준</strong> : 특정 연령 집단의 평균 수행 수준을 기준으로 개인의 점수를 해석하는 규준이다. 같은 연령대의 평균과 비교하여 발달 수준을 파악한다.</li>
<li><strong>학년규준</strong> : 특정 학년 집단의 평균 수행 수준을 기준으로 하는 규준이다. 학업 성취도검사 등에서 주로 사용된다.</li>
<li><strong>서열규준</strong> : 발달 단계에서 특정 과제를 수행할 수 있는 순서를 기준으로 하는 규준이다. 발달의 순서성을 반영한다.</li>
</ol>`,
  },
  {
    num: 184, category: 'psychology',
    title: '개념준거와 실제준거의 의미를 각각 설명하시오.',
    frequency: '25-1',
    keyword: '개념준거 / 실제준거',
    answer: `<ol>
<li><strong>개념준거(궁극적 준거)</strong> : 측정하고자 하는 이상적이고 추상적인 개념으로, 실제로는 완벽하게 측정할 수 없는 이론적 준거이다. 예) 직무 수행 능력의 이상적 정의</li>
<li><strong>실제준거(조작적 준거)</strong> : 개념준거를 실제로 측정할 수 있도록 조작적으로 정의한 것으로, 현실적으로 사용 가능한 측정치이다. 예) 상사 평가, 생산량, 매출액 등</li>
</ol>`,
  },
  {
    num: 185, category: 'psychology',
    title: '심리검사 점수의 분산 정도를 판단하기 위해 사용되는 기준 2가지를 쓰시오.',
    frequency: '25-3',
    keyword: '분산 판단 기준 (범위/표준편차)',
    answer: `<ol>
<li><strong>범위(Range)</strong> : 검사 점수의 최대값에서 최소값을 뺀 값으로, 점수가 퍼져 있는 전체 폭을 나타낸다. 계산이 간편하지만 극단값에 영향을 받는다.</li>
<li><strong>표준편차(Standard Deviation)</strong> : 각 점수가 평균으로부터 떨어져 있는 정도의 평균으로, 점수의 산포도를 가장 정확하게 나타내는 지표이다. 분산의 제곱근이다.</li>
</ol>`,
  },
  {
    num: 186, category: 'psychology',
    title: '비확률표집방법 3가지를 쓰고 각각에 대해 설명하시오.',
    frequency: '24-2',
    keyword: '비확률표집방법',
    answer: `<ol>
<li><strong>편의표집(우연적 표집)</strong> : 조사자가 접근하기 쉬운 대상을 임의로 선택하는 방법이다. 가장 간편하지만 대표성이 낮다.</li>
<li><strong>유의표집(판단표집)</strong> : 조사자가 연구 목적에 적합하다고 판단되는 대상을 의도적으로 선택하는 방법이다.</li>
<li><strong>할당표집</strong> : 모집단의 특성(성별, 연령 등)에 따라 할당량을 정한 후, 각 할당량에 맞게 편의적으로 표본을 추출하는 방법이다.</li>
</ol>`,
  },
  {
    num: 187, category: 'psychology',
    title: '코틀(Cottle)의 원형검사에서 원의 의미 3가지를 쓰시오.',
    frequency: '25-1',
    keyword: '코틀(Cottle) 원형검사',
    answer: `<ol>
<li><strong>원의 크기</strong> : 과거, 현재, 미래 각 시간 영역에 대해 개인이 부여하는 중요성 또는 비중을 나타낸다. 원이 클수록 해당 시간 영역을 중요하게 인식한다.</li>
<li><strong>원의 위치(거리)</strong> : 각 시간 영역 간의 심리적 거리를 나타낸다. 원이 가까울수록 시간 영역 간 연결성이 높다고 인식한다.</li>
<li><strong>원의 겹침 정도</strong> : 시간 영역 간의 통합 정도를 나타낸다. 겹치는 부분이 클수록 과거-현재-미래가 통합적으로 연결되어 있다고 인식한다.</li>
</ol>`,
  },
  {
    num: 188, category: 'psychology',
    title: '긴즈버그(Ginzberg)의 직업선택 현실기의 3가지 하위단계를 쓰고 설명하시오.',
    frequency: '24-3, 18-2',
    keyword: '긴즈버그(Ginzberg) 현실기 하위단계',
    answer: `<ol>
<li><strong>탐색단계</strong> : 자신의 흥미, 능력, 가치관 등을 고려하여 가능한 직업 대안을 탐색하는 단계이다. 다양한 직업 정보를 수집하고 비교한다.</li>
<li><strong>구체화단계(결정화)</strong> : 탐색한 직업 대안 중에서 구체적인 진로 방향을 설정하는 단계이다. 특정 직업 분야로 범위를 좁혀간다.</li>
<li><strong>실행단계(특수화)</strong> : 최종적으로 선택한 직업을 실현하기 위해 구체적인 행동을 취하는 단계이다. 교육이나 훈련을 받고 취업 활동을 시작한다.</li>
</ol>`,
  },
  {
    num: 189, category: 'psychology',
    title: '실존주의 상담에서 인간 본성에 대한 기본 가정 4가지를 쓰시오.',
    frequency: '24-2',
    keyword: '실존주의 인간본성 가정',
    answer: `<ol>
<li><strong>인간은 자유로운 존재이다</strong> : 인간은 자유롭게 선택할 수 있으며, 그 선택에 대한 책임을 진다.</li>
<li><strong>인간은 유한한 존재이다</strong> : 죽음은 피할 수 없으며, 이를 인식함으로써 삶의 의미를 추구하게 된다.</li>
<li><strong>인간은 고독한 존재이다</strong> : 궁극적으로 인간은 혼자이며, 이 고독을 수용해야 한다.</li>
<li><strong>인간은 의미를 추구하는 존재이다</strong> : 인간은 삶의 의미를 스스로 창조하고 발견해야 한다.</li>
</ol>`,
  },

  /* ---------- 직업정보론 (jobinfo) 2025/2024/2018 추가 ---------- */
  {
    num: 190, category: 'jobinfo',
    title: '민간직업정보의 특성을 3가지 쓰시오.',
    frequency: '25-2',
    keyword: '민간직업정보 특성',
    answer: `<ol>
<li><strong>상업성</strong> : 민간이 제작하여 유료로 판매하므로 수익 창출이 목적이다.</li>
<li><strong>전문성</strong> : 특정 분야나 산업에 대해 심층적이고 전문적인 정보를 제공한다.</li>
<li><strong>신속성</strong> : 시장 변화에 빠르게 대응하여 최신 정보를 제공할 수 있다.</li>
<li><strong>편향 가능성</strong> : 특정 기업이나 집단의 이해관계가 반영될 수 있어 객관성이 떨어질 수 있다.</li>
</ol>`,
  },
  {
    num: 191, category: 'jobinfo',
    title: '직업정보 가공 시 유의사항 6가지를 쓰시오.',
    frequency: '25-3',
    keyword: '직업정보 가공 유의사항',
    answer: `<ol>
<li>직업정보의 정확성과 최신성을 확인해야 한다.</li>
<li>정보의 출처를 명확히 밝혀야 한다.</li>
<li>이용자가 이해하기 쉬운 용어와 형식을 사용해야 한다.</li>
<li>편견이나 고정관념이 반영되지 않도록 주의해야 한다.</li>
<li>관련 법규를 준수해야 한다.</li>
<li>직업에 대한 긍정적·부정적 측면을 균형 있게 제시해야 한다.</li>
</ol>`,
  },
  {
    num: 192, category: 'jobinfo',
    title: '한국표준직업분류에서 직업분류의 일반원칙 2가지를 쓰고 설명하시오.',
    frequency: '25-1',
    keyword: 'KSCO 직업분류 일반원칙',
    answer: `<ol>
<li><strong>포괄성의 원칙</strong> : 모든 직업 활동을 직업분류 체계 내에 포함시켜야 한다. 어떠한 직업도 분류 체계에서 누락되어서는 안 된다.</li>
<li><strong>배타성의 원칙</strong> : 하나의 직업 활동은 분류 체계 내 하나의 항목에만 분류되어야 한다. 동일한 직업이 두 개 이상의 항목에 중복 분류되어서는 안 된다.</li>
</ol>`,
  },
  {
    num: 193, category: 'jobinfo',
    title: '한국표준산업분류 11차 개정의 특징 3가지를 쓰시오.',
    frequency: '25-3',
    keyword: 'KSIC 11차 개정 특징',
    answer: `<ol>
<li>디지털 경제와 플랫폼 산업 등 신산업 환경을 반영하여 분류체계를 개편하였다.</li>
<li>국제표준산업분류(ISIC Rev.5)와의 비교가능성을 높였다.</li>
<li>산업구조 변화에 따라 서비스업 분야의 세분류를 확대하였다.</li>
</ol>`,
  },
  {
    num: 194, category: 'jobinfo',
    title: '한국표준직업분류에서 "직업"으로 규정하기 위한 4가지 요건을 쓰고 설명하시오.',
    frequency: '24-1',
    keyword: 'KSCO 직업 규정 요건',
    answer: `<ol>
<li><strong>경제성</strong> : 경제적 보수(수입)를 목적으로 하는 활동이어야 한다.</li>
<li><strong>계속성</strong> : 일시적인 활동이 아니라 계속적으로 수행하는 활동이어야 한다.</li>
<li><strong>사회성</strong> : 사회적으로 유용하고 사회에 기여하는 활동이어야 한다.</li>
<li><strong>윤리성</strong> : 법률이나 사회 윤리에 위배되지 않는 활동이어야 한다.</li>
</ol>`,
  },
  {
    num: 195, category: 'jobinfo',
    title: '경력개발 프로그램의 초기·중기·말기 단계별 예시를 쓰시오.',
    frequency: '24-1',
    keyword: '경력개발 프로그램 단계별',
    answer: `<ol>
<li><strong>초기 단계</strong> : 자기이해 활동(흥미검사, 적성검사), 직업세계 탐색, 직업 정보 수집, 진로 목표 설정 등</li>
<li><strong>중기 단계</strong> : 경력 계획 수립, 필요한 교육·훈련 이수, 인턴십·현장실습, 멘토링 프로그램 참여 등</li>
<li><strong>말기 단계</strong> : 이력서·자기소개서 작성, 면접 기술 훈련, 구직 활동, 취업 후 적응 지원, 추수지도 등</li>
</ol>`,
  },
  {
    num: 196, category: 'jobinfo',
    title: '입직률(accession rate)을 계산하시오.',
    frequency: '25-1',
    keyword: '입직률 계산',
    answer: `<h4>공식</h4>
<p><strong>입직률 = (입직자 수 / 전월 말 사원 수) × 100</strong></p>
<p>입직자 = 신규채용 인원 + 전입 인원</p>
<h4>풀이 예시</h4>
<p>조건: 9월 말 사원 수 = 2,000명, 신규채용 = 200명, 전입 = 100명</p>
<p>입직자 = 200 + 100 = 300명</p>
<p>10월 입직률 = (300 / 2,000) × 100 = <strong>15%</strong></p>`,
  },

  /* ---------- 노동시장론 (labor_market) 2025/2024/2018 추가 ---------- */
  {
    num: 197, category: 'labor_market',
    title: '행동주의 상담에서 노출치료법의 3가지 방법을 쓰고 설명하시오.',
    frequency: '18-2',
    keyword: '노출치료법 3가지',
    answer: `<ol>
<li><strong>실제적 노출(in vivo exposure)</strong> : 불안을 유발하는 실제 자극이나 상황에 직접 노출시키는 방법이다.</li>
<li><strong>상상적 노출(imaginal exposure)</strong> : 불안을 유발하는 장면을 상상하게 하여 간접적으로 노출시키는 방법이다.</li>
<li><strong>체계적 둔감법(systematic desensitization)</strong> : 이완 상태에서 불안 위계에 따라 점진적으로 노출시키는 방법이다.</li>
</ol>`,
  },
  {
    num: 198, category: 'labor_market',
    title: '노동공급의 결정요인 5가지를 쓰시오.',
    frequency: '18-3',
    keyword: '노동공급 결정요인',
    answer: `<ol>
<li><strong>임금 수준</strong> : 임금이 높을수록 노동공급이 증가하는 경향이 있다.</li>
<li><strong>인구 규모</strong> : 생산가능인구가 많을수록 잠재적 노동공급이 증가한다.</li>
<li><strong>비근로소득</strong> : 이자, 배당, 임대료 등 비근로소득이 높으면 노동공급이 감소한다.</li>
<li><strong>사회·문화적 요인</strong> : 여성의 경제활동 참여에 대한 사회적 인식, 교육 수준 등이 영향을 미친다.</li>
<li><strong>제도적 요인</strong> : 세금, 사회보장제도, 보육지원 등 정부 정책이 노동공급에 영향을 미친다.</li>
</ol>`,
  },
  {
    num: 199, category: 'labor_market',
    title: '노동조합의 임금효과 중 이전효과(spillover effect)와 위협효과(threat effect)를 설명하시오.',
    frequency: '18-3',
    keyword: '노동조합 이전효과/위협효과',
    answer: `<ol>
<li><strong>이전효과(spillover effect)</strong> : 노동조합이 조직된 기업에서 임금을 인상하면, 해당 기업에서 해고된 근로자들이 비조직 부문으로 이동하여 비조직 부문의 노동공급이 증가하고, 결과적으로 비조직 부문의 임금이 하락하는 효과이다.</li>
<li><strong>위협효과(threat effect)</strong> : 비조직 기업의 사용자가 자사 근로자의 노동조합 결성을 막기 위해 선제적으로 임금을 인상하는 효과이다. 노동조합의 존재 자체가 비조직 부문의 임금을 상승시키는 간접적 효과를 가진다.</li>
</ol>`,
  },
  {
    num: 200, category: 'labor_market',
    title: '부가급여의 의미와 사용자·근로자가 부가급여를 선호하는 이유를 각각 쓰시오.',
    frequency: '18-1',
    keyword: '부가급여 선호 이유',
    answer: `<h4>의미</h4>
<p>부가급여(fringe benefits)란 기본급 외에 사용자가 근로자에게 제공하는 각종 비임금적 보상을 말한다. 예) 건강보험, 퇴직연금, 유급휴가, 식비 지원 등</p>
<h4>사용자가 선호하는 이유</h4>
<ol>
<li>세금 혜택을 받을 수 있어 비용을 절감할 수 있다.</li>
<li>우수 인력의 이직을 방지하고 근로자의 충성도를 높일 수 있다.</li>
</ol>
<h4>근로자가 선호하는 이유</h4>
<ol>
<li>현금 임금보다 세금 부담이 적어 실질적 혜택이 크다.</li>
<li>건강보험 등 개인이 직접 가입하기 어려운 혜택을 받을 수 있다.</li>
</ol>`,
  },
  {
    num: 201, category: 'labor_market',
    title: '직무스트레스의 조절변인 3가지를 쓰고 설명하시오.',
    frequency: '18-2',
    keyword: '직무스트레스 조절변인',
    answer: `<ol>
<li><strong>사회적 지지</strong> : 가족, 동료, 상사 등으로부터 받는 정서적·물질적 지원으로, 사회적 지지가 높을수록 스트레스의 부정적 영향이 완화된다.</li>
<li><strong>자기효능감</strong> : 특정 상황에서 필요한 행동을 성공적으로 수행할 수 있다는 개인의 믿음으로, 자기효능감이 높을수록 스트레스에 대한 대처 능력이 향상된다.</li>
<li><strong>통제감(통제 소재)</strong> : 자신의 삶과 환경을 통제할 수 있다고 느끼는 정도로, 내적 통제 소재를 가진 사람이 스트레스에 더 효과적으로 대처한다.</li>
</ol>`,
  },
];

/** 카테고리별 문항 필터 */
export function getQuestionsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return SILGI_FREQUENT;
  return SILGI_FREQUENT.filter(q => q.category === categoryId);
}

/** 전체 문항 수 */
export function getTotalCount() {
  return SILGI_FREQUENT.length;
}

/** 카테고리별 문항 수 */
export function getCategoryCounts() {
  const counts = {};
  for (const cat of FREQUENT_CATEGORIES) {
    if (cat.id === 'all') continue;
    counts[cat.id] = SILGI_FREQUENT.filter(q => q.category === cat.id).length;
  }
  counts.all = SILGI_FREQUENT.length;
  return counts;
}
