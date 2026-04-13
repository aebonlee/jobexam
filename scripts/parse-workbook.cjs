/**
 * Parse the workbook text to extract all unique questions, their frequencies,
 * and group them by category.
 */
const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'workbook-text.txt'), 'utf8');
const lines = text.split('\n');

// Find all exam sections
const examSections = [];
let currentExam = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Match exam headers like "2025년 1회 실기시험" or "2025년 1회"
  const examMatch = line.match(/^(\d{4})년\s+(\d)회\s*(실기시험)?$/);
  if (examMatch) {
    if (currentExam) examSections.push(currentExam);
    currentExam = {
      year: parseInt(examMatch[1]),
      round: parseInt(examMatch[2]),
      questions: [],
      startLine: i
    };
    continue;
  }

  if (!currentExam) continue;

  // Match question numbers (01-18 at start of line)
  const qMatch = line.match(/^(0[1-9]|1[0-8]|1\s1)\s+(.+)/);
  if (qMatch) {
    const num = qMatch[1].replace(/\s/g, '').padStart(2, '0');
    let title = qMatch[2];

    // Check the previous non-empty lines for frequency data
    let freq = '';
    for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
      const prevLine = lines[j].trim();
      if (!prevLine || prevLine.startsWith('WORK BOOK') || prevLine.startsWith('--')) continue;
      // Frequency pattern: "22-3, 19-2, 13-1" or "25-2, 24-2, 23-1·2·3"
      if (/^\d{2}-\d/.test(prevLine)) {
        freq = prevLine;
        break;
      }
      break; // Stop at first non-matching non-empty line
    }

    // Gather multi-line question text
    for (let j = i + 1; j < Math.min(lines.length, i + 5); j++) {
      const nextLine = lines[j].trim();
      if (!nextLine || nextLine.startsWith('WORK BOOK') || nextLine.startsWith('--') ||
          /^\d{2}-\d/.test(nextLine) || /^(0[1-9]|1[0-8])\s/.test(nextLine)) break;
      if (/^\d+점$/.test(nextLine)) {
        title += ' ' + nextLine;
        break;
      }
      if (nextLine.length > 2 && !nextLine.startsWith('*') && !nextLine.startsWith('•') && !nextLine.startsWith('<')) {
        title += ' ' + nextLine;
      }
    }

    // Clean up title
    title = title.replace(/\s+/g, ' ').replace(/\s*\d+점\s*$/, '').trim();

    currentExam.questions.push({
      num: parseInt(num),
      title: title,
      frequency: freq,
      examYear: currentExam.year,
      examRound: currentExam.round,
    });
  }
}
if (currentExam) examSections.push(currentExam);

console.log(`Found ${examSections.length} exams:`);
examSections.forEach(e => {
  console.log(`  ${e.year}-${e.round}: ${e.questions.length} questions`);
});

// Count all unique topic keywords
const allQuestions = examSections.flatMap(e => e.questions);
console.log(`\nTotal question slots: ${allQuestions.length}`);

// Group by approximate topic (normalize titles)
function normalizeTitle(title) {
  return title
    .replace(/[()（）]/g, '')
    .replace(/를|을|에 대해|에 대하여|에 관한|의|를 쓰고|를 쓰시오|쓰시오|설명하시오|기술하시오/g, '')
    .replace(/\s+/g, ' ')
    .substring(0, 40)
    .trim();
}

// Find the most frequently appearing topics
const topicMap = new Map();
for (const q of allQuestions) {
  // Count frequency occurrences from the frequency string
  let freqCount = 0;
  if (q.frequency) {
    // Count how many year-round references there are
    const matches = q.frequency.match(/\d{2}-\d/g);
    freqCount = matches ? matches.length : 0;
    // Also count middle dot separated rounds like "·2·3"
    const dotMatches = q.frequency.match(/·\d/g);
    freqCount += dotMatches ? dotMatches.length : 0;
  }
  // Add 1 for the current exam itself
  freqCount += 1;

  const key = normalizeTitle(q.title);
  if (!topicMap.has(key)) {
    topicMap.set(key, {
      title: q.title,
      frequency: q.frequency,
      appearances: [],
      totalFreq: freqCount
    });
  }
  topicMap.get(key).appearances.push(`${q.examYear}-${q.examRound}`);
}

// Sort by total appearances in the 8-year period
const sortedTopics = [...topicMap.entries()]
  .sort((a, b) => b[1].appearances.length - a[1].appearances.length);

console.log(`\nUnique topics (by normalized title): ${sortedTopics.length}`);
console.log(`\n=== TOP 50 MOST REPEATED TOPICS (in 8 years) ===\n`);
sortedTopics.slice(0, 50).forEach(([key, data], i) => {
  console.log(`${i + 1}. [${data.appearances.length}회 출제] ${data.title.substring(0, 80)}`);
  console.log(`   출제: ${data.appearances.join(', ')}`);
  console.log(`   이력: ${data.frequency || '(없음)'}`);
  console.log('');
});

// Count questions by year
console.log('\n=== QUESTIONS PER EXAM ===');
examSections.forEach(e => {
  console.log(`${e.year}-${e.round}: ${e.questions.length}문항`);
});

// Write full parsed data as JSON
const outputPath = path.join(__dirname, 'workbook-parsed.json');
fs.writeFileSync(outputPath, JSON.stringify({
  exams: examSections,
  uniqueTopics: sortedTopics.length,
  totalSlots: allQuestions.length
}, null, 2), 'utf8');
console.log(`\nFull parsed data written to: ${outputPath}`);
