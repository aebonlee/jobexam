/**
 * Supabase에 필기 기출문제 데이터를 직접 삽입하는 스크립트
 */
const { createClient } = require('@supabase/supabase-js');
const data = require('../src/data/pilgiQuestions.json');

const supabase = createClient(
  'https://hcmgdztsgjvzcyxyayaj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw'
);

const TABLE = 'jobexam_questions';
const BATCH_SIZE = 50;

async function main() {
  // 1. 기존 데이터 확인
  const { count: existingCount } = await supabase
    .from(TABLE)
    .select('*', { count: 'exact', head: true });
  console.log(`기존 데이터: ${existingCount}개`);

  // 2. 배치 삽입
  let inserted = 0;
  let errors = 0;

  for (let i = 0; i < data.length; i += BATCH_SIZE) {
    const batch = data.slice(i, i + BATCH_SIZE);
    const { data: result, error } = await supabase
      .from(TABLE)
      .insert(batch)
      .select('id');

    if (error) {
      console.error(`Batch ${i / BATCH_SIZE + 1} error:`, error.message);
      errors++;
    } else {
      inserted += result.length;
      process.stdout.write(`\r  삽입 진행: ${inserted}/${data.length}`);
    }
  }

  console.log(`\n\n========================================`);
  console.log(`삽입 완료: ${inserted}개`);
  if (errors > 0) console.log(`오류 배치: ${errors}개`);

  // 3. 최종 확인
  const { count: finalCount } = await supabase
    .from(TABLE)
    .select('*', { count: 'exact', head: true });
  console.log(`최종 데이터: ${finalCount}개`);

  // 4. 연도별 통계
  for (const year of [2020, 2021, 2022]) {
    for (const session of [1, 2, 3]) {
      const { count } = await supabase
        .from(TABLE)
        .select('*', { count: 'exact', head: true })
        .eq('exam_year', year)
        .eq('exam_session', session);
      if (count > 0) {
        console.log(`  ${year}년 ${session}회: ${count}문항`);
      }
    }
  }
}

main().catch(console.error);
