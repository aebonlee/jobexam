import { SUBJECTS, EXAM_CONFIG } from '../config/site';

export function calculatePilgiScore(questions, answers) {
  const subjectScores = {};

  SUBJECTS.forEach(subject => {
    const subjectQuestions = questions.filter(q => q.subject_id === subject.id);
    const correct = subjectQuestions.filter(q => answers[q.id] === q.correct_answer).length;
    const total = subjectQuestions.length || EXAM_CONFIG.pilgi.questionsPerSubject;
    subjectScores[subject.code] = Math.round((correct / total) * 100);
  });

  const totalCorrect = questions.filter(q => answers[q.id] === q.correct_answer).length;
  const totalScore = Math.round((totalCorrect / questions.length) * 100);

  return { subjectScores, totalScore, totalCorrect };
}

export function checkPass(subjectScores, totalScore) {
  const { passScore, subjectMinScore } = EXAM_CONFIG.pilgi;

  const avgPass = totalScore >= passScore;
  const allSubjectsPass = Object.values(subjectScores).every(
    score => score >= subjectMinScore
  );

  const failedSubjects = SUBJECTS.filter(
    s => (subjectScores[s.code] ?? 0) < subjectMinScore
  );

  return {
    isPass: avgPass && allSubjectsPass,
    avgPass,
    allSubjectsPass,
    failedSubjects,
  };
}

export function getGrade(score) {
  if (score >= 90) return { label: '수', color: '#10B981' };
  if (score >= 80) return { label: '우', color: '#3B82F6' };
  if (score >= 70) return { label: '미', color: '#6366F1' };
  if (score >= 60) return { label: '양', color: '#F59E0B' };
  return { label: '가', color: '#EF4444' };
}

export function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
