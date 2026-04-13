-- ForJob 02: Subjects + Questions
CREATE TABLE IF NOT EXISTS jobexam_subjects (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  exam_type TEXT DEFAULT 'pilgi',
  color TEXT, icon TEXT, sort_order INT DEFAULT 0
);

INSERT INTO jobexam_subjects (code, name, exam_type, color, icon, sort_order) VALUES
  ('counseling', '직업상담학', 'pilgi', '#3B82F6', 'fa-solid fa-comments', 1),
  ('psychology', '직업심리학', 'pilgi', '#8B5CF6', 'fa-solid fa-brain', 2),
  ('jobinfo', '직업정보론', 'pilgi', '#10B981', 'fa-solid fa-circle-info', 3),
  ('labor_market', '노동시장론', 'pilgi', '#F59E0B', 'fa-solid fa-chart-line', 4),
  ('labor_law', '노동관계법규', 'pilgi', '#EF4444', 'fa-solid fa-scale-balanced', 5)
ON CONFLICT (code) DO NOTHING;

CREATE TABLE IF NOT EXISTS jobexam_questions (
  id SERIAL PRIMARY KEY,
  subject_id INT REFERENCES jobexam_subjects(id),
  exam_year INT, exam_session INT, question_number INT,
  question_text TEXT NOT NULL,
  option_1 TEXT NOT NULL, option_2 TEXT NOT NULL,
  option_3 TEXT NOT NULL, option_4 TEXT NOT NULL,
  correct_answer INT NOT NULL CHECK (correct_answer BETWEEN 1 AND 4),
  explanation TEXT,
  difficulty INT DEFAULT 3 CHECK (difficulty BETWEEN 1 AND 5)
);
CREATE INDEX IF NOT EXISTS idx_jobexam_questions_subject ON jobexam_questions(subject_id);
CREATE INDEX IF NOT EXISTS idx_jobexam_questions_year ON jobexam_questions(exam_year, exam_session);

ALTER TABLE jobexam_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "questions_select" ON jobexam_questions;
CREATE POLICY "questions_select" ON jobexam_questions FOR SELECT USING (true);

CREATE TABLE IF NOT EXISTS jobexam_silgi_questions (
  id SERIAL PRIMARY KEY,
  exam_year INT, exam_session INT, question_number INT,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'essay' CHECK (question_type IN ('short', 'essay', 'calculation')),
  model_answer TEXT, keywords TEXT[], max_points INT DEFAULT 10
);
ALTER TABLE jobexam_silgi_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "silgi_questions_select" ON jobexam_silgi_questions;
CREATE POLICY "silgi_questions_select" ON jobexam_silgi_questions FOR SELECT USING (true);
