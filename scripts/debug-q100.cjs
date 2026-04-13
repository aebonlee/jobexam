const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, '..', 'Dev_md', 'pdf', '직업상담사2급20200606(교사용).pdf');
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const result = await parser.getText();
  const text = result.text.replace(/\t/g, ' ').replace(/ {2,}/g, ' ');

  // Find Q100 and everything after it
  const idx = text.search(/\b100\.\s/);
  if (idx >= 0) {
    console.log('=== Q100 and beyond ===');
    console.log(text.substring(idx, idx + 1000));
    console.log('\n=== Last 500 chars of text ===');
    console.log(text.substring(text.length - 500));
  }

  // Also check page-by-page
  const info = await parser.getInfo();
  console.log('\nPages:', info.pages);

  // Get per-page text
  for (let p = 1; p <= result.total; p++) {
    const pageText = await parser.getPageText(p);
    if (pageText && pageText.includes('100.')) {
      console.log(`\n=== Page ${p} (contains Q100) ===`);
      const pt = pageText.replace(/\t/g, ' ').replace(/ {2,}/g, ' ');
      const q100idx = pt.search(/\b100\.\s/);
      if (q100idx >= 0) {
        console.log(pt.substring(q100idx));
      }
    }
  }
}

main().catch(console.error);
