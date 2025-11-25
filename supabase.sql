-- =============================================
-- Supabase schema for Sistema Escolar
-- Includes: extensions, tables, views, RLS policies, trigger, optional seeds
-- Safe to run multiple times (IF NOT EXISTS where possible)
-- =============================================

-- 1) Extensions
create extension if not exists "uuid-ossp";
create extension if not exists pgcrypto;

-- 2) Domain tables
create table if not exists public.escolas (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  created_at timestamptz not null default now()
);

-- 3) Core profile (1-to-1 with auth.users)
create table if not exists public.perfis (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  nome text not null,
  tipo text not null check (tipo in ('aluno','professor','responsavel')),
  escola_id uuid references public.escolas(id),
  created_at timestamptz not null default now()
);

comment on table public.perfis is 'Perfil vinculado a auth.users via id = auth.user_id';

-- 4) Role-specific tables
create table if not exists public.alunos (
  id uuid primary key references public.perfis(id) on delete cascade,
  matricula text not null unique,
  serie text,
  turma text,
  created_at timestamptz not null default now()
);

create table if not exists public.professores (
  id uuid primary key references public.perfis(id) on delete cascade,
  matricula text not null unique,
  disciplina_principal text,
  created_at timestamptz not null default now()
);

create table if not exists public.responsaveis (
  id uuid primary key references public.perfis(id) on delete cascade,
  cpf text not null unique,
  estudante_matricula text,
  created_at timestamptz not null default now()
);

-- 5) Academic data (grades)
create table if not exists public.notas (
  id uuid primary key default uuid_generate_v4(),
  aluno_id uuid not null references public.alunos(id) on delete cascade,
  categoria text not null,
  valor text not null,
  criado_por uuid not null references public.professores(id) on delete set null,
  created_at timestamptz not null default now()
);

-- 6) Helpful views
create or replace view public.v_alunos as
select p.id, p.email, p.nome, a.matricula, a.serie, a.turma, p.escola_id
from public.perfis p
join public.alunos a on a.id = p.id;

create or replace view public.v_professores as
select p.id, p.email, p.nome, pr.matricula, pr.disciplina_principal, p.escola_id
from public.perfis p
join public.professores pr on pr.id = p.id;

create or replace view public.v_responsaveis as
select p.id, p.email, p.nome, r.cpf, r.estudante_matricula, p.escola_id
from public.perfis p
join public.responsaveis r on r.id = p.id;

-- 7) Enable RLS
alter table public.perfis enable row level security;
alter table public.alunos enable row level security;
alter table public.professores enable row level security;
alter table public.responsaveis enable row level security;
alter table public.notas enable row level security;

-- 8) RLS policies
-- Read perfis within same escola
drop policy if exists perfis_select_mesma_escola on public.perfis;
create policy perfis_select_mesma_escola
on public.perfis
for select
to authenticated
using (
  exists (
    select 1
    from public.perfis me
    where me.id = auth.uid()
      and (me.escola_id is not distinct from perfis.escola_id)
  )
);

-- Allow users to always read their own perfil (independent of escola)
drop policy if exists perfis_select_self on public.perfis;
create policy perfis_select_self
on public.perfis
for select
to authenticated
using (id = auth.uid());

-- Read role tables within same escola
drop policy if exists alunos_select_mesma_escola on public.alunos;
create policy alunos_select_mesma_escola
on public.alunos
for select
to authenticated
using (
  exists (
    select 1
    from public.perfis me
    join public.perfis aluno_p on aluno_p.id = public.alunos.id
    where me.id = auth.uid()
      and (me.escola_id is not distinct from aluno_p.escola_id)
  )
);

drop policy if exists professores_select_mesma_escola on public.professores;
create policy professores_select_mesma_escola
on public.professores
for select
to authenticated
using (
  exists (
    select 1
    from public.perfis me
    join public.perfis prof_p on prof_p.id = public.professores.id
    where me.id = auth.uid()
      and (me.escola_id is not distinct from prof_p.escola_id)
  )
);

drop policy if exists responsaveis_select_mesma_escola on public.responsaveis;
create policy responsaveis_select_mesma_escola
on public.responsaveis
for select
to authenticated
using (
  exists (
    select 1
    from public.perfis me
    join public.perfis resp_p on resp_p.id = public.responsaveis.id
    where me.id = auth.uid()
      and (me.escola_id is not distinct from resp_p.escola_id)
  )
);

drop policy if exists notas_select_controle on public.notas;
create policy notas_select_controle
on public.notas
for select
to authenticated
using (
  exists (
    select 1 from public.alunos a where a.id = auth.uid() and a.id = notas.aluno_id
  )
  or exists (
    select 1
    from public.professores pr
    join public.perfis me on me.id = pr.id
    join public.perfis aluno_p on aluno_p.id = notas.aluno_id
    where pr.id = auth.uid()
      and (me.escola_id is not distinct from aluno_p.escola_id)
  )
  or exists (
    select 1
    from public.responsaveis r
    join public.alunos a on a.matricula = r.estudante_matricula
    where r.id = auth.uid() and a.id = notas.aluno_id
  )
);

-- perfis: self insert/update
drop policy if exists perfis_insert_self on public.perfis;
create policy perfis_insert_self
on public.perfis
for insert
to authenticated
with check (id = auth.uid());

drop policy if exists perfis_update_self on public.perfis;
create policy perfis_update_self
on public.perfis
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

-- role tables: self insert/update
drop policy if exists alunos_insert_self on public.alunos;
create policy alunos_insert_self
on public.alunos
for insert
to authenticated
with check (id = auth.uid());

drop policy if exists alunos_update_self on public.alunos;
create policy alunos_update_self
on public.alunos
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

drop policy if exists professores_insert_self on public.professores;
create policy professores_insert_self
on public.professores
for insert
to authenticated
with check (id = auth.uid());

drop policy if exists professores_update_self on public.professores;
create policy professores_update_self
on public.professores
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

drop policy if exists responsaveis_insert_self on public.responsaveis;
create policy responsaveis_insert_self
on public.responsaveis
for insert
to authenticated
with check (id = auth.uid());

drop policy if exists responsaveis_update_self on public.responsaveis;
create policy responsaveis_update_self
on public.responsaveis
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

-- notas: only professors of same escola can insert/update
drop policy if exists notas_insert_professor on public.notas;
create policy notas_insert_professor
on public.notas
for insert
to authenticated
with check (
  exists (
    select 1
    from public.professores pr
    join public.perfis prof_p on prof_p.id = pr.id
    join public.perfis aluno_p on aluno_p.id = public.notas.aluno_id
    where pr.id = auth.uid()
      and (prof_p.escola_id is not distinct from aluno_p.escola_id)
  )
);

drop policy if exists notas_update_professor on public.notas;
create policy notas_update_professor
on public.notas
for update
to authenticated
using (
  exists (
    select 1
    from public.professores pr
    join public.perfis prof_p on prof_p.id = pr.id
    join public.perfis aluno_p on aluno_p.id = public.notas.aluno_id
    where pr.id = auth.uid()
      and (prof_p.escola_id is not distinct from aluno_p.escola_id)
  )
)
with check (
  exists (
    select 1
    from public.professores pr
    join public.perfis prof_p on prof_p.id = pr.id
    join public.perfis aluno_p on aluno_p.id = public.notas.aluno_id
    where pr.id = auth.uid()
      and (prof_p.escola_id is not distinct from aluno_p.escola_id)
  )
);

-- 9) Trigger to auto-create perfil/role rows on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
declare
  v_tipo text;
  v_nome text;
  v_escola uuid;
begin
  v_tipo := coalesce(new.raw_user_meta_data->>'tipo', 'aluno');
  v_nome := coalesce(new.raw_user_meta_data->>'nome', split_part(new.email, '@', 1));
  begin
    v_escola := (new.raw_user_meta_data->>'escola_id')::uuid;
  exception when others then
    v_escola := null;
  end;

  insert into public.perfis (id, email, nome, tipo, escola_id)
  values (new.id, new.email, v_nome, v_tipo, v_escola)
  on conflict (id) do nothing;

  if v_tipo = 'aluno' then
    insert into public.alunos (id, matricula) values (new.id, gen_random_uuid()::text) on conflict do nothing;
  elsif v_tipo = 'professor' then
    insert into public.professores (id, matricula) values (new.id, gen_random_uuid()::text) on conflict do nothing;
  elsif v_tipo = 'responsavel' then
    insert into public.responsaveis (id, cpf) values (new.id, ('00000000000')) on conflict do nothing;
  end if;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- 10) Optional Seeds (dev/testing) - comment out in prod
-- insert into public.escolas (nome) values ('Escola JK') on conflict do nothing;
-- with e as (
--   select id from public.escolas where nome = 'Escola JK' limit 1
-- )
-- select * from e;

-- 11) Backfill perfis for existing auth.users (run once if needed)
-- This helps when users were created before the trigger existed
-- Insert missing perfis
insert into public.perfis (id, email, nome, tipo)
select u.id, u.email, split_part(u.email,'@',1), coalesce(u.raw_user_meta_data->>'tipo','aluno')
from auth.users u
left join public.perfis p on p.id = u.id
where p.id is null;



