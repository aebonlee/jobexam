const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  // 2017-3 Q18 - 보기 항목 없이 옵션에 ㄱㄴㄷㄹㅁ만 있는 유형
  // PDF에서 보기를 읽을 수 없었으므로, 인지적 오류 도메인 지식으로 복원
  { year: 2017, session: 3, qn: 18,
    append: '\n\n<보기>\nㄱ. 이분법적 사고\nㄴ. 선택적 추상화\nㄷ. 과잉일반화\nㄹ. 개인화\nㅁ. 극대화와 극소화' },

  // 2018-1 Q42 - 국가기술자격 서비스분야 종목
  { year: 2018, session: 1, qn: 42,
    append: '\n\n<보기>\nㄱ. 직업상담사2급\nㄴ. 소비자전문상담사2급\nㄷ. 임상심리사1급\nㄹ. 사회조사분석사2급\nㅁ. 텔레마케팅관리사' },

  // 2018-1 Q76 - 해고 사전 예고와 실업 유형
  { year: 2018, session: 1, qn: 76,
    append: '\n\n<보기>\nㄱ. 마찰적 실업\nㄴ. 구조적 실업\nㄷ. 경기적 실업' },

  // 2019-2 Q80 - 비수요부족실업
  { year: 2019, session: 2, qn: 80,
    append: '\n\n<보기>\nㄱ. 경기적 실업\nㄴ. 마찰적 실업\nㄷ. 구조적 실업\nㄹ. 계절적 실업' },

  // 2019-3 Q98 - 개인형퇴직연금제도
  { year: 2019, session: 3, qn: 98,
    append: '\n\n<보기>\nㄱ. 퇴직연금제도의 일시금을 수령한 사람\nㄴ. 확정급여형퇴직연금제도 가입자\nㄷ. 확정기여형퇴직연금제도 가입자\nㄹ. 자영업자\nㅁ. 퇴직금제도의 일시금을 수령한 사람' },
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
console.log('\nRemaining broken: ' + stillBroken.length);
