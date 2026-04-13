const data = require('../src/data/pilgiQuestions.json');

const problematic = data.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});

// Better categorization for the "other" bucket
const otherItems = problematic.filter(q => {
  const text = q.question_text || '';
  // These are the ones that didn't match any pattern in the original script
  return !(/바르게 나열한 것은/.test(text) && !/순서대로/.test(text)) &&
         !/순서대로.*나열한 것은/.test(text) &&
         !/모두 고른 것은/.test(text) &&
         !(/짝지[은어]진? 것은/.test(text) || /짝지은 것은/.test(text)) &&
         !/알맞은 것은/.test(text) &&
         !(/옳은 것.*고른/.test(text) || /옳은 것을 모두/.test(text)) &&
         !(/옳은 것은/.test(text) || /옳게 연결/.test(text)) &&
         !/해당하는 것을/.test(text) &&
         !/틀린 것은/.test(text);
});

// Manually categorize the "other" items
otherItems.forEach(q => {
  const text = q.question_text || '';
  let realPattern = 'truly-other';

  if (/모두\s*고른 것은/.test(text)) realPattern = 'actually-모두 고른 것은';
  else if (/바르게 나열/.test(text)) realPattern = 'actually-바르게 나열';
  else if (/순서대로/.test(text)) realPattern = 'actually-순서대로 나열';
  else if (/짝지/.test(text)) realPattern = 'actually-짝지은';
  else if (/알맞은/.test(text)) realPattern = 'actually-알맞은';
  else if (/옳은/.test(text)) realPattern = 'actually-옳은';
  else if (/나열한 것은/.test(text)) realPattern = 'actually-나열한 것은';
  else if (/나타낸 것은/.test(text)) realPattern = 'actually-나타낸 것은';

  console.log(`${q.exam_year}-${q.exam_session} Q${q.question_number}: "${text.substring(0,60)}..." => ${realPattern}`);
});

console.log(`\nTotal "other": ${otherItems.length}`);
