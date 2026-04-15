-- ============================================================
-- jobexam Admin RLS 정책
-- 실행: Supabase SQL Editor에서 직접 실행
-- ============================================================

-- 1. 관리자 확인 함수
CREATE OR REPLACE FUNCTION is_jobexam_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
      AND email IN ('aebon@kakao.com', 'radical8566@gmail.com')
  );
$$;

-- ============================================================
-- 2. jobexam_orders RLS
-- ============================================================
ALTER TABLE jobexam_orders ENABLE ROW LEVEL SECURITY;

-- SELECT: 본인 주문 + 관리자 전체
CREATE POLICY "jobexam_orders_select"
  ON jobexam_orders FOR SELECT
  USING (user_id = auth.uid() OR is_jobexam_admin());

-- INSERT: 본인만
CREATE POLICY "jobexam_orders_insert"
  ON jobexam_orders FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- UPDATE: 관리자만
CREATE POLICY "jobexam_orders_update"
  ON jobexam_orders FOR UPDATE
  USING (is_jobexam_admin());

-- ============================================================
-- 3. jobexam_coupons RLS
-- ============================================================
ALTER TABLE jobexam_coupons ENABLE ROW LEVEL SECURITY;

-- SELECT: 전체 조회 가능 (쿠폰 코드 입력 시 필요)
CREATE POLICY "jobexam_coupons_select"
  ON jobexam_coupons FOR SELECT
  USING (true);

-- INSERT/UPDATE/DELETE: 관리자만
CREATE POLICY "jobexam_coupons_admin"
  ON jobexam_coupons FOR ALL
  USING (is_jobexam_admin());

-- ============================================================
-- 4. jobexam_coupon_redemptions RLS
-- ============================================================
ALTER TABLE jobexam_coupon_redemptions ENABLE ROW LEVEL SECURITY;

-- SELECT: 본인 사용 내역 + 관리자 전체
CREATE POLICY "jobexam_coupon_redemptions_select"
  ON jobexam_coupon_redemptions FOR SELECT
  USING (user_id = auth.uid() OR is_jobexam_admin());

-- INSERT: 본인만
CREATE POLICY "jobexam_coupon_redemptions_insert"
  ON jobexam_coupon_redemptions FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- ============================================================
-- 5. jobexam_exam_sessions 관리자 bypass 추가
-- ============================================================
DO $$
BEGIN
  -- 기존 정책이 있으면 삭제 후 재생성
  DROP POLICY IF EXISTS "jobexam_exam_sessions_select" ON jobexam_exam_sessions;

  CREATE POLICY "jobexam_exam_sessions_select"
    ON jobexam_exam_sessions FOR SELECT
    USING (user_id = auth.uid() OR is_jobexam_admin());
EXCEPTION
  WHEN undefined_table THEN
    RAISE NOTICE 'jobexam_exam_sessions 테이블이 존재하지 않습니다.';
END $$;
