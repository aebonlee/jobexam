/**
 * 필기 기출문제 로더
 * Supabase에 데이터가 없을 때 로컬 JSON fallback 사용 (lazy load)
 */
import { supabase, TABLES } from '../lib/supabase';

interface PilgiQuestion {
  id: string | number;
  question_text: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  correct_answer: number;
  subject_id: number;
  question_number: number;
  exam_year: number;
  exam_session: number;
  explanation: string;
}

// 로컬 데이터 캐시 (lazy load)
let _localCache: PilgiQuestion[] | null = null;

async function getLocalQuestions(): Promise<PilgiQuestion[]> {
  if (_localCache) return _localCache;
  const mod = await import('./pilgiQuestions.json');
  const raw = mod.default || mod;
  _localCache = (raw as any[]).map(q => ({
    ...q,
    id: `local_${q.exam_year}_${q.exam_session}_${q.question_number}`,
  }));
  return _localCache;
}

/**
 * 필기 문제 로드 (Supabase 우선, fallback 로컬)
 */
export async function loadPilgiQuestions(options?: {
  examYear?: number | null;
  examSession?: number | null;
  subjectId?: number | null;
  limit?: number;
}): Promise<PilgiQuestion[]> {
  const { examYear, examSession, subjectId, limit } = options || {};

  // 1. Supabase 시도
  try {
    let query = supabase.from(TABLES.QUESTIONS).select('*');
    if (examYear) query = query.eq('exam_year', examYear);
    if (examSession) query = query.eq('exam_session', examSession);
    if (subjectId) query = query.eq('subject_id', subjectId);
    query = query.order('subject_id').order('question_number');
    if (limit) query = query.limit(limit);

    const { data, error } = await query;
    if (!error && data && data.length > 0) {
      return data;
    }
  } catch {
    // Supabase 실패 → fallback
  }

  // 2. 로컬 JSON fallback (lazy load)
  const local = await getLocalQuestions();
  let filtered = [...local];
  if (examYear) filtered = filtered.filter(q => q.exam_year === examYear);
  if (examSession) filtered = filtered.filter(q => q.exam_session === examSession);
  if (subjectId) filtered = filtered.filter(q => q.subject_id === subjectId);
  filtered.sort((a, b) => a.subject_id - b.subject_id || a.question_number - b.question_number);
  if (limit) filtered = filtered.slice(0, limit);
  return filtered;
}

/**
 * 사용 가능한 연도 목록
 */
export async function getAvailableYears(): Promise<number[]> {
  const local = await getLocalQuestions();
  const years = new Set(local.map(q => q.exam_year));
  return [...years].sort((a, b) => b - a);
}

/**
 * 특정 연도의 사용 가능한 회차 목록
 */
export async function getAvailableSessions(year?: number): Promise<number[]> {
  const local = await getLocalQuestions();
  const filtered = year ? local.filter(q => q.exam_year === year) : local;
  const sessions = new Set(filtered.map(q => q.exam_session));
  return [...sessions].sort();
}
