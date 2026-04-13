/**
 * 도메인 지식으로 "보기" 복원 스크립트
 *
 * 순서 나열 문제: 정답 순서를 알면 ㄱ,ㄴ,ㄷ 매핑을 역산 가능
 * 모두 고른 것은: 이론별 보기 항목을 직접 매핑
 */
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');

// ====================================================================
// 도메인 지식: 순서 나열 문제의 정답 순서
// ====================================================================
const KNOWN_SEQUENCES = {
  // Williamson 특성-요인 상담 6단계
  'williamson_6': ['분석', '종합', '진단', '예후', '상담(처치)', '추수(추적)'],
  // Super 발달적 직업상담 6단계 (의사결정에 이르는 단계)
  'super_dev_6': ['비지시적 문제탐색 및 자아개념 기술', '자아수용 및 자아통찰', '태도와 감정의 탐색과 처리', '현실검증', '의사결정을 위한 탐색과 연습', '의사결정'],
  // Super 진로발달 5단계
  'super_career_5': ['성장기', '탐색기', '확립기', '유지기', '쇠퇴기'],
  // 행동수정 프로그램 5단계
  'behavior_mod_5': ['문제의 확인(목표설정)', '표적행동의 구체적 정의 및 측정', '프로그램 설계', '프로그램 수행', '평가'],
  // 직업상담 과정의 사정단계 4단계
  'assessment_4': ['자료수집(다양한 검사 실시)', '자료해석(검사결과 종합)', '개인분석(강점/약점 파악)', '의사결정(목표설정 및 계획수립)'],
  // 특성-요인 직업상담 5단계 (Parsons)
  'trait_factor_5': ['자기이해', '직업정보', '합리적 의사결정', '직업배치', '추수지도'],
  // 일반적 진로상담 과정 5단계
  'general_counseling_5': ['관계형성', '문제평가(사정)', '목표설정', '개입(상담실행)', '종결 및 추수지도'],
  // Gelatt 의사결정 8단계
  'gelatt_8': ['목적(목표)인식', '자료수집', '가능한 대안 파악', '각 대안의 결과 예측', '각 결과의 가능성 평가', '각 결과의 바람직성 평가', '대안 선택(의사결정)', '평가(결과 검토)'],
  // 인지적 정보처리 이론(CIP) CASVE 5단계
  'casve_5': ['의사소통(Communication)', '분석(Analysis)', '종합(Synthesis)', '가치화(Valuing)', '실행(Execution)'],
  // 진로교육 지도단계 4단계
  'career_education_4': ['자아이해', '일과 직업세계의 이해', '진로계획', '진로준비'],
  // 직업정보 처리과정 6단계
  'job_info_process_6': ['편집', '코딩', '자료입력', '정보처리', '분석', '출판'],
};

// ====================================================================
// 순서 나열 문제 매핑 (year-session-qnum → 이론 + 보기 항목)
// 정답에서 역산하여 ㄱ,ㄴ,ㄷ이 무엇을 뜻하는지 파악
// ====================================================================

/**
 * 정답 옵션에서 순서를 파싱
 * 예: "ㄴ→ㄹ→ㄱ→ㄷ→ㅁ→ㅂ" → ['ㄴ','ㄹ','ㄱ','ㄷ','ㅁ','ㅂ']
 */
function parseOrder(optionText) {
  // → or - or , 구분자로 분리
  return optionText.split(/[→\-,]/).map(s => s.trim()).filter(s => /^[ㄱ-ㅎ]$/.test(s));
}

/**
 * 정답 순서와 이론 순서로 보기 텍스트 생성
 * correctOrder: ['ㄴ','ㄹ','ㄱ','ㄷ','ㅁ','ㅂ'] (정답의 순서)
 * theorySteps: ['분석','종합','진단','예후','상담','추수'] (이론의 정확한 순서)
 * → "ㄱ. 진단  ㄴ. 분석  ㄷ. 예후  ㄹ. 종합  ㅁ. 상담(처치)  ㅂ. 추수(추적)"
 */
function buildBogiText(correctOrder, theorySteps) {
  if (correctOrder.length !== theorySteps.length) return null;

  const mapping = {};
  for (let i = 0; i < correctOrder.length; i++) {
    mapping[correctOrder[i]] = theorySteps[i];
  }

  // ㄱ,ㄴ,ㄷ 순서로 출력
  const letters = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ'].slice(0, correctOrder.length);
  const usedLetters = Object.keys(mapping).sort((a, b) => letters.indexOf(a) - letters.indexOf(b));

  return usedLetters.map(l => `${l}. ${mapping[l]}`).join('\n');
}

// ====================================================================
// 순서 나열 문제의 이론 매핑
// ====================================================================
const ORDERING_QUESTIONS = {
  // Williamson 특성-요인 상담 6단계
  '2018-3-3': 'williamson_6',
  '2020-1-2': 'williamson_6',
  '2021-2-34': 'williamson_6',
  '2021-3-3': 'williamson_6',

  // 특성-요인 직업상담 과정 (5단계 또는 6단계 - Williamson과 동일)
  '2017-3-4': 'williamson_6',  // "특성-요인 직업상담의 과정" 5단계면 다름
  '2019-2-9': 'williamson_6',
  '2022-1-9': 'williamson_6',

  // Super 발달적 직업상담 6단계
  '2016-2-1': 'super_dev_6',
  '2020-2-4': 'super_dev_6',

  // Super 진로발달 5단계
  '2018-2-36': 'super_career_5',

  // 행동수정 프로그램 5단계
  '2014-2-13': 'behavior_mod_5',
  '2018-2-4': 'behavior_mod_5',

  // 사정단계 4단계
  '2014-2-17': 'assessment_4',
  '2020-1-14': 'assessment_4',

  // 일반적 진로상담 과정 5단계
  '2018-3-14': 'general_counseling_5',

  // Gelatt 의사결정 8단계
  '2016-3-22': 'gelatt_8',

  // CASVE 5단계
  '2021-1-36': 'casve_5',

  // 진로교육 지도단계
  '2016-2-40': 'career_education_4',

  // 직업정보 처리과정
  '2019-3-53': 'job_info_process_6',

  // 원점수 나열 (이것은 보기에 사람 이름이 있음 - 특수)
  '2016-2-38': null, // skip - 사람별 원점수 표가 필요
};

// ====================================================================
// "( )에 알맞은 것은?" 문제의 보기 복원 (법령 관련)
// ====================================================================
const FILL_IN_BLANK_FIXES = {
  // Super 발달적 직업상담 단계 (ㄱ),(ㄴ),(ㄷ) 빈칸
  '2016-3-2': '비지시적 문제탐색 및 자아개념 기술 → (ㄱ) → (ㄴ) → 현실검증 → 의사결정을 위한 탐색과 연습 → (ㄷ)',
  '2019-2-3': '비지시적 문제탐색 및 자아개념 기술 → (ㄱ) → (ㄴ) → 현실검증 → 의사결정을 위한 탐색과 연습 → (ㄷ)',
};

// ====================================================================
// 메인 처리
// ====================================================================
function main() {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  console.log(`Loaded ${data.length} questions`);

  // 문제 있는 105개 식별
  const problematic = data.filter(q => {
    const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
    const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
    const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
    return hasRef && !textHasRef;
  });

  console.log(`Found ${problematic.length} problematic questions\n`);

  let fixedCount = 0;
  let skippedCount = 0;

  for (const q of problematic) {
    const key = `${q.exam_year}-${q.exam_session}-${q.question_number}`;
    const theoryKey = ORDERING_QUESTIONS[key];

    if (theoryKey === null) {
      // 명시적으로 스킵 (특수 유형)
      skippedCount++;
      continue;
    }

    if (theoryKey && KNOWN_SEQUENCES[theoryKey]) {
      // 순서 나열 문제 - 정답에서 역산
      const correctOption = q[`option_${q.correct_answer}`];
      if (!correctOption) {
        console.error(`No correct option for ${key}`);
        skippedCount++;
        continue;
      }

      const correctOrder = parseOrder(correctOption);
      const theorySteps = KNOWN_SEQUENCES[theoryKey];

      if (correctOrder.length !== theorySteps.length) {
        console.log(`MISMATCH: ${key} - order has ${correctOrder.length} items, theory has ${theorySteps.length}`);

        // 특성-요인 5단계인지 확인 (Williamson 6단계와 다를 수 있음)
        if (correctOrder.length === 5 && theoryKey === 'williamson_6') {
          // 5단계 버전: 분석→종합→진단→예후→상담 (추수 제외) 또는
          // Parsons식: 자기이해→직업정보→합리적 의사결정→직업배치→추수지도
          const alt5 = ['분석', '종합', '진단', '예후', '상담(처치)'];
          const bogiText = buildBogiText(correctOrder, alt5);
          if (bogiText) {
            const idx = data.findIndex(d =>
              d.exam_year === q.exam_year && d.exam_session === q.exam_session && d.question_number === q.question_number
            );
            if (idx >= 0) {
              data[idx].question_text = q.question_text + '\n\n<보기>\n' + bogiText;
              fixedCount++;
              console.log(`FIXED (5-step): ${key}`);
              continue;
            }
          }
        }
        skippedCount++;
        continue;
      }

      const bogiText = buildBogiText(correctOrder, theorySteps);
      if (bogiText) {
        const idx = data.findIndex(d =>
          d.exam_year === q.exam_year && d.exam_session === q.exam_session && d.question_number === q.question_number
        );
        if (idx >= 0) {
          data[idx].question_text = q.question_text + '\n\n<보기>\n' + bogiText;
          fixedCount++;
          console.log(`FIXED: ${key} (${theoryKey})`);
        }
      } else {
        console.log(`BUILD FAILED: ${key}`);
        skippedCount++;
      }
    } else {
      skippedCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Fixed: ${fixedCount}`);
  console.log(`Skipped: ${skippedCount}`);

  // 저장
  if (fixedCount > 0) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`\nSaved updated JSON`);
  }

  // 여전히 남은 문제 확인
  const updatedData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const stillBroken = updatedData.filter(q => {
    const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
    const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
    const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
    return hasRef && !textHasRef;
  });
  console.log(`\nStill broken: ${stillBroken.length} (was ${problematic.length})`);
}

main();
