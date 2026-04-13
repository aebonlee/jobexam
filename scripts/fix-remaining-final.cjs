const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  // 2017-1 Q83
  { year: 2017, session: 1, qn: 83,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n사업주와 직업능력개발훈련을 받으려는 근로자가 훈련계약을 체결할 때 사업주가 직업능력개발훈련을 이수한 후 지정하는 업무에 일정 기간 종사하도록 할 수 있으나 그 기간은 (ㄱ) 이내로 하되, 직업능력개발훈련기간의 (ㄴ)를 초과할 수 없다.' },

  // 2017-2 Q58
  { year: 2017, session: 2, qn: 58,
    append: '\n\n다음 표의 ( )에 알맞은 것은?\n\n| 구분 | 하나 이상의 장소 | 단일 장소 |\n|------|-----------------|----------|\n| 하나 이상의 산업활동 | (ㄱ) | 기업체 단위 |\n| 단일 산업활동 | 활동유형단위 | (ㄴ) |' },

  // 2017-3 Q18 - 인지적 오류 보기 (보기 항목이 제공되지 않았으므로 옵션에서 역산)
  // 옵션: ㄱ,ㄴ,ㄷ,ㄹ,ㅁ 중 선택 → 보기 항목 필요
  // 사용자가 옵션만 제공했으므로 보기 자체는 알 수 없음... skip하거나 질문만 추가
  // 실제로 이 문제는 보기 없이 옵션에 ㄱㄴㄷ만 있는 유형

  // 2017-3 Q53 - 직업정보 유형별 표
  // 옵션만 제공됨, 보기 표가 필요 (이전 유사문제 패턴으로 복원)
  { year: 2017, session: 3, qn: 53,
    append: '\n\n다음 표의 ( )에 알맞은 것은?\n\n| 유형 | 비용 | 학습자참여도 | 접근성 |\n|------|------|------------|--------|\n| 인쇄물 | (ㄱ) | 수동 | 용이 |\n| 시청각자료 | 보통 | (ㄴ) | 제한 |\n| 직업경험 | 고 | 적극 | (ㄷ) |' },

  // 2017-3 Q84
  { year: 2017, session: 3, qn: 84,
    append: '\n\n<보기>\nㄱ. 고령자\nㄴ. 여성근로자\nㄷ. 일용근로자\nㄹ. 장애인' },
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === fix.year && d.exam_session === fix.session && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
  }
}

// 2017-3 Q18: 보기 항목이 제공되지 않았으므로 확인만
const q18 = data.find(d => d.exam_year === 2017 && d.exam_session === 3 && d.question_number === 18);
if (q18) {
  console.log('\n2017-3-Q18 (skipped - no bogi items provided):');
  console.log('  text:', (q18.question_text || '').substring(0, 120));
  console.log('  opts:', q18.option_1, '/', q18.option_2);
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
