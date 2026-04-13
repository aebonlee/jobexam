const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 3,
    append: '\n\n<보기>\nㄱ. 분석\nㄴ. 종합\nㄷ. 진단\nㄹ. 예측\nㅁ. 상담\nㅂ. 추수지도'
  },
  {
    qn: 13,
    append: '\n\n<보기>\nㄱ. 범인류적 유대감을 중시한다.\nㄴ. 인간을 전체적 존재로 본다.\nㄷ. 사회 및 교육문제에 관심을 갖는다.'
  },
  {
    qn: 14,
    append: '\n\n다음 설명에 해당하는 상담이론은?\n\n부모의 가치조건을 강요하며 긍정적 존중의 욕구가 좌절되고, 부정적 자아개념이 형성되면서 심리적 어려움이 발생한다고 본다.'
  },
  {
    qn: 16,
    append: '\n\n<보기>\nㄱ. 자기개념 분석하기\nㄴ. 진로성숙 수준 확인하기\nㄷ. 수행결과에 대한 비현실적 기대 확인하기\nㄹ. 진로발달과제를 수행하는데 필요한 지식, 태도, 기술 익히기'
  },
  {
    qn: 18,
    append: '\n\n다음 사례에 해당하는 내담자의 상담 접근으로 가장 적합한 것은?\n\n중2 남학생인 내담자는 소극적인 성격으로 대인관계에 어려움을 겪고 있고 진로에 대한 고민을 한 적이 없고 학업도 게을리하고 있다.'
  },
  {
    qn: 23,
    append: '\n\n다음 설명에 해당하는 개념은?\n\n직장 내 요구들 간의 모순 혹은 직장의 요구와 직장 밖 요구 사이의 모순이 있을 때 발생한다.'
  },
  {
    qn: 34,
    append: '\n\n<보기>\nㄱ. 대표적인 학자로 파슨스, 윌리엄슨 등이 있다.\nㄴ. 직업선택은 인지적인 과정으로 개인의 특성과 직업의 특성을 짝짓는 것이 가능하다고 본다.\nㄷ. 개인차에 관한 연구에서 시작하였고, 심리측정을 중요하게 다루지 않는다.'
  },
  {
    qn: 40,
    append: '\n\n다음 설명에 해당하는 직무분석 방법은?\n\n효율적이고 비용이 적게 든다.\n동일한 직무의 재직자 간의 차이를 보여준다.\n공통적인 직무 차원 상에서 상이한 직무들을 비교하기가 쉽다.'
  },
  {
    qn: 43,
    append: '\n\n<보기>\nㄱ. 필요한 시기에 최대한 활용되도록 한시적으로 신속하게 생산되어 운영한다.\nㄴ. 특정 분야 및 대상에 국한하지 않고 전체 산업 및 업종에 걸친 직종을 대상으로 한다.\nㄷ. 특정 시기에 국한하지 않고 지속적으로 조사·분석하여 제공된다.\nㄹ. 관련 직업정보 간의 비교·활용이 용이하다.'
  },
  {
    qn: 47,
    append: '\n\n다음 표에서 ( )에 해당하는 것은?\n\n| 구분 | 하나 이상 장소 | 단일 장소 |\n|------|---------------|----------|\n| 하나 이상 산업활동 | 복합사업체 | 보조단위 |\n| 단일 산업활동 | ( ) | 단일사업체 |'
  },
  {
    qn: 49,
    append: '\n\n다음 설명에 해당하는 제도는?\n\n훈련인프라 부족 등으로 인해 자체적으로 직업훈련을 실시하기 어려운 중소기업들을 위해, 대기업 등이 자체 보유한 우수 훈련 인프라를 활용하며 중소기업이 필요로 하는 기술인력을 양성·공급하고 중소기업 재직자의 직무능력향상을 지원하는 제도이다.'
  },
  {
    qn: 56,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n직무 범주화 기준에는 직무별 고용의 크기 또한 현실적인 기준이 된다.\n한국표준직업분류에서는 ( ) 단위에서 최소 1000명의 고용을 기준으로 설정하였다.'
  },
  {
    qn: 78,
    append: '\n\n다음 그래프에 대한 설명으로 옳은 것은?\n\n[그래프]\n세로축: 임금\n가로축: 근로시간의 공급\n기준선: W0 (균형임금)'
  },
  {
    qn: 80,
    append: '\n\n<보기>\nㄱ. 힉스의 파업이론에 의하면, 사용자의 양보곡선과 노조의 저항곡선이 만나는 곳에서 파업기간이 결정된다.\nㄴ. 카터-챔벌린 모형에 따르면, 노조의 요구를 거부할 때 발생하는 사용자의 비용이 노조의 요구를 수락했을 때 발생하는 사용자의 비용보다 클 때 노조의 교섭력이 커진다.\nㄷ. 매브리 이론에 따르면, 노조의 최종수락 조건이 사용자의 최종수락조건보다 작을 때 파업이 발생한다.'
  },
  {
    qn: 83,
    append: '\n\n<보기>\nㄱ. 근로계약기간에 관한 사항\nㄴ. 근로시간·휴게에 관한 사항\nㄷ. 휴일·휴가에 관한 사항\nㄹ. 취업의 장소와 종사하여야 할 업무에 관한 사항'
  },
  {
    qn: 90,
    append: '\n\n제19조의4(육아휴직과 육아기 근로시간 단축의 사용 형태)\n① 근로자는 육아휴직을 (ㄱ)회에 한정하여 나누어 사용할 수 있다.\n② 근로자는 육아기 근로시간 단축을 나누어 사용할 수 있다. 이 경우 나누어 사용하는 (ㄴ)회의 기간은 (ㄷ)개월 이상이 되어야 한다.'
  },
  {
    qn: 94,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n육아휴직 급여를 지급받으려는 사람은 육아휴직을 시작한 날 이후 1개월부터 육아휴직이 끝난 날 이후 ( )개월 이내에 신청하여야 한다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2021 && d.exam_session === 3 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2021-3-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2021-3-Q' + fix.qn);
  }
}

console.log('\nTotal fixed: ' + fixedCount + '/' + fixes.length);
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log('Saved.');

// Verify
const updated = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const stillBroken = updated.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});
console.log('Remaining broken: ' + stillBroken.length);
