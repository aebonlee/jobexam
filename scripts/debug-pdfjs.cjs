/**
 * pdfjs-dist로 직접 텍스트 아이템 추출 (위치 정보 포함)
 * "보기" 블록이 별도 텍스트 객체에 있는지 확인
 */
const fs = require('fs');
const path = require('path');

async function main() {
  // Dynamic import for ES module
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

  const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');
  const filePath = path.join(PDF_DIR, '직업상담사2급20200606(교사용).pdf');

  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  console.log('Pages:', doc.numPages);

  // 첫 2페이지의 텍스트 아이템 추출
  for (let pageNum = 1; pageNum <= Math.min(doc.numPages, 2); pageNum++) {
    const page = await doc.getPage(pageNum);
    const textContent = await page.getTextContent();

    console.log(`\n=== PAGE ${pageNum} (${textContent.items.length} items) ===`);

    let fullText = '';
    for (const item of textContent.items) {
      if (item.str) {
        fullText += item.str;
        if (item.hasEOL) fullText += '\n';
      }
    }

    console.log(fullText.substring(0, 5000));

    // "보기" 관련 검색
    const bogiItems = textContent.items.filter(item =>
      item.str && /[ㄱ-ㅎ]\s*[\.:]/.test(item.str)
    );
    if (bogiItems.length > 0) {
      console.log('\n--- 보기 items found ---');
      bogiItems.forEach(item => {
        console.log(`  "${item.str}" at (${item.transform[4]}, ${item.transform[5]})`);
      });
    }

    // Williamson 관련
    const williamsonItems = textContent.items.filter(item =>
      item.str && /Williamson|분석|종합|예후|추수/.test(item.str)
    );
    if (williamsonItems.length > 0) {
      console.log('\n--- Williamson/관련 items ---');
      williamsonItems.forEach(item => {
        console.log(`  "${item.str}" at (${item.transform[4]}, ${item.transform[5]})`);
      });
    }
  }
}

main().catch(console.error);
