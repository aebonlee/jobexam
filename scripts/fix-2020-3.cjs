const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 6,
    append: '\n\n다음 설명에 해당하는 것은?\n\n이야기 삭제하기\n불확실한 인물 인용하기\n불분명한 동사 사용하기\n제한적 어투 사용하기'
  },
  {
    qn: 19,
    append: '\n\n<보기>\nㄱ. 사회적 불안\nㄴ. 현실적 불안\nㄷ. 신경증적 불안\nㄹ. 도덕적 불안\nㅁ. 행동적 불안'
  },
  {
    qn: 20,
    append: '\n\n다음 설명에 해당하는 집단상담 기법은?\n\n말하고 있는 집단원이 자신이 무엇을 말하는가를 잘 알 수 있게 돕는 것\n말하고 있는 집단원의 말의 내용과 감정을 이해하고 있음을 알리며 의사소통하는 것'
  },
  {
    qn: 21,
    append: '\n\n다음은 직무분석에서 사용하는 척도 기준이다. 해당하는 것은?\n\n직무를 잘 수행하기 위하여 과업이 필수적인 정도\n과업 학습의 난이도\n과업의 중요도'
  },
  {
    qn: 32,
    append: '\n\n다음 설명에 해당하는 것은?\n\n자신의 적성 수준보다 높은 적성을 요구하는 직업을 선택한다.\n자신이 선택한 직업이 흥미와 일치할 수도 있고, 일치하지 않을 수도 있다.'
  },
  {
    qn: 35,
    append: '\n\n다음 설명에 해당하는 타당도는?\n\n검사의 문항들이 그 검사가 측정하고자 하는 내용영역을 얼마나 잘 반영하고 있는가를 의미하며, 흔히 성취도 검사의 타당도를 평가하는 방법으로 많이 사용된다.'
  },
  {
    qn: 42,
    append: '\n\n다음 설명에 해당하는 것은?\n\n훈련과정인정\n실시신고 접수 및 수급자 확정\n비용신청서 접수 및 지원\n훈련과정 모니터링'
  },
  {
    qn: 45,
    append: '\n\n다음 표의 ( )에 알맞은 것은?\n\n| 기준 | (ㄱ) | (ㄴ) | (ㄷ) |\n|------|------|------|------|\n| 비용 | 높음 | 보통 | 보통 |\n| 응답자료의 정확성 | 높음 | 보통 | 낮음 |\n| 응답률 | 높음 | 보통 | 낮음 |\n| 대규모 표본 관리 | 곤란 | 보통 | 용이 |'
  },
  {
    qn: 52,
    append: '\n\n다음 설명에 해당하는 것은?\n\n비정규직 근로자를 정규직으로 전환\n전일제 근로자를 시간선택제 근로자로 전환\n시차출퇴근제, 재택근무제 등 유연근무제를 도입하여 활용'
  },
  {
    qn: 89,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n사업주는 훈련계약을 체결할 때에는 해당 직업능력개발훈련을 받는 사람이 직업능력개발훈련을 이수한 후에 사업주가 지정하는 업무에 일정 기간 종사하도록 할 수 있다. 이 경우 그 기간은 ( )년 이내로 하되, 직업능력개발훈련 기간의 ( )배를 초과할 수 없다.'
  },
  {
    qn: 93,
    append: '\n\n<보기>\nㄱ. 건설공사현장에서 이루어지는 업무\nㄴ. 「산업안전보건법」상 유해하거나 위험한 업무\nㄷ. 「의료기사 등에 관한 법률」상 의료기사의 업무\nㄹ. 「여객자동차 운수사업법」상 여객자동차운송사업에서의 운전업무'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2020 && d.exam_session === 3 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2020-3-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2020-3-Q' + fix.qn);
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
