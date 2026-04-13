import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, TABLES } from '../../lib/supabase';
import { formatTime } from '../../utils/scoring';

function StudyHistoryContent() {
  const { user } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from(TABLES.EXAM_SESSIONS)
      .select('*')
      .eq('user_id', user.id)
      .not('completed_at', 'is', null)
      .order('completed_at', { ascending: false })
      .then(({ data }) => {
        setSessions(data || []);
        setLoading(false);
      });
  }, [user]);

  return (
    <>
      <SEOHead title="시험 이력" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-clock-rotate-left" /> 시험 이력</h1>
          <p className="page-desc">지금까지의 시험 기록을 확인하세요</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {loading ? (
          <div className="loading-page"><div className="loading-spinner" /></div>
        ) : sessions.length === 0 ? (
          <div className="text-center mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>시험 기록이 없습니다.</p>
          </div>
        ) : (
          <div className="history-table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>날짜</th>
                  <th>유형</th>
                  <th>모드</th>
                  <th>총점</th>
                  <th>정답</th>
                  <th>소요시간</th>
                  <th>결과</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s, idx) => (
                  <tr key={s.id}>
                    <td>{sessions.length - idx}</td>
                    <td>{new Date(s.completed_at).toLocaleDateString('ko-KR')}</td>
                    <td>{s.exam_type === 'pilgi' ? '필기' : '실기'}</td>
                    <td>{s.mode === 'exam' ? '시험' : '학습'}</td>
                    <td><strong>{s.score_total}점</strong></td>
                    <td>{s.correct_count}/{s.total_questions}</td>
                    <td>{formatTime(s.time_spent_sec)}</td>
                    <td>
                      <span className={`pass-badge ${s.is_pass ? 'pass' : 'fail'}`}>
                        {s.is_pass ? '합격' : '불합격'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default function StudyHistory() {
  return (
    <AuthGuard>
      <StudyHistoryContent />
    </AuthGuard>
  );
}
