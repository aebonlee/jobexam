-- ============================================
-- ForJob - 직업상담사 2급 시험 준비
-- Supabase Schema (jobexam_ prefix)
-- 재실행 안전 (idempotent)
-- ============================================

-- ■ Profiles
CREATE TABLE IF NOT EXISTS jobexam_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  avatar_url TEXT,
  signup_domain TEXT DEFAULT 'forjob.dreamitbiz.com',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE jobexam_profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "profiles_select" ON jobexam_profiles;
CREATE POLICY "profiles_select" ON jobexam_profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "profiles_insert" ON jobexam_profiles;
CREATE POLICY "profiles_insert" ON jobexam_profiles FOR INSERT WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "profiles_update" ON jobexam_profiles;
CREATE POLICY "profiles_update" ON jobexam_profiles FOR UPDATE USING (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_jobexam_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO jobexam_profiles (id, name, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    email = EXCLUDED.email,
    avatar_url = EXCLUDED.avatar_url;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_jobexam_auth_user_created ON auth.users;
CREATE TRIGGER on_jobexam_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_jobexam_new_user();

-- ■ Subjects
CREATE TABLE IF NOT EXISTS jobexam_subjects (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  exam_type TEXT DEFAULT 'pilgi',
  color TEXT,
  icon TEXT,
  sort_order INT DEFAULT 0
);

INSERT INTO jobexam_subjects (code, name, exam_type, color, icon, sort_order) VALUES
  ('counseling', '직업상담학', 'pilgi', '#3B82F6', 'fa-solid fa-comments', 1),
  ('psychology', '직업심리학', 'pilgi', '#8B5CF6', 'fa-solid fa-brain', 2),
  ('jobinfo', '직업정보론', 'pilgi', '#10B981', 'fa-solid fa-circle-info', 3),
  ('labor_market', '노동시장론', 'pilgi', '#F59E0B', 'fa-solid fa-chart-line', 4),
  ('labor_law', '노동관계법규', 'pilgi', '#EF4444', 'fa-solid fa-scale-balanced', 5)
ON CONFLICT (code) DO NOTHING;

-- ■ Questions (Pilgi)
CREATE TABLE IF NOT EXISTS jobexam_questions (
  id SERIAL PRIMARY KEY,
  subject_id INT REFERENCES jobexam_subjects(id),
  exam_year INT,
  exam_session INT,
  question_number INT,
  question_text TEXT NOT NULL,
  option_1 TEXT NOT NULL,
  option_2 TEXT NOT NULL,
  option_3 TEXT NOT NULL,
  option_4 TEXT NOT NULL,
  correct_answer INT NOT NULL CHECK (correct_answer BETWEEN 1 AND 4),
  explanation TEXT,
  difficulty INT DEFAULT 3 CHECK (difficulty BETWEEN 1 AND 5)
);

CREATE INDEX IF NOT EXISTS idx_jobexam_questions_subject ON jobexam_questions(subject_id);
CREATE INDEX IF NOT EXISTS idx_jobexam_questions_year ON jobexam_questions(exam_year, exam_session);

ALTER TABLE jobexam_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "questions_select" ON jobexam_questions;
CREATE POLICY "questions_select" ON jobexam_questions FOR SELECT USING (true);

-- ■ Silgi Questions
CREATE TABLE IF NOT EXISTS jobexam_silgi_questions (
  id SERIAL PRIMARY KEY,
  exam_year INT,
  exam_session INT,
  question_number INT,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'essay' CHECK (question_type IN ('short', 'essay', 'calculation')),
  model_answer TEXT,
  keywords TEXT[],
  max_points INT DEFAULT 10
);

ALTER TABLE jobexam_silgi_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "silgi_questions_select" ON jobexam_silgi_questions;
CREATE POLICY "silgi_questions_select" ON jobexam_silgi_questions FOR SELECT USING (true);

-- ■ Exam Sessions (필기 + 실기 연습 공용)
CREATE TABLE IF NOT EXISTS jobexam_exam_sessions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_type TEXT DEFAULT 'pilgi',        -- 'pilgi' | 'silgi_practice'
  mode TEXT DEFAULT 'exam',
  exam_year INT,
  total_questions INT,
  correct_count INT DEFAULT 0,
  score_total NUMERIC DEFAULT 0,
  score_by_subject JSONB,
  is_pass BOOLEAN DEFAULT false,
  time_spent_sec INT DEFAULT 0,
  status TEXT DEFAULT 'in_progress',     -- 'in_progress' | 'completed'
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- status 컬럼이 없으면 추가 (기존 테이블 호환)
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

CREATE INDEX IF NOT EXISTS idx_jobexam_sessions_user ON jobexam_exam_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_jobexam_sessions_user_type ON jobexam_exam_sessions(user_id, exam_type);
CREATE INDEX IF NOT EXISTS idx_jobexam_sessions_completed ON jobexam_exam_sessions(completed_at DESC);

ALTER TABLE jobexam_exam_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "sessions_select" ON jobexam_exam_sessions;
CREATE POLICY "sessions_select" ON jobexam_exam_sessions FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "sessions_insert" ON jobexam_exam_sessions;
CREATE POLICY "sessions_insert" ON jobexam_exam_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "sessions_update" ON jobexam_exam_sessions;
CREATE POLICY "sessions_update" ON jobexam_exam_sessions FOR UPDATE USING (auth.uid() = user_id);

-- ■ Exam Answers
CREATE TABLE IF NOT EXISTS jobexam_exam_answers (
  id SERIAL PRIMARY KEY,
  session_id INT REFERENCES jobexam_exam_sessions(id) ON DELETE CASCADE,
  question_id INT REFERENCES jobexam_questions(id),
  selected_answer INT,
  is_correct BOOLEAN
);

CREATE INDEX IF NOT EXISTS idx_jobexam_answers_session ON jobexam_exam_answers(session_id);

ALTER TABLE jobexam_exam_answers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "answers_select" ON jobexam_exam_answers;
CREATE POLICY "answers_select" ON jobexam_exam_answers FOR SELECT
  USING (EXISTS (SELECT 1 FROM jobexam_exam_sessions s WHERE s.id = session_id AND s.user_id = auth.uid()));
DROP POLICY IF EXISTS "answers_insert" ON jobexam_exam_answers;
CREATE POLICY "answers_insert" ON jobexam_exam_answers FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM jobexam_exam_sessions s WHERE s.id = session_id AND s.user_id = auth.uid()));

-- ■ Bookmarks
CREATE TABLE IF NOT EXISTS jobexam_bookmarks (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id INT REFERENCES jobexam_questions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

ALTER TABLE jobexam_bookmarks ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "bookmarks_select" ON jobexam_bookmarks;
CREATE POLICY "bookmarks_select" ON jobexam_bookmarks FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "bookmarks_insert" ON jobexam_bookmarks;
CREATE POLICY "bookmarks_insert" ON jobexam_bookmarks FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "bookmarks_delete" ON jobexam_bookmarks;
CREATE POLICY "bookmarks_delete" ON jobexam_bookmarks FOR DELETE USING (auth.uid() = user_id);

-- ■ Wrong Answers
CREATE TABLE IF NOT EXISTS jobexam_wrong_answers (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id INT REFERENCES jobexam_questions(id) ON DELETE CASCADE,
  wrong_count INT DEFAULT 1,
  resolved BOOLEAN DEFAULT false,
  UNIQUE(user_id, question_id)
);

ALTER TABLE jobexam_wrong_answers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "wrong_select" ON jobexam_wrong_answers;
CREATE POLICY "wrong_select" ON jobexam_wrong_answers FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "wrong_insert" ON jobexam_wrong_answers;
CREATE POLICY "wrong_insert" ON jobexam_wrong_answers FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "wrong_update" ON jobexam_wrong_answers;
CREATE POLICY "wrong_update" ON jobexam_wrong_answers FOR UPDATE USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "wrong_delete" ON jobexam_wrong_answers;
CREATE POLICY "wrong_delete" ON jobexam_wrong_answers FOR DELETE USING (auth.uid() = user_id);
