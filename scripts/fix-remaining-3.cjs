const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

// 먼저 2010-2 Q93 현재 상태 확인
const q93 = data.find(d => d.exam_year === 2010 && d.exam_session === 2 && d.question_number === 93);
if (q93) {
  console.log('2010-2-Q93 current:');
  console.log('  text:', (q93.question_text || '').substring(0, 100));
  console.log('  opt1:', q93.option_1);
  console.log('  opt2:', q93.option_2);
  console.log('  opt3:', q93.option_3);
  console.log('  opt4:', q93.option_4);
}

const fixes = [
  // 2014-2 Q15
  { year: 2014, session: 2, qn: 15,
    append: '\n\n<보기>\nㄱ. 중요한 기억은 내담자가 \'마치 지금 일어나고 있는 것처럼\' 기술할 수 있다.\nㄴ. 초기기억에 대한 내담자의 지각보다는 경험을 객관적으로 파악하는 것이 중요하다.\nㄷ. 초기기억은 삶, 자기, 타인에 대한 내담자의 현재 세계관과 일치하는 경험이 있다.\nㄹ. 초기기억을 통해 상담자는 내담자의 삶의 목표를 파악하는 데 도움을 받을 수 있다.' },
  // 2014-2 Q17
  { year: 2014, session: 2, qn: 17,
    append: '\n\n<보기>\nㄱ. 내담자의 동기 존재\nㄴ. 내담자의 자기진단 탐색\nㄷ. 내담자의 자기진단\nㄹ. 인지적 명확성 존재' },
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
