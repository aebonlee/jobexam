export default function PassPrediction({ sessions }) {
  if (!sessions?.length) {
    return (
      <div className="prediction-card">
        <h3><i className="fa-solid fa-chart-line" /> 합격 예측</h3>
        <p className="prediction-empty">시험 기록이 없습니다. 시험을 응시하면 합격 예측이 표시됩니다.</p>
      </div>
    );
  }

  const recent = sessions.slice(-5);
  const avgScore = recent.reduce((sum, s) => sum + (s.score_total || 0), 0) / recent.length;
  const passRate = recent.filter(s => s.is_pass).length / recent.length * 100;

  let probability;
  if (avgScore >= 80) probability = 95;
  else if (avgScore >= 70) probability = 80;
  else if (avgScore >= 60) probability = 60;
  else if (avgScore >= 50) probability = 35;
  else probability = 15;

  const level = probability >= 80 ? 'high' : probability >= 50 ? 'medium' : 'low';

  return (
    <div className="prediction-card">
      <h3><i className="fa-solid fa-chart-line" /> 합격 예측</h3>
      <div className="prediction-score">
        <div className="prediction-circle" data-level={level}>
          <span className="prediction-percent">{Math.round(probability)}%</span>
          <span className="prediction-label">합격 확률</span>
        </div>
      </div>
      <div className="prediction-stats">
        <div className="prediction-stat">
          <span className="prediction-stat-label">최근 평균</span>
          <span className="prediction-stat-value">{avgScore.toFixed(1)}점</span>
        </div>
        <div className="prediction-stat">
          <span className="prediction-stat-label">합격률</span>
          <span className="prediction-stat-value">{passRate.toFixed(0)}%</span>
        </div>
        <div className="prediction-stat">
          <span className="prediction-stat-label">응시 횟수</span>
          <span className="prediction-stat-value">{recent.length}회</span>
        </div>
      </div>
    </div>
  );
}
