-- ForJob 04: Exam Answers + Bookmarks + Wrong Answers

-- Exam Answers
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

-- Bookmarks
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

-- Wrong Answers
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
