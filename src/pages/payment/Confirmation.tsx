import { Link, useLocation } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import AuthGuard from '../../components/AuthGuard';

function ConfirmationContent() {
  const location = useLocation();
  const state = location.state as any;

  if (!state?.orderNumber) {
    return (
      <>
        <SEOHead title="주문 확인" />
        <div className="page-header">
          <div className="container">
            <h1><i className="fa-solid fa-receipt" /> 주문 확인</h1>
            <p className="page-desc">주문 정보를 확인할 수 없습니다</p>
          </div>
        </div>
        <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
          <p style={{ marginBottom: 20, color: 'var(--text-secondary)' }}>주문 정보가 없습니다. 주문 내역에서 확인해 주세요.</p>
          <Link to="/orders" className="btn btn-primary">주문 내역</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead title="결제 완료" />
      <div className="page-header">
        <div className="container">
          <h1><i className="fa-solid fa-circle-check" /> 결제 완료</h1>
          <p className="page-desc">결제가 성공적으로 완료되었습니다</p>
        </div>
      </div>

      <div className="container checkout-container">
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <i className="fa-solid fa-circle-check" />
          </div>
          <h2>결제가 완료되었습니다!</h2>
          <p className="confirmation-desc">이제 모든 학습 콘텐츠를 이용할 수 있습니다.</p>

          <div className="confirmation-details">
            <div className="confirmation-row">
              <span>주문번호</span>
              <strong>{state.orderNumber}</strong>
            </div>
            <div className="confirmation-row">
              <span>결제 일시</span>
              <strong>{new Date(state.paidAt).toLocaleString('ko-KR')}</strong>
            </div>
            {state.items?.map((item: any) => (
              <div key={item.id} className="confirmation-row">
                <span>{item.label}</span>
                <strong>{item.price?.toLocaleString()}원</strong>
              </div>
            ))}
            <div className="confirmation-row total">
              <span>합계</span>
              <strong>{state.total?.toLocaleString()}원</strong>
            </div>
          </div>

          <div className="confirmation-actions">
            <Link to="/dashboard" className="btn btn-primary"><i className="fa-solid fa-chart-pie" /> 대시보드</Link>
            <Link to="/pilgi/select" className="btn btn-secondary"><i className="fa-solid fa-pen-to-square" /> 필기 CBT 시작</Link>
            <Link to="/orders" className="btn btn-secondary"><i className="fa-solid fa-receipt" /> 주문 내역</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Confirmation() {
  return (
    <AuthGuard>
      <ConfirmationContent />
    </AuthGuard>
  );
}
