const data = require('../src/data/pilgiQuestions.json');

// 해설 있는 문제 샘플
const withExpl = data.filter(q => q.explanation && q.explanation.length > 5);

console.log('=== 해설 샘플 (3개) ===\n');
for (const q of withExpl.slice(0, 3)) {
  console.log(`Q${q.question_number} | ${q.exam_year}-${q.exam_session}회 | 과목${q.subject_id}`);
  console.log('문제:', q.question_text.substring(0, 60) + '...');
  console.log('해설:', q.explanation.substring(0, 200) + (q.explanation.length > 200 ? '...' : ''));
  console.log('---');
}

// 연도별 해설 통계
console.log('\n=== 연도별 해설 통계 ===');
const stats = {};
for (const q of data) {
  const key = `${q.exam_year}-${q.exam_session}`;
  if (!stats[key]) stats[key] = { total: 0, withExpl: 0 };
  stats[key].total++;
  if (q.explanation && q.explanation.length > 5) stats[key].withExpl++;
}

for (const [key, val] of Object.entries(stats).sort()) {
  if (val.withExpl > 0) {
    console.log(`  ${key}회: ${val.withExpl}/${val.total} (${Math.round(val.withExpl / val.total * 100)}%)`);
  }
}

console.log(`\n총: ${withExpl.length}/${data.length} 문제에 해설 포함`);

// 파일 크기
const fs = require('fs');
const stats2 = fs.statSync(require('path').join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json'));
console.log('JSON 파일:', (stats2.size / 1024 / 1024).toFixed(2) + ' MB');
