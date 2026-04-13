/**
 * JSON 데이터를 Supabase SQL INSERT 스크립트로 변환
 */
const fs = require('fs');
const path = require('path');

const data = require('../src/data/pilgiQuestions.json');

function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''").replace(/\\/g, '\\\\');
}

let sql = `-- 직업상담사 2급 필기 기출문제 (2020-2022, 8회분, 800문항)
-- Generated: ${new Date().toISOString().split('T')[0]}
-- Table: jobexam_questions

-- 기존 데이터 삭제 (필요시)
-- DELETE FROM jobexam_questions WHERE exam_year IN (2020, 2021, 2022);

INSERT INTO jobexam_questions (question_text, option_1, option_2, option_3, option_4, correct_answer, subject_id, question_number, exam_year, exam_session, explanation)
VALUES
`;

const values = data.map((q, i) => {
  const qt = escapeSql(q.question_text);
  const o1 = escapeSql(q.option_1);
  const o2 = escapeSql(q.option_2);
  const o3 = escapeSql(q.option_3);
  const o4 = escapeSql(q.option_4);
  const exp = escapeSql(q.explanation);
  return `('${qt}', '${o1}', '${o2}', '${o3}', '${o4}', ${q.correct_answer}, ${q.subject_id}, ${q.question_number}, ${q.exam_year}, ${q.exam_session}, '${exp}')`;
});

sql += values.join(',\n') + ';\n';

// 검증 쿼리
sql += `
-- 검증 쿼리
-- SELECT exam_year, exam_session, COUNT(*) FROM jobexam_questions GROUP BY exam_year, exam_session ORDER BY exam_year, exam_session;
-- SELECT exam_year, exam_session, subject_id, COUNT(*) FROM jobexam_questions GROUP BY exam_year, exam_session, subject_id ORDER BY exam_year, exam_session, subject_id;
`;

const outPath = path.join(__dirname, '..', 'sql', 'insert-pilgi-questions.sql');
const outDir = path.dirname(outPath);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, sql, 'utf-8');

console.log(`SQL file generated: ${outPath}`);
console.log(`Total rows: ${data.length}`);
console.log(`File size: ${(Buffer.byteLength(sql) / 1024).toFixed(1)} KB`);
