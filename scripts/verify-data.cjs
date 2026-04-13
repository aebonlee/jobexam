const data = require('../src/data/pilgiQuestions.json');

// 첫 3문제 확인
for (const q of data.slice(0, 3)) {
  console.log('---');
  console.log('Q' + q.question_number, '|', q.exam_year + '-' + q.exam_session + '회', '| 과목:', q.subject_id);
  console.log('문제:', q.question_text.substring(0, 80));
  console.log('①', q.option_1.substring(0, 40));
  console.log('②', q.option_2.substring(0, 40));
  console.log('③', q.option_3.substring(0, 40));
  console.log('④', q.option_4.substring(0, 40));
  console.log('정답:', q.correct_answer);
}

// 마지막 3문제 확인
console.log('\n=== 마지막 3문제 ===');
for (const q of data.slice(-3)) {
  console.log('---');
  console.log('Q' + q.question_number, '|', q.exam_year + '-' + q.exam_session + '회', '| 과목:', q.subject_id);
  console.log('문제:', q.question_text.substring(0, 80));
  console.log('①', q.option_1.substring(0, 40));
  console.log('②', q.option_2.substring(0, 40));
  console.log('③', q.option_3.substring(0, 40));
  console.log('④', q.option_4.substring(0, 40));
  console.log('정답:', q.correct_answer);
}

// 빈 보기 체크
const emptyOpts = data.filter(q => !q.option_1 || !q.option_2 || !q.option_3 || !q.option_4);
console.log('\n빈 보기 문제 수:', emptyOpts.length);
if (emptyOpts.length > 0) {
  for (const q of emptyOpts.slice(0, 5)) {
    console.log('  ', q.exam_year + '-' + q.exam_session + ' Q' + q.question_number,
      'opts:', [q.option_1 ? 'O' : 'X', q.option_2 ? 'O' : 'X', q.option_3 ? 'O' : 'X', q.option_4 ? 'O' : 'X'].join(''));
  }
}

// 정답 0 체크
const noAnswer = data.filter(q => q.correct_answer === 0);
console.log('정답 없는 문제:', noAnswer.length);

// 정답 분포
const answerDist = { 1: 0, 2: 0, 3: 0, 4: 0 };
for (const q of data) answerDist[q.correct_answer]++;
console.log('정답 분포:', answerDist);

// 21번 문제 (과목2 시작) 확인
const q21 = data.find(q => q.question_number === 21 && q.exam_year === 2020 && q.exam_session === 1);
if (q21) {
  console.log('\n=== 2020-1회 21번 (과목2 시작) ===');
  console.log('과목:', q21.subject_id);
  console.log('문제:', q21.question_text.substring(0, 100));
}

// 파일 크기
const fs = require('fs');
const stats = fs.statSync(require('path').join(__dirname, '..', 'src', 'data', 'pilgiQuestions.json'));
console.log('\nJSON 파일 크기:', (stats.size / 1024).toFixed(1) + ' KB');
