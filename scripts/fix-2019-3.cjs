const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 1,
    append: '\n\n다음 설명에 해당하는 것은?\n\n개인이 자신의 생활을 어떻게 조직하는지를 발견하는 것이다. 내담자가 그들 자신의 생활을 체계적으로 조직하는지 아니면 매일 자발적으로 반응하는지 결정하는데 도움을 준다.'
  },
  {
    qn: 17,
    append: '\n\n다음 대화에서 B의 반응에 해당하는 것은?\n\nA: 철수야, 우리 눈썰매 타러 갈래?\nB: 나이에 맞는 행동 좀 해라. 난 그런 쓸데없는 짓으로 낭비할 시간이 없어!'
  },
  {
    qn: 26,
    append: '\n\n다음 설명에 해당하는 Holland 유형은?\n\n다른 사람과 함께 일하기나 다른 사람을 돕는 것을 즐기지만 도구와 기계를 포함하는 질서연하며 조직적인 활동을 싫어한다.\n기계적이고 과학적인 능력이 부족하며 카운슬러, 바텐더 등이 해당한다.'
  },
  {
    qn: 32,
    append: '\n\n다음 설명에 해당하는 것은?\n\n특정 경력개발 프로그램을 대규모로 적용하기 전에 소규모 집단에 시범적으로 실시하는 과정을 말한다. 프로그램 참여자로부터 프로그램에 대한 평가와 피드백을 받은 후, 그에 대한 대책을 마련하여 개발된 경력개발프로그램을 본격적으로 정착시키는데 활용된다.'
  },
  {
    qn: 41,
    append: '\n\n다음 설명에 해당하는 NCS 수준은?\n\n정의: 독립적인 권한 내에서 해당분야의 이론 및 지식을 자유롭게 활용하고, 일반적인 숙련으로 다양한 과업을 수행하고, 타인에게 해당분야 지식 및 노하우를 전달할 수 있는 수준\n지식기술: 해당분야의 이론 및 지식을 자유롭게 활용할 수 있는 수준/일반적인 숙련으로 다양한 과업을 수행할 수 있는 수준\n역량: 타인의 결과에 대하여 의무와 책임이 필요한 수준 / 독립적인 권한 내에서 과업을 수행할 수 있는 수준'
  },
  {
    qn: 43,
    append: '\n\n다음 설명에 해당하는 한국표준직업분류 원칙은?\n\n교육과 진료를 겸하는 의과대학 교수는 강의, 평가, 연구 등과 진료, 처치, 환자상담 등의 직무내용을 파악하여 관련 항목이 많은 분야로 분류한다.'
  },
  {
    qn: 45,
    append: '\n\n<보기>\nㄱ. 무작위표본추출\nㄴ. 층화표본추출\nㄷ. 체계적표본추출\nㄹ. 군집(집락)표본추출'
  },
  {
    qn: 47,
    append: '\n\n다음 설명에 해당하는 자격 등급은?\n\n해당 국가기술자격의 종목에 관한 고도의 전문지식과 실무경험에 입각한 계획, 연구, 설계, 분석, 조사, 시험, 시공, 감리, 평가, 진단, 사업관리, 기술관리 등의 업무를 수행할 수 있는 능력 보유'
  },
  {
    qn: 51,
    append: '\n\n<보기>\nㄱ. 연예인 및 스포츠매니저\nㄴ. 간병인\nㄷ. 네트워크시스템개발자\nㄹ. 보육교사\nㅁ. 임상심리사\nㅂ. 택배원'
  },
  {
    qn: 53,
    append: '\n\n<보기>\nㄱ. 분석\nㄴ. 체계화\nㄷ. 가공\nㄹ. 제공\nㅁ. 축적\nㅂ. 평가'
  },
  {
    qn: 57,
    append: '\n\n다음 설명에 해당하는 통계단위는?\n\n한국표준산업분류상 통계단위 중 하나로 "재화 및 서비스를 생산하는 법적 또는 제도적 단위의 최소결합체로서 재원배분에 관한 의사결정에서 자율성을 갖고 있으며, 재무관련 통계작성에 가장 유용하다."'
  },
  {
    qn: 73,
    append: '\n\n다음 표의 ( )에 알맞은 것은?\n\n| 구분 | \'09년 | \'12년 | \'15년 | \'18년 |\n|------|-------|-------|-------|-------|\n| 도매물가지수 | 95 | 100 | 100 | 120 |\n| 소비자물가지수 | 90 | 100 | 115 | 125 |\n| 명목임금(만원) | 130 | 140 | 160 | 180 |\n| 실질임금(만원) | ㄱ | ㄴ | ㄷ | ㄹ |'
  },
  {
    qn: 77,
    append: '\n\n다음 그래프에 대한 설명으로 옳은 것은?\n\n[그래프]\n세로축: 임금률\n가로축: 파업기간\n표시: A, B, E, U, W₀, S₀'
  },
  {
    qn: 90,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n남녀고용평등과 일·가정 양립 지원에 관한 법률상 사업주는 근로자가 배우자의 출산을 이유로 휴가를 청구하는 경우에 (ㄱ)일의 범위에서 (ㄴ)일 이상의 휴가를 주어야 한다. 다만, 근로자의 배우자가 출산한 날로부터 (ㄷ)일이 지나면 청구할 수 없다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2019 && d.exam_session === 3 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2019-3-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2019-3-Q' + fix.qn);
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
