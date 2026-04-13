-- ForJob 01: Profiles
CREATE TABLE IF NOT EXISTS jobexam_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  avatar_url TEXT,
  signup_domain TEXT DEFAULT 'forjob.dreamitbiz.com',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE jobexam_profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "profiles_select" ON jobexam_profiles;
CREATE POLICY "profiles_select" ON jobexam_profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "profiles_insert" ON jobexam_profiles;
CREATE POLICY "profiles_insert" ON jobexam_profiles FOR INSERT WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "profiles_update" ON jobexam_profiles;
CREATE POLICY "profiles_update" ON jobexam_profiles FOR UPDATE USING (auth.uid() = id);

CREATE OR REPLACE FUNCTION handle_jobexam_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO jobexam_profiles (id, name, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, email = EXCLUDED.email, avatar_url = EXCLUDED.avatar_url;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_jobexam_auth_user_created ON auth.users;
CREATE TRIGGER on_jobexam_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_jobexam_new_user();
