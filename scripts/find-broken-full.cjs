const data = require('../src/data/pilgiQuestions.json');

const problematic = data.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});

// Categorize by question_text pattern
const patterns = {};
problematic.forEach(q => {
  const text = q.question_text || '';
  let pattern = 'other';

  if (/바르게 나열한 것은/.test(text)) pattern = '바르게 나열한 것은?';
  else if (/순서대로.*나열한 것은/.test(text)) pattern = '순서대로 나열한 것은?';
  else if (/모두 고른 것은/.test(text)) pattern = '모두 고른 것은?';
  else if (/짝지[은어]진? 것은/.test(text) || /짝지은 것은/.test(text)) pattern = '짝지어진/짝지은 것은?';
  else if (/알맞은 것은/.test(text)) pattern = '( )에 알맞은 것은?';
  else if (/옳은 것.*고른/.test(text) || /옳은 것을 모두/.test(text)) pattern = '옳은 것을 모두 고른 것은?';
  else if (/옳은 것은/.test(text) || /옳게 연결/.test(text)) pattern = '옳은 것은?';
  else if (/해당하는 것을/.test(text)) pattern = '해당하는 것을 모두 고른 것은?';
  else if (/틀린 것은/.test(text)) pattern = '틀린 것은?';

  if (!patterns[pattern]) patterns[pattern] = [];
  patterns[pattern].push(q);
});

console.log(`Total problematic: ${problematic.length}`);
console.log(`\nGrouped by ${Object.keys(patterns).length} patterns:\n`);

Object.entries(patterns).sort((a, b) => b[1].length - a[1].length).forEach(([pattern, qs]) => {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`PATTERN: "${pattern}" (${qs.length} questions)`);
  console.log('='.repeat(80));

  qs.forEach((q, i) => {
    console.log(`\n--- [${i+1}] ${q.exam_year}-${q.exam_session} Q${q.question_number} (subject_id: ${q.subject_id}) ---`);
    console.log(`question_text: ${q.question_text}`);
    console.log(`option_1: ${q.option_1}`);
    console.log(`option_2: ${q.option_2}`);
    console.log(`option_3: ${q.option_3}`);
    console.log(`option_4: ${q.option_4}`);
    console.log(`correct_answer: ${q.correct_answer}`);
  });
});

// Also output subject distribution
console.log(`\n\n${'='.repeat(80)}`);
console.log('SUBJECT DISTRIBUTION:');
const subjCounts = {};
problematic.forEach(q => {
  subjCounts[q.subject_id] = (subjCounts[q.subject_id] || 0) + 1;
});
Object.entries(subjCounts).sort((a, b) => b[1] - a[1]).forEach(([s, c]) => {
  console.log(`  subject_id ${s}: ${c} questions`);
});

// Year distribution
console.log('\nYEAR DISTRIBUTION:');
const yearCounts = {};
problematic.forEach(q => {
  yearCounts[q.exam_year] = (yearCounts[q.exam_year] || 0) + 1;
});
Object.entries(yearCounts).sort((a, b) => a[0] - b[0]).forEach(([y, c]) => {
  console.log(`  ${y}: ${c} questions`);
});
