const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 2,
    append: '\n\n<보기>\nㄱ. 진단단계\nㄴ. 분석단계\nㄷ. 예측단계\nㄹ. 종합단계\nㅁ. 상담단계\nㅂ. 추수지도단계'
  },
  {
    qn: 3,
    append: '\n\n다음 설명에 해당하는 것은?\n\n원형검사에 기초한 시간전망 개입의 세 가지 국면 중 미래를 현실처럼 느끼게 하고 미래 계획에 대한 긍정적 태도를 강화시키며 목표설정을 신속하게 하는데 목표를 두는 것'
  },
  {
    qn: 11,
    append: '\n\n다음 설명에 해당하는 상담이론은?\n\n직업선택에 미치는 내적요인의 영향을 강조한다.\n특성-요인 접근법과 마찬가지로 "사람과 직업을 연결시키는 것"에 기초를 두고 있다.\n상담과 검사해석의 기법들은 내담자중심 접근을 많이 따르고 있지만 비지시적 및 반영적 태도 외에도 다양한 접근방법들을 포함하고 있다.'
  },
  {
    qn: 14,
    append: '\n\n<보기>\nㄱ. 내담자의 동기 파악\nㄴ. 내담자의 자기진단 탐색\nㄷ. 내담자의 자기진단\nㄹ. 인지적 명확성 파악'
  },
  {
    qn: 23,
    append: '\n\n다음 사례에 해당하는 것은?\n\n예전에는 은행원들이 창구에 줄을 서서 기다리는 고객들에게 가능한 빨리 서비스를 제공하고자 스트레스를 많이 받았었다. 고객 대기표(번호표) 시스템을 도입한 이후 이러한 스트레스를 많이 줄일 수 있게 되었다.'
  },
  {
    qn: 34,
    append: '\n\n다음 설명에 해당하는 Holland 유형은?\n\n노동자, 농부, 트럭 운전수, 목수, 중장비, 운전공 등 근육을 이용하는 직업\n체력을 필요로 하는 활동을 즐기며 공격적이고 운동신경이 잘 발달되어 있음'
  },
  {
    qn: 37,
    append: '\n\n다음 설명에 해당하는 것은?\n\n원래 가족치료에 활용하기 위해 개발되었는데, 기본적으로 경력상담 시 먼저 내담자의 가족이나 선조들의 직업 특징에 대한 시각적 표상을 얻기 위해 도표를 만드는 것'
  },
  {
    qn: 38,
    append: '\n\n<보기>\nㄱ. 유전적 요인\nㄴ. 학습경험\nㄷ. 과제접근기술\nㄹ. 환경조건과 사건'
  },
  {
    qn: 42,
    append: '\n\n다음 설명에 해당하는 검사는?\n\n검사대상 : 만18세 이상\n주요내용 : 개인의 흥미유형 및 적합직업 탐색\n측정요인 : 현실형, 탐구형, 예술형, 사회형, 진취형, 관습형'
  },
  {
    qn: 48,
    append: '\n\n다음 설명에 해당하는 것은?\n\n작물재배활동과 축산활동을 복합적으로 수행하면서 그 중 한편의 전문화율이 66% 미만인 경우'
  },
  {
    qn: 49,
    append: '\n\n다음 설명에 해당하는 것은?\n\n데이터의 분석에 기초하며 시간, 장소, 작업순서, 활동 등을 결정한다.\n결정을 실행하거나 상황을 보고한다.'
  },
  {
    qn: 51,
    append: '\n\n다음 설명에 해당하는 직능 수준은?\n\n일반적으로 단순하고 반복적이며 때로는 육체적인 힘을 요하는 과업을 수행한다.\n간단한 수작업 공구나 전공청소기, 전기장비들을 이용한다.\n제1직능 수준의 일부 작업에서는 초등교육이나 기초적인 교육(ISCED 수준1)을 필요로 한다.'
  },
  {
    qn: 74,
    append: '\n\n다음 그래프에 대한 설명으로 옳은 것은?\n\n[그래프]\n세로축: W (임금)\n가로축: L (노동량)\n점: a, b\n원점: O'
  },
  {
    qn: 77,
    append: '\n\n다음 설명에 해당하는 이론은?\n\n경제학과 Spencer는 고학력자의 임금이 높은 것은 교육이 생산성을 높이는 역할을 하는 것이 아니라 채용부터 생산성을 높다는 것을 교육을 통해 보여주는 것이라는 견해를 제시했다.'
  },
  {
    qn: 79,
    append: '\n\n다음 설명에 해당하는 학자는?\n\n노동조합이란 임금노동자들이 그들의 근로 조건을 유지하고 개선할 목적으로 조직한 영속적 단체이며, 그와 같은 목적을 실현하기 위한 수단으로는 노동시장의 조절, 표준근로조건의 설정 및 유지와 공제제도 등이 있다.'
  },
  {
    qn: 81,
    append: '\n\n<보기>\nㄱ. 「국민기초생활 보장법」에 따른 수급권자\nㄴ. 고령자\nㄷ. 단시간근로자\nㄹ. 제조업에 종사하는 근로자'
  },
  {
    qn: 85,
    append: '\n\n<보기>\nㄱ. 지역고용전문위원회\nㄴ. 고용서비스전문위원회\nㄷ. 장애인고용촉진전문위원회'
  },
  {
    qn: 87,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n이 법에 따른 퇴직금을 받을 권리는 ( )년간 행사하지 아니하면 시효로 인하여 소멸한다.'
  },
  {
    qn: 97,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n사업주는 근로자가 배우자 출산휴가를 청구하는 경우에 ( )일의 휴가를 주어야 한다.\n배우자 출산휴가는 근로자의 배우자가 출산한 날부터 ( )일이 지나면 청구할 수 없다.'
  },
  {
    qn: 100,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n근로자공급사업 허가의 유효기간은 ( )년으로 하되, 유효기간이 끝난 후 계속하여 근로자공급사업을 하려는 자는 연장허가를 받아야 하며, 이 경우 연장허가의 유효기간은 연장 전 허가의 유효기간이 끝나는 날부터 ( )년으로 한다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2020 && d.exam_session === 1 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2020-1-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2020-1-Q' + fix.qn);
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
