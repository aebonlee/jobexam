/**
 * Q2 주변의 모든 텍스트 아이템을 상세하게 출력
 */
const fs = require('fs');
const path = require('path');

async function main() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const PDF_DIR = path.join(__dirname, '..', 'Dev_md', 'pdf');
  const filePath = path.join(PDF_DIR, '직업상담사2급20200606(교사용).pdf');

  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;

  // 1페이지의 모든 아이템 출력 (Y좌표 순서)
  const page = await doc.getPage(1);
  const textContent = await page.getTextContent();

  // Y좌표로 정렬 (PDF 좌표: 아래가 0, 위가 큼)
  const items = textContent.items
    .filter(item => item.str && item.str.trim())
    .map(item => ({
      text: item.str,
      x: Math.round(item.transform[4]),
      y: Math.round(item.transform[5]),
      width: Math.round(item.width),
      fontName: item.fontName,
    }))
    .sort((a, b) => b.y - a.y || a.x - b.x);

  // Q2 주변 (Williamson 찾기)
  const wIdx = items.findIndex(i => i.text.includes('Williamson'));
  if (wIdx >= 0) {
    const wY = items[wIdx].y;
    console.log(`Williamson at Y=${wY}`);
    console.log('\n=== Items from Q1 end to Q3 start (Y range around Williamson) ===');

    // Williamson의 Y 주변 ±80 범위의 모든 아이템
    const nearItems = items.filter(i => Math.abs(i.y - wY) < 80);
    nearItems.forEach(i => {
      console.log(`  Y=${i.y} X=${i.x} W=${i.width} font=${i.fontName}: "${i.text}"`);
    });
  }

  // 또한 페이지의 annotations 확인
  const annotations = await page.getAnnotations();
  console.log(`\nAnnotations on page 1: ${annotations.length}`);
  annotations.forEach(a => {
    console.log(`  Type: ${a.subtype}, Contents: "${a.contents || ''}" `);
  });

  // 전체 아이템 중 "보기" 관련 찾기
  console.log('\n=== All items containing ㄱ-ㅎ followed by . or : ===');
  items.filter(i => /[ㄱ-ㅎ]\s*[\.:\s]/.test(i.text) && i.text.length > 2).forEach(i => {
    console.log(`  Y=${i.y} X=${i.x}: "${i.text}"`);
  });

  // 전체 아이템 리스트 파일 저장
  const allItems = items.map(i => `Y=${i.y} X=${i.x} W=${i.width} font=${i.fontName}: "${i.text}"`).join('\n');
  fs.writeFileSync(path.join(__dirname, 'pdf-items-page1.txt'), allItems, 'utf-8');
  console.log('\nAll items saved to pdf-items-page1.txt');
}

main().catch(console.error);
