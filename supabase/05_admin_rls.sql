-- ============================================================
-- jobexam 결제/쿠폰 테이블 생성 + Admin RLS 정책
-- 실행: Supabase SQL Editor에서 직접 실행
-- 재실행 안전 (idempotent)
-- ============================================================

-- ■ 1. jobexam_orders 테이블 생성
CREATE TABLE IF NOT EXISTS jobexam_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT,
  user_name TEXT,
  user_phone TEXT,
  plan_type TEXT,
  total_amount NUMERIC DEFAULT 0,
  payment_method TEXT DEFAULT 'card',
  payment_status TEXT DEFAULT 'pending',
  portone_payment_id TEXT,
  paid_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  cancel_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_jobexam_orders_user ON jobexam_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_jobexam_orders_status ON jobexam_orders(payment_status);

-- ■ 2. jobexam_coupons 테이블 생성
CREATE TABLE IF NOT EXISTS jobexam_coupons (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  plan_type TEXT,
  days INT DEFAULT 1,
  max_uses INT DEFAULT 1,
  used_count INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  expires_at DATE,
  created_by TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_jobexam_coupons_code ON jobexam_coupons(code);

-- ■ 3. jobexam_coupon_redemptions 테이블 생성
CREATE TABLE IF NOT EXISTS jobexam_coupon_redemptions (
  id SERIAL PRIMARY KEY,
  coupon_id INT REFERENCES jobexam_coupons(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(coupon_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_jobexam_redemptions_user ON jobexam_coupon_redemptions(user_id);

-- ============================================================
-- ■ 4. 관리자 확인 함수
-- ============================================================
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
-- ■ 5. jobexam_orders RLS
-- ============================================================
ALTER TABLE jobexam_orders ENABLE ROW LEVEL SECURITY;

-- 기존 정책 삭제 (재실행 안전)
DROP POLICY IF EXISTS "jobexam_orders_select" ON jobexam_orders;
DROP POLICY IF EXISTS "jobexam_orders_insert" ON jobexam_orders;
DROP POLICY IF EXISTS "jobexam_orders_update" ON jobexam_orders;

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
-- ■ 6. jobexam_coupons RLS
-- ============================================================
ALTER TABLE jobexam_coupons ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "jobexam_coupons_select" ON jobexam_coupons;
DROP POLICY IF EXISTS "jobexam_coupons_admin" ON jobexam_coupons;

-- SELECT: 전체 조회 가능 (쿠폰 코드 입력 시 필요)
CREATE POLICY "jobexam_coupons_select"
  ON jobexam_coupons FOR SELECT
  USING (true);

-- INSERT/UPDATE/DELETE: 관리자만
CREATE POLICY "jobexam_coupons_admin"
  ON jobexam_coupons FOR ALL
  USING (is_jobexam_admin());

-- ============================================================
-- ■ 7. jobexam_coupon_redemptions RLS
-- ============================================================
ALTER TABLE jobexam_coupon_redemptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "jobexam_coupon_redemptions_select" ON jobexam_coupon_redemptions;
DROP POLICY IF EXISTS "jobexam_coupon_redemptions_insert" ON jobexam_coupon_redemptions;

-- SELECT: 본인 사용 내역 + 관리자 전체
CREATE POLICY "jobexam_coupon_redemptions_select"
  ON jobexam_coupon_redemptions FOR SELECT
  USING (user_id = auth.uid() OR is_jobexam_admin());

-- INSERT: 본인만
CREATE POLICY "jobexam_coupon_redemptions_insert"
  ON jobexam_coupon_redemptions FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- ============================================================
-- ■ 8. jobexam_exam_sessions 관리자 bypass 추가
-- ============================================================
DROP POLICY IF EXISTS "sessions_select" ON jobexam_exam_sessions;
DROP POLICY IF EXISTS "jobexam_exam_sessions_select" ON jobexam_exam_sessions;

CREATE POLICY "sessions_select"
  ON jobexam_exam_sessions FOR SELECT
  USING (user_id = auth.uid() OR is_jobexam_admin());
