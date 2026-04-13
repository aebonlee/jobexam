import SEOHead from '../../components/SEOHead';

export default function Privacy() {
  return (
    <>
      <SEOHead title="개인정보처리방침" />
      <div className="about-hero">
        <div className="container">
          <h1><i className="fa-solid fa-shield-halved" /> 개인정보처리방침</h1>
          <p>JobPath 개인정보처리방침</p>
        </div>
      </div>
      <div className="container">
        <div className="terms-content">
          <h2>1. 개인정보의 수집 및 이용 목적</h2>
          <p>회사는 다음의 목적을 위해 개인정보를 수집·이용합니다.</p>
          <ul>
            <li>회원 식별 및 서비스 제공</li>
            <li>결제 처리 및 이용권 관리</li>
            <li>학습 기록 저장 및 분석</li>
            <li>고객 문의 대응</li>
          </ul>

          <h2>2. 수집하는 개인정보 항목</h2>
          <h3>필수 항목</h3>
          <ul>
            <li>소셜 로그인 정보: 이름, 이메일 (Google/Kakao 제공)</li>
            <li>프로필 사진 (소셜 계정 제공 시)</li>
          </ul>
          <h3>결제 시 추가 수집</h3>
          <ul>
            <li>결제 정보: 결제수단, 주문번호</li>
            <li>연락처: 이름, 이메일, 전화번호</li>
          </ul>
          <h3>자동 수집</h3>
          <ul>
            <li>학습 기록: 시험 응시 내역, 점수, 북마크, 오답 기록</li>
          </ul>

          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <ul>
            <li>회원 탈퇴 시까지 보유 (탈퇴 후 즉시 파기)</li>
            <li>결제 기록: 전자상거래법에 따라 5년간 보관</li>
          </ul>

          <h2>4. 개인정보의 제3자 제공</h2>
          <p>회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 결제 처리를 위해 결제대행사(KG이니시스)에 필요 최소한의 정보를 전달합니다.</p>

          <h2>5. 개인정보의 파기</h2>
          <p>보유 기간이 만료되거나 수집 목적이 달성된 경우, 해당 개인정보를 지체 없이 파기합니다. 전자적 파일 형태는 복구할 수 없는 방법으로 삭제합니다.</p>

          <h2>6. 이용자의 권리</h2>
          <ul>
            <li>개인정보 열람, 수정, 삭제를 요청할 수 있습니다.</li>
            <li>회원 탈퇴를 통해 개인정보 파기를 요청할 수 있습니다.</li>
            <li>고객센터(aebon@dreamitbiz.com)로 문의하실 수 있습니다.</li>
          </ul>

          <h2>7. 개인정보 보호 조치</h2>
          <ul>
            <li>데이터 암호화 전송 (HTTPS/TLS)</li>
            <li>Supabase Row Level Security로 데이터 접근 제어</li>
            <li>소셜 로그인을 통한 안전한 인증</li>
          </ul>

          <h2>8. 개인정보 보호 책임자</h2>
          <p>이름: 이애본 (대표이사)<br />이메일: aebon@dreamitbiz.com<br />전화: 010-3700-0629</p>

          <p className="terms-date">시행일: 2026년 4월 6일</p>
        </div>
      </div>
    </>
  );
}
