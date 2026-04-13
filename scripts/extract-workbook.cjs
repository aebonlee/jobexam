const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const PDF_PATH = path.join(__dirname, '..', 'Dev_md', 'pdf',
  '[워크북] 2026 직업상담사 2급 2차 실기 핵심이론+8개년 기출20260224152349.pdf');

async function main() {
  const buf = fs.readFileSync(PDF_PATH);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const result = await parser.getText();
  const text = result.text;
  const numpages = result.totalPages || 'unknown';

  console.log('=== PDF INFO ===');
  console.log('Pages:', numpages);
  console.log('Text length:', text.length);
  console.log('');

  // Write full text to file for analysis
  const outPath = path.join(__dirname, 'workbook-text.txt');
  fs.writeFileSync(outPath, text, 'utf8');
  console.log('Full text written to:', outPath);

  // Print first 5000 chars to understand structure
  console.log('\n=== FIRST 5000 CHARS ===');
  console.log(text.substring(0, 5000));
}

main().catch(console.error);
