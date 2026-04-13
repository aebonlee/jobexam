const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  // 2010-2 Q93: 옵션3의 "훈련ㄴ을" 오타 수정
  { year: 2010, session: 2, qn: 93, type: 'option_fix',
    field: 'option_3',
    old: '훈련ㄴ을',
    new_val: '훈련을' },

  // 2014-3 Q17
  { year: 2014, session: 3, qn: 17,
    append: '\n\n<보기>\nㄱ. 지금 여기서 무엇을 어떻게 경험하느냐와 각성을 중요시 한다.\nㄴ. 성격은 생물학적 요구 및 충동에 의해 결정된다.\nㄷ. 인간은 신체, 정서, 사고, 감각, 지각 등 모든 부분이 서로 관련을 갖고 있는 전체로서 완성되려는 경향이 있다.\nㄹ. 인간의 행동은 외부의 환경조건에 의해 좌우된다.' },

  // 2016-1 Q41
  { year: 2016, session: 1, qn: 41,
    append: '\n\n<보기>\nㄱ. 필요한 시기에 최대한 활용되도록 한시적으로 신속하게 생산되어 운영한다.\nㄴ. 특정분야에 제한되지 않고, 전체 산업 및 업종에 걸친 직종을 대상으로 한다.\nㄷ. 특정시기에 국한하지 않고 지속적으로 조사, 분석하며 제공된다.\nㄹ. 관련 직업정보간의 비교·활용이 용이하다.' },

  // 2016-2 Q30
  { year: 2016, session: 2, qn: 30,
    append: '\n\n<보기>\nㄱ. 모집공고와 인사선발\nㄴ. 배치, 경력개발 및 진로상담\nㄷ. 교육 및 훈련\nㄹ. 직무의 재설계 및 작업환경 개선' },

  // 2016-2 Q32
  { year: 2016, session: 2, qn: 32,
    append: '\n\n<보기>\nㄱ. 목표와 맞지 않는 적성\nㄴ. 흥미와 관계없는 목표\nㄷ. 무선택\nㄹ. 특권에 대한 갈망' },
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === fix.year && d.exam_session === fix.session && d.question_number === fix.qn);
  if (idx < 0) {
    console.log('NOT FOUND: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
    continue;
  }

  if (fix.type === 'option_fix') {
    const current = data[idx][fix.field] || '';
    if (current.includes(fix.old)) {
      data[idx][fix.field] = current.replace(fix.old, fix.new_val);
      fixedCount++;
      console.log('OPTION FIXED: ' + fix.year + '-' + fix.session + '-Q' + fix.qn + ' (' + fix.field + ')');
    } else {
      console.log('OLD TEXT NOT FOUND in option: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
    }
  } else {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
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

const grouped = {};
stillBroken.forEach(q => {
  const key = q.exam_year + '-' + q.exam_session;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(q.question_number);
});
Object.keys(grouped).sort().forEach(key => {
  console.log(key + ': Q' + grouped[key].sort((a,b) => a-b).join(', Q'));
});
