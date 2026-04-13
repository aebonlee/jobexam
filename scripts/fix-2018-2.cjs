const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

const fixes = [
  {
    qn: 1,
    append: '\n\n다음 사례에서 상담자의 적절한 반응은?\n\n우리 집은 왜 그리 시끄러운지 모르겠어요. 형제들이 꼭 공부만 하면 뛰어들어요.'
  },
  {
    qn: 4,
    append: '\n\n<보기>\nㄱ. 반동의 일반화\nㄴ. 목표 행동의 정의\nㄷ. 행동의 기초선 측정\nㄹ. 행동수정 절차의 결정\nㅁ. 적응행동 강화와 부적응행동의 약화'
  },
  {
    qn: 9,
    append: '\n\n다음 설명에 해당하는 기법은?\n\n활동에 대해 물음을 하거나 행동에 참여하는 사람이 어떻게 시간을 보내는지 관찰한다. 이 기법은 사람들이 자신이 좋아하거나 즐기는 활동과 관련된다는 것을 가정���다.'
  },
  {
    qn: 18,
    append: '\n\n다음 설명에 해당하는 상담이론은?\n\n직업상담의 과정에는 진단, 문제분류, 문제 구체화, 문제해결의 단계 등이 포함되어야 하며, 직업상담의 목적에는 직업선택, 의사결정 기술의 습득, 일반적 적응의 고양 등이 포함되어야 한다.'
  },
  {
    qn: 20,
    append: '\n\n다음 상황에서 집단상담 지도자의 적절한 반응은?\n\n집단모임에서 여러 명의 집단원들로부터 부정적인 피드백을 받은 한 집단원에게 다른 집단원이 그의 느낌을 묻자 아무렇지도 않다고 하지만 그의 얼굴표정이 몹시 굳어있을 때, 지도자가 이를 직면하고자 한다.'
  },
  {
    qn: 22,
    append: '\n\n다음 설명에 해당하는 이론은?\n\n특정한 직업을 갖게 되는 것은 단순한 선호나 선택의 기능이 아니고 개인이 통제할 수 없는 복잡한 환경적 요인의 결과이다.'
  },
  {
    qn: 36,
    append: '\n\n<보기>\nㄱ. 성장(growth)\nㄴ. 탐색(exploration)\nㄷ. 유지(maintenance)\nㄹ. 쇠퇴(decline)\nㅁ. 확립(establishment)'
  },
  {
    qn: 44,
    append: '\n\n다음 설명에 해당하는 것은?\n\n10진법 중심의 분류이다.\n직능유형(skill type) 중심이다.\n대분류보다는 중분류 중심체계이다.\n직업분류의 기본 원칙인 포괄성과 배타성을 고려하여 분류하였다.'
  },
  {
    qn: 54,
    append: '\n\n다음 설명에 해당하는 자격 등급은?\n\n해당 국가기술자격의 종목에 관한 최상급 숙련기능을 가지고 산업현장에서 작업관리, 소속 기능인력의 지도 및 감독, 현장훈련, 경영자와 기능인력을 유기적으로 연계시켜 주는 현장관리 등의 업무를 수행할 수 있는 능력 보유'
  },
  {
    qn: 57,
    append: '\n\n다음 설명에 해당하는 것은?\n\n작업자 한사람, 한사람에게 임무·일·책임이 분명하게 존재하며 작업이 수행될 경우, 그 사람, 한사람의 작업을 의미한다.\n어떤 조직이건 작업자의 수 만큼 이것이 존재한다.\n이것은 직무상의 지위를 의미하는 것으로 직무적 조직내의 직무체계 안에서 차지하는 지위를 의미한다.'
  },
  {
    qn: 62,
    append: '\n\n<보기>\nㄱ. 상품수요가 가격 탄력적이면 노동수요의 임금탄력성이 높다.\nㄴ. 숙련정도가 높을수록 노동수요의 임금탄력성은 감소한다.\nㄷ. 생산비 중, 임금비가 차지하는 비중이 크면 노동수���의 임금탄력성이 높다.'
  },
  {
    qn: 70,
    append: '\n\n<보기>\nㄱ. 취업자가 비경제활동인구로 전환\nㄴ. 실업자가 비경제활동인구로 전환\nㄷ. 비경제활동인구가 취업자로 전환\nㄹ. 비경제활동인구가 실업자로 전환'
  },
  {
    qn: 85,
    append: '\n\n<보기>\nㄱ. 미지급임금\nㄴ. 훈련수당\nㄷ. 조기재취업 수당\nㄹ. 직업능력개발 수당'
  },
  {
    qn: 87,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n고용상 연령차별금지 및 고령자고용촉진에 관한 법률상 상시 ( ) 이상의 근로자를 사용하는 사업주는 기준고용률 이상의 고령자를 고용하도록 노력하여야 한다.'
  },
  {
    qn: 88,
    append: '\n\n<보기>\nㄱ. 주휴일\nㄴ. 연차유급휴가\nㄷ. 해고의 예고\nㄹ. 부당해고구제신청'
  },
  {
    qn: 90,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n근로기준법상 사용자는 근로자가 사망 또는 퇴직한 경우에는 그 지급 사유가 발생한 때부터 ( ) 이내에 임금, 보상금, 그 밖에 일체의 금품을 지급하여야 한다. 다만, 특별한 사정이 있을 경우에는 당사자 사이의 합의에 의하여 기일을 연장할 수 있다.'
  },
  {
    qn: 94,
    append: '\n\n다음 ( )에 알맞은 것은?\n\n고용정책 기본법상 상시 ( ) 이상의 근로자를 사용하는 사업주는 매년 근로자의 고용형태현황을 공시하여야 한다.'
  }
];

let fixedCount = 0;
for (const fix of fixes) {
  const idx = data.findIndex(d => d.exam_year === 2018 && d.exam_session === 2 && d.question_number === fix.qn);
  if (idx >= 0) {
    data[idx].question_text = data[idx].question_text + fix.append;
    fixedCount++;
    console.log('FIXED: 2018-2-Q' + fix.qn);
  } else {
    console.log('NOT FOUND: 2018-2-Q' + fix.qn);
  }
}

console.log('\nTotal fixed: ' + fixedCount + '/' + fixes.length);
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log('Saved.');

const updated = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const stillBroken = updated.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁ��]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});
console.log('Remaining broken: ' + stillBroken.length);
