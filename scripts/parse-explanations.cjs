/**
 * 해설집 PDF에서 문제별 해설을 추출하여 기존 데이터에 병합
 */
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json');

const EXPLANATION_MAP = [
  { file: '직업상담사2급20180304(해설집).pdf', year: 2018, session: 1 },
  { file: '직업상담사2급20190303(해설집).pdf', year: 2019, session: 1 },
  { file: '직업상담사2급20190427(해설집).pdf', year: 2019, session: 2 },
  { file: '직업상담사2급20190804(해설집).pdf', year: 2019, session: 3 },
  { file: '직업상담사2급20200822(해설집).pdf', year: 2020, session: 2 },
  { file: '직업상담사2급20200926(해설집).pdf', year: 2020, session: 3 },
  { file: '직업상담사2급20210814(해설집).pdf', year: 2021, session: 3 },
  { file: '직업상담사2급20220424(해설집).pdf', year: 2022, session: 2 },
];

async function readPdf(filePath) {
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const result = await parser.getText();
  return result.text;
}

function parseExplanations(text) {
  const explanations = {};

  // 텍스트 정리
  const clean = text.replace(/\t/g, ' ').replace(/ {2,}/g, ' ');

  // <문제 해설> 마커로 분할
  // 패턴: "숫자. 문제텍스트 ... <문제 해설> 해설텍스트 [해설작성자: xxx]"
  const blocks = clean.split(/<문제\s*해설>/);

  for (let i = 1; i < blocks.length; i++) {
    // 해설 블록 앞부분에서 문제 번호 찾기
    const prevBlock = blocks[i - 1];

    // 이전 블록의 마지막에서 문제 번호 추출
    // "N. 문제텍스트" 패턴의 마지막 등장
    const qMatches = [...prevBlock.matchAll(/(?:^|\n)\s*(\d{1,3})\.\s/g)];
    if (qMatches.length === 0) continue;

    const lastMatch = qMatches[qMatches.length - 1];
    const qNum = parseInt(lastMatch[1]);
    if (qNum < 1 || qNum > 100) continue;

    // 해설 텍스트 추출
    let explanation = blocks[i];

    // 다음 문제 시작 전까지만
    const nextQMatch = explanation.match(/(?:^|\n)\s*\d{1,3}\.\s/);
    if (nextQMatch) {
      explanation = explanation.substring(0, nextQMatch.index);
    }

    // [해설작성자 : xxx] 제거
    explanation = explanation.replace(/\[해설작성자\s*:\s*[^\]]*\]/g, '');

    // 페이지 마커, 헤더/푸터 ��거
    explanation = explanation
      .replace(/--\s*\d+\s*of\s*\d+\s*--/g, '')
      .replace(/본\s*해설집은.*?감사\s*드립니다\./g, '')
      .replace(/직업상담사\s*2급.*?www\.comcbt\.com/g, '')
      .replace(/기출문제\s*해설은.*?www\.comcbt\.com.*?변경됩니다\./g, '')
      .replace(/\d과목\s*:\s*(직업상담학|직업심리학|직업정보론|노동시장론|노동관계법규)/g, '')
      .trim();

    // 여러 줄의 해설을 하나로 합치기
    explanation = explanation.replace(/\n\s*/g, ' ').replace(/ {2,}/g, ' ').trim();

    if (explanation && explanation.length > 5) {
      // 이미 존재하면 합치기 (여러 해설 작성자)
      if (explanations[qNum]) {
        explanations[qNum] += ' ' + explanation;
      } else {
        explanations[qNum] = explanation;
      }
    }
  }

  return explanations;
}

async function main() {
  // 기존 데이터 로드
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  let totalMerged = 0;

  for (const info of EXPLANATION_MAP) {
    const filePath = path.join(PDF_DIR, info.file);
    if (!fs.existsSync(filePath)) {
      console.log(`Not found: ${info.file}`);
      continue;
    }

    console.log(`\nProcessing: ${info.year}년 ${info.session}회 해설집`);

    try {
      const text = await readPdf(filePath);
      const explanations = parseExplanations(text);
      const explCount = Object.keys(explanations).length;
      console.log(`  → ${explCount}개 해설 추출`);

      // 기존 데이터에 병합
      let merged = 0;
      for (const q of data) {
        if (q.exam_year === info.year && q.exam_session === info.session) {
          const expl = explanations[q.question_number];
          if (expl) {
            q.explanation = expl;
            merged++;
          }
        }
      }
      console.log(`  → ${merged}개 ���제에 해설 병합`);
      totalMerged += merged;
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
  }

  // 저장
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n========================================`);
  console.log(`총 ${totalMerged}개 문제에 해설 추가`);

  // 해설 있는 문제 수 통계
  const withExpl = data.filter(q => q.explanation && q.explanation.length > 5);
  console.log(`해설 있는 문제: ${withExpl.length} / ${data.length}`);
}

main().catch(console.error);
