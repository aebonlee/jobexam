const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const allFixes = [
  // === 2013년 3회 (08-30) — 이 데이터는 2010년 2회에 해당할 수도 있음, 일단 확인 ===
  // 실제로 2013년 데이터는 pilgiQuestions에 없을 수 있음 (2010-2022만 있음)
  // 아래는 참고용으로 넣되, NOT FOUND면 건너뜀

  // === 2014년 2회 (05-25) ===
  { year: 2014, session: 2, qn: 2,
    append: '\n\n다음 설명에 해당하는 집단상담 기법은?\n\n말하고 있는 집단원이 자신이 무엇을 말하는가를 잘 알 수 있게 돕는 것\n말하고 있는 집단원의 말의 내용과 감정을 이해하고 있음을 알리며 의사소통하는 것' },
  { year: 2014, session: 2, qn: 7,
    append: '\n\n다음 상황에서 집단상담 지도자의 적절한 반응은?\n\n집단모임에서 여러 명의 집단원들로부터 부정적인 피드백을 받은 한 집단원에게 다른 집단원이 그의 느낌을 묻자 아무렇지도 않다고 하지만 그의 얼굴표정이 몹시 굳어있을 때, 지도자가 이를 직면하고자 한다.' },
  { year: 2014, session: 2, qn: 13,
    append: '\n\n<보기>\nㄱ. 행동의 일반화\nㄴ. 목표 행동의 정의\nㄷ. 행동의 기초선 측정\nㄹ. 행동수정 결과의 검증\nㅁ. 적응행동 강화와 부적응행동의 약화' },

  // === 2014년 3회 (08-17) ===
  { year: 2014, session: 3, qn: 10,
    append: '\n\n<보기>\nㄱ. 내담자가 자신이나 다른 사람을 위험에 빠뜨릴 가능성이 클 때\nㄴ. 내담자의 법적 보호자가 내담자의 정보를 구할 때\nㄷ. 법적으로 정보의 공개가 요구되는 경우\nㄹ. 내담자가 감염성이 있는 치명적인 질병에 걸린 경우' },
  { year: 2014, session: 3, qn: 11,
    append: '\n\n다음 사례에 해당하는 것은?\n\n일단 저에게 맡겨주신 업무에 대해서는 너무 간섭하지 마세요. 제 소신껏 창의적으로 일하고 싶습니다.' },

  // === 2015년 1회 (03-08) ===
  { year: 2015, session: 1, qn: 3,
    append: '\n\n다음 설명에 해당하는 상담기법은?\n\n상담에서 기본적으로는 내담자의 감정, 경험 및 잠재력에 대해 긍정적인 존중과 관심을 전달하는 것이고, 궁극적으로는 내담자를 한 인간으로서의 가치와 자유인으로서의 잠재력에 대해 매우 깊은 긍정적 존중을 전달하는 것' },
  { year: 2015, session: 1, qn: 6,
    append: '\n\n다음 사례를 순서대로 바르게 나열한 것은?\n\n가. 현실적으로 부모와 선배에게 상의를 함\n나. 직업상담사 시험에 실패하여 실망한 우울한 상태임\n다. 불안, 자기혐오, 분노 등을 느끼게 되어 어떤 대처를 함\n라. 일이 뜻대로 진행되지 않는다면 끔찍할 것이라는 생각을 함' },
  { year: 2015, session: 1, qn: 12,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n분석 → 종합 → (A) → 예후 → 상담 → 추수지도' },
  { year: 2015, session: 1, qn: 13,
    append: '\n\n다음 설명에 해당하는 것은?\n\n이야기 삭제하기\n불확실한 인물 인용하기\n불분명한 동사 사용하기\n제한적 어투 사용하기' },

  // === 2015년 2회 (05-31) ===
  { year: 2015, session: 2, qn: 13,
    append: '\n\n<보기>\nㄱ. 인간의 개별성과 독자성을 존중한다.\nㄴ. 치료적 관계 그 자체가 성장의 경험이다.\nㄷ. 적응의 정서적 측면보다 지적 측면을 강조한다.\nㄹ. 현재의 직접적인 장면보다 유년기의 외상적 경험을 강조한다.\nㅁ. 인간은 성장, 건강, 적응을 미루려는 기본적 충동을 가지고 있다.' },
];

let fixedCount = 0;
for (const fix of allFixes) {
  const idx = data.findIndex(d => d.exam_year === fix.year && d.exam_session === fix.session && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: ' + fix.year + '-' + fix.session + '-Q' + fix.qn);
  }
}

console.log('\nTotal fixed: ' + fixedCount + '/' + allFixes.length);
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
