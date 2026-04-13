-- ForJob: 실기 연습 결과 저장을 위한 추가 설정
-- exam_sessions 테이블은 이미 존재 → 컬럼/인덱스만 추가

-- 1. status 컬럼 추가 (없으면)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'jobexam_exam_sessions' AND column_name = 'status'
  ) THEN
    ALTER TABLE jobexam_exam_sessions ADD COLUMN status TEXT DEFAULT 'in_progress';
  END IF;
END
$$;

-- 2. 인덱스 추가 (대시보드 쿼리 최적화)
CREATE INDEX IF NOT EXISTS idx_jobexam_sessions_user_type
  ON jobexam_exam_sessions(user_id, exam_type);

CREATE INDEX IF NOT EXISTS idx_jobexam_sessions_completed
  ON jobexam_exam_sessions(completed_at DESC);

-- 3. RLS 정책 갱신
DROP POLICY IF EXISTS "sessions_select" ON jobexam_exam_sessions;
CREATE POLICY "sessions_select" ON jobexam_exam_sessions
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "sessions_insert" ON jobexam_exam_sessions;
CREATE POLICY "sessions_insert" ON jobexam_exam_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "sessions_update" ON jobexam_exam_sessions;
CREATE POLICY "sessions_update" ON jobexam_exam_sessions
  FOR UPDATE USING (auth.uid() = user_id);
