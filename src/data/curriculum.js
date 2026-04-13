/**
 * 직업상담사 2급 과목별 학습 커리큘럼 데이터
 * 5개 필기 과목 + 1개 실기 과목
 */

export const CURRICULUM = {
  counseling: {
    name: '직업상담학',
    code: 'counseling',
    color: '#3B82F6',
    icon: 'fa-solid fa-comments',
    description: '직업상담의 이론과 기법, 상담 과정 전반을 학습합니다.',
    chapters: [
      {
        title: '직업상담의 개념',
        topics: [
          {
            title: '직업상담의 이해',
            content: `<h4 class="exam-important">용어 정의</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>진로(Career)</strong></td><td>가장 폭넓은 개념. 일생동안 체험하는 일의 총체</td></tr>
  <tr><td><strong>직업(Vocation)</strong></td><td>직업생활 준비에서 은퇴까지의 과정</td></tr>
  <tr><td><strong>진로상담</strong></td><td>인생 전반에 걸친 진로선택에 관한 상담 (넓은 의미)</td></tr>
  <tr><td><strong>직업상담</strong></td><td>진로상담보다 좁은 의미, 직업 관련 문제에 초점</td></tr>
  <tr><td><strong>진로발달</strong></td><td>어려서부터 죽을 때까지의 발달 과정</td></tr>
</table>
<h4 class="exam-important">직업상담의 영역</h4>
<ul>
  <li><strong>직업일반상담:</strong> 직업 전반에 관한 일반 상담</li>
  <li><strong>취업상담:</strong> 구직활동, 취업준비 관련 상담</li>
  <li><strong>직업(정신)건강상담:</strong> 직업 관련 정신건강 문제</li>
  <li><strong>직업적응상담:</strong> 조직문화, 인간관계, 직업예절, 직업의식, 직업관 정보 제공</li>
  <li><strong>직업전환상담:</strong> 이직, 전직 관련 상담</li>
  <li><strong>직업문제 및 은퇴상담:</strong> 직업 문제 해결과 은퇴 준비</li>
</ul>
<h4 class="exam-important">직업상담의 유형</h4>
<ul>
  <li><strong>구인·구직상담:</strong> 일자리 매칭 관련 상담</li>
  <li><strong>직업적응상담:</strong> 직장 적응 지원</li>
  <li><strong>직업전환상담:</strong> 전직/이직 지원</li>
  <li><strong>경력개발상담:</strong> 경력 관리 및 개발 지원</li>
</ul>
<h4 class="exam-important">직업상담의 목적</h4>
<ul>
  <li>잠정적 진로결정의 확고화</li>
  <li>직업목표의 명백화</li>
  <li>직업세계에 대한 이해 증진</li>
  <li>의사결정능력 향상</li>
  <li>능동적 태도 함양</li>
</ul>
<h4 class="exam-important">기스버스(Gysbers)의 목적 3가지</h4>
<table>
  <tr><th>목적</th><th>내용</th></tr>
  <tr><td><strong>예언과 발달</strong></td><td>미래를 예측하고 발달을 촉진</td></tr>
  <tr><td><strong>처치와 자극</strong></td><td>문제를 처치하고 성장을 자극</td></tr>
  <tr><td><strong>결함과 유능</strong></td><td>결함을 보완하고 유능함을 강화</td></tr>
</table>
<p><strong>암기 팁:</strong> '예 처 결'로 외우기</p>
<h4 class="exam-important">직업상담의 기본원리</h4>
<ul>
  <li>라포(Rapport) 형성이 기본</li>
  <li>내담자의 성격특성 이해</li>
  <li>전생애적 발달 관점</li>
  <li>진로발달이론에 근거</li>
  <li>상담윤리강령 준수</li>
</ul>
<h4 class="exam-important">톨버트(Tolbert)의 진로발달 영향 요인</h4>
<ul>
  <li>직업적성, 직업흥미, 인성(성격)</li>
  <li>직업성숙도, 성취도</li>
  <li>가정환경, 성별, 인종</li>
</ul>`
          },
          {
            title: '직업상담사의 전문지식과 역할',
            content: `<h4 class="exam-important">NVGA(국가직업지도협회) 기본영역</h4>
<table>
  <tr><th>영역</th><th>내용</th></tr>
  <tr><td><strong>일반상담능력</strong></td><td>기본적인 상담 수행 능력</td></tr>
  <tr><td><strong>정보분석과 적용능력</strong></td><td>직업정보 수집·분석·활용</td></tr>
  <tr><td><strong>개인/집단 검사 실시능력</strong></td><td>심리검사 실시 및 해석</td></tr>
  <tr><td><strong>관리능력</strong></td><td>상담 프로그램 관리</td></tr>
  <tr><td><strong>실행능력</strong></td><td>상담 계획의 실행</td></tr>
  <tr><td><strong>조언능력</strong></td><td>전문적 조언 제공</td></tr>
</table>
<h4 class="exam-important">김병숙의 지식/능력</h4>
<ul>
  <li><strong>심리치료능력:</strong> 상담 및 심리치료 수행 능력</li>
  <li><strong>국가정책/인구구조 지식:</strong> 노동시장, 인구동향 파악</li>
  <li><strong>연구/평가능력:</strong> 상담 연구 및 프로그램 평가</li>
</ul>
<h4 class="exam-important">상담사의 자질</h4>
<ul>
  <li><strong>건설적 냉철함:</strong> 객관적이고 건설적인 태도 유지</li>
  <li><strong>공감적 이해력:</strong> 내담자의 감정과 경험에 대한 공감</li>
  <li><strong>통일된 동일시:</strong> 일관된 자기정체성 유지</li>
  <li><strong>도덕적 판단:</strong> 윤리적 기준에 따른 판단력</li>
</ul>
<h4>주요 역할</h4>
<ul>
  <li>직업정보 수집 및 분석</li>
  <li>심리검사 실시 및 해석</li>
  <li>직업상담 수행</li>
  <li>프로그램 개발 및 운영</li>
</ul>
<h4 class="exam-important">헤어(Herr)의 직무내용</h4>
<ul>
  <li>상담기법으로 문제 확인</li>
  <li>직업상담 확정</li>
  <li>예비행동 설명</li>
  <li>부가적 대안 확인</li>
</ul>`
          },
          {
            title: '직업상담의 과정',
            content: `<h4 class="exam-important">직업상담 5단계</h4>
<ol>
  <li><strong>관계형성(라포):</strong> 신뢰관계 구축</li>
  <li><strong>진단/측정:</strong> 문제 파악 및 심리검사</li>
  <li><strong>목표설정:</strong> 상담 목표 수립</li>
  <li><strong>개입/중재:</strong> 상담 전략 실행</li>
  <li><strong>평가:</strong> 상담 성과 평가</li>
</ol>
<h4 class="exam-important">2단계 모델</h4>
<table>
  <tr><th>단계</th><th>내용</th></tr>
  <tr><td><strong>목표/문제확인 단계</strong></td><td>내담자의 목표와 문제를 확인</td></tr>
  <tr><td><strong>목표/문제해결 단계</strong></td><td>확인된 문제를 해결하기 위한 개입</td></tr>
</table>
<h4 class="exam-important">브래머(Brammer)의 8단계</h4>
<ol>
  <li><strong>준비와 시작:</strong> 상담 시작 준비</li>
  <li><strong>명료화:</strong> 문제의 명확화</li>
  <li><strong>구조화:</strong> 상담 구조 설정</li>
  <li><strong>라포 심화:</strong> 깊은 신뢰관계 형성</li>
  <li><strong>탐색:</strong> 문제 심층 탐색</li>
  <li><strong>견고화:</strong> 변화의 견고화</li>
  <li><strong>계획수립/검토:</strong> 실행 계획 수립</li>
  <li><strong>종료:</strong> 상담 마무리</li>
</ol>
<h4 class="exam-important">상담 단계별 일반 고려사항</h4>
<table>
  <tr><th>단계</th><th>주요 과제</th></tr>
  <tr><td><strong>초기</strong></td><td>라포 형성, 문제 파악, 상담 구조화</td></tr>
  <tr><td><strong>중기</strong></td><td>문제 해결, 저항 해결, 개입 전략 실행</td></tr>
  <tr><td><strong>종결</strong></td><td>목표 달성 확인, 이별 감정 다루기, 추수지도 계획</td></tr>
</table>`
          },
          {
            title: '상담의 구조화와 라포(Rapport) 형성',
            content: `<h4 class="exam-important">구조화(Structuring)</h4>
<p>상담 초기에 상담의 기본 틀을 설정하는 과정</p>
<ul>
  <li><strong>상담의 목표:</strong> 상담에서 달성하고자 하는 것</li>
  <li><strong>상담의 성격:</strong> 상담이 어떤 활동인지 설명</li>
  <li><strong>역할:</strong> 상담자와 내담자의 역할 설명</li>
  <li><strong>절차:</strong> 상담 진행 과정 안내</li>
  <li><strong>시간:</strong> 상담 시간 및 횟수 안내</li>
  <li><strong>비용:</strong> 상담 비용 관련 안내</li>
</ul>
<h4 class="exam-important">라포(Rapport) 형성</h4>
<ul>
  <li>초기 접수면접 단계에서 이루어짐</li>
  <li>허용적 분위기 조성이 핵심</li>
  <li>공감과 민감한 반응</li>
  <li>내담자를 있는 그대로 수용</li>
  <li><strong>주의:</strong> 도덕적 판단은 관계형성을 방해함</li>
</ul>`
          },
          {
            title: '집단직업상담',
            content: `<h4 class="exam-important">집단직업상담의 장점</h4>
<ul>
  <li>경제적·효율적 (다수 동시 상담)</li>
  <li>다양한 관점과 경험 공유</li>
  <li>대인관계 기술 향상</li>
  <li>소속감과 지지 경험</li>
  <li><strong>직업성숙도가 낮은 사람에게 특히 적합</strong></li>
</ul>
<h4 class="exam-important">톨버트(Tolbert)의 핵심요소</h4>
<table>
  <tr><th>요소</th><th>내용</th></tr>
  <tr><td><strong>목표</strong></td><td>집단상담의 명확한 목표 설정</td></tr>
  <tr><td><strong>과정</strong></td><td>5가지 활동 (탐색, 정보수집, 의사결정, 실행, 평가)</td></tr>
  <tr><td><strong>비밀유지</strong></td><td>집단 내 비밀보장 원칙</td></tr>
  <tr><td><strong>구성원</strong></td><td>6~10명이 적정 규모</td></tr>
</table>
<h4 class="exam-important">부처(Butcher)의 3단계</h4>
<ol>
  <li><strong>탐색 단계:</strong> 문제 파악 및 자기탐색</li>
  <li><strong>전환 단계:</strong> 새로운 관점으로의 전환</li>
  <li><strong>행동 단계:</strong> 구체적 행동 실천</li>
</ol>`
          },
          {
            title: '사이버 직업상담',
            content: `<h4 class="exam-important">사이버 직업상담의 필요성</h4>
<ul>
  <li><strong>익명성:</strong> 내담자의 익명성 보장으로 솔직한 상담 가능</li>
  <li><strong>자기성찰 능력 향상:</strong> 글쓰기를 통한 자기탐색 촉진</li>
  <li>시간·공간 제약 없음</li>
  <li>접근성 향상</li>
</ul>
<h4 class="exam-important">사이버 상담 기법 (답변 절차)</h4>
<ol>
  <li><strong>진로논점 파악:</strong> 내담자 문제의 핵심 파악</li>
  <li><strong>유형 정하기:</strong> 상담 유형 결정</li>
  <li><strong>답변 내용:</strong> 답변 내용 구성</li>
  <li><strong>직업정보 가공:</strong> 관련 직업정보 정리</li>
  <li><strong>답변 작성:</strong> 최종 답변 작성</li>
</ol>
<h4>사이버 상담의 장단점</h4>
<table>
  <tr><th>장점</th><th>단점</th></tr>
  <tr><td>익명성 보장</td><td>비언어적 정보 파악 불가</td></tr>
  <tr><td>시간·공간 자유</td><td>즉각적 위기개입 어려움</td></tr>
  <tr><td>기록 보존 용이</td><td>관계 형성의 한계</td></tr>
  <tr><td>자기성찰 촉진</td><td>오해 발생 가능성</td></tr>
</table>
<h4 class="exam-important">전화상담의 특징</h4>
<ul>
  <li>응급상황에서 즉각 활용 가능</li>
  <li>익명성 보장</li>
  <li>비언어적 정보(표정, 몸짓 등)를 파악할 수 없음</li>
  <li>위기상담에 적합</li>
</ul>`
          },
          {
            title: '직업선택의 문제유형',
            content: `<h4 class="exam-important">의사결정 유형 분류</h4>
<table>
  <tr><th>유형</th><th>하위유형</th><th>특징</th></tr>
  <tr><td rowspan="3"><strong>의사결정자</strong></td><td>확정적</td><td>이미 결정을 내린 상태</td></tr>
  <tr><td>수행적</td><td>결정을 실행하는 단계</td></tr>
  <tr><td>회피적</td><td>결정을 회피하는 유형</td></tr>
  <tr><td rowspan="3"><strong>의사미결정자</strong></td><td>자연적</td><td>아직 결정 시기가 아님</td></tr>
  <tr><td>발달적</td><td>발달 과정상 미결정</td></tr>
  <tr><td>다기능적</td><td>여러 가지 이유로 미결정</td></tr>
  <tr><td colspan="2"><strong>우유부단형</strong></td><td>성격적으로 결정을 못하는 유형</td></tr>
</table>
<h4 class="exam-important">윌리암슨(Williamson)의 분류</h4>
<ul>
  <li><strong>무선택:</strong> 직업을 선택하지 못한 상태</li>
  <li><strong>확신 부족:</strong> 선택했으나 확신이 없음</li>
  <li><strong>흥미-적성 불일치:</strong> 흥미와 적성이 맞지 않음</li>
  <li><strong>현명하지 못한 선택:</strong> 비합리적 선택을 한 경우</li>
</ul>
<h4 class="exam-important">바딘(Bordin)의 분류</h4>
<ul>
  <li><strong>의존성:</strong> 타인에 의존적인 의사결정</li>
  <li><strong>정보 부족:</strong> 필요한 정보가 부족</li>
  <li><strong>자아갈등:</strong> 내적 갈등으로 인한 어려움</li>
  <li><strong>선택불안:</strong> 선택에 대한 불안감</li>
  <li><strong>확신 부족:</strong> 결정에 대한 확신 부족</li>
</ul>
<h4 class="exam-important">크리이티스(Crites)의 분류</h4>
<ul>
  <li><strong>적응성:</strong> 환경에 대한 적응 정도</li>
  <li><strong>결정성:</strong> 결정을 내리는 능력</li>
  <li><strong>현실성:</strong> 현실적 판단 능력</li>
</ul>
<h4 class="exam-important">필립스(Phillips)의 분류</h4>
<ol>
  <li><strong>자기탐색:</strong> 자신에 대한 이해</li>
  <li><strong>선택준비:</strong> 선택을 위한 준비</li>
  <li><strong>의사결정:</strong> 결정 과정</li>
  <li><strong>선택과 결정:</strong> 최종 선택</li>
  <li><strong>실천:</strong> 결정의 실행</li>
</ol>`
          }
        ]
      },
      {
        title: '직업상담 이론',
        topics: [
          {
            title: '파슨스의 특성요인이론',
            content: `<h4>특성요인이론 (Trait-Factor Theory)</h4>
<p>파슨스(Frank Parsons)가 창시한 최초의 체계적 직업지도 이론으로, 개인의 특성과 직업의 요인을 매칭하는 접근입니다.</p>
<h4>직업선택의 3단계</h4>
<ol>
  <li><strong>자기이해:</strong> 자신의 적성, 능력, 흥미, 한계 등을 명확히 이해</li>
  <li><strong>직업이해:</strong> 다양한 직업의 조건, 보상, 기회, 전망 등을 파악</li>
  <li><strong>합리적 추론:</strong> 자기이해와 직업이해를 바탕으로 합리적인 직업 선택</li>
</ol>
<h4>윌리엄슨(Williamson)의 특성요인 상담 6단계</h4>
<ol>
  <li><strong>분석(Analysis):</strong> 내담자에 대한 정보 수집</li>
  <li><strong>종합(Synthesis):</strong> 수집된 정보의 요약 정리</li>
  <li><strong>진단(Diagnosis):</strong> 문제의 원인 파악</li>
  <li><strong>예언(Prognosis):</strong> 문제 해결의 가능성 예측</li>
  <li><strong>상담(Counseling):</strong> 적절한 개입과 조력</li>
  <li><strong>추수지도(Follow-up):</strong> 상담 후 적응 확인</li>
</ol>`
          },
          {
            title: '로저스의 인간중심 상담',
            content: `<h4>인간중심 상담 (Person-Centered Counseling)</h4>
<p>칼 로저스(Carl Rogers)가 개발한 비지시적 상담 이론으로, 내담자의 자기실현 경향성을 신뢰합니다.</p>
<h4>핵심 조건 (필요충분조건)</h4>
<ul>
  <li><strong>무조건적 긍정적 존중:</strong> 내담자를 조건 없이 수용하고 존중</li>
  <li><strong>공감적 이해:</strong> 내담자의 내적 준거 틀로 세상을 이해</li>
  <li><strong>일치성(진솔성):</strong> 상담자가 진정성 있고 투명하게 행동</li>
</ul>
<h4>주요 개념</h4>
<ul>
  <li><strong>자기실현 경향성:</strong> 인간은 자신의 잠재력을 실현하려는 선천적 동기를 가짐</li>
  <li><strong>자기개념:</strong> 자신에 대한 지각과 신념의 조직화된 체계</li>
  <li><strong>경험과 자기개념의 불일치:</strong> 심리적 부적응의 원인</li>
  <li><strong>충분히 기능하는 사람:</strong> 경험에 개방적이고, 실존적 삶을 영위하는 사람</li>
</ul>`
          },
          {
            title: '엘리스의 합리정서행동치료(REBT)',
            content: `<h4>합리정서행동치료 (REBT)</h4>
<p>앨버트 엘리스(Albert Ellis)가 개발한 인지적 상담 이론으로, 비합리적 신념이 정서적 문제를 유발한다고 봅니다.</p>
<h4>ABCDE 모델</h4>
<ul>
  <li><strong>A (Activating event):</strong> 선행사건 - 촉발 사건</li>
  <li><strong>B (Belief):</strong> 신념 체계 - 합리적/비합리적 신념</li>
  <li><strong>C (Consequence):</strong> 결과 - 정서적, 행동적 결과</li>
  <li><strong>D (Disputing):</strong> 논박 - 비합리적 신념에 대한 도전</li>
  <li><strong>E (Effect):</strong> 효과 - 새로운 합리적 신념과 정서</li>
</ul>
<h4>비합리적 신념의 특징</h4>
<ul>
  <li><strong>당위적 사고:</strong> "반드시 ~해야 한다" (musturbation)</li>
  <li><strong>파국화:</strong> "이것은 끔찍하다" (awfulizing)</li>
  <li><strong>좌절에 대한 낮은 인내력:</strong> "나는 견딜 수 없다"</li>
  <li><strong>자기비하:</strong> "나는 무가치한 사람이다"</li>
</ul>`
          },
          {
            title: '행동주의 상담',
            content: `<h4>행동주의 상담 이론</h4>
<p>관찰 가능한 행동에 초점을 맞추고, 학습 원리를 적용하여 부적응 행동을 수정하는 접근입니다.</p>
<h4>주요 기법</h4>
<ul>
  <li><strong>체계적 둔감법:</strong> 불안 위계표를 작성하고 이완 훈련을 통해 점진적으로 불안 감소</li>
  <li><strong>강화(Reinforcement):</strong> 바람직한 행동에 보상을 제공하여 행동 빈도 증가</li>
  <li><strong>소거(Extinction):</strong> 강화를 중단하여 부적응 행동 감소</li>
  <li><strong>모델링:</strong> 관찰학습을 통한 새로운 행동 습득 (반두라)</li>
  <li><strong>자기주장훈련:</strong> 적절한 자기표현 능력 향상</li>
  <li><strong>토큰경제:</strong> 토큰을 이용한 보상 체계</li>
  <li><strong>혐오치료:</strong> 부적응 행동에 불쾌 자극을 연합</li>
</ul>
<h4>크럼볼츠(Krumboltz)의 사회학습 진로이론</h4>
<ul>
  <li>유전적 요인과 특별한 능력</li>
  <li>환경적 조건과 사건</li>
  <li>학습경험 (도구적 학습, 연합적 학습)</li>
  <li>과제접근기술</li>
</ul>
<h4>크럼볼츠의 계획된 우연 이론 (2009)</h4>
<p>우연한 사건이 진로발달에 중요한 역할을 하며, 우연을 기회로 만드는 5가지 기술이 필요합니다:</p>
<ol>
  <li><strong>호기심(Curiosity):</strong> 새로운 학습 기회 탐색</li>
  <li><strong>인내(Persistence):</strong> 좌절에도 불구하고 노력 지속</li>
  <li><strong>유연성(Flexibility):</strong> 태도와 상황을 변화시키는 의지</li>
  <li><strong>낙관성(Optimism):</strong> 새로운 기회가 가능하다는 긍정적 태도</li>
  <li><strong>위험감수(Risk-taking):</strong> 불확실한 상황에서도 행동하는 용기</li>
</ol>`
          },
          {
            title: '벡의 인지치료',
            content: `<h4>벡의 인지치료 (Cognitive Therapy)</h4>
<p>아론 벡(Aaron Beck)이 개발한 인지적 상담 이론으로, <strong>인지적 오류</strong>와 <strong>자동적 사고</strong>의 수정을 목표로 합니다.</p>
<h4>인지삼제 (Cognitive Triad)</h4>
<p>우울증 환자에게 공통적으로 나타나는 3가지 부정적 인지:</p>
<ol>
  <li><strong>자기 자신에 대한 부정적 사고:</strong> "나는 무능하다"</li>
  <li><strong>세상(환경)에 대한 부정적 사고:</strong> "세상은 불공평하다"</li>
  <li><strong>미래에 대한 부정적 사고:</strong> "앞으로도 나아지지 않을 것이다"</li>
</ol>
<h4>인지 구조의 3수준</h4>
<ul>
  <li><strong>핵심신념(Core Belief/Schema):</strong> 가장 깊은 수준, 어린 시절 형성된 근본적 믿음 ("나는 사랑받을 자격이 없다")</li>
  <li><strong>중간신념(Intermediate Belief):</strong> 규칙, 태도, 가정 ("완벽하지 않으면 실패다")</li>
  <li><strong>자동적 사고(Automatic Thought):</strong> 특정 상황에서 자동으로 떠오르는 사고 (가장 표면적)</li>
</ul>
<h4>주요 인지적 오류</h4>
<table>
  <tr><th>인지적 오류</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>이분법적 사고</strong></td><td>흑백논리, 전부 아니면 전무</td><td>"완벽하지 않으면 실패"</td></tr>
  <tr><td><strong>과잉일반화</strong></td><td>한두 번의 사건으로 일반화</td><td>"항상 나만 안 돼"</td></tr>
  <tr><td><strong>선택적 추상화</strong></td><td>부정적 측면만 선택적으로 주목</td><td>칭찬 10개, 비판 1개 중 비판만 기억</td></tr>
  <tr><td><strong>확대/축소</strong></td><td>부정은 확대, 긍정은 축소</td><td>실수는 크게, 성공은 운으로</td></tr>
  <tr><td><strong>개인화</strong></td><td>관련 없는 사건을 자기 탓으로</td><td>"그 사람이 화난 건 내 때문"</td></tr>
  <tr><td><strong>재앙화(파국화)</strong></td><td>최악의 결과를 예상</td><td>"면접 망하면 인생 끝"</td></tr>
  <tr><td><strong>감정적 추론</strong></td><td>감정을 근거로 현실 판단</td><td>"불안하니까 위험한 거야"</td></tr>
  <tr><td><strong>당위적 사고</strong></td><td>"~해야 한다"는 경직된 사고</td><td>"나는 반드시 성공해야 한다"</td></tr>
</table>
<h4>상담 기법</h4>
<ul>
  <li><strong>소크라테스식 질문:</strong> 질문을 통해 인지적 오류 스스로 발견</li>
  <li><strong>사고 기록지:</strong> 상황-자동적사고-감정-대안적사고 기록</li>
  <li><strong>행동 실험:</strong> 부정적 예측을 실제로 검증</li>
  <li><strong>인지적 재구조화:</strong> 왜곡된 사고를 합리적으로 교정</li>
</ul>`
          },
          {
            title: '게슈탈트 상담',
            content: `<h4>게슈탈트 상담 (Gestalt Therapy)</h4>
<p>프리츠 펄스(Fritz Perls)가 개발한 상담 이론으로, '지금-여기(here and now)'에서의 알아차림을 강조합니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>알아차림(Awareness):</strong> 현재 순간의 감각, 감정, 사고를 자각</li>
  <li><strong>접촉(Contact):</strong> 환경과의 상호작용</li>
  <li><strong>미해결 과제:</strong> 완결되지 않은 경험이 현재 행동에 영향</li>
  <li><strong>전경과 배경:</strong> 의미 있는 것이 전경으로, 나머지는 배경으로</li>
</ul>
<h4>주요 기법</h4>
<ul>
  <li><strong>빈 의자 기법:</strong> 빈 의자에 대상을 놓고 대화하는 역할극</li>
  <li><strong>실험:</strong> 새로운 행동을 시도해보는 체험적 활동</li>
  <li><strong>과장법:</strong> 특정 행동이나 감정을 과장하여 알아차림 증진</li>
  <li><strong>반대로 하기:</strong> 평소와 반대되는 행동을 시도</li>
  <li><strong>나 언어 사용:</strong> "나는 ~한다"로 책임감 표현</li>
</ul>`
          }
        ]
      },
      {
        title: '직업상담 이론 II - 추가 주요 이론',
        topics: [
          {
            title: '정신분석적 상담 (프로이트)',
            content: `<h4>프로이트의 정신분석 이론</h4>
<p>지그문트 프로이트(Sigmund Freud)가 창시한 최초의 체계적 심리치료 이론으로, <strong>무의식</strong>의 역할을 강조합니다.</p>
<h4>의식의 3수준</h4>
<ul>
  <li><strong>의식(Conscious):</strong> 현재 자각하고 있는 정신 내용</li>
  <li><strong>전의식(Preconscious):</strong> 노력하면 의식으로 떠올릴 수 있는 내용</li>
  <li><strong>무의식(Unconscious):</strong> 억압된 충동, 욕구, 기억 (빙산의 수면 아래 대부분)</li>
</ul>
<h4>성격 구조</h4>
<ul>
  <li><strong>원초아(Id):</strong> 쾌락 원칙, 본능적 충동, 즉각적 만족 추구</li>
  <li><strong>자아(Ego):</strong> 현실 원칙, 원초아와 초자아를 중재, 적응적 기능</li>
  <li><strong>초자아(Superego):</strong> 도덕 원칙, 양심과 자아이상, 사회적 규범 내면화</li>
</ul>
<h4>심리성적 발달단계</h4>
<ol>
  <li><strong>구강기(0~1세):</strong> 빨기, 물기 등 구강 자극으로 만족</li>
  <li><strong>항문기(1~3세):</strong> 배변훈련, 통제와 자율성</li>
  <li><strong>남근기(3~6세):</strong> 오이디푸스/엘렉트라 콤플렉스</li>
  <li><strong>잠복기(6~12세):</strong> 성적 충동 잠복, 지적 활동에 집중</li>
  <li><strong>생식기(12세~):</strong> 성숙한 성적 관심, 이성 관계 형성</li>
</ol>
<h4>주요 방어기제</h4>
<table>
  <tr><th>방어기제</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>억압</strong></td><td>위협적 생각/감정을 무의식으로 밀어냄</td><td>충격적 사건 기억 못함</td></tr>
  <tr><td><strong>투사</strong></td><td>자신의 감정을 타인에게 귀인</td><td>"그 사람이 나를 싫어해"</td></tr>
  <tr><td><strong>합리화</strong></td><td>그럴듯한 이유로 정당화</td><td>"포도가 시다"(여우와 포도)</td></tr>
  <tr><td><strong>반동형성</strong></td><td>무의식과 반대되는 행동 표현</td><td>미움→과잉친절</td></tr>
  <tr><td><strong>승화</strong></td><td>충동을 사회적으로 수용 가능한 형태로 전환</td><td>공격성→운동선수</td></tr>
  <tr><td><strong>퇴행</strong></td><td>이전 발달단계로 되돌아감</td><td>동생 태어나면 아기짓</td></tr>
  <tr><td><strong>전치(전위)</strong></td><td>감정 대상을 안전한 대상으로 바꿈</td><td>상사에게 화→가족에게 화풀이</td></tr>
  <tr><td><strong>부정(부인)</strong></td><td>고통스러운 현실을 인정하지 않음</td><td>사망 소식 거부</td></tr>
  <tr><td><strong>보상</strong></td><td>한 영역의 약점을 다른 영역에서 만회</td><td>공부 약→운동 잘</td></tr>
  <tr><td><strong>동일시</strong></td><td>타인의 특성을 자기 것으로 내면화</td><td>존경하는 사람 모방</td></tr>
</table>
<h4>정신분석적 상담 기법</h4>
<ul>
  <li><strong>자유연상:</strong> 떠오르는 생각을 검열 없이 자유롭게 말하기</li>
  <li><strong>꿈의 분석:</strong> 현재몽(기억하는 내용) → 잠재몽(무의식적 의미) 해석</li>
  <li><strong>전이 분석:</strong> 과거 중요 인물에 대한 감정이 상담자에게 전이되는 현상 분석</li>
  <li><strong>저항 분석:</strong> 무의식적 내용 노출을 회피하는 현상 탐색</li>
  <li><strong>해석:</strong> 무의식적 의미를 의식 수준으로 가져오는 작업</li>
</ul>`
          },
          {
            title: '아들러의 개인심리학',
            content: `<h4>아들러의 개인심리학 (Individual Psychology)</h4>
<p>알프레드 아들러(Alfred Adler)는 인간을 <strong>사회적 존재</strong>로 보고, 열등감 극복과 사회적 관심을 강조했습니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>열등감과 보상:</strong> 인간은 본래 열등감을 느끼며, 이를 극복하려는 우월성 추구가 성장의 동력</li>
  <li><strong>열등감 콤플렉스:</strong> 열등감이 과도하여 정상적 보상이 이루어지지 않는 상태</li>
  <li><strong>우월성 콤플렉스:</strong> 열등감을 과잉보상하여 허세, 과시적 행동을 보이는 상태</li>
  <li><strong>가상적 목적론:</strong> 인간은 과거가 아닌 <strong>미래 목표</strong>에 의해 동기화됨 (프로이트의 결정론과 대비)</li>
  <li><strong>사회적 관심(Gemeinschaftsgefühl):</strong> 타인에 대한 관심과 공동체 의식 → 정신건강의 핵심 지표</li>
  <li><strong>생활양식(Lifestyle):</strong> 개인의 독특한 삶의 패턴, 4~5세경 형성</li>
  <li><strong>창조적 자아:</strong> 유전과 환경을 능동적으로 해석하고 활용하는 주체적 힘</li>
</ul>
<h4>생활양식의 4유형</h4>
<table>
  <tr><th>유형</th><th>사회적 관심</th><th>활동 수준</th><th>특징</th></tr>
  <tr><td><strong>지배형</strong></td><td>낮음</td><td>높음</td><td>독단적, 공격적</td></tr>
  <tr><td><strong>획득형(기대형)</strong></td><td>낮음</td><td>낮음</td><td>의존적, 수동적, 기생적</td></tr>
  <tr><td><strong>회피형</strong></td><td>낮음</td><td>낮음</td><td>문제 회피, 위축, 고립</td></tr>
  <tr><td><strong>사회적 유용형</strong></td><td>높음</td><td>높음</td><td>건강하고 성숙한 유형 (이상적)</td></tr>
</table>
<h4>출생순위의 영향</h4>
<ul>
  <li><strong>맏이:</strong> 책임감, 보수적, 권위적 (동생 출생 시 '폐위' 경험)</li>
  <li><strong>둘째:</strong> 경쟁적, 야망적, 맏이를 따라잡으려는 경향</li>
  <li><strong>막내:</strong> 응석받이 가능성, 독특한 방향 추구</li>
  <li><strong>독자:</strong> 관심의 중심, 사회적 관계 형성에 어려움 가능</li>
</ul>
<h4>상담 기법</h4>
<ul>
  <li><strong>격려(Encouragement):</strong> 내담자의 강점과 자원을 인정, 용기 부여 (가장 핵심적 기법)</li>
  <li><strong>초기기억 분석:</strong> 가장 오래된 기억을 통해 생활양식 파악</li>
  <li><strong>가족구도 분석:</strong> 형제 관계, 출생순위를 통한 생활양식 탐색</li>
  <li><strong>"마치 ~인 것처럼" 기법:</strong> 원하는 모습처럼 행동해보기 (as if 기법)</li>
  <li><strong>수프에 침 뱉기:</strong> 부적응적 행동의 숨은 목적을 자각시켜 그 매력을 잃게 함</li>
  <li><strong>역설적 의도:</strong> 증상을 의도적으로 과장하여 통제감 회복</li>
</ul>`
          },
          {
            title: '글래서의 현실치료',
            content: `<h4>글래서의 현실치료 (Reality Therapy)</h4>
<p>윌리엄 글래서(William Glasser)가 개발한 이론으로, <strong>선택이론</strong>에 기반하여 현재 행동과 책임을 강조합니다.</p>
<h4>선택이론 (Choice Theory)</h4>
<p>모든 행동은 자신의 <strong>선택</strong>이며, 외부가 아닌 내부(기본 욕구)에서 동기화된다는 이론입니다. 타인의 행동을 통제할 수 없고 자신의 행동만 통제할 수 있습니다.</p>
<h4>5가지 기본 욕구</h4>
<ol>
  <li><strong>생존(Survival):</strong> 음식, 주거, 안전, 건강 (유일한 생리적 욕구)</li>
  <li><strong>사랑과 소속(Love & Belonging):</strong> 대인관계, 가족, 소속감</li>
  <li><strong>힘/성취(Power):</strong> 인정, 성취, 자존감, 경쟁</li>
  <li><strong>자유(Freedom):</strong> 자율성, 독립성, 선택의 자유</li>
  <li><strong>즐거움(Fun):</strong> 놀이, 유머, 학습의 즐거움</li>
</ol>
<h4>전행동(Total Behavior) 개념</h4>
<p>모든 행동은 4가지 구성요소로 이루어져 있습니다 (자동차의 4바퀴 비유):</p>
<ul>
  <li><strong>활동하기(Acting):</strong> 외현적 행동 → <em>직접 통제 가능 (앞바퀴)</em></li>
  <li><strong>생각하기(Thinking):</strong> 인지 → <em>직접 통제 가능 (앞바퀴)</em></li>
  <li><strong>느끼기(Feeling):</strong> 감정 → 간접적 통제 (뒷바퀴)</li>
  <li><strong>신체반응(Physiology):</strong> 생리 반응 → 간접적 통제 (뒷바퀴)</li>
</ul>
<p>★ 핵심: 활동하기와 생각하기(앞바퀴)를 바꾸면 느끼기와 신체반응(뒷바퀴)도 변화합니다.</p>
<h4>WDEP 체계</h4>
<ul>
  <li><strong>W (Want/바람):</strong> "무엇을 원하십니까?" - 바람, 욕구, 지각 탐색</li>
  <li><strong>D (Doing/행동):</strong> "지금 무엇을 하고 있습니까?" - 현재 행동과 방향 탐색</li>
  <li><strong>E (Evaluation/평가):</strong> "지금 하는 것이 원하는 것을 얻는 데 도움이 됩니까?" - 자기 평가 (핵심)</li>
  <li><strong>P (Planning/계획):</strong> 변화를 위한 실행 계획 수립</li>
</ul>
<h4>좋은 계획의 조건: SAMI²C³</h4>
<p>Simple(단순), Attainable(달성가능), Measurable(측정가능), Immediate(즉시실행), Involved(관여), Controlled(통제가능), Committed(헌신), Continuous(지속적)</p>`
          },
          {
            title: '해결중심 단기상담',
            content: `<h4>해결중심 단기상담 (Solution-Focused Brief Therapy, SFBT)</h4>
<p>드 셰이저(Steve de Shazer)와 인수 김 버그(Insoo Kim Berg)가 개발한 단기 상담 모델로, <strong>문제가 아닌 해결</strong>에 초점을 맞춥니다.</p>
<h4>기본 가정</h4>
<ul>
  <li>변화는 불가피하며 항상 일어나고 있다</li>
  <li>내담자는 자신의 문제 해결에 필요한 <strong>강점과 자원</strong>을 이미 가지고 있다</li>
  <li>작은 변화가 큰 변화를 이끈다 (눈덩이 효과)</li>
  <li>문제의 원인을 알 필요 없이 해결 가능하다</li>
  <li><strong>효과가 있으면 계속하고, 효과가 없으면 다른 것을 하라</strong></li>
  <li>문제가 항상 일어나는 것은 아니다 (예외는 반드시 존재)</li>
</ul>
<h4>핵심 질문 기법</h4>
<ul>
  <li><strong>기적질문:</strong> "오늘 밤 기적이 일어나 문제가 해결되었다면, 내일 아침 무엇이 달라져 있을까요?"</li>
  <li><strong>예외질문:</strong> "문제가 일어나지 않았던 때는 언제였나요? 그때 무엇이 달랐나요?"</li>
  <li><strong>척도질문:</strong> "1~10점 중 현재 상태는 몇 점? 1점 올리려면 무엇이 필요할까요?"</li>
  <li><strong>대처질문:</strong> "이렇게 힘든 상황에서 어떻게 견뎌오셨나요?" (내담자 강점 발견)</li>
  <li><strong>관계성질문:</strong> "주변 사람들은 당신이 어떻게 달라졌다고 말할까요?"</li>
  <li><strong>첫 회기 전 변화 질문:</strong> "상담 예약 후부터 지금까지 달라진 것이 있나요?"</li>
</ul>
<h4>내담자 유형과 상담 전략</h4>
<table>
  <tr><th>유형</th><th>특징</th><th>전략</th></tr>
  <tr><td><strong>방문형</strong></td><td>자발적 동기 없음 (타인에 의해 의뢰)</td><td>칭찬, 관계 형성에 집중</td></tr>
  <tr><td><strong>불평형</strong></td><td>문제 인식 있으나 자신의 역할 인식 부족</td><td>관찰 과제 부여</td></tr>
  <tr><td><strong>고객형</strong></td><td>문제 인식 + 해결 의지 있음</td><td>행동 과제 부여</td></tr>
</table>
<h4>상담 구조: 메시지 전달</h4>
<ul>
  <li><strong>칭찬:</strong> 내담자의 강점과 노력 인정</li>
  <li><strong>연결문(브릿지):</strong> 칭찬과 과제를 연결하는 근거</li>
  <li><strong>과제:</strong> 관찰 과제 또는 행동 과제 제시</li>
</ul>`
          },
          {
            title: '교류분석(TA)과 실존주의 상담',
            content: `<h4>교류분석 (Transactional Analysis, TA)</h4>
<p>에릭 번(Eric Berne)이 개발한 성격이론 및 상담 접근으로, <strong>자아상태</strong>와 대인 교류 패턴을 분석합니다.</p>
<h4>자아상태 (PAC 모델)</h4>
<ul>
  <li><strong>부모 자아(Parent, P):</strong> 부모에게 배운 가치관, 규칙
    <ul><li>양육적 부모(NP): 돌봄, 격려</li><li>비판적 부모(CP): 비판, 통제</li></ul></li>
  <li><strong>성인 자아(Adult, A):</strong> 객관적, 합리적 사고와 현실적 판단 (가장 바람직한 상태)</li>
  <li><strong>아동 자아(Child, C):</strong> 어린 시절의 감정과 충동
    <ul><li>자유로운 아동(FC): 자발적, 창의적</li><li>순응적 아동(AC): 순종적, 의존적</li></ul></li>
</ul>
<h4>교류(Transaction)의 유형</h4>
<ul>
  <li><strong>상보교류(Complementary):</strong> 기대한 자아상태에서 반응 → 원활한 의사소통 지속</li>
  <li><strong>교차교류(Crossed):</strong> 기대하지 않은 자아상태에서 반응 → 의사소통 단절/갈등</li>
  <li><strong>이면교류(Ulterior):</strong> 표면적 메시지와 이면적 메시지가 다름 → 게임의 원인</li>
</ul>
<h4>인생태도(Life Position) 4유형</h4>
<table>
  <tr><th>유형</th><th>태도</th><th>특징</th></tr>
  <tr><td><strong>I'm OK, You're OK</strong></td><td>자타 긍정</td><td>건강한 인생태도 (목표)</td></tr>
  <tr><td><strong>I'm OK, You're not OK</strong></td><td>자기 긍정, 타인 부정</td><td>투사적, 비난적, 우월감</td></tr>
  <tr><td><strong>I'm not OK, You're OK</strong></td><td>자기 부정, 타인 긍정</td><td>열등감, 우울, 의존</td></tr>
  <tr><td><strong>I'm not OK, You're not OK</strong></td><td>자타 부정</td><td>절망적, 무기력, 포기</td></tr>
</table>
<h4>기타 주요 개념</h4>
<ul>
  <li><strong>스트로크(Stroke):</strong> 상대를 인정하는 자극 (긍정적/부정적, 조건적/무조건적)</li>
  <li><strong>인생각본(Life Script):</strong> 어린 시절에 무의식적으로 형성된 인생 계획</li>
  <li><strong>게임(Game):</strong> 이면교류에 기반한 반복적 대인관계 패턴</li>
</ul>
<hr/>
<h4>실존주의 상담</h4>
<p>빅터 프랭클(Frankl), 롤로 메이(May), 어빈 얄롬(Yalom)이 대표적입니다.</p>
<h4>실존적 핵심 주제 (얄롬의 4가지 궁극적 관심사)</h4>
<ul>
  <li><strong>죽음:</strong> 죽음의 자각이 삶의 의미를 부여하고 참된 삶을 살게 함</li>
  <li><strong>자유와 책임:</strong> 인간은 선택의 자유가 있으며, 그에 따른 책임도 짐</li>
  <li><strong>실존적 고독:</strong> 궁극적으로 타인과 완전히 합일될 수 없는 존재</li>
  <li><strong>무의미:</strong> 삶에는 미리 정해진 의미가 없으므로, 스스로 의미를 창조해야 함</li>
</ul>
<h4>프랭클의 로고테라피(Logotherapy) 기법</h4>
<ul>
  <li><strong>역설적 의도:</strong> 두려워하는 것을 의도적으로 행하거나 바라기 (예: 불면증 환자에게 "잠들지 않으려고 노력하세요")</li>
  <li><strong>탈숙고(Dereflection):</strong> 과도한 자기관찰/분석에서 벗어나 외부 대상에 주의 전환</li>
  <li><strong>소크라테스식 대화:</strong> 질문을 통해 스스로 삶의 의미를 발견하도록 안내</li>
  <li><strong>의미에의 의지:</strong> 인간의 가장 근본적 동기는 삶의 의미를 찾는 것</li>
</ul>`
          }
        ]
      },
      {
        title: '직업상담 이론 - 시험 핵심 키워드',
        topics: [
          {
            title: '행동주의 상담의 체계적 둔감법',
            content: `<h4 class="exam-important">체계적 둔감법 (Systematic Desensitization)</h4>
<p><strong>고전적 조건형성 기법</strong>에 기반한 불안 감소 기법</p>
<ul>
  <li>불안 위계목록 작성</li>
  <li>낮은 자극에서 높은 자극 순으로 상상 유도</li>
  <li>이완 상태에서 점진적으로 불안 자극 노출</li>
</ul>
<h4 class="exam-important">불안감소기법 7가지</h4>
<table>
  <tr><th>기법</th><th>설명</th></tr>
  <tr><td><strong>체계적 둔감법</strong></td><td>이완 + 점진적 불안 자극 노출</td></tr>
  <tr><td><strong>금지조건형성</strong></td><td>부적응 행동에 대한 조건형성 억제</td></tr>
  <tr><td><strong>반조건형성</strong></td><td>기존 조건반응과 반대되는 새 조건반응 형성</td></tr>
  <tr><td><strong>홍수법</strong></td><td>강한 불안 자극에 지속적으로 노출</td></tr>
  <tr><td><strong>혐오치료</strong></td><td>부적응 행동에 혐오 자극 연합</td></tr>
  <tr><td><strong>주장훈련</strong></td><td>자기주장 능력 향상 훈련</td></tr>
  <tr><td><strong>자기표현훈련</strong></td><td>자기 표현 기술 학습</td></tr>
</table>
<h4 class="exam-important">학습촉진법</h4>
<table>
  <tr><th>방법</th><th>설명</th></tr>
  <tr><td><strong>강화</strong></td><td>바람직한 행동 후 보상 제공</td></tr>
  <tr><td><strong>변별학습</strong></td><td>자극 간 차이를 구분하는 학습</td></tr>
  <tr><td><strong>사회적 모델링</strong></td><td>타인의 행동을 관찰하여 학습</td></tr>
  <tr><td><strong>행동조성(Shaping)</strong></td><td>목표 행동에 점진적으로 접근</td></tr>
  <tr><td><strong>토큰경제</strong></td><td>토큰(보상)을 활용한 행동 변화</td></tr>
</table>`
          },
          {
            title: '발달적 직업상담의 6단계',
            content: `<h4 class="exam-important">Super의 발달적 직업상담 6단계</h4>
<table>
  <tr><th>단계</th><th>내용</th><th>방식</th></tr>
  <tr><td><strong>1단계</strong></td><td>문제탐색 / 자아개념 묘사</td><td>비지시적</td></tr>
  <tr><td><strong>2단계</strong></td><td>심층적 탐색</td><td>지시적</td></tr>
  <tr><td><strong>3단계</strong></td><td>자아수용 / 통찰</td><td>비지시적</td></tr>
  <tr><td><strong>4단계</strong></td><td>현실검증</td><td>지시적</td></tr>
  <tr><td><strong>5단계</strong></td><td>태도·감정 탐색</td><td>비지시적</td></tr>
  <tr><td><strong>6단계</strong></td><td>의사결정</td><td>비지시적</td></tr>
</table>
<h4 class="exam-important">핵심 포인트</h4>
<ul>
  <li>Super는 <strong>'진단' 대신 '평가'</strong>라는 용어 사용</li>
  <li><strong>3가지 평가:</strong> 문제 평가, 개인 평가, 예언(예후) 평가</li>
  <li>비지시적(1,3,5,6단계)과 지시적(2,4단계)을 번갈아 사용</li>
</ul>`
          },
          {
            title: '개인주의 상담(아들러)의 특징',
            content: `<h4 class="exam-important">아들러(Adler) 개인심리학의 핵심</h4>
<p><strong>의식 속 힘을 강조</strong> (프로이트/융은 무의식 강조)</p>
<h4 class="exam-important">10가지 주요 특징</h4>
<table>
  <tr><th>번호</th><th>특징</th></tr>
  <tr><td>1</td><td><strong>전체적 존재:</strong> 인간을 통합된 전체로 봄</td></tr>
  <tr><td>2</td><td><strong>사회적 관계 강조:</strong> 인간은 사회적 존재</td></tr>
  <tr><td>3</td><td><strong>동기수정 관심:</strong> 행동 동기의 수정에 관심</td></tr>
  <tr><td>4</td><td><strong>열등감 극복 / 우월 추구:</strong> 열등감에서 우월로</td></tr>
  <tr><td>5</td><td><strong>가치·목표 수정:</strong> 잘못된 가치와 목표 수정</td></tr>
  <tr><td>6</td><td><strong>사회적 관심:</strong> 공동체 의식 강조</td></tr>
  <tr><td>7</td><td><strong>주관적 지각 중시:</strong> 개인의 주관적 경험 중요</td></tr>
  <tr><td>8</td><td><strong>선택·책임 강조:</strong> 자기 삶에 대한 책임</td></tr>
  <tr><td>9</td><td><strong>계약·협력 중시:</strong> 상담자-내담자 협력 관계</td></tr>
  <tr><td>10</td><td><strong>격려 사용 권장:</strong> 격려를 통한 변화 촉진</td></tr>
</table>`
          },
          {
            title: '특성-요인 직업상담의 과정',
            content: `<h4 class="exam-important">특성-요인 상담의 특징</h4>
<p><strong>지시적 상담</strong>의 대표적 접근</p>
<h4 class="exam-important">파슨스(Parsons)의 3요소</h4>
<ol>
  <li><strong>자기이해:</strong> 자신의 적성, 능력, 흥미, 한계 파악</li>
  <li><strong>직업이해:</strong> 직업 세계에 대한 이해</li>
  <li><strong>합리적 연결:</strong> 자기이해와 직업이해의 합리적 매칭</li>
</ol>
<h4 class="exam-important">윌리암슨(Williamson)의 6단계</h4>
<table>
  <tr><th>단계</th><th>내용</th></tr>
  <tr><td><strong>1. 분석(Analysis)</strong></td><td>내담자 정보 수집</td></tr>
  <tr><td><strong>2. 종합(Synthesis)</strong></td><td>수집된 정보 요약·정리</td></tr>
  <tr><td><strong>3. 진단(Diagnosis)</strong></td><td>문제 원인 파악</td></tr>
  <tr><td><strong>4. 처방(Prognosis)</strong></td><td>문제 해결 가능성 예측</td></tr>
  <tr><td><strong>5. 치료(Treatment)</strong></td><td>적절한 개입과 조력</td></tr>
  <tr><td><strong>6. 사후지도(Follow-up)</strong></td><td>상담 후 적응 확인</td></tr>
</table>`
          },
          {
            title: '보딘(Bordin)의 상담',
            content: `<h4 class="exam-important">보딘(Bordin) 상담의 특징</h4>
<ul>
  <li><strong>정신역동적</strong> 접근</li>
  <li><strong>특성요인 + 내담자중심</strong> 상담을 통합</li>
  <li>5가지 진단범주 제시</li>
</ul>
<h4 class="exam-important">주요 기법</h4>
<table>
  <tr><th>기법</th><th>설명</th></tr>
  <tr><td><strong>명료화</strong></td><td>내담자의 감정과 생각을 명확하게 정리</td></tr>
  <tr><td><strong>비교</strong></td><td>다양한 대안과 결과를 비교 검토</td></tr>
  <tr><td><strong>소망방어체계 해석</strong></td><td>무의식적 소망과 방어기제 해석</td></tr>
</table>
<h4 class="exam-important">상담 과정 3단계</h4>
<ol>
  <li><strong>탐색 / 계약 설정:</strong> 문제 탐색 및 상담 관계 계약</li>
  <li><strong>핵심 결정:</strong> 핵심 문제에 대한 결정</li>
  <li><strong>변화 노력:</strong> 결정을 실행하기 위한 변화 시도</li>
</ol>`
          },
          {
            title: '내담자중심 상담의 기본태도',
            content: `<h4 class="exam-important">로저스(Rogers), 패터슨(Patterson)</h4>
<p><strong>비지시적 상담</strong>의 대표적 접근</p>
<h4 class="exam-important">상담자의 3가지 기본태도 (필요충분조건)</h4>
<table>
  <tr><th>태도</th><th>설명</th></tr>
  <tr><td><strong>일치성/진실성(Congruence)</strong></td><td>상담자가 자신의 경험과 표현이 일치하는 상태. 진솔한 태도</td></tr>
  <tr><td><strong>공감적 이해(Empathy)</strong></td><td>내담자의 내적 세계를 마치 자신의 것처럼 느끼며 이해</td></tr>
  <tr><td><strong>무조건적 긍정적 수용(Unconditional Positive Regard)</strong></td><td>내담자를 조건 없이 존중하고 수용</td></tr>
</table>`
          },
          {
            title: '정신분석적 상담의 방어기제',
            content: `<h4 class="exam-important">프로이트(Freud) 정신분석</h4>
<p>특징: <strong>비합리적, 결정론적, 생물학적</strong> 관점</p>
<p>상담자 역할: <strong>텅 빈 스크린(Blank Screen)</strong> - 중립적 태도 유지</p>
<h4 class="exam-important">주요 방어기제</h4>
<table>
  <tr><th>방어기제</th><th>설명</th></tr>
  <tr><td><strong>억압(Repression)</strong></td><td>가장 중요하고 기초적인 방어기제. 고통스러운 기억을 무의식에 억눌러 둠</td></tr>
  <tr><td><strong>부인(Denial)</strong></td><td>위협적인 현실을 인정하지 않음</td></tr>
  <tr><td><strong>합리화(Rationalization)</strong></td><td>그럴듯한 이유를 붙여 정당화</td></tr>
  <tr><td><strong>반동형성(Reaction Formation)</strong></td><td>실제 감정과 반대되는 행동 표현</td></tr>
  <tr><td><strong>투사(Projection)</strong></td><td>자신의 감정을 타인에게 돌림</td></tr>
  <tr><td><strong>퇴행(Regression)</strong></td><td>이전 발달 단계로 되돌아감</td></tr>
  <tr><td><strong>전위(Displacement)</strong></td><td>감정을 다른 대상으로 전환</td></tr>
  <tr><td><strong>대치(Substitution)</strong></td><td>원래 대상 대신 다른 대상으로 대체</td></tr>
  <tr><td><strong>격리(Isolation)</strong></td><td>감정과 사고를 분리</td></tr>
</table>`
          },
          {
            title: '교류분석적 상담의 성격구조',
            content: `<h4 class="exam-important">번(Berne)의 교류분석(TA)</h4>
<h4 class="exam-important">분석 유형</h4>
<table>
  <tr><th>유형</th><th>설명</th></tr>
  <tr><td><strong>구조분석</strong></td><td>자아상태(P-A-C)의 구조 분석</td></tr>
  <tr><td><strong>교류분석</strong></td><td>사람 간 의사소통 패턴 분석</td></tr>
  <tr><td><strong>라켓/게임분석</strong></td><td>반복적 부정적 교류 패턴 분석</td></tr>
  <tr><td><strong>각본분석</strong></td><td>인생각본(Life Script) 분석</td></tr>
</table>
<h4 class="exam-important">자아상태 (PAC 모델)</h4>
<table>
  <tr><th>자아상태</th><th>특징</th></tr>
  <tr><td><strong>부모자아(Parent: P)</strong></td><td>양육적 부모(NP), 비판적 부모(CP). 가치관, 규범, 도덕</td></tr>
  <tr><td><strong>성인자아(Adult: A)</strong></td><td>합리적, 객관적, 현실적 사고와 판단</td></tr>
  <tr><td><strong>아동자아(Child: C)</strong></td><td>자유로운 아동(FC), 순응적 아동(AC). 감정, 욕구, 창의성</td></tr>
</table>`
          },
          {
            title: '행동주의 상담의 강화계획',
            content: `<h4 class="exam-important">행동주의 상담의 주요 학자</h4>
<table>
  <tr><th>학자</th><th>이론</th></tr>
  <tr><td><strong>파블로프(Pavlov)</strong></td><td>고전적 조건형성 (자극-반응)</td></tr>
  <tr><td><strong>스키너(Skinner)</strong></td><td>조작적 조건형성 (강화-행동)</td></tr>
  <tr><td><strong>반두라(Bandura)</strong></td><td>사회학습이론 (관찰학습, 모델링)</td></tr>
</table>
<h4 class="exam-important">강화계획의 효과 순서 (소거 저항력)</h4>
<table>
  <tr><th>순위</th><th>강화계획</th><th>약자</th><th>설명</th></tr>
  <tr><td>1위 (가장 강함)</td><td><strong>변동비율</strong></td><td>VR</td><td>불규칙한 반응 횟수 후 강화</td></tr>
  <tr><td>2위</td><td><strong>고정비율</strong></td><td>FR</td><td>일정한 반응 횟수 후 강화</td></tr>
  <tr><td>3위</td><td><strong>변동간격</strong></td><td>VI</td><td>불규칙한 시간 간격 후 강화</td></tr>
  <tr><td>4위 (가장 약함)</td><td><strong>고정간격</strong></td><td>FI</td><td>일정한 시간 간격 후 강화</td></tr>
</table>
<p><strong>암기 팁:</strong> VR > FR > VI > FI (변고변고, 비율이 간격보다 강함)</p>`
          },
          {
            title: 'REBT의 ABCDEF 모델',
            content: `<h4 class="exam-important">엘리스(Ellis)의 REBT</h4>
<p><strong>인지 + 행동주의</strong>를 결합한 상담 이론</p>
<h4 class="exam-important">ABCDEF 모델</h4>
<table>
  <tr><th>요소</th><th>영문</th><th>설명</th></tr>
  <tr><td><strong>A</strong></td><td>Activating Event</td><td>선행사건 - 문제를 유발하는 사건</td></tr>
  <tr><td><strong>B</strong></td><td>Belief</td><td>비합리적 신념 - 사건에 대한 잘못된 믿음</td></tr>
  <tr><td><strong>C</strong></td><td>Consequence</td><td>결과 - 비합리적 신념으로 인한 부정적 결과</td></tr>
  <tr><td><strong>D</strong></td><td>Disputing</td><td>논박 - 비합리적 신념에 대한 도전과 반박</td></tr>
  <tr><td><strong>E</strong></td><td>Effect</td><td>효과 - 논박으로 인한 긍정적 효과</td></tr>
  <tr><td><strong>F</strong></td><td>Feeling</td><td>새로운 감정 - 합리적 신념으로 인한 긍정적 감정</td></tr>
</table>
<h4 class="exam-important">REBT 주요 기법</h4>
<table>
  <tr><th>유형</th><th>기법</th></tr>
  <tr><td><strong>인지기법</strong></td><td>논박(Disputing) - 비합리적 신념에 도전</td></tr>
  <tr><td rowspan="3"><strong>행동기법</strong></td><td>체계적 둔감법</td></tr>
  <tr><td>강화/처벌</td></tr>
  <tr><td>자기관리 프로그램</td></tr>
</table>`
          }
        ]
      },
      {
        title: '직업상담 기법',
        topics: [
          {
            title: '생애진로사정(LCA)',
            content: `<h4>생애진로사정 개요</h4>
<p><strong>아들러(Adler)의 개인심리학</strong>에 기초를 둔 생애진로사정은 상담자와 내담자가 처음 만났을 때 이용할 수 있는 <strong>구조화된 면접기법</strong>이자 <strong>초기단계 면접법</strong>이며, 검사 실시와 해석의 예비단계입니다.</p>
<p>생애진로사정을 통해 파악할 수 있는 것:</p>
<ol>
  <li>내담자의 <strong>직업경험과 교육수준</strong></li>
  <li>내담자의 <strong>기술과 유능성</strong></li>
  <li>내담자의 <strong>가치관 및 자기인식 정도</strong></li>
</ol>
<h4>생애진로사정의 특징</h4>
<ul>
  <li>작업자, 학습자, 개인의 역할 등 <strong>다양한 생애역할</strong>에 대한 정보를 탐색</li>
  <li>진로사정, 전형적인 하루, 강점과 장애, 요약으로 이루어짐</li>
  <li><strong>비판단적이고 비위협적인 대화</strong>로 내담자와 긍정적 관계를 형성하는 데 도움</li>
  <li>내담자의 진로계획을 향상시킨다</li>
  <li class="exam-highlight">인쇄물이나 소책자, 지필도구 등의 <strong>표준화된 진로사정 도구는 가급적 사용을 삼간다</strong></li>
</ul>
<h4 class="exam-important">생애진로사정의 구조 (4단계)</h4>
<table>
  <tr><th>단계</th><th>내용</th><th>핵심 파악 요소</th></tr>
  <tr><td><strong>1. 진로사정</strong></td><td>직업경험, 교육·훈련, 여가활동</td><td>내담자의 직업경험(시간제·전임, 유·무보수), 교육 또는 훈련과정과 관련된 문제들, 여가활동</td></tr>
  <tr><td><strong>2. 전형적인 하루</strong></td><td>생활 조직 방식을 시간 흐름에 따라 체계적 기술</td><td>의존적인지 또는 독립적인지, 자발적인지 또는 체계적인지</td></tr>
  <tr><td><strong>3. 강점과 장애</strong></td><td>문제·환경적 장애 탐구</td><td>극복을 위한 대처차원이나 잠재력 탐구</td></tr>
  <tr><td><strong>4. 요약</strong></td><td>자기인식 증진</td><td>내담자 스스로 자기인식을 증진, 문제해결 및 장애극복을 위해 목표달성계획 수립</td></tr>
</table>`
          },
          {
            title: '직업가계도(Genogram)',
            content: `<h4>직업가계도 개요</h4>
<p>구조화된 면담법의 <strong>직업가계도</strong>는 그 자체로 내담자의 직업선택을 위한 도구로 사용되는 것이 아닌, 내담자의 <strong>생애진로사정을 위한 도구</strong>로 사용됩니다.</p>
<ul>
  <li>내담자의 직업의식, 직업선택, 직업태도에 대한 <strong>가족의 영향력</strong>을 분석하는 대표적인 <strong>질적 평가기법</strong></li>
  <li>경력상담 시 내담자의 가족이나 선조들의 직업 특징에 대한 <strong>시각적 표상</strong>을 얻기 위해 도표를 만드는 방식</li>
  <li>직업가계도를 통해 <strong>가족의 미완성된 과제</strong>를 발견할 수 있다</li>
</ul>
<h4 class="exam-important">다그레이(Dagley)의 직업가계도 작성 시 관심 요인</h4>
<ol>
  <li><strong>3~4세대</strong>의 대표적 직업</li>
  <li>가족 성원의 직업에 전형적인 <strong>지위와 가치의 서열화</strong></li>
  <li>가족 성원들이 직업을 선택 또는 바꾸었을 때 나타난 <strong>진로선택 형태와 방법</strong></li>
  <li>가족의 <strong>경제적 기대와 압력</strong></li>
  <li>가족의 <strong>일의 가치</strong></li>
  <li>내담자가 성장할 때의 <strong>또래집단 상황</strong></li>
</ol>`
          },
          {
            title: '직업선택의 결정모형',
            content: `<h4>직업선택의 결정모형 개요</h4>
<p>직업상담기법으로 대안개발과 의사결정에 관한 <strong>직업선택의 결정모형</strong>을 제시하였습니다. 크게 기술적 모형과 처방적 모형으로 구분됩니다.</p>
<h4 class="exam-important">(1) 기술적 직업결정 모형</h4>
<p>타이드만과 오하라, 힐튼, 브룸, 슈, 플레쳐 등이 제시</p>
<table>
  <tr><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>타이드만과 오하라<br/>(Tiedeman & O'Hara)</strong></td><td>자기정체감 분화, 발달과업 수행, 심리사회적 위기 해결의 지속적인 과정. 자기정체감을 지속적으로 구별해 내고 발달과제를 처리하는 과정</td></tr>
  <tr><td><strong>힐튼(Hilton)</strong></td><td>인간이 복잡한 정보에 접근하게 되는 구조에 근거 → <strong>전제단계 - 계획단계 - 인지부조화단계</strong></td></tr>
  <tr><td><strong>브룸(Vroom)</strong></td><td>직업결정요인 → <strong>균형, 기대, 힘</strong></td></tr>
  <tr><td><strong>슈(Hsu)</strong></td><td>직업결정자 → 선택과 목표 사이의 <strong>불균형을 극소화</strong> 시키려는 시도를 가정</td></tr>
  <tr><td><strong>플레쳐(Fletcher)</strong></td><td>개념학습에 대한 생각에 근거 → <strong>'특수성 대 일반성', '구체성 대 추상성'</strong></td></tr>
</table>
<h4 class="exam-important">(2) 처방적 직업결정 모형</h4>
<p>카츠, 겔라트, 칼도와 쥐토우스키가 제시 (이름이 'ㄱ','ㅋ'으로 시작)</p>
<table>
  <tr><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>카츠(Katz)</strong></td><td>특성에 맞는 대안을 선택하고 그 대안이 제공하는 보수에 따라 평가하는 것을 주장</td></tr>
  <tr><td><strong>겔라트(Gelatt)</strong></td><td>직업선택을 <strong>결과보다 과정 중시</strong>. 정보체계 설명 → <strong>예언적 체계, 가치체계, 결정준거</strong></td></tr>
  <tr><td><strong>칼도와 쥐토우스키<br/>(Kaldor-Zytowski)</strong></td><td>직업결정자가 대안에 대해 <strong>무제한 정보</strong>를 갖게 된다고 주장</td></tr>
</table>
<h4>겔라트(Gelatt)의 진로의사결정 과정</h4>
<p><strong>목적의식 → 정보수집 → 대안열거 → 대안결과예측 → 대안실현가능성예측 → 가치평가 → 의사결정 → 평가 및 재투입</strong></p>`
          },
          {
            title: '6개의 생각하는 모자',
            content: `<h4>의사결정의 유형 - 하렌(Harren)</h4>
<p>하렌(Harren)의 진로의사결정 유형:</p>
<ul>
  <li><strong>합리적 유형</strong> : 논리적으로 정보를 수집하고 체계적으로 의사결정</li>
  <li><strong>직관적 유형</strong> : 감정과 직감에 의존하여 결정</li>
  <li><strong>의존적 유형</strong> : 타인의 기대나 의견에 의존하여 결정</li>
</ul>
<h4 class="exam-important">6개의 생각하는 모자</h4>
<p>의사결정의 촉진방법으로 제시된 기법입니다.</p>
<table>
  <tr><th>모자 색</th><th>의미</th><th>특징</th></tr>
  <tr><td><strong>백색</strong></td><td>사실</td><td>본인과 직업들에 대한 <strong>사실들만</strong> 고려한다</td></tr>
  <tr><td><strong>적색</strong></td><td>직관</td><td><strong>직관에 의존</strong>하고, 직감에 따라 행동한다</td></tr>
  <tr><td><strong>흑색</strong></td><td>비관</td><td><strong>비관적, 비판적</strong></td></tr>
  <tr><td><strong>황색</strong></td><td>낙관</td><td><strong>낙관적</strong></td></tr>
  <tr><td><strong>녹색</strong></td><td>창의</td><td>새로운 대안을 찾으려 노력, 문제를 <strong>다른 각도</strong>에서 바라본다</td></tr>
  <tr><td><strong>청색</strong></td><td>합리</td><td><strong>합리적</strong>으로 생각한다 (사회자로서의 역할 반영)</td></tr>
</table>
<p class="exam-tip"><strong>시험 꿀팁:</strong> 6개 생각하는 모자 중 '갈색 모자' 지문이 나오면 무조건 오답!</p>`
          },
          {
            title: '상담면접 기법과 공감',
            content: `<h4 class="exam-important">공감 (감정에 대한 반영)</h4>
<ul>
  <li>내담자가 전달하려는 내용에서 <strong>한 걸음 더 나아가</strong> 그 내면적 감정에 대해 반영하는 것</li>
  <li><strong>객관적 위치</strong>에서 이해</li>
  <li>내담자의 <strong>자기탐욕과 수용을 촉진</strong></li>
</ul>
<h4>공감적 이해의 5가지 수준</h4>
<table>
  <tr><th>수준</th><th>설명</th><th>공감 수준</th></tr>
  <tr><td>수준 1</td><td>별다른 주의를 기울이지 않은 타입, 소통이 못 미침</td><td>매우 낮음</td></tr>
  <tr><td>수준 2</td><td>어느 정도 반응하는 타입, 상대방 감정이나 의사 무시</td><td>낮음</td></tr>
  <tr><td>수준 3</td><td>상호교류적 의사소통 가능</td><td>보통</td></tr>
  <tr><td>수준 4</td><td>상대방보다 더 의사소통 이루어짐</td><td>높음</td></tr>
  <tr><td>수준 5</td><td>상대방의 표면적, 내면적 감정에 정확한 반응</td><td>매우 높음</td></tr>
</table>
<h4 class="exam-important">상담면접의 주요 기법 (6개 이상 암기)</h4>
<p><strong>공감, 요약과 재진술, 반영, 수용, 경청(반영적/적극적), 탐색적 질문(개방적), 명료화, 해석, 직면, 저항의 처리, 침묵의 처리</strong></p>
<h4>경청 (Active Listening)</h4>
<ul>
  <li><strong>수동적 경청:</strong> 조용히 듣기, 고개 끄덕이기, "음", "네" 등</li>
  <li><strong>적극적 경청:</strong> 재진술, 반영, 명료화를 통한 깊은 이해</li>
  <li><strong>비언어적 주의:</strong> 눈맞춤, 몸 기울이기, 개방적 자세</li>
</ul>
<h4>명료화 (Clarification)</h4>
<p>내담자의 모호한 생각과 감정의 표현을 상담사가 분명하게 밝히는 것</p>
<h4>직면 (Confrontation)</h4>
<p>상담사가 내담자로 하여금 자신의 문제에 회피하지 않고 도전하도록 하는 것</p>
<h4>해석 (Interpretation)</h4>
<p>내담자의 행동, 사고, 감정 아래에 있는 무의식적 의미나 패턴을 설명하는 기법</p>`
          },
          {
            title: '상담의 바람직한 목표설정 방향',
            content: `<h4>목표설정의 필요성</h4>
<p>목표설정에 <strong>상담자의 개입이 필요한 이유</strong>는 내담자가 명확하고 구체적인 목표를 설정하도록 돕기 위해서입니다.</p>
<h4 class="exam-important">상담의 바람직한 목표설정 방향</h4>
<ol>
  <li><strong>구체적</strong>이어야 한다</li>
  <li><strong>실현 가능</strong>해야 한다</li>
  <li><strong>내담자가 원하고 바라는 것</strong>이어야 한다</li>
  <li>내담자의 목표는 <strong>상담자의 기술과 양립 가능</strong>해야만 한다</li>
</ol>`
          },
          {
            title: '전이된 오류 정정하기',
            content: `<h4>전이된 오류 정정하기 개요</h4>
<p>내담자의 정보 및 행동에 대한 이해기법으로, <strong>정보의 오류, 한계의 오류, 논리적 오류</strong>의 3가지 유형이 있습니다.</p>
<h4 class="exam-important">3가지 오류 유형</h4>
<table>
  <tr><th>오류 유형</th><th>설명</th><th>세부 항목</th></tr>
  <tr>
    <td><strong>정보의 오류</strong></td>
    <td>충분한 정보를 알고 있다고 잘못 생각하는 경우</td>
    <td>이야기 삭제, 불확실한 인물의 사용, 불분명한 동사의 사용, 참고자료의 불충분, 제한된 어투의 사용</td>
  </tr>
  <tr>
    <td><strong>한계의 오류</strong></td>
    <td>제한된 기회 및 선택에 대한 견해</td>
    <td>예외를 인정하지 않는 것, 불가능을 가정하는 것, 어쩔 수 없음을 가정하는 것</td>
  </tr>
  <tr>
    <td><strong>논리적 오류</strong></td>
    <td>논리적으로 잘못된 추론</td>
    <td>잘못된 인간관계 오류, 마음의 해석, 제한된 일반화</td>
  </tr>
</table>`
          },
          {
            title: '자기보고식 가치사정법',
            content: `<h4>가치사정법 개요</h4>
<p>자기보고식 가치사정법은 <strong>내담자 사정의 가치 사정하기</strong>에 해당합니다.</p>
<h4 class="exam-important">가치사정법 6가지</h4>
<ol>
  <li><strong>체크목록 가치에 순위 매기기</strong></li>
  <li><strong>과거의 선택 회상하기</strong></li>
  <li><strong>절정경험 조사하기</strong></li>
  <li><strong>자유시간과 금전의 사용</strong></li>
  <li><strong>백일몽 말하기</strong></li>
  <li><strong>존경하는 사람 기술하기</strong></li>
</ol>`
          },
          {
            title: '코틀(Cottle)의 원형검사',
            content: `<h4>코틀의 원형검사 개요</h4>
<ul>
  <li>가장 효과적인 <strong>시간전망 개입도구</strong></li>
  <li><strong>과거, 현재, 미래</strong>를 뜻하는 3개의 원을 이용</li>
  <li>원의 크기는 시간차원에 대한 <strong>상대적 친밀감</strong>을 의미</li>
  <li>원의 배치는 시간차원이 각각 어떻게 연관되어 있는지를 나타냄</li>
  <li><strong>방향성, 변별성, 통합성</strong>을 제시</li>
</ul>
<h4 class="exam-important">진로시간전망 개입의 3가지 측면</h4>
<table>
  <tr><th>측면</th><th>설명</th></tr>
  <tr><td><strong>방향성</strong></td><td>미래에 대한 <strong>낙관적인 입장</strong>을 구성</td></tr>
  <tr><td><strong>변별성</strong></td><td>시간차원 내 사건의 강도와 확장의 원리, 미래 계획에 대한 <strong>긍정적 태도를 강화</strong></td></tr>
  <tr><td><strong>통합성</strong></td><td><strong>현재 행동과 미래의 결과</strong>를 연결</td></tr>
</table>
<h4>원의 상대적 배치에 따른 시간 관계성</h4>
<p>흑색(과거), 청색(현재), 적색(미래)을 사용합니다.</p>
<table>
  <tr><th>배치 형태</th><th>시간 관계</th></tr>
  <tr><td>어떤 것도 접해 있지 않은 원</td><td>시간차원의 <strong>고립</strong></td></tr>
  <tr><td>중복되지 않고 경계선에 접해 있는 원</td><td>시간차원의 <strong>연결</strong></td></tr>
  <tr><td>부분적으로 중첩된 원</td><td>시간차원의 <strong>연합</strong></td></tr>
  <tr><td>완전히 중첩된 원</td><td>시간차원의 <strong>통합</strong></td></tr>
</table>
<p class="exam-tip"><strong>참고:</strong> 진로시간전망은 진로에 관한 과거, 현재, 미래의 정신적인 상을 말하며, 직업상담 초기에 하는 것이 좋고, 진로계획에 대한 긍정적 태도의 강화를 목적으로 하며, 직접적인 진로계획 수정을 목적으로 하지 않습니다.</p>`
          },
          {
            title: 'MBTI 성격사정',
            content: `<h4>MBTI (마이어스-브릭스 성격유형검사)</h4>
<p>Myers-Briggs Type Indicator</p>
<ul>
  <li><strong>융(Jung)의 분석심리학</strong>에 의한 심리유형론에 기반</li>
  <li><strong>객관적 검사</strong>이자 <strong>자기보고식의 강제선택</strong> 검사</li>
  <li>내담자가 선호하는 <strong>작업역할, 기능, 환경</strong>을 찾아내는 데 유용</li>
  <li>성격의 <strong>4가지 양극차원</strong>으로 분류</li>
</ul>
<h4 class="exam-important">성격의 4가지 양극차원</h4>
<table>
  <tr><th>차원</th><th>유형</th><th>의미</th></tr>
  <tr><td><strong>에너지 방향</strong></td><td>외향형(E) / 내향형(I)</td><td>세상에 대한 일반적인 태도</td></tr>
  <tr><td><strong>인식 기능</strong></td><td>감각형(S) / 직관형(N)</td><td>지각적 또는 정보수집적 과정</td></tr>
  <tr><td><strong>판단 기능</strong></td><td>사고형(T) / 감정형(F)</td><td>정보를 평가하는 방식</td></tr>
  <tr><td><strong>생활 양식</strong></td><td>판단형(J) / 인식형(P)</td><td>정보박탈(외부 세계에 대한 태도)</td></tr>
</table>`
          }
        ]
      },
      {
        title: '직업상담 과정',
        topics: [
          {
            title: '상담 과정의 단계',
            content: `<h4>직업상담의 5단계</h4>
<ol>
  <li><strong>관계형성 단계</strong>
    <ul>
      <li>라포(rapport) 형성</li>
      <li>상담 구조화 (상담의 목적, 과정, 비밀보장 등 안내)</li>
      <li>내담자의 기대 파악</li>
    </ul>
  </li>
  <li><strong>진단 단계</strong>
    <ul>
      <li>내담자의 문제 파악</li>
      <li>심리검사 실시 (적성, 흥미, 가치관 검사)</li>
      <li>직업경력 및 교육배경 분석</li>
    </ul>
  </li>
  <li><strong>목표설정 단계</strong>
    <ul>
      <li>상담 목표의 구체적 설정</li>
      <li>내담자와 상담자 간 합의</li>
      <li>달성 가능하고 측정 가능한 목표</li>
    </ul>
  </li>
  <li><strong>개입(실행) 단계</strong>
    <ul>
      <li>직업정보 탐색 및 제공</li>
      <li>의사결정 지원</li>
      <li>구직기술 훈련 (이력서, 면접)</li>
    </ul>
  </li>
  <li><strong>평가 및 종결 단계</strong>
    <ul>
      <li>목표 달성 여부 평가</li>
      <li>상담 성과 정리</li>
      <li>추수상담(follow-up) 계획</li>
    </ul>
  </li>
</ol>`
          },
          {
            title: '집단 직업상담',
            content: `<h4>집단상담의 특징</h4>
<ul>
  <li>여러 내담자를 동시에 상담하여 효율적</li>
  <li>구성원 간 상호작용을 통한 학습 효과</li>
  <li>사회적 지지와 보편성 경험</li>
</ul>
<h4>집단상담의 유형</h4>
<ul>
  <li><strong>구직기술 훈련 집단:</strong> 이력서 작성, 면접 기술 등</li>
  <li><strong>진로탐색 집단:</strong> 자기이해, 직업세계 탐색</li>
  <li><strong>직업적응 집단:</strong> 직장생활 적응 지원</li>
  <li><strong>실직자 지원 집단:</strong> 실직 스트레스 관리, 재취업 지원</li>
</ul>
<h4>집단상담의 발달 단계</h4>
<ol>
  <li>초기 단계: 탐색과 오리엔테이션</li>
  <li>과도기 단계: 갈등과 저항</li>
  <li>작업 단계: 응집력과 생산성</li>
  <li>종결 단계: 통합과 마무리</li>
</ol>`
          }
        ]
      },
      {
        title: '직업상담의 윤리 및 보호',
        topics: [
          {
            title: '전문적 태도',
            content: `<h4 class="exam-important">전문적 태도의 핵심</h4>
<ul>
  <li>이론적·경험적 훈련을 통한 전문성 확보</li>
  <li>내담자에게 <strong>최선</strong>의 서비스 제공</li>
  <li><strong>능력의 한계</strong>를 인식할 때는 반드시 <strong>다른 전문가에게 의뢰</strong></li>
  <li>지속적인 전문성 개발과 수련</li>
</ul>`
          },
          {
            title: '개인정보 보호',
            content: `<h4 class="exam-important">개인정보 보호 원칙</h4>
<ul>
  <li>내담자의 <strong>안전이 위험할 때</strong>에만 정보 공개 가능</li>
  <li><strong>전문적 목적</strong>으로만 정보 사용</li>
  <li><strong>연구 목적</strong> 사용 시 반드시 내담자와의 합의 필요</li>
  <li>상담 기록의 안전한 보관과 관리</li>
</ul>`
          },
          {
            title: '비밀보장의 한계',
            content: `<h4 class="exam-important">비밀보장 예외 사항</h4>
<table>
  <tr><th>상황</th><th>설명</th></tr>
  <tr><td><strong>안전 위협</strong></td><td>자신이나 타인의 생명·안전을 위협하는 경우</td></tr>
  <tr><td><strong>치명적 질병</strong></td><td>전염성 치명적 질병 보유 시 관련자 보호</td></tr>
  <tr><td><strong>학대</strong></td><td>아동·노인·장애인 학대가 의심되는 경우</td></tr>
  <tr><td><strong>법적 요구</strong></td><td>법원의 명령 또는 법적 보고 의무가 있는 경우</td></tr>
</table>`
          },
          {
            title: '사회관계',
            content: `<h4 class="exam-important">사회관계에서의 윤리</h4>
<ul>
  <li>모순 없는 활동 수행 (일관성 유지)</li>
  <li><strong>공익</strong>에 기여하는 활동</li>
  <li>자격을 <strong>타인에게 양도 금지</strong></li>
  <li>전문적 활동에서의 정직성과 성실성</li>
</ul>`
          },
          {
            title: '내담자 복지',
            content: `<h4 class="exam-important">내담자 복지 우선 원칙</h4>
<ul>
  <li><strong>내담자의 복지를 최우선</strong>으로 고려</li>
  <li>도움을 줄 수 없을 때는 상담을 <strong>종결</strong>하고 적절한 전문가에게 의뢰</li>
  <li>상담 <strong>목적에 위배</strong>되는 검사는 실시 금지</li>
  <li>내담자의 자율성과 자기결정권 존중</li>
</ul>`
          },
          {
            title: '반윤리적 행동',
            content: `<h4 class="exam-important">반윤리적 행동 유형</h4>
<table>
  <tr><th>유형</th><th>설명</th></tr>
  <tr><td><strong>비밀 누설</strong></td><td>내담자의 비밀을 부적절하게 공개</td></tr>
  <tr><td><strong>능력 초월</strong></td><td>자신의 전문 능력을 넘어서는 상담 수행</td></tr>
  <tr><td><strong>거짓 전문성</strong></td><td>자격이나 경력을 거짓으로 제시</td></tr>
  <tr><td><strong>가치 속이기</strong></td><td>내담자의 가치관을 조작하거나 속이는 행위</td></tr>
  <tr><td><strong>의존성 조장</strong></td><td>내담자가 상담자에게 의존하도록 유도</td></tr>
  <tr><td><strong>성적 행위</strong></td><td>내담자와의 성적 관계 및 행위</td></tr>
</table>`
          },
          {
            title: '윤리강령의 기능',
            content: `<h4 class="exam-important">윤리강령의 5가지 기능</h4>
<table>
  <tr><th>기능</th><th>설명</th></tr>
  <tr><td><strong>갈등해결 지침</strong></td><td>윤리적 갈등 상황에서의 판단 기준 제공</td></tr>
  <tr><td><strong>복리 증진</strong></td><td>내담자와 상담자의 복리(복지) 증진</td></tr>
  <tr><td><strong>전문직 보장</strong></td><td>상담 전문직의 사회적 지위와 신뢰 보장</td></tr>
  <tr><td><strong>도덕적 기대 존중</strong></td><td>사회의 도덕적 기대에 부응</td></tr>
  <tr><td><strong>사생활 보호</strong></td><td>내담자의 프라이버시 보호</td></tr>
</table>`
          },
          {
            title: '다중관계 및 성적관계',
            content: `<h4 class="exam-important">다중관계 및 성적관계 금지</h4>
<ul>
  <li><strong>객관성에 영향</strong>을 미치는 다중관계는 반드시 피해야 함</li>
  <li>내담자와의 <strong>사적 관계 금지</strong></li>
  <li>내담자와의 <strong>금전 거래 금지</strong></li>
  <li>내담자와의 <strong>성적 관계 절대 금지</strong></li>
  <li>상담 종결 후에도 일정 기간 관계 제한</li>
</ul>`
          },
          {
            title: '상담관계',
            content: `<h4 class="exam-important">상담관계에서의 윤리</h4>
<ul>
  <li>상담 절차를 내담자에게 충분히 <strong>설명</strong></li>
  <li><strong>주관적 판단에 의존하지 않기</strong> - 객관적 근거 기반 상담</li>
  <li>내담자의 이해 범위 내에서 기법 활용</li>
  <li>내담자의 동의를 기반으로 한 상담 진행</li>
  <li>상담 과정과 결과에 대한 정확한 정보 제공</li>
</ul>`
          },
          {
            title: '타전문직 관계',
            content: `<h4 class="exam-important">타전문직과의 윤리적 관계</h4>
<ul>
  <li><strong>합의 없이</strong> 다른 전문인의 내담자를 상담하지 않기</li>
  <li>타 전문가와의 협력 시 내담자 동의 필수</li>
  <li><strong>비전문인</strong>이 상담 관련 업무 수행 시 <strong>윤리 점검 책임</strong>을 져야 함</li>
  <li>전문가 간 상호 존중과 협력</li>
</ul>`
          }
        ]
      }
    ]
  },

  psychology: {
    name: '직업심리학',
    code: 'psychology',
    color: '#8B5CF6',
    icon: 'fa-solid fa-brain',
    description: '직업발달이론, 유형론, 심리검사 등을 학습합니다.',
    chapters: [
      {
        title: '직업발달이론',
        topics: [
          {
            title: 'Super의 진로발달이론',
            content: `<h4>Super의 생애진로발달이론</h4>
<p>Donald Super는 진로발달을 전 생애에 걸친 과정으로 보았으며, 자아개념이 핵심입니다.</p>
<h4>진로발달의 5단계</h4>
<ol>
  <li><strong>성장기 (0~14세):</strong> 자아개념 발달, 욕구와 환상이 지배적</li>
  <li><strong>탐색기 (15~24세):</strong> 학교, 여가활동, 아르바이트를 통한 자기 탐색
    <ul><li>잠정기(15~17) → 전환기(18~21) → 시행기(22~24)</li></ul>
  </li>
  <li><strong>확립기 (25~44세):</strong> 적절한 분야를 찾아 안정적 위치 확보</li>
  <li><strong>유지기 (45~64세):</strong> 획득한 지위를 유지하려는 노력</li>
  <li><strong>쇠퇴기 (65세~):</strong> 은퇴와 새로운 역할 조정</li>
</ol>
<h4>핵심 개념</h4>
<ul>
  <li><strong>진로성숙도:</strong> 개인의 진로발달 수준</li>
  <li><strong>생애역할:</strong> 자녀, 학생, 여가인, 시민, 근로자, 가정관리자</li>
  <li><strong>생애무지개(Life-Career Rainbow):</strong> 생애역할과 발달단계를 통합한 모델</li>
  <li><strong>아치 모형(Archway Model):</strong> 개인적 요인과 환경적 요인의 통합</li>
</ul>`
          },
          {
            title: 'Ginzberg의 진로선택이론',
            content: `<h4>Ginzberg의 진로발달이론</h4>
<p>Ginzberg는 직업선택을 발달적 과정으로 최초 제시했으며, 비가역적이고 타협의 과정이라고 보았습니다.</p>
<h4>진로발달의 3단계</h4>
<ol>
  <li><strong>환상기 (6~11세):</strong> 현실적 제약 없이 욕구에 따라 직업 선호</li>
  <li><strong>잠정기 (11~17세):</strong>
    <ul>
      <li>흥미 단계(11~12): 좋아하는 활동 중심 선택</li>
      <li>능력 단계(13~14): 자신의 능력 고려</li>
      <li>가치 단계(15~16): 직업적 가치관 형성</li>
      <li>전환 단계(17): 현실적 제약 인식</li>
    </ul>
  </li>
  <li><strong>현실기 (17세~성인초기):</strong>
    <ul>
      <li>탐색 단계: 다양한 경험 탐색</li>
      <li>구체화 단계: 직업 범위 좁히기</li>
      <li>특수화 단계: 특정 직업 선택</li>
    </ul>
  </li>
</ol>
<h4>수정된 이론 (1972)</h4>
<p>초기 이론을 수정하여 직업선택은 비가역적이 아니라 개방적이며, 전 생애에 걸친 과정으로 재정의했습니다.</p>`
          },
          {
            title: 'Gottfredson의 제한-타협이론',
            content: `<h4>Gottfredson의 직업포부 발달이론</h4>
<p>직업선택에서 성유형화, 사회적 지위, 자아개념의 역할을 강조합니다.</p>
<h4>직업포부 발달의 4단계</h4>
<ol>
  <li><strong>크기와 힘의 지향 (3~5세):</strong> 성인과 아동의 역할 구분</li>
  <li><strong>성역할 지향 (6~8세):</strong> 성별에 따른 직업 구분</li>
  <li><strong>사회적 가치 지향 (9~13세):</strong> 사회적 지위 인식, 직업의 서열화</li>
  <li><strong>내적 고유자아 지향 (14세~):</strong> 흥미, 능력 등 내적 특성에 기반한 직업 선택</li>
</ol>
<h4>타협(Compromise)의 원리</h4>
<p>직업선택 시 현실적 제약으로 인해 포기하는 순서:</p>
<ol>
  <li>흥미를 가장 먼저 포기</li>
  <li>사회적 지위를 그 다음으로 포기</li>
  <li>성유형을 가장 마지막에 포기 (가장 강하게 유지)</li>
</ol>`
          }
        ]
      },
      {
        title: '직업발달이론 II - 추가 주요 이론',
        topics: [
          {
            title: 'Roe의 욕구이론',
            content: `<h4>Roe의 욕구이론 (Need Theory)</h4>
<p>앤 로(Anne Roe)는 <strong>매슬로우의 욕구위계</strong>와 <strong>어린 시절 부모-자녀 관계</strong>를 직업선택에 연결한 이론입니다.</p>
<h4>부모의 양육태도 3유형</h4>
<table>
  <tr><th>양육태도</th><th>하위유형</th><th>자녀 영향</th><th>직업 선택 경향</th></tr>
  <tr><td><strong>정서적 집중</strong></td><td>과보호, 과잉요구</td><td>타인의 관심/인정 추구</td><td>대인 지향 직업 (서비스, 예술, 경영)</td></tr>
  <tr><td><strong>회피</strong></td><td>거부, 무시/방임</td><td>타인으로부터 회피 경향</td><td>비대인 지향 직업 (과학, 기술, 자연)</td></tr>
  <tr><td><strong>수용</strong></td><td>애정적 수용, 비의도적 수용</td><td>균형 잡힌 발달</td><td>다양한 직업 선택 가능</td></tr>
</table>
<h4>직업분류 체계 (8개 직업군)</h4>
<ol>
  <li>서비스 (Service)</li>
  <li>비즈니스 접촉 (Business Contact)</li>
  <li>조직/관리 (Organization)</li>
  <li>기술 (Technology)</li>
  <li>야외활동 (Outdoor)</li>
  <li>과학 (Science)</li>
  <li>일반문화 (General Culture)</li>
  <li>예술/오락 (Arts & Entertainment)</li>
</ol>
<p>★ 1~3: <strong>대인 지향</strong>(사람 중심) / 4~8: <strong>비대인 지향</strong>(사물/아이디어 중심)</p>`
          },
          {
            title: 'Tiedeman과 O\'Hara의 진로의사결정이론',
            content: `<h4>Tiedeman-O'Hara의 진로의사결정 발달이론</h4>
<p>진로발달을 <strong>의사결정의 연속적 과정</strong>으로 보며, 에릭슨의 심리사회적 발달이론에 영향을 받았습니다.</p>
<h4>의사결정의 2단계</h4>
<h4>1단계: 예상기(Anticipation Period)</h4>
<ol>
  <li><strong>탐색(Exploration):</strong> 가능한 대안들을 폭넓게 탐색</li>
  <li><strong>구체화(Crystallization):</strong> 대안들을 평가하여 범위를 좁힘</li>
  <li><strong>선택(Choice):</strong> 특정 대안을 선택</li>
  <li><strong>명료화(Clarification):</strong> 선택에 대한 확신과 세부 계획 수립</li>
</ol>
<h4>2단계: 실행기(Implementation Period)</h4>
<ol>
  <li><strong>순응(Induction):</strong> 새로운 환경에 적응, 집단 규범 수용</li>
  <li><strong>변혁/쇄신(Reformation):</strong> 자신의 주장을 집단에 반영하려는 시도</li>
  <li><strong>통합(Integration):</strong> 개인과 집단의 목표가 조화, 균형 달성</li>
</ol>
<p>★ 핵심: 자아정체감의 분화(차별화)와 통합을 반복하면서 진로가 발달합니다.</p>`
          },
          {
            title: '사회인지진로이론 (SCCT)',
            content: `<h4>사회인지진로이론 (Social Cognitive Career Theory)</h4>
<p>렌트(Lent), 브라운(Brown), 해킷(Hackett)이 <strong>반두라의 사회학습이론</strong>을 진로 영역에 적용한 이론입니다.</p>
<h4>3가지 핵심 변인</h4>
<ul>
  <li><strong>자기효능감(Self-efficacy):</strong> 특정 과제를 성공적으로 수행할 수 있다는 자신감
    <ul>
      <li>수행성취 경험 (가장 강력한 영향)</li>
      <li>대리경험 (모델 관찰)</li>
      <li>언어적 설득 (격려)</li>
      <li>정서적/생리적 상태</li>
    </ul>
  </li>
  <li><strong>결과기대(Outcome Expectations):</strong> 특정 행동을 수행하면 어떤 결과가 나타날 것이라는 기대</li>
  <li><strong>개인적 목표(Personal Goals):</strong> 특정 활동에 참여하거나 미래 결과를 달성하겠다는 결심</li>
</ul>
<h4>SCCT의 3가지 모델</h4>
<ol>
  <li><strong>흥미발달 모델:</strong> 자기효능감 + 결과기대 → 흥미 형성 → 활동선택 → 수행경험 (순환)</li>
  <li><strong>진로선택 모델:</strong> 흥미 + 자기효능감 + 결과기대 → 선택목표 → 선택행동</li>
  <li><strong>수행 모델:</strong> 능력 + 자기효능감 + 결과기대 + 목표 → 수행수준 → 성취</li>
</ol>
<p>★ 개인 요인(성별, 인종, 건강)과 환경 요인(지지, 장벽)이 자기효능감과 결과기대에 영향을 미칩니다.</p>`
          },
          {
            title: 'Savickas의 진로구성이론',
            content: `<h4>Savickas의 진로구성이론 (Career Construction Theory)</h4>
<p>마크 사비카스(Mark Savickas)가 Super의 이론을 <strong>사회구성주의</strong> 관점에서 재구성한 이론입니다.</p>
<h4>핵심 개념: 진로적응성 (Career Adaptability)</h4>
<p>변화하는 직업세계에 대처하는 심리사회적 자원으로, <strong>4C</strong>로 구성됩니다:</p>
<table>
  <tr><th>차원</th><th>질문</th><th>태도/역량</th></tr>
  <tr><td><strong>관심(Concern)</strong></td><td>"나의 미래가 있는가?"</td><td>미래지향적 태도, 계획성</td></tr>
  <tr><td><strong>통제(Control)</strong></td><td>"누가 나의 미래를 만드는가?"</td><td>자기주도성, 책임감, 결단력</td></tr>
  <tr><td><strong>호기심(Curiosity)</strong></td><td>"미래에 무엇을 하고 싶은가?"</td><td>직업세계 탐색, 개방성</td></tr>
  <tr><td><strong>자신감(Confidence)</strong></td><td>"할 수 있는가?"</td><td>자기효능감, 문제해결력</td></tr>
</table>
<h4>생애주제(Life Theme)</h4>
<p>개인이 일에 부여하는 <strong>주관적 의미</strong>로, 생애 이야기(career story)를 통해 발견됩니다.</p>
<h4>진로상담의 3단계</h4>
<ol>
  <li><strong>구성(Construction):</strong> 내담자의 진로 이야기를 듣고 생애주제 파악</li>
  <li><strong>해체(Deconstruction):</strong> 제한적 가정과 편견을 인식하고 해체</li>
  <li><strong>재구성(Reconstruction):</strong> 새로운 관점으로 진로 이야기를 재구성</li>
</ol>
<p>★ 진로상담 = 내담자가 자신의 <strong>진로 내러티브</strong>(이야기)를 구성하도록 돕는 과정</p>`
          }
        ]
      },
      {
        title: 'Holland 유형론',
        topics: [
          {
            title: 'RIASEC 6유형',
            content: `<h4>Holland의 직업적 성격유형론</h4>
<p>John Holland은 직업적 흥미를 6가지 유형(RIASEC)으로 분류했습니다.</p>
<h4>6가지 유형</h4>
<table>
  <tr><th>유형</th><th>특성</th><th>대표 직업</th></tr>
  <tr><td><strong>R (현실형)</strong></td><td>기계, 도구, 동물, 야외활동 선호</td><td>기술자, 농부, 정비사</td></tr>
  <tr><td><strong>I (탐구형)</strong></td><td>관찰, 학습, 분석, 과학적 탐구</td><td>과학자, 연구원, 의사</td></tr>
  <tr><td><strong>A (예술형)</strong></td><td>창의적 표현, 자유로운 활동</td><td>예술가, 작가, 음악가</td></tr>
  <tr><td><strong>S (사회형)</strong></td><td>타인 돕기, 교육, 봉사</td><td>교사, 상담사, 사회복지사</td></tr>
  <tr><td><strong>E (진취형)</strong></td><td>설득, 리더십, 목표 달성</td><td>경영자, 영업사원, 정치인</td></tr>
  <tr><td><strong>C (관습형)</strong></td><td>자료 정리, 규칙 준수, 체계적 작업</td><td>회계사, 사무원, 은행원</td></tr>
</table>
<h4>육각형 모형</h4>
<p>RIASEC 유형은 정육각형 꼭짓점에 배치되며, 인접한 유형은 유사하고 대각선 유형은 상반됩니다.</p>`
          },
          {
            title: '일관성, 분화, 정체성',
            content: `<h4>Holland 이론의 핵심 개념</h4>
<h4>일관성 (Consistency)</h4>
<ul>
  <li>개인의 유형 코드 간 유사성 정도</li>
  <li>인접 유형 조합(예: RI, AS) → 높은 일관성</li>
  <li>대각 유형 조합(예: RA, SI) → 낮은 일관성</li>
  <li>일관성이 높을수록 직업선택이 예측 가능</li>
</ul>
<h4>분화 (Differentiation)</h4>
<ul>
  <li>6유형 중 특정 유형이 얼마나 두드러지는지</li>
  <li>최고 점수와 최저 점수의 차이로 측정</li>
  <li>분화가 높을수록 명확한 직업적 정체성</li>
</ul>
<h4>정체성 (Identity)</h4>
<ul>
  <li>자신의 목표, 흥미, 능력에 대한 명확한 상(picture)</li>
  <li>직업적 정체성이 높을수록 안정적 직업선택</li>
</ul>
<h4>일치성 (Congruence)</h4>
<ul>
  <li>개인의 성격유형과 직업환경의 일치 정도</li>
  <li>일치성이 높을수록 직업만족, 안정성, 성취도 높음</li>
</ul>`
          }
        ]
      },
      {
        title: '직업심리검사',
        topics: [
          {
            title: '심리검사의 유형',
            content: `<h4>직업심리검사의 분류</h4>
<h4>표준화 검사</h4>
<ul>
  <li><strong>직업적성검사:</strong> 일반학습능력, 언어능력, 수리능력, 공간판단력 등 측정</li>
  <li><strong>직업흥미검사:</strong> Holland 유형에 기반한 직업흥미 측정 (스트롱 직업흥미검사 등)</li>
  <li><strong>직업가치관검사:</strong> 능력발휘, 보수, 안정성, 사회봉사 등 가치관 측정</li>
  <li><strong>성격검사:</strong> MBTI, MMPI, 16PF, Big Five 등</li>
  <li><strong>지능검사:</strong> 웩슬러(WAIS), 스탠포드-비네</li>
</ul>
<h4>비표준화 검사</h4>
<ul>
  <li>면접, 관찰, 자서전, 일화기록, 사회성측정</li>
</ul>
<h4>검사의 질적 기준</h4>
<ul>
  <li><strong>타당도:</strong> 검사가 측정하려는 것을 정확히 측정하는 정도
    <ul><li>내용타당도, 준거타당도(예언/공인), 구인타당도</li></ul>
  </li>
  <li><strong>신뢰도:</strong> 검사 결과의 일관성
    <ul><li>검사-재검사, 동형검사, 반분, 내적일관성(Cronbach α)</li></ul>
  </li>
</ul>`
          },
          {
            title: '타당도와 신뢰도 상세',
            content: `<h4>타당도 (Validity) - 검사의 정확성</h4>
<p>"이 검사가 측정하려는 것을 정확히 측정하고 있는가?"</p>
<table>
  <tr><th>타당도 유형</th><th>의미</th><th>확인 방법</th></tr>
  <tr><td><strong>내용타당도</strong></td><td>검사 내용이 측정 영역을 대표하는 정도</td><td>전문가 판단 (통계적 방법 아님)</td></tr>
  <tr><td><strong>준거타당도</strong></td><td>외부 준거와의 관련성</td><td>상관계수 산출</td></tr>
  <tr><td> - 예언(예측)타당도</td><td>미래 행동/성과 예측</td><td>검사→시간경과→준거 측정</td></tr>
  <tr><td> - 공인(동시)타당도</td><td>현재 상태의 정확한 반영</td><td>검사와 준거를 동시에 측정</td></tr>
  <tr><td><strong>구인(구성)타당도</strong></td><td>이론적 구인을 측정하는 정도</td><td>요인분석, 수렴/변별타당도</td></tr>
  <tr><td> - 수렴타당도</td><td>유사 구인 측정 검사와 높은 상관</td><td>다특성다방법(MTMM)</td></tr>
  <tr><td> - 변별(판별)타당도</td><td>다른 구인 측정 검사와 낮은 상관</td><td>다특성다방법(MTMM)</td></tr>
</table>
<h4>신뢰도 (Reliability) - 검사의 일관성</h4>
<p>"이 검사를 반복 실시하면 같은 결과가 나오는가?"</p>
<table>
  <tr><th>신뢰도 유형</th><th>방법</th><th>특징</th></tr>
  <tr><td><strong>검사-재검사 신뢰도</strong></td><td>같은 검사를 시간 간격을 두고 2회 실시</td><td>안정성 계수, 기억효과/성숙효과 주의</td></tr>
  <tr><td><strong>동형검사 신뢰도</strong></td><td>동등한 2개 검사를 같은 집단에 실시</td><td>동등성 계수, 동형 검사 제작 어려움</td></tr>
  <tr><td><strong>반분 신뢰도</strong></td><td>하나의 검사를 반으로 나누어 비교</td><td>내적일관성, 스피어만-브라운 공식으로 교정</td></tr>
  <tr><td><strong>내적일관성 (Cronbach α)</strong></td><td>문항 간 상관의 평균에 기반</td><td>가장 널리 사용, 0.7 이상이면 양호</td></tr>
  <tr><td><strong>채점자간 신뢰도</strong></td><td>다른 채점자의 평가 일치도</td><td>주관식 평가에서 중요</td></tr>
</table>
<h4>타당도와 신뢰도의 관계</h4>
<ul>
  <li>신뢰도가 높다고 타당도가 높은 것은 아님</li>
  <li>타당도가 높으면 신뢰도도 높음</li>
  <li>신뢰도는 타당도의 <strong>필요조건</strong>이지만 충분조건은 아님</li>
  <li>★ 타당도의 상한 = √신뢰도</li>
</ul>`
          },
          {
            title: '규준과 검사 해석',
            content: `<h4>규준 (Norm)</h4>
<p>개인의 검사 점수를 해석하기 위한 비교 기준으로, <strong>규준집단(표준화 집단)</strong>의 점수 분포를 기반으로 합니다.</p>
<h4>점수 유형</h4>
<table>
  <tr><th>점수 유형</th><th>설명</th><th>특징</th></tr>
  <tr><td><strong>원점수</strong></td><td>검사에서 직접 얻은 점수</td><td>그 자체로는 의미 해석 불가</td></tr>
  <tr><td><strong>백분위 점수</strong></td><td>규준집단에서 그 점수 이하인 비율 (%)</td><td>해석 용이, 등간격 아님</td></tr>
  <tr><td><strong>표준점수 (Z점수)</strong></td><td>Z = (원점수 - 평균) / 표준편차</td><td>평균=0, 표준편차=1</td></tr>
  <tr><td><strong>T점수</strong></td><td>T = 10Z + 50</td><td>평균=50, 표준편차=10</td></tr>
  <tr><td><strong>스테나인(Stanine)</strong></td><td>1~9점 척도</td><td>평균=5, 표준편차≈2</td></tr>
  <tr><td><strong>IQ점수(편차IQ)</strong></td><td>IQ = 15Z + 100</td><td>평균=100, 표준편차=15</td></tr>
</table>
<h4>측정의 표준오차 (SEM)</h4>
<div class="formula-box">
  <p><strong>SEM = SD × √(1 - r)</strong></p>
  <p>SD = 표준편차, r = 신뢰도 계수</p>
  <p>★ 신뢰도가 높을수록 SEM이 작아짐 → 점수 해석의 정확성 증가</p>
</div>
<h4>검사 해석 시 유의사항</h4>
<ul>
  <li>하나의 검사 점수만으로 판단하지 말고 <strong>종합적</strong>으로 해석</li>
  <li>점수를 범위(신뢰구간)로 해석하기: 진점수 ± 1.96×SEM (95% 신뢰구간)</li>
  <li>규준집단의 적절성 확인 (연령, 성별, 학력 등)</li>
  <li>검사 실시 조건과 내담자 상태 고려</li>
  <li>내담자에게 결과를 <strong>이해하기 쉽게</strong> 설명하고 상담에 활용</li>
</ul>`
          },
          {
            title: 'MBTI와 주요 검사',
            content: `<h4>MBTI (Myers-Briggs Type Indicator)</h4>
<p>Jung의 심리유형론에 기반한 성격유형 검사로, 4가지 선호 지표의 조합으로 16유형을 분류합니다.</p>
<h4>4가지 선호 지표</h4>
<table>
  <tr><th>지표</th><th>유형 A</th><th>유형 B</th></tr>
  <tr><td>에너지 방향</td><td>외향(E)</td><td>내향(I)</td></tr>
  <tr><td>인식 기능</td><td>감각(S)</td><td>직관(N)</td></tr>
  <tr><td>판단 기능</td><td>사고(T)</td><td>감정(F)</td></tr>
  <tr><td>생활 양식</td><td>판단(J)</td><td>인식(P)</td></tr>
</table>
<h4>기타 주요 심리검사</h4>
<ul>
  <li><strong>스트롱 직업흥미검사(SII):</strong> 일반직업주제(GOT) + 기본흥미척도(BIS) + 개인특성척도(PSS)</li>
  <li><strong>직업선호도검사:</strong> Holland의 RIASEC 모형 기반</li>
  <li><strong>커리어넷 심리검사:</strong> 한국고용정보원 제공, 워크넷 활용</li>
  <li><strong>성인용 직업적성검사:</strong> 11개 적성요인 측정</li>
</ul>`
          }
        ]
      },
      {
        title: '직업적응이론',
        topics: [
          {
            title: '직업적응이론과 직무만족',
            content: `<h4>Dawis & Lofquist의 직업적응이론 (TWA)</h4>
<p>개인과 환경의 상호작용에서 '조응(correspondence)'을 강조하는 이론입니다.</p>
<h4>핵심 개념</h4>
<ul>
  <li><strong>만족(Satisfaction):</strong> 직업환경이 개인의 욕구/가치를 충족시키는 정도</li>
  <li><strong>충족(Satisfactoriness):</strong> 개인이 직업환경의 요구를 충족시키는 정도</li>
  <li><strong>조응(Correspondence):</strong> 만족과 충족이 모두 높은 상태 → 직업적응</li>
</ul>
<h4>직무만족 이론</h4>
<ul>
  <li><strong>허즈버그(Herzberg)의 2요인 이론:</strong>
    <ul>
      <li>위생요인(불만족 요인): 급여, 작업조건, 회사정책 → 불만족 감소</li>
      <li>동기요인(만족 요인): 성취감, 인정, 책임감 → 만족 증가</li>
    </ul>
  </li>
  <li><strong>매슬로우(Maslow)의 욕구위계:</strong> 생리 → 안전 → 소속 → 존경 → 자아실현</li>
  <li><strong>브룸(Vroom)의 기대이론:</strong> 동기 = 기대 × 수단성 × 유인가</li>
</ul>`
          },
          {
            title: '직무동기이론 상세',
            content: `<h4>내용이론 (Content Theories) - 무엇이 동기를 유발하는가?</h4>
<h4>매슬로우(Maslow)의 욕구위계이론</h4>
<ol>
  <li><strong>생리적 욕구:</strong> 음식, 물, 수면 등 기본 생존 욕구</li>
  <li><strong>안전 욕구:</strong> 신체적·경제적 안전, 직업 안정</li>
  <li><strong>소속·애정 욕구:</strong> 사랑, 우정, 소속감, 대인관계</li>
  <li><strong>존경 욕구:</strong> 자존감, 타인으로부터의 인정과 존경</li>
  <li><strong>자아실현 욕구:</strong> 잠재력 실현, 성장 (결핍욕구가 아닌 성장욕구)</li>
</ol>
<p>★ 하위 욕구가 충족되어야 상위 욕구가 동기로 작용 (위계적 순서)</p>
<h4>앨더퍼(Alderfer)의 ERG 이론</h4>
<ul>
  <li><strong>E (Existence/존재):</strong> 생리적·물질적 욕구 (생리+안전)</li>
  <li><strong>R (Relatedness/관계):</strong> 대인관계 욕구 (소속+존경 일부)</li>
  <li><strong>G (Growth/성장):</strong> 개인적 성장과 발전 욕구 (존경 일부+자아실현)</li>
</ul>
<p>★ 매슬로우와 차이점: <strong>좌절-퇴행 가설</strong> (상위 욕구 좌절 시 하위 욕구가 강화), 여러 욕구 동시 작동 가능</p>
<h4>맥클렐란드(McClelland)의 성취동기이론</h4>
<ul>
  <li><strong>성취 욕구(nAch):</strong> 우수한 결과를 달성하려는 욕구, 중간 수준의 위험 선호</li>
  <li><strong>권력 욕구(nPow):</strong> 타인에게 영향력을 행사하려는 욕구</li>
  <li><strong>친화 욕구(nAff):</strong> 타인과 친밀한 관계를 맺으려는 욕구</li>
</ul>
<h4>과정이론 (Process Theories) - 어떻게 동기가 유발되는가?</h4>
<h4>애덤스(Adams)의 공정성이론</h4>
<div class="formula-box">
  <p><strong>자기의 투입 대비 산출 비율</strong>과 <strong>타인의 투입 대비 산출 비율</strong>을 비교</p>
  <p>불공정 인식 시 → 투입 변경, 산출 변경, 인지적 왜곡, 비교대상 변경, 이직 등으로 해소</p>
</div>
<h4>로크(Locke)의 목표설정이론</h4>
<ul>
  <li>구체적이고 도전적인 목표가 높은 성과를 이끔</li>
  <li>피드백이 주어질 때 목표 효과 증대</li>
  <li>목표에 대한 수용과 몰입이 중요</li>
</ul>
<h4>맥그리거(McGregor)의 XY 이론</h4>
<table>
  <tr><th>X 이론</th><th>Y 이론</th></tr>
  <tr><td>인간은 본래 게으름</td><td>인간은 본래 일을 좋아함</td></tr>
  <tr><td>통제와 감독 필요</td><td>자율성과 책임감 부여</td></tr>
  <tr><td>외적 동기 (급여, 처벌)</td><td>내적 동기 (성취, 자아실현)</td></tr>
  <tr><td>권위적 관리 스타일</td><td>참여적 관리 스타일</td></tr>
</table>`
          }
        ]
      },
      {
        title: '조직에서의 경력개발',
        topics: [
          {
            title: '다운사이징 시대의 경력개발',
            content: `<h4 class="exam-important">다운사이징(Downsizing)</h4>
<p>조직의 <strong>소형화·축소화</strong>를 의미하며, <strong>수평이동</strong>에 중점을 두는 경력개발 방향</p>
<h4 class="exam-important">다운사이징 시대의 경력개발 방향</h4>
<ol>
  <li>장기고용이 어려워지며, 고용 기간이 점차 짧아진다</li>
  <li><strong>수평이동</strong>에 중점을 둔다</li>
  <li>개인의 <strong>자율권 신장과 능력개발</strong>에 초점을 둔다</li>
  <li>경력개발은 <strong>단기·연속 학습단계</strong>로 이어진다</li>
  <li>다양한 프로젝트 참여가 요구된다</li>
  <li><strong>평생학습</strong>으로의 경력개발이 요구된다</li>
  <li>능력 및 지식에 관련된 <strong>재교육</strong>이 요구된다</li>
  <li>퇴직자 관리 프로그램의 운영이 요구된다</li>
</ol>`
          },
          {
            title: '직업전환 상담',
            content: `<h4 class="exam-important">직업전환 상담의 정의</h4>
<p>전직 의도가 있는 직업인을 대상으로 직업경로, 전문지식, 직업전환 정보를 수집·제공하는 상담</p>
<h4 class="exam-important">실업자의 직업전환과 직업상담</h4>
<ul>
  <li>생애훈련적 사고를 갖도록 조언·촉구하며 참여를 권고</li>
  <li>청년기·중년기·정년 전 등 <strong>전환기에 경력개발계획</strong>을 추진할 필요</li>
  <li>청년기 실업자는 <strong>일반적인 평가방법</strong>에 의존해도 무리 없음</li>
  <li>나이가 많을수록 취업 제의를 받는 비율이 <strong>감소</strong></li>
</ul>
<h4 class="exam-important">직업전환 상담 시 고려사항</h4>
<ol>
  <li>내담자의 <strong>변화에 대한 인지능력</strong>을 우선 탐색</li>
  <li>전환될 직업에 대한 기술·능력, 나이·건강, <strong>동기화 여부</strong> 등 일차적 고려</li>
  <li><strong>은퇴 후 진로경로 계획</strong>을 돕는 것이 병행</li>
</ol>`
          },
          {
            title: '요구분석(니즈평가)',
            content: `<h4 class="exam-important">요구분석(Needs Assessment)</h4>
<p>경력개발 프로그램 개발을 위한 조사연구 방법</p>
<ul>
  <li><strong>현 시점</strong>에서 어떤 훈련이 필요한지에 대한 요구분석</li>
  <li><strong>누구를 대상으로 어떤 프로그램</strong>을 만들 것인지 우선적으로 파악</li>
</ul>
<h4 class="exam-important">파일럿(Pilot) 연구</h4>
<p>특정 경력개발 프로그램을 <strong>대규모로 적용하기 전</strong>에 소규모 집단에 <strong>시범적으로 실시</strong>하는 과정</p>`
          },
          {
            title: '종업원 개발 프로그램',
            content: `<h4 class="exam-important">경력개발 프로그램: 종업원 평가 및 개발</h4>
<table>
  <tr><th>구분</th><th>프로그램</th></tr>
  <tr><td><strong>종업원 평가</strong></td><td>평가기관, 심리검사, 조기발탁제</td></tr>
  <tr><td><strong>종업원(능력) 개발</strong></td><td>훈련 프로그램, 후견인 프로그램, 직무순환 프로그램</td></tr>
</table>
<h4 class="exam-important">주요 경력개발 프로그램</h4>
<table>
  <tr><th>프로그램</th><th>설명</th></tr>
  <tr><td><strong>경력워크숍</strong></td><td>신입사원 대상, 부서 배치 후 <strong>6개월 이내</strong> 실시</td></tr>
  <tr><td><strong>사내공모제</strong></td><td>결원충원 등을 위해 사내에서 필요한 인재 모집</td></tr>
  <tr><td><strong>평가기관(평가센터)</strong></td><td>미국 <strong>AT&T사</strong>에서 최초 운영, 다양한 모의과제로 구성</td></tr>
  <tr><td><strong>조기발탁제</strong></td><td>잠재력 높은 종업원을 조기 발견, <strong>능력주의 승진제도</strong>의 한 유형</td></tr>
  <tr><td><strong>훈련 프로그램</strong></td><td><strong>요구분석</strong>이 우선적으로 고려</td></tr>
  <tr><td><strong>후견인(멘토십)</strong></td><td>후견인이 도와주는 프로그램 (천주교에서 유래)</td></tr>
  <tr><td><strong>직무순환</strong></td><td>다양한 경험을 통해 여러 분야의 능력 개발</td></tr>
</table>`
          },
          {
            title: '작업지도 프로그램',
            content: `<h4 class="exam-important">작업지도 프로그램의 주요 종류</h4>
<table>
  <tr><th>프로그램</th><th>설명</th><th>특징</th></tr>
  <tr><td><strong>자신에 대한 탐구</strong></td><td>작업지도·직업상담에서 가장 중요하고 기본적</td><td>진로 미결정자·우유부단한 내담자에게 <strong>가장 우선</strong></td></tr>
  <tr><td><strong>직업세계 이해</strong></td><td>일경험, 직업탐색, 자격·면허 조건 정보 제공</td><td>다양한 정보 제공</td></tr>
  <tr><td><strong>직장 스트레스 대처</strong></td><td>직업적응 프로그램</td><td><strong>퇴직 보유자</strong>에게 가장 적합, 전직 예방 목적</td></tr>
  <tr><td><strong>실업충격 완화</strong></td><td>실업의 정신적 충격 확인·완화</td><td>완화 기술 제공</td></tr>
</table>
<h4 class="exam-important">그 외 프로그램</h4>
<p>직업전환 훈련, 직업복귀 훈련, 직업적응, 조기퇴직 계획, 은퇴 후 경력계획, 생애계획, 취업알선 프로그램 등</p>`
          },
          {
            title: '실업 관련 프로그램',
            content: `<h4 class="exam-important">실업 관련 프로그램 6가지</h4>
<ol>
  <li><strong>실업충격 완화</strong> 프로그램</li>
  <li><strong>실업스트레스 대처</strong> 프로그램</li>
  <li><strong>직업전환(훈련)</strong> 프로그램</li>
  <li><strong>작업복귀(훈련)</strong> 프로그램</li>
  <li><strong>취업동기 증진</strong> 프로그램</li>
  <li><strong>구직활동 증진</strong> 프로그램</li>
</ol>`
          },
          {
            title: '작업전환 상담 시 고려사항',
            content: `<h4 class="exam-important">작업전환 상담 시 고려사항 3가지</h4>
<ol>
  <li>내담자의 <strong>변화에 대한 인지능력</strong>을 탐색</li>
  <li>전환될 직업에 대한 기술·능력, 나이·건강, <strong>동기화 여부</strong> 등을 일차적으로 고려</li>
  <li>충격완화, 직업선택·문제에 대한 정보제공, <strong>은퇴 후 진로경로 계획</strong>을 돕는 것이 병행</li>
</ol>
<h4 class="exam-important">작업전환의 촉진요인 4가지</h4>
<ol>
  <li>전체 노동인구 중 <strong>젊은 층의 비율이 높을</strong> 경우</li>
  <li>경제구조가 <strong>완전고용</strong>의 상태일 경우</li>
  <li><strong>단순직 근로자</strong>의 비율이 높을 경우</li>
  <li><strong>여성근로자</strong>의 비율이 높을 경우</li>
</ol>`
          },
          {
            title: '작업전환의 촉진요인',
            content: `<h4 class="exam-important">작업전환의 촉진요인</h4>
<p>다음 조건이 충족될 때 작업전환이 촉진됩니다:</p>
<ol>
  <li>전체 노동인구 중 <strong>젊은 층의 비율</strong>이 높을 경우</li>
  <li>경제구조가 <strong>완전고용</strong>의 상태일 경우</li>
  <li><strong>단순직 근로자</strong>의 비율이 높을 경우</li>
  <li><strong>여성근로자</strong>의 비율이 높을 경우</li>
</ol>`
          },
          {
            title: '진로교육 모형',
            content: `<h4 class="exam-important">진로교육 모형: 인식 → 탐색 → 준비 → 취업</h4>
<table>
  <tr><th>단계</th><th>연령·수준</th><th>내용</th></tr>
  <tr><td><strong>1단계: 진로인식</strong></td><td>6~12세 (초등학교)</td><td>직업세계에 대한 기초적 인식</td></tr>
  <tr><td><strong>2단계: 진로탐색</strong></td><td>12~15세 (중학교)</td><td>자신의 흥미·적성 탐색</td></tr>
  <tr><td><strong>3단계: 진로준비</strong></td><td>15~22세 (고등·대학)</td><td>구체적 직업 준비</td></tr>
  <tr><td><strong>4단계: 취업</strong></td><td>18세 또는 22세 이후</td><td>실제 취업 및 직업 활동</td></tr>
</table>`
          },
          {
            title: '경력개발 프로그램의 유형',
            content: `<h4 class="exam-important">경력개발 프로그램의 5가지 유형</h4>
<table>
  <tr><th>유형</th><th>내용</th><th>예시</th></tr>
  <tr><td><strong>자기평가도구</strong></td><td>질문지를 활용한 자기평가</td><td>경력워크숍, 경력연습책자</td></tr>
  <tr><td><strong>개인상담</strong></td><td>종업원의 흥미·목표·현 직무활동·수행·경력목표에 초점</td><td>1:1 상담</td></tr>
  <tr><td><strong>정보제공</strong></td><td>조직 내 기회에 대한 정보</td><td>사내공모제, 기술목록, 경력자원기관</td></tr>
  <tr><td><strong>종업원 평가</strong></td><td>체계적 평가</td><td>평가기관, 심리검사, 조기발탁제</td></tr>
  <tr><td><strong>종업원(능력) 개발</strong></td><td>능력 향상 지원</td><td>훈련 프로그램, 후견인 프로그램, 직무순환</td></tr>
</table>`
          }
        ]
      },
      {
        title: '직업과 스트레스',
        topics: [
          {
            title: '역할갈등',
            content: `<h4 class="exam-important">직무·조직관련 스트레스원의 종류</h4>
<p>과제특성 → 역할갈등 → 역할모호성 → 역할과다/과소 → 조직문화와 풍토</p>
<h4 class="exam-important">역할갈등의 정의</h4>
<ul>
  <li>역할담당자가 자신의 지위(역할)와 역할전달자의 기대가 <strong>상충</strong>되는 심리적 상태</li>
  <li>공식적·구조적 조직: <strong>구조적 변수</strong>(의사결정 참여, 부하의 폭)로 발생</li>
  <li>비공식적·비구조적 조직: <strong>인간관계 변수</strong>(동료와의 관계)로 발생</li>
</ul>
<h4 class="exam-important">역할갈등의 4가지 유형</h4>
<table>
  <tr><th>유형</th><th>설명</th><th>예시</th></tr>
  <tr><td><strong>개인 간 역할갈등</strong></td><td>직업 내와 직업 이외 요구 간 갈등</td><td>야근 시 가정과의 갈등</td></tr>
  <tr><td><strong>개인 내 역할갈등</strong></td><td>직무와 개인 가치관의 불일치</td><td>이중장부 작성 요구 시</td></tr>
  <tr><td><strong>송신자 간 갈등</strong></td><td>두 명 이상의 요구가 상충</td><td>사장의 감독 vs 부하의 자유 요구</td></tr>
  <tr><td><strong>송신자 내 갈등</strong></td><td>배타적이고 양립 불가한 요구</td><td>안전수칙 준수 + 빠른 완성 요구</td></tr>
</table>`
          },
          {
            title: '셀리에(Selye)의 일반적응증후군(GAS)',
            content: `<h4 class="exam-important">셀리에(Selye)의 스트레스 연구</h4>
<p>반응방식 스트레스 연구의 대표자, 주로 <strong>동물실험</strong>으로 연구</p>
<p>어떤 종류의 스트레스를 가해도 모두 <strong>동일한 반응</strong>을 보인다 하여 <strong>일반적응증후군(GAS)</strong>이라 명명</p>
<h4 class="exam-important">일반적응증후군 3단계</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 500 200" style="max-width:480px;width:100%">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="10" y="60" width="140" height="70" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="80" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">1단계</text>
  <text x="80" y="108" text-anchor="middle" font-size="12" fill="#92400e">경고반응단계</text>
  <line x1="155" y1="95" x2="180" y2="95" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="185" y="60" width="140" height="70" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="255" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">2단계</text>
  <text x="255" y="108" text-anchor="middle" font-size="12" fill="#1e40af">저항반응단계</text>
  <line x1="330" y1="95" x2="355" y2="95" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="360" y="60" width="130" height="70" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="425" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">3단계</text>
  <text x="425" y="108" text-anchor="middle" font-size="12" fill="#991b1b">소진(탈진)단계</text>
  <text x="80" y="155" text-anchor="middle" font-size="10" fill="#666">쇼크 → 역쇼크</text>
  <text x="255" y="155" text-anchor="middle" font-size="10" fill="#666">저항력·면역력 일시 증가</text>
  <text x="425" y="155" text-anchor="middle" font-size="10" fill="#666">저항력 붕괴, 질병 유발</text>
</svg>
</div>
<table>
  <tr><th>단계</th><th>특징</th></tr>
  <tr><td><strong>1단계: 경고반응</strong></td><td>신체 최초의 즉각적 반응, <strong>쇼크단계</strong>와 <strong>역쇼크단계</strong></td></tr>
  <tr><td><strong>2단계: 저항반응</strong></td><td>저항력·면역력 <strong>일시적 증가</strong>, 전반적 기능은 저하</td></tr>
  <tr><td><strong>3단계: 소진(탈진)</strong></td><td>저항력·면역력 <strong>붕괴</strong>, 심각한 질병·신체손상</td></tr>
</table>`
          },
          {
            title: 'A/B 성격유형',
            content: `<h4 class="exam-important">프리드만(Friedman) & 로젠만(Rosenman)의 A/B 성격유형</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 500 180" style="max-width:480px;width:100%">
  <rect x="20" y="20" width="210" height="140" rx="15" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="125" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#dc2626">A형 성격</text>
  <text x="125" y="75" text-anchor="middle" font-size="11" fill="#991b1b">능동적·공격적</text>
  <text x="125" y="93" text-anchor="middle" font-size="11" fill="#991b1b">경쟁·성취 지향</text>
  <text x="125" y="111" text-anchor="middle" font-size="11" fill="#991b1b">신속함·완벽함 추구</text>
  <text x="125" y="135" text-anchor="middle" font-size="10" fill="#b91c1c">⚠ 관상동맥성 심장병(CHD) 위험</text>
  <rect x="270" y="20" width="210" height="140" rx="15" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="375" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#2563eb">B형 성격</text>
  <text x="375" y="75" text-anchor="middle" font-size="11" fill="#1e40af">수동적·방어적</text>
  <text x="375" y="93" text-anchor="middle" font-size="11" fill="#1e40af">느긋함·차분함</text>
  <text x="375" y="111" text-anchor="middle" font-size="11" fill="#1e40af">여유로운 일처리</text>
  <text x="375" y="135" text-anchor="middle" font-size="10" fill="#1e3a8a">✓ 질병 걸릴 확률 적음</text>
</svg>
</div>
<h4 class="exam-important">핵심 포인트</h4>
<ul>
  <li>A형은 B형보다 <strong>성취욕구와 포부수준이 높음</strong> → 스트레스 가능성 높음</li>
  <li>스트레스 상황에서 A형은 B형보다 더 많은 <strong>부정과 투사 기제</strong>를 사용</li>
  <li>A형: <strong>관상동맥성 심장병(CHD)</strong> 걸리기 쉬움</li>
</ul>`
          },
          {
            title: '여크스-도슨(Yerkes-Dodson)의 역U자형 가설',
            content: `<h4 class="exam-important">역U자형 가설</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 400 250" style="max-width:380px;width:100%">
  <line x1="50" y1="200" x2="370" y2="200" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="200" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <text x="210" y="240" text-anchor="middle" font-size="12" fill="#333">스트레스 수준</text>
  <text x="25" y="120" text-anchor="middle" font-size="12" fill="#333" transform="rotate(-90, 25, 120)">직무수행능력</text>
  <path d="M 70 190 Q 130 180 170 100 Q 210 30 250 100 Q 290 180 350 190" fill="none" stroke="#6366f1" stroke-width="3"/>
  <circle cx="210" cy="42" r="5" fill="#6366f1"/>
  <text x="210" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">최적 수준</text>
  <text x="100" y="195" text-anchor="middle" font-size="10" fill="#999">낮음</text>
  <text x="210" y="195" text-anchor="middle" font-size="10" fill="#999">적정</text>
  <text x="320" y="195" text-anchor="middle" font-size="10" fill="#999">높음</text>
</svg>
</div>
<ul>
  <li>스트레스가 너무 <strong>높거나 낮을 때</strong> 직무수행능력이 떨어짐</li>
  <li>흥분·욕구·긴장이 어느 수준까지는 수행실적을 <strong>높이다가</strong> 이후 <strong>감소</strong></li>
  <li>스트레스를 <strong>적정 수준으로 유지</strong>하는 것이 바람직</li>
</ul>`
          },
          {
            title: '구조조정 생존자의 반응',
            content: `<h4 class="exam-important">구조조정·조직 감축에서 살아남은 구성원들의 반응</h4>
<ol>
  <li>조직 분위기 <strong>침체</strong> 및 급격한 사기 저하</li>
  <li>조직에 대한 <strong>신뢰감 상실</strong></li>
  <li>다른 직무나 <strong>낮은 수준의 직무</strong>로 이동 감수</li>
  <li>과로하며, 종종 <strong>불이익도 감수</strong></li>
  <li><strong>불안감</strong>으로 조직몰입에 어려움</li>
  <li>실패 우려있는 <strong>혁신적 업무·변화를 기피</strong></li>
  <li>불공정하게 느껴 <strong>분노·공격적 성향</strong>으로 인간관계 악화</li>
  <li>조직에서의 <strong>이탈</strong></li>
</ol>`
          },
          {
            title: '스트레스 예방 및 대처',
            content: `<h4 class="exam-important">스트레스 예방 및 대처를 위한 포괄적 노력</h4>
<ol>
  <li><strong>가치관</strong> 전환</li>
  <li>목표중심적, <strong>과정중심적 사고방식</strong>으로 전환</li>
  <li>스트레스에 <strong>정면으로 도전</strong>하는 마음가짐</li>
  <li>가슴속의 <strong>한을 털어냄</strong></li>
  <li><strong>균형 있는 생활</strong></li>
  <li>취미·오락을 통해 생활장면 전환 활동을 <strong>규칙적</strong>으로 시행</li>
  <li><strong>운동</strong>을 통해 스트레스 적절히 해소</li>
</ol>`
          },
          {
            title: '17-OHCS와 코티졸(Cortisol)',
            content: `<h4 class="exam-important">스트레스의 생리적 지표</h4>
<ul>
  <li><strong>17-OHCS</strong> (17-하이드록시코티코스테로이드): 호르몬 총칭, 스트레스의 <strong>생리적 지표</strong></li>
  <li>대표적으로 <strong>코티졸(Cortisol)</strong> 호르몬이 포함</li>
</ul>
<h4 class="exam-important">코티졸 호르몬의 특성</h4>
<ul>
  <li>'<strong>스트레스 호르몬</strong>'이자 '<strong>스트레스 통제 호르몬</strong>'</li>
  <li>장기간 스트레스 노출 시: <strong>기억력·집중력 저하</strong>, 만성피로증후군 유발</li>
</ul>`
          },
          {
            title: '일 중독증과 소진',
            content: `<h4 class="exam-important">일 중독증 vs 소진 비교</h4>
<table>
  <tr><th>구분</th><th>일 중독증(워커홀릭)</th><th>소진(번아웃)</th></tr>
  <tr><td><strong>별칭</strong></td><td>과잉적응증후군</td><td>탈진증후군</td></tr>
  <tr><td><strong>특징</strong></td><td>점심 먹으면서 서류 보고, 아무것도 하지 않으면 견딜 수 없음</td><td>열심히 일한 후 성취감보다 허탈감, 인생에 환멸</td></tr>
  <tr><td><strong>핵심</strong></td><td>일에 대한 <strong>과도한 집착</strong></td><td>정서적 <strong>고갈과 냉소</strong></td></tr>
</table>`
          },
          {
            title: '스트레스원(스트레스 원인)',
            content: `<h4 class="exam-important">스트레스원의 3가지 분류</h4>
<table>
  <tr><th>분류</th><th>요인</th></tr>
  <tr><td><strong>직무·조직관련</strong></td><td>과제특성, 역할갈등, 역할과다/과소, 조직문화와 풍토</td></tr>
  <tr><td><strong>개인관련</strong></td><td>A형 성격유형, 통제 위치(소재), 능력·경험, 요구와 가치, 인구통계적 변인</td></tr>
  <tr><td><strong>물리적 환경관련</strong></td><td>조명, 소음, 온도, 진동, 공기오염, 사무실 설계, 사회적 밀도</td></tr>
</table>`
          },
          {
            title: '스트레스 관리전략',
            content: `<h4 class="exam-important">스트레스 예방관리전략 3단계</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 500 160" style="max-width:480px;width:100%">
  <rect x="10" y="20" width="150" height="50" rx="10" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="85" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">1차적 예방</text>
  <text x="85" y="58" text-anchor="middle" font-size="10" fill="#166534">출처지향적(요인중심)</text>
  <rect x="175" y="20" width="150" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="250" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">2차적 예방</text>
  <text x="250" y="58" text-anchor="middle" font-size="10" fill="#92400e">반응지향적(반응중심)</text>
  <rect x="340" y="20" width="150" height="50" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="415" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">3차적 예방</text>
  <text x="415" y="58" text-anchor="middle" font-size="10" fill="#991b1b">증후지향적(증후중심)</text>
  <text x="85" y="100" text-anchor="middle" font-size="9" fill="#555">스트레스 요인</text>
  <text x="85" y="112" text-anchor="middle" font-size="9" fill="#555">수정·변경</text>
  <text x="250" y="100" text-anchor="middle" font-size="9" fill="#555">긴장 방제·제거</text>
  <text x="250" y="112" text-anchor="middle" font-size="9" fill="#555">또는 억제</text>
  <text x="415" y="100" text-anchor="middle" font-size="9" fill="#555">최소화·통제</text>
</svg>
</div>
<h4 class="exam-important">1차적 관리전략 (조직 수준)</h4>
<table>
  <tr><th>유형</th><th>방법</th></tr>
  <tr><td><strong>직무중심</strong></td><td>직무재설계, 참여적 관리, 경력개발, 융통적 작업계획</td></tr>
  <tr><td><strong>관계중심</strong></td><td>역할분석, 목표설정, 사회적 지지, 팀 형성</td></tr>
</table>
<h4 class="exam-important">2차적 관리전략 (개인 수준)</h4>
<table>
  <tr><th>유형</th><th>방법</th></tr>
  <tr><td><strong>요인지향적(출처)</strong></td><td>스트레스 지각관리, 작업환경·생활스타일 관리</td></tr>
  <tr><td><strong>반응지향적</strong></td><td>이완훈련, 신체적 배출, 정서적 배출</td></tr>
  <tr><td><strong>증후지향적(증상)</strong></td><td>상담·정신치료, 의학적 보호</td></tr>
</table>`
          }
        ]
      }
    ]
  },

  jobinfo: {
    name: '직업정보론',
    code: 'jobinfo',
    color: '#10B981',
    icon: 'fa-solid fa-circle-info',
    description: '직업분류체계, 직업정보 수집/제공 방법을 학습합니다.',
    chapters: [
      {
        title: '직업분류체계',
        topics: [
          {
            title: '한국표준직업분류(KSCO)',
            content: `<h4>한국표준직업분류 (KSCO)</h4>
<p>통계청이 고시하는 공식 직업분류 체계로, 국제표준직업분류(ISCO)를 기초로 한국 실정에 맞게 작성합니다.</p>
<h4>분류 기준</h4>
<ul>
  <li><strong>직무(Job):</strong> 한 사람이 수행하는 일의 묶음</li>
  <li><strong>직능수준(Skill Level):</strong> 직무 수행에 필요한 교육/훈련/경험 수준 (4단계)</li>
  <li><strong>직능유형(Skill Type):</strong> 직무 수행에 필요한 지식/도구/장비의 종류</li>
</ul>
<h4>대분류 (10개)</h4>
<ol>
  <li>관리자</li>
  <li>전문가 및 관련 종사자</li>
  <li>사무 종사자</li>
  <li>서비스 종사자</li>
  <li>판매 종사자</li>
  <li>농림어업 숙련 종사자</li>
  <li>기능원 및 관련 기능 종사자</li>
  <li>장치·기계 조작 및 조립 종사자</li>
  <li>단순노무 종사자</li>
  <li>군인 (0)</li>
</ol>
<h4>분류 단계</h4>
<p>대분류(1자리) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</p>`
          },
          {
            title: '한국고용직업분류(KECO)',
            content: `<h4>한국고용직업분류 (KECO)</h4>
<p>한국고용정보원이 개발한 직업분류로, 고용서비스 현장에서 활용됩니다.</p>
<h4>KSCO와의 차이점</h4>
<table>
  <tr><th>구분</th><th>KSCO</th><th>KECO</th></tr>
  <tr><td>관리기관</td><td>통계청</td><td>고용노동부(고용정보원)</td></tr>
  <tr><td>목적</td><td>통계 조사</td><td>고용서비스, 직업상담</td></tr>
  <tr><td>분류 기준</td><td>직무 유사성</td><td>직업활동의 현실적 유사성</td></tr>
  <tr><td>직능수준</td><td>별도 구분</td><td>동일 직업 내 통합</td></tr>
</table>
<h4>KECO 대분류 (10개)</h4>
<ol>
  <li>관리직</li>
  <li>경영·사무·금융·보험직</li>
  <li>연구직 및 공학기술직</li>
  <li>교육·법률·사회복지·경찰·소방직 및 군인</li>
  <li>보건·의료직</li>
  <li>예술·디자인·방송·스포츠직</li>
  <li>미용·여행·숙박·음식·경비·청소직</li>
  <li>영업·판매·운전·운송직</li>
  <li>건설·채굴직</li>
  <li>설치·정비·생산직</li>
</ol>`
          }
        ]
      },
      {
        title: '직업정보 수집',
        topics: [
          {
            title: '워크넷과 직업정보시스템',
            content: `<h4>워크넷 (Work-Net)</h4>
<p>고용노동부와 한국고용정보원이 운영하는 대표적 고용정보 포털사이트입니다.</p>
<h4>워크넷의 주요 서비스</h4>
<ul>
  <li><strong>구인구직 매칭:</strong> 기업의 구인정보와 구직자의 이력서 매칭</li>
  <li><strong>직업심리검사:</strong> 적성, 흥미, 가치관 등 온라인 검사</li>
  <li><strong>직업정보:</strong> 한국직업사전, 직업전망, 직업동영상</li>
  <li><strong>훈련정보:</strong> 직업훈련 과정 검색</li>
  <li><strong>고용지원정책:</strong> 정부 고용지원 사업 안내</li>
</ul>
<h4>한국직업사전</h4>
<ul>
  <li>직무개요, 수행직무, 정규교육, 숙련기간</li>
  <li>직업분류코드, 자격/면허, 조사연도</li>
  <li>부가직업정보: 작업강도, 작업장소, 육체활동 등</li>
</ul>
<h4>기타 직업정보 시스템</h4>
<ul>
  <li><strong>커리어넷:</strong> 한국직업능력연구원 운영 (청소년 진로 중심)</li>
  <li><strong>HRD-Net:</strong> 직업훈련 정보 시스템</li>
  <li><strong>Q-Net:</strong> 한국산업인력공단 자격정보</li>
</ul>`
          },
          {
            title: '직업정보 수집 방법',
            content: `<h4>직업정보 수집 방법</h4>
<h4>1차 자료 수집</h4>
<ul>
  <li><strong>직업조사:</strong> 직접 현장 방문, 관찰, 면접</li>
  <li><strong>직무분석:</strong> 직무의 내용, 요건, 조건을 체계적으로 분석</li>
  <li><strong>설문조사:</strong> 근로자, 기업 대상 설문</li>
</ul>
<h4>2차 자료 수집</h4>
<ul>
  <li>한국직업사전, 직업전망서</li>
  <li>통계자료 (경제활동인구조사, 사업체노동력조사)</li>
  <li>학술논문, 보고서, 인터넷 자료</li>
</ul>
<h4>직무분석의 방법</h4>
<ul>
  <li><strong>최초분석법:</strong> 직무에 대한 기존 정보 없이 처음 분석</li>
  <li><strong>비교확인법(DACUM):</strong> 현직자 패널을 활용한 교육과정 개발법</li>
  <li><strong>면접법:</strong> 재직자와의 면담을 통한 정보 수집</li>
  <li><strong>관찰법:</strong> 작업자의 활동을 직접 관찰</li>
  <li><strong>체험법:</strong> 분석가가 직접 작업을 수행</li>
  <li><strong>설문지법:</strong> 구조화된 설문지를 통한 정보 수집</li>
</ul>`
          }
        ]
      },
      {
        title: '직무분석의 이해',
        topics: [
          {
            title: '직무분석의 개념과 절차',
            content: `<h4>직무분석 (Job Analysis)의 정의</h4>
<p>특정 직무의 <strong>내용, 요건, 조건, 책임</strong> 등을 체계적으로 조사·분석하여 직무에 관한 정보를 수집·정리하는 과정입니다.</p>
<h4>직무 관련 용어</h4>
<ul>
  <li><strong>요소(Element):</strong> 더 이상 분할할 수 없는 최소 작업 단위</li>
  <li><strong>과업(Task):</strong> 요소들의 묶음, 독립적으로 의미 있는 작업 단위</li>
  <li><strong>직위(Position):</strong> 한 사람에게 부여된 과업의 묶음</li>
  <li><strong>직무(Job):</strong> 유사한 직위의 집합</li>
  <li><strong>직업(Occupation):</strong> 유사한 직무의 집합, 사회적으로 인정된 활동</li>
  <li><strong>직군(Job Family):</strong> 유사한 직업의 집합</li>
</ul>
<h4>직무분석의 절차</h4>
<ol>
  <li><strong>준비 단계:</strong> 목적 설정, 대상 직무 선정, 분석방법 결정</li>
  <li><strong>정보수집 단계:</strong> 면접, 관찰, 설문, 작업일지 등으로 자료 수집</li>
  <li><strong>분석 단계:</strong> 수집된 정보의 정리·분석</li>
  <li><strong>결과물 작성:</strong> 직무기술서(Job Description)와 직무명세서(Job Specification) 작성</li>
</ol>
<h4>직무분석의 결과물</h4>
<table>
  <tr><th>구분</th><th>직무기술서 (Job Description)</th><th>직무명세서 (Job Specification)</th></tr>
  <tr><td>초점</td><td><strong>직무</strong> 자체에 대한 정보</td><td><strong>직무수행자</strong>에 대한 요건</td></tr>
  <tr><td>내용</td><td>직무명, 수행업무, 책임, 작업조건</td><td>학력, 경력, 자격, 능력, 신체조건</td></tr>
  <tr><td>용도</td><td>직무 설계, 업무 배분</td><td>채용, 선발, 배치</td></tr>
</table>`
          },
          {
            title: '직무분석 기법 상세',
            content: `<h4>주요 직무분석 기법</h4>
<h4>1. 최초분석법 (시간연구법)</h4>
<ul>
  <li>직무에 대한 기존 정보 없이 <strong>처음부터</strong> 분석</li>
  <li>새로운 직무 또는 기존 정보가 없는 경우에 사용</li>
</ul>
<h4>2. DACUM (Developing A CurriculUM)</h4>
<ul>
  <li><strong>현직 종사자 패널</strong>(5~12명)을 활용한 직무분석 및 교육과정 개발 기법</li>
  <li>직무(Duty) → 과업(Task)을 DACUM 차트로 도식화</li>
  <li>장점: 비용 효율적, 단기간 가능 (2~3일), 현장 중심</li>
  <li>단점: 패널의 대표성 문제, 미래 변화 예측 어려움</li>
</ul>
<h4>3. 기능적 직무분석법 (FJA, Functional Job Analysis)</h4>
<p>미국 노동부가 개발한 방법으로, 직무를 <strong>자료(Data)-사람(People)-사물(Things)</strong>의 3가지 기능 영역으로 분류합니다.</p>
<table>
  <tr><th>자료(Data)</th><th>사람(People)</th><th>사물(Things)</th></tr>
  <tr><td>종합(0) ~ 비교(6)</td><td>자문(0) ~ 지시수행(8)</td><td>설치(0) ~ 단순작업(7)</td></tr>
  <tr><td>숫자가 낮을수록 복잡</td><td>숫자가 낮을수록 복잡</td><td>숫자가 낮을수록 복잡</td></tr>
</table>
<h4>4. 직위분석 설문지 (PAQ, Position Analysis Questionnaire)</h4>
<ul>
  <li>맥코믹(McCormick) 개발, <strong>194개 직무요소</strong>를 6개 영역으로 분류</li>
  <li>정보입력 → 정신과정 → 작업출력 → 대인관계 → 직무맥락 → 기타특성</li>
  <li>장점: 표준화되어 직무 간 비교 용이, 양적 분석 가능</li>
</ul>
<h4>5. 중요사건 기법 (CIT, Critical Incident Technique)</h4>
<ul>
  <li>플래너건(Flanagan) 개발, 직무수행 중 <strong>성공/실패에 결정적인 사건</strong>을 수집·분석</li>
  <li>효과적/비효과적 행동을 구체적 사례로 파악</li>
  <li>평가도구 개발, 교육훈련 설계에 활용</li>
</ul>
<h4>6. 워크샘플링 (Work Sampling)</h4>
<ul>
  <li>무작위 시점에서 작업자의 활동을 관찰·기록</li>
  <li>각 활동에 소요되는 시간 비율을 통계적으로 추정</li>
</ul>`
          }
        ]
      },
      {
        title: '직업정보 제공',
        topics: [
          {
            title: '직업정보 제공 방법',
            content: `<h4>직업정보 제공 방법</h4>
<ul>
  <li><strong>직업카드:</strong> 카드 형태의 직업정보로, 분류/정렬 활동에 활용</li>
  <li><strong>직업동영상:</strong> 실제 직업현장을 영상으로 제공</li>
  <li><strong>직업체험 프로그램:</strong> 직접 체험을 통한 직업이해</li>
  <li><strong>직업박람회:</strong> 다양한 직업정보를 한곳에서 제공</li>
  <li><strong>멘토링:</strong> 현직자와의 만남을 통한 정보 제공</li>
</ul>
<h4>직업전망</h4>
<ul>
  <li>한국직업전망서: 한국고용정보원 발간 (격년)</li>
  <li>고용동향: 통계청 경제활동인구조사 기반</li>
  <li>신직업: 기술변화, 사회변화에 따른 새로운 직업</li>
</ul>
<h4>직업정보의 질적 기준</h4>
<ul>
  <li>정확성: 사실에 기반한 정보</li>
  <li>최신성: 최신 동향 반영</li>
  <li>충분성: 의사결정에 필요한 충분한 정보</li>
  <li>접근성: 이해하기 쉽고 활용하기 편리</li>
</ul>`
          }
        ]
      },
      {
        title: '산업분류',
        topics: [
          {
            title: '한국표준산업분류(KSIC)',
            content: `<h4>한국표준산업분류 (KSIC)</h4>
<p>통계청이 고시하는 산업 분류 체계로, 국제표준산업분류(ISIC)를 기반으로 합니다.</p>
<h4>분류 기준</h4>
<ul>
  <li><strong>산출물(생산된 재화나 서비스)의 특성</strong></li>
  <li>투입물의 특성</li>
  <li>생산 활동의 일반적인 과정</li>
</ul>
<h4>대분류 (21개)</h4>
<ul>
  <li>A. 농업, 임업 및 어업</li>
  <li>B. 광업</li>
  <li>C. 제조업</li>
  <li>D. 전기, 가스, 증기 및 공기조절 공급업</li>
  <li>E. 수도, 하수 및 폐기물 처리, 원료 재생업</li>
  <li>F. 건설업</li>
  <li>G. 도매 및 소매업</li>
  <li>H. 운수 및 창고업</li>
  <li>I. 숙박 및 음식점업</li>
  <li>J. 정보통신업</li>
  <li>K. 금융 및 보험업</li>
  <li>... (총 21개 대분류)</li>
</ul>
<h4>분류 단계</h4>
<p>대분류(알파벳) → 중분류(2자리) → 소분류(3자리) → 세분류(4자리) → 세세분류(5자리)</p>`
          }
        ]
      }
    ,
      {
    title: '시험 핵심키워드 - 직업정보의 제공',
    topics: [
      {
        title: '작업강도 5단계',
        content: `<div class="exam-important">
<h4>작업강도 5단계 - 한국직업사전 부가정보</h4>
<p>한국직업사전에서 각 직업의 <strong>신체적 작업강도</strong>를 5단계로 분류합니다. ★ <strong>심리적·정신적·노동강도는 고려하지 않습니다.</strong></p>
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:10px auto;display:block;">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a7f3d0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="10" y="80" width="680" height="18" rx="9" fill="url(#g1)" opacity="0.3"/>
  <circle cx="80" cy="60" r="28" fill="#a7f3d0" stroke="#065f46" stroke-width="2"/>
  <text x="80" y="65" text-anchor="middle" font-size="11" font-weight="bold">4kg</text>
  <text x="80" y="130" text-anchor="middle" font-size="10">아주 가벼운</text>
  <circle cx="220" cy="60" r="28" fill="#6ee7b7" stroke="#065f46" stroke-width="2"/>
  <text x="220" y="58" text-anchor="middle" font-size="10" font-weight="bold">8kg</text>
  <text x="220" y="70" text-anchor="middle" font-size="9">(4kg빈번)</text>
  <text x="220" y="130" text-anchor="middle" font-size="10">가벼운</text>
  <circle cx="360" cy="60" r="28" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
  <text x="360" y="58" text-anchor="middle" font-size="10" font-weight="bold">20kg</text>
  <text x="360" y="70" text-anchor="middle" font-size="9">(10kg빈번)</text>
  <text x="360" y="130" text-anchor="middle" font-size="10">보통</text>
  <circle cx="500" cy="60" r="28" fill="#f87171" stroke="#991b1b" stroke-width="2"/>
  <text x="500" y="58" text-anchor="middle" font-size="10" font-weight="bold">40kg</text>
  <text x="500" y="70" text-anchor="middle" font-size="9">(20kg빈번)</text>
  <text x="500" y="130" text-anchor="middle" font-size="10">힘든</text>
  <circle cx="630" cy="60" r="28" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
  <text x="630" y="58" text-anchor="middle" font-size="9" font-weight="bold" fill="white">40kg+</text>
  <text x="630" y="70" text-anchor="middle" font-size="8" fill="white">(20kg+빈번)</text>
  <text x="630" y="130" text-anchor="middle" font-size="10">아주 힘든</text>
  <text x="350" y="170" text-anchor="middle" font-size="11" fill="#666">← 낮은 강도 ─────────── 높은 강도 →</text>
  <text x="350" y="200" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">※ 심리적·정신적 노동강도는 고려하지 않음!</text>
</svg>
<table>
  <tr><th>단계</th><th>들어올리기(최대)</th><th>빈번하게 다루는 무게</th></tr>
  <tr><td><strong>아주 가벼운</strong></td><td>4kg 이하</td><td>-</td></tr>
  <tr><td><strong>가벼운</strong></td><td>8kg 이하</td><td>4kg 이하 빈번</td></tr>
  <tr><td><strong>보통</strong></td><td>20kg 이하</td><td>10kg 이하 빈번</td></tr>
  <tr><td><strong>힘든</strong></td><td>40kg 이하</td><td>20kg 이하 빈번</td></tr>
  <tr><td><strong>아주 힘든</strong></td><td>40kg 이상</td><td>20kg 이상 빈번</td></tr>
</table>
<p>★ <strong>암기법:</strong> "4-8-20-40-40+" / 빈번 무게는 항상 최대의 절반!</p>
<p>※ <strong>출제 함정:</strong> "정신적 노동강도를 포함한다" → <strong>틀림!</strong> 신체적 강도만 해당됩니다.</p>
</div>`
      },
      {
        title: '공공직업정보의 특징',
        content: `<div class="exam-important">
<h4>공공직업정보의 특징</h4>
<p><strong>비영리기관</strong>이 <strong>공익적 목적</strong>으로 생산·제공하는 직업정보입니다.</p>
<table>
  <tr><th>특징</th><th>상세 설명</th></tr>
  <tr><td><strong>공익적 목적</strong></td><td>비영리기관에서 공익을 위해 생산·제공</td></tr>
  <tr><td><strong>지속적 조사·분석</strong></td><td>전체 산업을 대상으로 지속적으로 조사·분석</td></tr>
  <tr><td><strong>객관적 기준</strong></td><td>국내외 객관적 기준 적용 (국제표준직업분류, 한국표준직업분류 등)</td></tr>
  <tr><td><strong>보편적 항목</strong></td><td>보편적 항목으로 구성되어 비교·활용 용이</td></tr>
  <tr><td><strong>무료 제공</strong></td><td>누구나 무료로 이용 가능</td></tr>
</table>
<p>★ <strong>암기법:</strong> "비공지객보무" (비영리, 공익, 지속적, 객관적, 보편적, 무료)</p>
<p>※ <strong>출제 함정:</strong> 민간직업정보와 비교하여 특징을 뒤바꿔 출제하는 경우가 많습니다. 공공=무료/지속적/객관적 vs 민간=유료/한시적/임의적</p>
</div>`
      },
      {
        title: '직무기능 DPT',
        content: `<div class="exam-important">
<h4>직무기능 DPT - 한국직업사전 부가정보</h4>
<p>직무수행 시 <strong>자료(Data)·사람(People)·사물(Thing)</strong>과의 관계를 수준별로 분류합니다. ★ <strong>수준 숫자가 0에 가까울수록 높은 수준</strong>입니다.</p>
<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="210" height="300" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="115" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">D (자료/Data)</text>
  <text x="115" y="65" text-anchor="middle" font-size="10" fill="#1e40af">0=종합 ← 높은 수준</text>
  <text x="25" y="90" font-size="11">0. 종합</text>
  <text x="25" y="110" font-size="11" font-weight="bold" fill="#b91c1c">1. 조정 (분석 기초)</text>
  <text x="25" y="130" font-size="11" font-weight="bold" fill="#b91c1c">2. 분석 (조사·평가)</text>
  <text x="25" y="150" font-size="11">3. 수집·정리</text>
  <text x="25" y="170" font-size="11" font-weight="bold" fill="#b91c1c">4. 계산 (수세는것 불포함)</text>
  <text x="25" y="190" font-size="11">5. 기록·기입</text>
  <text x="25" y="210" font-size="11">6. 비교</text>
  <text x="115" y="240" text-anchor="middle" font-size="10" fill="#1e40af">6=비교 ← 낮은 수준</text>
  <rect x="245" y="10" width="210" height="300" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="350" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">P (사람/People)</text>
  <text x="350" y="65" text-anchor="middle" font-size="10" fill="#92400e">0=자문 ← 높은 수준</text>
  <text x="260" y="90" font-size="11" font-weight="bold" fill="#b91c1c">0. 자문 (전인격적 문제 조언)</text>
  <text x="260" y="110" font-size="11" font-weight="bold" fill="#b91c1c">1. 협의 (정보·의견 교환)</text>
  <text x="260" y="130" font-size="11">2. 교육</text>
  <text x="260" y="150" font-size="11">3. 감독</text>
  <text x="260" y="170" font-size="11">4. 오락제공</text>
  <text x="260" y="190" font-size="11">5. 설득</text>
  <text x="260" y="210" font-size="11">6. 말하기·신호</text>
  <text x="260" y="230" font-size="11">7. 서비스제공</text>
  <text x="260" y="250" font-size="11">8. 관련없음</text>
  <rect x="480" y="10" width="210" height="300" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="585" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">T (사물/Thing)</text>
  <text x="585" y="65" text-anchor="middle" font-size="10" fill="#065f46">0=설치 ← 높은 수준</text>
  <text x="495" y="90" font-size="11">0. 설치</text>
  <text x="495" y="110" font-size="11">1. 정밀작업</text>
  <text x="495" y="130" font-size="11" font-weight="bold" fill="#b91c1c">2. 조작운전 (기계 시동·정지·제어)</text>
  <text x="495" y="150" font-size="11">3. 운전·조작</text>
  <text x="495" y="170" font-size="11" font-weight="bold" fill="#b91c1c">4. 수동조작 (판단력 필요)</text>
  <text x="495" y="190" font-size="11">5. 유지</text>
  <text x="495" y="210" font-size="11">6. 투입·인출</text>
  <text x="495" y="230" font-size="11" font-weight="bold" fill="#b91c1c">7. 단순작업 (수공구)</text>
  <text x="495" y="250" font-size="11">8. 관련없음</text>
</svg>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>자료-조정(1):</strong> 분석을 기초로 한 조정 활동</li>
  <li><strong>자료-분석(2):</strong> 조사·평가 활동</li>
  <li><strong>자료-계산(4):</strong> 수를 세는 것은 포함하지 않음!</li>
  <li><strong>사람-자문(0):</strong> 전인격적 문제에 대한 조언 (가장 높은 수준)</li>
  <li><strong>사람-협의(1):</strong> 정보·의견을 교환하는 활동</li>
  <li><strong>사물-조작운전(2):</strong> 기계의 시동·정지·제어</li>
  <li><strong>사물-수동조작(4):</strong> 판단력이 필요한 수동 조작</li>
  <li><strong>사물-단순작업(7):</strong> 수공구를 사용하는 단순 작업</li>
</ul>
<p>※ <strong>출제 함정:</strong> "숫자가 클수록 높은 수준이다" → <strong>틀림!</strong> 0에 가까울수록 높은 수준입니다.</p>
</div>`
      },
      {
        title: '민간직업정보의 특징',
        content: `<div class="exam-important">
<h4>민간직업정보의 특징</h4>
<p>민간 영리기관이 <strong>특정 목적</strong>을 위해 생산·제공하는 직업정보입니다.</p>
<table>
  <tr><th>구분</th><th>공공직업정보</th><th>민간직업정보</th></tr>
  <tr><td><strong>비용</strong></td><td>무료 제공</td><td><strong>유료 제공</strong></td></tr>
  <tr><td><strong>생산기간</strong></td><td>지속적 조사·분석</td><td><strong>한시적·신속 생산, 단기간 집중 제공</strong></td></tr>
  <tr><td><strong>대상범위</strong></td><td>전체 산업 대상</td><td><strong>특정 목적·분야에 제한적 선택</strong></td></tr>
  <tr><td><strong>기준</strong></td><td>객관적 국제기준</td><td><strong>임의적 기준</strong></td></tr>
  <tr><td><strong>활용성</strong></td><td>비교·활용 용이</td><td><strong>다른 정보와 비교 적고 활용성 낮음</strong></td></tr>
  <tr><td><strong>파급효과</strong></td><td>높음</td><td><strong>부가적 파급효과 적음</strong></td></tr>
</table>
<p>★ <strong>암기법:</strong> 민간직업정보 = "유한특임부비" (유료, 한시적, 특정분야, 임의적 기준, 부가파급효과 적음, 비교 어려움)</p>
<p>※ <strong>출제 함정:</strong> 공공과 민간의 특징을 서로 뒤바꿔 출제하는 것이 빈출 패턴입니다. 반드시 비교표로 정리하세요!</p>
</div>`
      },
      {
        title: '정규교육과 숙련기간',
        content: `<div class="exam-important">
<h4>정규교육과 숙련기간 - 한국직업사전 부가정보</h4>
<h4>정규교육</h4>
<ul>
  <li><strong>6단계</strong>로 구분 (초등학교~대학원 이상)</li>
  <li>해당 직업 종사에 필요한 <strong>일반적인 정규교육 수준</strong>을 의미</li>
  <li>★ <strong>평균학력이 아님!</strong> 일반적으로 필요한 정규교육 수준</li>
  <li>★ <strong>독학·검정고시</strong>를 통한 학력도 포함</li>
</ul>
<h4>숙련기간</h4>
<ul>
  <li>해당 직업의 직무를 평균적으로 수행하기 위해 필요한 기간</li>
  <li><strong>포함:</strong> 취업 전 교육훈련 + 사내교육 + 현장훈련(OJT)</li>
  <li>★ <strong>미포함:</strong> <strong>향상훈련</strong>은 포함하지 않음!</li>
</ul>
<table>
  <tr><th>구분</th><th>정규교육</th><th>숙련기간</th></tr>
  <tr><td><strong>기준</strong></td><td>일반적 정규교육 수준</td><td>직무 평균 수행 필요 기간</td></tr>
  <tr><td><strong>단계</strong></td><td>6단계</td><td>-</td></tr>
  <tr><td><strong>특이사항</strong></td><td>평균학력 아님, 독학/검정고시 포함</td><td>향상훈련 미포함</td></tr>
</table>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"정규교육은 평균학력을 의미한다" → <strong>틀림!</strong></li>
  <li>"숙련기간에 향상훈련이 포함된다" → <strong>틀림!</strong></li>
  <li>"독학은 정규교육에 포함되지 않는다" → <strong>틀림!</strong> 독학·검정고시도 포함됩니다.</li>
</ul>
</div>`
      },
      {
        title: '한국직업전망 직업정보 내용',
        content: `<div class="exam-important">
<h4>한국직업전망 직업정보 내용</h4>
<h4>대표직업명</h4>
<ul>
  <li><strong>KECO 세분류(4자리)</strong>를 기준으로 선정</li>
  <li>★ KSCO가 아닌 <strong>KECO</strong> 기준임에 주의!</li>
</ul>
<h4>일자리 전망</h4>
<p><strong>향후 10년간</strong>의 일자리 변화를 5단계로 제시합니다.</p>
<table>
  <tr><th>단계</th><th>기준</th></tr>
  <tr><td><strong>감소</strong></td><td>-2% 미만</td></tr>
  <tr><td><strong>다소 감소</strong></td><td>-2% ~ 0% 미만</td></tr>
  <tr><td><strong>현 상태 유지</strong></td><td>0% ~ 1% 미만</td></tr>
  <tr><td><strong>다소 증가</strong></td><td>1% ~ 2% 이하</td></tr>
  <tr><td><strong>증가</strong></td><td>2% 초과</td></tr>
</table>
<h4>고용변동 요인</h4>
<table>
  <tr><th>구분</th><th>요인</th><th>예시</th></tr>
  <tr><td><strong>확실성 요인</strong></td><td>예측 가능한 변화</td><td>인구구조 변화, 노동인구 변화, 과학기술 발전, 가치관 변화</td></tr>
  <tr><td><strong>불확실성 요인</strong></td><td>예측 어려운 변화</td><td>법·제도 변화, 정부 정책 변화</td></tr>
</table>
<p>★ <strong>암기법 (확실성 요인):</strong> "인노과가" (인구구조, 노동인구, 과학기술, 가치관)</p>
<p>★ <strong>암기법 (불확실성 요인):</strong> "법정" (법제도, 정부정책)</p>
<p>※ <strong>출제 함정:</strong> "정부정책은 확실성 요인이다" → <strong>틀림!</strong> 정부정책과 법제도는 <strong>불확실성 요인</strong>입니다.</p>
</div>`
      },
      {
        title: '직업정보의 유형별 장단점',
        content: `<div class="exam-important">
<h4>직업정보의 유형별 장단점</h4>
<h4>수집 방법에 따른 분류</h4>
<table>
  <tr><th>구분</th><th>직접 수집 (1차 자료)</th><th>기존 자료 활용 (2차 자료)</th></tr>
  <tr><td><strong>장점</strong></td><td>목적에 맞는 정확한 정보 획득, 최신 정보</td><td>시간·비용 절약, 대량 데이터 활용</td></tr>
  <tr><td><strong>단점</strong></td><td>시간·비용 많이 소요</td><td>목적 불일치 가능, 최신성 부족</td></tr>
</table>
<h4>전달 방식에 따른 분류</h4>
<table>
  <tr><th>유형</th><th>특징</th><th>장점</th><th>단점</th></tr>
  <tr><td><strong>인쇄물</strong></td><td>책자, 브로셔, 팸플릿 등</td><td>보관·배포 용이, 반복 열람 가능</td><td>최신 정보 반영 어려움, 상호작용 불가</td></tr>
  <tr><td><strong>시청각자료</strong></td><td>동영상, 오디오 등</td><td>생동감 있는 정보 전달, 이해 용이</td><td>제작 비용 높음, 개별 요구 충족 어려움</td></tr>
  <tr><td><strong>전문가 면접(면담)</strong></td><td>현직자·전문가 인터뷰</td><td>생생한 현장 정보, 질의응답 가능</td><td>주관적 편향 가능, 시간 소요</td></tr>
  <tr><td><strong>관찰</strong></td><td>직업 현장 직접 방문 관찰</td><td>실제 업무 환경 파악</td><td>접근 제한, 표면적 정보만 수집</td></tr>
  <tr><td><strong>직접 경험·체험</strong></td><td>인턴십, 실습, 직업체험</td><td>가장 실질적인 정보 획득</td><td>시간·비용 많이 소요, 기회 제한</td></tr>
</table>
<p>★ <strong>핵심:</strong> 직접 경험이 가장 실질적이지만 비용과 시간이 많이 드는 방법입니다.</p>
<p>※ <strong>출제 포인트:</strong> 각 유형의 장단점을 정확히 구분하여 출제됩니다.</p>
</div>`
      },
      {
        title: '한국직업정보시스템 학과 검색',
        content: `<div class="exam-important">
<h4>한국직업정보시스템 학과 검색</h4>
<h4>7개 계열</h4>
<table>
  <tr><th>번호</th><th>계열</th></tr>
  <tr><td>1</td><td><strong>인문</strong> 계열</td></tr>
  <tr><td>2</td><td><strong>사회</strong> 계열</td></tr>
  <tr><td>3</td><td><strong>교육</strong> 계열</td></tr>
  <tr><td>4</td><td><strong>자연</strong> 계열</td></tr>
  <tr><td>5</td><td><strong>공학</strong> 계열</td></tr>
  <tr><td>6</td><td><strong>의약</strong> 계열</td></tr>
  <tr><td>7</td><td><strong>예체능</strong> 계열</td></tr>
</table>
<p>★ <strong>암기법:</strong> "인사교자공의예" (인문, 사회, 교육, 자연, 공학, 의약, 예체능) = 7개 계열</p>
<h4>학과검색 제공 내용</h4>
<ul>
  <li><strong>학과소개:</strong> 학과 개요 및 관련 <strong>자격·면허</strong> 정보</li>
  <li><strong>개설대학:</strong> 해당 학과가 개설된 대학 목록</li>
  <li><strong>모집현황:</strong> 모집인원, 경쟁률 등</li>
  <li><strong>진출 가능 직업:</strong> 졸업 후 진출할 수 있는 직업 목록</li>
</ul>
<p>※ <strong>출제 함정:</strong> "8개 계열" 또는 존재하지 않는 계열을 포함시키는 문제에 주의하세요.</p>
</div>`
      },
      {
        title: '한국직업전망 수록직업 선정기준',
        content: `<div class="exam-important">
<h4>한국직업전망 수록직업 선정기준</h4>
<ul>
  <li><strong>KECO 세분류(4자리)</strong>를 기초로 선정</li>
  <li>★ 종사자 <strong>3만 명 이상</strong>인 직업을 원칙으로 수록</li>
  <li><strong>워크넷</strong> 직업·진로 정보단위 사용</li>
  <li>★ <strong>관리직은 제외</strong> (승진을 통해 진입하는 직업이므로)</li>
  <li>실효성이 낮은 직업은 <strong>소분류(3자리)로 통합</strong>하여 수록</li>
</ul>
<table>
  <tr><th>항목</th><th>내용</th></tr>
  <tr><td><strong>분류 기준</strong></td><td>KECO 세분류 (4자리, 4-digit)</td></tr>
  <tr><td><strong>종사자 수</strong></td><td>3만 명 이상 원칙</td></tr>
  <tr><td><strong>정보단위</strong></td><td>워크넷 직업·진로 정보단위</td></tr>
  <tr><td><strong>제외 대상</strong></td><td>관리직 (승진 진입)</td></tr>
  <tr><td><strong>통합 처리</strong></td><td>실효성 낮은 직업 → 소분류(3자리)로 통합</td></tr>
</table>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"KSCO 세분류를 기준으로 한다" → <strong>틀림!</strong> KECO 세분류 기준입니다.</li>
  <li>"종사자 1만 명 이상이 기준이다" → <strong>틀림!</strong> 3만 명 이상입니다.</li>
  <li>"관리직도 포함된다" → <strong>틀림!</strong> 관리직은 승진 진입이므로 제외됩니다.</li>
</ul>
</div>`
      },
      {
        title: '조건별 검색 - 한국직업정보',
        content: `<div class="exam-important">
<h4>조건별 검색 - 한국직업정보</h4>
<h4>직업전망 검색</h4>
<table>
  <tr><th>전망 등급</th><th>기준</th></tr>
  <tr><td><strong>매우 밝음</strong></td><td>상위 10%</td></tr>
  <tr><td><strong>밝음</strong></td><td>상위 20%</td></tr>
  <tr><td><strong>보통</strong></td><td>중간 이상</td></tr>
  <tr><td><strong>전망 안 좋음</strong></td><td>하위권</td></tr>
</table>
<h4>내게 맞는 직업 찾기</h4>
<table>
  <tr><th>검색 유형</th><th>항목 수</th><th>선택 기준</th></tr>
  <tr><td><strong>통합 검색</strong></td><td>전체</td><td><strong>10개 이상</strong> 선택</td></tr>
  <tr><td><strong>지식별 검색</strong></td><td>33개 중</td><td><strong>5개 이상</strong> 선택</td></tr>
  <tr><td><strong>업무수행능력별 검색</strong></td><td>44개 중</td><td><strong>7개 이상</strong> 선택</td></tr>
</table>
<p>★ <strong>암기법 (선택 개수):</strong> "통10 지5 업7" (통합 10개, 지식 5개, 업무수행능력 7개)</p>
<p>★ <strong>암기법 (항목 수):</strong> "지33 업44" (지식 33개, 업무수행능력 44개)</p>
<p>※ <strong>출제 함정:</strong> 숫자를 바꿔서 출제합니다. 특히 지식별(33개 중 5개)과 업무수행능력별(44개 중 7개)의 숫자를 정확히 기억하세요!</p>
</div>`
      }
    ]
  },
  {
    title: '시험 핵심키워드 - 직업 및 산업분류의 활용',
    topics: [
      {
        title: 'KSIC 산업분류 적용원칙',
        content: `<div class="exam-important">
<h4>KSIC 한국표준산업분류 적용원칙</h4>
<p>한국표준산업분류(KSIC)를 적용할 때 반드시 지켜야 하는 원칙들입니다. 시험에서 매우 빈출되는 내용입니다.</p>
<h4>핵심 적용원칙</h4>
<table>
  <tr><th>원칙</th><th>상세 설명</th></tr>
  <tr><td><strong>복합 고려</strong></td><td>산출물 + 투입물 + 생산공정을 <strong>함께</strong> 고려하여 분류</td></tr>
  <tr><td><strong>최상급 먼저</strong></td><td>★ <strong>최상급분류(대분류)</strong>를 먼저 결정한 후 하위분류 결정</td></tr>
  <tr><td><strong>결합활동</strong></td><td>결합활동은 <strong>주된 활동</strong>으로 분류</td></tr>
  <tr><td><strong>수수료/계약</strong></td><td>수수료·계약 기준 단위는 자기계정 단위와 <strong>같은 항목</strong>으로 분류</td></tr>
</table>
<h4>수리업 분류 원칙</h4>
<table>
  <tr><th>대상</th><th>분류</th></tr>
  <tr><td><strong>자본재</strong> (산업용 장비)</td><td>34: 산업용 기계장비 수리업</td></tr>
  <tr><td><strong>소비재</strong> (개인 물품)</td><td>95: 개인 소비용품 수리업</td></tr>
</table>
<p>★ <strong>암기법:</strong> "자본=산업(34), 소비=개인(95)"</p>
<h4>분류에 영향 없는 요소</h4>
<ul>
  <li><strong>소유형태:</strong> 공기업/사기업 등 소유형태에 영향 없음</li>
  <li><strong>법적 조직:</strong> 주식회사/합자회사 등 법적 형태 무관</li>
  <li><strong>운영방식:</strong> 운영 방법에 영향 없음</li>
  <li><strong>공식/비공식:</strong> 구분하지 않음</li>
  <li><strong>합법/비합법:</strong> 구분하지 않음</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"소유형태에 따라 분류가 달라진다" → <strong>틀림!</strong></li>
  <li>"비합법적 활동은 산업분류에서 제외한다" → <strong>틀림!</strong> 합법/비합법 구분하지 않습니다.</li>
  <li>"소분류를 먼저 결정한다" → <strong>틀림!</strong> 최상급분류(대분류)를 먼저 결정합니다.</li>
</ul>
</div>`
      },
      {
        title: 'KSCO 직업 대분류와 직능 수준',
        content: `<div class="exam-important">
<h4>KSCO 직업 대분류와 직능 수준</h4>
<p>한국표준직업분류(KSCO)에서는 각 대분류별로 요구되는 <strong>직능수준</strong>을 규정합니다.</p>
<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="580" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">제4직능수준 / 제3직능수준</text>
  <text x="300" y="55" text-anchor="middle" font-size="10" fill="#92400e">관리자 / 전문가 및 관련 종사자</text>
  <rect x="10" y="80" width="580" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="300" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">제2직능수준 이상</text>
  <text x="300" y="125" text-anchor="middle" font-size="10" fill="#1e40af">사무/서비스/판매/농림어업/기능원/장치기계조작 종사자 + 군인</text>
  <rect x="10" y="150" width="580" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="300" y="180" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">제1직능수준</text>
  <text x="300" y="195" text-anchor="middle" font-size="10" fill="#991b1b">단순노무 종사자</text>
  <text x="300" y="240" text-anchor="middle" font-size="12" fill="#666">▲ 높은 직능수준 ─────── 낮은 직능수준 ▼</text>
  <text x="300" y="265" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 군인은 제2직능수준 이상 (특수 분류)</text>
</svg>
<table>
  <tr><th>대분류</th><th>직능수준</th></tr>
  <tr><td><strong>관리자</strong></td><td>제4직능수준 (또는 제3직능수준)</td></tr>
  <tr><td><strong>전문가 및 관련 종사자</strong></td><td>제4직능수준 / 제3직능수준</td></tr>
  <tr><td><strong>사무·서비스·판매·농림어업·기능원·장치기계조작 종사자</strong></td><td>제2직능수준 이상</td></tr>
  <tr><td><strong>군인</strong></td><td>제2직능수준 이상</td></tr>
  <tr><td><strong>단순노무 종사자</strong></td><td>★ <strong>제1직능수준</strong></td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>제1직능수준</strong> = 단순노무 종사자만 해당</li>
  <li><strong>군인</strong>은 별도 대분류이지만 제2직능수준 이상</li>
  <li>관리자·전문가 = 가장 높은 직능수준 (제3~4)</li>
</ul>
<p>※ <strong>출제 함정:</strong> "단순노무 종사자는 제2직능수준이다" → <strong>틀림!</strong> 제1직능수준입니다.</p>
</div>`
      },
      {
        title: 'KSIC 산업 결정 방법',
        content: `<div class="exam-important">
<h4>KSIC 산업 결정 방법</h4>
<p>사업체의 산업을 결정하는 구체적인 방법과 기준입니다.</p>
<h4>기본 원칙</h4>
<ul>
  <li><strong>주된 산업활동</strong>의 종류로 결정</li>
  <li><strong>계절활동:</strong> 산출액이 많은 활동으로 결정</li>
</ul>
<h4>특수 상황별 결정 방법</h4>
<table>
  <tr><th>상황</th><th>결정 방법</th></tr>
  <tr><td><strong>휴업·청산 중</strong></td><td>★ <strong>이전 활동</strong>으로 분류</td></tr>
  <tr><td><strong>설립 중</strong></td><td>★ <strong>개시 활동</strong>(예정 활동)으로 분류</td></tr>
  <tr><td><strong>계절적 활동</strong></td><td>산출액이 많은 활동으로 분류</td></tr>
</table>
<h4>보조단위 처리</h4>
<table>
  <tr><th>유형</th><th>처리 방법</th></tr>
  <tr><td><strong>단일사업체의 보조단위</strong></td><td>일개 부서로 취급 (별도 분류 안 함)</td></tr>
  <tr><td><strong>중앙보조단위 (본부)</strong></td><td>★ <strong>별도 사업체</strong>로 분류</td></tr>
</table>
<h4>주된 활동 판단 순서 (결정 어려울 때)</h4>
<ol>
  <li><strong>부가가치액</strong> 기준 → 어려우면</li>
  <li><strong>산출액</strong> 기준 → 그래도 어려우면</li>
  <li><strong>종업원 수 / 노동시간 / 임금 / 설비</strong> 기준</li>
</ol>
<p>★ <strong>암기법 (판단 순서):</strong> "부산종노임설" (부가가치 → 산출액 → 종업원수·노동시간·임금·설비)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"휴업 중인 사업체는 분류하지 않는다" → <strong>틀림!</strong> 이전 활동으로 분류합니다.</li>
  <li>"보조단위는 모두 별도 사업체로 분류한다" → <strong>틀림!</strong> 단일사업체의 보조단위는 일개 부서이며, 중앙보조단위(본부)만 별도 사업체입니다.</li>
</ul>
</div>`
      },
      {
        title: 'KSCO 포괄적 업무 분류 원칙',
        content: `<div class="exam-important">
<h4>KSCO 포괄적 업무 분류 원칙</h4>
<p>한 사람이 여러 업무를 수행할 때 어떤 직업으로 분류할 것인지를 결정하는 3가지 원칙입니다.</p>
<table>
  <tr><th>원칙</th><th>내용</th><th>예시</th></tr>
  <tr><td><strong>1. 주된 직무 우선</strong></td><td>관련 직무 중 상관성이 가장 많은 항목으로 분류</td><td>여러 업무 중 가장 많이 수행하는 직무 기준</td></tr>
  <tr><td><strong>2. 최상급 직능수준 우선</strong></td><td>★ 여러 업무 중 <strong>가장 높은 직능수준</strong>이 요구되는 업무로 분류</td><td>조리 + 배달 → <strong>조리사</strong> (조리가 더 높은 직능수준)</td></tr>
  <tr><td><strong>3. 생산업무 우선</strong></td><td>★ 생산과 판매를 동시에 할 때 <strong>생산업무</strong>로 분류</td><td>빵 생산 + 판매 → <strong>제빵사</strong> (생산 우선)</td></tr>
</table>
<p>★ <strong>암기법:</strong> "주최생" (주된직무, 최상급직능, 생산우선)</p>
<p>★ <strong>적용 순서 핵심:</strong></p>
<ul>
  <li>먼저 <strong>주된 직무</strong>를 확인</li>
  <li>주된 직무 판단이 어려우면 <strong>최상급 직능수준</strong> 적용</li>
  <li>생산+판매 겸업이면 <strong>생산업무</strong>로 분류</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"조리와 배달을 함께 하면 배달원으로 분류한다" → <strong>틀림!</strong> 조리가 더 높은 직능수준이므로 조리사로 분류</li>
  <li>"빵을 만들어 판매하면 판매원으로 분류한다" → <strong>틀림!</strong> 생산업무 우선 원칙에 따라 제빵사로 분류</li>
</ul>
</div>`
      },
      {
        title: 'KSCO 직업의 정의',
        content: `<div class="exam-important">
<h4>KSCO 직업의 정의</h4>
<h4>ISCO-08 기본 개념</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>직무(Job)</strong></td><td>일련의 <strong>업무와 과업</strong>의 묶음</td></tr>
  <tr><td><strong>직업(Occupation)</strong></td><td><strong>유사한 직무의 집합</strong></td></tr>
</table>
<h4>직업의 3대 요건</h4>
<table>
  <tr><th>요건</th><th>설명</th></tr>
  <tr><td><strong>계속성</strong></td><td>일을 <strong>지속적으로</strong> 수행해야 함 (일시적 활동 제외)</td></tr>
  <tr><td><strong>경제성</strong></td><td>경제적 보상이 따라야 함 (★ 자연발생적 이득은 제외)</td></tr>
  <tr><td><strong>윤리성과 사회성</strong></td><td>사회적으로 인정받는 윤리적 활동이어야 함</td></tr>
</table>
<p>★ <strong>암기법:</strong> "계경윤사" (계속성, 경제성, 윤리성, 사회성)</p>
<h4>직업이 아닌 활동 (매우 중요!)</h4>
<table>
  <tr><th>활동</th><th>제외 이유</th></tr>
  <tr><td>이자·주식배당·임대료 수입</td><td>경제성 불충분 (자연발생적 이득)</td></tr>
  <tr><td>연금 수령</td><td>노동 수반 없는 소득</td></tr>
  <tr><td>경마·도박</td><td>윤리성·사회성 결여</td></tr>
  <tr><td>밀수</td><td>윤리성 결여</td></tr>
  <tr><td>가사활동</td><td>경제적 보상 없음</td></tr>
  <tr><td>교육·학습활동</td><td>수입 목적이 아님</td></tr>
  <tr><td>무급 봉사활동</td><td>경제적 보상 없음</td></tr>
  <tr><td>교도소 강제노동</td><td>자발성 결여</td></tr>
</table>
<p>※ <strong>출제 함정:</strong> "주식배당 수입은 직업활동에 해당한다" → <strong>틀림!</strong> 자연발생적 이득이므로 직업에 해당하지 않습니다.</p>
</div>`
      },
      {
        title: 'KSIC 분류 목적',
        content: `<div class="exam-important">
<h4>KSIC 한국표준산업분류의 목적</h4>
<p>한국표준산업분류(KSIC)가 존재하는 이유와 활용 목적입니다.</p>
<ul>
  <li>생산단위(사업체·기업체 등)를 <strong>유사성에 따라 체계적으로 유형화</strong>하기 위함</li>
  <li>★ <strong>통계법</strong>에 의거하여 <strong>의무적으로 사용</strong>해야 하는 분류체계</li>
  <li><strong>행정·산업정책</strong> 관련 법령의 기준으로 <strong>준용</strong>됨</li>
</ul>
<h4>KSIC의 활용 범위</h4>
<table>
  <tr><th>활용 분야</th><th>내용</th></tr>
  <tr><td><strong>통계 조사</strong></td><td>각종 경제·산업 통계의 기본 분류 체계</td></tr>
  <tr><td><strong>행정</strong></td><td>정부 행정업무의 산업 분류 기준</td></tr>
  <tr><td><strong>산업정책</strong></td><td>산업 지원·규제 정책의 법적 기준</td></tr>
  <tr><td><strong>국제 비교</strong></td><td>ISIC(국제표준산업분류)와의 비교 가능</td></tr>
</table>
<p>★ <strong>핵심:</strong> 통계법에 의한 <strong>의무적 사용</strong>이라는 점이 중요합니다.</p>
<p>※ <strong>출제 함정:</strong> "KSIC는 권장 사항이다" → <strong>틀림!</strong> 통계법상 의무적으로 사용해야 합니다.</p>
</div>`
      },
      {
        title: 'KSIC 분류기준',
        content: `<div class="exam-important">
<h4>KSIC 분류기준</h4>
<p>한국표준산업분류에서 산업활동을 분류할 때 사용하는 기준입니다.</p>
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="180" height="170" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">산출물 특성</text>
  <text x="20" y="65" font-size="10">- 물리적 구성</text>
  <text x="20" y="85" font-size="10">- 가공 단계</text>
  <text x="20" y="105" font-size="10">- 수요처</text>
  <text x="20" y="125" font-size="10">- 기능·용도</text>
  <rect x="210" y="10" width="180" height="170" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">투입물 특성</text>
  <text x="220" y="65" font-size="10">- 원재료</text>
  <text x="220" y="85" font-size="10">- 생산 공정</text>
  <text x="220" y="105" font-size="10">- 생산 기술/시설</text>
  <rect x="410" y="10" width="180" height="170" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="500" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">생산활동의</text>
  <text x="500" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">일반적 결합상태</text>
  <text x="420" y="85" font-size="10">- 여러 활동의</text>
  <text x="420" y="105" font-size="10">  결합 패턴 고려</text>
</svg>
<h4>산출물 특성 (4가지)</h4>
<ul>
  <li><strong>물리적 구성:</strong> 제품의 물리적 구조와 성분</li>
  <li><strong>가공 단계:</strong> 원료에서 완제품까지의 가공 정도</li>
  <li><strong>수요처:</strong> 제품이 판매되는 시장/대상</li>
  <li><strong>기능·용도:</strong> 제품의 기능과 사용 목적</li>
</ul>
<h4>투입물 특성 (3가지)</h4>
<ul>
  <li><strong>원재료:</strong> 투입되는 원료·재료의 종류</li>
  <li><strong>생산공정:</strong> 제조·가공 과정</li>
  <li><strong>생산기술/시설:</strong> 사용되는 기술과 설비</li>
</ul>
<p>★ <strong>암기법 (산출물):</strong> "물가수기" (물리적 구성, 가공 단계, 수요처, 기능용도)</p>
<p>★ <strong>암기법 (투입물):</strong> "원공기" (원재료, 생산공정, 생산기술/시설)</p>
</div>`
      },
      {
        title: 'KSIC 산업의 정의',
        content: `<div class="exam-important">
<h4>KSIC 산업의 정의</h4>
<h4>핵심 정의</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>산업</strong></td><td>유사한 성질의 산업활동에 종사하는 <strong>생산단위의 집합</strong></td></tr>
  <tr><td><strong>산업활동</strong></td><td>노동·자본·원료를 투입하여 <strong>재화 또는 서비스를 생산·제공</strong>하는 활동</td></tr>
</table>
<h4>포함·제외 범위</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>포함</strong></td><td>영리 활동 + <strong>비영리 활동</strong> 모두 포함</td></tr>
  <tr><td><strong>제외</strong></td><td>★ <strong>가정 내 가사활동</strong>은 제외</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>산업 = 생산단위의 <strong>집합</strong> (개별 단위가 아닌 집합 개념)</li>
  <li>영리·비영리 <strong>모두 포함</strong></li>
  <li>가정 내 가사활동은 <strong>제외</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"비영리 활동은 산업에 포함되지 않는다" → <strong>틀림!</strong> 영리·비영리 모두 포함됩니다.</li>
  <li>"가사활동도 서비스 생산이므로 산업에 포함된다" → <strong>틀림!</strong> 가정 내 가사활동은 제외됩니다.</li>
</ul>
</div>`
      },
      {
        title: 'KSIC 분류구조 및 부호체계',
        content: `<div class="exam-important">
<h4>KSIC 분류구조 및 부호체계</h4>
<p>한국표준산업분류의 5단계 분류 구조와 부호 체계입니다.</p>
<svg viewBox="0 0 650 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:650px;margin:10px auto;display:block;">
  <rect x="10" y="60" width="110" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="65" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">대분류</text>
  <text x="65" y="105" text-anchor="middle" font-size="10" fill="#1e40af">알파벳 (A~U)</text>
  <line x1="120" y1="90" x2="140" y2="90" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="140" y="60" width="110" height="60" rx="8" fill="#c7d2fe" stroke="#6366f1" stroke-width="2"/>
  <text x="195" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">중분류</text>
  <text x="195" y="105" text-anchor="middle" font-size="10" fill="#4338ca">2자리 (01~99)</text>
  <line x1="250" y1="90" x2="270" y2="90" stroke="#666" stroke-width="2"/>
  <rect x="270" y="60" width="110" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="325" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">소분류</text>
  <text x="325" y="105" text-anchor="middle" font-size="10" fill="#92400e">3자리</text>
  <line x1="380" y1="90" x2="400" y2="90" stroke="#666" stroke-width="2"/>
  <rect x="400" y="60" width="110" height="60" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="455" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">세분류</text>
  <text x="455" y="105" text-anchor="middle" font-size="10" fill="#991b1b">4자리</text>
  <line x1="510" y1="90" x2="530" y2="90" stroke="#666" stroke-width="2"/>
  <rect x="530" y="60" width="110" height="60" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="585" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">세세분류</text>
  <text x="585" y="105" text-anchor="middle" font-size="10" fill="#065f46">5자리</text>
  <text x="325" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">KSIC 5단계 분류구조</text>
  <text x="325" y="160" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 대분류만 알파벳, 나머지는 모두 아라비아 숫자</text>
  <text x="325" y="180" text-anchor="middle" font-size="11" fill="#666">부호 처리 시 대분류도 숫자로 변환</text>
</svg>
<table>
  <tr><th>분류 단계</th><th>부호 형태</th><th>범위</th></tr>
  <tr><td><strong>대분류</strong></td><td>알파벳 1자리 (A~U)</td><td>부호 처리 시 숫자로 변환</td></tr>
  <tr><td><strong>중분류</strong></td><td>아라비아 숫자 2자리</td><td>01 ~ 99</td></tr>
  <tr><td><strong>소분류</strong></td><td>아라비아 숫자 3자리</td><td>끝자리 0~9</td></tr>
  <tr><td><strong>세분류</strong></td><td>아라비아 숫자 4자리</td><td>끝자리 0~9</td></tr>
  <tr><td><strong>세세분류</strong></td><td>아라비아 숫자 5자리</td><td>끝자리 0~9</td></tr>
</table>
<p>★ <strong>핵심:</strong> 대분류만 알파벳이고, <strong>부호 처리는 아라비아 숫자만</strong> 사용합니다 (대분류도 숫자로 변환).</p>
<p>※ <strong>출제 함정:</strong> "대분류 부호는 알파벳을 그대로 사용한다" → 분류 표시는 알파벳이지만, <strong>부호 처리 시에는 숫자로 변환</strong>합니다.</p>
</div>`
      },
      {
        title: 'KSCO 다수 직업 종사자 분류원칙',
        content: `<div class="exam-important">
<h4>KSCO 다수 직업 종사자 분류원칙</h4>
<p>한 사람이 <strong>2개 이상의 직업</strong>에 종사하는 경우, 다음 우선순위에 따라 분류합니다.</p>
<table>
  <tr><th>우선순위</th><th>기준</th><th>설명</th></tr>
  <tr><td><strong>1순위</strong></td><td>★ <strong>취업시간</strong> 우선</td><td>더 많은 시간을 투입하는 직업으로 분류</td></tr>
  <tr><td><strong>2순위</strong></td><td><strong>수입</strong> 우선</td><td>취업시간이 같으면 수입이 많은 직업으로 분류</td></tr>
  <tr><td><strong>3순위</strong></td><td><strong>조사 시 최근 작업</strong> 우선</td><td>수입도 같으면 조사 시점에서 가장 최근에 한 작업으로 분류</td></tr>
</table>
<p>★ <strong>암기법:</strong> "취수최" (취업시간 → 수입 → 최근 작업)</p>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>1순위는 취업시간</strong>입니다 (수입이 아님!)</li>
  <li>순서: 취업시간 → 수입 → 최근 작업</li>
  <li>앞 순위로 판단이 안 될 때 다음 순위를 적용</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"수입이 가장 많은 직업으로 먼저 분류한다" → <strong>틀림!</strong> 취업시간이 1순위입니다.</li>
  <li>"최근 작업이 1순위이다" → <strong>틀림!</strong> 최근 작업은 3순위(마지막)입니다.</li>
</ul>
</div>`
      }
    ]
  },
  {
    title: '시험 핵심키워드 - 직업 관련 정보의 이해',
    topics: [
      {
        title: '검정기준 - 등급서열',
        content: `<div class="exam-important">
<h4>국가기술자격 검정기준 - 등급서열</h4>
<p>국가기술자격의 <strong>5단계 등급 체계</strong>와 각 등급의 검정기준입니다.</p>
<svg viewBox="0 0 650 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:650px;margin:10px auto;display:block;">
  <rect x="10" y="50" width="110" height="70" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="65" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">기능사</text>
  <text x="65" y="95" text-anchor="middle" font-size="9" fill="#065f46">(공고 수준)</text>
  <text x="65" y="110" text-anchor="middle" font-size="8" fill="#065f46">숙련기능 보유자</text>
  <line x1="120" y1="85" x2="140" y2="85" stroke="#666" stroke-width="2"/>
  <text x="130" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="140" y="50" width="110" height="70" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="195" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">산업기사</text>
  <text x="195" y="95" text-anchor="middle" font-size="9" fill="#1e40af">(전문대 수준)</text>
  <text x="195" y="110" text-anchor="middle" font-size="8" fill="#1e40af">기초이론/숙련기능</text>
  <line x1="250" y1="85" x2="270" y2="85" stroke="#666" stroke-width="2"/>
  <text x="260" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="270" y="50" width="110" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="325" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">기사</text>
  <text x="325" y="95" text-anchor="middle" font-size="9" fill="#92400e">(4년대 수준)</text>
  <text x="325" y="110" text-anchor="middle" font-size="8" fill="#92400e">공학적 기술이론</text>
  <line x1="380" y1="85" x2="400" y2="85" stroke="#666" stroke-width="2"/>
  <text x="390" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="400" y="50" width="110" height="70" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="455" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">기능장</text>
  <text x="455" y="95" text-anchor="middle" font-size="9" fill="#991b1b">(최상급)</text>
  <text x="455" y="110" text-anchor="middle" font-size="8" fill="#991b1b">최상급 숙련기능</text>
  <line x1="510" y1="85" x2="530" y2="85" stroke="#666" stroke-width="2"/>
  <text x="520" y="78" text-anchor="middle" font-size="14" fill="#666">→</text>
  <rect x="530" y="50" width="110" height="70" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
  <text x="585" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">기술사</text>
  <text x="585" y="95" text-anchor="middle" font-size="9" fill="#6b21a8">(단답형/구술형)</text>
  <text x="585" y="110" text-anchor="middle" font-size="8" fill="#6b21a8">고도전문지식+실무</text>
  <text x="325" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">낮은 등급 ───────────────────── 높은 등급</text>
  <text x="325" y="160" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 기능사 → 산업기사 → 기사 → 기능장 → 기술사</text>
</svg>
<table>
  <tr><th>등급</th><th>학력 수준</th><th>검정기준</th></tr>
  <tr><td><strong>기능사</strong></td><td>공업고등학교</td><td>숙련기능 보유자</td></tr>
  <tr><td><strong>산업기사</strong></td><td>전문대학</td><td>기술 기초이론 지식 또는 숙련기능</td></tr>
  <tr><td><strong>기사</strong></td><td>4년제 대학</td><td>공학적 기술이론 지식</td></tr>
  <tr><td><strong>기능장</strong></td><td>-</td><td>★ <strong>최상급 숙련기능</strong> 보유</td></tr>
  <tr><td><strong>기술사</strong></td><td>-</td><td>★ <strong>고도 전문지식과 실무경험</strong> (단답형/구술형 시험)</td></tr>
</table>
<p>★ <strong>암기법:</strong> "기산기기기" (기능사, 산업기사, 기사, 기능장, 기술사)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"기능장이 기술사보다 상위 등급이다" → <strong>틀림!</strong> 기술사가 최상위입니다.</li>
  <li>"기술사 시험은 필기+실기이다" → <strong>틀림!</strong> 기술사는 단답형+구술형 시험입니다.</li>
</ul>
</div>`
      },
      {
        title: '서비스분야 응시자격',
        content: `<div class="exam-important">
<h4>서비스분야 주요 자격종목 응시자격</h4>
<table>
  <tr><th>자격종목</th><th>1급 응시</th><th>2급 응시</th><th>외국자격 인정</th></tr>
  <tr><td><strong>직업상담사</strong></td><td>2급 + 2년 경력</td><td>★ 제한 없음</td><td>불인정</td></tr>
  <tr><td><strong>사회조사분석사</strong></td><td>2급 + 2년 경력</td><td>★ 제한 없음</td><td>불인정</td></tr>
  <tr><td><strong>전자상거래관리사</strong></td><td>2급 + 2년 경력</td><td>★ 제한 없음</td><td>불인정</td></tr>
  <tr><td><strong>소비자전문상담사</strong></td><td>-</td><td>-</td><td>★ <strong>인정</strong></td></tr>
  <tr><td><strong>컨벤션기획사</strong></td><td>-</td><td>-</td><td>★ <strong>인정</strong></td></tr>
  <tr><td><strong>임상심리사</strong></td><td colspan="3">★ 응시자격이 <strong>까다로움</strong> (관련 학과·경력 요구)</td></tr>
  <tr><td><strong>국제의료관광코디네이터</strong></td><td colspan="3">★ <strong>1급/2급 구분 없음</strong></td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>직업상담사·사회조사분석사·전자상거래관리사: <strong>외국자격 불인정</strong>, 2급은 제한 없음, 1급은 2급+2년</li>
  <li>소비자전문상담사·컨벤션기획사: <strong>외국자격 인정</strong></li>
  <li>국제의료관광코디네이터: 1급/2급 <strong>구분 없음</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"직업상담사는 외국자격이 인정된다" → <strong>틀림!</strong></li>
  <li>"국제의료관광코디네이터 1급 시험이 있다" → <strong>틀림!</strong> 급수 구분이 없습니다.</li>
</ul>
</div>`
      },
      {
        title: '기술기능분야 응시자격',
        content: `<div class="exam-important">
<h4>기술·기능분야 응시자격 체계</h4>
<p>기술·기능분야 국가기술자격의 등급별 응시 자격 요건입니다.</p>
<table>
  <tr><th>등급</th><th>응시자격</th></tr>
  <tr><td><strong>기능사</strong></td><td>★ <strong>제한 없음</strong> (누구나 응시 가능)</td></tr>
  <tr><td><strong>산업기사</strong></td><td>기능사 + <strong>1년</strong> / 전문대 졸업</td></tr>
  <tr><td><strong>기사</strong></td><td>산업기사 + <strong>1년</strong> / 기능사 + <strong>3년</strong> / 4년대 졸업 / <strong>4년</strong> 실무</td></tr>
  <tr><td><strong>기능장</strong></td><td>산업기사 + <strong>5년</strong> / 기능사 + <strong>7년</strong> / <strong>9년</strong> 실무</td></tr>
  <tr><td><strong>기술사</strong></td><td>기사 + <strong>4년</strong> / 산업기사 + <strong>5년</strong> / 기능사 + <strong>7년</strong> / <strong>9년</strong> 실무</td></tr>
</table>
<h4>경력 기간 요약표</h4>
<table>
  <tr><th>보유 자격 →</th><th>기능사 보유</th><th>산업기사 보유</th><th>기사 보유</th><th>실무만</th></tr>
  <tr><td><strong>→ 산업기사</strong></td><td>+1년</td><td>-</td><td>-</td><td>-</td></tr>
  <tr><td><strong>→ 기사</strong></td><td>+3년</td><td>+1년</td><td>-</td><td>4년</td></tr>
  <tr><td><strong>→ 기능장</strong></td><td>+7년</td><td>+5년</td><td>-</td><td>9년</td></tr>
  <tr><td><strong>→ 기술사</strong></td><td>+7년</td><td>+5년</td><td>+4년</td><td>9년</td></tr>
</table>
<p>★ <strong>암기법 (기능사 기준):</strong> "1-3-7-7" (산업기사+1, 기사+3, 기능장+7, 기술사+7)</p>
<p>★ <strong>암기법 (산업기사 기준):</strong> "1-5-5" (기사+1, 기능장+5, 기술사+5)</p>
<p>★ <strong>암기법 (실무경력):</strong> 기능장과 기술사 모두 <strong>9년</strong></p>
<p>※ <strong>출제 함정:</strong> 경력 연수를 바꿔 출제하는 것이 가장 빈출됩니다. 특히 기능사+7년=기능장=기술사 동일하다는 점에 주의!</p>
</div>`
      },
      {
        title: '직무분야별 자격종목',
        content: `<div class="exam-important">
<h4>직무분야별 자격종목 - 기술·기능분야</h4>
<p>국가기술자격의 <strong>직무분야별 분류번호</strong>와 주요 분야입니다.</p>
<table>
  <tr><th>분류번호</th><th>직무분야</th></tr>
  <tr><td><strong>14</strong></td><td>건설</td></tr>
  <tr><td><strong>16</strong></td><td>기계</td></tr>
  <tr><td><strong>17</strong></td><td>재료</td></tr>
  <tr><td><strong>18</strong></td><td>화학</td></tr>
  <tr><td><strong>20</strong></td><td>전기·전자</td></tr>
  <tr><td><strong>24</strong></td><td>농림어업</td></tr>
  <tr><td><strong>25</strong></td><td>안전관리</td></tr>
  <tr><td><strong>26</strong></td><td>환경·에너지</td></tr>
</table>
<p>★ <strong>암기법:</strong> "14건 16기 17재 18화 20전 24농 25안 26환" - 숫자와 분야를 짝지어 외우세요.</p>
<p>★ <strong>핵심 포인트:</strong> 분류번호가 연속되지 않으므로 번호-분야 매칭을 정확히 외워야 합니다.</p>
</div>`
      },
      {
        title: '실기시험만 실시 종목',
        content: `<div class="exam-important">
<h4>실기시험만 실시하는 자격종목</h4>
<p>필기시험 없이 <strong>실기시험만</strong>으로 자격을 취득할 수 있는 종목들입니다.</p>
<table>
  <tr><th>분류</th><th>종목</th></tr>
  <tr><td><strong>023 사무</strong></td><td>★ <strong>한글속기</strong> 1급, 2급, 3급</td></tr>
  <tr><td><strong>141 건축</strong></td><td>거푸집 등 건축 관련 기능사</td></tr>
  <tr><td><strong>142 토목</strong></td><td>도화, 석공, 지도제작, 항공사진</td></tr>
  <tr><td><strong>172 판금제관새시</strong></td><td>금속재창호기능사</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>한글속기</strong>는 사무분야(023)에서 유일하게 실기만 실시</li>
  <li>건축·토목·판금 분야의 <strong>현장 기능직</strong> 종목들이 실기만 해당</li>
</ul>
<p>※ <strong>출제 함정:</strong> "한글속기는 필기+실기 시험이다" → <strong>틀림!</strong> 실기시험만 실시합니다.</p>
</div>`
      },
      {
        title: '기업태별 검색 - 워크넷 채용정보',
        content: `<div class="exam-important">
<h4>기업태별 검색 - 워크넷 채용정보</h4>
<h4>검색 조건 제한</h4>
<table>
  <tr><th>항목</th><th>제한</th></tr>
  <tr><td><strong>직종</strong></td><td>최대 <strong>10개</strong></td></tr>
  <tr><td><strong>지역</strong></td><td>최대 <strong>20개</strong></td></tr>
  <tr><td><strong>학력</strong></td><td>전체 ~ 박사 / 학력무관</td></tr>
</table>
<h4>기업형태 검색 가능 항목</h4>
<ul>
  <li>대기업, 공무원/공기업, 강소기업</li>
  <li>코스피/코스닥, 중견기업, 외국계</li>
  <li>일학습병행, 벤처, 청년친화, 가족친화인증</li>
</ul>
<h4>★ 없는 기업형태 (시험 빈출!)</h4>
<table>
  <tr><th>없는 항목</th><th>암기 포인트</th></tr>
  <tr><td><strong>중소기업 X</strong></td><td>★ 강소기업은 있지만 <strong>중소기업은 없음!</strong></td></tr>
  <tr><td><strong>금융권 X</strong></td><td>금융권 별도 검색 불가</td></tr>
  <tr><td><strong>환경친화 X</strong></td><td>가족친화는 있지만 <strong>환경친화는 없음!</strong></td></tr>
  <tr><td><strong>다문화 X</strong></td><td>다문화 관련 검색 불가</td></tr>
</table>
<h4>★ 없는 검색 항목</h4>
<ul>
  <li><strong>연령 X</strong> - 연령으로 검색 불가</li>
  <li><strong>소정근로시간 X</strong> - 근로시간으로 검색 불가</li>
</ul>
<p>★ <strong>암기법 (없는 것):</strong> "중금환다 연소" (중소기업, 금융권, 환경친화, 다문화, 연령, 소정근로시간)</p>
<p>※ <strong>출제 함정:</strong> "중소기업으로 검색할 수 있다" → <strong>틀림!</strong> 강소기업은 있지만 중소기업은 없습니다.</p>
</div>`
      },
      {
        title: '직업선호도검사 - 워크넷',
        content: `<div class="exam-important">
<h4>직업선호도검사 - 워크넷</h4>
<p>워크넷에서 제공하는 직업선호도검사는 <strong>S형</strong>과 <strong>L형</strong> 두 가지 유형이 있습니다.</p>
<table>
  <tr><th>구분</th><th>S형 (간편형)</th><th>L형 (종합형)</th></tr>
  <tr><td><strong>구성</strong></td><td>흥미검사</td><td>흥미검사 + <strong>성격검사</strong> + <strong>생활사검사</strong></td></tr>
  <tr><td><strong>공통</strong></td><td colspan="2" style="text-align:center">★ <strong>흥미검사</strong> (S형, L형 모두 포함)</td></tr>
  <tr><td><strong>소요시간</strong></td><td>짧음</td><td>김</td></tr>
</table>
<h4>흥미검사 6유형 (Holland RIASEC)</h4>
<table>
  <tr><th>코드</th><th>유형</th><th>특징</th></tr>
  <tr><td><strong>R</strong></td><td>현실형 (Realistic)</td><td>기계, 도구, 신체활동 선호</td></tr>
  <tr><td><strong>I</strong></td><td>탐구형 (Investigative)</td><td>과학적 탐구, 분석 선호</td></tr>
  <tr><td><strong>A</strong></td><td>예술형 (Artistic)</td><td>창의적, 예술적 활동 선호</td></tr>
  <tr><td><strong>S</strong></td><td>사회형 (Social)</td><td>대인관계, 봉사 활동 선호</td></tr>
  <tr><td><strong>E</strong></td><td>진취형 (Enterprising)</td><td>리더십, 설득, 경영 선호</td></tr>
  <tr><td><strong>C</strong></td><td>관습형 (Conventional)</td><td>체계적, 조직적 활동 선호</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>S형 = <strong>흥미검사만</strong></li>
  <li>L형 = <strong>흥미 + 성격 + 생활사</strong></li>
  <li>공통 = <strong>흥미검사</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong> "S형에는 성격검사가 포함된다" → <strong>틀림!</strong> S형은 흥미검사만, 성격검사는 L형에만 포함됩니다.</p>
</div>`
      },
      {
        title: '서비스분야 직무분야별 자격종목',
        content: `<div class="exam-important">
<h4>서비스분야 직무분야별 자격종목</h4>
<table>
  <tr><th>분류번호</th><th>직무분야</th><th>비고</th></tr>
  <tr><td><strong>02</strong></td><td>경영·회계·사무</td><td>023 사무: 한글속기 (실기만)</td></tr>
  <tr><td><strong>04</strong></td><td>교육·자연·사회과학</td><td>-</td></tr>
  <tr><td><strong>07</strong></td><td>사회복지·종교</td><td>★ 071: <strong>직업상담사</strong> (필기+실기)</td></tr>
  <tr><td><strong>10</strong></td><td>영업·판매</td><td>-</td></tr>
  <tr><td><strong>12</strong></td><td>이용·숙박·여행·오락·스포츠</td><td>-</td></tr>
  <tr><td><strong>21</strong></td><td>정보통신</td><td>-</td></tr>
</table>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li><strong>직업상담사</strong>는 071 사회복지·종교 분야에 속함 (필기+실기)</li>
  <li><strong>한글속기</strong>는 023 사무 분야에 속함 (실기만)</li>
  <li>서비스분야 분류번호: 02, 04, 07, 10, 12, 21</li>
</ul>
<p>★ <strong>암기법 (분류번호):</strong> "02경 04교 07사 10영 12이 21정"</p>
<p>※ <strong>출제 함정:</strong> "직업상담사는 교육 분야(04)에 속한다" → <strong>틀림!</strong> 사회복지·종교 분야(07)에 속합니다.</p>
</div>`
      },
      {
        title: '청소년 직업흥미검사 - 워크넷',
        content: `<div class="exam-important">
<h4>청소년 직업흥미검사 - 워크넷</h4>
<table>
  <tr><th>항목</th><th>내용</th></tr>
  <tr><td><strong>대상</strong></td><td>★ <strong>중·고등학생</strong></td></tr>
  <tr><td><strong>소요시간</strong></td><td>★ 약 <strong>20분</strong> (기존 30분에서 단축)</td></tr>
  <tr><td><strong>일반흥미</strong></td><td>6유형 (RIASEC: 현실형, 탐구형, 예술형, 사회형, 진취형, 관습형)</td></tr>
  <tr><td><strong>기초흥미</strong></td><td>★ <strong>14개</strong> 분야 (기존 13개에서 변경)</td></tr>
</table>
<p>★ <strong>핵심 숫자 정리:</strong></p>
<ul>
  <li>대상: <strong>중고등학생</strong> (초등학생 아님!)</li>
  <li>시간: <strong>20분</strong> (30분 아님!)</li>
  <li>일반흥미: <strong>6유형</strong> (RIASEC)</li>
  <li>기초흥미: <strong>14개</strong> 분야 (13개 아님!)</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"소요시간은 약 30분이다" → <strong>틀림!</strong> 기존 30분에서 <strong>20분으로 단축</strong>되었습니다.</li>
  <li>"기초흥미는 13개 분야이다" → <strong>틀림!</strong> 기존 13개에서 <strong>14개로 변경</strong>되었습니다.</li>
  <li>"초등학생도 대상이다" → <strong>틀림!</strong> 중·고등학생만 대상입니다.</li>
</ul>
</div>`
      },
      {
        title: '최저임금 현황 및 유용한 사이트',
        content: `<div class="exam-important">
<h4>최저임금 현황</h4>
<table>
  <tr><th>연도</th><th>시급</th><th>인상률</th></tr>
  <tr><td><strong>2023년</strong></td><td>9,620원</td><td>-</td></tr>
  <tr><td><strong>2024년</strong></td><td>★ <strong>9,860원</strong></td><td>★ <strong>2.5%</strong></td></tr>
</table>
<h4>유용한 직업·고용 관련 사이트</h4>
<table>
  <tr><th>사이트</th><th>운영기관</th><th>주요 내용</th></tr>
  <tr><td><strong>HRD-Net</strong></td><td>★ <strong>한국고용정보원</strong></td><td>직업훈련 정보</td></tr>
  <tr><td><strong>CareerNet</strong></td><td>★ <strong>한국직업능력연구원</strong></td><td>진로·직업 정보</td></tr>
  <tr><td><strong>WORLDJOB+</strong></td><td>★ <strong>한국산업인력공단</strong></td><td>해외취업 정보</td></tr>
  <tr><td><strong>공공데이터포털</strong></td><td>★ <strong>한국지능정보사회진흥원</strong></td><td>공공데이터 제공</td></tr>
</table>
<p>★ <strong>암기법 (사이트-기관 매칭):</strong></p>
<ul>
  <li>HRD = 고용정보원 (HRD = Human Resource Development = 고용)</li>
  <li>Career = 직업능력연구원 (Career = 진로)</li>
  <li>WORLD = 산업인력공단 (해외 = 산업인력)</li>
  <li>공공데이터 = 지능정보사회진흥원</li>
</ul>
<p>※ <strong>출제 함정:</strong> 사이트명과 운영기관을 바꿔 출제하는 패턴이 빈출됩니다. 특히 HRD-Net(고용정보원)과 CareerNet(직업능력연구원)을 혼동하지 마세요!</p>
</div>`
      }
    ]
  },
  {
    title: '시험 핵심키워드 - 직업정보의 수집·분석',
    topics: [
      {
        title: '가공 유의사항',
        content: `<div class="exam-important">
<h4>직업정보 가공 시 유의사항</h4>
<p>수집·분석된 직업정보를 이용자에게 전달하기 위해 가공할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>이용자가 이해 가능</strong>하게 가공</li>
  <li><strong>동기부여</strong>가 되도록 구성</li>
  <li><strong>최신 자료</strong>를 활용</li>
  <li>장점과 단점을 <strong>편견 없이</strong> 균형 있게 제시</li>
  <li><strong>객관성</strong> 유지</li>
  <li><strong>시각적 효과</strong>를 활용 (그래프, 도표 등)</li>
  <li><strong>적절한 형태</strong>로 가공 (대상에 맞게)</li>
</ul>
<p>★ <strong>암기법:</strong> "이동최장객시적" (이해 가능, 동기부여, 최신자료, 장단점 균형, 객관성, 시각적 효과, 적절한 형태)</p>
<p>※ <strong>출제 포인트:</strong> 가공·분석·수집·제공 각 단계의 유의사항을 구분하여 출제합니다. 특히 "시각적 효과"는 <strong>가공</strong> 단계의 유의사항입니다.</p>
</div>`
      },
      {
        title: '분석 유의사항',
        content: `<div class="exam-important">
<h4>직업정보 분석 시 유의사항</h4>
<p>수집된 직업정보를 분석할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>목적을 명확히</strong> 설정</li>
  <li><strong>다각적·종합적</strong>으로 분석 (한 면만 보지 않기)</li>
  <li><strong>전문적 시각</strong>으로 분석</li>
  <li><strong>객관성·정확성</strong> 확보</li>
  <li><strong>효율적 검색</strong> 방법 활용</li>
  <li>★ <strong>숫자로 표현 불가한 정보</strong>도 포함 (질적 정보)</li>
  <li><strong>정보원·제공원</strong>을 반드시 제시</li>
</ul>
<p>★ <strong>암기법:</strong> "목다전객효숫정" (목적 명확, 다각적, 전문적, 객관적, 효율적 검색, 숫자 불가 정보, 정보원 제시)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"분석은 숫자로 표현 가능한 정보만 대상으로 한다" → <strong>틀림!</strong> 숫자로 표현 불가한 정보도 포함합니다.</li>
  <li>"정보원 제시는 가공 단계의 유의사항이다" → <strong>틀림!</strong> 분석 단계의 유의사항입니다.</li>
</ul>
</div>`
      },
      {
        title: '수집 유의사항',
        content: `<div class="exam-important">
<h4>직업정보 수집 시 유의사항</h4>
<p>직업정보를 수집할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>목표를 명확</strong>하게 설정</li>
  <li><strong>조직적·계획적</strong>으로 수집</li>
  <li><strong>적시에 제공</strong> (시의적절하게)</li>
  <li>★ <strong>오래된 자료는 폐기</strong></li>
  <li><strong>최신 자료로 보완</strong></li>
  <li><strong>도구 활용:</strong> 녹음·녹화·사진 등</li>
  <li>★ <strong>출처·저자·발행연도</strong>를 반드시 기입</li>
</ul>
<p>★ <strong>암기법:</strong> "목조적폐최도출" (목표 명확, 조직적, 적시 제공, 폐기, 최신 보완, 도구 활용, 출처 기입)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"오래된 자료도 역사적 가치가 있으므로 보관한다" → <strong>틀림!</strong> 오래된 자료는 폐기합니다.</li>
  <li>"출처 기입은 제공 단계의 유의사항이다" → <strong>틀림!</strong> 수집 단계에서 출처·저자·발행연도를 기입합니다.</li>
</ul>
</div>`
      },
      {
        title: '처리과정 7단계',
        content: `<div class="exam-important">
<h4>직업정보 처리과정 7단계</h4>
<p>직업정보의 처리과정은 7단계로 구성됩니다.</p>
<svg viewBox="0 0 700 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:10px auto;display:block;">
  <rect x="5" y="30" width="85" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="47" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">1. 수집</text>
  <text x="100" y="58" font-size="18" fill="#666">→</text>
  <rect x="105" y="30" width="85" height="50" rx="8" fill="#c7d2fe" stroke="#6366f1" stroke-width="2"/>
  <text x="147" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">2. 분석</text>
  <text x="200" y="58" font-size="18" fill="#666">→</text>
  <rect x="205" y="30" width="85" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="247" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">3. 가공</text>
  <text x="300" y="58" font-size="18" fill="#666">→</text>
  <rect x="305" y="30" width="85" height="50" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="347" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">4. 체계화</text>
  <text x="400" y="58" font-size="18" fill="#666">→</text>
  <rect x="405" y="30" width="85" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="447" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">5. 제공</text>
  <text x="500" y="58" font-size="18" fill="#666">→</text>
  <rect x="505" y="30" width="85" height="50" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
  <text x="547" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">6. 축적</text>
  <text x="600" y="58" font-size="18" fill="#666">→</text>
  <rect x="605" y="30" width="85" height="50" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="647" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#be185d">7. 평가</text>
  <text x="350" y="115" text-anchor="middle" font-size="14" font-weight="bold" fill="#b91c1c">★ 암기법: "수분가체제축평"</text>
</svg>
<table>
  <tr><th>단계</th><th>내용</th></tr>
  <tr><td><strong>1. 수집</strong></td><td>직업정보를 다양한 방법으로 수집</td></tr>
  <tr><td><strong>2. 분석</strong></td><td>수집된 정보를 다각적으로 분석</td></tr>
  <tr><td><strong>3. 가공</strong></td><td>분석 결과를 이용자가 이해할 수 있도록 가공</td></tr>
  <tr><td><strong>4. 체계화</strong></td><td>가공된 정보를 체계적으로 분류·정리</td></tr>
  <tr><td><strong>5. 제공</strong></td><td>이용자에게 정보를 전달</td></tr>
  <tr><td><strong>6. 축적</strong></td><td>제공된 정보를 데이터베이스에 축적·보관</td></tr>
  <tr><td><strong>7. 평가</strong></td><td>전체 과정과 결과를 평가·피드백</td></tr>
</table>
<p>★ <strong>암기법:</strong> <strong>"수분가체제축평"</strong> (수집→분석→가공→체계화→제공→축적→평가)</p>
<p>※ <strong>출제 함정:</strong> 단계 순서를 바꿔서 출제합니다. 특히 "분석"과 "가공"의 순서, "축적"과 "평가"의 순서를 혼동하지 마세요!</p>
</div>`
      },
      {
        title: '제공 유의사항',
        content: `<div class="exam-important">
<h4>직업정보 제공 시 유의사항</h4>
<p>직업정보를 이용자에게 제공할 때의 유의사항입니다.</p>
<ul>
  <li>★ <strong>진로발달단계·수준·이용목적</strong>을 고려</li>
  <li><strong>자발적 의사</strong>를 고려 (강제하지 않기)</li>
  <li><strong>다양한 정보 수집 노력</strong> (편향 방지)</li>
  <li><strong>태도·감정 표현에 대한 피드백</strong> 제공</li>
  <li><strong>흥미·적성에 부합</strong>하는 정보 제공</li>
  <li>★ <strong>전문용어 삼가</strong> (이용자 눈높이에 맞추기)</li>
  <li>★ <strong>개발연도 명시</strong> (정보의 최신성 판단 근거)</li>
</ul>
<p>★ <strong>암기법:</strong> "진자다태흥전개" (진로발달단계, 자발적 의사, 다양한 정보, 태도 피드백, 흥미적성 부합, 전문용어 삼가, 개발연도 명시)</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"전문용어를 많이 사용하여 전문성을 보여준다" → <strong>틀림!</strong> 전문용어는 삼가야 합니다.</li>
  <li>"개발연도는 중요하지 않다" → <strong>틀림!</strong> 반드시 개발연도를 명시해야 합니다.</li>
</ul>
</div>`
      },
      {
        title: '워크넷 용어',
        content: `<div class="exam-important">
<h4>워크넷 주요 용어</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>신규구인인원</strong></td><td>해당 기간 동안 새롭게 접수된 <strong>구인 건수</strong> (기업이 사람을 구하는 것)</td></tr>
  <tr><td><strong>신규구직건수</strong></td><td>해당 기간 동안 새롭게 접수된 <strong>구직 신청 건수</strong> (구직자가 일자리를 구하는 것)</td></tr>
  <tr><td><strong>취업건수</strong></td><td>구직 등록 후 실제로 <strong>취업한 건수</strong></td></tr>
  <tr><td><strong>취업률</strong></td><td>계산 공식에 의한 취업 성공 비율</td></tr>
</table>
<h4>취업률 계산공식</h4>
<p style="text-align:center;font-size:1.1em;"><strong>취업률 = (취업건수 / 신규구직건수) x 100</strong></p>
<p>★ <strong>핵심:</strong> 취업률의 분모는 <strong>신규구직건수</strong>입니다 (신규구인인원이 아님!).</p>
<p>※ <strong>출제 함정:</strong> "취업률 = 취업건수 / 신규구인인원" → <strong>틀림!</strong> 분모는 신규<strong>구직</strong>건수입니다.</p>
</div>`
      },
      {
        title: '워크넷 유의사항',
        content: `<div class="exam-important">
<h4>워크넷 통계 이용 시 유의사항</h4>
<ul>
  <li><strong>입력 기관:</strong> 전국 고용센터 + 한국산업관리공단 + 시·군·구에서 입력한 데이터가 워크넷 DB에 집계</li>
  <li>★ <strong>워크넷 이용자만 대상:</strong> 워크넷을 통한 구인·구직만 집계되므로 <strong>전체 노동시장과 불일치</strong> 가능</li>
  <li>★ <strong>2006년 8월:</strong> 명칭 변경됨</li>
</ul>
<p>★ <strong>핵심 포인트:</strong></p>
<ul>
  <li>워크넷 통계 = 워크넷 이용자만 대상이므로 <strong>전체 노동시장을 대표하지 않음</strong></li>
  <li>여러 기관에서 입력한 데이터가 워크넷 DB에 통합 집계</li>
</ul>
<p>※ <strong>출제 함정:</strong> "워크넷 통계는 전체 노동시장의 현황을 정확히 반영한다" → <strong>틀림!</strong> 워크넷 이용자만 대상이므로 전체 노동시장과 불일치할 수 있습니다.</p>
</div>`
      },
      {
        title: '취업자 정의',
        content: `<div class="exam-important">
<h4>취업자의 정의</h4>
<h4>취업자에 해당하는 경우</h4>
<table>
  <tr><th>유형</th><th>기준</th></tr>
  <tr><td><strong>수입목적 근로자</strong></td><td>수입을 목적으로 ★ <strong>1시간 이상</strong> 일한 자</td></tr>
  <tr><td><strong>무급가족종사자</strong></td><td>가족 농장·사업체에서 ★ 주당 <strong>18시간 이상</strong> 근무</td></tr>
  <tr><td><strong>일시휴직자</strong></td><td>병·사고·연가·교육·노사분규 등으로 일시 휴직 중인 자</td></tr>
</table>
<h4>고용통계 기본 구조</h4>
<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;margin:10px auto;display:block;">
  <rect x="10" y="10" width="580" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">15세 이상 인구</text>
  <rect x="10" y="65" width="350" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="185" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">경제활동인구 (취업자 + 실업자)</text>
  <rect x="380" y="65" width="210" height="40" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="485" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">비경제활동인구</text>
  <text x="300" y="135" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">★ 15세 이상 인구 = 경제활동인구 + 비경제활동인구</text>
</svg>
<p>★ <strong>핵심 숫자:</strong></p>
<ul>
  <li>수입목적: <strong>1시간 이상</strong></li>
  <li>무급가족종사자: 주당 <strong>18시간 이상</strong></li>
  <li>기준 연령: <strong>15세 이상</strong></li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"무급가족종사자는 주당 15시간 이상이면 취업자이다" → <strong>틀림!</strong> 18시간 이상입니다.</li>
  <li>"일시휴직자는 실업자로 분류한다" → <strong>틀림!</strong> 일시휴직자도 취업자에 해당합니다.</li>
</ul>
</div>`
      },
      {
        title: 'Andrus 평가기준',
        content: `<div class="exam-important">
<h4>Andrus의 직업정보 평가기준</h4>
<h4>일반적 평가기준 (5W 방식)</h4>
<table>
  <tr><th>기준</th><th>평가 내용</th></tr>
  <tr><td><strong>언제 (When)</strong></td><td>정보가 언제 작성되었는가</td></tr>
  <tr><td><strong>어디서 (Where)</strong></td><td>정보가 어디서 생산되었는가</td></tr>
  <tr><td><strong>누가 (Who)</strong></td><td>누가 정보를 작성하였는가</td></tr>
  <tr><td><strong>어떤 목적 (Why)</strong></td><td>어떤 목적으로 작성되었는가</td></tr>
  <tr><td><strong>어떤 방식 (How)</strong></td><td>어떤 방식으로 수집·작성되었는가</td></tr>
</table>
<p>★ <strong>주의:</strong> 일반적 평가기준에 <strong>"가격"은 포함되지 않음!</strong></p>
<h4>효용의 관점 (4가지)</h4>
<table>
  <tr><th>효용</th><th>내용</th></tr>
  <tr><td><strong>형태효용 (Form)</strong></td><td>정보의 형태가 적절한가</td></tr>
  <tr><td><strong>시간효용 (Time)</strong></td><td>시의적절하게 제공되는가</td></tr>
  <tr><td><strong>장소효용 (Place)</strong></td><td>적절한 장소에서 제공되는가</td></tr>
  <tr><td><strong>소유효용 (Possession)</strong></td><td>필요한 사람이 소유할 수 있는가</td></tr>
</table>
<p>★ <strong>주의:</strong> 효용의 관점에 <strong>"가격효용"은 포함되지 않음!</strong></p>
<p>★ <strong>암기법 (일반적 기준):</strong> "언어누목방" (언제, 어디서, 누가, 목적, 방식) - 가격 X</p>
<p>★ <strong>암기법 (효용):</strong> "형시장소" (형태, 시간, 장소, 소유) - 가격효용 X</p>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"일반적 평가기준에 가격이 포함된다" → <strong>틀림!</strong></li>
  <li>"가격효용도 효용의 관점에 포함된다" → <strong>틀림!</strong></li>
  <li>★ 두 기준 모두에서 <strong>"가격"이 빠진다</strong>는 것이 핵심 출제 포인트입니다!</li>
</ul>
</div>`
      },
      {
        title: '질문문항 순서 배치 원칙',
        content: `<div class="exam-important">
<h4>설문조사 질문문항 순서 배치 원칙</h4>
<h4>전반부에 배치</h4>
<table>
  <tr><th>문항 유형</th><th>배치 위치</th><th>이유</th></tr>
  <tr><td><strong>답변 용이한 질문</strong></td><td>★ <strong>전반부</strong></td><td>응답 부담 낮추기</td></tr>
  <tr><td><strong>계속 기억 필요한 질문</strong></td><td>★ <strong>전반부</strong></td><td>피로 전에 정확한 응답 확보</td></tr>
</table>
<h4>후반부에 배치</h4>
<table>
  <tr><th>문항 유형</th><th>배치 위치</th><th>이유</th></tr>
  <tr><td><strong>민감한 질문</strong></td><td>★ <strong>후반부</strong></td><td>라포 형성 후 답변 유도</td></tr>
  <tr><td><strong>개방형 질문</strong></td><td>★ <strong>후반부</strong></td><td>자유로운 서술은 후반에</td></tr>
</table>
<h4>기타 배치 원칙</h4>
<ul>
  <li><strong>논리적 순서</strong>를 따를 것</li>
  <li><strong>신뢰도 질문</strong>은 분리 배치 (같은 내용 질문을 떨어뜨려 배치)</li>
  <li><strong>동일 척도</strong>의 문항은 모아서 배치</li>
  <li><strong>길이·유형</strong>에 변화를 주어 단조로움 방지</li>
  <li><strong>여과질문</strong>을 적절히 배치 (해당 없는 응답자 거르기)</li>
  <li>★ <strong>특별한 질문</strong>은 일반 질문 <strong>뒤에</strong> 배치 (앞에 X)</li>
</ul>
<p>★ <strong>핵심 정리:</strong></p>
<ul>
  <li>전반부: 쉬운 질문, 기억 필요 질문</li>
  <li>후반부: 민감한 질문, 개방형 질문, 특별한 질문</li>
</ul>
<p>※ <strong>출제 함정:</strong></p>
<ul>
  <li>"민감한 질문은 전반부에 배치한다" → <strong>틀림!</strong> 후반부입니다.</li>
  <li>"특별한 질문을 일반 질문 앞에 배치한다" → <strong>틀림!</strong> 일반 질문 <strong>뒤에</strong> 배치합니다.</li>
  <li>"개방형 질문은 전반부에 배치한다" → <strong>틀림!</strong> 후반부입니다.</li>
</ul>
</div>`
      }
    ]
  }
    ]
  },

  labor_market: {
    name: '노동시장론',
    code: 'labor_market',
    color: '#F59E0B',
    icon: 'fa-solid fa-chart-line',
    description: '노동시장 이론, 임금, 실업, 인적자본을 학습합니다.',
    chapters: [
      {
        title: '노동시장 기초',
        topics: [
          {
            title: '노동공급과 노동수요',
            content: `<h4>노동공급</h4>
<p>개인이 시장에 제공하려는 노동의 양으로, 임금률과 여가의 기회비용에 의해 결정됩니다.</p>
<ul>
  <li><strong>대체효과:</strong> 임금 상승 → 여가의 기회비용 증가 → 노동공급 증가</li>
  <li><strong>소득효과:</strong> 임금 상승 → 소득 증가 → 여가 수요 증가 → 노동공급 감소</li>
  <li><strong>후방굴절 노동공급곡선:</strong> 일정 임금 수준 이후 소득효과 > 대체효과</li>
</ul>
<h4>노동수요</h4>
<p>기업이 고용하려는 노동의 양으로, 노동의 한계생산물가치에 의해 결정됩니다.</p>
<ul>
  <li><strong>노동의 한계생산물(MPL):</strong> 노동 1단위 추가 투입 시 추가되는 생산량</li>
  <li><strong>한계생산물가치(VMPL):</strong> MPL × 생산물 가격(P)</li>
  <li><strong>한계수입생산(MRPL):</strong> MPL × 한계수입(MR)</li>
  <li>이윤극대화 조건: MRPL = 임금(W)</li>
  <li><strong>파생수요:</strong> 노동수요는 생산물 수요에서 파생됨</li>
</ul>
<h4>균형임금</h4>
<p>노동공급곡선과 노동수요곡선이 교차하는 점에서 균형임금과 균형고용량이 결정됩니다.</p>`
          },
          {
            title: '노동시장의 유형',
            content: `<h4>노동시장 구조별 유형</h4>
<table>
  <tr><th>시장 유형</th><th>노동수요</th><th>노동공급</th><th>임금 결정</th></tr>
  <tr><td><strong>완전경쟁</strong></td><td>다수 기업</td><td>다수 근로자</td><td>시장에서 결정 (W=VMPL=MRPL)</td></tr>
  <tr><td><strong>수요독점</strong></td><td>1개 기업</td><td>다수 근로자</td><td>기업이 결정 (W < MRPL, 착취 발생)</td></tr>
  <tr><td><strong>공급독점(노조)</strong></td><td>다수 기업</td><td>노조 독점</td><td>노조가 결정 (W > 경쟁임금)</td></tr>
  <tr><td><strong>쌍방독점</strong></td><td>수요독점</td><td>공급독점</td><td>협상으로 결정 (불확정적)</td></tr>
</table>
<h4>수요독점 (Monopsony) 상세</h4>
<ul>
  <li>노동의 한계비용(MLC) > 평균비용(임금) → <strong>MLC 곡선이 노동공급곡선 위</strong>에 위치</li>
  <li>이윤극대화: MRPL = MLC인 점에서 고용량 결정</li>
  <li>임금은 해당 고용량에 대응하는 노동공급곡선상의 점 → <strong>MRPL보다 낮은 임금</strong></li>
  <li><strong>착취:</strong> W < MRPL (노동의 한계생산가치보다 낮은 임금 지급)</li>
  <li>최저임금제 도입 시 오히려 <strong>고용이 증가</strong>할 수 있음 (경쟁시장과 차이)</li>
</ul>
<h4>노동조합의 임금 효과</h4>
<ul>
  <li><strong>임금 인상 방법:</strong>
    <ul>
      <li>노동공급 제한 (면허제, 자격요건 강화) → 공급곡선 좌측 이동</li>
      <li>노동수요 증가 유도 (생산성 향상, 정치적 로비) → 수요곡선 우측 이동</li>
      <li>단체교섭으로 최저임금 직접 설정</li>
    </ul>
  </li>
  <li><strong>노조의 임금 프리미엄:</strong> 노조 부문이 비노조 부문보다 10~25% 높은 임금</li>
</ul>`
          }
        ]
      },
      {
        title: '임금이론',
        topics: [
          {
            title: '한계생산성 이론과 임금격차',
            content: `<h4>한계생산성 임금이론</h4>
<p>완전경쟁 노동시장에서 노동의 가격(임금)은 노동의 한계생산물가치(VMPL)에 의해 결정됩니다.</p>
<ul>
  <li>기업은 VMPL = W인 점까지 노동을 고용</li>
  <li>노동수요곡선 = VMPL 곡선 (우하향)</li>
</ul>
<h4>보상적 임금격차</h4>
<p>동질적 노동자 간에도 직업의 비금전적 특성 차이로 인해 임금격차가 발생합니다.</p>
<ul>
  <li>위험한 직업 → 높은 임금 (위험 프리미엄)</li>
  <li>열악한 근무환경 → 보상적 높은 임금</li>
  <li>애덤 스미스(Adam Smith)가 최초 제시</li>
</ul>
<h4>효율임금 이론</h4>
<p>기업이 시장균형 임금보다 높은 임금을 자발적으로 지급하는 이론입니다.</p>
<ul>
  <li>높은 임금 → 이직률 감소, 사기 진작</li>
  <li>역선택 방지: 우수 인재 유치</li>
  <li>도덕적 해이 방지: 태만 감소 (셔플리 모형)</li>
</ul>`
          },
          {
            title: '임금격차와 차별이론',
            content: `<h4>임금격차의 원인</h4>
<ul>
  <li><strong>보상적 임금격차:</strong> 비금전적 직업 특성(위험, 환경)에 따른 차이 (애덤 스미스)</li>
  <li><strong>인적자본 차이:</strong> 교육, 훈련, 경험의 차이</li>
  <li><strong>노동시장 분단:</strong> 1차/2차 시장 간 이동 제한</li>
  <li><strong>차별:</strong> 동일한 생산성에도 불구하고 특성(성별, 인종)에 따른 임금 차이</li>
</ul>
<h4>노동시장 차별이론</h4>
<table>
  <tr><th>이론</th><th>학자</th><th>내용</th></tr>
  <tr><td><strong>개인적 편견 모형</strong></td><td>베커(Becker)</td><td>차별은 고용주/근로자/고객의 편견(taste)에서 비롯. 차별계수(d)만큼 추가 비용 인식</td></tr>
  <tr><td><strong>통계적 차별</strong></td><td>Phelps, Arrow</td><td>개인 정보 부족 → 집단의 평균적 특성으로 판단 (예: 여성의 이직률이 높다는 통계에 기반한 차별)</td></tr>
  <tr><td><strong>이중노동시장론</strong></td><td>Doeringer, Piore</td><td>1차(고임금, 안정)/2차(저임금, 불안정) 시장 간 구조적 장벽</td></tr>
  <tr><td><strong>직업분리</strong></td><td>Bergmann</td><td>특정 집단이 특정 직종에 밀집(과밀효과) → 해당 직종 임금 하락</td></tr>
</table>
<h4>남녀 임금격차 관련</h4>
<ul>
  <li><strong>동일노동 동일임금 원칙:</strong> 같은 직무에 대해 성별에 관계없이 동일 임금 지급</li>
  <li><strong>동일가치노동 동일임금:</strong> 다른 직무라도 동등한 가치의 노동이면 동일 임금</li>
  <li>오악사카(Oaxaca) 분해법: 임금격차를 생산성 차이와 차별로 분해하는 통계 기법</li>
</ul>`
          }
        ]
      },
      {
        title: '실업이론',
        topics: [
          {
            title: '실업의 유형과 측정',
            content: `<h4>실업의 유형</h4>
<ul>
  <li><strong>마찰적 실업:</strong> 직업 탐색 과정에서 발생하는 일시적 실업 (자발적)</li>
  <li><strong>구조적 실업:</strong> 산업구조 변화, 기술변화로 인한 노동력 수요-공급 불일치</li>
  <li><strong>경기적(순환적) 실업:</strong> 경기침체로 인한 총수요 부족</li>
  <li><strong>계절적 실업:</strong> 계절적 요인에 따른 노동수요 변동</li>
</ul>
<h4>실업률 계산</h4>
<div class="formula-box">
  <p><strong>실업률 = (실업자 수 / 경제활동인구) × 100</strong></p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>경제활동참가율 = (경제활동인구 / 15세 이상 인구) × 100</p>
  <p>고용률 = (취업자 / 15세 이상 인구) × 100</p>
</div>
<h4>자연실업률</h4>
<ul>
  <li>마찰적 실업 + 구조적 실업으로 구성</li>
  <li>완전고용 상태에서도 존재하는 실업률</li>
  <li>인플레이션을 가속시키지 않는 실업률 (NAIRU)</li>
</ul>
<h4>실업 대책</h4>
<ul>
  <li>마찰적 실업: 직업정보 제공, 직업소개 활성화</li>
  <li>구조적 실업: 직업훈련, 재교육</li>
  <li>경기적 실업: 재정정책, 통화정책으로 총수요 확대</li>
</ul>`
          },
          {
            title: '필립스곡선과 오쿤의 법칙',
            content: `<h4>필립스곡선 (Phillips Curve)</h4>
<p>영국의 경제학자 필립스(A.W. Phillips)가 발견한 <strong>임금상승률(물가상승률)과 실업률 간의 역(-)의 관계</strong>입니다.</p>
<h4>단기 필립스곡선</h4>
<ul>
  <li>실업률↓ → 물가상승률(인플레이션)↑ (역의 관계)</li>
  <li>실업률↑ → 물가상승률↓</li>
  <li>★ 정부는 실업과 인플레이션 사이에서 <strong>상충관계(trade-off)</strong>에 직면</li>
</ul>
<h4>장기 필립스곡선 (프리드먼-펠프스)</h4>
<ul>
  <li>장기적으로 필립스곡선은 자연실업률 수준에서 <strong>수직</strong></li>
  <li>기대인플레이션이 조정되면 실업률은 자연실업률로 회귀</li>
  <li>자연실업률 = <strong>NAIRU</strong> (Non-Accelerating Inflation Rate of Unemployment)</li>
  <li>장기적으로 실업률-인플레이션 상충관계 없음</li>
</ul>
<h4>스태그플레이션 (Stagflation)</h4>
<p>경기침체(높은 실업률)와 물가상승(인플레이션)이 <strong>동시</strong>에 발생하는 현상 (1970년대 석유파동)</p>
<h4>오쿤의 법칙 (Okun's Law)</h4>
<div class="formula-box">
  <p><strong>실업률이 자연실업률보다 1%p 높으면, 실질GDP가 잠재GDP보다 약 2~3% 낮다</strong></p>
  <p>(실질GDP - 잠재GDP) / 잠재GDP ≈ -2 × (실업률 - 자연실업률)</p>
</div>
<ul>
  <li>오쿤 계수: 약 2~3 (국가와 시기에 따라 다름)</li>
  <li>실업의 경제적 비용을 수량화하는 데 활용</li>
</ul>
<h4>베버리지 곡선 (Beveridge Curve)</h4>
<p><strong>실업률과 빈일자리율(구인율)</strong> 간의 역(-)의 관계를 나타내는 곡선</p>
<ul>
  <li>곡선이 원점에서 멀어지면 → 노동시장의 <strong>매칭 효율성 악화</strong> (구조적 실업 증가)</li>
  <li>곡선 위 이동: 경기침체 (실업↑, 빈일자리↓)</li>
  <li>곡선 아래 이동: 경기회복 (실업↓, 빈일자리↑)</li>
</ul>`
          }
        ]
      },
      {
        title: '인적자본론',
        topics: [
          {
            title: '인적자본과 노동이동',
            content: `<h4>인적자본론 (Human Capital Theory)</h4>
<p>슐츠(T.W. Schultz)와 베커(G.S. Becker)가 발전시킨 이론으로, 교육/훈련을 투자로 봅니다.</p>
<h4>교육 투자의 분석</h4>
<ul>
  <li><strong>교육의 수익률:</strong> 교육 투자로 인한 미래 소득 증가분의 현재가치</li>
  <li><strong>직접비용:</strong> 학비, 교재비 등</li>
  <li><strong>간접비용(기회비용):</strong> 교육 기간 동안 포기한 소득</li>
  <li><strong>내부수익률법:</strong> 순현재가치 = 0이 되는 할인율</li>
</ul>
<h4>일반훈련 vs 특수훈련</h4>
<ul>
  <li><strong>일반훈련:</strong> 모든 기업에 적용 가능 → 근로자 부담</li>
  <li><strong>특수훈련:</strong> 해당 기업에서만 유용 → 기업 부담 (또는 분담)</li>
</ul>
<h4>노동이동</h4>
<ul>
  <li><strong>자발적 이동:</strong> 더 나은 기회를 위한 이직</li>
  <li><strong>비자발적 이동:</strong> 해고, 정리해고</li>
  <li>이동 결정 요인: 임금격차, 이동비용, 연령, 심리적 비용</li>
</ul>
<h4>이중노동시장론</h4>
<ul>
  <li><strong>1차 노동시장:</strong> 고임금, 고용안정, 승진기회, 양호한 근로조건</li>
  <li><strong>2차 노동시장:</strong> 저임금, 고용불안, 승진제한, 열악한 근로조건</li>
  <li>시장 간 이동이 제한적 (비경쟁 집단)</li>
</ul>`
          }
        ]
      }
    ,
      // ========================================
  // Chapter 1: 시험 핵심키워드 - 임금의 제개념
  // ========================================
  {
    title: '시험 핵심키워드 - 임금의 제개념',
    topics: [
      {
        title: '최저임금제도',
        content: `<div class="exam-important">
<h4>★ 최저임금제도 핵심정리</h4>

<h4>1. 기대효과 (긍정적)</h4>
<ul>
  <li><strong>소득분배 개선:</strong> 저임금 근로자의 소득 보장</li>
  <li><strong>노동력 질적 향상:</strong> 적정 임금 보장으로 근로의욕 고취</li>
  <li><strong>기업 근대화 / 산업구조 고도화:</strong> 저임금에 의존하는 기업의 체질 개선 유도</li>
  <li><strong>공정경쟁 확보:</strong> 임금 덤핑 방지로 기업 간 공정한 경쟁 환경 조성</li>
  <li><strong>산업평화 유지:</strong> 노사 간 임금 분쟁 감소</li>
  <li><strong>유효수요 창출(경기활성화):</strong> 저소득층 소비 증가 → 내수 활성화</li>
  <li><strong>복지국가 실현:</strong> 사회 안전망 강화의 일환</li>
</ul>
<p>※ <strong>암기법:</strong> "소노기공산유복" (소득-노동력-기업-공정-산업-유효-복지)</p>

<h4>2. 부정적 효과</h4>
<ul>
  <li><strong>고용감소 / 실업증가:</strong> 인건비 부담 → 기업이 고용 축소</li>
  <li><strong>노동시장 내 차별:</strong> 청소년, 고령자 등 취약계층 고용 기피</li>
  <li><strong>지역/업종 간 왜곡:</strong> 지역별, 업종별 임금 수준 차이 무시</li>
  <li><strong>소득분배 역진적 효과:</strong> 실직으로 오히려 소득 감소 가능</li>
  <li><strong>노동력 질적 저하 / 생산성 저하:</strong> 능력과 무관한 일률적 임금</li>
</ul>

<h4>3. 최저임금제의 고용 효과</h4>
<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" style="max-width:500px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <defs>
    <marker id="arrow1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
  </defs>
  <text x="250" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">최저임금제 고용효과 (완전경쟁시장)</text>
  <!-- axes -->
  <line x1="80" y1="300" x2="450" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrow1)"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrow1)"/>
  <text x="460" y="305" font-size="12" fill="#333">고용량(L)</text>
  <text x="50" y="35" font-size="12" fill="#333">임금(W)</text>
  <!-- Supply curve (upward) -->
  <line x1="120" y1="270" x2="400" y2="90" stroke="#2563EB" stroke-width="2.5"/>
  <text x="405" y="85" font-size="12" fill="#2563EB" font-weight="bold">S(노동공급)</text>
  <!-- Demand curve (downward) -->
  <line x1="120" y1="90" x2="400" y2="270" stroke="#DC2626" stroke-width="2.5"/>
  <text x="405" y="275" font-size="12" fill="#DC2626" font-weight="bold">D(노동수요)</text>
  <!-- Equilibrium -->
  <circle cx="260" cy="180" r="4" fill="#333"/>
  <text x="265" y="175" font-size="11" fill="#333">E(균형점)</text>
  <!-- W0, L0 -->
  <line x1="80" y1="180" x2="260" y2="180" stroke="#999" stroke-dasharray="4"/>
  <text x="55" y="184" font-size="11" fill="#333">W0</text>
  <line x1="260" y1="180" x2="260" y2="300" stroke="#999" stroke-dasharray="4"/>
  <text x="255" y="315" font-size="11" fill="#333">L0</text>
  <!-- Minimum wage line WN -->
  <line x1="80" y1="140" x2="420" y2="140" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="425" y="144" font-size="11" fill="#F59E0B" font-weight="bold">WN(최저임금)</text>
  <text x="55" y="144" font-size="11" fill="#F59E0B">WN</text>
  <!-- L1 (demand at WN) -->
  <line x1="220" y1="140" x2="220" y2="300" stroke="#DC2626" stroke-dasharray="4"/>
  <text x="215" y="315" font-size="11" fill="#DC2626">L1</text>
  <!-- L2 (supply at WN) -->
  <line x1="300" y1="140" x2="300" y2="300" stroke="#2563EB" stroke-dasharray="4"/>
  <text x="295" y="315" font-size="11" fill="#2563EB">L2</text>
  <!-- Unemployment bracket -->
  <line x1="220" y1="130" x2="300" y2="130" stroke="#EF4444" stroke-width="2"/>
  <line x1="220" y1="125" x2="220" y2="135" stroke="#EF4444" stroke-width="2"/>
  <line x1="300" y1="125" x2="300" y2="135" stroke="#EF4444" stroke-width="2"/>
  <text x="235" y="122" font-size="11" fill="#EF4444" font-weight="bold">실업(L2-L1)</text>
  <!-- Job loss bracket -->
  <line x1="220" y1="290" x2="260" y2="290" stroke="#9333EA" stroke-width="2"/>
  <line x1="220" y1="285" x2="220" y2="295" stroke="#9333EA" stroke-width="2"/>
  <line x1="260" y1="285" x2="260" y2="295" stroke="#9333EA" stroke-width="2"/>
  <text x="222" y="282" font-size="10" fill="#9333EA">일자리상실</text>
</svg>

<table>
  <tr><th>구분</th><th>탄력적 노동수요곡선</th><th>탄력적 노동공급곡선</th></tr>
  <tr><td><strong>효과</strong></td><td>L0→L1 일자리 상실 (고용감소 큼)</td><td>임금 W0→WN 하락, 차별 경험</td></tr>
  <tr><td><strong>핵심</strong></td><td>수요곡선이 탄력적일수록 고용감소 큼</td><td>공급곡선이 탄력적일수록 임금하락 큼</td></tr>
</table>

<p style="color:#DC2626;font-weight:bold">※ 출제 함정 주의: "최저임금제가 청소년 취업을 촉진한다" → (X) 오히려 청소년 고용 감소 효과!</p>
<p>★ <strong>시험 포인트:</strong> 수요독점시장에서는 최저임금제 도입 시 오히려 고용이 증가할 수 있음 (완전경쟁시장과 반대)</p>
</div>`
      },
      {
        title: '보상적 임금격차',
        content: `<div class="exam-important">
<h4>★ 보상적 임금격차 (균등화 임금격차)</h4>
<p>동질적인 노동자 간에도 직업의 비금전적 특성 차이로 인해 발생하는 임금격차. <strong>균등화 임금격차</strong>라고도 함 (애덤 스미스 최초 제시)</p>

<h4>보상적 임금격차의 발생 요인</h4>
<table>
  <tr><th>요인</th><th>내용</th><th>예시</th></tr>
  <tr><td><strong>고용 안정성 (금전적 위험)</strong></td><td>실직 위험이 높은 직업일수록 높은 임금</td><td>건설 일용직, 비정규직</td></tr>
  <tr><td><strong>작업 쾌적함 (비금전적 차이)</strong></td><td>작업환경이 열악할수록 높은 임금</td><td>광산, 유해물질 취급</td></tr>
  <tr><td><strong>교육훈련 비용</strong></td><td>인적자본 투자비용이 클수록 높은 임금</td><td>의사, 변호사</td></tr>
  <tr><td><strong>책임 정도</strong></td><td>직무 책임이 클수록 높은 임금</td><td>경영진, 기장</td></tr>
  <tr><td><strong>성공/실패 가능성</strong></td><td>성공 확률이 낮은 직업일수록 높은 보상</td><td>연예인, 프로운동선수</td></tr>
</table>
<p>※ <strong>암기법:</strong> "고작교책성" (고용-작업-교육-책임-성공)</p>

<h4>★ 고임금 → 고생산성의 원인 (효율임금 이론 연계)</h4>
<ul>
  <li><strong>충성심/귀속감 증대:</strong> 높은 임금에 대한 보답 심리 → 생산성 향상</li>
  <li><strong>직장상실 비용 증대 → 태만 방지:</strong> 해고 시 잃을 것이 큼 → 성실 근무 (셔플리 모형)</li>
  <li><strong>사직 감소 → 채용/훈련비 절감:</strong> 이직률 저하로 인건비 절약</li>
  <li><strong>대규모 사업장 유도:</strong> 규모의 경제 실현 가능</li>
  <li><strong>양질 노동자 고용:</strong> 역선택 방지, 우수 인력 유치 (인재풀 확대)</li>
</ul>
<p>※ <strong>암기법:</strong> "충직사대양" (충성심-직장상실-사직감소-대규모-양질)</p>

<p>★ <strong>시험 포인트:</strong> 보상적 임금격차는 비금전적 특성에 대한 보상이므로, 실질적으로 순편익(net advantage)은 균등화됨</p>
</div>`
      },
      {
        title: '임금체계 (연공급/직능급/직무급)',
        content: `<div class="exam-important">
<h4>★ 3대 임금체계 비교</h4>

<svg viewBox="0 0 550 280" xmlns="http://www.w3.org/2000/svg" style="max-width:550px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <text x="275" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">임금체계 비교도</text>
  <!-- 연공급 box -->
  <rect x="20" y="50" width="160" height="210" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
  <text x="100" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#3B82F6">연공급</text>
  <text x="100" y="95" text-anchor="middle" font-size="10" fill="#555">기준: 근속연수</text>
  <text x="100" y="110" text-anchor="middle" font-size="10" fill="#555">= 속인급(屬人給)</text>
  <line x1="40" y1="120" x2="160" y2="120" stroke="#CBD5E1" stroke-width="1"/>
  <text x="30" y="138" font-size="9" fill="#333">장: 위계질서, 생활안정</text>
  <text x="30" y="153" font-size="9" fill="#333">   귀속의식, 장기고용</text>
  <text x="30" y="168" font-size="9" fill="#333">   교육훈련효과</text>
  <text x="30" y="183" font-size="9" fill="#333">   배치전환 유리</text>
  <line x1="40" y1="193" x2="160" y2="193" stroke="#CBD5E1" stroke-width="1"/>
  <text x="30" y="211" font-size="9" fill="#DC2626">단: 동일직무동일지급불가</text>
  <text x="30" y="226" font-size="9" fill="#DC2626">   무사안일, 경직적</text>
  <text x="30" y="241" font-size="9" fill="#DC2626">   전문인력확보 어려움</text>
  <!-- 직능급 box -->
  <rect x="195" y="50" width="160" height="210" rx="10" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
  <text x="275" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#16A34A">직능급</text>
  <text x="275" y="95" text-anchor="middle" font-size="10" fill="#555">기준: 직무수행능력</text>
  <text x="275" y="110" text-anchor="middle" font-size="10" fill="#555">동일능력 동일임금</text>
  <line x1="215" y1="120" x2="335" y2="120" stroke="#CBD5E1" stroke-width="1"/>
  <text x="205" y="138" font-size="9" fill="#333">장: 자기계발 동기유발</text>
  <text x="205" y="153" font-size="9" fill="#333">   보상 개별화</text>
  <text x="205" y="168" font-size="9" fill="#333">   노사공동체 의식</text>
  <text x="205" y="183" font-size="9" fill="#333">   생산직 불만 감소</text>
  <line x1="215" y1="193" x2="335" y2="193" stroke="#CBD5E1" stroke-width="1"/>
  <text x="205" y="211" font-size="9" fill="#DC2626">단: 평가 어려움</text>
  <text x="205" y="226" font-size="9" fill="#DC2626">   연공본위 우려</text>
  <text x="205" y="241" font-size="9" fill="#DC2626">   50세 이후 부적절</text>
  <!-- 직무급 box -->
  <rect x="370" y="50" width="160" height="210" rx="10" fill="#FFF7ED" stroke="#EA580C" stroke-width="2"/>
  <text x="450" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#EA580C">직무급</text>
  <text x="450" y="95" text-anchor="middle" font-size="10" fill="#555">기준: 노동의 양+질</text>
  <text x="450" y="110" text-anchor="middle" font-size="10" fill="#555">동일직무 동일임금</text>
  <line x1="390" y1="120" x2="510" y2="120" stroke="#CBD5E1" stroke-width="1"/>
  <text x="380" y="138" font-size="9" fill="#333">장: 임금배분 공평</text>
  <text x="380" y="153" font-size="9" fill="#333">   직무가치 객관화</text>
  <text x="380" y="168" font-size="9" fill="#333">   적재적소 배치</text>
  <text x="380" y="183" font-size="9" fill="#333">   노무비상승 방지</text>
  <line x1="390" y1="193" x2="510" y2="193" stroke="#CBD5E1" stroke-width="1"/>
  <text x="380" y="211" font-size="9" fill="#DC2626">단: 주관 개입 우려</text>
  <text x="380" y="226" font-size="9" fill="#DC2626">   기술변화 시 변경</text>
  <text x="380" y="241" font-size="9" fill="#DC2626">   유연성 저하</text>
</svg>

<h4>연공급 (年功給)</h4>
<ul>
  <li><strong>기준:</strong> 근속연수 (속인급)</li>
  <li><strong>특징:</strong> 보수적 기업에 적합, 연공서열 중시</li>
  <li><strong>장점:</strong> 위계질서 확립, 생활안정, 귀속의식 증대, 장기고용 촉진, 교육훈련 효과 극대화, 배치전환 유리</li>
  <li><strong>단점:</strong> 동일직무 동일지급 불가, 무사안일 조장, 경직적 임금인상 부담, 전문인력 확보 어려움</li>
</ul>

<h4>직능급 (職能給)</h4>
<ul>
  <li><strong>기준:</strong> 직무수행능력 → 동일능력 동일임금</li>
  <li><strong>장점:</strong> 자기계발 동기유발, 보상 개별화, 노사공동체 의식, 생산직 불만 감소</li>
  <li><strong>단점:</strong> 능력 평가 어려움, 연공본위 우려, 직종 간 차이, <strong>50세 이후 부적절</strong></li>
</ul>

<h4>직무급 (職務給)</h4>
<ul>
  <li><strong>기준:</strong> 노동의 양 + 질을 평가 → 동일직무 동일임금</li>
  <li><strong>장점:</strong> 임금배분 공평, 직무가치 객관화, 합리화, 적재적소 배치, 능력위주 인사, 노무비 상승 방지</li>
  <li><strong>단점:</strong> 주관 개입 우려, 기술변화 시 재평가 필요, 적정배치 어려움, 유연성 저하</li>
</ul>

<h4>★ 직무급의 전제조건</h4>
<ul>
  <li>객관적 직무평가가 선행되어야 함</li>
  <li>합리적 채용/평가 제도 확립</li>
  <li>고용 유동성 보장</li>
  <li>합리적 의식 (노사 모두)</li>
</ul>
<p>※ <strong>암기법:</strong> "객합고합" (객관적 평가-합리적 제도-고용유동-합리적 의식)</p>

<p>★ <strong>시험 포인트:</strong> 연공급=속인급=근속연수, 직능급=능력, 직무급=직무가치 → 이 대응 관계를 정확히 구분!</p>
</div>`
      },
      {
        title: '평균임금과 통상임금',
        content: `<div class="exam-important">
<h4>★ 평균임금 vs 통상임금 비교 (최빈출!)</h4>

<table>
  <tr><th>구분</th><th>평균임금</th><th>통상임금</th></tr>
  <tr><td><strong>산정방법</strong></td><td>직전 3개월 임금총액 / 총일수</td><td>정기적 / 일률적으로 지급하기로 정한 임금</td></tr>
  <tr><td><strong>성격</strong></td><td>사후적 (실제 지급액 기준)</td><td>사전적 (정해진 금액 기준)</td></tr>
  <tr>
    <td><strong>적용 항목</strong></td>
    <td>
      퇴직금<br/>
      휴업수당<br/>
      연차유급휴가수당<br/>
      재해보상<br/>
      산업재해보상<br/>
      감급 제한액<br/>
      <strong>구직급여(실업급여)</strong>
    </td>
    <td>
      해고예고수당<br/>
      연장/야간/휴일 근로수당<br/>
      연차유급휴가수당<br/>
      출산전후 휴가급여
    </td>
  </tr>
</table>

<p style="color:#2563EB;font-weight:bold">※ 연차유급휴가수당은 평균임금과 통상임금 모두 적용 (둘 중 높은 금액)</p>

<h4>명목임금 vs 실질임금</h4>
<table>
  <tr><th>구분</th><th>명목임금</th><th>실질임금</th></tr>
  <tr><td><strong>정의</strong></td><td>화폐액으로 표시된 임금</td><td>물가 효과를 제거한 임금</td></tr>
  <tr><td><strong>특징</strong></td><td>물가상승률 고려 안 함</td><td>구매력 평가 가능</td></tr>
  <tr><td><strong>산식</strong></td><td>-</td><td>실질임금 = 명목임금 / 물가지수 x 100</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> "퇴휴연재산감구" → 평균임금 적용 7가지 암기!</p>
<p>★ <strong>시험 포인트:</strong> "해연출" → 통상임금 적용(해고예고수당, 연장야간휴일, 출산전후휴가) 암기!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 평균임금이 통상임금보다 낮은 경우 통상임금을 평균임금으로 함</p>
</div>`
      },
      {
        title: '임금격차의 경쟁적 요인',
        content: `<div class="exam-important">
<h4>★ 임금격차의 경쟁적 요인</h4>
<p>경쟁적 노동시장에서 임금격차가 발생하는 원인들입니다.</p>

<h4>주요 요인</h4>
<table>
  <tr><th>요인</th><th>내용</th></tr>
  <tr><td><strong>인적자본량</strong></td><td>교육, 훈련, 경험의 차이. 특히 대기업은 <strong>기업특수적 인적자본</strong>이 많아 임금격차 발생</td></tr>
  <tr><td><strong>근로자 생산성 격차</strong></td><td>동일 직무에서도 개인별 생산성 차이 존재</td></tr>
  <tr><td><strong>보상적 임금격차</strong></td><td>비금전적 직업 특성(위험, 환경 등)에 대한 보상</td></tr>
  <tr><td><strong>효율성 임금정책</strong></td><td>기업이 자발적으로 시장균형보다 높은 임금 지급 → 생산성 향상 유도</td></tr>
  <tr><td><strong>시장의 단기적 불균형</strong></td><td>수요-공급 일시적 불일치로 인한 격차</td></tr>
</table>
<p>※ <strong>암기법:</strong> "인근보효시" (인적자본-근로자생산성-보상적-효율성-시장불균형)</p>

<h4>임금격차의 비경쟁적 요인</h4>
<ul>
  <li><strong>통계정보 활용의 부작용:</strong> 집단 평균 특성으로 개인을 판단</li>
  <li><strong>성별/인종/지역별 불완전정보:</strong> 편견이나 고정관념에 기반한 차별적 임금 결정</li>
  <li><strong>노동시장 분단:</strong> 1차/2차 시장 간 이동 제한</li>
  <li><strong>노동조합의 존재:</strong> 조직/비조직 부문 간 격차</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 경쟁적 요인은 생산성/능력 차이에 근거, 비경쟁적 요인은 차별/제도적 장벽에 근거 → 구분 필수!</p>
<p style="color:#DC2626;font-weight:bold">※ 통계적 차별(Statistical Discrimination)은 개인 정보 부족 시 집단 특성을 기준으로 판단하는 것으로 비경쟁적 요인에 해당</p>
</div>`
      },
      {
        title: '임금형태별 비교',
        content: `<div class="exam-important">
<h4>★ 임금형태 3대 유형 비교</h4>

<table>
  <tr><th>구분</th><th>시간급제</th><th>능률급제</th><th>연봉제</th></tr>
  <tr><td><strong>기준</strong></td><td>근무시간</td><td>성과/생산량</td><td>1년 단위 성과계약</td></tr>
  <tr><td><strong>종류</strong></td><td>시급, 일급, 주급, 월급, 연봉</td><td>상여급, 성과급, 할증급</td><td>개별 연봉계약</td></tr>
  <tr>
    <td><strong>장점</strong></td>
    <td>확정임금 보장<br/>계산 간편<br/>품질 향상</td>
    <td>동기유발<br/>생산성 향상</td>
    <td>능력주의 정착<br/>전문성 강화<br/>인재 기용<br/>효율성 증대</td>
  </tr>
  <tr>
    <td><strong>단점</strong></td>
    <td>능률 저하 우려</td>
    <td>화합 불리<br/>품질 조악</td>
    <td>공정성 시비<br/>사기 저하<br/>과도한 경쟁심</td>
  </tr>
</table>

<h4>능률급제의 전제조건</h4>
<ul>
  <li>생산량의 <strong>객관적 측정</strong>이 가능해야 함</li>
  <li>노력과 생산량 간 <strong>명확한 관계</strong>가 있어야 함</li>
  <li><strong>직무 표준화</strong>가 되어 있어야 함</li>
  <li>질(Quality)보다 <strong>양(Quantity)</strong>이 중요한 직무</li>
  <li><strong>감독이 철저</strong>히 이루어져야 함</li>
</ul>
<p>※ <strong>암기법:</strong> "객명직양감" (객관측정-명확관계-직무표준화-양중시-감독철저)</p>

<h4>연봉제의 전제조건</h4>
<ul>
  <li><strong>직무분석</strong>이 체계적으로 이루어져야 함</li>
  <li><strong>명확한 인사고과</strong> 제도가 확립되어야 함</li>
  <li><strong>목표관리제도(MBO)</strong>가 운영되어야 함</li>
</ul>
<p>※ <strong>암기법:</strong> "직명목" (직무분석-명확인사고과-목표관리)</p>

<p>★ <strong>시험 포인트:</strong> 시간급은 "품질 향상"이 장점, 능률급은 "품질 조악"이 단점 → 반대 개념으로 자주 출제!</p>
</div>`
      },
      {
        title: '임금이론',
        content: `<div class="exam-important">
<h4>★ 임금의 의의</h4>
<ul>
  <li><strong>소득의 원천:</strong> 근로자 가계소득의 주요 원천</li>
  <li><strong>사회적 신분 기준:</strong> 사회경제적 지위를 나타내는 척도</li>
  <li><strong>인적자원 배분:</strong> 노동시장에서 인력 배분 기능 수행</li>
</ul>

<h4>임금의 법적 성격</h4>
<table>
  <tr><th>학설</th><th>내용</th><th>해당 임금</th></tr>
  <tr><td><strong>노동대가설</strong></td><td>실제 제공한 노동에 대한 대가</td><td>직무수당</td></tr>
  <tr><td><strong>노동력대가설</strong></td><td>노동력 자체(제공여부 무관)에 대한 대가</td><td>휴업수당, 가족수당</td></tr>
  <tr><td><strong>임금이분설</strong></td><td>보장적 부분 + 교환적 부분으로 구분</td><td>보장적(생활보장) + 교환적(노동대가)</td></tr>
</table>

<h4>★ 주요 임금이론 변천</h4>
<table>
  <tr><th>이론</th><th>학자</th><th>핵심 내용</th></tr>
  <tr><td><strong>임금생존비설</strong></td><td>스미스, 리카도, 맬더스</td><td>임금은 생존수준으로 귀결. 맬더스 인구법칙, <strong>임금철칙설</strong>이라고도 함</td></tr>
  <tr><td><strong>임금기금설</strong></td><td>밀(Mill)</td><td>임금총액은 기금(Fund)으로 고정. 임금 = 임금기금/노동자수</td></tr>
  <tr><td><strong>노동가치설</strong></td><td>마르크스</td><td>노동이 가치의 원천. 자본가에 의한 <strong>노동착취</strong> 비판</td></tr>
  <tr><td><strong>한계생산력설</strong></td><td>클라크</td><td>임금은 노동의 한계생산물에 의해 결정 (수요-공급)</td></tr>
  <tr><td><strong>임금교섭력설</strong></td><td>웹부부 등</td><td>노사 간 <strong>교섭력의 강도</strong>에 따라 임금 결정</td></tr>
</table>
<p>※ <strong>암기법 (시대순):</strong> "생기노한교" (생존비-기금-노동가치-한계생산-교섭력)</p>

<p>★ <strong>시험 포인트:</strong> 임금생존비설의 "임금철칙설" 명칭, 임금기금설의 "기금 고정" 개념 → 용어 매칭 문제 빈출!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 한계생산력설은 "노동수요" 측면의 이론이지, 노동공급까지 설명하지는 않음</p>
</div>`
      },
      {
        title: '임금의 구성',
        content: `<div class="exam-important">
<h4>★ 임금관리의 3요소</h4>
<table>
  <tr><th>요소</th><th>핵심가치</th><th>내용</th></tr>
  <tr><td><strong>임금수준 관리</strong></td><td>적정성</td><td>기업의 지불능력, 생계비, 시장임금 등 고려하여 적정 수준 결정</td></tr>
  <tr><td><strong>임금체계 관리</strong></td><td>공정성</td><td>연공급/직능급/직무급 등 임금결정 기준의 공정한 설계</td></tr>
  <tr><td><strong>임금형태 관리</strong></td><td>합리성</td><td>시간급/능률급/연봉제 등 지급 방식의 합리적 운영</td></tr>
</table>
<p>※ <strong>암기법:</strong> "수체형 → 적공합" (임금수준-체계-형태 → 적정성-공정성-합리성)</p>

<h4>임금의 구성 체계</h4>
<table>
  <tr><th>구분</th><th>세부 항목</th><th>성격</th></tr>
  <tr><td rowspan="2"><strong>고정적 급여</strong></td><td>기본급</td><td>기본 생활 보장</td></tr>
  <tr><td>제수당 (직무수당, 직책수당 등)</td><td>직무/직책에 따른 추가 보상</td></tr>
  <tr><td><strong>변동적 급여</strong></td><td>초과근무수당 (연장, 야간, 휴일)</td><td>추가 근로에 대한 보상</td></tr>
  <tr><td><strong>상여금</strong></td><td>특별급여 (성과급, 보너스 등)</td><td>성과/업적에 대한 보상</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 임금관리의 3요소(수준-체계-형태)와 각각의 핵심가치(적정성-공정성-합리성)의 매칭이 빈출!</p>
</div>`
      },
      {
        title: '의중임금',
        content: `<div class="exam-important">
<h4>★ 의중임금 (Reservation Wage)</h4>
<p>근로자가 노동시장에 참가하기 위해 최소한으로 요구하는 임금 수준</p>

<h4>다양한 명칭</h4>
<ul>
  <li><strong>보상요구임금</strong> (Asking Wage)</li>
  <li><strong>유보임금</strong> (Reservation Wage)</li>
  <li><strong>희망임금</strong></li>
  <li><strong>눈높이임금</strong></li>
</ul>

<h4>의중임금의 핵심 원리</h4>
<ul>
  <li><strong>효용극대화 시:</strong> 의중임금 = 제시임금 → 노동시장 참가 결정</li>
  <li><strong>의중임금 > 제시임금:</strong> 비경제활동인구 (노동시장 불참)</li>
  <li><strong>의중임금 < 제시임금:</strong> 경제활동인구 (노동시장 참가)</li>
</ul>

<h4>★ 전업주부의 사례 (빈출)</h4>
<table>
  <tr><th>상황</th><th>결과</th></tr>
  <tr><td>의중임금 > 실제(시장)임금</td><td>경제활동에 참가하지 않음 → <strong>경제활동참가율 감소</strong></td></tr>
  <tr><td colspan="2">의중임금이 높을수록 → <strong>실업기간 연장</strong> (더 좋은 일자리를 찾으므로)</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 의중임금이 높아지면 → 경제활동참가율 감소, 실업기간 연장 → 두 가지 효과 모두 암기!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 의중임금은 "최저" 요구 수준이지, 반드시 받고 싶은 "최고" 임금이 아님</p>
</div>`
      },
      {
        title: '생산성 임금제',
        content: `<div class="exam-important">
<h4>★ 생산성 임금제</h4>
<p>임금인상률을 <strong>생산성 증가율에 연계</strong>하여 결정하는 제도</p>

<h4>핵심 공식</h4>
<table>
  <tr><th>공식</th><th>내용</th></tr>
  <tr><td><strong>명목생산성 증가율</strong></td><td>= 실질생산성 증가율 + 물가상승률</td></tr>
  <tr><td><strong>명목임금 인상률</strong></td><td>= 명목생산성 증가율에 연동</td></tr>
</table>

<h4>★ 계산 예시 (시험 계산문제 빈출)</h4>
<table>
  <tr><th>항목</th><th>수치</th></tr>
  <tr><td>실질생산성 증가율</td><td>5%</td></tr>
  <tr><td>물가상승률</td><td>2%</td></tr>
  <tr><td><strong>명목생산성 증가율</strong></td><td><strong>5% + 2% = 7%</strong></td></tr>
  <tr><td><strong>명목임금 인상률</strong></td><td><strong>7% (명목생산성 증가율과 동일)</strong></td></tr>
</table>

<h4>생산성 임금제의 의의</h4>
<ul>
  <li>임금인상과 물가안정을 동시에 추구</li>
  <li>생산성 향상에 대한 공정한 보상 원칙</li>
  <li>인플레이션 억제 효과 기대</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 공식을 반드시 암기! "명목 = 실질 + 물가" 이 한 줄이면 계산문제 해결!</p>
<p>※ 실질임금이 오르려면 명목임금 인상률 > 물가상승률이어야 함</p>
</div>`
      }
    ]
  },

  // ========================================
  // Chapter 2: 시험 핵심키워드 - 실업의 제개념
  // ========================================
  {
    title: '시험 핵심키워드 - 실업의 제개념',
    topics: [
      {
        title: '마찰적 실업',
        content: `<div class="exam-important">
<h4>★ 마찰적 실업 (Frictional Unemployment)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>원인:</strong> 직업정보 부족으로 인한 일시적 발생</li>
  <li><strong>성격:</strong> <strong>자발적 실업</strong> (스스로 이직/구직하는 과정)</li>
  <li><strong>별칭:</strong> <strong>탐색적 실업(Search Unemployment)</strong></li>
  <li><strong>사회적 비용:</strong> 실업 유형 중 <strong>가장 적음</strong></li>
  <li><strong>특징:</strong> 완전고용 상태에서도 존재 (자연실업률의 구성요소)</li>
</ul>

<h4>마찰적 실업의 대책</h4>
<table>
  <tr><th>대책</th><th>내용</th></tr>
  <tr><td><strong>전산망 구축</strong></td><td>구인-구직 매칭 시스템 전산화</td></tr>
  <tr><td><strong>정보시스템 확충</strong></td><td>노동시장 정보 데이터베이스 확대</td></tr>
  <tr><td><strong>직업알선기관 확대</strong></td><td>공공/민간 직업소개소 활성화</td></tr>
  <tr><td><strong>고용자료 제공</strong></td><td>체계적 구인정보 배포</td></tr>
  <tr><td><strong>퇴직예고제</strong></td><td>사전 예고로 구직 준비기간 확보</td></tr>
  <tr><td><strong>구직자 세일즈</strong></td><td>구직자의 적극적 자기홍보 지원</td></tr>
</table>
<p>※ <strong>암기법:</strong> "전정직고퇴구" (전산망-정보시스템-직업알선-고용자료-퇴직예고-구직자세일즈)</p>

<p>★ <strong>시험 포인트:</strong> 마찰적 실업 = 자발적 = 탐색적 = 사회적 비용 최소 → 이 4가지 키워드 연결 필수!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 마찰적 실업은 "정보 부족"이 원인이지, "기술 부족"이 아님 (기술 부족 = 구조적 실업)</p>
</div>`
      },
      {
        title: '구조적 실업',
        content: `<div class="exam-important">
<h4>★ 구조적 실업 (Structural Unemployment)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>원인:</strong> 경제구조 변화, 기술 부족으로 발생</li>
  <li><strong>특징:</strong> 지역/산업 간 노동력 수급 불균형</li>
  <li><strong>효율성 임금(고임금) 지불 시</strong>에도 발생 가능</li>
  <li><strong>기간:</strong> 경기적 실업보다 <strong>장기적</strong></li>
  <li>자연실업률의 구성요소 (마찰적 실업과 함께)</li>
</ul>

<h4>구조적 실업 vs 마찰적 실업 비교</h4>
<table>
  <tr><th>구분</th><th>마찰적 실업</th><th>구조적 실업</th></tr>
  <tr><td><strong>원인</strong></td><td>정보 부족</td><td>기술/구조 변화</td></tr>
  <tr><td><strong>기간</strong></td><td>단기적</td><td>장기적</td></tr>
  <tr><td><strong>성격</strong></td><td>자발적</td><td>비자발적</td></tr>
  <tr><td><strong>사회적 비용</strong></td><td>가장 적음</td><td>보다 큼</td></tr>
  <tr><td><strong>대책</strong></td><td>정보 제공</td><td>재훈련/이주 지원</td></tr>
</table>

<h4>구조적 실업의 대책</h4>
<ul>
  <li><strong>인력수급정책:</strong> 인력 수요 예측에 기반한 정책 수립</li>
  <li><strong>재훈련(직업훈련):</strong> 새로운 기술/직종에 대한 교육 지원</li>
  <li><strong>지역이주금 지원:</strong> 일자리가 있는 지역으로의 이동 지원</li>
  <li><strong>정보 제공:</strong> 산업별, 직종별 노동시장 정보 제공</li>
  <li><strong>노동력 수급 예측:</strong> 중장기 인력 수요-공급 전망</li>
</ul>
<p>※ <strong>암기법:</strong> "인재지정노" (인력수급-재훈련-지역이주-정보제공-노동력예측)</p>

<p>★ <strong>시험 포인트:</strong> 효율성임금(고임금)이 구조적 실업을 야기할 수 있다는 점 → 임금이론과 연계 출제!</p>
</div>`
      },
      {
        title: '실망노동자효과',
        content: `<div class="exam-important">
<h4>★ 실망노동자효과 (Discouraged Worker Effect)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>정의:</strong> 경기침체로 구직활동을 <strong>단념</strong>하여 <strong>비경제활동인구로 전락</strong>하는 현상</li>
  <li><strong>결과:</strong> 실업자 수가 실제보다 <strong>과소평가</strong>됨</li>
  <li><strong>이유:</strong> 구직활동을 하지 않으면 "실업자"로 분류되지 않음 (비경제활동인구로 분류)</li>
</ul>

<h4>★ 실망노동자효과 vs 부가노동자효과 비교 (핵심!)</h4>
<table>
  <tr><th>구분</th><th>실망노동자효과</th><th>부가노동자효과</th></tr>
  <tr><td><strong>방향</strong></td><td>경제활동인구 → 비경제활동인구</td><td>비경제활동인구 → 경제활동인구</td></tr>
  <tr><td><strong>원인</strong></td><td>구직 단념 (취업 포기)</td><td>가구주 실직으로 생계 위협</td></tr>
  <tr><td><strong>실업자 수</strong></td><td><strong>과소평가</strong></td><td><strong>과대평가</strong></td></tr>
  <tr><td><strong>경활참가율</strong></td><td>감소</td><td>증가</td></tr>
  <tr><td><strong>대상</strong></td><td>구직 포기 본인</td><td>주부, 학생 등 2차 노동력</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 실망 = 과소평가, 부가 = 과대평가 → 반드시 쌍으로 암기!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 실망노동자는 "실업자"가 아니라 "비경제활동인구"로 분류됨!</p>
</div>`
      },
      {
        title: '필립스 곡선',
        content: `<div class="exam-important">
<h4>★ 필립스 곡선 (Phillips Curve)</h4>

<svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <defs>
    <marker id="arrow2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
  </defs>
  <text x="240" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">필립스 곡선</text>
  <!-- Axes -->
  <line x1="80" y1="300" x2="430" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrow2)"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="440" y="305" font-size="11" fill="#333">실업률(u)</text>
  <text x="25" y="35" font-size="11" fill="#333">인플레이션율(π)</text>
  <!-- Short-run Phillips Curve -->
  <path d="M 120 80 Q 180 160 250 210 Q 320 250 400 270" stroke="#2563EB" stroke-width="2.5" fill="none"/>
  <text x="405" y="260" font-size="11" fill="#2563EB" font-weight="bold">단기PC</text>
  <!-- Long-run Phillips Curve (vertical) -->
  <line x1="250" y1="60" x2="250" y2="290" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="255" y="55" font-size="11" fill="#DC2626" font-weight="bold">장기PC(수직)</text>
  <!-- Natural rate label -->
  <text x="235" y="318" font-size="11" fill="#DC2626">u*(자연실업률)</text>
  <!-- Points -->
  <circle cx="170" cy="130" r="5" fill="#F59E0B"/>
  <text x="115" y="125" font-size="10" fill="#F59E0B">A: 저실업/고인플레</text>
  <circle cx="330" cy="245" r="5" fill="#16A34A"/>
  <text x="335" y="240" font-size="10" fill="#16A34A">B: 고실업/저인플레</text>
  <!-- Trade-off arrow -->
  <path d="M 180 140 C 220 180 280 220 320 240" stroke="#999" stroke-width="1.5" fill="none" stroke-dasharray="3" marker-end="url(#arrow2)"/>
  <text x="220" y="200" font-size="10" fill="#999" transform="rotate(-30,220,200)">상충관계</text>
</svg>

<h4>핵심 내용</h4>
<ul>
  <li><strong>인플레이션율과 실업률 간 역의 상관관계(상충관계)</strong></li>
  <li>낮은 인플레이션 + 낮은 실업 → <strong>동시 달성 불가</strong></li>
  <li><strong>총수요 증가:</strong> 실업률↓ + 인플레이션↑</li>
  <li><strong>총수요 감소:</strong> 인플레이션↓ + 실업률↑</li>
</ul>

<h4>단기 vs 장기 필립스곡선</h4>
<table>
  <tr><th>구분</th><th>단기</th><th>장기</th></tr>
  <tr><td><strong>형태</strong></td><td>우하향 곡선</td><td>자연실업률에서 <strong>수직</strong></td></tr>
  <tr><td><strong>상충관계</strong></td><td>존재 (trade-off)</td><td>존재하지 않음</td></tr>
  <tr><td><strong>학자</strong></td><td>필립스(Phillips)</td><td>프리드먼(Friedman), 펠프스(Phelps)</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 단기PC는 "우하향", 장기PC는 "수직" → 형태 구분 필수! 장기PC 학자(프리드먼-펠프스) 빈출!</p>
</div>`
      },
      {
        title: '경기적 실업',
        content: `<div class="exam-important">
<h4>★ 경기적 실업 (Cyclical Unemployment)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>별칭:</strong> <strong>수요부족실업</strong>, 불경기 실업</li>
  <li><strong>원인:</strong> 총수요 감소 → 노동총수요 감소</li>
  <li><strong>성격:</strong> 비자발적 실업 (케인즈 중시)</li>
  <li><strong>특징:</strong> 경기순환에 따라 발생, 경기 회복 시 해소</li>
</ul>

<h4>경기적 실업의 대책 (총수요 확대 정책)</h4>
<table>
  <tr><th>대책</th><th>내용</th></tr>
  <tr><td><strong>재정금융정책</strong></td><td>총수요 증대를 위한 확장적 재정/통화 정책</td></tr>
  <tr><td><strong>세율 인하</strong></td><td>가처분소득 증가 → 소비 촉진</td></tr>
  <tr><td><strong>공공사업</strong></td><td>정부 주도의 대규모 사업으로 직접 고용 창출</td></tr>
  <tr><td><strong>근무제도 변경</strong></td><td>워크셰어링(일자리 나누기) 등 고용 유지 방안</td></tr>
</table>
<p>※ <strong>암기법:</strong> "재세공근" (재정금융-세율인하-공공사업-근무제도변경)</p>

<h4>★ 실업 유형별 대책 비교 (종합)</h4>
<table>
  <tr><th>실업 유형</th><th>원인</th><th>대책</th></tr>
  <tr><td><strong>마찰적</strong></td><td>정보 부족</td><td>정보 제공, 직업알선</td></tr>
  <tr><td><strong>구조적</strong></td><td>기술/구조 변화</td><td>재훈련, 이주 지원</td></tr>
  <tr><td><strong>경기적</strong></td><td>총수요 부족</td><td>재정금융정책, 공공사업</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 경기적 실업 = 수요부족실업 = 케인즈 실업 → 대책은 "총수요 증대" 키워드 연결!</p>
</div>`
      },
      {
        title: '실업의 계측',
        content: `<div class="exam-important">
<h4>★ 실업의 계측</h4>
<p><strong>통계청 경제활동인구조사</strong>에 의해 측정</p>

<h4>핵심 분류</h4>
<ul>
  <li><strong>구직단념자:</strong> 비경제활동인구 (실업자에서 제외)</li>
  <li><strong>취업준비자:</strong> 비경제활동인구 (실업자에서 제외)</li>
  <li><strong>실업자 조건:</strong> (1) 일할 의사 + (2) 일할 능력 + (3) 적극적 구직활동</li>
</ul>

<h4>★ 인구 이동에 따른 변화양상 (최빈출!)</h4>
<svg viewBox="0 0 550 320" xmlns="http://www.w3.org/2000/svg" style="max-width:550px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <text x="275" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">인구이동에 따른 실업률/참가율 변화</text>
  <!-- Three circles -->
  <circle cx="140" cy="150" r="60" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#3B82F6">취업자</text>
  <circle cx="275" cy="150" r="60" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
  <text x="275" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#DC2626">실업자</text>
  <circle cx="410" cy="150" r="60" fill="#F3F4F6" stroke="#6B7280" stroke-width="2"/>
  <text x="410" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#6B7280">비경활</text>
  <text x="410" y="162" text-anchor="middle" font-size="10" fill="#6B7280">인구</text>
  <!-- Arrow 1: 취업→비경활 -->
  <path d="M 185 110 Q 275 50 365 110" stroke="#9333EA" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
  <text x="275" y="65" text-anchor="middle" font-size="9" fill="#9333EA">(1) 실업률↑ 참가율↓</text>
  <!-- Arrow 2: 실업→비경활 -->
  <line x1="330" y1="135" x2="355" y2="135" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="342" y="128" text-anchor="middle" font-size="9" fill="#F59E0B">(2)</text>
  <!-- Arrow 3: 비경활→취업 -->
  <path d="M 365 190 Q 275 250 185 190" stroke="#16A34A" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
  <text x="275" y="260" text-anchor="middle" font-size="9" fill="#16A34A">(3) 실업률↓ 참가율↑</text>
  <!-- Arrow 4: 비경활→실업 -->
  <line x1="355" y1="165" x2="330" y2="165" stroke="#DC2626" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="342" y="180" text-anchor="middle" font-size="9" fill="#DC2626">(4)</text>
  <!-- Legend table below -->
  <rect x="50" y="230" width="450" height="80" rx="5" fill="#F9FAFB" stroke="#E5E7EB"/>
  <text x="70" y="250" font-size="10" fill="#9333EA">(1) 취업자→비경활: 실업률↑ 참가율↓</text>
  <text x="70" y="265" font-size="10" fill="#F59E0B">(2) 실업자→비경활: 실업률↓ 참가율↓</text>
  <text x="70" y="280" font-size="10" fill="#16A34A">(3) 비경활→취업자: 실업률↓ 참가율↑</text>
  <text x="70" y="295" font-size="10" fill="#DC2626">(4) 비경활→실업자: 실업률↑ 참가율↑</text>
</svg>

<table>
  <tr><th>이동 방향</th><th>실업률</th><th>경활참가율</th></tr>
  <tr><td><strong>취업자 → 비경활인구</strong></td><td>↑ 상승</td><td>↓ 하락</td></tr>
  <tr><td><strong>실업자 → 비경활인구</strong></td><td>↓ 하락</td><td>↓ 하락</td></tr>
  <tr><td><strong>비경활인구 → 취업자</strong></td><td>↓ 하락</td><td>↑ 상승</td></tr>
  <tr><td><strong>비경활인구 → 실업자</strong></td><td>↑ 상승</td><td>↑ 상승</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 4가지 이동 방향별 실업률/참가율 변화 방향 → 표 자체가 시험문제!</p>
<p>※ <strong>암기법:</strong> "참가율은 경활인구 변화 방향과 같다" → 비경활에서 나오면 참가율↑, 들어가면 참가율↓</p>
</div>`
      },
      {
        title: '부가노동자효과',
        content: `<div class="exam-important">
<h4>★ 부가노동자효과 (Added Worker Effect)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>정의:</strong> 가구주 실직 → 주부/학생 등 <strong>2차 노동력</strong>이 구직활동 시작</li>
  <li><strong>결과:</strong> 비경제활동인구 → <strong>경제활동인구</strong>로 전환</li>
  <li><strong>실업자 수:</strong> 실제보다 <strong>과대평가</strong></li>
  <li><strong>경활참가율:</strong> 증가</li>
</ul>

<h4>메커니즘</h4>
<p>가구주 실직 → 가계소득 감소 → 생계 위협 → 가구 내 비경제활동인구(주부, 학생 등)가 노동시장에 진입 → 이들 중 일부가 실업 상태 → 실업자 수 증가</p>

<h4>★ 실망노동자효과 vs 부가노동자효과 (반복 강조)</h4>
<table>
  <tr><th></th><th>실망노동자효과</th><th>부가노동자효과</th></tr>
  <tr><td><strong>이동 방향</strong></td><td>경활 → 비경활</td><td>비경활 → 경활</td></tr>
  <tr><td><strong>실업 평가</strong></td><td>과소평가</td><td>과대평가</td></tr>
  <tr><td><strong>경활참가율</strong></td><td>감소</td><td>증가</td></tr>
  <tr><td><strong>대상</strong></td><td>구직 포기자 본인</td><td>2차 노동력(주부/학생)</td></tr>
  <tr><td><strong>경기 국면</strong></td><td>경기침체기</td><td>경기침체기</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 두 효과 모두 경기침체기에 발생하지만, 방향이 정반대!</p>
<p>※ <strong>암기법:</strong> "실망하면 과소, 부가하면 과대" → 실망=과소평가, 부가=과대평가</p>
</div>`
      },
      {
        title: '소득정책',
        content: `<div class="exam-important">
<h4>★ 소득정책 (Incomes Policy)</h4>

<h4>핵심 개념</h4>
<ul>
  <li><strong>시기:</strong> 1960년대 선진국에서 시행</li>
  <li><strong>목적:</strong> <strong>완전고용 + 물가안정</strong>의 양립 (필립스곡선의 상충관계 극복)</li>
  <li><strong>방법:</strong> 임금과 물가의 과도한 상승을 직접적으로 억제</li>
  <li><strong>유형:</strong> 임금가이드라인, 물가통제, 임금동결 등</li>
</ul>

<h4>소득정책의 문제점</h4>
<table>
  <tr><th>문제점</th><th>내용</th></tr>
  <tr><td><strong>비효율</strong></td><td>시장 가격 메커니즘을 왜곡하여 자원 배분 비효율 초래</td></tr>
  <tr><td><strong>불평등</strong></td><td>규제 대상 간 형평성 문제 발생</td></tr>
  <tr><td><strong>성장산업 위축</strong></td><td>유망 산업의 임금/가격 인상 억제 → 성장 동력 약화</td></tr>
  <tr><td><strong>행정비용 증가</strong></td><td>규제 시행 및 감시에 막대한 행정 비용 소요</td></tr>
</table>
<p>※ <strong>암기법:</strong> "비불성행" (비효율-불평등-성장위축-행정비용)</p>

<p>★ <strong>시험 포인트:</strong> 소득정책의 목적 = "완전고용 + 물가안정 양립" → 필립스곡선과 연계하여 이해!</p>
</div>`
      },
      {
        title: '케인즈 실업이론',
        content: `<div class="exam-important">
<h4>★ 케인즈(Keynes) 실업이론</h4>

<h4>핵심 내용</h4>
<ul>
  <li><strong>정부개입 중시:</strong> 시장의 자동조절 기능을 불신, 정부의 적극적 개입 주장</li>
  <li><strong>실업 원인:</strong> <strong>유효수요 부족</strong>이 실업의 근본 원인</li>
  <li><strong>정책 방향:</strong> 거시경제정책을 통한 경기부양</li>
</ul>

<h4>케인즈의 정책 처방</h4>
<table>
  <tr><th>정책</th><th>내용</th></tr>
  <tr><td><strong>경기부양정책</strong></td><td>총수요 확대를 위한 적극적 재정/통화 정책</td></tr>
  <tr><td><strong>재분배정책(복지)</strong></td><td>소득 재분배를 통한 소비 진작 (한계소비성향이 높은 저소득층에 지원)</td></tr>
  <tr><td><strong>재정지출 증대</strong></td><td>정부 지출 확대로 직접적 수요 창출 (승수효과)</td></tr>
  <tr><td><strong>소비/투자 증대</strong></td><td>민간 소비와 투자를 촉진하는 정책</td></tr>
</table>

<h4>케인즈 vs 고전학파 비교</h4>
<table>
  <tr><th>구분</th><th>케인즈 학파</th><th>고전학파/통화주의</th></tr>
  <tr><td><strong>시장관</strong></td><td>시장실패 가능</td><td>시장의 자동조절</td></tr>
  <tr><td><strong>실업 원인</strong></td><td>유효수요 부족</td><td>임금 경직성</td></tr>
  <tr><td><strong>정부 역할</strong></td><td>적극적 개입</td><td>최소 개입</td></tr>
  <tr><td><strong>주요 정책</strong></td><td>재정정책</td><td>통화정책</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 케인즈 = 유효수요 부족 = 정부개입 = 재정정책 → 이 연결고리가 핵심!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 케인즈는 "통화정책"이 아닌 "재정정책"을 주로 주장 → 고전학파/통화주의와 혼동 주의!</p>
</div>`
      },
      {
        title: '실업급여 효과',
        content: `<div class="exam-important">
<h4>★ 실업급여의 효과</h4>

<h4>경제활동참가율의 정의</h4>
<p><strong>경제활동참가율 = (경제활동인구 / 15세 이상 인구) x 100</strong></p>
<ul>
  <li>경제활동인구 = 취업자 + 실업자</li>
  <li>15세 이상 인구 = 경제활동인구 + 비경제활동인구</li>
</ul>

<h4>실업급여(구직급여)의 효과</h4>
<table>
  <tr><th>효과</th><th>내용</th></tr>
  <tr><td><strong>경제활동참가 증대</strong></td><td>적극적 구직활동자에게 구직급여 지급 → 구직활동 유인 → 비경활인구가 경활인구로 전환</td></tr>
  <tr><td><strong>의중임금 상승</strong></td><td>실업급여가 있으므로 더 좋은 일자리를 찾으려 함 → 의중임금 상승</td></tr>
  <tr><td><strong>실업기간 연장 가능</strong></td><td>급여 수급 기간 동안 구직활동을 더 오래 할 수 있음</td></tr>
  <tr><td><strong>노동시간 효과 불분명</strong></td><td>실업 상태에 따라 노동시간 증감이 불분명</td></tr>
</table>

<h4>실업급여의 양면성</h4>
<ul>
  <li><strong>긍정:</strong> 소득 보전, 구직활동 지원, 적절한 직업-근로자 매칭 촉진</li>
  <li><strong>부정:</strong> 도덕적 해이(moral hazard), 실업기간 장기화, 의중임금 과도 상승</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 실업급여 → "경제활동참가 증대" (구직활동 유인), 동시에 "실업기간 연장 가능" → 양면적 효과!</p>
<p>※ 노동시간 증감 효과는 "불분명"이라는 점 → 확정적 답이 아니므로 출제 시 주의!</p>
</div>`
      }
    ]
  },

  // ========================================
  // Chapter 3: 시험 핵심키워드 - 노사관계이론
  // ========================================
  {
    title: '시험 핵심키워드 - 노사관계이론',
    topics: [
      {
        title: '숍(Shop) 제도',
        content: `<div class="exam-important">
<h4>★ 숍(Shop) 제도 - 노조 가입 강제 유형</h4>

<h4>기본 유형</h4>
<table>
  <tr><th>유형</th><th>내용</th><th>강제성</th></tr>
  <tr><td><strong>오픈숍 (Open Shop)</strong></td><td>가입 여부 자유, 비조합원도 고용 가능</td><td>없음</td></tr>
  <tr><td><strong>클로즈드숍 (Closed Shop)</strong></td><td>조합원만 고용, <strong>일정기간 내 가입 의무</strong></td><td>가장 강함</td></tr>
  <tr><td><strong>유니언숍 (Union Shop)</strong></td><td>고용 후 일정기간 내 가입 의무 (중간 형태)</td><td>중간</td></tr>
</table>

<h4>변형 유형</h4>
<table>
  <tr><th>유형</th><th>내용</th></tr>
  <tr><td><strong>에이전시숍 (Agency Shop)</strong></td><td>비조합원도 <strong>조합비 징수</strong> (무임승차 방지)</td></tr>
  <tr><td><strong>프레퍼렌셜숍 (Preferential Shop)</strong></td><td><strong>조합원 우대</strong> (채용/승진 시 우선권)</td></tr>
  <tr><td><strong>메인터넌스숍 (Maintenance Shop)</strong></td><td>탈퇴 자유하지만 <strong>협약기간 중 탈퇴 불가</strong></td></tr>
</table>

<h4>강제성 순서</h4>
<p style="font-size:1.1em;text-align:center"><strong>클로즈드숍 > 유니언숍 > 에이전시숍 > 메인터넌스숍 > 프레퍼렌셜숍 > 오픈숍</strong></p>

<p>※ <strong>암기법 (기본):</strong> "오클유" (오픈-클로즈드-유니언) → 강제성 순서 "클유오"</p>
<p>※ <strong>암기법 (변형):</strong> "에프메" (에이전시-프레퍼렌셜-메인터넌스)</p>

<p>★ <strong>시험 포인트:</strong> 에이전시숍의 "비조합원도 회비 징수", 메인터넌스숍의 "협약기간 중 탈퇴 불가" → 핵심 키워드 구분!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 유니언숍은 "고용 후" 가입 의무, 클로즈드숍은 "고용 전" 조합원이어야 함 → 시점 구분!</p>
</div>`
      },
      {
        title: '힉스(Hicks) 단체교섭이론',
        content: `<div class="exam-important">
<h4>★ 힉스(Hicks) 단체교섭이론</h4>

<svg viewBox="0 0 500 370" xmlns="http://www.w3.org/2000/svg" style="max-width:500px;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px">
  <defs>
    <marker id="arrow3" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker>
  </defs>
  <text x="250" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">힉스(Hicks) 단체교섭 모형</text>
  <!-- Axes -->
  <line x1="80" y1="300" x2="450" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrow3)"/>
  <text x="460" y="305" font-size="11" fill="#333">파업기간(t)</text>
  <text x="25" y="35" font-size="11" fill="#333">임금인상률(W)</text>
  <!-- Union Resistance Curve (downward sloping) -->
  <path d="M 100 80 Q 200 120 300 200 Q 370 250 420 270" stroke="#DC2626" stroke-width="2.5" fill="none"/>
  <text x="425" y="265" font-size="11" fill="#DC2626" font-weight="bold">노동조합</text>
  <text x="425" y="280" font-size="11" fill="#DC2626" font-weight="bold">저항곡선</text>
  <!-- Employer Concession Curve (upward sloping) -->
  <path d="M 100 270 Q 200 240 300 200 Q 370 170 420 100" stroke="#2563EB" stroke-width="2.5" fill="none"/>
  <text x="425" y="95" font-size="11" fill="#2563EB" font-weight="bold">사용자</text>
  <text x="425" y="110" font-size="11" fill="#2563EB" font-weight="bold">양보곡선</text>
  <!-- Intersection point -->
  <circle cx="300" cy="200" r="6" fill="#F59E0B" stroke="#333" stroke-width="1"/>
  <text x="305" y="195" font-size="11" fill="#333" font-weight="bold">P(합의점)</text>
  <!-- Dashed lines to axes -->
  <line x1="80" y1="200" x2="300" y2="200" stroke="#999" stroke-dasharray="4"/>
  <text x="55" y="204" font-size="11" fill="#333">W*</text>
  <line x1="300" y1="200" x2="300" y2="300" stroke="#999" stroke-dasharray="4"/>
  <text x="292" y="318" font-size="11" fill="#333">t*</text>
  <!-- Labels -->
  <text x="130" y="70" font-size="10" fill="#DC2626">노동자 요구(높음)</text>
  <text x="130" y="280" font-size="10" fill="#2563EB">사용자 제시(낮음)</text>
  <!-- Annotations -->
  <text x="150" y="340" font-size="10" fill="#666">W*: 합의 임금인상률 / t*: 예상 파업기간</text>
</svg>

<h4>핵심 내용</h4>
<ul>
  <li><strong>파업 원인:</strong> 노사 간 <strong>비대칭 정보</strong>로 파업 발생</li>
  <li><strong>파업기간의 함수</strong>로 임금합의에 도달</li>
  <li><strong>노동조합 저항곡선:</strong> 파업 장기화 시 요구 임금인상률 <strong>하락</strong> (우하향)</li>
  <li><strong>사용자 양보곡선:</strong> 파업 장기화 시 제시 임금인상률 <strong>상승</strong> (우상향)</li>
  <li><strong>합의점(P):</strong> 두 곡선의 교차점에서 예상 파업기간(t*)과 합의 임금(W*) 결정</li>
</ul>

<h4>모형의 의미</h4>
<table>
  <tr><th>곡선</th><th>방향</th><th>의미</th></tr>
  <tr><td><strong>노동조합 저항곡선</strong></td><td>우하향</td><td>파업이 길어질수록 노동자 측 임금인상률 요구 낮춤</td></tr>
  <tr><td><strong>사용자 양보곡선</strong></td><td>우상향</td><td>파업이 길어질수록 사용자 측 임금양보율 높임</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 저항곡선=우하향, 양보곡선=우상향 → 방향 구분 필수! "파업 개시 이후 사정"으로 모형 설명!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 합의점은 "파업 전" 예측이 아닌, "파업 후" 양측의 양보에 의해 결정</p>
</div>`
      },
      {
        title: '노동조합의 임금효과',
        content: `<div class="exam-important">
<h4>★ 노동조합의 3대 임금효과</h4>

<table>
  <tr><th>효과</th><th>메커니즘</th><th>비조직부문 임금</th><th>격차</th></tr>
  <tr>
    <td><strong>파급효과<br/>(이전/해고효과)</strong></td>
    <td>조직부문 임금인상 → 고용감소 → 해고된 노동자가 비조직부문으로 이전 → 비조직부문 노동공급 증가</td>
    <td><strong>하락</strong></td>
    <td><strong>확대</strong></td>
  </tr>
  <tr>
    <td><strong>위협효과</strong></td>
    <td>비조직기업이 노조 결성을 방지하기 위해 <strong>선제적으로 임금인상</strong></td>
    <td><strong>상승</strong></td>
    <td><strong>축소</strong></td>
  </tr>
  <tr>
    <td><strong>대기실업효과</strong></td>
    <td>해고된 노동자가 비조직부문 취업 대신 <strong>조직기업 재취업을 대기</strong> → 비조직부문 노동공급 미증가</td>
    <td><strong>하락 안함</strong></td>
    <td><strong>축소</strong></td>
  </tr>
</table>

<h4>격차 방향 정리</h4>
<ul>
  <li><strong>파급효과:</strong> 격차 <strong>확대</strong> (유일하게 확대!)</li>
  <li><strong>위협효과:</strong> 격차 <strong>축소</strong></li>
  <li><strong>대기실업효과:</strong> 격차 <strong>축소</strong></li>
</ul>

<p>※ <strong>암기법:</strong> "파확 위축 대축" (파급=확대, 위협=축소, 대기=축소)</p>

<p>★ <strong>시험 포인트:</strong> 3가지 효과 중 격차를 "확대"하는 것은 파급효과뿐! 나머지는 모두 "축소"!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 위협효과는 "비조직부문"이 자발적으로 임금을 올리는 것이지, 노조가 강제하는 것이 아님!</p>
</div>`
      },
      {
        title: '직업별 노동조합',
        content: `<div class="exam-important">
<h4>★ 직업별 노동조합 (Craft Union)</h4>

<h4>핵심 특징</h4>
<ul>
  <li><strong>조직 방식:</strong> 산업/기업 구별 없이 <strong>동일 직업(직종)</strong>의 개인이 가맹</li>
  <li><strong>역사:</strong> 노동운동사에서 <strong>가장 초기</strong> 형태</li>
  <li><strong>목적:</strong> <strong>숙련 근로자 독점</strong> (기술/자격의 배타적 통제)</li>
  <li><strong>배타성:</strong> 저임금, 미숙련, 여성, 연소자 가입 어려움</li>
  <li><strong>주요 활동:</strong> <strong>상호부조</strong> 주력 (질병, 사망, 실업 시 지원)</li>
  <li><strong>특징:</strong> 어용화 없지만 <strong>독점적</strong> 성격</li>
</ul>

<h4>★ 노동조합 유형 비교</h4>
<table>
  <tr><th>구분</th><th>직업별</th><th>산업별</th><th>기업별</th></tr>
  <tr><td><strong>조직 기준</strong></td><td>동일 직종</td><td>동일 산업</td><td>동일 기업</td></tr>
  <tr><td><strong>역사</strong></td><td>가장 초기</td><td>중기</td><td>후기</td></tr>
  <tr><td><strong>대상</strong></td><td>숙련공</td><td>전체 근로자</td><td>해당 기업 근로자</td></tr>
  <tr><td><strong>교섭력</strong></td><td>직종 내 강함</td><td>산업 전체 강함</td><td>약함</td></tr>
  <tr><td><strong>대표국</strong></td><td>영국 초기</td><td>독일</td><td>한국, 일본</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 직업별 노조 = 가장 초기 = 숙련공 = 배타적 = 상호부조 → 키워드 연결!</p>
</div>`
      },
      {
        title: '기업별 노동조합',
        content: `<div class="exam-important">
<h4>★ 기업별 노동조합 (Enterprise Union)</h4>

<h4>핵심 특징</h4>
<ul>
  <li><strong>조직 방식:</strong> <strong>하나의 기업</strong>이 조직 단위</li>
  <li><strong>대표:</strong> <strong>우리나라</strong>의 주된 노조 형태</li>
  <li><strong>설립:</strong> <strong>대기업</strong>에서 쉽게 조직</li>
  <li><strong>교섭력:</strong> 노동시장 지배력/역량 <strong>약함</strong></li>
</ul>

<h4>장점과 단점</h4>
<table>
  <tr><th>장점</th><th>단점</th></tr>
  <tr><td>노사분규 가능성 <strong>낮음</strong></td><td><strong>어용화</strong> 위험 (사용자 영향 받기 쉬움)</td></tr>
  <tr><td>해당 기업 실정에 맞는 교섭 가능</td><td>직종 간 <strong>반목</strong> 가능성</td></tr>
  <tr><td>의사소통 원활</td><td>교섭력 약함</td></tr>
</table>

<h4>★ 한국의 노조 현황</h4>
<ul>
  <li>기업별 노조가 주류 → 최근 산업별 노조로 전환 추세</li>
  <li>기업별 노조의 한계(어용화, 교섭력 약함)를 극복하기 위해 산별노조 추진</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 기업별 노조 = 한국 주된 형태 = 대기업 쉬움 = 어용화 위험 = 교섭력 약함</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 기업별 노조는 "노사분규 가능성이 낮다"는 것이 장점이지만, "교섭력이 약하다"가 핵심 단점!</p>
</div>`
      },
      {
        title: '단체교섭 유형',
        content: `<div class="exam-important">
<h4>★ 단체교섭의 5대 유형</h4>

<table>
  <tr><th>유형</th><th>교섭 구조</th><th>특징</th></tr>
  <tr><td><strong>기업별 교섭</strong></td><td>단일 노조 vs <strong>단일 사용자</strong></td><td>가장 기본적, 한국 주류</td></tr>
  <tr><td><strong>통일교섭</strong></td><td>단일 노조 vs <strong>복수 사용자</strong></td><td>산업별/업종별 통일 교섭</td></tr>
  <tr><td><strong>집단교섭<br/>(연합교섭)</strong></td><td>복수 노조 vs 복수 사용자<br/>(<strong>연합 전선</strong>)</td><td>양측이 모두 연합하여 교섭</td></tr>
  <tr><td><strong>대각선교섭</strong></td><td><strong>상부 노조단체</strong> vs 개별 사용자</td><td>노조의 상부단체가 개별 기업과 교섭</td></tr>
  <tr><td><strong>방사선교섭</strong></td><td>상부 노조단체 vs <strong>2개 이상</strong> 개별 사용자 동시</td><td>대각선교섭을 <strong>2개 이상 동시</strong>에 수행</td></tr>
</table>

<h4>교섭 유형 관계도</h4>
<ul>
  <li><strong>기업별:</strong> 1:1 교섭 (가장 단순)</li>
  <li><strong>통일:</strong> 1:N (노조 하나, 사용자 여러 명)</li>
  <li><strong>집단:</strong> N:N (연합 전선)</li>
  <li><strong>대각선:</strong> 상위 노조:1 (상부단체 개입)</li>
  <li><strong>방사선:</strong> 상위 노조:N (대각선의 확장)</li>
</ul>

<p>※ <strong>암기법:</strong> "기통집대방" (기업별-통일-집단-대각선-방사선)</p>

<p>★ <strong>시험 포인트:</strong> 대각선 vs 방사선 구분 → 대각선은 "상부+개별 1개", 방사선은 "상부+개별 2개 이상 동시"!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 통일교섭의 "복수 사용자"와 집단교섭의 "연합전선" 구분 → 집단교섭은 노조 측도 복수!</p>
</div>`
      },
      {
        title: '노사 교섭력의 원천',
        content: `<div class="exam-important">
<h4>★ 노사 교섭력의 원천</h4>

<table>
  <tr><th colspan="2">노동조합의 교섭력</th><th colspan="2">사용자의 교섭력</th></tr>
  <tr><th>수단</th><th>내용</th><th>수단</th><th>내용</th></tr>
  <tr><td><strong>파업/태업</strong></td><td>생산 중단으로 압박</td><td><strong>대체인력</strong></td><td>파업 근로자 대체</td></tr>
  <tr><td><strong>정치적 영향력</strong></td><td>정치권 로비/압력</td><td><strong>관리직 생산동원</strong></td><td>비노조원으로 생산 유지</td></tr>
  <tr><td><strong>불매운동</strong></td><td>제품 불매로 기업 압박</td><td><strong>재정능력</strong></td><td>파업 장기화 버틸 자금력</td></tr>
  <tr><td><strong>노동공급 제한</strong></td><td>면허제, 자격요건 강화</td><td><strong>직장폐쇄 (Lock-out)</strong></td><td><strong>가장 강력한 수단!</strong></td></tr>
</table>

<h4>교섭력 강화 요인</h4>
<ul>
  <li><strong>노조 측:</strong> 높은 조직률, 파업기금, 대체재 부재, 호황기</li>
  <li><strong>사용자 측:</strong> 높은 재고, 대체인력 확보, 불황기, 다공장 운영</li>
</ul>

<p style="color:#DC2626;font-size:1.1em;font-weight:bold">★ 사용자의 가장 강력한 수단 = 직장폐쇄(Lock-out) → 초빈출!</p>

<p>※ <strong>암기법 (노조):</strong> "파정불노" (파업-정치적영향-불매-노동공급제한)</p>
<p>※ <strong>암기법 (사용자):</strong> "대관재직" (대체인력-관리직동원-재정능력-직장폐쇄)</p>

<p>★ <strong>시험 포인트:</strong> "직장폐쇄"는 사용자의 가장 강력한 수단, "파업"은 노동조합의 가장 강력한 수단!</p>
</div>`
      },
      {
        title: '노사관계 주요내용 (던롭 모형)',
        content: `<div class="exam-important">
<h4>★ 던롭(Dunlop)의 노사관계체계 이론 (1958)</h4>

<h4>3주체</h4>
<table>
  <tr><th>주체</th><th>대표 조직</th><th>역할</th></tr>
  <tr><td><strong>노동자</strong></td><td>노동조합</td><td>근로조건 개선 추구</td></tr>
  <tr><td><strong>사용자</strong></td><td>사용자단체</td><td>경영권 확보, 이윤 추구</td></tr>
  <tr><td><strong>정부</strong></td><td>정부기관</td><td>규제, 조정, 중재</td></tr>
</table>

<h4>3가지 규제 여건 (환경적 맥락)</h4>
<table>
  <tr><th>여건</th><th>내용</th></tr>
  <tr><td><strong>기술적 특성</strong></td><td>기술 수준, 생산방식이 노사관계에 영향</td></tr>
  <tr><td><strong>시장 (예산 제약)</strong></td><td>상품시장, 노동시장의 경쟁 상황과 예산 제약</td></tr>
  <tr><td><strong>권력 구조</strong></td><td>사회 전반의 권력 분포와 정치적 환경</td></tr>
</table>
<p>※ <strong>암기법:</strong> "기시권" (기술-시장-권력)</p>

<h4>★ 이원적 구조</h4>
<table>
  <tr><th>구분</th><th>관계</th><th>성격</th></tr>
  <tr><td><strong>제1차 관계</strong></td><td>경영 - 종업원</td><td><strong>협력</strong> (일상적 직장 관계)</td></tr>
  <tr><td><strong>제2차 관계</strong></td><td>경영 - 노동조합</td><td><strong>대립</strong> (단체교섭 관계)</td></tr>
</table>

<p>★ <strong>시험 포인트:</strong> 던롭 = 3주체(노사정) + 3여건(기시권) → 숫자 매칭 필수!</p>
<p>★ <strong>시험 포인트:</strong> 제1차=협력, 제2차=대립 → "일이협대" (1차=협력, 2차=대립)</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: 던롭 모형의 산출물은 "규칙(Rule)"이며, "웹 규칙(web of rules)"이라고도 함</p>
</div>`
      },
      {
        title: '이중역할이론 (프리만 & 메도프)',
        content: `<div class="exam-important">
<h4>★ 이중역할이론 - 프리만(Freeman) & 메도프(Medoff)</h4>
<p>노동조합은 <strong>독점적 측면</strong>과 <strong>집단적 소리(Collective Voice)</strong>라는 이중적 역할을 수행</p>

<h4>두 가지 측면</h4>
<table>
  <tr><th>측면</th><th>내용</th><th>효과</th></tr>
  <tr>
    <td><strong>독점적 측면<br/>(Monopoly Face)</strong></td>
    <td>
      <ul>
        <li>노동력 공급 <strong>독점</strong></li>
        <li>완전경쟁 시장을 <strong>교란</strong></li>
        <li>효율성 <strong>저해</strong></li>
      </ul>
    </td>
    <td>부정적: 자원배분 왜곡, 비효율, 임금-물가 상승</td>
  </tr>
  <tr>
    <td><strong>집단적 소리<br/>(Collective Voice)</strong></td>
    <td>
      <ul>
        <li>근로자의 <strong>의사소통</strong> 통로</li>
        <li>바람직한 경영 <strong>유도</strong></li>
        <li>비효율 <strong>제거</strong></li>
        <li>생산성 <strong>증진</strong></li>
      </ul>
    </td>
    <td>긍정적: 이직률 감소, 근로조건 개선, 생산성 향상</td>
  </tr>
</table>

<h4>이론의 핵심</h4>
<ul>
  <li>노조의 순효과는 두 측면의 <strong>상대적 크기</strong>에 따라 결정</li>
  <li>집단적 소리 > 독점적 측면 → 사회에 <strong>긍정적</strong></li>
  <li>독점적 측면 > 집단적 소리 → 사회에 <strong>부정적</strong></li>
</ul>

<p>※ <strong>암기법:</strong> "독교효 집의바비생" (독점-교란-효율저해 / 집단소리-의사소통-바람직경영-비효율제거-생산성증진)</p>

<p>★ <strong>시험 포인트:</strong> 프리만 & 메도프 = 이중역할 = 독점 + 집단적 소리 → 학자명과 이론명 매칭!</p>
<p style="color:#DC2626;font-weight:bold">※ 출제 함정: "집단적 소리"는 개별 근로자가 아닌 "노동조합을 통한" 의사표현을 의미</p>
</div>`
      },
      {
        title: '파업의 경제적 기능',
        content: `<div class="exam-important">
<h4>★ 파업의 경제적 기능과 비용</h4>

<h4>파업의 경제적 비용 구조</h4>
<table>
  <tr><th>구분</th><th>비용 관계</th><th>설명</th></tr>
  <tr><td><strong>노동자 측</strong></td><td>노동소득 손실 < 임금소득 상실분</td><td>파업 중 임금 손실은 전체 소득 손실보다 작음 (파업기금, 부업 등)</td></tr>
  <tr><td><strong>기업 측</strong></td><td>기업이윤 순감소분 < 직접생산중단 감소분</td><td>재고 판매, 하청 전환 등으로 실제 이윤 손실을 완화</td></tr>
</table>

<h4>산업별 사회적 비용</h4>
<p style="font-size:1.1em;text-align:center;font-weight:bold"><strong>서비스업 > 제조업</strong> (사회적 비용)</p>
<ul>
  <li><strong>서비스업:</strong> 재고 비축 불가, 대체 어려움 → 사회적 파급효과 큼 (교통, 의료, 전력 등)</li>
  <li><strong>제조업:</strong> 재고 활용, 하청 전환 가능 → 상대적으로 사회적 비용 적음</li>
</ul>

<h4>파업의 경제적 기능 (순기능)</h4>
<ul>
  <li>노사 간 <strong>힘의 균형</strong> 유지 기능</li>
  <li>근로조건 <strong>개선</strong>의 동력</li>
  <li>경영 <strong>혁신</strong>의 촉매</li>
  <li>사회적 <strong>공론화</strong> 기능</li>
</ul>

<h4>파업 장기화의 영향</h4>
<ul>
  <li>파업 장기화 → <strong>경제적 손실 급증</strong> (양측 모두)</li>
  <li>노동자: 생활고 심화, 파업기금 고갈</li>
  <li>기업: 재고 소진, 거래처 이탈, 신뢰 하락</li>
  <li>사회: 공급 차질, 물가 상승, 경기 둔화</li>
</ul>

<p>★ <strong>시험 포인트:</strong> 서비스업 > 제조업 (사회적 비용) → 이유: 서비스는 "재고 비축" 불가!</p>
<p>★ <strong>시험 포인트:</strong> 노동소득손실과 임금소득상실분의 부등호 방향 주의!</p>
</div>`
      }
    ]
  }
    ]
  },

  labor_law: {
    name: '노동관계법규',
    code: 'labor_law',
    color: '#EF4444',
    icon: 'fa-solid fa-scale-balanced',
    description: '근로기준법, 고용보험법, 직업안정법 등을 학습합니다.',
    chapters: [
      {
        title: '근로기준법',
        topics: [
          {
            title: '근로계약과 근로조건',
            content: `<h4>근로기준법의 기본 원칙</h4>
<ul>
  <li>근로조건은 근로자와 사용자가 동등한 지위에서 자유의사로 결정</li>
  <li>근로기준법에서 정하는 기준은 <strong>최저기준</strong></li>
  <li>국적, 신앙, 사회적 신분에 따른 차별 금지</li>
  <li>강제근로 금지, 폭행 금지</li>
</ul>
<h4>근로계약</h4>
<ul>
  <li>서면으로 명시해야 할 사항: 임금, 소정근로시간, 휴일, 연차유급휴가</li>
  <li>근로계약 기간: 기간의 정함이 없는 것이 원칙 (기간제는 2년 이내)</li>
  <li>위약 예정의 금지: 근로계약 불이행에 대한 위약금/손해배상 예정 금지</li>
  <li>전차금 상계 금지: 전차금과 임금의 상계 금지</li>
</ul>
<h4>근로시간</h4>
<ul>
  <li><strong>법정 근로시간:</strong> 1주 40시간, 1일 8시간</li>
  <li><strong>연장근로:</strong> 당사자 합의 시 1주 12시간 한도</li>
  <li><strong>야간근로:</strong> 오후 10시 ~ 오전 6시</li>
  <li><strong>가산임금:</strong> 연장·야간·휴일근로 시 통상임금의 50% 가산</li>
</ul>`
          },
          {
            title: '임금과 해고',
            content: `<h4>임금</h4>
<ul>
  <li><strong>임금의 정의:</strong> 사용자가 근로의 대가로 근로자에게 지급하는 모든 금품</li>
  <li><strong>통상임금:</strong> 정기적·일률적·고정적으로 지급되는 임금</li>
  <li><strong>평균임금:</strong> 산정사유 발생일 이전 3개월간 지급된 임금총액 ÷ 총 일수</li>
  <li><strong>최저임금:</strong> 최저임금법에 의한 최저 한도</li>
</ul>
<h4>임금 지급 원칙 (4대 원칙)</h4>
<ol>
  <li><strong>직접 지급:</strong> 근로자에게 직접 지급</li>
  <li><strong>전액 지급:</strong> 법령/단체협약에 의한 경우 외 공제 불가</li>
  <li><strong>통화 지급:</strong> 한국은행에서 발행한 통화로 지급</li>
  <li><strong>정기 지급:</strong> 매월 1회 이상 일정 기일에 지급</li>
</ol>
<h4>해고</h4>
<ul>
  <li><strong>정당한 이유:</strong> 해고는 정당한 이유가 있어야 함</li>
  <li><strong>해고 예고:</strong> 30일 전 예고 또는 30일분 통상임금 지급</li>
  <li><strong>해고 서면 통지:</strong> 해고 사유와 해고시기를 서면으로 통지</li>
  <li><strong>경영상 해고(정리해고):</strong> 긴박한 경영상의 필요, 해고회피 노력, 합리적 기준, 근로자대표 50일 전 통보</li>
  <li><strong>부당해고 구제:</strong> 노동위원회에 구제신청 (해고일로부터 3개월 이내)</li>
</ul>`
          },
          {
            title: '휴일·휴가·취업규칙',
            content: `<h4>휴일</h4>
<ul>
  <li><strong>주휴일:</strong> 1주간 소정근로일을 개근한 근로자에게 1일 유급휴일 (주 15시간 이상)</li>
  <li><strong>근로자의 날:</strong> 5월 1일 (유급휴일, 근로자의날법)</li>
  <li>관공서 공휴일: 5인 이상 사업장에서 유급휴일로 보장</li>
</ul>
<h4>연차유급휴가</h4>
<ul>
  <li><strong>1년 미만 근무자:</strong> 1개월 개근 시 1일 (최대 11일)</li>
  <li><strong>1년 이상 근무자:</strong> 80% 이상 출근 시 15일</li>
  <li><strong>가산휴가:</strong> 3년 이상 계속 근로 시 최초 1년 초과 매 2년마다 1일 가산 (최대 25일)</li>
  <li><strong>사용촉진:</strong> 사용자가 사용을 촉구했는데도 미사용 시 보상 의무 소멸</li>
  <li><strong>미사용 수당:</strong> 연차휴가 미사용분에 대해 통상임금 지급</li>
</ul>
<h4>취업규칙</h4>
<ul>
  <li>상시 <strong>10인 이상</strong> 사업장에서 작성·신고 의무</li>
  <li>기재 사항: 근로시간, 임금, 휴일·휴가, 퇴직, 징계 등</li>
  <li><strong>불이익 변경:</strong> 근로자 과반수 동의 필요 (근로자대표/노조 동의)</li>
  <li>취업규칙은 법령, 단체협약에 반할 수 없음</li>
  <li><strong>효력 순서:</strong> 법령 > 단체협약 > 취업규칙 > 근로계약</li>
</ul>
<h4>여성·연소근로자 보호</h4>
<ul>
  <li><strong>최저 고용연령:</strong> 15세 미만 (취직인허증 필요)</li>
  <li><strong>산전후휴가:</strong> 출산 전후 90일 (쌍둥이 120일), 산전 45일 이상 확보</li>
  <li><strong>육아휴직:</strong> 만 8세 이하 자녀 대상, 1년 이내</li>
  <li><strong>야간·휴일근로 제한:</strong> 임신 중 여성 금지, 18세 미만 근로자 본인 동의+근로감독관 인가</li>
  <li><strong>생리휴가:</strong> 월 1일 무급 휴가</li>
</ul>`
          }
        ]
      },
      {
        title: '고용보험법',
        topics: [
          {
            title: '실업급여와 고용안정',
            content: `<h4>고용보험제도의 구성</h4>
<ul>
  <li><strong>실업급여사업:</strong> 실직자에 대한 생활 안정 지원</li>
  <li><strong>고용안정사업:</strong> 기업의 고용유지 지원</li>
  <li><strong>직업능력개발사업:</strong> 근로자의 직업능력 향상 지원</li>
</ul>
<h4>구직급여 수급요건</h4>
<ul>
  <li>이직일 이전 18개월간 피보험단위기간이 180일 이상</li>
  <li>비자발적 이직 (정당한 사유 없는 자기 사정으로 이직 시 제한)</li>
  <li>근로 의사와 능력이 있으나 취업하지 못한 상태</li>
  <li>재취업 활동을 적극적으로 할 것</li>
  <li>수급자격 제한 사유에 해당하지 않을 것</li>
</ul>
<h4>구직급여 지급</h4>
<ul>
  <li><strong>급여수준:</strong> 이직 전 평균임금의 60% × 소정급여일수</li>
  <li><strong>소정급여일수:</strong> 연령과 피보험기간에 따라 120~270일</li>
  <li><strong>대기기간:</strong> 수급자격 인정일부터 7일간</li>
  <li><strong>실업인정:</strong> 1~4주 마다 출석하여 구직활동 확인</li>
</ul>
<h4>고용안정사업</h4>
<ul>
  <li>고용유지지원금: 경영악화로 고용조정 불가피 시 휴업, 훈련 등에 대한 지원</li>
  <li>고용촉진장려금: 취업 취약계층 고용 시 지원</li>
</ul>`
          }
        ]
      },
      {
        title: '직업안정법',
        topics: [
          {
            title: '직업소개와 직업지도',
            content: `<h4>직업안정법의 목적</h4>
<p>모든 근로자가 각자의 능력에 적합한 직업에 취업할 기회를 제공하고, 산업에 필요한 노동력의 충원을 원활히 하는 것입니다.</p>
<h4>직업소개</h4>
<ul>
  <li><strong>무료직업소개사업:</strong> 고용센터(공공), 비영리법인(민간)</li>
  <li><strong>유료직업소개사업:</strong> 등록 후 영리 목적으로 운영</li>
  <li>허위 구인광고 금지</li>
  <li>강제근로 및 부당 소개 금지</li>
</ul>
<h4>직업지도</h4>
<ul>
  <li>직업적성검사, 직업정보 제공, 직업상담</li>
  <li>구인자에 대한 고용관리 진단 및 지도</li>
  <li>취업 취약계층에 대한 우선적 직업지도</li>
</ul>
<h4>고용센터의 업무</h4>
<ul>
  <li>직업소개 및 직업지도</li>
  <li>고용보험 관련 업무</li>
  <li>직업훈련 안내 및 알선</li>
  <li>취업지원 프로그램 운영</li>
</ul>`
          }
        ]
      },
      {
        title: '근로자직업능력개발법',
        topics: [
          {
            title: '직업능력개발 훈련',
            content: `<h4>근로자직업능력개발법의 목적</h4>
<p>근로자의 생애에 걸친 직업능력개발을 촉진하고 산업현장에서 필요한 기술인력을 양성하는 것입니다.</p>
<h4>직업능력개발훈련의 유형</h4>
<ul>
  <li><strong>양성훈련:</strong> 기초적 직무수행능력을 습득시키기 위한 훈련</li>
  <li><strong>향상훈련:</strong> 양성훈련을 받은 자의 직무수행능력을 향상시키기 위한 훈련</li>
  <li><strong>전직훈련:</strong> 다른 직업에 필요한 직무수행능력을 습득시키기 위한 훈련</li>
</ul>
<h4>훈련 실시 방법</h4>
<ul>
  <li>집체훈련: 훈련기관에서 집합 교육</li>
  <li>현장훈련(OJT): 사업장에서 실시</li>
  <li>원격훈련: 인터넷, 통신매체 활용</li>
  <li>혼합훈련: 위 방법들을 병행</li>
</ul>
<h4>국가기술자격</h4>
<ul>
  <li>기술사 → 기능장 → 기사 → 산업기사 → 기능사</li>
  <li>국가전문자격: 직업상담사, 사회복지사 등</li>
</ul>`
          }
        ]
      },
      {
        title: '파견근로자보호법 및 기간제법',
        topics: [
          {
            title: '비정규직 근로자 보호',
            content: `<h4>파견근로자보호법</h4>
<ul>
  <li><strong>근로자파견:</strong> 파견사업주가 근로자를 고용한 후 사용사업주의 지휘·명령을 받아 근무하게 하는 것</li>
  <li><strong>파견기간:</strong> 원칙 1년, 파견 당사자 합의 시 1회에 한해 연장 (최대 2년)</li>
  <li><strong>파견 금지 업무:</strong> 건설, 하역, 유해·위험 업무 등</li>
  <li><strong>직접고용 의무:</strong> 2년 초과 사용 시 직접고용 간주</li>
  <li><strong>차별 금지:</strong> 파견근로자에 대한 불합리한 차별적 처우 금지</li>
</ul>
<h4>기간제 및 단시간근로자 보호법</h4>
<ul>
  <li><strong>기간제근로자:</strong> 근로계약 기간을 정한 근로자</li>
  <li><strong>사용기간:</strong> 총 2년 초과 불가 (초과 시 기간의 정함이 없는 근로자로 간주)</li>
  <li><strong>단시간근로자:</strong> 통상 근로자보다 소정근로시간이 짧은 근로자</li>
  <li><strong>차별 금지:</strong> 합리적 이유 없는 차별적 처우 금지</li>
  <li><strong>차별 시정:</strong> 노동위원회에 시정신청 (차별적 처우가 있은 날로부터 6개월 이내)</li>
</ul>`
          }
        ]
      },
      {
        title: '기타 주요 노동관계법규',
        topics: [
          {
            title: '최저임금법',
            content: `<h4>최저임금법의 목적</h4>
<p>근로자에 대하여 임금의 <strong>최저수준</strong>을 보장하여 근로자의 생활안정과 노동력의 질적 향상을 기함으로써 국민경제의 건전한 발전에 이바지하는 것입니다.</p>
<h4>최저임금 결정</h4>
<ul>
  <li><strong>최저임금위원회:</strong> 근로자 위원 9인 + 사용자 위원 9인 + 공익위원 9인 (총 27인)</li>
  <li>매년 8월 5일까지 결정, 다음 연도 1월 1일부터 적용</li>
  <li>고용노동부 장관이 결정·고시</li>
  <li>시간급 기준으로 결정</li>
</ul>
<h4>적용 대상</h4>
<ul>
  <li>근로자 1인 이상 모든 사업장</li>
  <li><strong>적용 제외:</strong> 동거하는 친족만을 사용하는 사업, 가사사용인</li>
  <li><strong>감액 적용:</strong> 수습 3개월 이내 (1년 이상 계약 시 10% 감액 가능), 장애인 등</li>
</ul>
<h4>위반 시 제재</h4>
<ul>
  <li>최저임금 미만 지급: <strong>3년 이하 징역 또는 2천만원 이하 벌금</strong></li>
  <li>최저임금에 미달하는 근로계약은 그 부분에 한하여 <strong>무효</strong> → 최저임금으로 간주</li>
  <li>최저임금 주지 의무: 사업장에 게시 또는 근로자에게 알려야 함</li>
</ul>`
          },
          {
            title: '남녀고용평등법과 고용정책기본법',
            content: `<h4>남녀고용평등과 일·가정 양립 지원에 관한 법률</h4>
<h4>주요 내용</h4>
<ul>
  <li><strong>고용에서의 남녀 차별 금지:</strong> 모집·채용, 임금, 배치·승진, 교육, 정년·퇴직·해고에서 차별 금지</li>
  <li><strong>동일가치노동 동일임금 원칙:</strong> 같은 사업 내 동일 가치 노동에 동일 임금</li>
  <li><strong>직장 내 성희롱 금지:</strong> 사업주·상급자·근로자의 성희롱 금지, 예방교육 연 1회 의무</li>
  <li><strong>적극적 고용개선조치:</strong> 500인 이상 사업장, 여성 고용비율이 일정 기준 미달 시 시행계획 수립</li>
</ul>
<h4>일·가정 양립 지원</h4>
<ul>
  <li><strong>육아휴직:</strong> 만 8세(초등학교 2학년) 이하 자녀, 1년 이내</li>
  <li><strong>육아기 근로시간 단축:</strong> 육아휴직 대신 주 15~35시간 단축 근무</li>
  <li><strong>배우자 출산휴가:</strong> 10일 유급</li>
  <li><strong>가족돌봄휴직:</strong> 부모·배우자·자녀·배우자부모 돌봄, 90일</li>
</ul>
<h4>고용정책기본법</h4>
<ul>
  <li>국가의 고용정책 기본 방향과 수립 절차 규정</li>
  <li><strong>고용영향평가:</strong> 주요 정책이 고용에 미치는 영향 사전 평가</li>
  <li><strong>지역고용촉진:</strong> 지역별 특성에 맞는 고용 창출 지원</li>
  <li><strong>고용정보 수집·제공:</strong> 고용동향, 직업 전망 등 정보 체계 구축</li>
</ul>`
          }
        ]
      }
    ,
      {
    title: '시험 핵심키워드 - 노동법',
    topics: [
      {
        title: '노동법의 특징',
        content: `<div class="exam-important">
<h4 class="exam-important">노동법의 5대 특징</h4>
<table>
  <tr><th>특징</th><th>내용</th></tr>
  <tr><td><strong>근로자의 인간다운 생활보장</strong></td><td>인간의 존엄성에 기초하여 근로자의 최저 생활수준을 법적으로 보장</td></tr>
  <tr><td><strong>근대시민법 원리의 수정</strong></td><td>계약자유의 원칙, 소유권 절대의 원칙 등 시민법 원리를 수정하여 실질적 평등 실현</td></tr>
  <tr><td><strong>종속근로관계의 규율</strong></td><td>사용자에 대해 경제적·인적으로 종속된 근로관계를 법적으로 규율</td></tr>
  <tr><td><strong>노사대등의 실현</strong></td><td>사용자와 근로자 간의 실질적인 대등관계를 실현하기 위한 법적 장치 마련</td></tr>
  <tr><td><strong>자본주의체제의 유지·발전</strong></td><td>노사 간 갈등을 조정하여 자본주의 경제체제의 안정적 유지·발전 도모</td></tr>
</table>
<p>★ <strong>암기 팁:</strong> '인근종노자' — 인간다운 생활, 근대시민법 수정, 종속근로, 노사대등, 자본주의</p>
<p>※ <strong>출제 함정:</strong> "노동법은 사회주의 체제를 지향한다" → <strong>오답!</strong> 자본주의체제의 유지·발전이 목적임에 주의</p>
</div>`
      },
      {
        title: '근로기본권의 개념',
        content: `<div class="exam-important">
<h4 class="exam-important">근로기본권 체계</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 280" style="max-width:500px;width:100%">
  <defs>
    <marker id="arrow-labor" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="160" y="10" width="200" height="50" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">근로기본권</text>
  <line x1="180" y1="60" x2="100" y2="90" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <line x1="340" y1="60" x2="420" y2="90" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="10" y="90" width="180" height="55" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="113" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">근로의 권리</text>
  <text x="100" y="133" text-anchor="middle" font-size="11" fill="#1e40af">헌법 제32조 제1항</text>
  <rect x="330" y="90" width="180" height="55" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="420" y="113" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">근로3권</text>
  <text x="420" y="133" text-anchor="middle" font-size="11" fill="#dc2626">헌법 제33조 제1항</text>
  <line x1="340" y1="145" x2="260" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <line x1="420" y1="145" x2="420" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <line x1="500" y1="145" x2="500" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="190" y="175" width="140" height="45" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="260" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">단결권</text>
  <rect x="350" y="175" width="140" height="45" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="420" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">단체교섭권</text>
  <rect x="430" y="175" width="140" height="45" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="500" y="202" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">단체행동권</text>
  <text x="260" y="245" text-anchor="middle" font-size="10" fill="#666">노동조합 결성</text>
  <text x="420" y="245" text-anchor="middle" font-size="10" fill="#666">사용자와 교섭</text>
  <text x="500" y="245" text-anchor="middle" font-size="10" fill="#666">쟁의행위(파업 등)</text>
</svg>
</div>
<h4 class="exam-important">근로의 권리 (헌법 제32조 제1항)</h4>
<ul>
  <li>모든 국민은 <strong>근로의 권리</strong>를 가진다</li>
  <li>국가는 사회적·경제적 방법으로 근로자의 <strong>고용의 증진과 적정임금의 보장</strong>에 노력해야 함</li>
  <li>국가는 법률이 정하는 바에 의하여 <strong>최저임금제</strong>를 시행해야 함</li>
</ul>
<h4 class="exam-important">근로3권 (헌법 제33조 제1항)</h4>
<table>
  <tr><th>권리</th><th>내용</th><th>핵심</th></tr>
  <tr><td><strong>단결권</strong></td><td>근로자가 근로조건의 유지·개선을 위하여 자주적으로 단결하는 권리</td><td>노동조합 결성</td></tr>
  <tr><td><strong>단체교섭권</strong></td><td>근로자단체가 사용자 또는 사용자단체와 근로조건에 관해 교섭하는 권리</td><td>사용자와 협상</td></tr>
  <tr><td><strong>단체행동권</strong></td><td>근로자단체가 그 주장을 관철하기 위하여 단체행동을 할 수 있는 권리</td><td>파업·태업 등</td></tr>
</table>
<p>★ <strong>출제 포인트:</strong> 근로의 권리는 <strong>제32조</strong>, 근로3권은 <strong>제33조</strong> — 조문 번호 혼동 주의!</p>
<p>※ <strong>출제 함정:</strong> "단체행동권은 근로의 권리에 포함된다" → <strong>오답!</strong> 단체행동권은 근로3권에 해당</p>
</div>`
      }
    ]
  },
  {
    title: '시험 핵심키워드 - 근로기준법',
    topics: [
      {
        title: '취업규칙의 작성·신고·변경',
        content: `<div class="exam-important">
<h4 class="exam-important">취업규칙 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>작성·신고 의무</strong></td><td>상시 <strong>10명 이상</strong> 근로자를 사용하는 사용자 → <strong>고용노동부장관</strong>에게 신고</td></tr>
  <tr><td><strong>불리하게 변경</strong></td><td>근로자에게 불리하게 변경하려면 <strong>근로자 과반수의 동의</strong> 필요</td></tr>
  <tr><td><strong>노동조합 없는 경우</strong></td><td>근로자 <strong>과반수의 의견</strong>을 들어 <strong>서면으로 첨부</strong>하여 신고</td></tr>
</table>
<p>★ <strong>핵심 구분:</strong> 불리한 변경 = <strong>"동의"</strong> 필요 / 불리하지 않은 변경 = <strong>"의견"</strong> 청취</p>
<p>※ <strong>출제 함정:</strong> "취업규칙을 불리하게 변경할 때 근로자 과반수의 '의견'을 들으면 된다" → <strong>오답!</strong> 반드시 '동의'가 필요함</p>
<p>※ <strong>출제 함정:</strong> "상시 5명 이상 사업장에서 취업규칙 작성 의무" → <strong>오답!</strong> <strong>10명 이상</strong>이 정답</p>
</div>`
      },
      {
        title: '경영상 해고',
        content: `<div class="exam-important">
<h4 class="exam-important">경영상 해고(정리해고)의 4대 요건</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 200" style="max-width:500px;width:100%">
  <rect x="10" y="20" width="110" height="70" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="65" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">1요건</text>
  <text x="65" y="68" text-anchor="middle" font-size="10" fill="#92400e">긴박한</text>
  <text x="65" y="82" text-anchor="middle" font-size="10" fill="#92400e">경영상 필요</text>
  <rect x="135" y="20" width="110" height="70" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="190" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">2요건</text>
  <text x="190" y="68" text-anchor="middle" font-size="10" fill="#1e40af">해고 피하기</text>
  <text x="190" y="82" text-anchor="middle" font-size="10" fill="#1e40af">위한 노력</text>
  <rect x="260" y="20" width="110" height="70" rx="10" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="315" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">3요건</text>
  <text x="315" y="68" text-anchor="middle" font-size="10" fill="#166534">합리적·공정한</text>
  <text x="315" y="82" text-anchor="middle" font-size="10" fill="#166534">해고 기준</text>
  <rect x="385" y="20" width="125" height="70" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="447" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">4요건</text>
  <text x="447" y="68" text-anchor="middle" font-size="10" fill="#9d174d">50일 전 통보</text>
  <text x="447" y="82" text-anchor="middle" font-size="10" fill="#9d174d">성실 협의</text>
  <rect x="10" y="110" width="510" height="45" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="265" y="128" text-anchor="middle" font-size="11" fill="#374151">노동부장관 신고 사항: 해고사유 / 예정인원 / 협의내용 / 해고일정</text>
  <text x="265" y="148" text-anchor="middle" font-size="10" fill="#6b7280">★ 암기: '사예협일' (사유, 예정인원, 협의내용, 일정)</text>
</svg>
</div>
<h4 class="exam-important">해고예고와 부당해고 구제</h4>
<table>
  <tr><th>구분</th><th>내용</th><th>핵심 숫자</th></tr>
  <tr><td><strong>해고예고</strong></td><td>해고일로부터 <strong>30일 전</strong>에 예고</td><td>30일</td></tr>
  <tr><td><strong>해고예고수당</strong></td><td>예고하지 않은 경우 <strong>30일분 이상의 통상임금</strong> 지급</td><td>30일분 통상임금</td></tr>
  <tr><td><strong>50일 전 통보</strong></td><td>근로자대표에게 해고 <strong>50일 전</strong>까지 통보하고 성실하게 협의</td><td>50일</td></tr>
  <tr><td><strong>부당해고 구제</strong></td><td>해고일로부터 <strong>3개월 이내</strong>에 노동위원회에 신청</td><td>3개월</td></tr>
</table>
<p>★ <strong>숫자 정리:</strong> 해고예고 <strong>30일</strong> / 근로자대표 통보 <strong>50일</strong> / 구제신청 <strong>3개월</strong></p>
<p>※ <strong>출제 함정:</strong> "경영상 해고 시 60일 전에 근로자대표에게 통보" → <strong>오답!</strong> 정답은 <strong>50일</strong> 전</p>
<p>※ <strong>출제 함정:</strong> "해고예고수당은 평균임금 30일분" → <strong>오답!</strong> 해고예고수당은 <strong>통상임금</strong> 30일분</p>
</div>`
      },
      {
        title: '용어 정의',
        content: `<div class="exam-important">
<h4 class="exam-important">근로기준법 핵심 용어</h4>
<table>
  <tr><th>용어</th><th>정의</th><th>출제 포인트</th></tr>
  <tr><td><strong>근로자</strong></td><td>직업의 종류와 관계없이 <strong>임금을 목적으로</strong> 사업이나 사업장에 근로를 제공하는 자</td><td>"직업종류 무관"이 핵심</td></tr>
  <tr><td><strong>사용자</strong></td><td><strong>사업주</strong> 또는 사업 <strong>경영담당자</strong>, 그 밖에 근로자에 관한 사항에 대하여 사업주를 위하여 행위하는 자</td><td>사업주 + 경영담당자</td></tr>
  <tr><td><strong>근로</strong></td><td><strong>정신노동</strong>과 <strong>육체노동</strong></td><td>정신+육체 모두 포함</td></tr>
  <tr><td><strong>근로계약</strong></td><td>근로자가 사용자에게 근로를 제공하고 사용자는 이에 대하여 <strong>임금을 지급</strong>하는 것을 목적으로 체결된 계약</td><td>임금지급이 목적</td></tr>
  <tr><td><strong>1주</strong></td><td><strong>휴일을 포함</strong>한 7일</td><td>휴일 포함 여부 주의</td></tr>
  <tr><td><strong>단시간근로자</strong></td><td>1주 동안의 소정근로시간이 그 사업장에서 같은 종류의 업무에 종사하는 <strong>통상 근로자보다 짧은</strong> 근로자</td><td>"통상근로자 기준" 비교</td></tr>
</table>
<p>★ <strong>출제 포인트:</strong> 근로자의 정의에서 <strong>"직업의 종류와 관계없이"</strong>와 <strong>"임금을 목적으로"</strong>가 핵심 키워드</p>
<p>※ <strong>출제 함정:</strong> "1주란 휴일을 제외한 7일을 말한다" → <strong>오답!</strong> 1주는 <strong>휴일을 포함</strong>한 7일</p>
</div>`
      },
      {
        title: '근로조건',
        content: `<div class="exam-important">
<h4 class="exam-important">근로조건 명시사항</h4>
<table>
  <tr><th>구분</th><th>명시사항</th><th>서면교부 필수</th></tr>
  <tr><td>임금</td><td>임금의 구성항목, 계산방법, 지급방법</td><td><strong>O</strong></td></tr>
  <tr><td>근로시간</td><td>소정근로시간</td><td><strong>O</strong></td></tr>
  <tr><td>휴일</td><td>휴일</td><td><strong>O</strong></td></tr>
  <tr><td>휴가</td><td>연차유급휴가</td><td><strong>O</strong></td></tr>
  <tr><td>취업장소·업무</td><td>취업의 장소와 종사하여야 할 업무에 관한 사항</td><td>X (명시만)</td></tr>
  <tr><td>취업규칙</td><td>취업규칙의 필수 기재사항</td><td>X (명시만)</td></tr>
  <tr><td>기숙사</td><td>기숙사 규칙에서 정한 사항</td><td>X (명시만)</td></tr>
</table>
<p>★ <strong>서면교부 필수 4가지:</strong> 임금 / 소정근로시간 / 휴일 / 연차유급휴가 — 암기: <strong>'임소휴연'</strong></p>
<h4 class="exam-important">단시간근로자 특례 (주 15시간 미만)</h4>
<ul>
  <li>주 <strong>15시간 미만</strong> 근로자: <strong>주휴일</strong> 미적용, <strong>연차유급휴가</strong> 미적용</li>
</ul>
<h4 class="exam-important">근로조건 위반 시</h4>
<ul>
  <li>근로자는 <strong>노동위원회에 손해배상</strong>을 청구할 수 있음</li>
  <li>근로자는 근로계약을 <strong>즉시 해제</strong>할 수 있음</li>
</ul>
<p>※ <strong>출제 함정:</strong> "취업장소와 업무는 서면으로 교부해야 한다" → <strong>오답!</strong> 서면교부 필수는 임금/소정근로시간/휴일/연차유급휴가만 해당</p>
</div>`
      },
      {
        title: '평균임금과 통상임금',
        content: `<div class="exam-important">
<h4 class="exam-important">평균임금 vs 통상임금 적용 비교</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 310" style="max-width:500px;width:100%">
  <rect x="10" y="10" width="240" height="290" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">평균임금 적용</text>
  <text x="130" y="70" text-anchor="middle" font-size="11" fill="#1e40af">1. 퇴직급여</text>
  <text x="130" y="92" text-anchor="middle" font-size="11" fill="#1e40af">2. 휴업수당</text>
  <text x="130" y="114" text-anchor="middle" font-size="11" fill="#1e40af">3. 연차유급휴가수당</text>
  <text x="130" y="136" text-anchor="middle" font-size="11" fill="#1e40af">4. 재해보상</text>
  <text x="130" y="158" text-anchor="middle" font-size="11" fill="#1e40af">5. 산업재해보상</text>
  <text x="130" y="180" text-anchor="middle" font-size="11" fill="#1e40af">6. 감급 제한액</text>
  <text x="130" y="202" text-anchor="middle" font-size="11" fill="#1e40af">7. 구직급여</text>
  <text x="130" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">암기: '퇴휴연재산감구'</text>
  <text x="130" y="260" text-anchor="middle" font-size="10" fill="#1e3a8a">퇴직, 휴업, 연차, 재해,</text>
  <text x="130" y="278" text-anchor="middle" font-size="10" fill="#1e3a8a">산재, 감급, 구직</text>
  <rect x="270" y="10" width="240" height="290" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="390" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">통상임금 적용</text>
  <text x="390" y="70" text-anchor="middle" font-size="11" fill="#dc2626">1. 해고예고수당</text>
  <text x="390" y="92" text-anchor="middle" font-size="11" fill="#dc2626">2. 연장근로수당</text>
  <text x="390" y="114" text-anchor="middle" font-size="11" fill="#dc2626">3. 야간근로수당</text>
  <text x="390" y="136" text-anchor="middle" font-size="11" fill="#dc2626">4. 휴일근로수당</text>
  <text x="390" y="158" text-anchor="middle" font-size="11" fill="#dc2626">5. 연차유급휴가(수당)</text>
  <text x="390" y="180" text-anchor="middle" font-size="11" fill="#dc2626">6. 출산전후휴가급여</text>
  <text x="390" y="240" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">암기: '해연야휴연출'</text>
  <text x="390" y="260" text-anchor="middle" font-size="10" fill="#991b1b">해고예고, 연장, 야간,</text>
  <text x="390" y="278" text-anchor="middle" font-size="10" fill="#991b1b">휴일, 연차, 출산</text>
</svg>
</div>
<p>★ <strong>핵심:</strong> 평균임금이 통상임금보다 낮으면 <strong>통상임금을 평균임금으로</strong> 적용</p>
<p>★ <strong>연차유급휴가수당</strong>은 평균임금·통상임금 <strong>양쪽 모두</strong>에 해당 — 출제 빈출!</p>
<p>※ <strong>출제 함정:</strong> "해고예고수당은 평균임금으로 산정한다" → <strong>오답!</strong> 해고예고수당은 <strong>통상임금</strong> 기준</p>
<p>※ <strong>출제 함정:</strong> "휴업수당은 통상임금의 70%이다" → <strong>오답!</strong> 휴업수당은 <strong>평균임금</strong>의 70%</p>
</div>`
      },
      {
        title: '임금지급 원칙',
        content: `<div class="exam-important">
<h4 class="exam-important">임금지급 4대 원칙</h4>
<table>
  <tr><th>원칙</th><th>내용</th></tr>
  <tr><td><strong>통화불(通貨拂)</strong></td><td>한국은행에서 발행한 <strong>통화</strong>로 지급</td></tr>
  <tr><td><strong>직접불(直接拂)</strong></td><td>근로자 본인에게 <strong>직접</strong> 지급</td></tr>
  <tr><td><strong>전액불(全額拂)</strong></td><td>임금의 <strong>전액</strong>을 지급 (법령·단체협약에 의한 경우 외 공제 불가)</td></tr>
  <tr><td><strong>정기불(定期拂)</strong></td><td><strong>매월 1회 이상</strong> 일정한 기일에 지급</td></tr>
</table>
<p>★ <strong>암기:</strong> '통직전정' — 통화불, 직접불, 전액불, 정기불</p>
<h4 class="exam-important">도급사업의 임금지급</h4>
<ul>
  <li><strong>직상수급인</strong>과 <strong>하수급인</strong>이 <strong>연대책임</strong>을 짐</li>
</ul>
<h4 class="exam-important">비상시 지급 사유</h4>
<table>
  <tr><th>사유</th><th>상세</th></tr>
  <tr><td><strong>출산</strong></td><td>근로자 또는 그 수급권자의 출산</td></tr>
  <tr><td><strong>질병</strong></td><td>질병에 걸린 경우</td></tr>
  <tr><td><strong>재해</strong></td><td>재해를 입은 경우</td></tr>
  <tr><td><strong>혼인</strong></td><td>결혼하는 경우</td></tr>
  <tr><td><strong>사망</strong></td><td>사망한 경우</td></tr>
  <tr><td><strong>1주 이상 귀향</strong></td><td>부득이한 사유로 <strong>1주 이상 귀향</strong>하게 되는 경우</td></tr>
</table>
<p>★ <strong>암기:</strong> '출질재혼사귀' — 출산, 질병, 재해, 혼인, 사망, 1주 이상 귀향</p>
<h4 class="exam-important">휴업수당</h4>
<ul>
  <li>사용자의 귀책사유로 휴업하는 경우: <strong>평균임금의 70% 이상</strong> 지급</li>
</ul>
<p>※ <strong>출제 함정:</strong> "비상시 지급 사유에 '2주 이상 귀향'이 포함된다" → <strong>오답!</strong> 정답은 <strong>1주 이상</strong> 귀향</p>
</div>`
      },
      {
        title: '임금의 시효',
        content: `<div class="exam-important">
<h4 class="exam-important">임금채권 소멸시효</h4>
<ul>
  <li>임금채권은 <strong>3년간</strong> 행사하지 않으면 <strong>시효로 소멸</strong></li>
</ul>
<table>
  <tr><th>구분</th><th>소멸시효</th></tr>
  <tr><td><strong>임금채권</strong></td><td><strong>3년</strong></td></tr>
  <tr><td><strong>퇴직금채권</strong></td><td><strong>3년</strong></td></tr>
  <tr><td><strong>재해보상청구권</strong></td><td><strong>3년</strong></td></tr>
</table>
<p>★ <strong>핵심 숫자:</strong> 근로기준법상 각종 채권의 소멸시효는 모두 <strong>3년</strong></p>
<p>※ <strong>출제 함정:</strong> "임금채권의 소멸시효는 5년이다" → <strong>오답!</strong> 정답은 <strong>3년</strong> (민법상 일반채권 10년과 혼동 주의)</p>
</div>`
      },
      {
        title: '임산부 보호',
        content: `<div class="exam-important">
<h4 class="exam-important">출산전후휴가</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 200" style="max-width:500px;width:100%">
  <rect x="10" y="10" width="240" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">일반 출산</text>
  <text x="130" y="58" text-anchor="middle" font-size="12" fill="#1e40af">총 90일 (출산후 45일 이상)</text>
  <text x="130" y="78" text-anchor="middle" font-size="11" fill="#3b82f6">최초 60일 유급</text>
  <rect x="270" y="10" width="240" height="80" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="390" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#9d174d">다태아(쌍둥이)</text>
  <text x="390" y="58" text-anchor="middle" font-size="12" fill="#9d174d">총 120일 (출산후 60일 이상)</text>
  <text x="390" y="78" text-anchor="middle" font-size="11" fill="#ec4899">최초 75일 유급</text>
  <rect x="10" y="110" width="500" height="70" rx="10" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="260" y="132" text-anchor="middle" font-size="11" fill="#374151">출산 전: 언제든지 나누어 사용 가능 | 유산·사산 휴가 부여</text>
  <text x="260" y="152" text-anchor="middle" font-size="11" fill="#374151">휴가 후: 동일 업무 또는 동등 수준 임금의 직무로 복귀</text>
  <text x="260" y="172" text-anchor="middle" font-size="11" fill="#6b7280">임신 중 시간외근로 금지(원칙) | 쉬운 업무로 전환 요청 가능</text>
</svg>
</div>
<h4 class="exam-important">출산전후휴가 핵심 숫자</h4>
<table>
  <tr><th>구분</th><th>일반</th><th>다태아(쌍둥이)</th></tr>
  <tr><td><strong>총 휴가일수</strong></td><td><strong>90일</strong></td><td><strong>120일</strong></td></tr>
  <tr><td><strong>출산후 최소 확보</strong></td><td><strong>45일</strong></td><td><strong>60일</strong></td></tr>
  <tr><td><strong>유급 기간</strong></td><td>최초 <strong>60일</strong></td><td>최초 <strong>75일</strong></td></tr>
</table>
<h4 class="exam-important">임신기 근로시간 단축</h4>
<ul>
  <li>임신 후 <strong>12주 이내</strong> 또는 <strong>36주 이후</strong>: 1일 <strong>2시간</strong> 근로시간 단축 허용</li>
  <li><strong>시작 및 종료시각</strong> 변경을 신청할 수 있음</li>
</ul>
<p>★ <strong>핵심 숫자:</strong> 일반 90/45/60 | 다태아 120/60/75 | 단축 12주·36주·2시간</p>
<p>※ <strong>출제 함정:</strong> "출산전후휴가는 출산후 60일 이상 확보해야 한다" → <strong>오답!</strong> 일반은 <strong>45일</strong>, 다태아가 60일</p>
<p>※ <strong>출제 함정:</strong> "임신기 근로시간 단축은 24주 이내에 가능하다" → <strong>오답!</strong> <strong>12주 이내</strong> 또는 <strong>36주 이후</strong></p>
</div>`
      },
      {
        title: '이행강제금',
        content: `<div class="exam-important">
<h4 class="exam-important">이행강제금 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th><th>핵심</th></tr>
  <tr><td><strong>구제명령 이행기한</strong></td><td>서면통지 후 <strong>30일 이내</strong></td><td>30일</td></tr>
  <tr><td><strong>이행강제금 상한</strong></td><td><strong>3천만원 이하</strong></td><td>3,000만원</td></tr>
  <tr><td><strong>사전 문서통보</strong></td><td>부과 <strong>30일 전</strong>까지 문서로 통보</td><td>30일 전</td></tr>
  <tr><td><strong>반복 부과</strong></td><td>매년 <strong>2회</strong> 범위 내, 이행시까지 반복</td><td>연 2회</td></tr>
  <tr><td><strong>반복 부과 한도</strong></td><td><strong>2년</strong> 초과 불가</td><td>최대 2년</td></tr>
  <tr><td><strong>근로자 신고</strong></td><td>이행기한 지난 후 <strong>15일 이내</strong></td><td>15일</td></tr>
</table>
<h4 class="exam-important">이행강제금 주요 원칙</h4>
<ul>
  <li>이행 <strong>전</strong>에 이미 부과된 이행강제금은 <strong>징수</strong>함 (취소하지 않음)</li>
  <li><strong>국세체납처분</strong>의 예에 따라 징수</li>
</ul>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 130" style="max-width:500px;width:100%">
  <rect x="10" y="20" width="100" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="60" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">구제명령</text>
  <text x="60" y="58" text-anchor="middle" font-size="9" fill="#92400e">서면통지</text>
  <line x1="115" y1="45" x2="140" y2="45" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="145" y="20" width="100" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="195" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">30일 이내</text>
  <text x="195" y="58" text-anchor="middle" font-size="9" fill="#1e40af">이행기한</text>
  <line x1="250" y1="45" x2="275" y2="45" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="280" y="20" width="100" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="330" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">미이행 시</text>
  <text x="330" y="58" text-anchor="middle" font-size="9" fill="#dc2626">30일전 통보</text>
  <line x1="385" y1="45" x2="410" y2="45" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-labor)"/>
  <rect x="415" y="20" width="100" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="465" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">부과</text>
  <text x="465" y="58" text-anchor="middle" font-size="9" fill="#166534">3천만원 이하</text>
  <text x="260" y="100" text-anchor="middle" font-size="10" fill="#6b7280">매년 2회 범위 내 반복 부과 (최대 2년)</text>
  <text x="260" y="118" text-anchor="middle" font-size="10" fill="#6b7280">근로자 신고: 이행기한 경과 후 15일 이내</text>
</svg>
</div>
<p>★ <strong>숫자 총정리:</strong> 이행기한 <strong>30일</strong> / 부과 전 통보 <strong>30일</strong> / 상한 <strong>3천만원</strong> / 연 <strong>2회</strong> / 최대 <strong>2년</strong> / 근로자 신고 <strong>15일</strong></p>
<p>※ <strong>출제 함정:</strong> "이행 후 이미 부과된 이행강제금은 취소한다" → <strong>오답!</strong> 이행 전 부과분은 <strong>징수</strong>함 (취소 안 됨)</p>
</div>`
      },
      {
        title: '최저연령과 취직인허증',
        content: `<div class="exam-important">
<h4 class="exam-important">최저 고용연령</h4>
<ul>
  <li><strong>15세 미만</strong>인 자는 근로자로 사용하지 못함</li>
  <li><strong>중학교에 재학 중인 18세 미만</strong>인 자도 포함</li>
</ul>
<h4 class="exam-important">취직인허증</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>대상</strong></td><td><strong>13세 이상 15세 미만</strong></td></tr>
  <tr><td><strong>예외</strong></td><td>예술공연 참가는 <strong>13세 미만</strong>도 가능</td></tr>
  <tr><td><strong>신청자</strong></td><td><strong>본인</strong>이 고용노동부장관에게 신청 (보호자 아님!)</td></tr>
  <tr><td><strong>서명 필요</strong></td><td><strong>학교장</strong>, <strong>친권자</strong> 또는 <strong>후견인</strong> 서명 + <strong>사용자될 자</strong>와 연명</td></tr>
  <tr><td><strong>취소 사유</strong></td><td>거짓으로 발급받은 경우 취소</td></tr>
</table>
<h4 class="exam-important">미성년자 근로의 특례</h4>
<ul>
  <li>친권자 또는 후견인은 미성년자의 근로계약을 <strong>대리할 수 없음</strong></li>
  <li>미성년자는 <strong>독자적으로 임금을 청구</strong>할 수 있음</li>
</ul>
<h4 class="exam-important">야간·휴일근로 (18세 이상 여성)</h4>
<ul>
  <li>야간근로: <strong>오후 10시 ~ 오전 6시</strong></li>
  <li><strong>근로자의 동의</strong>가 있어야 함</li>
</ul>
<h4 class="exam-important">생리휴가</h4>
<ul>
  <li><strong>월 1일</strong> 청구 시 부여</li>
</ul>
<p>★ <strong>연령 정리:</strong> 사용금지 <strong>15세 미만</strong> / 취직인허증 <strong>13세~15세</strong> / 예술공연 <strong>13세 미만</strong>도 가능</p>
<p>※ <strong>출제 함정:</strong> "취직인허증은 보호자가 신청한다" → <strong>오답!</strong> <strong>본인</strong>이 신청</p>
<p>※ <strong>출제 함정:</strong> "친권자는 미성년자의 근로계약을 대리할 수 있다" → <strong>오답!</strong> 대리계약 <strong>불가</strong></p>
</div>`
      }
    ]
  },
  {
    title: '시험 핵심키워드 - 남녀고용평등법',
    topics: [
      {
        title: '용어 정의',
        content: `<div class="exam-important">
<h4 class="exam-important">남녀고용평등법 핵심 용어</h4>
<table>
  <tr><th>용어</th><th>정의</th></tr>
  <tr><td><strong>차별</strong></td><td>성별, 혼인, 가족 안에서의 지위, 임신 또는 출산 등의 사유로 <strong>합리적인 이유 없이</strong> 채용 또는 근로의 조건을 다르게 하거나, 동일한 조건에서 <strong>특정 성에게 불리한 결과</strong>를 초래하는 것</td></tr>
  <tr><td><strong>차별 아닌 경우</strong></td><td>① 직무의 성격에 비추어 <strong>특정 성이 불가피</strong>하게 요구되는 경우<br>② 여성 근로자의 <strong>모성보호 조치</strong><br>③ 현존 차별 해소를 위한 <strong>적극적 고용개선조치</strong></td></tr>
  <tr><td><strong>직장 내 성희롱</strong></td><td>사업주·상급자 또는 근로자가 <strong>직장 내의 지위를 이용</strong>하거나 <strong>업무와 관련</strong>하여 다른 근로자에게 <strong>성적 굴욕감 또는 혐오감</strong>을 느끼게 하는 행위</td></tr>
  <tr><td><strong>적극적 고용개선조치</strong></td><td>현존하는 차별을 해소하기 위하여 <strong>잠정적</strong>으로 <strong>특정 성</strong>을 우대하는 조치</td></tr>
  <tr><td><strong>근로자</strong></td><td>사업주에게 <strong>고용된 자</strong>와 <strong>취업할 의사를 가진 자</strong>를 포함</td></tr>
</table>
<p>★ <strong>출제 포인트:</strong> 남녀고용평등법의 "근로자"는 근로기준법과 달리 <strong>"취업할 의사를 가진 자"</strong>도 포함!</p>
<p>※ <strong>출제 함정:</strong> "적극적 고용개선조치는 영구적으로 특정 성을 우대하는 조치이다" → <strong>오답!</strong> <strong>"잠정적"</strong>이 핵심 키워드</p>
</div>`
      },
      {
        title: '육아휴직',
        content: `<div class="exam-important">
<h4 class="exam-important">육아휴직 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>대상</strong></td><td>① 임신 중인 여성 근로자<br>② <strong>만 8세 이하</strong> 또는 <strong>초등학교 2학년 이하</strong> 자녀를 가진 근로자 (입양 포함)</td></tr>
  <tr><td><strong>기간</strong></td><td><strong>1년 이내</strong></td></tr>
  <tr><td><strong>제외 대상</strong></td><td>해당 사업에서 계속 근로한 기간이 <strong>6개월 미만</strong>인 근로자</td></tr>
  <tr><td><strong>근속기간</strong></td><td>육아휴직 기간은 <strong>근속기간에 포함</strong></td></tr>
  <tr><td><strong>해고/불리처우</strong></td><td>금지 (단, <strong>사업을 계속할 수 없는 경우</strong>는 예외)</td></tr>
  <tr><td><strong>복귀</strong></td><td>휴직 전과 같은 업무 또는 <strong>동등한 수준의 임금</strong>을 지급하는 직무로 복귀</td></tr>
  <tr><td><strong>기간제/파견</strong></td><td>육아휴직 기간은 <strong>사용기간에서 제외</strong></td></tr>
  <tr><td><strong>종료예정일 연기</strong></td><td><strong>한 번만</strong> 가능</td></tr>
  <tr><td><strong>철회</strong></td><td>개시예정일 <strong>7일 전</strong>까지</td></tr>
</table>
<p>★ <strong>숫자 정리:</strong> 대상 <strong>만 8세/초교 2학년</strong> | 기간 <strong>1년</strong> | 제외 <strong>6개월 미만</strong> | 연기 <strong>1회</strong> | 철회 <strong>7일 전</strong></p>
<p>※ <strong>출제 함정:</strong> "육아휴직 기간은 근속기간에 포함되지 않는다" → <strong>오답!</strong> <strong>포함됨</strong></p>
<p>※ <strong>출제 함정:</strong> "육아휴직 종료예정일은 두 번까지 연기할 수 있다" → <strong>오답!</strong> <strong>한 번만</strong> 가능</p>
</div>`
      },
      {
        title: '평등한 기회보장',
        content: `<div class="exam-important">
<h4 class="exam-important">차별금지 영역별 벌칙 비교</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 320" style="max-width:500px;width:100%">
  <text x="260" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#374151">남녀고용평등법 벌칙 체계</text>
  <rect x="10" y="35" width="500" height="55" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="260" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">5년 이하 징역 / 3천만원 이하 벌금</text>
  <text x="260" y="78" text-anchor="middle" font-size="11" fill="#991b1b">정년·퇴직·해고 차별 (혼인/임신/출산 사유 퇴직 강요 금지)</text>
  <rect x="10" y="100" width="500" height="55" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">3년 이하 징역 / 3천만원 이하 벌금</text>
  <text x="260" y="143" text-anchor="middle" font-size="11" fill="#92400e">임금 차별 (동일가치노동 동일임금 위반)</text>
  <rect x="10" y="165" width="500" height="100" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="260" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">500만원 이하 벌금</text>
  <text x="260" y="208" text-anchor="middle" font-size="11" fill="#1e40af">모집·채용 차별 (남녀 구별, 용모/키/체중/미혼조건 금지)</text>
  <text x="260" y="228" text-anchor="middle" font-size="11" fill="#1e40af">임금 외 금품 차별</text>
  <text x="260" y="248" text-anchor="middle" font-size="11" fill="#1e40af">교육·배치·승진 차별</text>
  <rect x="60" y="280" width="400" height="30" rx="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="260" y="300" text-anchor="middle" font-size="10" fill="#6b7280">동일가치 판단 기준: 기술 / 노력 / 책임 / 작업조건 (노사협의회 의견 청취)</text>
</svg>
</div>
<h4 class="exam-important">모집·채용 시 금지 조건</h4>
<ul>
  <li><strong>용모</strong>, <strong>키</strong>, <strong>체중</strong>, <strong>미혼</strong> 조건을 제시하거나 요구 금지</li>
  <li>남녀를 구별하여 모집·채용 금지</li>
</ul>
<h4 class="exam-important">동일가치노동 판단 기준</h4>
<ul>
  <li><strong>기술</strong>, <strong>노력</strong>, <strong>책임</strong>, <strong>작업조건</strong> 등을 종합적으로 고려</li>
  <li><strong>노사협의회</strong>의 의견을 들어야 함</li>
</ul>
<p>★ <strong>벌칙 크기 순서:</strong> 정년·퇴직·해고(<strong>5년/3천만</strong>) > 임금(<strong>3년/3천만</strong>) > 모집·채용 등(<strong>500만</strong>)</p>
<p>※ <strong>출제 함정:</strong> "모집·채용 차별은 3년 이하 징역에 해당한다" → <strong>오답!</strong> 모집·채용 차별은 <strong>500만원 이하 벌금</strong></p>
</div>`
      },
      {
        title: '명예고용평등감독관',
        content: `<div class="exam-important">
<h4 class="exam-important">명예고용평등감독관 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>위촉 주체</strong></td><td><strong>고용노동부장관</strong>이 노사 추천 근로자를 위촉</td></tr>
  <tr><td><strong>위촉/해촉 위임</strong></td><td><strong>지방고용노동관서장</strong>에게 위임</td></tr>
  <tr><td><strong>신분 보장</strong></td><td>인사상 불이익 금지</td></tr>
  <tr><td><strong>임기</strong></td><td><strong>3년</strong> (연임 가능)</td></tr>
  <tr><td><strong>근무형태</strong></td><td><strong>비상근</strong></td></tr>
  <tr><td><strong>보수</strong></td><td><strong>무보수</strong> 원칙</td></tr>
</table>
<h4 class="exam-important">명예고용평등감독관의 업무</h4>
<ul>
  <li><strong>상담·조언:</strong> 직장 내 고용평등 이행에 관한 상담과 조언</li>
  <li><strong>자율점검 참여:</strong> 사업장의 고용평등 자율적 점검 활동에 참여</li>
  <li><strong>개선건의·신고:</strong> 법령 위반 사실이 있는 경우 개선 건의 및 신고</li>
  <li><strong>홍보·계몽:</strong> 남녀고용평등 의식을 확산시키기 위한 홍보·계몽 활동</li>
</ul>
<p>★ <strong>암기:</strong> 업무 = '상자개홍' (상담조언, 자율점검, 개선건의/신고, 홍보계몽)</p>
<p>★ <strong>핵심:</strong> 비상근 + 무보수 + 임기 3년 + 연임 가능</p>
<p>※ <strong>출제 함정:</strong> "명예고용평등감독관은 상근직이다" → <strong>오답!</strong> <strong>비상근</strong>이며 <strong>무보수</strong> 원칙</p>
</div>`
      },
      {
        title: '출산전후휴가 지원',
        content: `<div class="exam-important">
<h4 class="exam-important">출산전후휴가 지원 핵심</h4>
<ul>
  <li>출산전후휴가 기간 중 <strong>통상임금</strong>에 해당하는 금액을 지급</li>
  <li><strong>국가재정</strong> 또는 <strong>사회보험</strong>에서 분담 가능</li>
  <li>사업주는 출산전후휴가 급여 신청에 필요한 <strong>관계 서류의 작성에 협력</strong>해야 함</li>
  <li>지급 요건, 기간, 절차 등은 <strong>별도 법률</strong>에서 정함</li>
</ul>
<p>★ <strong>출제 포인트:</strong> "통상임금" 지급이라는 점에 주의 (평균임금이 아님)</p>
</div>`
      },
      {
        title: '배우자 출산휴가',
        content: `<div class="exam-important">
<h4 class="exam-important">배우자 출산휴가 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>일수</strong></td><td><strong>10일</strong> 유급</td></tr>
  <tr><td><strong>청구 기한</strong></td><td>배우자 출산 후 <strong>90일 이내</strong>에 청구</td></tr>
  <tr><td><strong>분할 사용</strong></td><td><strong>1회에 한정</strong>하여 나누어 사용 가능</td></tr>
  <tr><td><strong>보호</strong></td><td>해고 및 불리한 처우 금지</td></tr>
</table>
<p>★ <strong>숫자 정리:</strong> <strong>10일</strong> 유급 / 출산 후 <strong>90일</strong> 이내 / <strong>1회</strong> 분할</p>
<p>※ <strong>출제 함정:</strong> "배우자 출산휴가는 5일이다" → <strong>오답!</strong> <strong>10일</strong> 유급</p>
<p>※ <strong>출제 함정:</strong> "배우자 출산휴가는 여러 번 나누어 사용할 수 있다" → <strong>오답!</strong> <strong>1회에 한정</strong></p>
</div>`
      },
      {
        title: '적용범위',
        content: `<div class="exam-important">
<h4 class="exam-important">남녀고용평등법 적용범위</h4>
<ul>
  <li><strong>모든 사업</strong> 또는 <strong>사업장</strong>에 적용</li>
</ul>
<h4 class="exam-important">적용 제외</h4>
<table>
  <tr><th>제외 대상</th><th>내용</th></tr>
  <tr><td><strong>동거하는 친족만으로 이루어진 사업</strong></td><td>가족 경영 사업으로서 근로자를 별도로 고용하지 않은 경우</td></tr>
  <tr><td><strong>가사사용인</strong></td><td>가정 내에서 가사(가정일)에 종사하는 자</td></tr>
</table>
<ul>
  <li>다른 법률에 <strong>특별한 규정</strong>이 있는 경우를 제외하고는 이 법이 적용됨</li>
</ul>
<p>★ <strong>출제 포인트:</strong> 적용 제외 = <strong>동거친족만 사업</strong> + <strong>가사사용인</strong> (근로기준법과 동일한 제외 대상)</p>
</div>`
      },
      {
        title: '성희롱 예방교육',
        content: `<div class="exam-important">
<h4 class="exam-important">성희롱 예방교육 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>횟수</strong></td><td>연 <strong>1회 이상</strong></td></tr>
  <tr><td><strong>포함 내용</strong></td><td>① 관련 <strong>법령</strong><br>② <strong>처리절차</strong>와 <strong>조치기준</strong><br>③ <strong>고충상담</strong> 및 <strong>구제절차</strong><br>④ 그 밖의 예방에 필요한 사항</td></tr>
  <tr><td><strong>교육 방법</strong></td><td>연수, 조회, 회의, 사이버교육 등</td></tr>
</table>
<h4 class="exam-important">교육으로 인정되지 않는 경우</h4>
<ul>
  <li>단순한 <strong>자료 배포</strong></li>
  <li><strong>게시</strong></li>
  <li><strong>이메일</strong> 발송</li>
  <li><strong>게시판</strong> 공지</li>
</ul>
<p style="color:#dc2626;font-weight:bold">→ 위 방법만으로는 교육 실시로 인정하지 않음!</p>
<h4 class="exam-important">소규모·단일성별 사업장 특례</h4>
<ul>
  <li><strong>상시 10명 미만</strong> 또는 <strong>한쪽 성으로만 구성</strong>된 사업장</li>
  <li>교육자료 또는 홍보물의 <strong>배포·게시</strong>로 교육에 갈음 가능</li>
</ul>
<p>★ <strong>출제 포인트:</strong> 단순 배포·게시·이메일 = 교육 아님! <strong>단, 10명 미만/단일성별이면 예외</strong></p>
<p>※ <strong>출제 함정:</strong> "이메일 발송으로 성희롱 예방교육을 실시할 수 있다" → <strong>원칙적 오답!</strong> (10명 미만/단일성별만 예외)</p>
</div>`
      },
      {
        title: '성희롱 발생시 조치',
        content: `<div class="exam-important">
<h4 class="exam-important">성희롱 발생 시 조치 절차</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 250" style="max-width:500px;width:100%">
  <defs>
    <marker id="arrow-harass" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="160" y="10" width="200" height="40" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="260" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">성희롱 발생 (누구든지 신고 가능)</text>
  <line x1="260" y1="50" x2="260" y2="70" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-harass)"/>
  <rect x="130" y="72" width="260" height="35" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">지체 없이 사실확인 조사 실시</text>
  <line x1="130" y1="107" x2="80" y2="130" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-harass)"/>
  <line x1="390" y1="107" x2="440" y2="130" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-harass)"/>
  <rect x="10" y="132" width="180" height="55" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">조사기간 피해자 보호</text>
  <text x="100" y="172" text-anchor="middle" font-size="10" fill="#1e40af">근무장소 변경 / 유급휴가 등</text>
  <rect x="330" y="132" width="180" height="55" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="420" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">확인 시 피해자 원하면</text>
  <text x="420" y="172" text-anchor="middle" font-size="10" fill="#166534">근무장소변경/배치전환/유급휴가</text>
  <rect x="140" y="200" width="240" height="40" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="260" y="220" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">가해자: 징계 / 근무장소 변경 등 조치</text>
</svg>
</div>
<h4 class="exam-important">핵심 포인트</h4>
<ul>
  <li><strong>누구든지</strong> 직장 내 성희롱 발생 사실을 신고할 수 있음</li>
  <li>사업주는 <strong>지체 없이</strong> 사실 확인을 위한 조사 실시</li>
  <li>조사 기간 중 피해자 보호 조치: <strong>근무장소 변경, 유급휴가</strong> 등</li>
  <li>사실이 확인되고 피해자가 원하는 경우: <strong>근무장소 변경, 배치전환, 유급휴가</strong></li>
  <li>가해자에 대해: <strong>징계, 근무장소 변경</strong> 등 필요한 조치</li>
</ul>
<p>★ <strong>핵심:</strong> 신고 주체 = <strong>"누구든지"</strong> / 조사 = <strong>"지체 없이"</strong></p>
</div>`
      },
      {
        title: '고객 성희롱 방지',
        content: `<div class="exam-important">
<h4 class="exam-important">고객 등에 의한 성희롱 방지</h4>
<ul>
  <li><strong>업무와 관련</strong>하여 고객 등 제3자가 근로자에게 성희롱을 한 경우</li>
  <li>사업주는 피해 근로자에게 <strong>근무장소 변경, 배치전환, 유급휴가</strong> 등의 조치를 해야 함</li>
</ul>
<h4 class="exam-important">불이익 금지</h4>
<ul>
  <li>피해를 주장하는 근로자에 대한 <strong>해고 및 불이익 금지</strong></li>
  <li>고객 등의 <strong>성적 요구를 거부</strong>한 근로자에 대한 <strong>해고 및 불이익 금지</strong></li>
</ul>
<p>★ <strong>핵심:</strong> 피해 주장 근로자 보호 + 성적 요구 거부 근로자 보호 = 모두 해고/불이익 금지</p>
<p>※ <strong>출제 함정:</strong> "고객에 의한 성희롱은 사업주의 책임이 아니다" → <strong>오답!</strong> 사업주가 피해 근로자 보호 조치 의무 있음</p>
</div>`
      }
    ]
  },
  {
    title: '시험 핵심키워드 - 고령자고용촉진법',
    topics: [
      {
        title: '용어 정의',
        content: `<div class="exam-important">
<h4 class="exam-important">고령자·준고령자 연령 기준</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 140" style="max-width:500px;width:100%">
  <rect x="10" y="20" width="240" height="50" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="130" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">준고령자</text>
  <text x="130" y="62" text-anchor="middle" font-size="12" fill="#1e40af">50세 이상 ~ 55세 미만</text>
  <rect x="270" y="20" width="240" height="50" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="390" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">고령자</text>
  <text x="390" y="62" text-anchor="middle" font-size="12" fill="#dc2626">55세 이상</text>
  <rect x="60" y="85" width="400" height="40" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="260" y="110" text-anchor="middle" font-size="11" fill="#374151">★ 기준: 55세를 기준으로 이상 = 고령자, 미만(50세~) = 준고령자</text>
</svg>
</div>
<h4 class="exam-important">기준고용률</h4>
<table>
  <tr><th>업종</th><th>기준고용률</th></tr>
  <tr><td><strong>제조업</strong></td><td><strong>2%</strong></td></tr>
  <tr><td><strong>운수업, 부동산 및 임대업</strong></td><td><strong>6%</strong></td></tr>
  <tr><td><strong>그 외 업종</strong></td><td><strong>3%</strong></td></tr>
</table>
<p>★ <strong>암기:</strong> 제조업 <strong>2%</strong> / 운수·부동산임대 <strong>6%</strong> / 나머지 <strong>3%</strong> → '이육삼(263)'</p>
<p>※ <strong>출제 함정:</strong> "고령자는 60세 이상이다" → <strong>오답!</strong> 고령자는 <strong>55세 이상</strong></p>
<p>※ <strong>출제 함정:</strong> "준고령자는 45세 이상 55세 미만이다" → <strong>오답!</strong> 준고령자는 <strong>50세 이상</strong> 55세 미만</p>
</div>`
      },
      {
        title: '정년퇴직자 재고용',
        content: `<div class="exam-important">
<h4 class="exam-important">정년퇴직자 재고용 핵심</h4>
<ul>
  <li>정년에 도달한 자가 <strong>재취업을 희망</strong>하면 그 <strong>직업능력에 맞는 직종</strong>에 재고용하도록 <strong>노력</strong>해야 함</li>
  <li><strong>종전의 근로기간</strong>을 근속기간에서 <strong>제외할 수 있음</strong></li>
  <li>재고용 시 <strong>임금을 달리 결정</strong>할 수 있음</li>
</ul>
<p>★ <strong>핵심:</strong> 재고용은 <strong>"의무"가 아니라 "노력 의무"</strong></p>
<p>★ <strong>핵심:</strong> 종전 근로기간 제외 가능 + 임금 달리 결정 가능 → 새로운 조건 설정 가능</p>
<p>※ <strong>출제 함정:</strong> "정년퇴직자 재고용 시 반드시 이전과 동일한 임금을 지급해야 한다" → <strong>오답!</strong> <strong>달리 결정 가능</strong></p>
</div>`
      },
      {
        title: '우선고용직종',
        content: `<div class="exam-important">
<h4 class="exam-important">우선고용직종 핵심 정리</h4>
<ul>
  <li><strong>고용노동부장관</strong>이 <strong>고시</strong>로 정함</li>
  <li><strong>고령자</strong>와 <strong>준고령자</strong> 모두 우선고용 대상</li>
  <li><strong>공공기관</strong>은 매년 <strong>고용현황을 제출</strong>해야 함</li>
</ul>
<p>★ <strong>핵심:</strong> 우선고용직종 = 고용노동부장관 <strong>고시</strong> / 공공기관 = 매년 <strong>고용현황 제출</strong></p>
</div>`
      },
      {
        title: '고령자인재은행',
        content: `<div class="exam-important">
<h4 class="exam-important">고령자인재은행 지정 요건</h4>
<table>
  <tr><th>구분</th><th>요건</th></tr>
  <tr><td><strong>법인 유형</strong></td><td><strong>비영리법인</strong> 또는 <strong>공익단체</strong> (무료직업소개사업 수행) + <strong>직업능력개발훈련 위탁기관</strong></td></tr>
  <tr><td><strong>시설</strong></td><td>전화 <strong>1회선 이상</strong>, PC <strong>1대 이상</strong>, <strong>별도 상담실</strong></td></tr>
  <tr><td><strong>인력</strong></td><td><strong>상담 전담자 1인</strong> + <strong>운영지원 1명</strong></td></tr>
</table>
<h4 class="exam-important">고령자인재은행 사업 내용</h4>
<ul>
  <li><strong>구인·구직 등록</strong> 및 <strong>취업알선</strong></li>
  <li><strong>직업상담</strong> 및 <strong>재취업 상담</strong></li>
  <li><strong>직업능력개발훈련</strong></li>
</ul>
<p>★ <strong>시설 암기:</strong> 전화 1 / PC 1 / 별도상담실 → '일일별'</p>
<p>※ <strong>출제 함정:</strong> "고령자인재은행은 영리법인도 지정받을 수 있다" → <strong>오답!</strong> <strong>비영리법인/공익단체</strong>만 가능</p>
</div>`
      },
      {
        title: '세제지원',
        content: `<div class="exam-important">
<h4 class="exam-important">세제지원 핵심</h4>
<ul>
  <li>상시 <strong>300명 이상</strong> 사업장에서 <strong>기준고용률을 초과</strong>하여 고령자를 추가 고용한 경우</li>
  <li>해당 사업주에게 <strong>조세감면</strong> 혜택 부여</li>
</ul>
<table>
  <tr><th>요건</th><th>내용</th></tr>
  <tr><td><strong>사업장 규모</strong></td><td>상시 <strong>300명 이상</strong></td></tr>
  <tr><td><strong>고용 조건</strong></td><td>기준고용률을 <strong>초과</strong>하여 고령자를 추가 고용</td></tr>
  <tr><td><strong>지원 내용</strong></td><td><strong>조세감면</strong></td></tr>
</table>
<p>★ <strong>핵심 숫자:</strong> <strong>300명 이상</strong> 사업장 + 기준고용률 <strong>초과</strong> 시 조세감면</p>
</div>`
      },
      {
        title: '연령차별금지',
        content: `<div class="exam-important">
<h4 class="exam-important">연령차별 금지 분야</h4>
<ul>
  <li><strong>모집·채용</strong></li>
  <li><strong>임금, 임금 외의 금품 지급, 복리후생</strong></li>
  <li><strong>교육·훈련</strong></li>
  <li><strong>배치·전보·승진</strong></li>
  <li><strong>퇴직·해고</strong></li>
</ul>
<h4 class="exam-important">연령차별 예외 사유</h4>
<table>
  <tr><th>예외 사유</th><th>내용</th></tr>
  <tr><td><strong>직무의 성격</strong></td><td>직무의 성격에 비추어 특정 연령기준이 <strong>불가피하게 요구</strong>되는 경우</td></tr>
  <tr><td><strong>근속기간 차등</strong></td><td>근속기간의 차이를 고려하여 <strong>합리적으로 임금 등을 차등</strong> 지급하는 경우</td></tr>
  <tr><td><strong>정년 설정</strong></td><td>이 법에 따른 정년을 설정하는 경우</td></tr>
  <tr><td><strong>특정 연령집단 지원</strong></td><td>특정 연령집단의 <strong>고용유지·촉진</strong>을 위한 지원조치를 하는 경우</td></tr>
</table>
<h4 class="exam-important">진정(구제) 기관</h4>
<ul>
  <li>연령차별 진정은 <strong>국가인권위원회</strong>에 제기</li>
  <li><strong>노동위원회가 아님!</strong></li>
</ul>
<p>★ <strong>핵심:</strong> 연령차별 진정 = <strong>국가인권위원회</strong> (노동위원회 아님!)</p>
<p>※ <strong>출제 함정:</strong> "연령차별 진정은 노동위원회에 한다" → <strong>오답!</strong> <strong>국가인권위원회</strong>가 정답</p>
</div>`
      },
      {
        title: '고용정보센터 업무',
        content: `<div class="exam-important">
<h4 class="exam-important">고령자 고용정보센터 업무</h4>
<ul>
  <li><strong>구인·구직 등록</strong>, <strong>직업지도</strong>, <strong>취업알선</strong></li>
  <li><strong>직장적응훈련</strong> 및 <strong>교육</strong></li>
  <li><strong>정년연장</strong> 및 <strong>고령자 고용에 관한 인사·노무관리</strong></li>
  <li><strong>작업환경 개선</strong>에 관한 <strong>기술상담·교육·지도</strong></li>
  <li><strong>고령자 고용촉진 홍보</strong></li>
</ul>
<p>★ <strong>암기:</strong> '구직적정작홍' — 구인구직/직업지도/취업알선, 직장적응훈련, 정년연장/인사노무관리, 작업환경개선, 홍보</p>
<p>※ <strong>출제 함정:</strong> 고용정보센터의 업무에 <strong>"직업능력개발훈련"</strong>이 포함되지 않음 → 이는 <strong>고령자인재은행</strong>의 업무</p>
</div>`
      },
      {
        title: '고용 노력의무',
        content: `<div class="exam-important">
<h4 class="exam-important">고령자 고용 노력의무</h4>
<ul>
  <li>상시 <strong>300명 이상</strong>의 근로자를 사용하는 사업장</li>
  <li><strong>기준고용률 이상</strong>으로 고령자를 고용하도록 <strong>노력</strong>해야 함</li>
</ul>
<table>
  <tr><th>업종</th><th>기준고용률</th></tr>
  <tr><td>제조업</td><td><strong>2%</strong></td></tr>
  <tr><td>운수업, 부동산 및 임대업</td><td><strong>6%</strong></td></tr>
  <tr><td>그 외</td><td><strong>3%</strong></td></tr>
</table>
<p>★ <strong>핵심:</strong> <strong>300명 이상</strong> + 기준고용률 이상 고용 <strong>"노력"</strong> 의무 (강제 의무 아님)</p>
<p>※ <strong>출제 함정:</strong> "100명 이상 사업장에 고령자 고용의무가 있다" → <strong>오답!</strong> <strong>300명 이상</strong>이며, <strong>노력 의무</strong>임</p>
</div>`
      },
      {
        title: '기본계획',
        content: `<div class="exam-important">
<h4 class="exam-important">고령자 고용촉진 기본계획</h4>
<div style="text-align:center;margin:20px 0">
<svg viewBox="0 0 520 120" style="max-width:500px;width:100%">
  <defs>
    <marker id="arrow-plan" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/></marker>
  </defs>
  <rect x="10" y="25" width="100" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="60" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">1단계</text>
  <text x="60" y="62" text-anchor="middle" font-size="10" fill="#92400e">관계기관 협의</text>
  <line x1="115" y1="50" x2="140" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-plan)"/>
  <rect x="145" y="25" width="100" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="195" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">2단계</text>
  <text x="195" y="62" text-anchor="middle" font-size="10" fill="#1e40af">계획 수립</text>
  <line x1="250" y1="50" x2="275" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-plan)"/>
  <rect x="280" y="25" width="100" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="330" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">3단계</text>
  <text x="330" y="62" text-anchor="middle" font-size="10" fill="#166534">고용정책심의회</text>
  <line x1="385" y1="50" x2="410" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow-plan)"/>
  <rect x="415" y="25" width="100" height="50" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="465" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">4단계</text>
  <text x="465" y="62" text-anchor="middle" font-size="10" fill="#9d174d">국회 보고</text>
  <text x="260" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">★ 순서: 협의 → 수립 → 심의 → 보고</text>
</svg>
</div>
<h4 class="exam-important">기본계획 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>수립 주기</strong></td><td><strong>5년</strong>마다 수립</td></tr>
  <tr><td><strong>사전 협의</strong></td><td><strong>관계 중앙행정기관의 장</strong>과 협의</td></tr>
  <tr><td><strong>심의</strong></td><td><strong>고용정책심의회</strong> 심의</td></tr>
  <tr><td><strong>보고</strong></td><td><strong>국회 소관 상임위원회</strong>에 보고</td></tr>
</table>
<h4 class="exam-important">기본계획 포함 사항</h4>
<ul>
  <li><strong>직전 기본계획의 평가</strong></li>
  <li>고령자 고용의 <strong>현황과 전망</strong></li>
  <li><strong>직업능력개발</strong> 관련 사항</li>
  <li><strong>취업가능성 개선</strong> 관련 사항</li>
  <li>고령자 고용촉진에 관한 <strong>주요 시책</strong></li>
</ul>
<p>★ <strong>암기:</strong> 순서 = '협수심보' (협의 → 수립 → 심의 → 보고)</p>
<p>★ <strong>핵심 숫자:</strong> <strong>5년</strong>마다 수립</p>
<p>※ <strong>출제 함정:</strong> "기본계획은 3년마다 수립한다" → <strong>오답!</strong> <strong>5년</strong>마다</p>
<p>※ <strong>출제 함정:</strong> "기본계획은 수립 후 심의 없이 국회에 보고한다" → <strong>오답!</strong> <strong>고용정책심의회 심의</strong>를 거쳐야 함</p>
</div>`
      },
      {
        title: '중견전문인력 고용지원센터',
        content: `<div class="exam-important">
<h4 class="exam-important">중견전문인력 고용지원센터 핵심 정리</h4>
<table>
  <tr><th>구분</th><th>내용</th></tr>
  <tr><td><strong>지정 주체</strong></td><td><strong>고용노동부장관</strong>이 지정</td></tr>
  <tr><td><strong>대상 법인</strong></td><td><strong>비영리법인</strong> 또는 <strong>공익단체</strong> (무료직업소개사업 수행)</td></tr>
</table>
<h4 class="exam-important">중견전문인력 고용지원센터 사업</h4>
<ul>
  <li><strong>구인·구직 등록</strong></li>
  <li><strong>직업상담</strong></li>
  <li><strong>취업알선</strong></li>
  <li><strong>경영자문</strong></li>
  <li><strong>자원봉사 지원</strong></li>
</ul>
<h4 class="exam-important">고령자인재은행 vs 중견전문인력 고용지원센터 비교</h4>
<table>
  <tr><th>구분</th><th>고령자인재은행</th><th>중견전문인력 고용지원센터</th></tr>
  <tr><td><strong>공통 사업</strong></td><td colspan="2">구인·구직, 직업상담, 취업알선</td></tr>
  <tr><td><strong>고유 사업</strong></td><td>재취업 상담, <strong>직업능력개발훈련</strong></td><td><strong>경영자문</strong>, <strong>자원봉사 지원</strong></td></tr>
  <tr><td><strong>시설 요건</strong></td><td>전화 1회선, PC 1대, 별도 상담실</td><td>별도 규정 없음</td></tr>
  <tr><td><strong>인력 요건</strong></td><td>상담 전담자 1인, 운영지원 1명</td><td>별도 규정 없음</td></tr>
</table>
<p>★ <strong>구분 핵심:</strong> 고령자인재은행 = <strong>직업능력개발훈련</strong> / 중견전문인력센터 = <strong>경영자문 + 자원봉사</strong></p>
<p>※ <strong>출제 함정:</strong> "중견전문인력 고용지원센터에서 직업능력개발훈련을 실시한다" → <strong>오답!</strong> 이는 <strong>고령자인재은행</strong>의 사업</p>
</div>`
      }
    ]
  }
    ]
  },

  silgi: {
    name: '실기 - 직업상담 실무',
    code: 'silgi',
    color: '#6366F1',
    icon: 'fa-solid fa-file-pen',
    description: '실기 시험 대비 상담 실무, 계산 문제, 핵심 공식을 정리합니다.',
    chapters: [
      {
        title: '상담 실무',
        topics: [
          {
            title: '상담과정과 사례분석',
            content: `<h4>직업상담 실무 절차</h4>
<ol>
  <li><strong>접수 면접:</strong> 내담자의 기본정보 수집, 주호소 문제 파악</li>
  <li><strong>구조화:</strong> 상담의 목적, 과정, 비밀보장 안내</li>
  <li><strong>심리검사 실시:</strong> 적성, 흥미, 가치관 검사 실시 및 해석</li>
  <li><strong>직업정보 탐색:</strong> 워크넷, 직업사전 등 활용</li>
  <li><strong>의사결정 지원:</strong> 합리적 직업선택 돕기</li>
  <li><strong>구직활동 지원:</strong> 이력서 작성, 면접 기술 훈련</li>
  <li><strong>추수상담:</strong> 취업 후 적응 확인</li>
</ol>
<h4>사례분석 포인트</h4>
<ul>
  <li>내담자의 주호소 문제를 정확히 파악</li>
  <li>적절한 상담이론과 기법 적용</li>
  <li>구체적인 상담 계획 수립</li>
  <li>활용 가능한 직업정보와 심리검사 제시</li>
</ul>
<h4>서술형 답안 작성 요령</h4>
<ul>
  <li>질문에서 요구하는 핵심 키워드를 반드시 포함</li>
  <li>번호를 매겨 체계적으로 작성</li>
  <li>간결하고 명확하게 서술</li>
  <li>이론적 근거를 함께 제시</li>
</ul>`
          },
          {
            title: '실기 서술형 빈출 유형',
            content: `<h4>상담이론 관련 빈출 유형</h4>
<ul>
  <li>특정 상담이론의 <strong>핵심 개념 3가지</strong> 서술 (예: REBT의 비합리적 신념 4유형)</li>
  <li>특정 이론의 <strong>상담 기법</strong> 나열 (예: 게슈탈트 상담 기법 5가지)</li>
  <li>상담이론 간 <strong>비교</strong> (예: 파슨스 vs 로저스, 행동주의 vs 인지적 접근)</li>
  <li>사례를 읽고 적절한 <strong>상담이론/기법</strong> 적용 (예: "이 내담자에게 적합한 상담 접근은?")</li>
</ul>
<h4>자주 출제되는 이론별 핵심 키워드</h4>
<table>
  <tr><th>이론</th><th>반드시 기억할 핵심 키워드</th></tr>
  <tr><td>파슨스</td><td>자기이해, 직업이해, 합리적 추론 (3단계)</td></tr>
  <tr><td>윌리엄슨</td><td>분석-종합-진단-예언-상담-추수지도 (6단계)</td></tr>
  <tr><td>로저스</td><td>무조건적 긍정적 존중, 공감적 이해, 일치성</td></tr>
  <tr><td>REBT</td><td>ABCDE 모델, 당위적 사고, 파국화</td></tr>
  <tr><td>벡</td><td>인지삼제, 자동적 사고, 핵심신념, 인지적 오류</td></tr>
  <tr><td>현실치료</td><td>선택이론, 5가지 욕구, WDEP, 전행동</td></tr>
  <tr><td>게슈탈트</td><td>알아차림, 지금-여기, 빈의자, 미해결과제</td></tr>
  <tr><td>아들러</td><td>열등감, 생활양식, 사회적 관심, 격려, 출생순위</td></tr>
  <tr><td>해결중심</td><td>기적질문, 예외질문, 척도질문, 방문형/불평형/고객형</td></tr>
  <tr><td>교류분석</td><td>PAC 자아상태, 상보/교차/이면 교류, 인생태도</td></tr>
</table>
<h4>진로이론 빈출 유형</h4>
<ul>
  <li>Super의 <strong>5단계</strong>와 각 단계의 특징</li>
  <li>Ginzberg의 <strong>3기</strong>와 하위단계</li>
  <li>Gottfredson의 <strong>4단계</strong>와 타협의 순서</li>
  <li>Holland의 <strong>RIASEC 6유형</strong> 특성과 대표 직업</li>
  <li>크럼볼츠의 사회학습이론 <strong>4가지 요인</strong></li>
  <li>SCCT의 <strong>3가지 핵심 변인</strong> (자기효능감, 결과기대, 개인적 목표)</li>
</ul>`
          }
        ]
      },
      {
        title: '노동시장 계산',
        topics: [
          {
            title: '실업률과 경제활동참가율',
            content: `<h4>핵심 공식</h4>
<div class="formula-box">
  <p><strong>실업률 = 실업자 / 경제활동인구 × 100</strong></p>
  <p><strong>경제활동참가율 = 경제활동인구 / 15세 이상 인구 × 100</strong></p>
  <p><strong>고용률 = 취업자 / 15세 이상 인구 × 100</strong></p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>비경제활동인구 = 15세 이상 인구 - 경제활동인구</p>
</div>
<h4>예제</h4>
<p><strong>문제:</strong> 15세 이상 인구 1,000만 명, 취업자 600만 명, 실업자 40만 명일 때:</p>
<ul>
  <li>경제활동인구 = 600 + 40 = 640만 명</li>
  <li>경제활동참가율 = 640/1000 × 100 = 64%</li>
  <li>실업률 = 40/640 × 100 = 6.25%</li>
  <li>고용률 = 600/1000 × 100 = 60%</li>
</ul>`
          },
          {
            title: '노동수요탄력성과 한계수입생산',
            content: `<h4>노동수요의 임금탄력성</h4>
<div class="formula-box">
  <p><strong>노동수요 탄력성 = 노동수요량의 변화율 / 임금의 변화율</strong></p>
  <p>= (ΔL/L) / (ΔW/W)</p>
</div>
<ul>
  <li>|탄력성| > 1: 탄력적 (임금 변화에 민감)</li>
  <li>|탄력성| < 1: 비탄력적 (임금 변화에 둔감)</li>
  <li>|탄력성| = 1: 단위탄력적</li>
</ul>
<h4>마셜의 파생수요 법칙 (탄력성이 큰 경우)</h4>
<ol>
  <li>생산물 수요의 가격탄력성이 클수록</li>
  <li>다른 생산요소의 대체가 용이할수록</li>
  <li>총비용에서 해당 노동비용이 차지하는 비중이 클수록</li>
  <li>다른 생산요소의 공급탄력성이 클수록</li>
</ol>
<h4>한계수입생산(MRPL)</h4>
<div class="formula-box">
  <p><strong>MRPL = MPL × MR</strong></p>
  <p>완전경쟁: MRPL = VMPL = MPL × P</p>
  <p>이윤극대화: MRPL = W (임금)</p>
</div>
<h4>예제</h4>
<p><strong>문제:</strong> 근로자 1명 추가 고용 시 생산량 10개 증가, 생산물 가격 5,000원일 때:</p>
<ul>
  <li>MPL = 10개</li>
  <li>VMPL = 10 × 5,000 = 50,000원</li>
  <li>임금이 50,000원 이하면 고용, 이상이면 비고용</li>
</ul>`
          },
          {
            title: '임금 계산과 퇴직금',
            content: `<h4>평균임금 계산</h4>
<div class="formula-box">
  <p><strong>평균임금 = 산정사유 발생일 이전 3개월간 지급된 임금총액 ÷ 그 기간의 총 일수</strong></p>
</div>
<h4>예제 1: 평균임금 계산</h4>
<p><strong>문제:</strong> 퇴직일: 6월 30일, 최근 3개월(4·5·6월) 임금: 기본급 300만원/월, 식대 20만원/월. 총 일수 = 30+31+30 = 91일</p>
<ul>
  <li>3개월 임금총액 = (300+20)×3 = 960만원</li>
  <li>평균임금 = 9,600,000 / 91 = <strong>105,495원/일</strong></li>
  <li>★ 평균임금이 통상임금보다 낮으면 통상임금을 평균임금으로 함</li>
</ul>
<h4>퇴직금 계산</h4>
<div class="formula-box">
  <p><strong>퇴직금 = 1일 평균임금 × 30일 × (재직일수 / 365)</strong></p>
</div>
<h4>예제 2: 퇴직금 계산</h4>
<p><strong>문제:</strong> 1일 평균임금 = 100,000원, 재직기간 = 3년(1,095일)</p>
<ul>
  <li>퇴직금 = 100,000 × 30 × (1,095/365)</li>
  <li>= 100,000 × 30 × 3 = <strong>9,000,000원</strong></li>
</ul>
<h4>연장근로수당 계산</h4>
<div class="formula-box">
  <p><strong>연장근로수당 = 시간당 통상임금 × 1.5 × 연장근로시간</strong></p>
  <p>야간(22시~06시) 또는 휴일에 연장근로 시: 통상임금 × 2.0</p>
</div>
<h4>예제 3: 연장근로수당</h4>
<p><strong>문제:</strong> 시간당 통상임금 = 15,000원, 연장근로 4시간(그 중 야간 2시간)</p>
<ul>
  <li>일반 연장 2시간 = 15,000 × 1.5 × 2 = 45,000원</li>
  <li>야간 연장 2시간 = 15,000 × 2.0 × 2 = 60,000원</li>
  <li>합계 = <strong>105,000원</strong></li>
</ul>
<h4>구직급여 계산</h4>
<div class="formula-box">
  <p><strong>구직급여일액 = 이직 전 평균임금의 60%</strong></p>
  <p><strong>구직급여 총액 = 구직급여일액 × 소정급여일수</strong></p>
  <p>상한액: 1일 66,000원 (2023년 기준) / 하한액: 최저임금 × 80% × 1일 소정근로시간</p>
</div>`
          }
        ]
      },
      {
        title: '직업정보 활용',
        topics: [
          {
            title: '직업분류와 정보수집 실무',
            content: `<h4>직업분류 실무</h4>
<ul>
  <li>한국표준직업분류(KSCO) 코드 읽기</li>
  <li>한국고용직업분류(KECO) 코드 읽기</li>
  <li>직업분류의 차이점과 활용처 구분</li>
</ul>
<h4>워크넷 활용 실무</h4>
<ul>
  <li><strong>구인구직 검색:</strong> 직종, 지역, 학력 등 조건 검색</li>
  <li><strong>이력서 등록:</strong> 구직자 이력서 작성 및 등록</li>
  <li><strong>심리검사 실시:</strong> 직업선호도검사, 직업적성검사 온라인 실시</li>
  <li><strong>검사 결과 해석:</strong> 검사 결과를 상담에 활용</li>
</ul>
<h4>직업사전 활용</h4>
<ul>
  <li>직무개요: 해당 직업의 주요 업무 내용</li>
  <li>수행직무: 구체적인 작업 내용</li>
  <li>정규교육: 필요한 학력 수준</li>
  <li>숙련기간: 직무수행에 필요한 경력/훈련 기간</li>
  <li>자격/면허: 관련 자격증 정보</li>
</ul>`
          }
        ]
      },
      {
        title: '핵심 공식 정리',
        topics: [
          {
            title: '계산형 문제 공식 모음',
            content: `<h4>노동시장 공식</h4>
<div class="formula-box">
  <p><strong>실업률</strong> = 실업자 / 경제활동인구 × 100</p>
  <p><strong>경제활동참가율</strong> = 경제활동인구 / 15세 이상 인구 × 100</p>
  <p><strong>고용률</strong> = 취업자 / 15세 이상 인구 × 100</p>
  <p><strong>노동수요 탄력성</strong> = (ΔL/L) / (ΔW/W)</p>
</div>
<h4>임금 관련 공식</h4>
<div class="formula-box">
  <p><strong>평균임금</strong> = 3개월간 임금총액 / 3개월간 총 일수</p>
  <p><strong>퇴직금</strong> = 1일 평균임금 × 30일 × (재직일수/365)</p>
  <p><strong>연장근로 가산</strong> = 통상임금 × 1.5 (50% 가산)</p>
  <p><strong>야간/휴일근로 가산</strong> = 통상임금 × 1.5</p>
</div>
<h4>생산성 공식</h4>
<div class="formula-box">
  <p><strong>한계생산물(MPL)</strong> = ΔQ / ΔL</p>
  <p><strong>한계생산물가치(VMPL)</strong> = MPL × P</p>
  <p><strong>한계수입생산(MRPL)</strong> = MPL × MR</p>
  <p><strong>이윤극대화 조건:</strong> MRPL = W</p>
</div>
<h4>인적자본 공식</h4>
<div class="formula-box">
  <p><strong>교육의 순현재가치(NPV)</strong> = Σ[수익/(1+r)^t] - Σ[비용/(1+r)^t]</p>
  <p><strong>내부수익률(IRR):</strong> NPV = 0이 되는 할인율(r)</p>
  <p>NPV > 0 → 교육투자 실행</p>
</div>
<h4>고용보험 계산</h4>
<div class="formula-box">
  <p><strong>구직급여일액</strong> = 이직 전 평균임금의 60%</p>
  <p><strong>구직급여 총액</strong> = 구직급여일액 × 소정급여일수</p>
  <p>소정급여일수: 연령·피보험기간에 따라 120~270일</p>
</div>`
          },
          {
            title: '시험 빈출 수치·기간 총정리',
            content: `<h4>근로기준법 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>법정 근로시간</td><td><strong>1주 40시간, 1일 8시간</strong></td></tr>
  <tr><td>연장근로 한도</td><td>1주 <strong>12시간</strong></td></tr>
  <tr><td>가산임금 (연장·야간·휴일)</td><td>통상임금의 <strong>50%</strong> 가산</td></tr>
  <tr><td>해고예고 기간</td><td><strong>30일</strong> 전 또는 30일분 통상임금</td></tr>
  <tr><td>경영상 해고 통보</td><td><strong>50일</strong> 전 근로자대표에 통보</td></tr>
  <tr><td>부당해고 구제신청</td><td>해고일로부터 <strong>3개월</strong> 이내</td></tr>
  <tr><td>연차유급휴가 (1년 이상)</td><td><strong>15일</strong> (최대 25일)</td></tr>
  <tr><td>산전후휴가</td><td><strong>90일</strong> (쌍둥이 120일)</td></tr>
  <tr><td>취업규칙 작성 의무</td><td>상시 <strong>10인</strong> 이상</td></tr>
  <tr><td>최저 고용연령</td><td><strong>15세</strong> 미만 금지</td></tr>
  <tr><td>야간근로 시간</td><td>오후 <strong>10시</strong> ~ 오전 <strong>6시</strong></td></tr>
</table>
<h4>고용보험법 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>구직급여 피보험단위기간</td><td>이직일 이전 18개월 중 <strong>180일</strong> 이상</td></tr>
  <tr><td>구직급여 수준</td><td>평균임금의 <strong>60%</strong></td></tr>
  <tr><td>소정급여일수</td><td><strong>120~270일</strong> (연령·피보험기간별)</td></tr>
  <tr><td>대기기간</td><td><strong>7일</strong></td></tr>
  <tr><td>육아휴직급여</td><td>통상임금의 <strong>80%</strong> (상한 150만원)</td></tr>
</table>
<h4>기타 법규 핵심 수치</h4>
<table>
  <tr><th>항목</th><th>수치/기간</th></tr>
  <tr><td>기간제 사용기간</td><td>최대 <strong>2년</strong></td></tr>
  <tr><td>파견기간</td><td>원칙 <strong>1년</strong>, 최대 <strong>2년</strong></td></tr>
  <tr><td>차별 시정신청</td><td>차별 발생일로부터 <strong>6개월</strong> 이내</td></tr>
  <tr><td>최저임금위원회</td><td><strong>27인</strong> (노사공 각 9인)</td></tr>
  <tr><td>적극적 고용개선조치</td><td><strong>500인</strong> 이상 사업장</td></tr>
  <tr><td>배우자 출산휴가</td><td><strong>10일</strong></td></tr>
</table>
<h4>경제활동 관련 공식 총정리</h4>
<div class="formula-box">
  <p>15세 이상 인구 = 경제활동인구 + 비경제활동인구</p>
  <p>경제활동인구 = 취업자 + 실업자</p>
  <p>실업률 = 실업자 / 경제활동인구 × 100</p>
  <p>경제활동참가율 = 경제활동인구 / 15세 이상 인구 × 100</p>
  <p>고용률 = 취업자 / 15세 이상 인구 × 100</p>
  <p>노동수요 탄력성 = (ΔL/L) / (ΔW/W)</p>
  <p>VMPL = MPL × P (완전경쟁)</p>
  <p>MRPL = MPL × MR (불완전경쟁)</p>
  <p>이윤극대화: MRPL = W</p>
  <p>평균임금 = 3개월 임금총액 / 3개월 총 일수</p>
  <p>퇴직금 = 1일 평균임금 × 30 × (재직일수/365)</p>
</div>`
          }
        ]
      }
    ]
  }
};

/** 과목 코드 순서 (네비게이션용) */
export const SUBJECT_ORDER = ['counseling', 'psychology', 'jobinfo', 'labor_market', 'labor_law', 'silgi'];

/** 과목 코드로 데이터 조회 */
export function getSubject(code) {
  return CURRICULUM[code] || null;
}

/** 이전/다음 과목 코드 */
export function getAdjacentSubjects(code) {
  const idx = SUBJECT_ORDER.indexOf(code);
  return {
    prev: idx > 0 ? SUBJECT_ORDER[idx - 1] : null,
    next: idx < SUBJECT_ORDER.length - 1 ? SUBJECT_ORDER[idx + 1] : null,
  };
}
