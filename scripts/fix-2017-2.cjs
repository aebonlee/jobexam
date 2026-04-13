const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 29,
    append: '\n\n<보기>\nㄱ. 사회인지적 진로이론 - 진로발달과 선택에서 진로와 관련된 자신에 대한 평가와 믿음을 강조한다.\nㄴ. 인지적 정보처리이론 - 내담자가 욕구를 분류하고 지식을 획득하며, 자신의 욕구가 무엇인지 알 수 있도록 돕는다.\nㄷ. 인지적 정보처리이론 - 학습경험을 형성하고 진로행동에 단계적으로 영향을 주는 구체적인 매개변인을 찾는 데 목표를 둔다.\nㄹ. 가치중심적 진로이론 - 흥미와 가치가 진로결정 과정에서 가장 중요한 작용을 한다.'
  },
  {
    qn: 32,
    append: '\n\n다음 설명에 해당하는 Roe의 직업군은?\n\n상품과 재화의 생산·유지·운송과 관련된 직업을 포함하는 군집이다.\n운송과 정보통신에 관련된 직업뿐만 아니라 공학, 기능, 기계무역에 관계된 직업들도 이 영역에 속한다.\n대인관계는 상대적으로 덜 중요하며 사물을 다루는 데 관심을 둔다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2017 && d.exam_session === 2 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2017-2-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2017-2-Q' + fix.qn);
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

// 남은 문제 리스트
console.log('\n=== Remaining broken questions ===');
const grouped = {};
stillBroken.forEach(q => {
  const key = q.exam_year + '-' + q.exam_session;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(q.question_number);
});
Object.keys(grouped).sort().forEach(key => {
  console.log(key + ': Q' + grouped[key].sort((a,b) => a-b).join(', Q'));
});
