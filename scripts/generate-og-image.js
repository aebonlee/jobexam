import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0D1B3E"/>
          <stop offset="50%" style="stop-color:#162850"/>
          <stop offset="100%" style="stop-color:#1A3566"/>
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#60A5FA"/>
          <stop offset="100%" style="stop-color:#A78BFA"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)"/>

      <!-- Decorative circles -->
      <circle cx="1100" cy="100" r="200" fill="rgba(96,165,250,0.05)"/>
      <circle cx="150" cy="500" r="150" fill="rgba(167,139,250,0.04)"/>
      <circle cx="900" cy="400" r="120" fill="rgba(56,189,248,0.03)"/>

      <!-- Top accent line -->
      <rect x="80" y="80" width="120" height="4" rx="2" fill="url(#accent)"/>

      <!-- Badge -->
      <rect x="80" y="110" width="340" height="36" rx="18" fill="rgba(96,165,250,0.15)"/>
      <text x="250" y="134" font-family="Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.9)" text-anchor="middle" font-weight="500">직업상담사 1급·2급 시험 준비</text>

      <!-- Main title -->
      <text x="80" y="220" font-family="Arial,sans-serif" font-size="64" fill="white" font-weight="800">JobExam</text>
      <text x="80" y="300" font-family="Arial,sans-serif" font-size="40" fill="url(#accent)" font-weight="700">합격을 위한 최적의 학습</text>

      <!-- Description -->
      <text x="80" y="380" font-family="Arial,sans-serif" font-size="20" fill="rgba(255,255,255,0.7)">기출문제 CBT | 모의시험 | 과목별 분석 | 오답노트</text>
      <text x="80" y="420" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">필기 5과목 100문항 + 실기 서술형 연습</text>

      <!-- Subject chips -->
      <rect x="80" y="470" width="96" height="32" rx="16" fill="rgba(59,130,246,0.3)"/>
      <text x="128" y="491" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.8)" text-anchor="middle">직업상담학</text>

      <rect x="192" y="470" width="96" height="32" rx="16" fill="rgba(139,92,246,0.3)"/>
      <text x="240" y="491" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.8)" text-anchor="middle">직업심리학</text>

      <rect x="304" y="470" width="96" height="32" rx="16" fill="rgba(16,185,129,0.3)"/>
      <text x="352" y="491" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.8)" text-anchor="middle">직업정보론</text>

      <rect x="416" y="470" width="96" height="32" rx="16" fill="rgba(245,158,11,0.3)"/>
      <text x="464" y="491" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.8)" text-anchor="middle">노동시장론</text>

      <rect x="528" y="470" width="110" height="32" rx="16" fill="rgba(239,68,68,0.3)"/>
      <text x="583" y="491" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.8)" text-anchor="middle">노동관계법규</text>

      <!-- Bottom bar -->
      <rect x="0" y="590" width="${width}" height="40" fill="rgba(0,0,0,0.3)"/>
      <text x="80" y="616" font-family="Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.6)">jobexam.dreamitbiz.com</text>
      <text x="1120" y="616" font-family="Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.4)" text-anchor="end">DreamIT Biz</text>
    </svg>
  `;

  const outputPath = join(__dirname, '..', 'public', 'og-image.png');

  await sharp(Buffer.from(svg))
    .resize(width, height)
    .png({ quality: 90 })
    .toFile(outputPath);

  console.log('OG image generated at:', outputPath);
}

generateOGImage().catch(console.error);
