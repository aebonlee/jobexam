-- ============================================
-- ForJob - 실기 서술형 연습 결과 저장을 위한 Supabase 설정
-- 날짜: 2026-04-06
-- ============================================
--
-- 기존 jobexam_exam_sessions 테이블을 재활용하여
-- exam_type = 'silgi_practice'로 실기 연습 결과를 저장합니다.
--
-- PracticeMode.tsx에서 저장하는 데이터:
--   user_id, exam_type='silgi_practice', score_total(키워드 일치율%),
--   correct_count(60%이상 문제수), total_questions, time_spent_sec,
--   is_pass(60%이상), score_by_subject(JSON), completed_at, status
-- ============================================

-- ■ 1. 테이블 존재 확인 (이미 있으면 스킵)
-- jobexam_exam_sessions 테이블이 없는 경우에만 생성
CREATE TABLE IF NOT EXISTS jobexam_exam_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    exam_type TEXT NOT NULL DEFAULT 'pilgi',
    score_total INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    time_spent_sec INTEGER DEFAULT 0,
    is_pass BOOLEAN DEFAULT FALSE,
    score_by_subject JSONB DEFAULT '{}',
    completed_at TIMESTAMPTZ,
    status TEXT DEFAULT 'in_progress',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ■ 2. 인덱스 추가 (대시보드 쿼리 최적화)
-- user_id + exam_type 복합 인덱스
CREATE INDEX IF NOT EXISTS idx_jobexam_exam_sessions_user_type
    ON jobexam_exam_sessions (user_id, exam_type);

-- completed_at 내림차순 인덱스 (최근 기록 조회)
CREATE INDEX IF NOT EXISTS idx_jobexam_exam_sessions_completed
    ON jobexam_exam_sessions (completed_at DESC);

-- ■ 3. RLS (Row Level Security) 정책
-- 이미 설정되어 있으면 에러 무시 (IF NOT EXISTS 미지원이므로 DO NOTHING)
ALTER TABLE jobexam_exam_sessions ENABLE ROW LEVEL SECURITY;

-- 사용자 본인 데이터만 조회 가능
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'jobexam_exam_sessions'
        AND policyname = 'Users can view own exam sessions'
    ) THEN
        CREATE POLICY "Users can view own exam sessions"
            ON jobexam_exam_sessions
            FOR SELECT
            USING (auth.uid() = user_id);
    END IF;
END
$$;

-- 사용자 본인 데이터만 삽입 가능
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'jobexam_exam_sessions'
        AND policyname = 'Users can insert own exam sessions'
    ) THEN
        CREATE POLICY "Users can insert own exam sessions"
            ON jobexam_exam_sessions
            FOR INSERT
            WITH CHECK (auth.uid() = user_id);
    END IF;
END
$$;

-- 사용자 본인 데이터만 수정 가능
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'jobexam_exam_sessions'
        AND policyname = 'Users can update own exam sessions'
    ) THEN
        CREATE POLICY "Users can update own exam sessions"
            ON jobexam_exam_sessions
            FOR UPDATE
            USING (auth.uid() = user_id);
    END IF;
END
$$;

-- ■ 4. 검증 쿼리 (실행 후 확인용)

-- 테이블 구조 확인
-- SELECT column_name, data_type, is_nullable, column_default
-- FROM information_schema.columns
-- WHERE table_name = 'jobexam_exam_sessions'
-- ORDER BY ordinal_position;

-- RLS 정책 확인
-- SELECT policyname, cmd, qual, with_check
-- FROM pg_policies
-- WHERE tablename = 'jobexam_exam_sessions';

-- 인덱스 확인
-- SELECT indexname, indexdef
-- FROM pg_indexes
-- WHERE tablename = 'jobexam_exam_sessions';

-- ■ 5. 실기 연습 데이터 조회 예시

-- 전체 실기 연습 기록
-- SELECT * FROM jobexam_exam_sessions
-- WHERE exam_type = 'silgi_practice'
-- ORDER BY completed_at DESC;

-- 사용자별 실기 합격률
-- SELECT
--     user_id,
--     COUNT(*) AS total_practice,
--     COUNT(*) FILTER (WHERE is_pass = TRUE) AS pass_count,
--     ROUND(AVG(score_total)) AS avg_score,
--     ROUND(
--         COUNT(*) FILTER (WHERE is_pass = TRUE)::NUMERIC / COUNT(*) * 100
--     ) AS pass_rate
-- FROM jobexam_exam_sessions
-- WHERE exam_type = 'silgi_practice'
--   AND completed_at IS NOT NULL
-- GROUP BY user_id;

-- 과목별 평균 점수 (JSONB에서 추출)
-- SELECT
--     user_id,
--     ROUND(AVG((score_by_subject->>'counseling')::NUMERIC)) AS counseling_avg,
--     ROUND(AVG((score_by_subject->>'psychology')::NUMERIC)) AS psychology_avg,
--     ROUND(AVG((score_by_subject->>'jobinfo')::NUMERIC)) AS jobinfo_avg,
--     ROUND(AVG((score_by_subject->>'labor_market')::NUMERIC)) AS labor_market_avg
-- FROM jobexam_exam_sessions
-- WHERE exam_type = 'silgi_practice'
--   AND completed_at IS NOT NULL
-- GROUP BY user_id;
