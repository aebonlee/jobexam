/**
 * PortOne V1 (iamport) 결제 유틸리티
 */

const IMP_CODE = import.meta.env.VITE_IMP_CODE || '';
const PG_PROVIDER = import.meta.env.VITE_PG_PROVIDER || '';

export function initPortOne() {
  if (!window.IMP) {
    console.warn('PortOne SDK not loaded');
    return false;
  }
  if (!IMP_CODE) {
    console.warn('VITE_IMP_CODE not configured');
    return false;
  }
  window.IMP.init(IMP_CODE);
  return true;
}

/**
 * 결제 요청
 * @param {Object} params
 * @param {string} params.orderNumber - 주문번호
 * @param {string} params.name - 상품명
 * @param {number} params.amount - 결제금액
 * @param {string} params.buyerName - 구매자 이름
 * @param {string} params.buyerEmail - 구매자 이메일
 * @param {string} params.buyerTel - 구매자 전화번호
 * @param {'card'|'trans'} params.payMethod - 결제수단
 * @returns {Promise<{success: boolean, paymentId?: string, txId?: string, error?: string}>}
 */
export function requestPayment({ orderNumber, name, amount, buyerName, buyerEmail, buyerTel, payMethod = 'card' }) {
  return new Promise((resolve) => {
    if (!window.IMP) {
      resolve({ success: false, error: 'PortOne SDK가 로드되지 않았습니다.' });
      return;
    }

    if (!IMP_CODE || !PG_PROVIDER) {
      // Demo mode
      console.log('[PortOne Demo]', { orderNumber, name, amount });
      setTimeout(() => {
        resolve({
          success: true,
          paymentId: `demo_${Date.now()}`,
          txId: `demo_tx_${Date.now()}`,
        });
      }, 1000);
      return;
    }

    window.IMP.init(IMP_CODE);
    window.IMP.request_pay(
      {
        pg: PG_PROVIDER,
        pay_method: payMethod,
        merchant_uid: orderNumber,
        name,
        amount,
        buyer_name: buyerName,
        buyer_email: buyerEmail,
        buyer_tel: buyerTel,
      },
      (response) => {
        if (response.success) {
          resolve({
            success: true,
            paymentId: response.imp_uid,
            txId: response.merchant_uid,
          });
        } else {
          resolve({
            success: false,
            error: response.error_msg || '결제에 실패했습니다.',
          });
        }
      }
    );
  });
}
