const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 2,
    append: '\n\n다음 설명에 해당하는 상담기법은?\n\n내담자가 직접 진술하지 않은 내용이나 개념을 그의 과거 경험이나 진술을 토대로 추론해서 말하는 것'
  },
  {
    qn: 3,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n1단계: 문제 탐색 및 자아개념 묘사\n2단계: 심층적 탐색\n3단계: (ㄱ)\n4단계: (ㄴ)\n5단계: (ㄷ)\n6단계: 의사결정'
  },
  {
    qn: 4,
    append: '\n\n<보기>\nㄱ. 해석\nㄴ. 진솔성\nㄷ. 공감적 이해\nㄹ. 무조건적 수용\nㅁ. 맞딱뜨림'
  },
  {
    qn: 9,
    append: '\n\n<보기>\nㄱ. 종합\nㄴ. 진단\nㄷ. 분석\nㄹ. 상담 또는 치료\nㅁ. 사후지도\nㅂ. 예측'
  },
  {
    qn: 12,
    append: '\n\n다음 사례에 해당하는 것은?\n\n일단 저에게 맡겨주신 업무에 대해서는 너무 간섭하지 마세요. 제 소신껏 창의적으로 일하고 싶습니다.'
  },
  {
    qn: 16,
    append: '\n\n다음 대화에서 상담자가 사용한 기법은?\n\n내담자: 전 의사가 될 거예요. 저희 집안은 모두 의사들이거든요.\n상담자: 학생은 의사가 될 것으로 확신하고 있네요.\n내담자: 예, 물론이지요\n상담자: 의사가 되지 못한다면 어떻게 되나요?\n내담자: 한 번도 그런 경우를 생각해 보지 못했습니다. 의사가 안 된다면 내 인생은 매우 끔찍할 것입니다.'
  },
  {
    qn: 23,
    append: '\n\n다음 설명에 해당하는 신뢰도는?\n\n100명의 학생들이 특정 심리검사를 받고 한 달 후에 동일한 검사를 다시 받았는데 두 번의 검사에서 각 학생들의 점수는 동일했다.'
  },
  {
    qn: 31,
    append: '\n\n다음 설명에 해당하는 타당도는?\n\n논리적 사고에 입각한 논리적인 분석과정으로 판단하는 주관적 타당도이다.\n본질적으로 해당분야 전문가의 판단에 의존한다.'
  },
  {
    qn: 38,
    append: '\n\n다음 설명에 해당하는 것은?\n\n동기나 능력이 부족한 사람이 고도의 능력이나 특수한 재능을 요구하는 직업을 선택하거나, 흥미가 없고 자신의 성격에 맞지 않는 직업을 선택하는 경우 또는 자신의 능력보다 훨씬 낮은 능력을 요구하는 직업을 선택하거나 안정된 직업만을 추구하는 경우'
  },
  {
    qn: 41,
    append: '\n\n<보기>\nㄱ. 한국고용정보원에서 발행하는 직종별 직업사전\nㄴ. 통계청에서 실시한 지역별 고용조사 결과\nㄷ. 한국산업인력공단에서 제공하는 국가기술자격 통계연보\nㄹ. 워크넷에서 제공하는 직업별 탐방기(데마별 직업여행)'
  },
  {
    qn: 49,
    append: '\n\n<보기>\nㄱ. 전산회계운용사1급\nㄴ. 감정평가사\nㄷ. 국제의료관광코디네이터\nㄹ. 문화재수리기능자'
  },
  {
    qn: 52,
    append: '\n\n<보기>\nㄱ. 이자, 주식배당 등과 같은 자산 수입이 있는 경우\nㄴ. 예·적금 인출, 보험금 수취, 차량 또는 초지나 금융자산을 매각하여 수입이 있는 경우\nㄷ. 사회복지시설 수용자의 시설 내 경제활동\nㄹ. 수행자의 활동과 같이 법률에 의한 경제노동을 하는 경우'
  },
  {
    qn: 64,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n아담 스미스(A. Smith)는 노동조건의 차이, 소득안정성의 차이, 직업훈련비용의 차이 등 각종 직업상의 비금전적 불이익을 견딜 수 있기에 필요한 정도의 임금프리미엄을 ( )(이)라고 하였다.'
  },
  {
    qn: 72,
    append: '\n\n<보기>\nㄱ. 이전효과(spillover effect)\nㄴ. 위협효과(threat effect)\nㄷ. 대기실업효과(wait unemployment effect)\nㄹ. 해고효과(displacement effect)'
  },
  {
    qn: 73,
    append: '\n\n<보기>\nㄱ. 여가에 대한 상대적 가치\nㄴ. 비근로소득의 발생\nㄷ. 단시간 노동의 기회'
  },
  {
    qn: 85,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n근로자직업능력 개발법상 사업주는 근로자와 훈련계약을 체결할 때에는 해당 직업능력개발훈련을 받는 사람이 직업능력개발훈련을 이수한 후에 사업주가 지정하는 업무에 일정 기간 종사하도록 할 수 있다. 이 경우 그 기간은 (ㄱ)년 이내로 하되, 직업능력개발훈련기간의 (ㄴ)배를 초과할 수 없다.'
  },
  {
    qn: 91,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n남녀고용평등과 일·가정 양립 지원에 관한 법률상 사업주가 근로자에게 육아기 근로시간 단축을 허용하는 경우 단축 후 근로시간은 주당 (ㄱ)시간 이상이어야 하고 (ㄴ)시간을 넘어서는 아니 된다.'
  },
  {
    qn: 93,
    append: '\n\n<보기>\nㄱ. 근로기준법 제9조 (중간착취의 배제)\nㄴ. 근로기준법 제18조 (단시간 근로자의 근로조건)\nㄷ. 근로기준법 제21조 (전차금 상계의 금지)\nㄹ. 근로기준법 제60조 (연차 유급휴가)\nㅁ. 근로기준법 제72조 (갱내근로의 금지)'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2019 && d.exam_session === 2 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2019-2-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2019-2-Q' + fix.qn);
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
