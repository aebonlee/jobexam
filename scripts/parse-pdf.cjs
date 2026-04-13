/**
 * 교사용 PDF에서 필기 기출문제를 추출하는 스크립트
 * 정답: ❶❷❸❹ 마커로 표시됨
 */
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');

// PDF 파일 → (year, session) 매핑
const PDF_MAP = [
  // 2010 (4회)
  { file: '직업상담사2급20100307(교사용).pdf', year: 2010, session: 1 },
  { file: '직업상담사2급20100506(교사용).pdf', year: 2010, session: 2 },
  { file: '직업상담사2급20100725(교사용).pdf', year: 2010, session: 3 },
  { file: '직업상담사2급20100905(교사용).pdf', year: 2010, session: 4 },
  // 2011
  { file: '직업상담사2급20110320(교사용).pdf', year: 2011, session: 1 },
  { file: '직업상담사2급20110612(교사용).pdf', year: 2011, session: 2 },
  { file: '직업상담사2급20110821(교사용).pdf', year: 2011, session: 3 },
  // 2012
  { file: '직업상담사2급20120304(교사용).pdf', year: 2012, session: 1 },
  { file: '직업상담사2급20120520(교사용).pdf', year: 2012, session: 2 },
  { file: '직업상담사2급20120826(교사용).pdf', year: 2012, session: 3 },
  // 2013
  { file: '직업상담사2급20130322(교사용).pdf', year: 2013, session: 1 },
  { file: '직업상담사2급20130614(교사용).pdf', year: 2013, session: 2 },
  { file: '직업상담사2급20130830(교사용).pdf', year: 2013, session: 3 },
  // 2014
  { file: '직업상담사2급20140302(교사용).pdf', year: 2014, session: 1 },
  { file: '직업상담사2급20140525(교사용).pdf', year: 2014, session: 2 },
  { file: '직업상담사2급20140817(교사용).pdf', year: 2014, session: 3 },
  // 2015
  { file: '직업상담사2급20150308(교사용).pdf', year: 2015, session: 1 },
  { file: '직업상담사2급20150531(교사용).pdf', year: 2015, session: 2 },
  { file: '직업상담사2급20150816(교사용).pdf', year: 2015, session: 3 },
  // 2016
  { file: '직업상담사2급20160306(교사용).pdf', year: 2016, session: 1 },
  { file: '직업상담사2급20160508(교사용).pdf', year: 2016, session: 2 },
  { file: '직업상담사2급20160821(교사용).pdf', year: 2016, session: 3 },
  // 2017
  { file: '직업상담사2급20170305(교사용).pdf', year: 2017, session: 1 },
  { file: '직업상담사2급20170518(교사용).pdf', year: 2017, session: 2 },
  { file: '직업상담사2급20170826(교사용).pdf', year: 2017, session: 3 },
  // 2018
  { file: '직업상담사2급20180304(교사용).pdf', year: 2018, session: 1 },
  { file: '직업상담사2급20180428(교사용).pdf', year: 2018, session: 2 },
  { file: '직업상담사2급20180819(교사용).pdf', year: 2018, session: 3 },
  // 2019
  { file: '직업상담사2급20190303(교사용).pdf', year: 2019, session: 1 },
  { file: '직업상담사2급20190427(교사용).pdf', year: 2019, session: 2 },
  { file: '직업상담사2급20190804(교사용).pdf', year: 2019, session: 3 },
  // 2020
  { file: '직업상담사2급20200606(교사용).pdf', year: 2020, session: 1 },
  { file: '직업상담사2급20200822(교사용).pdf', year: 2020, session: 2 },
  { file: '직업상담사2급20200926(교사용).pdf', year: 2020, session: 3 },
  // 2021
  { file: '직업상담사2급20210307(교사용).pdf', year: 2021, session: 1 },
  { file: '직업상담사2급20210515(교사용).pdf', year: 2021, session: 2 },
  { file: '직업상담사2급20210814(교사용).pdf', year: 2021, session: 3 },
  // 2022
  { file: '직업상담사2급20220305(교사용).pdf', year: 2022, session: 1 },
  { file: '직업상담사2급20220424(교사용).pdf', year: 2022, session: 2 },
];

// 과목 매핑
const SUBJECT_MAP = {
  '직업상담학': 1,
  '직업심리학': 2,
  '직업정보론': 3,
  '노동시장론': 4,
  '노동관계법규': 5,
};

// 정답 마커
const CORRECT_MARKERS = { '❶': 1, '❷': 2, '❸': 3, '❹': 4 };

async function readPdf(filePath) {
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const result = await parser.getText();
  return result.text;
}

function parseQuestions(text, year, session) {
  const questions = [];
  let currentSubject = 1;

  // 과목 경계 감지
  for (const [name, id] of Object.entries(SUBJECT_MAP)) {
    const regex = new RegExp(`${id}과목\\s*:\\s*${name}`);
    if (regex.test(text)) {
      // 과목이 있는 것으로 확인
    }
  }

  // 텍스트 정리: 탭을 공백으로, 여러 공백을 하나로
  const cleanText = text
    .replace(/\t/g, ' ')
    .replace(/ {2,}/g, ' ');

  // 문제 번호 패턴으로 분리
  // 문제는 "숫자. " 또는 "숫자." 로 시작
  const questionBlocks = [];
  const qRegex = /(?:^|\n)\s*(\d{1,3})\.\s/g;
  let match;
  const positions = [];

  while ((match = qRegex.exec(cleanText)) !== null) {
    const num = parseInt(match[1]);
    if (num >= 1 && num <= 100) {
      positions.push({ num, index: match.index });
    }
  }

  // 마지막 문제 이후의 정답표/푸터 제거를 위해 경계 찾기
  const answerTableIdx = cleanText.search(/전자문제집\s*CBT\s*PC\s*버전/);
  const textEnd = answerTableIdx > 0 ? answerTableIdx : cleanText.length;

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].index;
    const end = i + 1 < positions.length ? positions[i + 1].index : textEnd;
    const block = cleanText.substring(start, end).trim();
    const num = positions[i].num;

    // 과목 결정 (1-20: 1과목, 21-40: 2과목, ...)
    const subjectId = Math.ceil(num / 20);

    // 정답 찾기
    let correctAnswer = 0;
    for (const [marker, ansNum] of Object.entries(CORRECT_MARKERS)) {
      if (block.includes(marker)) {
        correctAnswer = ansNum;
        break;
      }
    }

    // 문제 텍스트와 보기 분리
    // 보기 패턴: ① ② ③ ④ 또는 ❶ ❷ ❸ ❹
    const optionPattern = /(?:①|❶)\s/;
    const optionMatch = block.search(optionPattern);

    let questionText = '';
    let optionsText = '';

    if (optionMatch > 0) {
      questionText = block.substring(0, optionMatch).trim();
      optionsText = block.substring(optionMatch).trim();
    } else {
      questionText = block;
    }

    // 문제 번호 제거
    questionText = questionText.replace(/^\d{1,3}\.\s*/, '').trim();

    // 보기 파싱
    const options = ['', '', '', ''];
    if (optionsText) {
      // 각 보기를 찾아서 분리
      const optParts = optionsText.split(/(?=[①②③④❶❷❸❹])/);
      for (const part of optParts) {
        const trimmed = part.trim();
        if (!trimmed) continue;

        let optNum = 0;
        if (trimmed.startsWith('①') || trimmed.startsWith('❶')) optNum = 1;
        else if (trimmed.startsWith('②') || trimmed.startsWith('❷')) optNum = 2;
        else if (trimmed.startsWith('③') || trimmed.startsWith('❸')) optNum = 3;
        else if (trimmed.startsWith('④') || trimmed.startsWith('❹')) optNum = 4;

        if (optNum > 0 && !options[optNum - 1]) {
          options[optNum - 1] = trimmed.substring(1).trim();
        }
      }
    }

    // 페이지 마커, 헤더/푸터 제거
    const cleanQuestion = questionText
      .replace(/--\s*\d+\s*of\s*\d+\s*--/g, '')
      .replace(/직업상담사\s*2급.*?www\.comcbt\.com/g, '')
      .replace(/최강\s*자격증.*?www\.comcbt\.com/g, '')
      .replace(/\d과목\s*:\s*(직업상담학|직업심리학|직업정보론|노동시장론|노동관계법규)/g, '')
      .trim();

    const cleanOptions = options.map(opt =>
      opt
        .replace(/--\s*\d+\s*of\s*\d+\s*--/g, '')
        .replace(/직업상담사\s*2급.*?www\.comcbt\.com/g, '')
        .replace(/최강\s*자격증.*?www\.comcbt\.com/g, '')
        .replace(/\d과목\s*:\s*(직업상담학|직업심리학|직업정보론|노동시장론|노동관계법규)/g, '')
        .trim()
    );

    if (cleanQuestion && correctAnswer > 0) {
      questions.push({
        question_number: num,
        subject_id: subjectId,
        exam_year: year,
        exam_session: session,
        question_text: cleanQuestion,
        option_1: cleanOptions[0],
        option_2: cleanOptions[1],
        option_3: cleanOptions[2],
        option_4: cleanOptions[3],
        correct_answer: correctAnswer,
        explanation: '',
      });
    }
  }

  return questions;
}

async function main() {
  const allQuestions = [];

  for (const pdfInfo of PDF_MAP) {
    const filePath = path.join(PDF_DIR, pdfInfo.file);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${pdfInfo.file}`);
      continue;
    }

    console.log(`\nProcessing: ${pdfInfo.year}년 ${pdfInfo.session}회 (${pdfInfo.file})`);

    try {
      const text = await readPdf(filePath);
      const questions = parseQuestions(text, pdfInfo.year, pdfInfo.session);
      console.log(`  → Extracted ${questions.length} questions`);

      // 과목별 통계
      const subjectCounts = {};
      for (const q of questions) {
        subjectCounts[q.subject_id] = (subjectCounts[q.subject_id] || 0) + 1;
      }
      console.log(`  → By subject:`, subjectCounts);

      allQuestions.push(...questions);
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
  }

  console.log(`\n========================================`);
  console.log(`Total questions extracted: ${allQuestions.length}`);
  console.log(`Expected: ${PDF_MAP.length * 100} (${PDF_MAP.length} exams × 100)`);

  // JSON 출력
  const outPath = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');
  fs.writeFileSync(outPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
  console.log(`\nSaved to: ${outPath}`);

  // 누락 문제 확인
  for (const pdfInfo of PDF_MAP) {
    const examQs = allQuestions.filter(q => q.exam_year === pdfInfo.year && q.exam_session === pdfInfo.session);
    const nums = examQs.map(q => q.question_number).sort((a, b) => a - b);
    const missing = [];
    for (let i = 1; i <= 100; i++) {
      if (!nums.includes(i)) missing.push(i);
    }
    if (missing.length > 0) {
      console.log(`  ${pdfInfo.year}-${pdfInfo.session}회 missing: [${missing.join(', ')}]`);
    }
  }
}

main().catch(console.error);
