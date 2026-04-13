const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const allFixes = [
  // === 2015년 3회 (08-16) ===
  { year: 2015, session: 3, qn: 5,
    append: '\n\n다음 설명에 해당하는 상담 접근은?\n\n내담자에게 과거에 했던 선택의 회상, 절정경험, 자유시간, 금전사용 계획을 등 조사하고 존경하는 사람을 쓰게 하는 등의 상담행위' },
  { year: 2015, session: 3, qn: 7,
    append: '\n\n<보기>\nㄱ. 해석\nㄴ. 진솔성\nㄷ. 공감적 이해\nㄹ. 무조건적 수용\nㅁ. 맞닥뜨림' },

  // === 2016년 1회 (03-06) ===
  { year: 2016, session: 1, qn: 2,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n생애진로사정의 구조는 진로사정, (ㄱ), 강점과 장애, 그리고 (ㄴ)(으)로 이루어진다.' },

  // === 2016년 2회 (05-08) ===
  { year: 2016, session: 2, qn: 1,
    append: '\n\n<보기>\nㄱ. 문제 탐색\nㄴ. 태도와 감정의 탐색과 처리\nㄷ. 심층적 탐색\nㄹ. 현실 검증\nㅁ. 자아 수용\nㅂ. 의사결정' },
  { year: 2016, session: 2, qn: 2,
    append: '\n\n다음 사례에서 상담자의 적절한 반응은?\n\n저 오늘 몸이 아파서 조퇴를 했어요. 좀 더 견뎌보려고 했는데 참을 수가 없었어요.' },

  // === 2016년 3회 (08-21) ===
  { year: 2016, session: 3, qn: 2,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n1단계: 문제 탐색 및 자아개념 묘사\n2단계: 심층적 탐색\n3단계: (ㄱ)\n4단계: (ㄴ)\n5단계: (ㄷ)\n6단계: 의사결정' },

  // === 2017년 1회 (03-05) ===
  { year: 2017, session: 1, qn: 1,
    append: '\n\n다음 사례에 해당하는 것은?\n\n내담자들은 자신의 직업세계에 대해서 충분한 정보를 알고 있다고 잘못 생각하는 경우가 많다. 예를 들어, "내 상사가 그러는데 나는 책임감이 없대요."라고 반응하는 경우이다.' },
  { year: 2017, session: 1, qn: 8,
    append: '\n\n<보기>\nㄱ. 내담자의 복리 증진\nㄴ. 지역사회의 도덕적 기대 존중\nㄷ. 전문직으로서의 상담기능 보장\nㄹ. 상담자 자신의 사생활과 인격 보호\nㅁ. 직무수행 중의 갈등 해결 지침 제공' },
  { year: 2017, session: 1, qn: 10,
    append: '\n\n다음 설명에 해당하는 상담기법은?\n\n상담자는 두 부분의 개입을 하게 된다. 첫 번째는 낡은 사고에 대한 평가이며, 두 번째는 낡은 사고나 새로운 사고의 적절성을 검증하는 실험을 해보는 것이다. 의문문 형태의 개입은 상담자가 정답을 제시하기보다는 내담자 스스로 해결방법을 다가가도록 유도한다.' },
  { year: 2017, session: 1, qn: 13,
    append: '\n\n다음 설명에 해당하는 발달단계는?\n\n이 시기는 40~50세로 인생의 여러 가지 측면에서 안정되고 성숙된 시기인데 단순히 자신과 자기세대의 이익과 번영에만 관심을 쓰는 것이 아니라 자신을 세대와 사회적 미래를 위해 보다 나은 체계를 만드는 데 헌신한다.' },

  // === 2017년 2회 (05-18) ===
  { year: 2017, session: 2, qn: 2,
    append: '\n\n다음 사례에서 상담자의 적절한 접근은?\n\n갑자기 구조조정 대상이 되어 직장을 떠난 40대 후반의 남성이 상담을 받으러 왔다. 전혀 눈 마주침도 못하며, 상당히 위축되어 있는 상태이고 미래에 대한 불안감을 호소하고 있다.' },

  // === 2017년 3회 (08-26) ===
  { year: 2017, session: 3, qn: 4,
    append: '\n\n<보기>\nㄱ. 분석\nㄴ. 종합\nㄷ. 진단\nㄹ. 예측\nㅁ. 상담' },
  { year: 2017, session: 3, qn: 6,
    append: '\n\n다음 설명에 해당하는 것은?\n\n상담자가 내담자의 생각을 변화시키려 시도하거나 내담자의 생각에 상담자의 가치를 주입하려 하는 범주' },
  { year: 2017, session: 3, qn: 9,
    append: '\n\n다음 설명에 해당하는 기법은?\n\n불안에 억제하는 방법으로 사용된다.\n대인관계에서 오는 불안의 제거에 효과적이다.\n이 기법의 목표는 내담자로 하여금 광범위한 대인관계의 상황에 효과적으로 대처하기 위해 필요한 기술과 태도를 갖추게 하는 데 있다.' },
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
