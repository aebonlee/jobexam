const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 4,
    append: '\n\n<보기>\nㄱ. 문제 탐색\nㄴ. 태도와 감정의 탐색과 처리\nㄷ. 심층적 탐색\nㄹ. 현실 검증\nㅁ. 자아 수용\nㅂ. 의사결정'
  },
  {
    qn: 8,
    append: '\n\n<보기>\nㄱ. 지금 여기서 무엇을 어떻게 경험하느냐와 각성을 중요시 한다.\nㄴ. 성격은 생물학적 요구 및 충동에 의해 결정된다.\nㄷ. 인간은 신체, 정서, 사고, 감각, 지각 등 모든 부분이 서로 관련을 갖고 있는 전체로서 완성되려는 경향이 있다.\nㄹ. 인간의 행동은 외부의 환경조건에 의해 좌우된다.'
  },
  {
    qn: 30,
    append: '\n\n다음 사례에 해당하는 것은?\n\n신입사원 A는 직무 매뉴얼을 참고하여 업무수행을 한다. 그러나 이런 방법을 통해 신입사원 때는 좋은 결과를 얻더라도, 승진하여 새로운 업무를 수행할 때는 기존의 업무수행 방법을 수정해야 할지도 모른다.'
  },
  {
    qn: 38,
    append: '\n\n다음 ㄱ, ㄴ에 해당하는 것은?\n\nㄱ\n점심을 먹으면서도 서류를 본다.\n아무 것도 하지 않고 쉬면 견딜 수 없다.\n주말이나 휴일에도 쉴 수가 없다.\n\nㄴ\n열심히 일을 했지만 성취감보다는 허탈감을 느낀다.\n인생에 환멸을 느낀다.\n불면증이 생긴다.'
  },
  {
    qn: 41,
    append: '\n\n다음 설명에 해당하는 검사는?\n\n개발년도 : 2013년\n실시시간 : 20분\n측정내용 : 문제해결능력 등 12개 요인\n실시방법 : 인터넷/지필'
  },
  {
    qn: 49,
    append: '\n\n다음 설명에 해당하는 제도는?\n\n훈련인프라 부족 등으로 인해 자체적으로 직업훈련을 실시하기 어려운 중소기업들을 위해, 대기업 등이 자체 보유한 우수 훈련 인프라를 활용하며 중소기업이 필요로 하는 기술인력을 양성·공급하고 중소기업 재직자의 직무능력향상을 지원하는 제도이다.'
  },
  {
    qn: 63,
    append: '\n\n다음 조건에서 옳은 것은?\n\nQ = 600L - 3L²\nMPₗ = 600 - 6L\n(단, Q는 야구공 생산량, L은 근로자의 수, MPₗ은 노동의 한계생산이다.)'
  },
  {
    qn: 67,
    append: '\n\n다음 표를 보고 옳은 것은?\n\n| 총인구 | 생산가능인구 | 취업자 | 실업자 |\n|--------|------------|--------|--------|\n| 100만명 | 60만명 | 36만명 | 4만명 |'
  },
  {
    qn: 74,
    append: '\n\n다음 현상을 설명하는 것으로 옳은 것은?\n\n경제성장과 더불어 시간외 근무수당이 증가함에도 불구하고 근로자들이 휴일근무나 잔업처리 등을 기피하는 현상이 늘고 있다.'
  },
  {
    qn: 84,
    append: '\n\n<보기>\nㄱ. 여성취업의 촉진에 관한 사항\nㄴ. 여성의 직업능력 개발에 관한 사항\nㄷ. 여성 근로자의 모성 보호에 관한 사항\nㄹ. 직전 기본계획에 대한 평가'
  },
  {
    qn: 87,
    append: '\n\n다음 설명에 해당하는 훈련 방법은?\n\n직업능력개발훈련을 실시하기 위하여 설치한 훈련 전용시설이나 그 밖에 훈련을 실시하기에 적합한 시설(산업체의 생산시설 및 근무장소는 제외한다)에서 실시하는 방법'
  },
  {
    qn: 88,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n배우자의 질병으로 육아휴직 급여를 신청할 수 없었던 사람은 그 사유가 끝난 후 ( )일 이내에 신청하여야 한다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2020 && d.exam_session === 2 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2020-2-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2020-2-Q' + fix.qn);
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
