# Have You Eaten

Your Campus. Your Food. Delivered. Food ordering for Nigerian university campuses (launching at UNN).

## Stage 1 setup

### 1. Install
```bash
npm install
cp .env.example .env.local
```

### 2. Create the Supabase project
1. supabase.com > New project. Save the database password.
2. Project Settings > API: copy **Project URL**, **anon key** and **service_role key** into `.env.local`.
   The service_role key is a secret. It must never start with `NEXT_PUBLIC_`.
3. SQL Editor: run these files **in order**, each as a new query:
   `supabase/migrations/0001_schema.sql`, then `0002_rls_and_guards.sql`, then `0003_seed.sql`.
   (Or with the Supabase CLI: `supabase link` then `supabase db push`.)
4. Authentication > Providers: keep Email enabled. For development you may turn off "Confirm email".
5. Authentication > URL Configuration: Site URL `http://localhost:3000`; add your Vercel URL later.

### 3. Run
```bash
npm run dev
```
Open http://localhost:3000 for the landing page and http://localhost:3000/api/health.
You should see `{"ok":true,"universities":1}`.

### 4. Make yourself admin (after Stage 3 sign-up exists)
Sign up, then in the SQL Editor run the `update ... set role = 'admin'` line at the bottom of `0003_seed.sql` with your email.

## Credentials needed later
| Needed from | Stage | Variable |
|---|---|---|
| Paystack (test keys are free) | 7 | `PAYSTACK_SECRET_KEY` |
| Flutterwave (optional) | 7 | `FLUTTERWAVE_SECRET_KEY`, `FLUTTERWAVE_WEBHOOK_HASH` |
| Vercel project env vars | 12 | all of `.env.example` |
