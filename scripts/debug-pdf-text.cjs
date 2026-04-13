/**
 * PDF 텍스트에서 특정 문제 번호 주변의 원본 텍스트를 확인
 */
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');

async function readPdf(filePath) {
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const result = await parser.getText();
  return result.text;
}

async function main() {
  // 2020년 1회 Q2 (Williamson 문제) 확인
  const filePath = path.join(PDF_DIR, '직업상담사2급20200606(교사용).pdf');
  console.log('Reading:', filePath);

  const text = await readPdf(filePath);

  // Q2 주변 텍스트 찾기
  const idx = text.indexOf('2.');
  if (idx >= 0) {
    // Q2 부터 약 2000자 출력
    const chunk = text.substring(Math.max(0, idx - 100), idx + 2000);
    console.log('=== Around Q2 ===');
    console.log(chunk);
    console.log('\n\n');
  }

  // "Williamson" 키워드 검색
  let searchIdx = 0;
  let found = 0;
  while (true) {
    const i = text.indexOf('Williamson', searchIdx);
    if (i < 0) break;
    console.log(`\n=== Williamson found at index ${i} ===`);
    console.log(text.substring(Math.max(0, i - 200), i + 500));
    searchIdx = i + 1;
    found++;
  }
  if (!found) {
    // 한글 이름으로 검색
    const i2 = text.indexOf('윌리암슨');
    if (i2 >= 0) {
      console.log(`\n=== 윌리암슨 found at ${i2} ===`);
      console.log(text.substring(Math.max(0, i2 - 200), i2 + 500));
    }
  }

  // ㄱ. 또는 ㄱ : 패턴 검색 (보기가 존재하는지)
  let refIdx = 0;
  let refCount = 0;
  while (refCount < 5) {
    const i = text.indexOf('ㄱ.', refIdx);
    if (i < 0) break;
    console.log(`\n=== "ㄱ." found at index ${i} ===`);
    console.log(text.substring(Math.max(0, i - 100), i + 200));
    refIdx = i + 1;
    refCount++;
  }

  // 전체 텍스트에서 ㄱㄴㄷ 등장 횟수
  const consonantCount = (text.match(/[ㄱㄴㄷㄹㅁㅂ]/g) || []).length;
  console.log(`\nTotal Korean consonants in PDF: ${consonantCount}`);
  console.log(`Total text length: ${text.length}`);

  // 처음 5000자 저장
  fs.writeFileSync(path.join(__dirname, 'pdf-text-sample.txt'), text.substring(0, 10000), 'utf-8');
  console.log('\nSaved first 10000 chars to pdf-text-sample.txt');
}

main().catch(console.error);
