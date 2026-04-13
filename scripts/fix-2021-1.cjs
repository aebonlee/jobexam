const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 9,
    append: '\n\n다음 설명에 해당하는 것은?\n\n행동주의 직업상담에서 내담자가 직업선택에 대해서 무력감을 느끼게 되고, 그로 인해 발생된 불안 때문에 직업 결정을 못하게 되는 것'
  },
  {
    qn: 11,
    append: '\n\n다음 설명에 해당하는 상담이론은?\n\n모든 내담자는 공통적으로 자기와 경험의 불일치로 인해 고통을 받고 있기 때문에 직업상담 과정에서 내담자가 지니고 있는 직업문제를 진단하는 것 자체가 불필요하다고 본다.'
  },
  {
    qn: 16,
    append: '\n\n다음 설명에 해당하는 상담기법은?\n\n상담자는 두 부분의 개입을 하게 된다. 첫 번째는 낡은 사고에 대한 평가이며, 두 번째는 낡은 사고나 새로운 사고의 적절성을 검증하는 실험을 해보는 것이다. 의문문 형태의 개입은 상담자가 정답을 제시하기보다는 내담자 스스로 해결 방법에 다가가도록 유도한다.'
  },
  {
    qn: 18,
    append: '\n\n다음 대화에서 내담자의 문제로 가장 적합한 것은?\n\n내담자 : 진로선택에 대해서 도움을 받고자 합니다.\n상담사 : 당신이 현재 생각하고 있는 것부터 이야기를 하시지요.\n내담자 : 저는 올바르게 선택하고 싶습니다. 아시겠지만, 저는 실수를 저지르고 싶지 않습니다. 선생님은 제가 틀림없이 올바르게 선택할 수 있도록 도와주실 것으로 생각합니다.'
  },
  {
    qn: 34,
    append: '\n\n<보기>\nㄱ. 부모-자녀 간의 상호작용을 자녀에 대한 정서집중형, 회피형, 수용형의 유형으로 구분한다.\nㄴ. 청소년기 부모-자녀 간의 관계에서 생긴 욕구가 직업선택에 영향을 미친다는 이론이다.\nㄷ. 부모의 사랑을 제대로 받지 못하고 거부적인 분위기에서 성장한 사람은 다른 사람들과 함께 일하고 접촉하는 서비스 직종의 직업을 선호한다.\nㄹ. 직업군을 10가지로 분류한다.'
  },
  {
    qn: 36,
    append: '\n\n<보기>\nㄱ. 분석단계\nㄴ. 종합단계\nㄷ. 실행단계\nㄹ. 가치평가단계\nㅁ. 의사소통단계'
  },
  {
    qn: 43,
    append: '\n\n다음 표의 ( )에 알맞은 것은?\n\n| 종류 | 비용 | 학습자 참여도 | 접근성 |\n|------|------|--------------|--------|\n| 인쇄물 | (ㄱ) | 수동 | 용이 |\n| 면접 | 저 | (ㄴ) | 제한적 |\n| 직업경험 | 고 | 적극 | (ㄷ) |'
  },
  {
    qn: 51,
    append: '\n\n다음 설명에 해당하는 자격 등급은?\n\n해당 국가기술자격의 종목에 관한 공학적 기술이론 지식을 가지고 설계·시공·분석 등의 업무를 수행할 수 있는 능력의 유무'
  },
  {
    qn: 56,
    append: '\n\n다음 설명에 해당하는 것은?\n\n근로자를 감원하지 않고 고용을 유지하거나 실직자를 채용하여 고용을 늘리는 사업주를 지원하며 근로자의 고용안정 및 취업취약 계층의 고용촉진을 지원한다.'
  },
  {
    qn: 61,
    append: '\n\n다음 설명에 해당하는 제도는?\n\n기업이 노동자를 채용할 때는 노동조합에 가입하지 않은 노동자를 채용할 수 있지만 일단 채용된 노동자는 일정 기간 내에 노동조합에 가입하여야 하며 또한 조합에서 탈퇴하거나 제명되는 경우 종업원자격을 상실하도록 되어 있는 제도'
  },
  {
    qn: 81,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n헌법상 국가는 ( )으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 한다.'
  },
  {
    qn: 87,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n육아휴직 시작일부터 3개월까지 : 육아휴직 시작일을 기준으로 한 월 통상임금의 100분의 (ㄱ)에 해당하는 금액\n육아휴직 4개월부터 육아휴직 종료일까지 : 육아휴직 시작일을 기준으로 한 월 통상임금의 100분의 (ㄴ)에 해당하는 금액'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2021 && d.exam_session === 1 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2021-1-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2021-1-Q' + fix.qn);
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
