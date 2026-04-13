import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { SUBJECTS } from '../config/site';

Chart.register(...registerables);

export function RadarChart({ scores }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();

    const labels = SUBJECTS.map(s => s.name);
    const data = SUBJECTS.map(s => scores[s.code] ?? 0);
    const colors = SUBJECTS.map(s => s.color);

    chartRef.current = new Chart(canvasRef.current, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: '과목별 점수',
          data,
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          borderColor: '#3B82F6',
          borderWidth: 2,
          pointBackgroundColor: colors,
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
          pointRadius: 5,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 20, display: false },
            grid: { color: 'rgba(0,0,0,0.08)' },
            angleLines: { color: 'rgba(0,0,0,0.08)' },
            pointLabels: {
              font: { size: 12, weight: '600', family: 'Noto Sans KR' },
              color: '#4B5563',
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.raw}점`,
            },
          },
        },
      },
    });

    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, [scores]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} />
    </div>
  );
}

export function BarChart({ sessions }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();
    if (!sessions?.length) return;

    const labels = sessions.map((_, i) => `${i + 1}회`);
    const data = sessions.map(s => s.score_total ?? 0);

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: '총점',
          data,
          backgroundColor: data.map(d => d >= 60 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(239, 68, 68, 0.7)'),
          borderColor: data.map(d => d >= 60 ? '#10B981' : '#EF4444'),
          borderWidth: 1,
          borderRadius: 6,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } },
          x: { grid: { display: false } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.raw}점`,
            },
          },
        },
      },
    });

    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, [sessions]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} />
    </div>
  );
}
