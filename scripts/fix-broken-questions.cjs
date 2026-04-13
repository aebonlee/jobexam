/**
 * 105개 문제의 누락된 "보기" 내용을 PDF에서 재추출하여 복원하는 스크립트
 *
 * 문제: 옵션에 ㄱ,ㄴ,ㄷ 등이 있지만 question_text에 정의가 없는 문제들
 * 원인: PDF 파싱 시 "보기" 블록이 question_text에서 누락됨
 */
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');

// PDF 파일 → (year, session) 매핑
const PDF_MAP = [
  { file: '직업상담사2급20100307(교사용).pdf', year: 2010, session: 1 },
  { file: '직업상담사2급20100506(교사용).pdf', year: 2010, session: 2 },
  { file: '직업상담사2급20100725(교사용).pdf', year: 2010, session: 3 },
  { file: '직업상담사2급20100905(교사용).pdf', year: 2010, session: 4 },
  { file: '직업상담사2급20110320(교사용).pdf', year: 2011, session: 1 },
  { file: '직업상담사2급20110612(교사용).pdf', year: 2011, session: 2 },
  { file: '직업상담사2급20110821(교사용).pdf', year: 2011, session: 3 },
  { file: '직업상담사2급20120304(교사용).pdf', year: 2012, session: 1 },
  { file: '직업상담사2급20120520(교사용).pdf', year: 2012, session: 2 },
  { file: '직업상담사2급20120826(교사용).pdf', year: 2012, session: 3 },
  { file: '직업상담사2급20130322(교사용).pdf', year: 2013, session: 1 },
  { file: '직업상담사2급20130614(교사용).pdf', year: 2013, session: 2 },
  { file: '직업상담사2급20130830(교사용).pdf', year: 2013, session: 3 },
  { file: '직업상담사2급20140302(교사용).pdf', year: 2014, session: 1 },
  { file: '직업상담사2급20140525(교사용).pdf', year: 2014, session: 2 },
  { file: '직업상담사2급20140817(교사용).pdf', year: 2014, session: 3 },
  { file: '직업상담사2급20150308(교사용).pdf', year: 2015, session: 1 },
  { file: '직업상담사2급20150531(교사용).pdf', year: 2015, session: 2 },
  { file: '직업상담사2급20150816(교사용).pdf', year: 2015, session: 3 },
  { file: '직업상담사2급20160306(교사용).pdf', year: 2016, session: 1 },
  { file: '직업상담사2급20160508(교사용).pdf', year: 2016, session: 2 },
  { file: '직업상담사2급20160821(교사용).pdf', year: 2016, session: 3 },
  { file: '직업상담사2급20170305(교사용).pdf', year: 2017, session: 1 },
  { file: '직업상담사2급20170518(교사용).pdf', year: 2017, session: 2 },
  { file: '직업상담사2급20170826(교사용).pdf', year: 2017, session: 3 },
  { file: '직업상담사2급20180304(교사용).pdf', year: 2018, session: 1 },
  { file: '직업상담사2급20180428(교사용).pdf', year: 2018, session: 2 },
  { file: '직업상담사2급20180819(교사용).pdf', year: 2018, session: 3 },
  { file: '직업상담사2급20190303(교사용).pdf', year: 2019, session: 1 },
  { file: '직업상담사2급20190427(교사용).pdf', year: 2019, session: 2 },
  { file: '직업상담사2급20190804(교사용).pdf', year: 2019, session: 3 },
  { file: '직업상담사2급20200606(교사용).pdf', year: 2020, session: 1 },
  { file: '직업상담사2급20200822(교사용).pdf', year: 2020, session: 2 },
  { file: '직업상담사2급20200926(교사용).pdf', year: 2020, session: 3 },
  { file: '직업상담사2급20210307(교사용).pdf', year: 2021, session: 1 },
  { file: '직업상담사2급20210515(교사용).pdf', year: 2021, session: 2 },
  { file: '직업상담사2급20210814(교사용).pdf', year: 2021, session: 3 },
  { file: '직업상담사2급20220305(교사용).pdf', year: 2022, session: 1 },
  { file: '직업상담사2급20220424(교사용).pdf', year: 2022, session: 2 },
];

async function readPdf(filePath) {
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const result = await parser.getText();
  return result.text;
}

/**
 * PDF 텍스트에서 특정 문제 번호의 전체 텍스트 블록을 추출
 * (문제 시작 ~ 다음 문제 시작 사이의 모든 텍스트)
 */
function extractQuestionBlock(pdfText, questionNumber) {
  const cleanText = pdfText.replace(/\t/g, ' ').replace(/ {2,}/g, ' ');

  // 현재 문제 시작 위치 찾기
  const startPattern = new RegExp(`(?:^|\\n)\\s*${questionNumber}\\.\\s`, 'g');
  let startMatch;
  const candidates = [];

  while ((startMatch = startPattern.exec(cleanText)) !== null) {
    candidates.push(startMatch.index);
  }

  if (candidates.length === 0) return null;

  // 다음 문제 시작 위치 찾기
  const nextNum = questionNumber + 1;
  const nextPattern = new RegExp(`(?:^|\\n)\\s*${nextNum}\\.\\s`, 'g');
  let nextPositions = [];
  let nextMatch;
  while ((nextMatch = nextPattern.exec(cleanText)) !== null) {
    nextPositions.push(nextMatch.index);
  }

  // 가장 적합한 블록 찾기
  for (const startPos of candidates) {
    let endPos = cleanText.length;
    for (const np of nextPositions) {
      if (np > startPos && np < endPos) {
        endPos = np;
      }
    }

    const block = cleanText.substring(startPos, endPos).trim();

    // 유효성 검증: 옵션이 있어야 함
    if (/[①②③④❶❷❸❹]/.test(block)) {
      return block;
    }
  }

  // fallback: 첫 번째 후보 사용
  if (candidates.length > 0) {
    const startPos = candidates[0];
    let endPos = cleanText.length;
    for (const np of nextPositions) {
      if (np > startPos && np < endPos) {
        endPos = np;
      }
    }
    return cleanText.substring(startPos, endPos).trim();
  }

  return null;
}

/**
 * 블록에서 question_text 추출 (옵션 제거, 번호 제거)
 * 보기 내용 포함하여 추출
 */
function extractQuestionText(block) {
  // 문제 번호 제거
  let text = block.replace(/^\d{1,3}\.\s*/, '');

  // 첫 번째 옵션 마커(①❶) 이전의 모든 텍스트 = question_text
  const optionMatch = text.search(/[①❶]/);
  if (optionMatch > 0) {
    text = text.substring(0, optionMatch).trim();
  }

  // 페이지 마커, 헤더/푸터 제거
  text = text
    .replace(/--\s*\d+\s*of\s*\d+\s*--/g, '')
    .replace(/직업상담사\s*2급.*?www\.comcbt\.com/g, '')
    .replace(/최강\s*자격증.*?www\.comcbt\.com/g, '')
    .replace(/\d과목\s*:\s*(직업상담학|직업심리학|직업정보론|노동시장론|노동관계법규)/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();

  return text;
}

async function main() {
  // 1. 현재 JSON 데이터 로드
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  console.log(`Loaded ${data.length} questions from JSON`);

  // 2. 문제가 있는 105개 식별
  const problematic = data.filter(q => {
    const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
    const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
    const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
    return hasRef && !textHasRef;
  });

  console.log(`Found ${problematic.length} problematic questions\n`);

  // 3. 필요한 PDF만 파악
  const neededPdfs = new Map(); // key: "year-session", value: PDF info
  for (const q of problematic) {
    const key = `${q.exam_year}-${q.exam_session}`;
    if (!neededPdfs.has(key)) {
      const pdfInfo = PDF_MAP.find(p => p.year === q.exam_year && p.session === q.exam_session);
      if (pdfInfo) {
        neededPdfs.set(key, pdfInfo);
      }
    }
  }

  console.log(`Need to process ${neededPdfs.size} PDF files\n`);

  // 4. PDF별로 텍스트 추출 및 캐시
  const pdfTexts = new Map(); // key: "year-session", value: extracted text

  for (const [key, pdfInfo] of neededPdfs) {
    const filePath = path.join(PDF_DIR, pdfInfo.file);
    if (!fs.existsSync(filePath)) {
      console.error(`MISSING PDF: ${pdfInfo.file}`);
      continue;
    }

    console.log(`Reading PDF: ${pdfInfo.file}`);
    try {
      const text = await readPdf(filePath);
      pdfTexts.set(key, text);
    } catch (err) {
      console.error(`  Error reading ${pdfInfo.file}: ${err.message}`);
    }
  }

  console.log(`\nSuccessfully read ${pdfTexts.size} PDFs\n`);

  // 5. 각 문제 복원
  let fixedCount = 0;
  let failedCount = 0;
  const fixes = []; // 수정 로그

  for (const q of problematic) {
    const key = `${q.exam_year}-${q.exam_session}`;
    const pdfText = pdfTexts.get(key);

    if (!pdfText) {
      console.error(`No PDF text for ${key} Q${q.question_number}`);
      failedCount++;
      continue;
    }

    // PDF에서 해당 문제 블록 추출
    const block = extractQuestionBlock(pdfText, q.question_number);

    if (!block) {
      console.error(`Could not find Q${q.question_number} in ${key} PDF`);
      failedCount++;
      continue;
    }

    // 새 question_text 추출
    const newQuestionText = extractQuestionText(block);

    if (!newQuestionText) {
      console.error(`Empty question text for ${key} Q${q.question_number}`);
      failedCount++;
      continue;
    }

    // ㄱ,ㄴ,ㄷ 정의가 포함되었는지 확인
    const hasRefs = /[ㄱㄴㄷㄹㅁㅂ]/.test(newQuestionText);

    const oldText = q.question_text || '';

    if (hasRefs && newQuestionText.length > oldText.length) {
      // JSON에서 해당 문제 찾아서 업데이트
      const idx = data.findIndex(d =>
        d.exam_year === q.exam_year &&
        d.exam_session === q.exam_session &&
        d.question_number === q.question_number
      );

      if (idx >= 0) {
        data[idx].question_text = newQuestionText;
        fixedCount++;
        fixes.push({
          id: `${q.exam_year}-${q.exam_session} Q${q.question_number}`,
          oldLen: oldText.length,
          newLen: newQuestionText.length,
          preview: newQuestionText.substring(0, 100),
        });
        console.log(`FIXED: ${q.exam_year}-${q.exam_session} Q${q.question_number} (${oldText.length} → ${newQuestionText.length} chars)`);
      }
    } else {
      // 새 텍스트에도 ㄱㄴㄷ이 없으면 PDF 자체에서 누락
      console.log(`STILL MISSING: ${key} Q${q.question_number} - PDF text also lacks refs`);
      console.log(`  Old: ${oldText.substring(0, 80)}`);
      console.log(`  New: ${newQuestionText.substring(0, 80)}`);
      failedCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`RESULTS:`);
  console.log(`  Fixed: ${fixedCount}`);
  console.log(`  Failed: ${failedCount}`);
  console.log(`  Total: ${problematic.length}`);

  // 6. 수정된 JSON 저장
  if (fixedCount > 0) {
    // 백업 먼저
    const backupPath = DATA_PATH.replace('.json', '.backup.json');
    fs.copyFileSync(DATA_PATH, backupPath);
    console.log(`\nBackup saved to: ${backupPath}`);

    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Updated JSON saved: ${fixedCount} questions fixed`);
  }

  // 7. 수정 후 검증
  const updatedData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const stillBroken = updatedData.filter(q => {
    const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
    const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
    const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
    return hasRef && !textHasRef;
  });

  console.log(`\nVerification: ${stillBroken.length} still broken (was ${problematic.length})`);

  if (stillBroken.length > 0) {
    console.log('\nStill broken questions:');
    stillBroken.forEach(q => {
      console.log(`  ${q.exam_year}-${q.exam_session} Q${q.question_number}: ${(q.question_text || '').substring(0, 60)}`);
    });
  }
}

main().catch(console.error);
