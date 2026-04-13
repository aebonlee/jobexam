const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  // 2016-2 Q38
  { year: 2016, session: 2, qn: 38,
    append: '\n\n<보기>\nㄱ. 원점수 65점\nㄴ. 백분위 점수 70점\nㄷ. 표준점수(Z점수) 1점\nㄹ. T점수 75점\n※ 평균 50, 표준편차 10' },

  // 2016-2 Q40
  { year: 2016, session: 2, qn: 40,
    append: '\n\n<보기>\nㄱ. 진로탐색단계\nㄴ. 진로인식단계\nㄷ. 진로준비단계\nㄹ. 취업' },

  // 2016-2 Q61
  { year: 2016, session: 2, qn: 61,
    append: '\n\n<보기>\nㄱ. 장기노동수요곡선은 단기노동수요곡선에 비해 비탄력적이다.\nㄴ. 장기에는 대체효과 외에 추가 자본투입에 의한 산출량 효과로 인해 추가적으로 노동수요가 증가한다.\nㄷ. 장기에는 대체효과 및 소득효과로 인해 노동수요가 증가한다.' },

  // 2016-3 Q22 - Gelatt 의사결정 8단계 보기 추가
  { year: 2016, session: 3, qn: 22,
    append: '\n\n<보기>\nㄱ. 목적(목표)인식\nㄴ. 각 결과의 가능성 평가\nㄷ. 자료수집\nㄹ. 대안 선택(의사결정)\nㅁ. 가능한 대안 파악\nㅂ. 평가(결과 검토)\nㅅ. 각 대안의 결과 예측\nㅇ. 각 결과의 바람직성 평가' },

  // 2016-3 Q26 - ㄱ,ㄴ 행동특성 설명
  { year: 2016, session: 3, qn: 26,
    append: '\n\nㄱ\n점심을 먹으면서도 서류를 본다.\n아무 것도 하지 않고 쉬면 견딜 수 없다.\n주말이나 휴일에도 쉴 수가 없다.\n\nㄴ\n열심히 일을 했지만 성취감보다는 허탈감을 느낀다.\n인생에 환멸을 느낀다.\n불면증이 생긴다.' },

  // 2016-3 Q81
  { year: 2016, session: 3, qn: 81,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n근로자직업능력개발법상 사업주는 훈련계약을 체결할 때에는 해당 직업능력개발훈련을 받는 사람이 직업능력개발훈련을 이수한 후에 사업주가 지정하는 업무에 일정 기간 종사하도록 할 수 있다. 이 경우 그 기간은 (ㄱ)년 이내로 하되, 직업능력개발훈련기간의 (ㄴ)배를 초과할 수 없다.' },
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
