/**
 * PDF에서 테이블/텍스트 박스 형태의 "보기" 내용 추출 시도
 */
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');

async function main() {
  const filePath = path.join(PDF_DIR, '직업상담사2급20200606(교사용).pdf');
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();

  const info = await parser.getInfo();
  console.log('Pages:', info.pages);

  // 각 페이지별로 텍스트와 테이블 추출
  for (let page = 1; page <= Math.min(info.pages, 3); page++) {
    console.log(`\n=== PAGE ${page} ===`);

    // 페이지 텍스트
    try {
      const pageText = await parser.getPageText(page);
      console.log('--- Page Text ---');
      console.log(pageText.substring(0, 3000));
    } catch (e) {
      console.log('getPageText error:', e.message);
    }

    // 페이지 테이블
    try {
      const tables = await parser.getPageTables(page);
      if (tables && tables.length > 0) {
        console.log(`--- Tables (${tables.length}) ---`);
        tables.forEach((t, i) => {
          console.log(`Table ${i}:`, JSON.stringify(t).substring(0, 500));
        });
      } else {
        console.log('--- No tables found ---');
      }
    } catch (e) {
      console.log('getPageTables error:', e.message);
    }
  }
}

main().catch(console.error);
