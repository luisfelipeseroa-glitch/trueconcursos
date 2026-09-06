-- EstudaFarma V6 — execute no SQL Editor do Supabase
create table if not exists public.study_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.study_profiles enable row level security;

drop policy if exists "read own study profile" on public.study_profiles;
create policy "read own study profile"
on public.study_profiles for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "insert own study profile" on public.study_profiles;
create policy "insert own study profile"
on public.study_profiles for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "update own study profile" on public.study_profiles;
create policy "update own study profile"
on public.study_profiles for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
