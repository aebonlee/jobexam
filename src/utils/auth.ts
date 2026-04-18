/**
 * auth.ts — 프로필 업데이트 헬퍼
 */
import { supabase } from '../lib/supabase';

/** 프로필 업데이트 */
export async function updateProfile(
  userId: string,
  updates: Record<string, unknown>
): Promise<any> {
  const client = supabase;
  if (!client) return null;
  const { data, error } = await client
    .from('user_profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}
