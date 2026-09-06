import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseEnabled = Boolean(url && anonKey)
export const supabase = supabaseEnabled ? createClient(url, anonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
}) : null

export async function loadCloudState(userId) {
  if (!supabaseEnabled || !userId) return null
  const { data, error } = await supabase
    .from('study_profiles')
    .select('state, updated_at')
    .eq('user_id', userId)
    .maybeSingle()
  if (error) throw error
  return data
}

export async function saveCloudState(userId, state) {
  if (!supabaseEnabled || !userId) return null
  const { data, error } = await supabase
    .from('study_profiles')
    .upsert({ user_id: userId, state, updated_at: new Date().toISOString() }, { onConflict: 'user_id' })
    .select('updated_at')
    .single()
  if (error) throw error
  return data
}
