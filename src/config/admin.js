// 최고관리자 — DB role 조회 실패 시에도 항상 접근 보장 (잠금 방지)
export const SUPERADMIN_EMAILS = ['aebon@kakao.com', 'radical8566@gmail.com', 'aebon@kyonggi.ac.kr'];

// 관리자 등급 체계:
// - superadmin: 최고관리자 (모든 사이트 접근, 관리자 지정 권한)
// - admin: 사이트 관리자 (해당 사이트 관리 기능)
// DB 테이블 profiles.role 필드로 관리
