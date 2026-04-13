/* ============================================
   JobPath - D-1 빈출개념 노트 (에듀윌 2026)
   직업상담사 2급 필기 핵심 120개 빈출개념
   5과목 분류 | ★ 중요도 표시
   ============================================ */

export const KEYNOTE_CATEGORIES = [
  { id: 'all', label: '전체', color: '#6366F1', icon: 'fa-solid fa-list' },
  { id: 'psychology', label: '직업심리', color: '#8B5CF6', icon: 'fa-solid fa-brain' },
  { id: 'counseling', label: '직업상담 및 취업지원', color: '#3B82F6', icon: 'fa-solid fa-comments' },
  { id: 'jobinfo', label: '직업정보', color: '#10B981', icon: 'fa-solid fa-circle-info' },
  { id: 'labor_market', label: '노동시장', color: '#F59E0B', icon: 'fa-solid fa-chart-line' },
  { id: 'labor_law', label: '고용노동관계법규', color: '#EF4444', icon: 'fa-solid fa-scale-balanced' },
];

export const KEYNOTE_DATA = [
  /* ===================================================================
     1과목: 직업심리 (psychology) — 01~33
     =================================================================== */
  {
    num: 1, category: 'psychology', stars: 4,
    title: '파슨스의 직업선택 3요인',
    content: `<ul>
<li><strong>자신에 대한 이해</strong>: 자신의 흥미, 적성, 능력, 가치관 등 자신에 대한 명확한 이해</li>
<li><strong>직업에 대한 이해</strong>: 직업에서의 성공, 이점, 보상, 자격요건, 기회 등 직업세계에 대한 지식</li>
<li><strong>자신과 직업세계와의 연결</strong>: 개인적인 요인과 직업관련 자격요건 등의 정보를 기초로 한 현명한 선택</li>
</ul>`,
  },
  {
    num: 2, category: 'psychology', stars: 4,
    title: '홀랜드의 직업선택이론',
    content: `<ul>
<li><strong>특징</strong>: 직업적응방식을 6가지 종류로 구분하고, 직업환경을 6가지 차원으로 구분</li>
<li><strong>6가지 성격유형</strong>: 현실형, 탐구형, 예술형, 사회형, 진취형, 관습형</li>
<li><strong>5가지 주요 개념</strong>: 일관성, 차별성, 정체성, 일치성, 계측성</li>
</ul>`,
  },
  {
    num: 3, category: 'psychology', stars: 4,
    title: '데이비스와 롭퀴스트의 직업적응이론',
    content: `<ul>
<li><strong>특징</strong>: 직업적응 프로젝트는 근로자의 적응이 직업만족과 연관된다는 관점에서 출발</li>
<li><strong>직업적응양식</strong>
<ul>
<li>직업성격 측면: 민첩성, 역량, 리��, 지구력</li>
<li>직업적응방식 측면: 끈기(인내), 적극성, 반응성, 융통성</li>
</ul></li>
<li><strong>검사도구</strong>: 미네소타 중요도 질문지(MIQ), 미네���타 직무기술 질���지(MJDQ), 미네소타 직무만족 질문지(MSQ)</li>
</ul>`,
  },
  {
    num: 4, category: 'psychology', stars: 5,
    title: '긴즈버그의 진로발달이론',
    content: `<ul>
<li><strong>특징</strong>: 직업선택은 하나의 발달과정이며, 일련의 결정들이 계속적으로 이루어지는 과정</li>
<li><strong>발달단계</strong>: 환상기 → 잠정기(흥미단계, 능력단계, 가치단계, 전환단계) → 현실기(탐색단계, 구체화단��, 특수화단계)</li>
</ul>`,
  },
  {
    num: 5, category: 'psychology', stars: 5,
    title: '수퍼의 진로발달이론',
    content: `<ul>
<li><strong>특징</strong>: 개인과 주변환경 간의 상호작용을 통해 자아개념이 발달</li>
<li><strong>발달단계</strong>: 성장기 → 탐색기 → 확립기 → 유지기 → 쇠퇴기</li>
<li><strong>진로아치문 모델</strong>: 왼쪽 기둥(개인 측면), 오른쪽 기둥(사회·경제적 측면)</li>
</ul>`,
  },
  {
    num: 6, category: 'psychology', stars: 4,
    title: '고트프레드슨의 직업포부 발달이론',
    content: `<ul>
<li><strong>특징</strong>: 진로결정에 있어 제한(한계)과 타협(절충) 중시</li>
<li><strong>발달단계</strong>: 힘과 크기 지향성 → 성역할 지향성 → 사회적 가치 지향성 → 내적, 고유한 자아 지향성</li>
</ul>`,
  },
  {
    num: 7, category: 'psychology', stars: 4,
    title: '로의 욕구이론',
    content: `<ul>
<li><strong>특징</strong>: 직업흥미가 아동기 부모-자녀 관계에 의해 영향을 받는다고 봄</li>
<li><strong>8가지 직업군</strong>: 서비스직, 비즈니스직, 단체직, 기술직, 옥외활동직, 과학직, 예능직, 일반문화직</li>
<li><strong>직업수준 6단계</strong>: 고급 전문관리, 중급 전문관리, 준전문관리, 숙련직, 반숙련직, 비숙련직</li>
</ul>`,
  },
  {
    num: 8, category: 'psychology', stars: 4,
    title: '크롬볼츠의 사회학습이론',
    content: `<ul>
<li><strong>특징</strong>: 직업선택은 개인이 통제할 수 없는 복잡한 환경적 요인의 결과라고 봄</li>
<li><strong>진로결정에 영향을 미치는 요인</strong>: 유전적 요인과 특별한 능력, 환경적 조건과 사건, 학습경험, 과제접근기술</li>
</ul>`,
  },
  {
    num: 9, category: 'psychology', stars: 3,
    title: '인지적 정보처리이론',
    content: `<ul>
<li><strong>특징</strong>: 개인에게 학습기회를 제공함으로써 개인의 처리능력을 발전시키는 것을 목적으로 함</li>
<li><strong>진로문제해결의 과정</strong>: 의사소통, 분석, 통합 또는 종합, 평가 또는 가치부여, 실행</li>
</ul>`,
  },
  {
    num: 10, category: 'psychology', stars: 3,
    title: '사회인지 진로이론',
    content: `<ul>
<li><strong>특징</strong>: 진로발달과 선택에서 진로와 관련된 자신에 대한 평가와 믿음의 인지적 측면을 강조</li>
<li><strong>상호적 결정론</strong>: 개인, 행동, 환경(상황)의 3변인이 상호작용을 함</li>
<li><strong>3가지 영역 모델</strong>: 흥미모형, 선택모형, 수행모형</li>
</ul>`,
  },
  {
    num: 11, category: 'psychology', stars: 3,
    title: '가치중심적 진로 접근모형의 명제',
    content: `<ul>
<li>개인이 우선권을 부여하는 가치들은 그리 많지 않음</li>
<li>가치는 환경 속에서 가치를 담은 정보를 획득함으로써 학습됨</li>
<li>생애만족은 중요한 모든 가치들을 만족시키는 생애역할들에 의존함</li>
</ul>`,
  },
  {
    num: 12, category: 'psychology', stars: 4,
    title: '심리검사의 목적과 용도',
    content: `<ul>
<li><strong>개인적 기능</strong>: 자기이해 증진</li>
<li><strong>예측적 기능</strong>: 개인의 특성을 파악하여 개인의 수행 예측</li>
<li><strong>진단적 기능(분류적 기능)</strong>: 개인의 장단점 파악</li>
<li><strong>조사적 기능</strong>: 특정 집단의 성향이나 일반적 행동경향 조사</li>
</ul>`,
  },
  {
    num: 13, category: 'psychology', stars: 4,
    title: '규준참조검사와 준거참조검사',
    content: `<ul>
<li><strong>규준참조검사</strong>: 개인의 점수를 다른 사람의 점수와 비교해서 상대적으로 어떤 수준인지를 알아보는 검사</li>
<li><strong>준거참조검사</strong>: 검사점수를 타인과 비교하는 것이 아니라, 어떤 기준점수와 비교해서 이용하는 검사</li>
</ul>`,
  },
  {
    num: 14, category: 'psychology', stars: 5,
    title: '질적 측정도구',
    content: `<ul>
<li><strong>자기효능감 척도</strong>: 어떤 과제를 어느 정도 수준으로 수행할 수 있는 능력을 갖추었다고 스스로 판단하는지의 정도를 측정</li>
<li><strong>직업가계도(제노그램)</strong>: 내담자의 가족 내 직업적 계보를 통해 내담자의 직업에 대한 고정관념이나 직업가치 및 흥미 등의 근본 원인을 파악</li>
<li><strong>직업카드분류</strong>: 직업카드를 사용하여 직업을 선호군·혐오군·미결정중성군으로 분류하여 개인의 직업선택의 동기와 흥미 및 가치관을 탐색</li>
<li><strong>역할놀이</strong>: 가상 상황에서 내담자의 역할활동에 대한 관찰을 통해 내담자의 직업관련 사회적 기술을 파악</li>
</ul>`,
  },
  {
    num: 15, category: 'psychology', stars: 4,
    title: '확률표집방법',
    content: `<ul>
<li><strong>단순무선표집</strong>: 구성원들에게 일련번호를 부여하고, 이 번호들 중에서 무작위로 필요한 만큼 표집</li>
<li><strong>층화표집</strong>: 모집단이 서로 다른 하위집단으로 구성되어 있는 경우 각 집단에서 필요한 만큼의 단순무작위표집을 사용해 표본을 추출</li>
<li><strong>집락표집(군집표집)</strong>: 모집단을 서로 동질적인 집단으로 구분하여 해당되는 집단 자체를 표본으로 추출</li>
<li><strong>체계적 표집(계통표집)</strong>: 모집단 목록에서 무작위로 처음 'K'번째 요소를 뽑고, 이를 토대로 일정한 순서 및 규칙에 따라 이후의 표본을 추출</li>
</ul>`,
  },
  {
    num: 16, category: 'psychology', stars: 3,
    title: '집단 내 규준',
    content: `<ul>
<li><strong>백분위 점수</strong>: 개인이 표준화된 집단에서 차지하는 상대적 위치를 가리키는 것으로, 개인의 점수를 100개의 동일한 구간에서 순위를 정하는 것</li>
<li><strong>표준점수</strong>: 원점수를 주어진 집단의 평균을 중심으로 분포의 표준편차(등간척도)로 전환시킨 점수</li>
<li><strong>표준등급</strong>: 9등급 또는 스테나인 점수라고 하며, 원점수를 1~9등급까지 범주로 나누는 것</li>
</ul>`,
  },
  {
    num: 17, category: 'psychology', stars: 5,
    title: '신뢰도',
    content: `<ul>
<li><strong>검사-재검사신뢰도</strong>: 동일한 사람에게 동일한 검사를 서로 다른 시기에 두 번 실시하여 검사점수들 간의 상관관계를 알아보는 것으로 신뢰도를 추정</li>
<li><strong>동형검사신뢰도</strong>: 동일한 수검자에게 첫 번째 실시한 검사와 동일한 유형의 검사를 실시하여 두 검사점수 간의 상관계수에 의해 신뢰도를 추정</li>
<li><strong>반분신뢰도</strong>: 하나의 검사를 둘로 나누어 두 검사 간 동질성과 일치성을 비교하는 방법</li>
<li><strong>문항 내적 합치도</strong>: 한 검사 내의 문항 하나하나를 각각의 독립된 검사로 보고 이들 간의 일치성, 동질성, 합치성의 상관계수를 구하는 방법</li>
</ul>`,
  },
  {
    num: 18, category: 'psychology', stars: 3,
    title: '신뢰도 계수에 영향을 미치는 요인',
    content: `<ul>
<li>개인차가 클수록 커짐</li>
<li>검사 문항의 수가 증가할수록 신뢰도는 증가 (다만 정비례하여 커지는 것은 아님)</li>
<li>문항반응 수가 적정한 크기를 유지할 때 커짐</li>
<li>신뢰도 계수는 신뢰도 측정방법에 따라서 달라질 수 있음</li>
</ul>`,
  },
  {
    num: 19, category: 'psychology', stars: 5,
    title: '타당도',
    content: `<ul>
<li><strong>준거타당도</strong>: 어떤 심리검사가 특정 준거와 어느 정도 관련성이 있는지를 알아보는 것으로, 예언타당도와 동시타당도가 있음</li>
<li><strong>안면타당도</strong>: 검사를 받는 사람들에게 타당도를 묻는 것으로, 일반인에게 그 검사가 타당한 것처럼 보이는가를 뜻함</li>
<li><strong>내용타당도</strong>: 검사의 문항들이 그 검사가 측정하고자 하는 내용 영역을 얼마나 잘 반영하고 있는지의 정도</li>
<li><strong>구성타당도</strong>: 측정하고자 하는 추상적 개념인자들이 실제로 측정도구에 의해 제대로 측정되었는지의 정도를 나타내는 것으로, 수렴타당도, 변별타당도, 요인분석법이 있음</li>
</ul>`,
  },
  {
    num: 20, category: 'psychology', stars: 4,
    title: '준거타당도의 크기에 영향을 미치는 요인',
    content: `<ul>
<li><strong>표집오차</strong>: 조사대상자가 모집단의 전체가 아니기 때문에 생기는 오차로 모집단 조사를 위한 표본의 표집과정에서 초래되는 데이터 수집의 오차</li>
<li><strong>범위제한</strong>: 준거타당도 계산을 위해 얻은 자료들이 검사점수와 준거점수의 전체 범위를 포괄하지 않고 일부 범위만을 포괄하는 경우의 상관계수가 실제 상관계수보다 작게 나타나는 것</li>
<li><strong>준거측정치의 타당도</strong>: 준거측정도구의 준거측정치(실제준거)가 해당 개념준거를 얼마나 잘 반영하는가의 문제</li>
<li><strong>준거측정치의 신뢰도</strong>: 준거측정치의 신뢰도가 낮으면 검사의 준거타당도도 낮아지게 됨</li>
</ul>`,
  },
  {
    num: 21, category: 'psychology', stars: 5,
    title: '웩슬러 성인용 지능검사(WAIS)',
    content: `<ul>
<li><strong>언어성 검사의 하위검사</strong>: 기본지식, 공통성, 산수, 어휘, 이해, 숫자 외우기</li>
<li><strong>동작성 검사의 하위검사</strong>: 빠진 곳 찾기, 차례 맞추기, 토막 짜기, 모양 맞추기, 바꿔 쓰기</li>
</ul>`,
  },
  {
    num: 22, category: 'psychology', stars: 3,
    title: '일반적성검사(GATB) 검출적성',
    content: `<p>수리능력, 지능, 공간적성, 사무지각, 언어능력, 형태지각, 운동반응, 손재치, 손가락 재치</p>`,
  },
  {
    num: 23, category: 'psychology', stars: 3,
    title: '진로성숙도검사(CMI)',
    content: `<ul>
<li><strong>태도척도(상담척도)의 하위영역</strong>
<ul>
<li>진로 결정성: 선호하는 진로의 방향에 대한 확신의 정도</li>
<li>참여도: 진로선택 과정에 능동적으로 참여하는 정도</li>
<li>독립성: 진로선택을 독립적으로 할 수 있는 정도</li>
<li>성향: 진로결정에 필요한 사전 이해와 준비의 정도</li>
<li>타협성: 진로선택 시에 욕구와 현실에 타협하는 정도</li>
</ul></li>
<li><strong>능력척도의 하위영역</strong>
<ul>
<li>자기평가: 자신의 흥미, 성격 등을 명확히 이��하는 능력</li>
<li>직업정보: 자신의 관심분야의 직업세계에 대한 정보의 획득 및 분석 능력</li>
<li>목표선정: 자신의 정보와 직업세계의 연결을 통한 직업목표 선정 능력</li>
<li>계획: 자신의 직업목표를 달성하기 위한 실제적 계획 능력</li>
<li>문제해결: 자신의 진로과정에서 부딪히는 다양한 문제들을 해결하는 능력</li>
</ul></li>
</ul>`,
  },
  {
    num: 24, category: 'psychology', stars: 4,
    title: '성격 5요인 검사',
    content: `<ul>
<li><strong>외향성</strong>: 타인과의 상호작용을 원하고 타인의 관심을 끌고자 하는 경향 정도</li>
<li><strong>호감성</strong>: 타인과 편안하고 조화로운 관계를 유지하려는 경향 정도</li>
<li><strong>성실성</strong>: 사회적 규칙, 규범, 원칙들을 기꺼이 지키려는 경향 정도</li>
<li><strong>정서적 불안정성</strong>: 정서적으로 얼마나 안정되어 있는지를 측정함</li>
<li><strong>경험에 대한 개방성</strong>: 세계에 대한 관심, 호기심, 다양한 경험에 대한 추구 및 포용력 정도</li>
</ul>`,
  },
  {
    num: 25, category: 'psychology', stars: 3,
    title: '초기면담의 구조화',
    content: `<ul>
<li>비밀보장의 한계에 대해 설명</li>
<li>상담 장소, 시간, 상담의 지속 등에 대해서 미리 합의하고 구조화</li>
<li>상담의 목표와 성질에 대해 구조화</li>
<li>내담자가 지켜야 할 규칙을 구조화</li>
<li>상담자와 내담자의 역할을 구조화</li>
</ul>`,
  },
  {
    num: 26, category: 'psychology', stars: 4,
    title: '직업상담의 기초기법',
    content: `<ul>
<li><strong>공감(공감적 이해)</strong>: 내담자의 세계를 마치 상담자 자신의 세계인 것처럼 공감하는 것</li>
<li><strong>경청</strong>: 내담자의 말에 항상 세심하게 주목하는 것</li>
<li><strong>반영</strong>: 내담자의 생각과 말을 상담자가 다른 참신한 말로 부연하는 것</li>
<li><strong>직면</strong>: 내담자가 자신의 문제를 회피하지 않고 도전하도록 하는 것</li>
<li><strong>명료화</strong>: 내담자의 말 속에 포함되어 있는 불분명한 측면을 상담자가 분명하게 밝히는 것</li>
<li><strong>수용(수용적 존중)</strong>: 내담자의 이야기에 주의집중하고 내담자를 인격적으로 존중하는 것</li>
<li><strong>해석</strong>: 내담자가 직접 진술하지 않은 내용이나 개념을 그의 과거 경험이나 진술을 토대로 하여 추론해서 말하는 것</li>
<li><strong>요약과 재진술</strong>: 내담자가 전달하는 이야기의 표면적 의미를 다른 말로 바꾸어서 말하는 것</li>
</ul>`,
  },
  {
    num: 27, category: 'psychology', stars: 3,
    title: '생애진로사정의 구조',
    content: `<ul>
<li><strong>진로사정</strong>: 직업경험, 교육 또는 훈련과정 및 관심사, 오락(여가활동)</li>
<li><strong>전형적인 하루</strong>: 내담자가 의존적 또는 독립적인지, 자발적(임의적) 또는 체계적인지 자신의 성격차원을 파악하도록 도움</li>
<li><strong>강점과 장애</strong>: 문제나 환경적 장애, 극복하기 위해 가지고 있는 대처자원이나 잠재력 탐구</li>
<li><strong>요약</strong>: 내담자가 자신의 자원을 요약함으로써 목표를 성취하도록 자극</li>
</ul>`,
  },
  {
    num: 28, category: 'psychology', stars: 4,
    title: '흥미사정방법',
    content: `<ul>
<li><strong>수퍼(Super)의 흥미사정기법</strong>: 조사된 흥미, 표현된 흥미, 조작된 흥미</li>
<li><strong>일반적인 흥미사정방법</strong>: 직업선호도검사, 직업카드분류법, 흥미평가기법, 작업경험의 분석</li>
</ul>`,
  },
  {
    num: 29, category: 'psychology', stars: 4,
    title: '인지적 명확성 사정',
    content: `<table>
<tr><th>인지적 명확성이 부족한 내담자 유형</th><th>상담자의 개입방법</th></tr>
<tr><td>파행적 의사소통</td><td>저항에 초점 맞추기</td></tr>
<tr><td>가정된 불가능·불가피성</td><td>논리적 분석 및 격려</td></tr>
<tr><td>단순 오정보</td><td>정보 제공하기</td></tr>
<tr><td>복잡한 오정보</td><td>논리적 분석</td></tr>
<tr><td>강박적 사고</td><td>REBT 기법</td></tr>
<tr><td>원인과 결과의 착오</td><td>논리적 분석</td></tr>
<tr><td>구체성의 결여</td><td>구체화시키기</td></tr>
</table>`,
  },
  {
    num: 30, category: 'psychology', stars: 4,
    title: '내담자의 정보 및 행동에 대한 이해기법',
    content: `<ul>
<li><strong>가정 사용하기</strong>: 내담자의 행동을 예측하기 위해 내담자에게 그 행동이 존재했다는 것을 가정하고 이야기함</li>
<li><strong>전이된 오류 정정하기</strong>: 내담자가 가지고 있는 정보, 한계, 논리적 오류를 정정하는 것</li>
<li><strong>저항감 재인식 및 다루기</strong>: 저항의 목적이 무엇인지 이해하고 재인식시켜 줌</li>
<li><strong>근거 없는 믿음 확인하기</strong>: 근거 없는 믿음이 잘못된 것이라는 것을 알게 함으로써 다른 새로운 대안을 찾게 하는 것</li>
<li><strong>의미 있는 질문 던지기</strong>: 의미 있는 질문을 던져 내담자의 자유롭고 다양한 반응을 유도</li>
<li><strong>왜곡된 사고 확인하기</strong>: 상담자는 내담자가 가지고 있는 왜곡된 사고를 확인</li>
<li><strong>반성의 장 마련하기</strong>: 자신이나 타인 또는 세상 등에 대한 부정적인 판단을 내리는 과정을 알 수 있게 조성함</li>
<li><strong>변명에 초점 맞추기</strong>: 변명이란 자신의 행동의 부정적인 면을 줄이려는 행동이나 설명으로 이에 초점을 맞춤</li>
<li><strong>분류 및 재구성하기</strong>: 내담자의 표현을 분류 및 재구성함으로써 내담자 자신의 세계를 다른 각도에서 볼 수 있는 기회를 제공</li>
</ul>`,
  },
  {
    num: 31, category: 'psychology', stars: 4,
    title: '셀리에의 일반적응증후군',
    content: `<ul>
<li><strong>경고(경계)단계</strong>: 정신적·육체적 위험 앞에 갑자기 노출되어 나타나는 최초의 즉각적 반응 단계</li>
<li><strong>저항단계</strong>: 제시된 스트레스 유발요인에 대한 저항은 증가되지만 신체의 전반적인 저항력은 저하되는 단계</li>
<li><strong>탈진(소진)단계</strong>: 장기간 스트레스가 지속되는 상태로 스트레스에 대한 적응에너지가 고갈된 단계</li>
</ul>`,
  },
  {
    num: 32, category: 'psychology', stars: 3,
    title: '역할갈등의 유형',
    content: `<ul>
<li><strong>개인 간 역할갈등</strong>: 직업에서의 요구와 직업 이외의 요구가 다를 때 발생</li>
<li><strong>개인 내 역할갈등</strong>: 개인이 수행하는 직무의 요구와 개인의 가치관이 다를 때 발생</li>
<li><strong>송신자 간 역할갈등</strong>: 개인에게 요구하는 두 사람 이상의 요구가 다를 때 발생</li>
<li><strong>송신자 내 역할갈등</strong>: 상급자가 개인에게 서로 양립할 수 없는 요구를 할 때 발생</li>
</ul>`,
  },
  {
    num: 33, category: 'psychology', stars: 4,
    title: '직무스트레스',
    content: `<ul>
<li><strong>직무스트레스원</strong>: 과제특성, 직무역할, 산업·조직문화 풍토</li>
<li><strong>직무스트레스 조절변인</strong>: A/B 성격유형, 통제의 소재, 사회적 지원</li>
</ul>`,
  },

  /* ===================================================================
     2과목: 직업상담 및 취업지원 (counseling) — 34~60
     =================================================================== */
  {
    num: 34, category: 'counseling', stars: 3,
    title: '직업상담의 원리',
    content: `<ul>
<li>변화하는 직업세계에 대한 이해를 토대로 진행되어야 함</li>
<li>인간의 성격특성과 재능에 대한 이해를 토대로 진행되어야 함</li>
<li>심리검사 결과로 합리적인 판단을 이끌어낼 수 있어야 함</li>
<li>내담자의 전 생애적 발달과정을 반영할 수 있어야 함</li>
<li>개인의 의사결정에 대한 과정이 포함되어야 함</li>
<li>윤리적인 범위 내에서 상담을 전개하여야 함</li>
</ul>`,
  },
  {
    num: 35, category: 'counseling', stars: 3,
    title: '직업상담사의 역할과 직무',
    content: `<ul>
<li>상담자 / 정보 분석자</li>
<li>(검사도구) 해석자 / (직업문제) 처치자</li>
<li>조언자 / (직업지도 프로그램) 개발자</li>
<li>지원자 / 협의자</li>
<li>관리자 / 연구 및 평가자</li>
</ul>`,
  },
  {
    num: 36, category: 'counseling', stars: 4,
    title: '직업상담의 일반적인 과정',
    content: `<ul>
<li>관계형성 → 진단 및 측정 → 목표설정 → 개입 → 평가</li>
<li>관계수립 및 문제의 평가 → 상담목표의 설정 → 문제해결을 위한 개입 → 훈습 → 종결 및 추수지도</li>
</ul>`,
  },
  {
    num: 37, category: 'counseling', stars: 4,
    title: '집단직업상담의 장점',
    content: `<ul>
<li>집단 구성원 간의 활발한 피드백을 통해 자기 탐색을 증진</li>
<li>일반적으로 성숙도가 낮은 이에게 적합</li>
<li>개인상담보다 부담이 적어 받아들이기 용이함</li>
<li>타인과의 상호작용을 통해 대인교류능력과 사회성 증진</li>
<li>일대다수 상담으로 경제성 확보</li>
<li>타인을 통한 대리학습(관찰학습)의 기회부여</li>
</ul>`,
  },
  {
    num: 38, category: 'counseling', stars: 5,
    title: '윌리암슨의 문제유형 (특성-요인 상담)',
    content: `<ul>
<li>흥미와 적성의 불일치(모순)</li>
<li>어리석은 선택(현명하지 못한 선택)</li>
<li>불확실한 직업선택(확신 부족)</li>
<li>진로(직업) 무선택</li>
</ul>`,
  },
  {
    num: 39, category: 'counseling', stars: 5,
    title: '보딘의 문제유형 (정신역동 상담)',
    content: `<ul>
<li>내적 갈등(자아갈등)</li>
<li>정보의 부족</li>
<li>의존성</li>
<li>확신의 결여(문제는 없지만 확신이 부족한 경우)</li>
<li>진로선택의 불안</li>
</ul>`,
  },
  {
    num: 40, category: 'counseling', stars: 4,
    title: '크릿츠의 문제유형 (포괄적 상담)',
    content: `<ul>
<li><strong>적응성</strong>: 적응형, 부적응형</li>
<li><strong>결정성</strong>: 다재다능형, 우유부단형</li>
<li><strong>현실성</strong>: 비현실형, 불충족형, 강압형</li>
</ul>`,
  },
  {
    num: 41, category: 'counseling', stars: 3,
    title: '사이버 상담의 필요성',
    content: `<ul>
<li>인터넷의 보급과 활용으로 경제성 및 효율성이 높다.</li>
<li>내담자의 익명성이 보장되어 솔직한 표현이 가능하다.</li>
<li>상담자를 직접 대면하지 않으므로 내담자가 느끼는 심리적 부담감이 적다.</li>
<li>가명을 활용한 상담사례 소개 및 대처방안을 제시할 수 있다.</li>
<li>문제해결을 위한 자료탐색이 용이하다.</li>
<li>내담자 주도에 의한 자기성찰 능력을 향상시킬 수 있다.</li>
</ul>`,
  },
  {
    num: 42, category: 'counseling', stars: 3,
    title: '정신분석 상담의 불안의 유형',
    content: `<ul>
<li><strong>현실적 불안</strong>: 현실에서 지각하는 실제적 위험</li>
<li><strong>신경증적 불안</strong>: 본능이 통제되지 않아 생기는 불안</li>
<li><strong>도덕적 불안</strong>: 수치심과 죄의식을 느끼게 되는 불안</li>
</ul>`,
  },
  {
    num: 43, category: 'counseling', stars: 4,
    title: '정신분석 상담의 주요 방어기제',
    content: `<ul>
<li><strong>억압</strong>: 욕망, 충동, 생각들을 무의식으로 밀어넣는 것</li>
<li><strong>승화</strong>: 충동들을 사회적으로 용납되는 형태로 표출하는 것</li>
<li><strong>부정</strong>: 고통스러운 현실을 무의식으로 인정하지 않으려는 것</li>
</ul>`,
  },
  {
    num: 44, category: 'counseling', stars: 4,
    title: '개인주의 상담의 목표 (아들러)',
    content: `<ul>
<li>사회적 관심을 갖도록 도움</li>
<li>패배감을 극복하고 열등감을 감소시킬 수 있도록 도움</li>
<li>내담자의 잘못된 가치와 목표를 수정하도록 도움</li>
<li>잘못된 동기를 바꾸도록 도움</li>
<li>사회의 구성원으로 사회에 기여하도록 도움</li>
</ul>`,
  },
  {
    num: 45, category: 'counseling', stars: 5,
    title: '내담자중심 상담',
    content: `<ul>
<li><strong>특징</strong>: 상담자와 내담자 간의 관계형성과 허용적 분위기를 강조</li>
<li><strong>상담의 목적</strong>: 자아실현과 완전히 기능하는 사람</li>
<li><strong>상담자의 태도</strong>: 일치성, 무조건적인 수용, 공감적 이해</li>
</ul>`,
  },
  {
    num: 46, category: 'counseling', stars: 4,
    title: '형태주의 상담 (펄스)',
    content: `<ul>
<li><strong>특징</strong>: '여기-지금'의 현재 상황에 대한 인간의 자각에 초점</li>
<li><strong>상담의 목표</strong>: 성숙과 통합의 성취, 선택과 책임의식의 증진, 변화와 성장</li>
<li><strong>상담의 기법</strong>: 자각하기(욕구와 감정, 신체, 언어), 과장하기, 빈 의자 기법, 꿈 작업</li>
</ul>`,
  },
  {
    num: 47, category: 'counseling', stars: 4,
    title: '실존주의 상담',
    content: `<ul>
<li><strong>특징</strong>: 스스로의 자유와 책임의 양면성에 대한 지각을 중시</li>
<li><strong>상담의 목적</strong>: 피해자적 역할로부터 벗어날 수 있도록 돕는 것</li>
<li><strong>인간의 궁극적 관심사</strong>: 삶의 의미성, 진실성, 자유와 책임, 죽음과 비존재</li>
</ul>`,
  },
  {
    num: 48, category: 'counseling', stars: 5,
    title: '인지·정서·행동 상담 (엘리스)',
    content: `<ul>
<li><strong>특징</strong>: 심리적 문제를 일으키는 사건보다 사건에 대한 사고의 분석을 중시</li>
<li><strong>상담의 목표</strong>: 내담자의 비합리적인 신념을 논박하여 합리적인 신념으로 전환</li>
<li><strong>ABCDE모형</strong>: A(선행사건), B(신념체계), C(결과), D(논박), E(효과), F(새로운 느낌)</li>
</ul>`,
  },
  {
    num: 49, category: 'counseling', stars: 4,
    title: '교류분석 상담',
    content: `<ul>
<li><strong>특징</strong>: 개인 간, 개인 내부에서 이루어지는 다양한 자아들 간의 상호작용을 분석하는 구조를 제공</li>
<li><strong>자아 상태</strong>: 부모자아·어버이자아, 어른자아·성인자아, 어린이자아</li>
<li><strong>생활자세</strong>: 자기긍정/타인긍정, 자기긍정/타인부정, 자기부정/타인긍정, 자기부정/타인부정</li>
</ul>`,
  },
  {
    num: 50, category: 'counseling', stars: 5,
    title: '특성-요인 직업상담',
    content: `<ul>
<li><strong>특징</strong>: '직업과 사람을 연결시키기'라는 심리학적 관심을 대표</li>
<li><strong>상담의 과정</strong>: 분석 → 종합 → 진단 → 예측 → 상담 → 추후지도</li>
<li><strong>검사 해석단계 상담기법</strong>: 직접 충고, 설득, 설명</li>
</ul>`,
  },
  {
    num: 51, category: 'counseling', stars: 4,
    title: '발달적 직업상담',
    content: `<ul>
<li><strong>특징</strong>: 내담자의 진로발달을 개인의 전 생애에 걸쳐 이루어지는 과정으로 봄</li>
<li><strong>직업상담의 평가</strong>: 문제의 평가, 개인의 평가, 예언평가</li>
<li><strong>상담의 과정</strong>: 문제의 탐색 및 자아개념 묘사 → 심층적 탐색 → 자아수용 및 자아통찰 → 현실검증 → 태도와 감정의 탐색과 처리 → 의사결정</li>
</ul>`,
  },
  {
    num: 52, category: 'counseling', stars: 4,
    title: '정신역동적 직업상담 (보딘)',
    content: `<ul>
<li><strong>특징</strong>: 정신분석학과 특성-요인이론 및 내담자중심 직업상담의 개념을 통합한 접근법</li>
<li><strong>상담의 과정</strong>: 탐색과 계약설정의 단계 → 중대한(핵심) 결정의 단계 → 변화를 위한 노력의 단계</li>
<li><strong>상담의 기법</strong>: 명료화, 비교, 소망-방어체계의 해석</li>
</ul>`,
  },
  {
    num: 53, category: 'counseling', stars: 4,
    title: '행동주의 직업상담',
    content: `<ul>
<li><strong>특징</strong>: 내담자의 부적응 행동을 바람직한 적응 행동으로 대치시키는 데 조력</li>
<li><strong>상담의 목적</strong>: 불안을 제거하고 직업결정기술을 학습시키는 것</li>
<li><strong>내담자의 문제유형</strong>: 우유부단, 무결단성</li>
<li><strong>불안감소기법</strong>: 체계적 둔감법, 홍수법, 혐오치료, 내적 금지, 반조건형성(역조건형성), 주장훈련, 자기표현훈련 등</li>
<li><strong>학습촉진기법</strong>: 강화, 변별학습, 모델링(모방), 행동조성(조형), 토큰경제(상표제도) 등</li>
</ul>`,
  },
  {
    num: 54, category: 'counseling', stars: 4,
    title: '포괄적 직업상담 (크릿츠)',
    content: `<ul>
<li><strong>특징</strong>: 다양한 상담이론을 통합한 것으로, 특히 모든 상담의 진단과정을 고려함</li>
<li><strong>상담의 과정</strong>: 진단단계(초기단계) → 명료화 또는 해석의 단계(중간단계) → 문제해결의 단계(마지막단계)</li>
</ul>`,
  },
  {
    num: 55, category: 'counseling', stars: 3,
    title: '목표설정의 원칙',
    content: `<ul>
<li>내담자가 원하는 것을 상담목표로 설정해야 함</li>
<li>상담자의 기술과 양립할 것을 상담목표로 설정해야 함</li>
<li>구체적인 것을 상담목표로 설정해야 함</li>
<li>실현 가능한 것을 상담목표로 설정해야 함</li>
</ul>`,
  },
  {
    num: 56, category: 'counseling', stars: 4,
    title: '6개의 생각하는 모자',
    content: `<ul>
<li><strong>하양</strong>: 사실에만 초점을 둔 사고</li>
<li><strong>빨강</strong>: 직관에 의한 감정이나 느낌을 반영</li>
<li><strong>검정</strong>: 논리적, 부정적, 비판적 사고를 반영</li>
<li><strong>노랑</strong>: 낙관적, 긍정적 시각을 반영</li>
<li><strong>초록</strong>: 새로운 아이디어 생성, 창조적 사고를 반영</li>
<li><strong>파랑</strong>: 사회자로서의 역할과 의사결정자의 역할</li>
</ul>`,
  },
  {
    num: 57, category: 'counseling', stars: 3,
    title: '코틀의 원형검사',
    content: `<ul>
<li><strong>원의 의미</strong>: 각각 과거·현재·미래를 뜻하는 세 개의 원</li>
<li><strong>원의 크기</strong>: 시간차원에 대한 상대적 친밀감</li>
<li><strong>원의 배치</strong>: 시간차원이 각각 어떻게 연관되어 있는지를 나타냄</li>
<li><strong>시간전망 개입의 세 가지 측면</strong>
<ul>
<li>방향성: 미래지향성을 증진시키기 위한 것으로, 미래에 대한 낙관적인 입장을 구성함</li>
<li>변별성: 미래를 현실처럼 느끼게 하고 미래계획에 대한 긍정적 태도를 강화시키며 목표설정을 신속하게 하는 데 목표를 둠</li>
<li>통합성: 현재 행동과 미래의 결과를 연결시키고, 계획한 기법을 실습하여 미래에 대한 인식을 증진</li>
</ul></li>
</ul>`,
  },
  {
    num: 58, category: 'counseling', stars: 4,
    title: '하렌(Harren)의 의사결정 유형',
    content: `<ul>
<li><strong>합리적 유형(Rational Style)</strong>: 의사결정과정에서 자신과 상황에 대한 정확한 정보를 수집하고, 논리적이고 체계적으로 접근하는 유형. 의사결정에 대한 책임을 자신이 진다.</li>
<li><strong>직관적 유형(Intuitive Style)</strong>: 의사결정의 기초로 상상을 사용하고 현재의 감정에 주의를 기울이며 정서적 자각을 사용한다. 선택에 대한 확신은 비교적 빨리 내리지만 설명하지 못할 경우가 있다.</li>
<li><strong>의존적 유형(Dependent Style)</strong>: 의사결정에 대한 개인적 책임을 부정하고 그 책임을 외부로 돌리는 경향이 있다. 타인의 영향을 많이 받고, 수동적이며 순종적이다.</li>
</ul>`,
  },
  {
    num: 59, category: 'counseling', stars: 4,
    title: '상담목표 설정 시 고려사항 및 기본원칙',
    content: `<ul>
<li>내담자가 원하는 것을 상담목표로 설정한다.</li>
<li>상담자의 기술과 양립할 것을 상담목표로 설정한다.</li>
<li>구체적인 것을 상담목표로 설정한다.</li>
<li>실현 가능한 것을 상담목표로 설정한다.</li>
</ul>`,
  },
  {
    num: 60, category: 'counseling', stars: 4,
    title: '상담내용에 대한 비밀보호 예외사항',
    content: `<ul>
<li>내담자가 자신이나 다른 사람을 위험에 빠뜨릴 가능성이 클 때</li>
<li>내담자가 자살을 시도할 계획이 있는 경우</li>
<li>법적으로 정보의 공개가 요구되는 경우</li>
<li>내담자가 감염성이 있는 치명적인 질병에 걸린 경우</li>
<li>미성년자인 내담자가 학대를 당하고 있는 경우</li>
<li>내담자가 아동학대를 하는 경우</li>
<li>상담자가 슈퍼비전을 받아야 하는 경우</li>
<li>심각한 범죄 실행의 가능성이 있는 경우</li>
</ul>`,
  },

  /* ===================================================================
     3과목: 직업정보 (jobinfo) — 61~80
     =================================================================== */
  {
    num: 61, category: 'jobinfo', stars: 5,
    title: '공공직업정보의 특징',
    content: `<ul>
<li>특정한 시기에 국한되지 않고 지속적으로 조사·분석하여 제공</li>
<li>장기적인 계획 및 목표에 따라 정보체계의 개선작업 수행이 가능</li>
<li>전체 산업 및 업종에 걸친 직업 대상</li>
<li>보편적인 항목으로 이루어진 기초적인 직업정보 체계로 구성</li>
</ul>`,
  },
  {
    num: 62, category: 'jobinfo', stars: 3,
    title: '직업선택 모형',
    content: `<ul>
<li><strong>기술적 모형</strong>: 타이드만과 오하라 모형, 힐튼 모형, 브룸 모형, 플레처 모형 및 슈의 모형</li>
<li><strong>처방적 모형</strong>: 카츠의 모형과 칼도와 쥐토우스키의 모형 및 겔라트의 모형</li>
</ul>`,
  },
  {
    num: 63, category: 'jobinfo', stars: 4,
    title: '한국직업사전(2020)의 구성',
    content: `<ul>
<li>직무분석을 바탕으로 조사</li>
<li>직업코드, 본직업명, 직무개요, 수행직무, 부가직업정보</li>
</ul>`,
  },
  {
    num: 64, category: 'jobinfo', stars: 5,
    title: '한국직업사전(2020)의 부가직업정보',
    content: `<p>정규교육, 숙련기간, 직무기능, 작업강도, 육체활동, 작업장소, 작업환경, 유사명칭, 관련직업, 자격/면허, 한국표준산업분류 코드, 한국표준직업분류 ���드, 조사연도</p>`,
  },
  {
    num: 65, category: 'jobinfo', stars: 5,
    title: '한국직업전망(2021/2022)',
    content: `<ul>
<li>9개 분야 220여개 직업에 대한 상세 정보 수록</li>
<li>대표직업명, 하는 일, 업무환경, 되는 길, 적성 및 흥미, 일자리 전망, 관련직업, 분류코드, 관련 정보처 등으로 구성</li>
<li>향후 10년간 해당 직업의 일자리 규모에 대한 전망과 변화요인을 기술</li>
<li>일자리 전망결과: -2% 미만(감소), -2%~-1%(다소 감소), -1%~+1%(현 상태 유지), 1%~2%(다소 증가), 2% 초과(증가) 등 5개 구간</li>
</ul>`,
  },
  {
    num: 66, category: 'jobinfo', stars: 5,
    title: '한국표준직업분류(2018) 직업의 조건',
    content: `<ul>
<li><strong>일의 계속성</strong>: 매일, 매주, 매월 등 주기적으로 행하는 것, 계절적으로 행해지는 것, 명확한 주기는 없으나 계속적으로 행해지는 것, 현재 하고 있는 일을 계속적으로 행할 의지와 가능성이 있는 것</li>
<li><strong>경제성</strong>: 경제적인 거래 관계가 성립하는 활동을 수행해야 함</li>
<li><strong>윤리성과 사회성</strong>: 비윤리적인 영리행위나 반사회적인 활동이 아니어야 하고, 사회적인 기여가 있어야 함</li>
<li><strong>기타</strong>: 속박된 상태에서의 활동이 아니어야 함</li>
</ul>`,
  },
  {
    num: 67, category: 'jobinfo', stars: 5,
    title: '한국표준직업분류(2018) 직업으로 보지 않는 활동 (10가지)',
    content: `<ul>
<li>이자, 주식배당, 임대료 등과 같은 자산 수입이 있는 경우</li>
<li>사회보장이나 민간보험에 의한 수입이 있는 경우</li>
<li>경마, 복권 등에 의한 배당금이나 주식투자에 의한 시세차익이 있는 경우</li>
<li>예·적금 인출, 보험금 수취, 차용 또는 토지나 금융자산을 매각하여 수입이 있는 경우</li>
<li>자기 집의 가사활동에 전념하는 경우</li>
<li>교육기관에 재학하며 학습에만 전념하는 경우</li>
<li>시민봉사활동 등에 의한 무급 봉사적인 일에 종사하는 경우</li>
<li>사회복지시설 수용자의 시설 내 경제활동</li>
<li>수형자의 활동과 같이 법률에 의한 강제노동을 하는 경우</li>
<li>도박, 강도, 절도, 사기, 매춘, 밀수와 같�� 불법적인 활동</li>
</ul>`,
  },
  {
    num: 68, category: 'jobinfo', stars: 5,
    title: '직업분류원칙',
    content: `<ul>
<li><strong>포괄적인 업무에 대한 직업분류원칙</strong>: 주된 직무 우선의 원칙, 최상급 직능수준 우선의 원칙, 생산업무 우선의 원칙</li>
<li><strong>다수 직업 종사자의 분류원칙</strong>: 취업시간 우선의 원칙, 수입 우선의 원칙, 조사 시 최근의 직업원칙</li>
</ul>`,
  },
  {
    num: 69, category: 'jobinfo', stars: 4,
    title: '한국표준직업분류(2018)의 직업분류 기준',
    content: `<ul>
<li><strong>직능</strong>: 주어진 직무의 업무와 과업을 수행하는 능력인 직능(skill)을 근거로 편제되며, 직능수준과 직능유형을 고려</li>
<li><strong>직능수준</strong>: 직무수행능력의 높낮이를 말하는 것으로 정규교육, 직업훈련, 직업경험 그리고 선천적 능력과 사회 문화적 환경 등에 의해 결정</li>
<li><strong>직능유형</strong>: 직무수행에 요구되는 지식의 분야, 사용하는 도구 및 장비, 투입되는 원재료, 생산된 재화나 서비스의 종류와 관련</li>
</ul>`,
  },
  {
    num: 70, category: 'jobinfo', stars: 3,
    title: '한국고용직업분류(2018) 개요',
    content: `<ul>
<li><strong>구성</strong>: 대분류 10개, 중분류 35개, 소분류 136개, 세분류 450개로 구성하고, 세세분류는 취업알선직업분류의 역할</li>
<li><strong>분류원칙</strong>: 직능유형(skill type) 우선, 포괄성, 배타성, 연계성 유지, 최소고용과 노동시장 우선</li>
<li><strong>특징</strong>: 세분류 직업조사 결과 반영, 35개 중분류 중심체계, 중분류를 직능유형(skill type) 중심으로 재구성</li>
</ul>`,
  },
  {
    num: 71, category: 'jobinfo', stars: 4,
    title: '한국표준산업분류(2017)의 산업, 산업활동, 산업활동의 범위',
    content: `<ul>
<li><strong>산업</strong>: 유사한 성질을 갖는 산업활동에 주로 종��하는 생산단위의 집합</li>
<li><strong>산업활동</strong>: 각 생산단위가 노동, 자본, 원료 등 자원을 투입하여 재화 또는 서비스를 생산 또는 제공하는 일련의 활동과정</li>
<li><strong>산업활동의 범위</strong>: 영리적·비영리적 활동이 모두 포함되나, 가정 내의 가사활동은 제외</li>
</ul>`,
  },
  {
    num: 72, category: 'jobinfo', stars: 5,
    title: '한국표준산업분류(2017)의 분류기준',
    content: `<ul>
<li><strong>산출물(생산된 재화 또는 제공된 서비스)의 특성</strong>: 산출물의 물리적 구성 및 가공단계, 산출물의 수요처, 산출물의 기능</li>
<li><strong>투입물의 특성</strong>: 원재료, 생산공정, 생산기술 및 시설 등</li>
<li><strong>생산활동의 일반적인 결합형태</strong></li>
</ul>`,
  },
  {
    num: 73, category: 'jobinfo', stars: 5,
    title: '한국표준산업분류(2017)의 통계단위',
    content: `<table>
<tr><th></th><th>하나 이상의 장소</th><th>단일 장소</th></tr>
<tr><td><strong>하나 이상의 산업활동</strong></td><td>기업집단단위 / 지역단위 / 기업체단위</td><td>-</td></tr>
<tr><td><strong>단일 산업활동</strong></td><td>활동유형단위</td><td>사업체단위</td></tr>
</table>`,
  },
  {
    num: 74, category: 'jobinfo', stars: 3,
    title: '고용보험의 기업혜택 중 고용창출 장려금의 지원내용',
    content: `<ul>
<li>일자리함께하기</li>
<li>국내복귀기업 고용지원</li>
<li>신중년 적합직무</li>
<li>고용촉진 장려금</li>
</ul>`,
  },
  {
    num: 75, category: 'jobinfo', stars: 5,
    title: '국가기술자격 중 기술·기능 분야의 응시자격',
    content: `<ul>
<li><strong>기술사</strong>: 실무경력 9년, 기사 취득 후 실무 4년, 산업기사 취득 후 실무 5년, 기능사 취득 후 실무 7년, 4년제 대학 졸업 후 실무 6년 등</li>
<li><strong>기능장</strong>: 실무경력 9년, 산업기사 이상 취득 후 실무 5년, 기능사 취득 후 실무 7년 등</li>
<li><strong>기사</strong>: 실무경력 4년, 산업기사 이상 취득 후 실무 1년, 기능사 취득 후 실무 3년, 대학(관련학과) 졸업(예정)자 등</li>
<li><strong>산업기사</strong>: 실무경력 2년, 기능사 이상 취득 후 실무 1년, 전문대학(관련학과) 졸업(예정)자 등</li>
</ul>`,
  },
  {
    num: 76, category: 'jobinfo', stars: 5,
    title: '국가기술자격 검정기준',
    content: `<ul>
<li><strong>기술사</strong>: 고도의 전문지식과 실무경험</li>
<li><strong>기능장</strong>: 최상급 숙련기능</li>
<li><strong>기사</strong>: 공학적 기술이론 지식</li>
<li><strong>산업기사</strong>: 기술기초이론 지식 또는 숙련기능</li>
<li><strong>기능사</strong>: 숙련기능</li>
</ul>`,
  },
  {
    num: 77, category: 'jobinfo', stars: 4,
    title: '직업능력개발훈련의 목적에 따른 구분',
    content: `<ul>
<li><strong>양성훈련</strong>: 근로자에게 직업에 필요한 기초적 직무수행능력을 습득시키기 위하여 실시하는 직업능력개발훈련</li>
<li><strong>향상훈련</strong>: 양성훈련을 받은 자 또는 직업에 필요한 기초적 직무수행능력을 가지고 있는 자에게 더 높은 직무수행능력을 습득시키는 훈련</li>
<li><strong>전직훈련</strong>: 근로자에게 종전의 직업과 유사하거나 새로운 직업에 필요한 직무수행능력을 습득시키기 위하여 실시하는 훈련</li>
</ul>`,
  },
  {
    num: 78, category: 'jobinfo', stars: 3,
    title: '국가직무능력표준(NCS)의 직업기초능력',
    content: `<p>의사소통능력, 문제해결능력, 자원관리능력, 정보능력, 조직이해능력, 수리능력, 자기개발능력, 대인관계능력, 기술능력, 직업윤리</p>`,
  },
  {
    num: 79, category: 'jobinfo', stars: 4,
    title: '직업정보의 관리과정',
    content: `<p>수집 → 분석 → 가공(체계화) → 제공 → 축적 → 평가</p>`,
  },
  {
    num: 80, category: 'jobinfo', stars: 4,
    title: '직업정보의 제공유형별 장단점',
    content: `<table>
<tr><th>제공유형</th><th>비용</th><th>학습자 참여도</th><th>접근성</th></tr>
<tr><td>인쇄물</td><td>저</td><td>수동적</td><td>용이</td></tr>
<tr><td>프로그램화된 자료</td><td>저</td><td>적극적</td><td>제한적</td></tr>
<tr><td>시청각 자료</td><td>고</td><td>수동적</td><td>제한적</td></tr>
<tr><td>온라인 시스템</td><td>저</td><td>수동적</td><td>제한적</td></tr>
<tr><td>시뮬레이션 자료</td><td>저</td><td>적극적</td><td>제한적</td></tr>
<tr><td>면접</td><td>저</td><td>적극적</td><td>제한적</td></tr>
<tr><td>직업경험</td><td>고</td><td>적극적</td><td>제한적</td></tr>
</table>`,
  },

  /* ===================================================================
     4과목: 노동시장 (labor_market) — 81~100
     =================================================================== */
  {
    num: 81, category: 'labor_market', stars: 4,
    title: '노동수요의 증가요인',
    content: `<ul>
<li>노동을 투입하여 생산하는 생산물에 대한 수요의 증가</li>
<li>자본·토지 등 다른 생산요소의 가격상승</li>
<li>노동 생산성의 증대</li>
<li>생산기술의 진보</li>
</ul>
<p><em>* 임금의 하락은 수요곡선상에서의 이동을 가져옴 (곡선 자체의 이동이 아님)</em></p>`,
  },
  {
    num: 82, category: 'labor_market', stars: 5,
    title: '노동수요곡선과 이윤극대화',
    content: `<ul>
<li><strong>경쟁노동시장의 노동수요곡선</strong>: 노동의 한계생산가치(VMP<sub>L</sub>) 곡선</li>
<li><strong>경쟁노동시장의 이윤극대화 조건</strong>: VMP<sub>L</sub>(= P·MP<sub>L</sub>) = W</li>
<li><strong>독점시장의 노동수요곡선</strong>: 노동의 한계수입생산(MRP<sub>L</sub>) 곡선</li>
</ul>`,
  },
  {
    num: 83, category: 'labor_market', stars: 5,
    title: '노동수요곡선의 기울기',
    content: `<ul>
<li>단기 노동수요곡선보다 장기 노동수요곡선이 완만(탄력적)</li>
<li>고임금의 경제효과가 있는 경우의 노동수요곡선은 고임금의 경제효과가 없는 경우에 비해 가파름(비탄력적)</li>
<li>산업의 노동수요곡선은 개별기업의 노동수요곡선의 수평합보다 가파름(비탄력적)</li>
</ul>`,
  },
  {
    num: 84, category: 'labor_market', stars: 5,
    title: '노동수요 탄력성의 결정요인',
    content: `<p>노동수요 탄력성은 다음의 경우에 커진다:</p>
<ol>
<li>상품의 수요가 탄력적일수록</li>
<li>총비용 가운데서 노동비용의 비중이 클수록</li>
<li>노동의 대체 가능성이 클수록</li>
<li>노동 이외의 다른 생산요소의 공급탄력성이 클수록</li>
</ol>`,
  },
  {
    num: 85, category: 'labor_market', stars: 5,
    title: '노동통계',
    content: `<ul>
<li><strong>경제활동참가율(%)</strong> = 경제활동인구 / 15세 이상 인구(생산가능인구) × 100</li>
<li><strong>실업률(%)</strong> = 실업자 수 / 경제활동인구 × 100</li>
<li><strong>고용률(%)</strong> = 취업자 수 / 15세 이상 인구(생산가능인구) × 100</li>
</ul>`,
  },
  {
    num: 86, category: 'labor_market', stars: 3,
    title: '노동공급의 탄력성 결정요인',
    content: `<ul>
<li>한 나라의 노동력 규모를 나타내는 인구수</li>
<li>노동조합의 결성 여부와 교섭력의 정도</li>
<li>여성 취업기회의 용이성</li>
<li>여러 부문들(지역, 산업) 간의 노동이동의 용이성</li>
<li>산업구조의 변화</li>
<li>기간(단기와 장기)</li>
</ul>`,
  },
  {
    num: 87, category: 'labor_market', stars: 4,
    title: '인적자본에 대한 투자 대상',
    content: `<ul>
<li>정규교육 또는 학교교육</li>
<li>현장훈련</li>
<li>이주</li>
<li>건강(health)</li>
<li>정보(information)</li>
</ul>`,
  },
  {
    num: 88, category: 'labor_market', stars: 5,
    title: '내부노동시장의 형성요인',
    content: `<ul>
<li>숙련의 특수성</li>
<li>현장훈련</li>
<li>관습</li>
<li>장기근속 가능성</li>
<li>기업의 규모</li>
<li>기업 내의 위계적 직무서열</li>
</ul>`,
  },
  {
    num: 89, category: 'labor_market', stars: 4,
    title: '최저임금제가 고용을 증가시키는 경우',
    content: `<ul>
<li>노동시장이 수요독점인 경우</li>
<li>생산성 증대효과가 있는 경우</li>
<li>유효수요 증대효과가 있는 경우</li>
</ul>`,
  },
  {
    num: 90, category: 'labor_market', stars: 5,
    title: '최저임금제의 기대효과',
    content: `<ul>
<li>노동자의 최저생활과 생활안정 보장</li>
<li>노동 생산성을 향상시켜 고임금의 경제(economies of high wage) 효과 실현</li>
<li>산업 간·직종 간의 임금격차가 완화되어 계층별 소득분배 상태 개선</li>
<li>노사관계 개선과 산업평화의 유지</li>
<li>유효수요(총수요)의 증대로 인한 경기 활성화, 고용증대 효과</li>
<li>기업에게 충격효과(shock effect)를 주어, 기업경영의 합리화와 경쟁력 강화 유도</li>
</ul>`,
  },
  {
    num: 91, category: 'labor_market', stars: 3,
    title: '연공급의 장점',
    content: `<ul>
<li>고용의 안정화 및 노동력의 정착화</li>
<li>노동자의 생활보장으로 기업에 대한 귀속의식 제고</li>
<li>보수성이 강한 기업풍토에서 질서확립과 사기유지에 유리</li>
</ul>`,
  },
  {
    num: 92, category: 'labor_market', stars: 4,
    title: '직무급의 장점',
    content: `<ul>
<li>동일직무에 동일임금을 지급</li>
<li>개인별 임금격차에 대한 불만 해소</li>
<li>전문기술인력의 확보가 용이</li>
<li>능력 위주의 인사풍토 조성</li>
<li>불합리한 노무비 상승을 방지</li>
</ul>`,
  },
  {
    num: 93, category: 'labor_market', stars: 4,
    title: '사용자가 부가급여를 선호하는 이유',
    content: `<ul>
<li>부가급여만큼 화폐임금액이 감소하면 조세나 사회보험료 부담 감소</li>
<li>사용자가 희망하는 노동 특성을 가진 근로자들을 채용하고자 할 때 근로자가 원하는 부가급여를 제공함으로써 채용을 쉽게 할 수 있음</li>
<li>정부가 과도한 임금인상을 규제하는 경우 임금인상 대신 부가급여 수준을 높여 대응할 수 있음</li>
<li>근로자의 장기근속을 유도하는 방편으로 부가급여 이용</li>
</ul>`,
  },
  {
    num: 94, category: 'labor_market', stars: 5,
    title: '임금격차의 경쟁적 요인과 경쟁외적 요인',
    content: `<ul>
<li><strong>경쟁적 요인</strong>: 노동자의 생산성의 차이, 임금의 보상격차(균등화 격차), 시장의 단기적 불균형 등</li>
<li><strong>경쟁외적 요인</strong>: 차별화 및 노동시장의 분단, 노동자에 대한 독점지대 배당, 기업주의 효율임금정책, 노동조합의 영향 등</li>
</ul>`,
  },
  {
    num: 95, category: 'labor_market', stars: 5,
    title: '보상적 임금격차(균등화 격차)의 원인 - 스미스',
    content: `<ul>
<li>고용의 안정성 여부</li>
<li>작업의 쾌적성 여부</li>
<li>교육 및 훈련비용</li>
<li>책임의 정도</li>
<li>성공 또는 실패의 가능성</li>
</ul>`,
  },
  {
    num: 96, category: 'labor_market', stars: 5,
    title: '명목임금이 하방경직적인 이유 - 케인즈',
    content: `<ul>
<li>노동자들의 화폐환상으로 인한 역선택</li>
<li>노동자와 사용자 간의 장기근로계약</li>
<li>노동조합의 존재</li>
<li>최저임금제</li>
<li>연공급 임금제도</li>
</ul>`,
  },
  {
    num: 97, category: 'labor_market', stars: 5,
    title: '실업의 원인과 대책',
    content: `<table>
<tr><th>구분</th><th>원인</th><th>대책</th></tr>
<tr><td><strong>마찰적 실업</strong></td><td>노동시장의 정보 부족</td><td>노동시장 정보의 효율적 제공</td></tr>
<tr><td><strong>경기적 실업</strong></td><td>유효수요(총수요)의 부족</td><td>재정투융자의 확대, 통화량의 증대</td></tr>
<tr><td><strong>구조적 실업</strong></td><td>산업구조의 변화, 산업 간·지역 간 노동의 이동성 부족</td><td>직업알선, 교육 및 재훈련, 이주비의 지원, 장래의 노동수요 예측</td></tr>
</table>`,
  },
  {
    num: 98, category: 'labor_market', stars: 4,
    title: '노동시장 유연성의 형태',
    content: `<ul>
<li><strong>외부적 수량적 유연성</strong>: 유연한 정리해고, 계약근로, 다양한 시간제 근로의 확산</li>
<li><strong>작업의 외부화</strong>: 하청, 파견근로자 사용 및 자영업자의 사용 등</li>
<li><strong>내부적 수량적 유연성</strong>: 변형 근로시간제, 다양한 형태의 교대 근무제</li>
<li><strong>기능적 유연성</strong>: 근로자의 다기능공화</li>
<li><strong>임금 유연성</strong>: 기본급 구조의 개편, 보너스의 차등지급이나 성과배분 도입</li>
</ul>`,
  },
  {
    num: 99, category: 'labor_market', stars: 5,
    title: '노동조합 숍(shop) 제도',
    content: `<ul>
<li><strong>오픈 숍</strong>: 조합원이 아니라도 자유롭게 채용할 수 있는 숍 제도</li>
<li><strong>유니언 숍</strong>: 조합원이 아니라도 채용할 수 있지만 일단 채용된 노동자는 일정기간 내에 노동조합에 가입하여야 하며, 탈퇴·제명 시 해고</li>
<li><strong>클로즈드 숍</strong>: 조합에 가입하고 있는 노동자만을 채용하고, 조합원 자격 상실 시 종업원이 될 수 없음</li>
<li><strong>에이전시 숍</strong>: 조합원이 아니더라도 조합비를 징수하는 숍 제도</li>
</ul>`,
  },
  {
    num: 100, category: 'labor_market', stars: 3,
    title: '단체교섭의 유형',
    content: `<ul>
<li><strong>기업별 교섭</strong>: 기업단위 노동조합과 사용자가 교섭하는 방식</li>
<li><strong>집단교섭</strong>: 여러 개의 단위노조와 사용자가 집단으로 연합전선을 형성하여 교섭</li>
<li><strong>통일교섭</strong>: 전국에 걸친 산업별 노동조합과 산업별 또는 지역별 사용자단체 간의 교섭</li>
<li><strong>대각선교섭</strong>: 상부단체와 개별기업의 사용자 간에 이루어지는 교섭</li>
<li><strong>공동교섭</strong>: 기업별 노동조합이 상부단위의 노동조합과 공동으로 참가하여 기업별 사용자 측과 교섭</li>
</ul>`,
  },

  /* ===================================================================
     5과목: 고용노동관계법규 (labor_law) — 101~120
     =================================================================== */
  {
    num: 101, category: 'labor_law', stars: 4,
    title: '노동기본권',
    content: `<p>노동기본권이란 근로권과 노동3권을 말하며, 단체교섭권 및 단체행동권의 행사주체는 노동조합이다. 사용자는 단체행동권은 없으나 쟁의행위는 할 수 있다.</p>
<p><em>* 사용자의 쟁의행위: 직장폐쇄</em></p>`,
  },
  {
    num: 102, category: 'labor_law', stars: 4,
    title: '근로조건의 특별보호 대상과 단체행동권 제한대상',
    content: `<ul>
<li>여성근로자·연소근로자는 <strong>근로조건의 특별보호 대상</strong>이며, 국가유공자·상이군경·전몰군경 유가족은 <strong>우선적 근로기회를 부여받는 대상</strong>이다.</li>
<li>주요방위산업체 종사자 중 전력·용수 및 주로 방산물자 생산업무에 종사하는 자의 <strong>단체행동권은 제한</strong>된다.</li>
</ul>
<p><em>* 주요방위산업체 종사자의 단결권, 단체교섭권은 제한대상이 아니다.</em></p>`,
  },
  {
    num: 103, category: 'labor_law', stars: 3,
    title: '경영상 해고의 성립 요건',
    content: `<ul>
<li>긴박한 경영상의 필요, 해고회피노력, 합리적이고 공정한 해고기준, 근로자대표와의 협의</li>
<li>사용자는 근로자를 경영상 이유로 해고한 날부터 <strong>3년 이내</strong>에 해고된 근로자가 해고 당시 담당했던 업무와 같은 업무를 할 근로자를 채용하고자 할 때에는 해고된 근로자를 우선적으로 고용해야 한다(고용의무).</li>
</ul>`,
  },
  {
    num: 104, category: 'labor_law', stars: 4,
    title: '취업규칙의 작성·변경',
    content: `<p>취업규칙을 작성·변경하기 위해서는 근로자 <strong>과반수의 의견</strong>을 들어야 하며, <strong>불리하게 변경</strong>하는 경우에는 근로자 <strong>과반수의 동의</strong>를 얻어야 한다(근로자의 과반수로 조직된 노동조합이 있는 경우에는 그 노동조합의 동의를 얻어야 함).</p>`,
  },
  {
    num: 105, category: 'labor_law', stars: 3,
    title: '평균임금과 통상임금',
    content: `<ul>
<li><strong>평균임금으로 산정</strong>: 퇴직금, 휴업수당, 감급액, 재해보상금, 실업급여</li>
<li><strong>통상임금으로 산정</strong>: 해고예고수당, 연장근로·야간근로·휴일근로 가산수당, 법정유급휴일 및 법정유급휴가수당</li>
</ul>`,
  },
  {
    num: 106, category: 'labor_law', stars: 3,
    title: '이행강제금',
    content: `<p>노동위원회는 구제명령을 받은 자가 구제명령을 이행하면 새로운 이행강제금을 부과하지 아니하되, 구제명령을 이행하기 전에 이미 부과된 이행강제금은 징수해야 한다.</p>`,
  },
  {
    num: 107, category: 'labor_law', stars: 3,
    title: '유료직업소개',
    content: `<p>유료직업소개사업을 등록할 수 있는 자에서 공인노무사 등의 공인자격자가 아닌 개인의 경력은 모두 <strong>2년 이상</strong>인 자이여야 한다.</p>`,
  },
  {
    num: 108, category: 'labor_law', stars: 3,
    title: '자영업자 실업급여 종료',
    content: `<p>자영업자(근로자를 사용하지 않는 1인 사업자 및 50명 미만의 근로자를 사용하는 사업자)인 피보험자의 실업급여의 종류에서 <strong>연장급여와 조기재취업수당은 제외</strong>된다.</p>`,
  },
  {
    num: 109, category: 'labor_law', stars: 4,
    title: '훈련계약',
    content: `<p>사업주가 훈련계약을 체결할 때에는 해당 직업능력개발훈련을 받는 사람이 직업능력개발훈련을 이수한 후에 사업주가 지정하는 업무에 일정기간 종사하도록 할 수 있다. 이 경우 그 기간은 <strong>5년 이내</strong>로 하되, 직업능력개발훈련기간의 <strong>3배를 초과할 수 없다</strong>.</p>`,
  },
  {
    num: 110, category: 'labor_law', stars: 3,
    title: '고용보험 적용제외 근로자',
    content: `<ul>
<li>65세 이후에 고용되거나 자영업을 개시한 자</li>
<li>1개월간 소정근로시간이 60시간 미만인 자(1주간의 소정근로시간이 15시간 미만인 자 포함). 다만, 3개월 이상 계속하여 근로를 제공하는 자와 일용근로자는 제외</li>
<li>국가공무원법과 지방공무원법에 따른 공무원</li>
<li>사립학교교직원 연금법의 적용을 받는 자</li>
<li>별정우체국법에 따른 별정우체국 직원</li>
</ul>`,
  },
  {
    num: 111, category: 'labor_law', stars: 5,
    title: '실업급여의 종류',
    content: `<p>구직급여, 취업촉진수당(조기재취업수당, 직업능력개발수당, 광역구직활동비, 이주비)</p>`,
  },
  {
    num: 112, category: 'labor_law', stars: 3,
    title: '피보험단위기간 기준일',
    content: `<p>구직급여는 <strong>이직일 이전</strong>, 출산휴가급여는 <strong>휴가종료일 이전</strong>, 육아휴직급여는 <strong>휴직개시일 이전</strong> 피보험 단위기간이 통산하여 <strong>180일 이상</strong>이어야 한다.</p>`,
  },
  {
    num: 113, category: 'labor_law', stars: 4,
    title: '직업안정업무의 실시요건',
    content: `<p>무료직업소개사업·직업정보제공사업·국외근로자 모집은 <strong>신고</strong>, 유료직업소개사업은 <strong>등록</strong>, 근로자공급사업은 <strong>허가</strong>사항이다.</p>`,
  },
  {
    num: 114, category: 'labor_law', stars: 4,
    title: '직업정보제공사업자의 준수사항',
    content: `<p>직업정보제공매체의 구인·구직광고에는 <strong>구인·구직자의 주소 또는 전화번호를 기재</strong>하고, 직업정보제공사업자의 주소 또는 전화번호는 <strong>기재하지 아니한다</strong>.</p>`,
  },
  {
    num: 115, category: 'labor_law', stars: 4,
    title: '근로자의 개념',
    content: `<ul>
<li><strong>근로기준법</strong>: 사업주에게 고용된 사람</li>
<li><strong>남녀고용평등법, 근로자직업능력개발법</strong>: 사업주에게 고용된 사람과 취업할 의사가 있는 사람</li>
</ul>`,
  },
  {
    num: 116, category: 'labor_law', stars: 4,
    title: '직업능력개발훈련 비중시 대상',
    content: `<p>비진학 청소년, 제조업 연구직·사무직 종사자, 기간의 정함이 없는 근로자는 중요시되는 대상이 <strong>아니다</strong>.</p>
<p><em>* 비진학 청소년은 직업능력개발훈련의 실시대상에는 해당한다.</em></p>`,
  },
  {
    num: 117, category: 'labor_law', stars: 5,
    title: '직업능력개발훈련의 구분',
    content: `<ul>
<li><strong>훈련목적에 따라</strong>: 양성훈련·향상훈련·전직훈련</li>
<li><strong>훈련방법에 따라</strong>: 집체훈련·현장훈련·원격훈련·혼합훈련</li>
</ul>
<p><em>* 훈련교사 양성을 위한 훈련과정은 양성훈련·향상훈련·교직훈련과정으로 구분</em></p>`,
  },
  {
    num: 118, category: 'labor_law', stars: 3,
    title: '직장 내 성희롱 예방교육',
    content: `<p>상시 근로자가 <strong>10명 미만</strong>인 사업, 사업주 및 근로자 모두가 남성 또는 여성 중 어느 한 성(性)으로만 구성된 사업에서는 성희롱 예방교육 내용을 근로자가 알 수 있도록 교육자료 또는 홍보물을 게시하거나 배포하는 방법으로 직장 내 성희롱 예방교육을 대신할 수 있다.</p>`,
  },
  {
    num: 119, category: 'labor_law', stars: 3,
    title: '육아휴직',
    content: `<p>사업주는 근로자가 <strong>만 8세 이하 또는 초등학교 2학년 이하</strong>의 자녀(입양한 자녀 포함)를 양육하기 위하여 육아휴직을 신청하는 경우에 이를 허용해야 한다. 육아휴직기간은 <strong>1년 이내</strong>로 하며, 그 기간은 근속기간에 포함한다.</p>`,
  },
  {
    num: 120, category: 'labor_law', stars: 5,
    title: '개인정보보호위원회',
    content: `<p>개인정보 보호에 관한 사무를 독립적으로 수행하기 위하여 <strong>국무총리 소속</strong>으로 개인정보 보호위원회를 둔다.</p>`,
  },
];

/** 카테고리별 문항 필터 */
export function getKeynoteByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return KEYNOTE_DATA;
  return KEYNOTE_DATA.filter((q) => q.category === categoryId);
}

/** 카테고리별 문항 수 */
export function getKeynoteCounts() {
  const counts = {};
  for (const cat of KEYNOTE_CATEGORIES) {
    if (cat.id === 'all') continue;
    counts[cat.id] = KEYNOTE_DATA.filter((q) => q.category === cat.id).length;
  }
  counts.all = KEYNOTE_DATA.length;
  return counts;
}
