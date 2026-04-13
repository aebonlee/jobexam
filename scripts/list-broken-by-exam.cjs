/**
 * 보기 누락 문제를 연도/회차별로 정리하여 출력
 */
const data = require('../src/data/pilgiQuestions.json');

const problematic = data.filter(q => {
  const opts = [q.option_1, q.option_2, q.option_3, q.option_4].join(' ');
  const hasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(opts);
  const textHasRef = /[ㄱㄴㄷㄹㅁㅂ]/.test(q.question_text || '');
  return hasRef && !textHasRef;
});

// 연도/회차별 그룹핑
const grouped = {};
problematic.forEach(q => {
  const key = `${q.exam_year}년 ${q.exam_session}회`;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(q);
});

console.log(`총 ${problematic.length}개 문제 (보기 누락)\n`);
console.log('=' .repeat(70));

// 정렬된 키로 출력
const sortedKeys = Object.keys(grouped).sort();
for (const key of sortedKeys) {
  const qs = grouped[key].sort((a, b) => a.question_number - b.question_number);
  const qNums = qs.map(q => `Q${q.question_number}`).join(', ');
  console.log(`\n${key} (${qs.length}개): ${qNums}`);

  qs.forEach(q => {
    const text = (q.question_text || '').replace(/\n/g, ' ').substring(0, 70);
    const opts = `① ${(q.option_1||'').substring(0,25)} ② ${(q.option_2||'').substring(0,25)}`;
    console.log(`  Q${q.question_number}. ${text}`);
    console.log(`       ${opts}`);
  });
}

console.log('\n' + '='.repeat(70));
console.log(`\nPDF 파일 매핑:`);
const pdfMap = {
  '2010-2': '직업상담사2급20100506(교사용).pdf',
  '2014-2': '직업상담사2급20140525(교사용).pdf',
  '2014-3': '직업상담사2급20140817(교사용).pdf',
  '2015-2': '직업상담사2급20150531(교사용).pdf',
  '2015-3': '직업상담사2급20150816(교사용).pdf',
  '2016-1': '직업상담사2급20160306(교사용).pdf',
  '2016-2': '직업상담사2급20160508(교사용).pdf',
  '2016-3': '직업상담사2급20160821(교사용).pdf',
  '2017-1': '직업상담사2급20170305(교사용).pdf',
  '2017-2': '직업상담사2급20170518(교사용).pdf',
  '2017-3': '직업상담사2급20170826(교사용).pdf',
  '2018-1': '직업상담사2급20180304(교사용).pdf',
  '2018-2': '직업상담사2급20180428(교사용).pdf',
  '2018-3': '직업상담사2급20180819(교사용).pdf',
  '2019-1': '직업상담사2급20190303(교사용).pdf',
  '2019-2': '직업상담사2급20190427(교사용).pdf',
  '2019-3': '직업상담사2급20190804(교사용).pdf',
  '2020-1': '직업상담사2급20200606(교사용).pdf',
  '2020-2': '직업상담사2급20200822(교사용).pdf',
  '2020-3': '직업상담사2급20200926(교사용).pdf',
  '2021-1': '직업상담사2급20210307(교사용).pdf',
  '2021-2': '직업상담사2급20210515(교사용).pdf',
  '2021-3': '직업상담사2급20210814(교사용).pdf',
  '2022-1': '직업상담사2급20220305(교사용).pdf',
  '2022-2': '직업상담사2급20220424(교사용).pdf',
};

const neededPdfs = new Set();
problematic.forEach(q => neededPdfs.add(`${q.exam_year}-${q.exam_session}`));

[...neededPdfs].sort().forEach(key => {
  console.log(`  ${key} → ${pdfMap[key] || '???'}`);
});
