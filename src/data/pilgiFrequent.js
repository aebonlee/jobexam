/* ============================================
   JobPath - 필기 기출문제 빈출 주제 정리
   2010~2022 (39회 시험, 약 3,900문항 분석)
   총 60개 핵심 빈출 주제 | 5과목 분류
   ============================================ */

export const PILGI_FREQ_CATEGORIES = [
  { id: 'all', label: '전체', color: '#6366F1', icon: 'fa-solid fa-list' },
  { id: 'counseling', label: '직업상담학', color: '#3B82F6', icon: 'fa-solid fa-comments' },
  { id: 'psychology', label: '직업심리학', color: '#8B5CF6', icon: 'fa-solid fa-brain' },
  { id: 'jobinfo', label: '직업정보론', color: '#10B981', icon: 'fa-solid fa-circle-info' },
  { id: 'labor_market', label: '노동시장론', color: '#F59E0B', icon: 'fa-solid fa-chart-line' },
  { id: 'labor_law', label: '노동관계법규', color: '#EF4444', icon: 'fa-solid fa-scale-balanced' },
];

export const PILGI_FREQUENT = [
  /* ===================================================================
     1과목: 직업상담학 (counseling) — 12개 주제
     =================================================================== */
  {
    num: 1, category: 'counseling',
    title: '특성-요인 상담이론 (윌리엄슨)',
    keyword: '특성-요인이론, 윌리엄슨, Williamson',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>핵심 개념</strong>: 개인의 특성(흥미, 적성, 성격)과 직업의 요인(직무요건)을 매칭하는 이론</li>
<li><strong>상담 6단계</strong>: 분석 → 종합 → 진단 → 예후 → 상담(처치) → 추수지도</li>
<li><strong>진단 유형</strong>: 무선택, 불확실한 선택, 현명하지 못한 선택, 흥미와 적성 간의 불일치</li>
<li><strong>특징</strong>: 상담자 중심(지시적), 심리검사 활용, 합리적 의사결정 강조</li>
<li><strong>한계</strong>: 개인의 감정·가치관 경시, 환경적 요인 간과, 지나치게 이성적 접근</li>
</ul>`,
  },
  {
    num: 2, category: 'counseling',
    title: '로저스(Rogers)의 내담자 중심 상담',
    keyword: '로저스, 인간중심, 비지시적 상담',
    frequency: '거의 매회 (36/39회)',
    summary: `<ul>
<li><strong>핵심 조건 3가지</strong>: 무조건적 긍정적 존중, 공감적 이해, 진실성(일치성)</li>
<li><strong>인간관</strong>: 인간은 자아실현 경향이 있으며, 스스로 문제를 해결할 능력이 있다</li>
<li><strong>자아개념</strong>: 이상적 자아와 현실적 자아의 불일치가 부적응의 원인</li>
<li><strong>상담자 역할</strong>: 비지시적, 내담자의 자기탐색 촉진, 반영 기법 활용</li>
<li><strong>특징</strong>: 현상학적 관점, "지금-여기" 중시, 상담관계 자체가 치료적</li>
</ul>`,
  },
  {
    num: 3, category: 'counseling',
    title: '정신분석적 직업상담 (보딘)',
    keyword: '보딘, Bordin, 정신분석, 정신역동',
    frequency: '자주 출제 (30/39회)',
    summary: `<ul>
<li><strong>보딘(Bordin)</strong>: 직업문제를 정신역동적 관점으로 해석, 직업선택은 무의식적 욕구 충족</li>
<li><strong>핵심 개념</strong>: 자아방어기제, 전이와 역전이, 자유연상, 저항, 해석</li>
<li><strong>진단 범주</strong>: 의존, 정보 부족, 자아갈등, 선택불안, 무선택</li>
<li><strong>치료 목표</strong>: 무의식적 동기를 의식화하여 합리적 직업선택 가능하게 함</li>
<li><strong>특징</strong>: 조기 아동기 경험과 직업선택의 관계, 욕구-직업 매칭</li>
</ul>`,
  },
  {
    num: 4, category: 'counseling',
    title: '행동주의 상담이론 (학습이론)',
    keyword: '행동주의, 강화, 체계적 둔감법, 크럼볼츠',
    frequency: '자주 출제 (32/39회)',
    summary: `<ul>
<li><strong>핵심 원리</strong>: 모든 행동은 학습된 것이며, 새로운 학습을 통해 변화 가능</li>
<li><strong>주요 기법</strong>: 강화(정적/부적), 체계적 둔감법, 모델링, 행동계약, 토큰경제, 자기관리</li>
<li><strong>크럼볼츠 사회학습이론</strong>: 유전적 요인, 환경적 조건, 학습경험, 과제접근기술 → 진로결정에 영향</li>
<li><strong>상담 과정</strong>: 목표행동 설정 → 기초선 측정 → 기법 적용 → 평가</li>
<li><strong>특징</strong>: 구체적·측정 가능한 목표, 과학적·객관적 접근</li>
</ul>`,
  },
  {
    num: 5, category: 'counseling',
    title: '게슈탈트 상담이론 (펄스)',
    keyword: '펄스, 게슈탈트, 미해결과제, 알아차림',
    frequency: '자주 출제 (28/39회)',
    summary: `<ul>
<li><strong>핵심 개념</strong>: "지금-여기(here and now)", 알아차림(awareness), 미해결 과제, 전경과 배경</li>
<li><strong>접촉경계혼란</strong>: 내사, 투사, 융합(합류), 반전, 편향</li>
<li><strong>주요 기법</strong>: 빈의자 기법, 과장법, 실험, 반대하기, "나는 ~에 책임진다" 문장 완성</li>
<li><strong>인간관</strong>: 전체적 존재, 자기조절 능력 보유, 환경과의 접촉 중시</li>
<li><strong>상담 목표</strong>: 미해결 과제 해결, 접촉 회복, 통합적 자기인식</li>
</ul>`,
  },
  {
    num: 6, category: 'counseling',
    title: '인지·정서·행동 상담 (REBT, 엘리스)',
    keyword: '엘리스, Ellis, REBT, ABC모형, 비합리적 신념',
    frequency: '자주 출제 (33/39회)',
    summary: `<ul>
<li><strong>ABC 모형</strong>: A(선행사건) → B(비합리적 신념) → C(결과/부적응 행동)</li>
<li><strong>D-E 확장</strong>: D(논박, Disputing) → E(효과, 합리적 사고)</li>
<li><strong>비합리적 신념 11가지</strong>: 당위적 사고("반드시 ~해야 한다"), 파국화, 과잉일반화 등</li>
<li><strong>상담 기법</strong>: 논박(인지적/정서적/행동적), 합리적 정서심상, 자기주장 훈련, 수치심 공격 연습</li>
<li><strong>특징</strong>: 지시적·교육적 상담, 비합리적 신념 변화가 핵심 목표</li>
</ul>`,
  },
  {
    num: 7, category: 'counseling',
    title: '상담기법: 관계형성 기술',
    keyword: '경청, 공감, 반영, 구조화, 질문기법',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>경청(적극적 경청)</strong>: 언어적·비언어적 메시지에 주의, 명료화, 재진술, 요약</li>
<li><strong>공감</strong>: 초보적 공감(내용 반영) vs 심화적 공감(감정+의미 반영)</li>
<li><strong>질문 기법</strong>: 개방형 질문 vs 폐쇄형 질문, 직면, 해석</li>
<li><strong>구조화</strong>: 상담 초기에 상담의 목적·과정·규칙을 안내</li>
<li><strong>직면</strong>: 내담자의 모순·불일치를 지적 (시기와 방법 중요)</li>
<li><strong>즉시성</strong>: 상담관계에서 지금 일어나는 것을 다루는 기술</li>
</ul>`,
  },
  {
    num: 8, category: 'counseling',
    title: '직업상담 과정 및 기법',
    keyword: '초기면담, 사례개념화, 목표설정, 종결',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>상담 과정</strong>: 관계형성 → 문제파악(사정) → 목표설정 → 개입(실행) → 종결·추수지도</li>
<li><strong>초기면담</strong>: 라포 형성, 주호소문제 파악, 내담자의 기대 확인</li>
<li><strong>사례개념화</strong>: 문제의 원인·유지요인·관련변인 분석, 상담전략 수립</li>
<li><strong>목표설정 원칙</strong>: 구체적, 측정 가능, 현실적, 내담자 동의</li>
<li><strong>종결 조건</strong>: 목표 달성, 내담자 자기관리 능력 확보, 추수지도 계획 수립</li>
</ul>`,
  },
  {
    num: 9, category: 'counseling',
    title: '직업상담의 윤리',
    keyword: '비밀보장, 이중관계, 윤리원칙, 한계',
    frequency: '자주 출제 (25/39회)',
    summary: `<ul>
<li><strong>비밀보장</strong>: 상담내용 비밀유지가 원칙, 예외(자·타해 위험, 아동학대, 법원명령 등)</li>
<li><strong>이중관계 금지</strong>: 상담관계 외 사적 관계 형성 금지</li>
<li><strong>사전동의(Informed Consent)</strong>: 상담 전 과정·비용·비밀보장 한계 안내</li>
<li><strong>윤리원칙</strong>: 자율성, 선행, 악행금지, 공정성, 충실성</li>
<li><strong>전문성 유지</strong>: 수련·교육·자문 의무, 자신의 능력범위 내 상담</li>
</ul>`,
  },
  {
    num: 10, category: 'counseling',
    title: '집단상담의 이론과 과정',
    keyword: '집단상담, 집단역동, 응집력, 치료요인',
    frequency: '자주 출제 (27/39회)',
    summary: `<ul>
<li><strong>얄롬(Yalom)의 치료요인 11가지</strong>: 희망주입, 보편성, 정보제공, 이타심, 사회화기술, 모방행동, 카타르시스, 실존적 요인, 집단응집력, 가족의 교정적 재현, 대인학습</li>
<li><strong>집단상담 과정</strong>: 초기(탐색) → 전환기(갈등) → 작업(생산) → 종결</li>
<li><strong>집단역동</strong>: 응집력, 하위집단, 갈등, 저항, 전이</li>
<li><strong>집단지도자 역할</strong>: 촉진자, 모델링, 피드백 제공, 갈등중재</li>
</ul>`,
  },
  {
    num: 11, category: 'counseling',
    title: '심리검사의 이해와 활용',
    keyword: '심리검사, 표준화검사, 신뢰도, 타당도',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>표준화 검사 요건</strong>: 신뢰도, 타당도, 객관성, 규준, 실용성</li>
<li><strong>신뢰도 종류</strong>: 검사-재검사, 동형검사, 반분, 내적일관성(Cronbach α)</li>
<li><strong>타당도 종류</strong>: 내용타당도, 준거타당도(예측/공인), 구인타당도(수렴/변별)</li>
<li><strong>검사 해석</strong>: 규준참조 vs 준거참조, 백분위, 표준점수(T점수, Z점수)</li>
<li><strong>직업상담에서 활용</strong>: 흥미검사, 적성검사, 성격검사, 가치관검사</li>
</ul>`,
  },
  {
    num: 12, category: 'counseling',
    title: '직업의사결정 이론',
    keyword: '의사결정, 합리적모형, 젤라트, 힐튼, 타이드만',
    frequency: '자주 출제 (34/39회)',
    summary: `<ul>
<li><strong>젤라트(Gelatt)</strong>: 예측체제(확률), 가치체제(선호도), 기준체제(규칙) → 조사적/최종적 결정</li>
<li><strong>힐튼(Hilton)</strong>: 인지부조화 모형 — 자아개념과 직업정보 간 불일치가 의사결정 촉발</li>
<li><strong>타이드만과 오하라</strong>: 예상기(탐색·구체화·선택·명료화)와 실행기(순응·개혁·통합)</li>
<li><strong>의사결정 유형(하렌)</strong>: 합리적, 직관적, 의존적</li>
<li><strong>진로미결정</strong>: 정보부족, 동기부족, 우유부단, 외적장벽</li>
</ul>`,
  },

  /* ===================================================================
     2과목: 직업심리학 (psychology) — 12개 주제
     =================================================================== */
  {
    num: 13, category: 'psychology',
    title: '홀랜드(Holland)의 직업성격유형론',
    keyword: '홀랜드, RIASEC, 6각형 모형, 일치성',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>6가지 유형(RIASEC)</strong>: 현실형(R), 탐구형(I), 예술형(A), 사회형(S), 진취형(E), 관습형(C)</li>
<li><strong>주요 개념</strong>: 일치성(개인-환경 적합), 분화도(유형간 차이), 일관성(인접유형 관계), 정체성</li>
<li><strong>6각형 모형</strong>: RIASEC 순서 배치, 인접유형 유사·대각유형 상이</li>
<li><strong>검사도구</strong>: SDS(자기탐색검사), VPI(직업선호도검사)</li>
<li><strong>한계</strong>: 문화적 차이 반영 미흡, 6유형으로 축소, 변화 가능성 경시</li>
</ul>`,
  },
  {
    num: 14, category: 'psychology',
    title: '슈퍼(Super)의 진로발달이론',
    keyword: '슈퍼, 진로발달, 생애무지개, 자아개념',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>진로발달단계</strong>: 성장기(~14) → 탐색기(15~24) → 확립기(25~44) → 유지기(45~64) → 쇠퇴기(65~)</li>
<li><strong>생애무지개 모형(Life-Career Rainbow)</strong>: 생애단계(가로)×역할(세로) — 자녀, 학생, 여가인, 시민, 근로자, 가정인 등</li>
<li><strong>아치모형(Archway)</strong>: 개인적 요인과 사회적 요인이 자아개념을 형성</li>
<li><strong>진로성숙</strong>: 진로선택에 대한 태도·지식·기술의 발달 정도</li>
<li><strong>자아개념</strong>: 직업적 자아개념 형성·실행·변환이 진로발달의 핵심</li>
</ul>`,
  },
  {
    num: 15, category: 'psychology',
    title: '긴즈버그(Ginzberg)의 진로발달이론',
    keyword: '긴즈버그, 환상기, 잠정기, 현실기',
    frequency: '자주 출제 (30/39회)',
    summary: `<ul>
<li><strong>3단계</strong>: 환상기(~11세) → 잠정기(11~17세) → 현실기(17세~성인초기)</li>
<li><strong>잠정기 4단계</strong>: 흥미 → 능력 → 가치 → 전환</li>
<li><strong>현실기 3단계</strong>: 탐색 → 구체화 → 특수화</li>
<li><strong>핵심 주장</strong>: 직업선택은 비가역적(초기) → 후에 수정(평생 과정으로 변경)</li>
<li><strong>한계</strong>: 중산층 남성 중심, 경제·사회적 요인 경시</li>
</ul>`,
  },
  {
    num: 16, category: 'psychology',
    title: '고트프레드슨(Gottfredson)의 제한-타협이론',
    keyword: '고트프레드슨, 인지적 지도, 제한, 타협',
    frequency: '자주 출제 (28/39회)',
    summary: `<ul>
<li><strong>제한(Circumscription)</strong>: 자아개념에 맞지 않는 직업을 배제하는 과정</li>
<li><strong>타협(Compromise)</strong>: 현실적 제약에 따라 직업포부를 조정하는 과정</li>
<li><strong>발달 4단계</strong>: 크기·힘 지향(3~5세) → 성역할 지향(6~8세) → 사회적 가치 지향(9~13세) → 내적 자아 지향(14세~)</li>
<li><strong>타협 우선순위</strong>: 흥미 먼저 포기 → 사회적 지위 → 성유형(가장 마지막)</li>
<li><strong>인지적 지도</strong>: 성유형(남성적-여성적)과 직업위세(사회적 지위) 2차원</li>
</ul>`,
  },
  {
    num: 17, category: 'psychology',
    title: '로(Roe)의 욕구이론',
    keyword: '로, Roe, 욕구위계, 양육태도, 직업분류',
    frequency: '자주 출제 (26/39회)',
    summary: `<ul>
<li><strong>이론 기반</strong>: 매슬로우 욕구위계 + 부모 양육태도 → 직업선택에 영향</li>
<li><strong>양육태도 유형</strong>: 과잉보호, 과잉요구, 수용, 거부, 무관심, 무시</li>
<li><strong>직업분류</strong>: 8개 집단(봉사, 사업, 조직, 기술, 옥외, 과학, 일반문화, 예술·오락) × 6수준</li>
<li><strong>대인지향 vs 비대인지향</strong>: 온정적 양육 → 대인지향 직업 / 냉담·거부 → 비대인지향</li>
<li><strong>한계</strong>: 양육태도와 직업선택 간 인과관계 실증 부족</li>
</ul>`,
  },
  {
    num: 18, category: 'psychology',
    title: '사회인지진로이론 (SCCT, 반두라/렌트)',
    keyword: 'SCCT, 자기효능감, 결과기대, 반두라',
    frequency: '자주 출제 (31/39회)',
    summary: `<ul>
<li><strong>핵심 변인 3가지</strong>: 자기효능감, 결과기대, 개인목표</li>
<li><strong>자기효능감 4가지 원천</strong>: 성취경험(가장 강력), 대리경험, 언어적 설득, 정서적 각성</li>
<li><strong>3가지 모형</strong>: 흥미발달모형, 진로선택모형, 수행모형</li>
<li><strong>흥미발달</strong>: 자기효능감 + 결과기대 → 흥미 → 목표 → 행동 → 성취</li>
<li><strong>특징</strong>: 개인의 주체성(agency) 강조, 환경적 장벽·지지 고려</li>
</ul>`,
  },
  {
    num: 19, category: 'psychology',
    title: '직업흥미검사 (스트롱, 쿠더)',
    keyword: '흥미검사, 스트롱, SII, 쿠더, 직업선호도',
    frequency: '자주 출제 (33/39회)',
    summary: `<ul>
<li><strong>스트롱 흥미검사(SII)</strong>: GOT(일반직업주제-RIASEC), BIS(기본흥미척도), OS(직업척도), PSS(개인특성척도)</li>
<li><strong>쿠더 직업흥미검사</strong>: 10개 흥미영역(옥외, 기계, 계산, 과학, 설득, 예술, 문학, 음악, 사회봉사, 사무)</li>
<li><strong>흥미의 특성</strong>: 비교적 안정적, 표현된 흥미·검사된 흥미·명시된 흥미·측정된 흥미</li>
<li><strong>직업선호도 검사(VPI)</strong>: 홀랜드의 6유형 측정</li>
<li><strong>활용</strong>: 진로탐색, 전공선택, 직업전환 상담 등</li>
</ul>`,
  },
  {
    num: 20, category: 'psychology',
    title: '직업적성검사',
    keyword: '적성검사, GATB, DAT, 일반적성',
    frequency: '자주 출제 (30/39회)',
    summary: `<ul>
<li><strong>GATB(일반적성검사)</strong>: 미국 고용서비스국 개발, 9개 적성요인(G, V, N, S, P, Q, K, F, M)</li>
<li><strong>G(일반학습능력)</strong>, V(언어능력), N(수리능력), S(공간지각), P(형태지각), Q(사무지각), K(운동조정), F(손재주), M(손가락재주)</li>
<li><strong>DAT(차별적성검사)</strong>: 8개 하위검사, 교육·진로지도에 활용</li>
<li><strong>적성 vs 흥미</strong>: 적성은 '할 수 있는 것', 흥미는 '하고 싶은 것'</li>
<li><strong>적성과 직무 매칭</strong>: 직업별 OAP(직업적성유형) 활용</li>
</ul>`,
  },
  {
    num: 21, category: 'psychology',
    title: '직업발달과 진로성숙',
    keyword: '진로성숙, 진로적응성, 크라이티스, 사비카스',
    frequency: '자주 출제 (27/39회)',
    summary: `<ul>
<li><strong>진로성숙(Career Maturity)</strong>: 크라이티스가 개념화, 연령에 따른 진로발달 수준</li>
<li><strong>진로성숙 구성요인</strong>: 진로계획성, 진로탐색, 의사결정, 일의 세계에 대한 지식</li>
<li><strong>진로적응성(Career Adaptability)</strong>: 사비카스(Savickas) 제안, 관심(concern), 통제(control), 호기심(curiosity), 확신(confidence)</li>
<li><strong>사비카스 진로구성이론</strong>: 개인의 진로이야기(narrative)를 통해 자아 구성</li>
<li><strong>측정도구</strong>: CMI(진로성숙도검사), 진로결정자기효능감 척도</li>
</ul>`,
  },
  {
    num: 22, category: 'psychology',
    title: '직업적응이론 (TWA, 미네소타)',
    keyword: 'TWA, 직업적응, 만족, 충족, 미네소타',
    frequency: '자주 출제 (29/39회)',
    summary: `<ul>
<li><strong>핵심 개념</strong>: 만족(Satisfaction, 개인→환경)과 충족(Satisfactoriness, 환경→개인)의 일치</li>
<li><strong>상호작용</strong>: 개인의 욕구·가치 ↔ 직업의 강화체계(보상)</li>
<li><strong>적응 결과</strong>: 재직, 승진, 이직, 해고</li>
<li><strong>직업가치 6가지</strong>: 성취, 편안함, 지위, 이타, 안전, 자율</li>
<li><strong>성격유형 요소</strong>: 민첩성, 역량, 리듬, 지구력</li>
<li><strong>적응방식</strong>: 융통성, 끈기, 반응성, 적극성</li>
</ul>`,
  },
  {
    num: 23, category: 'psychology',
    title: '스트레스와 직업건강심리학',
    keyword: '스트레스, 직무소진, 번아웃, 대처방식',
    frequency: '자주 출제 (25/39회)',
    summary: `<ul>
<li><strong>셀리에(Selye) GAS 3단계</strong>: 경고반응 → 저항 → 소진</li>
<li><strong>직무스트레스 요인</strong>: 역할과부하, 역할모호, 역할갈등, 대인갈등, 경력정체</li>
<li><strong>번아웃(Burnout) 3요소</strong>: 정서적 소진, 비인격화(냉소), 개인적 성취감 저하</li>
<li><strong>스트레스 대처</strong>: 문제중심 대처 vs 정서중심 대처</li>
<li><strong>라자러스 인지평가모형</strong>: 1차 평가(위협?) → 2차 평가(대처자원?) → 재평가</li>
</ul>`,
  },
  {
    num: 24, category: 'psychology',
    title: '동기이론 (직무동기)',
    keyword: '매슬로우, 허즈버그, 브룸, 기대이론, ERG',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>매슬로우 욕구위계</strong>: 생리 → 안전 → 소속·애정 → 존경 → 자아실현</li>
<li><strong>허즈버그 2요인이론</strong>: 위생요인(불만족 방지)과 동기요인(만족 촉진)</li>
<li><strong>앨더퍼 ERG</strong>: 존재(E), 관계(R), 성장(G) — 좌절-회귀 가설</li>
<li><strong>브룸 기대이론</strong>: 동기 = 기대(E) × 수단(I) × 유의성(V)</li>
<li><strong>아담스 공정성이론</strong>: 투입/산출 비율 비교 → 불공정 지각 시 행동 변화</li>
<li><strong>로크 목표설정이론</strong>: 구체적·도전적 목표가 동기 강화</li>
</ul>`,
  },

  /* ===================================================================
     3과목: 직업정보론 (jobinfo) — 12개 주제
     =================================================================== */
  {
    num: 25, category: 'jobinfo',
    title: '한국표준직업분류(KSCO)',
    keyword: 'KSCO, 직업분류, 대분류, 직능수준',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>분류 기준</strong>: 직무유사성(수행 직무의 유형)과 직능수준(숙련도)</li>
<li><strong>직능수준 4단계</strong>: 1수준(단순반복) ~ 4수준(고도전문)</li>
<li><strong>대분류 10개</strong>: 관리자, 전문가, 기술자, 사무종사자, 서비스, 판매, 농림어업, 기능원, 장치·기계조작, 단순노무</li>
<li><strong>분류 체계</strong>: 대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</li>
<li><strong>분류 원칙</strong>: 포괄성, 상호배타성, 직무유사성 기준</li>
</ul>`,
  },
  {
    num: 26, category: 'jobinfo',
    title: '한국표준산업분류(KSIC)',
    keyword: 'KSIC, 산업분류, 생산단위, 산업활동',
    frequency: '자주 출제 (35/39회)',
    summary: `<ul>
<li><strong>분류 대상</strong>: 생산단위(사업체)의 산업활동</li>
<li><strong>분류 기준</strong>: 산출물(재화·서비스)의 특성, 투입물, 생산과정</li>
<li><strong>대분류 21개</strong>: A(농업)~U(국제기관) — 알파벳 코드</li>
<li><strong>분류 체계</strong>: 대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</li>
<li><strong>직업분류와 차이</strong>: 산업분류=사업체 기준, 직업분류=개인 수행직무 기준</li>
</ul>`,
  },
  {
    num: 27, category: 'jobinfo',
    title: '한국직업사전과 직업정보 체계',
    keyword: '한국직업사전, 직업코드, 부가직업정보',
    frequency: '자주 출제 (33/39회)',
    summary: `<ul>
<li><strong>한국직업사전</strong>: 한국고용정보원 발행, 직무분석 기반의 직업해설서</li>
<li><strong>수록 내용</strong>: 직업명, 직업코드, 직무개요, 수행직무, 정규교육, 자격면허, 부가정보</li>
<li><strong>부가직업정보</strong>: DPT(자료·사람·사물 관계), GED(일반교육발달), SVP(특수직업준비), 작업강도, 작업환경</li>
<li><strong>DPT 코드</strong>: D(자료 0~6), P(사람 0~8), T(사물 0~7) — 숫자 낮을수록 높은 수준</li>
<li><strong>워크넷(Work-Net)</strong>: 한국고용정보원 운영, 직업·훈련·채용 통합 정보</li>
</ul>`,
  },
  {
    num: 28, category: 'jobinfo',
    title: '직업정보의 수집·분석·제공',
    keyword: '직업정보, 정보원, 직무분석, 취업정보',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>직업정보 종류</strong>: 직업의 전망, 보수, 근무조건, 자격요건, 교육·훈련</li>
<li><strong>정보 수집 방법</strong>: 문헌조사, 면접, 설문, 관찰, 인터넷 검색, 직업체험</li>
<li><strong>직업정보 출처</strong>: 한국직업사전, 한국직업전망서, 워크넷, 커리어넷, 고용보험통계</li>
<li><strong>직업정보 평가기준</strong>: 정확성, 최신성, 충분성, 활용가능성</li>
<li><strong>직업정보 제공 방법</strong>: 상담, 집단지도, 미디어, 온라인, 직업박람회</li>
</ul>`,
  },
  {
    num: 29, category: 'jobinfo',
    title: '직무분석의 방법과 활용',
    keyword: '직무분석, 최초법, FJA, PAQ, 과업',
    frequency: '자주 출제 (34/39회)',
    summary: `<ul>
<li><strong>직무분석 정의</strong>: 직무의 내용·특성·요건을 체계적으로 분석하는 과정</li>
<li><strong>결과물</strong>: 직무기술서(Job Description)와 직무명세서(Job Specification)</li>
<li><strong>방법</strong>: 관찰법, 면접법, 설문법, 작업일지법, 최초분석법, 중요사건기법(CIT)</li>
<li><strong>FJA(기능적직무분석)</strong>: DPT(자료·사람·사물) 수준 분석</li>
<li><strong>PAQ(직위분석질문지)</strong>: 정보투입, 정신과정, 작업산출, 대인관계, 직무상황, 기타 특성</li>
</ul>`,
  },
  {
    num: 30, category: 'jobinfo',
    title: '고용서비스와 직업안정기관',
    keyword: '고용센터, 직업안정기관, 직업소개, 고용서비스',
    frequency: '자주 출제 (28/39회)',
    summary: `<ul>
<li><strong>공공고용서비스</strong>: 고용노동부 산하 고용센터(전국 약 100개소)</li>
<li><strong>고용센터 업무</strong>: 직업소개·상담, 취업알선, 고용보험 업무, 직업훈련, 취업지원</li>
<li><strong>민간고용서비스</strong>: 유료직업소개사업, 무료직업소개사업, 근로자파견사업</li>
<li><strong>직업안정법 주요 내용</strong>: 직업소개사업 신고·등록, 금지사항(강제근로, 연령차별 등)</li>
<li><strong>한국고용정보원</strong>: 고용정보 분석, 직업·진로 연구, 워크넷 운영</li>
</ul>`,
  },
  {
    num: 31, category: 'jobinfo',
    title: '직업전망과 고용동향',
    keyword: '직업전망, 고용동향, 직종별전망, 노동시장전망',
    frequency: '자주 출제 (26/39회)',
    summary: `<ul>
<li><strong>한국직업전망서</strong>: 한국고용정보원 발행, 주요 직업의 현황·전망·임금 수록</li>
<li><strong>전망 요인</strong>: 산업구조 변화, 기술발전, 인구변화, 정부정책, 가치관 변화</li>
<li><strong>유망 직업 기준</strong>: 고용 증가, 임금 수준, 고용 안정성, 발전 가능성</li>
<li><strong>고용동향 지표</strong>: 고용률, 실업률, 경제활동참가율, 취업자 수, 비정규직 비율</li>
<li><strong>OECD 고용전망</strong>: 국제비교 자료, 노동시장 정책 평가</li>
</ul>`,
  },
  {
    num: 32, category: 'jobinfo',
    title: '국가직무능력표준(NCS)',
    keyword: 'NCS, 직무능력, 능력단위, 학습모듈',
    frequency: '자주 출제 (20/39회)',
    summary: `<ul>
<li><strong>NCS 정의</strong>: 산업현장에서 직무 수행에 필요한 지식·기술·소양을 국가가 체계화한 것</li>
<li><strong>구성</strong>: 대분류(24개) → 중분류 → 소분류 → 세분류 → 능력단위 → 능력단위요소</li>
<li><strong>능력단위 구성</strong>: 능력단위요소, 수행준거, 지식·기술·태도, 적용범위 및 작업상황</li>
<li><strong>NCS 학습모듈</strong>: NCS 기반 교육·훈련과정 편성을 위한 교재</li>
<li><strong>활용분야</strong>: 교육과정 개편, 자격설계, 채용·배치, 직업훈련</li>
</ul>`,
  },
  {
    num: 33, category: 'jobinfo',
    title: '워크넷과 커리어넷 활용',
    keyword: '워크넷, 커리어넷, 직업심리검사, 온라인정보',
    frequency: '자주 출제 (24/39회)',
    summary: `<ul>
<li><strong>워크넷(Work-Net)</strong>: 한국고용정보원 운영, 구인·구직·직업정보·직업심리검사</li>
<li><strong>워크넷 심리검사</strong>: 직업선호도검사, 직업가치관검사, 구직준비도검사, 영업적성검사 등</li>
<li><strong>커리어넷</strong>: 한국직업능력연구원 운영, 청소년 진로정보·상담·검사 제공</li>
<li><strong>커리어넷 검사</strong>: 직업적성검사, 직업흥미검사, 직업가치관검사 등</li>
<li><strong>기타 정보원</strong>: HRD-Net(훈련정보), Q-Net(자격정보), 잡코리아·사람인(민간)</li>
</ul>`,
  },
  {
    num: 34, category: 'jobinfo',
    title: '진로교육과 직업지도',
    keyword: '진로교육, 직업지도, 학교진로, 진로체험',
    frequency: '자주 출제 (22/39회)',
    summary: `<ul>
<li><strong>진로교육 5대 목표</strong>: 자아이해, 직업세계 이해, 진로탐색, 진로설계, 진로준비</li>
<li><strong>진로교육법</strong>: 2015년 시행, 학교 진로교육의 법적 근거</li>
<li><strong>직업지도 방법</strong>: 진로상담, 집단지도, 직업체험, 견학, 멘토링, 포트폴리오</li>
<li><strong>학교 진로교육</strong>: 진로전담교사 배치, 진로체험 의무화, 자유학기제</li>
<li><strong>성인 진로지도</strong>: 전직·재취업 지원, 경력개발, 평생학습</li>
</ul>`,
  },
  {
    num: 35, category: 'jobinfo',
    title: '자격제도와 국가기술자격',
    keyword: '자격제도, 국가기술자격, 과정평가형, NCS자격',
    frequency: '자주 출제 (25/39회)',
    summary: `<ul>
<li><strong>국가기술자격 등급</strong>: 기술사, 기능장, 기사, 산업기사, 기능사</li>
<li><strong>국가전문자격</strong>: 개별 법령에 의한 자격(변호사, 의사, 공인중개사 등)</li>
<li><strong>민간자격</strong>: 국가공인 민간자격과 등록 민간자격으로 구분</li>
<li><strong>과정평가형 자격</strong>: NCS 기반 교육·훈련과정 이수 후 내·외부 평가로 자격 부여</li>
<li><strong>자격의 기능</strong>: 능력인증, 인력수급, 교육·훈련 방향 제시, 임금결정 참고</li>
</ul>`,
  },
  {
    num: 36, category: 'jobinfo',
    title: '경력개발과 생애설계',
    keyword: '경력개발, CDP, 전직지원, 생애설계',
    frequency: '자주 출제 (23/39회)',
    summary: `<ul>
<li><strong>경력개발(CDP)</strong>: 개인의 경력목표와 조직의 인력수요를 통합하는 체계적 과정</li>
<li><strong>경력 단계</strong>: 탐색 → 확립 → 유지 → 쇠퇴(은퇴)</li>
<li><strong>경력정체(Career Plateau)</strong>: 승진·이동 가능성이 낮아진 상태</li>
<li><strong>전직지원서비스</strong>: 아웃플레이스먼트, 재취업 상담, 경력전환 코칭</li>
<li><strong>생애설계</strong>: 은퇴 후 삶의 목표, 재무, 건강, 여가, 사회활동 설계</li>
</ul>`,
  },

  /* ===================================================================
     4과목: 노동시장론 (labor_market) — 12개 주제
     =================================================================== */
  {
    num: 37, category: 'labor_market',
    title: '노동의 수요와 공급',
    keyword: '노동수요, 노동공급, 균형임금, 파생수요',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>노동수요</strong>: 파생수요(생산물 수요에서 파생), 한계생산가치(VMP)에 의해 결정</li>
<li><strong>노동수요곡선</strong>: 우하향, 임금↑ → 노동수요↓ (대체효과+규모효과)</li>
<li><strong>노동공급</strong>: 개인의 노동-여가 선택, 소득효과와 대체효과</li>
<li><strong>후방굴절 노동공급곡선</strong>: 임금 상승 시 소득효과>대체효과 → 노동공급↓</li>
<li><strong>균형</strong>: 수요=공급 교차점에서 균형임금·균형고용량 결정</li>
</ul>`,
  },
  {
    num: 38, category: 'labor_market',
    title: '임금이론과 임금결정',
    keyword: '임금, 보상적격차, 효율임금, 인적자본',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>보상적 임금격차</strong>: 비금전적 직무특성(위험, 불쾌)에 대한 보상 차이</li>
<li><strong>효율임금이론</strong>: 시장균형 이상의 임금 → 생산성 향상, 이직률 감소</li>
<li><strong>인적자본론(Becker)</strong>: 교육·훈련 투자 → 생산성 상승 → 임금 상승</li>
<li><strong>이중노동시장론</strong>: 1차(고임금·안정) vs 2차(저임금·불안정) 분단</li>
<li><strong>임금체계</strong>: 연공급, 직무급, 직능급, 성과급</li>
</ul>`,
  },
  {
    num: 39, category: 'labor_market',
    title: '인적자본이론 (Becker, Schultz)',
    keyword: '인적자본, Becker, 교육투자, 훈련투자',
    frequency: '자주 출제 (35/39회)',
    summary: `<ul>
<li><strong>인적자본</strong>: 교육·훈련·경험 등을 통해 축적된 생산능력</li>
<li><strong>교육투자 수익률</strong>: 비용(기회비용+직접비) vs 편익(생애임금 증가)</li>
<li><strong>일반훈련</strong>: 모든 기업에 이전 가능 → 근로자가 비용 부담</li>
<li><strong>기업특수훈련</strong>: 해당 기업에서만 유용 → 기업이 비용 부담</li>
<li><strong>선별(Screening)이론</strong>: 교육은 생산성 향상이 아닌 능력 신호 기능(스펜스)</li>
</ul>`,
  },
  {
    num: 40, category: 'labor_market',
    title: '실업의 유형과 대책',
    keyword: '실업, 마찰적실업, 구조적실업, 경기적실업',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>마찰적 실업</strong>: 직장이동 과정에서 발생, 정보부족이 원인 — 고용정보 제공으로 완화</li>
<li><strong>구조적 실업</strong>: 산업구조 변화, 기술변화로 발생 — 직업훈련·재훈련으로 대응</li>
<li><strong>경기적(순환적) 실업</strong>: 경기침체로 인한 총수요 부족 — 재정·통화정책으로 대응</li>
<li><strong>계절적 실업</strong>: 계절적 수요변동 — 공공근로, 계절적 직업알선</li>
<li><strong>실업률</strong>: 실업자/(취업자+실업자)×100, ILO 기준</li>
<li><strong>자연실업률</strong>: 마찰적+구조적 실업률, 프리드먼의 개념</li>
</ul>`,
  },
  {
    num: 41, category: 'labor_market',
    title: '노동시장의 구조와 유연성',
    keyword: '이중노동시장, 내부노동시장, 유연성, 분단',
    frequency: '자주 출제 (32/39회)',
    summary: `<ul>
<li><strong>이중노동시장론(Doeringer & Piore)</strong>: 1차(고임금·승진기회·고용안정) vs 2차(저임금·불안정·제한적 기회)</li>
<li><strong>내부노동시장</strong>: 기업 내 인사규칙에 의해 임금·배치 결정, 입직구(ports of entry)를 통해서만 진입</li>
<li><strong>외부노동시장</strong>: 시장의 수요공급에 의해 임금·고용 결정</li>
<li><strong>노동시장 유연성</strong>: 수량적(고용·해고), 기능적(직무전환), 임금(성과연동), 시간적(근무시간)</li>
<li><strong>유연안정성(Flexicurity)</strong>: 유연성+안정성 동시 추구(덴마크 모델)</li>
</ul>`,
  },
  {
    num: 42, category: 'labor_market',
    title: '노동시장 차별이론',
    keyword: '차별, 편견, 통계적차별, 직종분리',
    frequency: '자주 출제 (28/39회)',
    summary: `<ul>
<li><strong>베커(Becker) 차별이론</strong>: 편견에 의한 차별, 차별계수(d) — 고용주·동료·고객 차별</li>
<li><strong>통계적 차별</strong>: 집단 평균 특성으로 개인을 판단 (정보비용 절감 목적)</li>
<li><strong>직종분리(Occupational Segregation)</strong>: 성별·인종별 직종 집중현상</li>
<li><strong>이중노동시장 차별</strong>: 특정 집단이 2차 노동시장에 집중</li>
<li><strong>차별 시정 정책</strong>: 적극적 고용개선조치(AA), 동일가치노동 동일임금 원칙</li>
</ul>`,
  },
  {
    num: 43, category: 'labor_market',
    title: '노동조합과 단체교섭',
    keyword: '노동조합, 단체교섭, 단체협약, 교섭구조',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>노동조합의 기능</strong>: 경제적(임금·근로조건 개선), 정치적(정책 참여), 공제적(상호부조)</li>
<li><strong>조합의 임금효과</strong>: 조합-비조합 임금격차, 위협효과, 대기실업</li>
<li><strong>단체교섭 유형</strong>: 기업별, 산업별, 직종별, 대각선, 통일교섭, 집단교섭</li>
<li><strong>단체협약</strong>: 규범적 부분(근로조건)과 채무적 부분(평화의무 등)</li>
<li><strong>쟁의행위</strong>: 파업, 태업, 직장폐쇄, 보이콧, 피케팅</li>
</ul>`,
  },
  {
    num: 44, category: 'labor_market',
    title: '고용보험제도',
    keyword: '고용보험, 실업급여, 고용안정, 직업능력개발',
    frequency: '자주 출제 (34/39회)',
    summary: `<ul>
<li><strong>고용보험 4대 사업</strong>: 고용안정사업, 직업능력개발사업, 실업급여, 모성보호</li>
<li><strong>실업급여</strong>: 구직급여(기본), 취업촉진수당(조기재취업수당, 직업능력개발수당 등)</li>
<li><strong>구직급여 수급조건</strong>: 이직일 전 18개월간 피보험단위기간 180일 이상, 비자발적 이직</li>
<li><strong>소정급여일수</strong>: 연령·피보험기간에 따라 120~270일</li>
<li><strong>고용안정사업</strong>: 고용조정 지원, 고용촉진 장려금, 건설근로자 지원</li>
</ul>`,
  },
  {
    num: 45, category: 'labor_market',
    title: '비정규직과 고용형태',
    keyword: '비정규직, 파견근로, 기간제, 고용형태다양화',
    frequency: '자주 출제 (27/39회)',
    summary: `<ul>
<li><strong>비정규직 유형</strong>: 기간제, 시간제(파트타임), 파견근로, 용역근로, 특수고용, 일일근로</li>
<li><strong>기간제법</strong>: 사용기간 2년 초과 시 무기계약 간주, 차별시정 제도</li>
<li><strong>파견근로</strong>: 파견사업주-사용사업주-근로자 3자관계, 2년 초과 시 직접고용 의무</li>
<li><strong>비정규직 이슈</strong>: 임금격차, 사회보험 사각지대, 차별, 고용불안정</li>
<li><strong>플랫폼 노동</strong>: 디지털 플랫폼 매개 노동, 종속성 논쟁, 노동자성 인정 문제</li>
</ul>`,
  },
  {
    num: 46, category: 'labor_market',
    title: '필립스곡선과 거시노동경제',
    keyword: '필립스곡선, 인플레이션, 실업률, 오쿤법칙',
    frequency: '자주 출제 (26/39회)',
    summary: `<ul>
<li><strong>필립스곡선</strong>: 실업률↓ → 임금(물가)상승률↑ 역관계</li>
<li><strong>단기 필립스곡선</strong>: 우하향, 실업-인플레이션 상충(trade-off)</li>
<li><strong>장기 필립스곡선</strong>: 자연실업률에서 수직(프리드먼, 펠프스)</li>
<li><strong>스태그플레이션</strong>: 실업↑ + 물가↑ 동시 발생, 필립스곡선 이동</li>
<li><strong>오쿤의 법칙</strong>: 실업률 1%p 상승 → GDP 약 2~3% 감소</li>
</ul>`,
  },
  {
    num: 47, category: 'labor_market',
    title: '최저임금제도',
    keyword: '최저임금, 고용효과, 수요독점, 최저임금위원회',
    frequency: '자주 출제 (29/39회)',
    summary: `<ul>
<li><strong>최저임금제</strong>: 국가가 임금의 최저수준을 정하여 사용자에게 강제하는 제도</li>
<li><strong>경쟁시장 효과</strong>: 최저임금>균형임금 → 초과공급(실업) 발생</li>
<li><strong>수요독점 시장</strong>: 최저임금 설정 → 고용 증가 가능(일정 범위)</li>
<li><strong>최저임금위원회</strong>: 근로자·사용자·공익위원 각 9인, 매년 심의·의결</li>
<li><strong>적용범위</strong>: 1인 이상 사업장, 일부 감액 적용(수습, 감시·단속적 근로 등)</li>
</ul>`,
  },
  {
    num: 48, category: 'labor_market',
    title: '노동생산성과 경제성장',
    keyword: '노동생산성, 경제성장, 기술진보, 총요소생산성',
    frequency: '자주 출제 (24/39회)',
    summary: `<ul>
<li><strong>노동생산성</strong>: 산출량/노동투입량, 노동의 효율성 지표</li>
<li><strong>생산성 결정요인</strong>: 물적자본, 인적자본, 기술수준, 제도·문화</li>
<li><strong>총요소생산성(TFP)</strong>: 노동+자본 외 기술진보 등의 기여분(솔로우 잔차)</li>
<li><strong>임금-생산성 연계</strong>: 임금 상승률≒노동생산성 증가율이 바람직</li>
<li><strong>단위노동비용</strong>: 임금/생산성, 국가경쟁력 지표로 활용</li>
</ul>`,
  },

  /* ===================================================================
     5과목: 노동관계법규 (labor_law) — 12개 주제
     =================================================================== */
  {
    num: 49, category: 'labor_law',
    title: '근로기준법 총칙 (근로자·사용자 개념)',
    keyword: '근로기준법, 근로자, 사용자, 근로계약',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>근로자</strong>: 직업의 종류와 관계없이 사업(장)에서 임금을 목적으로 근로를 제공하는 자</li>
<li><strong>사용자</strong>: 사업주, 사업경영담당자, 근로자에 관한 사항에 대해 사업주를 위하여 행위하는 자</li>
<li><strong>근로계약</strong>: 근로자가 사용자에게 근로를 제공하고 사용자는 이에 대한 임금을 지급할 것을 약정</li>
<li><strong>기본원칙</strong>: 균등대우, 강제근로 금지, 중간착취 금지, 공민권 행사 보장</li>
<li><strong>적용범위</strong>: 상시 5인 이상 사업장(일부 규정은 5인 미만에도 적용)</li>
</ul>`,
  },
  {
    num: 50, category: 'labor_law',
    title: '근로계약과 취업규칙',
    keyword: '근로계약, 취업규칙, 명시사항, 해고',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>근로계약 명시사항</strong>: 임금, 소정근로시간, 휴일, 연차유급휴가, 취업장소, 업무내용</li>
<li><strong>단시간근로자</strong>: 근로계약서에 근로일별 근로시간 명시 의무</li>
<li><strong>취업규칙</strong>: 상시 10인 이상 사업장 작성·신고 의무</li>
<li><strong>취업규칙 불이익변경</strong>: 근로자 과반수 동의(노조 있으면 노조 동의)</li>
<li><strong>해고</strong>: 정당한 사유, 30일 전 서면 예고, 경영상 해고(긴박한 경영상 필요)</li>
</ul>`,
  },
  {
    num: 51, category: 'labor_law',
    title: '임금에 관한 법률',
    keyword: '임금, 평균임금, 통상임금, 임금지급 4원칙',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>임금</strong>: 사용자가 근로의 대가로 지급하는 금품 일체(명칭 불문)</li>
<li><strong>평균임금</strong>: 산정사유발생일 이전 3개월간 총임금/총일수 — 퇴직금·재해보상 기준</li>
<li><strong>통상임금</strong>: 정기적·일률적·고정적으로 지급되는 임금 — 연장·야간·휴일수당 기준</li>
<li><strong>임금지급 4원칙</strong>: 통화불, 직접불, 전액불, 매월 1회 이상 정기불</li>
<li><strong>휴업수당</strong>: 사용자 귀책사유 휴업 시 평균임금의 70% 이상 지급</li>
</ul>`,
  },
  {
    num: 52, category: 'labor_law',
    title: '근로시간과 휴식',
    keyword: '근로시간, 연장근로, 휴게, 휴일, 연차휴가',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>법정근로시간</strong>: 1주 40시간, 1일 8시간</li>
<li><strong>연장근로</strong>: 당사자 합의 시 1주 12시간 한도, 가산임금 50%</li>
<li><strong>야간근로</strong>: 22시~06시, 가산임금 50%</li>
<li><strong>휴게시간</strong>: 4시간 → 30분 이상, 8시간 → 1시간 이상, 자유이용</li>
<li><strong>연차유급휴가</strong>: 1년간 80% 이상 출근 시 15일, 3년 이상 매 2년마다 1일 추가(최대 25일)</li>
<li><strong>주휴일</strong>: 1주 소정근로일 개근 시 유급 주휴일 부여</li>
</ul>`,
  },
  {
    num: 53, category: 'labor_law',
    title: '해고와 퇴직',
    keyword: '해고, 부당해고, 경영상해고, 퇴직금',
    frequency: '자주 출제 (35/39회)',
    summary: `<ul>
<li><strong>해고 제한</strong>: 정당한 이유 필요, 업무상 부상·질병 요양 중 해고 금지, 산전·산후 휴가 중 해고 금지</li>
<li><strong>해고예고</strong>: 30일 전 서면통보 또는 30일분 통상임금 지급</li>
<li><strong>경영상 해고 요건</strong>: 긴박한 경영상 필요, 해고회피 노력, 합리적 기준·공정 선정, 50일 전 통보·성실 협의</li>
<li><strong>부당해고 구제</strong>: 노동위원회 신청(3개월 이내), 원직복직+임금상당액</li>
<li><strong>퇴직금</strong>: 1년 이상 계속근로, 30일분 이상 평균임금×근속연수</li>
</ul>`,
  },
  {
    num: 54, category: 'labor_law',
    title: '여성·연소자 보호규정',
    keyword: '여성근로자, 연소근로자, 모성보호, 육아휴직',
    frequency: '자주 출제 (30/39회)',
    summary: `<ul>
<li><strong>최저 고용연령</strong>: 15세 미만(의무교육 중) 사용 금지, 취직인허증</li>
<li><strong>연소근로자(18세 미만)</strong>: 근로시간 1일 7시간·1주 35시간, 야간·휴일 근로 제한</li>
<li><strong>산전후휴가</strong>: 출산 전후 90일(다태아 120일), 출산 후 45일 이상</li>
<li><strong>육아휴직</strong>: 만 8세 이하 자녀, 최대 1년, 남녀 모두 가능</li>
<li><strong>직장 내 성희롱 금지</strong>: 예방교육 의무, 사업주 조치의무</li>
</ul>`,
  },
  {
    num: 55, category: 'labor_law',
    title: '산업재해보상보험법',
    keyword: '산재보험, 업무상재해, 보험급여, 요양급여',
    frequency: '자주 출제 (33/39회)',
    summary: `<ul>
<li><strong>산재보험</strong>: 근로자 1인 이상 당연적용, 보험료 전액 사업주 부담</li>
<li><strong>업무상 재해</strong>: 업무상 사고 + 업무상 질병 + 출퇴근 재해</li>
<li><strong>보험급여 종류</strong>: 요양급여, 휴업급여(평균임금70%), 장해급여, 유족급여, 상병보상연금, 장의비, 간병급여</li>
<li><strong>특별급여</strong>: 사용자 과실 시 민사 손해배상에 갈음한 급여</li>
<li><strong>재요양·재활</strong>: 재요양 요건, 직업재활급여(직장복귀지원금 등)</li>
</ul>`,
  },
  {
    num: 56, category: 'labor_law',
    title: '노동조합및노동관계조정법',
    keyword: '노조법, 노동3권, 부당노동행위, 교섭창구단일화',
    frequency: '매회 출제 (39/39회)',
    summary: `<ul>
<li><strong>노동3권</strong>: 단결권, 단체교섭권, 단체행동권(헌법 제33조)</li>
<li><strong>노동조합 설립</strong>: 자유설립주의, 행정관청 설립신고</li>
<li><strong>부당노동행위 5유형</strong>: 불이익취급, 황견계약, 단체교섭거부, 지배·개입, 보복적 불이익</li>
<li><strong>교섭창구단일화</strong>: 하나의 사업(장)에 복수노조 시 교섭대표노조를 통해 교섭</li>
<li><strong>쟁의행위</strong>: 조합원 직접·비밀·무기명 투표 과반수 찬성 필요</li>
</ul>`,
  },
  {
    num: 57, category: 'labor_law',
    title: '노동쟁의 조정제도',
    keyword: '노동쟁의, 조정, 중재, 긴급조정, 필수유지업무',
    frequency: '자주 출제 (31/39회)',
    summary: `<ul>
<li><strong>조정</strong>: 노동위원회, 조정기간 10일(공익 15일), 쟁의행위 전 필수 절차</li>
<li><strong>중재</strong>: 노동위원회, 중재재정은 단체협약과 동일 효력</li>
<li><strong>긴급조정</strong>: 고용노동부장관 결정, 공익에 중대한 위해 우려 시, 30일 쟁의 금지</li>
<li><strong>필수유지업무</strong>: 필수공익사업에서 업무중단 시 공중의 생명·건강·안전 위해 업무</li>
<li><strong>직권중재 폐지(2006)</strong>: 필수유지업무제도로 대체</li>
</ul>`,
  },
  {
    num: 58, category: 'labor_law',
    title: '직업안정법과 고용정책기본법',
    keyword: '직업안정법, 직업소개, 고용정책, 고용영향평가',
    frequency: '자주 출제 (29/39회)',
    summary: `<ul>
<li><strong>직업안정법 목적</strong>: 직업소개·지도·고용정보 제공으로 고용안정·인력수급 원활화</li>
<li><strong>직업소개사업</strong>: 무료(신고), 유료(등록), 국내·국외 구분</li>
<li><strong>금지사항</strong>: 허위구인광고, 강제근로, 차별 등</li>
<li><strong>고용정책기본법</strong>: 국가 고용정책의 기본방향 제시, 고용영향평가 제도</li>
<li><strong>고용영향평가</strong>: 주요 정책의 고용효과 사전 평가</li>
</ul>`,
  },
  {
    num: 59, category: 'labor_law',
    title: '남녀고용평등법',
    keyword: '남녀고용평등, 차별금지, 적극적고용개선, 일가정양립',
    frequency: '자주 출제 (28/39회)',
    summary: `<ul>
<li><strong>차별금지</strong>: 모집·채용·배치·승진·교육·정년·퇴직·해고에서 성차별 금지</li>
<li><strong>동일가치노동 동일임금</strong>: 같은 사업장 동일가치 노동에 성별 임금차별 금지</li>
<li><strong>적극적 고용개선조치(AA)</strong>: 여성 고용비율이 산업별 기준에 미달하는 기업에 시행계획 수립 의무</li>
<li><strong>일·가정 양립 지원</strong>: 육아휴직, 육아기 근로시간 단축, 가족돌봄휴직</li>
<li><strong>직장 내 성희롱 금지</strong>: 사업주 예방교육 의무, 발생 시 즉시 조치</li>
</ul>`,
  },
  {
    num: 60, category: 'labor_law',
    title: '파견근로자보호법과 기간제법',
    keyword: '파견법, 기간제법, 차별시정, 사용기간',
    frequency: '자주 출제 (27/39회)',
    summary: `<ul>
<li><strong>기간제근로자</strong>: 총 사용기간 2년 초과 시 무기계약 간주</li>
<li><strong>파견근로</strong>: 파견기간 최대 2년(일시적 사유 등), 2년 초과 시 직접고용 의무</li>
<li><strong>파견 금지 업무</strong>: 건설, 하역, 유해·위험 업무, 직업안정법에 따른 근로자공급사업</li>
<li><strong>차별시정</strong>: 비정규직 차별 시 노동위원회에 시정신청(3개월 이내)</li>
<li><strong>사용사업주 의무</strong>: 안전·보건, 성희롱 방지 등에서 직접 사용자 책임</li>
</ul>`,
  },
];

/** 카테고리별 문항 필터 */
export function getPilgiFreqByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return PILGI_FREQUENT;
  return PILGI_FREQUENT.filter((q) => q.category === categoryId);
}

/** 카테고리별 문항 수 */
export function getPilgiFreqCounts() {
  const counts = {};
  for (const cat of PILGI_FREQ_CATEGORIES) {
    if (cat.id === 'all') continue;
    counts[cat.id] = PILGI_FREQUENT.filter((q) => q.category === cat.id).length;
  }
  counts.all = PILGI_FREQUENT.length;
  return counts;
}
