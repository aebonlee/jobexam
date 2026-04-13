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
    qn: 6,
    append: '\n\n<보기>\nㄱ. 내담자가 자신이나 다른 사람을 위협이 때렸을 가능성이 클 때\nㄴ. 내담자의 부모가 내담자의 정보를 구할 때\nㄷ. 법적으로 정보의 공개가 요구되는 경우\nㄹ. 내담자가 감염성이 있는 치명적인 질병에 걸렸을 경우'
  },
  {
    qn: 7,
    append: '\n\n다음 설명에 해당하는 것은?\n\n한 개인이 어떤 일을 하고 싶은 중요한 타인이 다른 일에 더 주의를 쏟아라 직업들과 관련된 긍정적·부정적 반응에 지나치게 몰입하여 자신의 내적 갈등을 경험하고 있다.'
  },
  {
    qn: 14,
    append: '\n\n<보기>\nㄱ. 상담목표의 설정\nㄴ. 관계수립 및 문제의 평가\nㄷ. 문제해결을 위한 개입\nㄹ. 훈습\nㅁ. 종결'
  },
  {
    qn: 27,
    append: '\n\n다음 설명에 해당하는 것은?\n\n한편에서 실시하는 성취도검사나 적성검사의 점수를 정해진 범주에 집어넣어 학생들 간의 점수차가 작을 때 생길 수 있는 지나친 확대 해석을 미연에 방지할 수 있다.'
  },
  {
    qn: 31,
    append: '\n\n다음 설명에 해당하는 Holland 유형은?\n\n사실, 손님상, 현장활동\n정확성과 깔끔함을 요구함\n행동성과 상당성이 부족함'
  },
  {
    qn: 41,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n2018년 적용 최저임금은 전년대비 16.4% 상승한 시급 ( )원이다.'
  },
  {
    qn: 42,
    append: '\n\n다음 표의 ( )에 알맞은 것은?\n\n| 기준 | (ㄱ) | (ㄴ) | (ㄷ) |\n|------|------|------|------|\n| 비용 | 높음 | 보통 | 보통 |\n| 응답자료의 정확성 | 높음 | 보통 | 낮음 |\n| 응답률 | 높음 | 보통 | 낮음 |\n| 대규모 표본 관리 | 곤란 | 보통 | 용이 |'
  },
  {
    qn: 47,
    append: '\n\n다음에 해당하는 국가기술자격의 직무분야는?\n\n광학기사\n반도체설계기사\n3D프린터운용기능사'
  },
  {
    qn: 50,
    append: '\n\n<보기>\nㄱ. 자격취득자에 대한 법령상 우대현황\nㄴ. 수행자 동향(응시적별, 연령별 등)\nㄷ. 연도별 검정현황(응시자수, 합격률 등)\nㄹ. 시험정보(수수료, 취득방법 등)'
  },
  {
    qn: 54,
    append: '\n\n다음 설명에 해당하는 자격 등급은?\n\n해당 국가기술자격의 종목에 관한 지식과 숙련기능을 가지고 산업현장에서 작업관리, 소속 기능인력의 지도 및 감독, 현장훈련, 경영자와 기능인력을 유기적으로 연계시켜 주는 현장관리 등의 업무를 수행할 수 있는 능력 보유'
  },
  {
    qn: 62,
    append: '\n\n<보기>\nㄱ. 상품수요가 가격 탄력적이면 노동수요의 임금탄력성이 높다.\nㄴ. 숙련정도가 높을수록 노동수요의 임금탄력성은 감소한다.\nㄷ. 생산비 중, 임금비가 차지하는 비중이 크면 노동수요의 임금탄력성이 높다.'
  },
  {
    qn: 70,
    append: '\n\n다음 표를 보고 옳은 것은?\n\n| 총 인구 | 15세 미만 인구 | 비경제활동 인구 | 취업자 수 |\n|---------|--------------|----------------|----------|\n| 5,000 | 1,000 | 800 | 3,000 |'
  },
  {
    qn: 76,
    append: '\n\n<보기>\nㄱ. 유보임금\nㄴ. 유보임금의 상승은 기업임금을 감소한다.\nㄷ. 유보임금 상승은 기대임금을 하락시킨다.\nㄹ. 유보임금은 기업이 근로자에게 제안한 최고 임금이다.\nㅁ. 유보임금은 근로자가 받고자 하는 최저의 임금이다.'
  },
  {
    qn: 85,
    append: '\n\n<보기>\nㄱ. 미지급임금\nㄴ. 훈련수당\nㄷ. 조기재취업 수당\nㄹ. 직업능력개발 수당'
  },
  {
    qn: 87,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n고용상 연령차별금지 및 고령자고용촉진에 관한 법률상 상시 ( ) 이상의 근로자를 사용하는 사업주는 기준고용률 이상의 고령자를 고용하도록 노력하여야 한다.'
  },
  {
    qn: 88,
    append: '\n\n<보기>\nㄱ. 주휴일\nㄴ. 연차유급휴가\nㄷ. 해고의 예고\nㄹ. 부당해고구제신청'
  },
  {
    qn: 94,
    append: '\n\n다음 설명에 해당하는 것은?\n\n기간제 및 단시간근로자 보호 등에 관한 법률에 규정된 내용으로 틀린 것은?'
  },
  {
    qn: 100,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n고용정책 기본법상 ( ) 이상의 근로자를 사용하는 사업주는 매년 근로자의 고용형태 현황을 공시하여야 한다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2018 && d.exam_session === 3 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2018-3-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2018-3-Q' + fix.qn);
  }
}

console.log('\nTotal fixed: ' + fixedCount + '/' + fixes.length);
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log('Saved.');

const updated = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const stillBroken = updated.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});
console.log('Remaining broken: ' + stillBroken.length);
