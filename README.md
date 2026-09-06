# EstudaFarma V6 — SES-RJ / IBDO

A V6 mantém tudo da V5 e adiciona **conta, backup e sincronização opcional entre dispositivos usando Supabase**.

## Publicação no GitHub Pages
O projeto continua configurado para `base: '/trueconcursos/'`.

**Importante:** se o seu `deploy.yml` atual já funciona, preserve o arquivo que está no repositório e substitua os demais arquivos pela V6.

## Modo local
Sem nenhuma configuração extra, o aplicativo continua funcionando e grava o progresso no navegador (`localStorage`).

A área **Conta & Nuvem** permite exportar/importar um backup `.json` mesmo sem Supabase.

## Ativar login e sincronização com Supabase
1. Crie um projeto gratuito em Supabase.
2. No SQL Editor, execute o conteúdo de `supabase_schema.sql`.
3. Em Project Settings > API, copie:
   - Project URL
   - anon/public key
4. No GitHub do repositório `trueconcursos`, abra **Settings > Secrets and variables > Actions** e crie:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. No seu `deploy.yml`, no passo `Build`, use as variáveis:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
    VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

6. Faça novo deploy.

A chave `anon` do Supabase é própria para uso no cliente. A proteção dos dados é feita pelas políticas RLS incluídas no `supabase_schema.sql`: cada usuário só pode ler e alterar a própria linha.

## Segurança e conflito entre dispositivos
Na primeira sincronização, use os botões **Enviar para nuvem** ou **Baixar da nuvem** para escolher qual cópia deve prevalecer. Só depois habilite **Sincronização automática**.

## Banco atual
- 180 questões locais
- aulas por tópico
- treino adaptativo
- simulados
- flashcards
- caderno de erros
- histórico e mapa de domínio
- backup JSON
- login e sincronização opcional
