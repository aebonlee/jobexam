const data = require('../src/data/pilgiQuestions.json');

const problematic = data.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});

console.log('Total problematic:', problematic.length);
console.log('');
problematic.forEach(q => {
  console.log('---');
  console.log(`${q.exam_year}-${q.exam_session} Q${q.question_number} (subject:${q.subject_id})`);
  console.log('Text:', (q.question_text || '').substring(0, 120));
  console.log('Opt1:', (q.option_1 || '').substring(0, 80));
  console.log('Opt2:', (q.option_2 || '').substring(0, 80));
});
