/**
 * pdf-parse의 low-level API로 모든 텍스트 아이템 추출 시도
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

  // getText with different options
  const result = await parser.getText();
  console.log('Result keys:', Object.keys(result));
  console.log('Text length:', result.text?.length);

  // 전체 텍스트에서 "보기" 관련 패턴 검색
  const text = result.text || '';

  // "ㄱ." 패턴 (점 포함) - 보기 정의
  const bogiPattern = /[ㄱ-ㅎ]\./g;
  let m;
  let count = 0;
  while ((m = bogiPattern.exec(text)) !== null && count < 10) {
    const start = Math.max(0, m.index - 50);
    const end = Math.min(text.length, m.index + 100);
    console.log(`\n"${m[0]}" at ${m.index}: ...${text.substring(start, end)}...`);
    count++;
  }

  // 분석, 종합, 진단 키워드 검색 (Williamson 관련)
  const keywords = ['분석', '종합', '진단', '예후', '추수'];
  for (const kw of keywords) {
    const idx = text.indexOf(kw);
    if (idx >= 0) {
      console.log(`\n"${kw}" at ${idx}: ...${text.substring(Math.max(0, idx - 30), idx + 50)}...`);
    } else {
      console.log(`\n"${kw}" NOT FOUND`);
    }
  }

  // 전체 텍스트 파일로 저장
  fs.writeFileSync(path.join(__dirname, 'pdf-full-text-2020-1.txt'), text, 'utf-8');
  console.log('\nFull text saved to pdf-full-text-2020-1.txt');
  console.log('Total chars:', text.length);
}

main().catch(console.error);
