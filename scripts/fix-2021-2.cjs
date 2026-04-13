const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 7,
    append: '\n\n다음 대화에서 상담자가 사용한 기법은?\n\n내담자 : 난 사업을 할까 생각 중이에요. 그런데 그 분야에서 일하는 여성들은 대부분 미혼을 한대요.\n상담자 : 선생님은 사업을 하면 미혼을 할까 봐 두려워하시는군요. 직장여성들의 미혼과 다른 분야에 종사하는 여성들에 대한 통계를 알아보도록 하죠.'
  },
  {
    qn: 8,
    append: '\n\n다음 설명에 해당하는 상담 접근은?\n\n내담자에게 과거에 했던 선택의 희생, 절정경험, 자유시간, 그리고 금전사용 계획 등을 조사하고, 존경하는 사람을 쓰게 하는 등의 상담행위'
  },
  {
    qn: 18,
    append: '\n\n<보기>\nㄱ. 중요한 기억은 내담자가 \'마치 지금 일어나고 있는 것처럼\' 기술할 수 있다.\nㄴ. 초기기억에 대한 내담자의 지각보다는 경험을 객관적으로 파악하는 것이 중요하다.\nㄷ. 초기기억은 삶, 자기, 타인에 대한 내담자의 현재 세계관과 일치하는 경향이 있다.\nㄹ. 초기기억을 통해 상담자는 내담자의 삶의 목표를 파악하는 데 도움을 받을 수 있다.'
  },
  {
    qn: 21,
    append: '\n\n다음 설명에 해당하는 이론은?\n\n특정한 직업을 갖게 되는 것은 단순한 선호나 선택의 기능이 아니고 개인이 통제할 수 없는 복잡한 환경적 요인의 결과이다.'
  },
  {
    qn: 24,
    append: '\n\n다음 설명에 해당하는 타당도는?\n\n측정도구가 실제로 무엇을 측정했는가 또는 조사자가 측정하고자 하는 추상적인 개념이 실제로 측정도구에 의해 적절하게 측정되었는가에 관한 문제로서, 이론적 연구를 하는 데 가장 중요한 타당도'
  },
  {
    qn: 34,
    append: '\n\n<보기>\nㄱ. 분석\nㄴ. 종합\nㄷ. 상담\nㄹ. 진단\nㅁ. 추수지도\nㅂ. 처방'
  },
  {
    qn: 35,
    append: '\n\n다음 설명에 해당하는 직무분석 방법은?\n\n미국 퍼듀대학교의 매코믹(McCormick)이 개발했다.\n행동중심적 직무분석기법(behavior-oriented job analysis method)이다.\n6가지의 범주 및 187개 항목으로 구성되었다.\n개별직무에 대해 풍부한 정보를 획득할 수 있는 장점이 있으나, 상대표준을 직접 산출하는 데는 무리가 따른다는 단점을 지니고 있다.'
  },
  {
    qn: 39,
    append: '\n\n다음 ( )에 알맞은 것은?\n\nLevinson의 발달이론에서 성인은 연령에 따라 ( )의 계속적인 과정을 거쳐 발달하게 되며, 이러한 과정단계는 남녀나 문화에 상관없이 적용 가능하다.'
  },
  {
    qn: 43,
    append: '\n\n다음 설명에 해당하는 것은?\n\n다양한 목적을 수행하고자 사물 또는 사람의 움직임을 통제하는데 있어 일정한 경로를 따라 조작되고 안내되어야 하는 기계 또는 설비를 시동, 정지하고 그 움직임을 제어한다.'
  },
  {
    qn: 47,
    append: '\n\n다음 설명에 해당하는 자격 등급은?\n\n해당 국가기술자격의 종목에 관한 숙련기능을 가지고 제작·제조·조작·운전·보수·정비·채취·검사 또는 작업관리 및 이에 관련되는 업무를 수행할 수 있는 능력 보유'
  },
  {
    qn: 50,
    append: '\n\n다음 설명에 해당하는 제도는?\n\n급격한 기술발전에 적응하고 노동시장 변화에 대응하는 사회안전망 차원에서 생애에 걸친 역량개발 향상 등을 위해 국민 스스로 직업능력개발훈련을 실시할 수 있도록 훈련비 등을 지원'
  },
  {
    qn: 59,
    append: '\n\n<보기>\nㄱ. 자격취득자에 대한 법령상 우대 현황\nㄴ. 수행자 동향(응시적 별, 연령별 등)\nㄷ. 연도별 검정 현황(응시자수, 합격률 등)\nㄹ. 시험정보(수수료, 취득방법 등)'
  },
  {
    qn: 84,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n사업주가 근로자에게 육아기 근로시간 단축을 허용하는 경우 단축 후 근로시간은 주당 (ㄱ)시간 이상이어야 하고 (ㄴ)시간을 넘어서는 아니 된다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2021 && d.exam_session === 2 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2021-2-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2021-2-Q' + fix.qn);
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
