const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  // 2018-1 Q55
  { year: 2018, session: 1, qn: 55,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n직업능력개발계좌제 훈련이 적합훈련과정을 인정받으려면 소정훈련일수가 (ㄱ)일 이상이고 소정훈련시간이 (ㄴ)시간 이상이어야 한다. 다만, 일부 분야의 인터넷원격훈련과정 및 혼합훈련과정은 분야별 특성을 감안하여 달리 적용할 수 있다.' },

  // 2018-1 Q100
  { year: 2018, session: 1, qn: 100,
    append: '\n\n<보기>\nㄱ. 고령자\nㄴ. 국민기초생활 보장법에 따른 수급권자\nㄷ. 여성근로자\nㄹ. 일용근로자\nㅁ. 단시간근로자' },

  // 2018-2 Q76 - 유보임금 보기
  { year: 2018, session: 2, qn: 76,
    append: '\n\n<보기>\nㄱ. 유보임금이 높을수록 실업기간이 길어진다.\nㄴ. 유보임금의 상승은 기업임금을 감소한다.\nㄷ. 유보임금은 근로자가 받고자 하는 최저의 임금이다.\nㄹ. 유보임금은 기업이 근로자에게 제안한 최고 임금이다.' },

  // 2019-1 Q57
  { year: 2019, session: 1, qn: 57,
    append: '\n\n<보기>\nㄱ. 필요한 시기에 최대한 활용되도록 한시적으로 신속하게 생산되어 운영한다.\nㄴ. 특정분야에 국한하지 않고, 전체 산업 및 업종에 걸친 직종을 대상으로 한다.\nㄷ. 특정시기에 국한하지 않고 지속적으로 조사, 분석하며 제공된다.\nㄹ. 관련 직업정보간의 비교·활용이 용이하다.' },
];

// 2018-1 Q42: 옵션에 ㄱㄴㄷ 없는 일반 문제 - 확인
const q42 = data.find(d => d.exam_year === 2018 && d.exam_session === 1 && d.question_number === 42);
if (q42) {
  console.log('2018-1-Q42:');
  console.log('  text:', (q42.question_text || '').substring(0, 100));
  console.log('  opts:', [q42.option_1, q42.option_2, q42.option_3, q42.option_4].map(o => (o||'').substring(0,30)).join(' | '));
}

// 2018-1 Q76: 옵션에 ㄱㄴㄷ만 있는 유형
const q76 = data.find(d => d.exam_year === 2018 && d.exam_session === 1 && d.question_number === 76);
if (q76) {
  console.log('2018-1-Q76:');
  console.log('  text:', (q76.question_text || '').substring(0, 100));
  console.log('  opts:', [q76.option_1, q76.option_2, q76.option_3, q76.option_4].map(o => (o||'').substring(0,30)).join(' | '));
}

// 2017-3 Q18: 보기 항목 확인
const q18 = data.find(d => d.exam_year === 2017 && d.exam_session === 3 && d.question_number === 18);
if (q18) {
  console.log('2017-3-Q18:');
  console.log('  text:', (q18.question_text || '').substring(0, 100));
  console.log('  opts:', [q18.option_1, q18.option_2, q18.option_3, q18.option_4].map(o => (o||'').substring(0,30)).join(' | '));
}

// 2019-2 Q80
const q80 = data.find(d => d.exam_year === 2019 && d.exam_session === 2 && d.question_number === 80);
if (q80) {
  console.log('2019-2-Q80:');
  console.log('  text:', (q80.question_text || '').substring(0, 100));
  console.log('  opts:', [q80.option_1, q80.option_2, q80.option_3, q80.option_4].map(o => (o||'').substring(0,30)).join(' | '));
}

// 2019-3 Q98
const q98 = data.find(d => d.exam_year === 2019 && d.exam_session === 3 && d.question_number === 98);
if (q98) {
  console.log('2019-3-Q98:');
  console.log('  text:', (q98.question_text || '').substring(0, 100));
  console.log('  opts:', [q98.option_1, q98.option_2, q98.option_3, q98.option_4].map(o => (o||'').substring(0,30)).join(' | '));
}

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === fix.year && d.exam_session === fix.session && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('\nFIXED: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
  } else {
    console.log('\nNOT FOUND: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
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
if (stillBroken.length > 0) {
  stillBroken.forEach(q => {
    console.log('  ' + q.exam_year + '-' + q.exam_session + '-Q' + q.question_number + ': ' + (q.question_text||'').substring(0,60));
  });
}
