# Base Mini-App Template

Generic starter template for building a Base/Farcaster mini-app with Next.js.

## What this template includes
- Farcaster Mini App SDK initialization (`sdk.actions.ready()`)
- `fc:miniapp` + `base:app_id` metadata wiring
- `miniapp.config.ts` scaffold with env-driven values
- Basic webhook API route (`app/api/webhook/route.ts`)
- Minimal starter UI that displays mini-app context/user info

## Quick start
1. Install dependencies: `npm install`
2. Create `.env.local` from `.env.example`
3. Fill your Farcaster account association values and `NEXT_PUBLIC_BASE_APP_ID`
4. Run: `npm run dev`

## Files to customize first
- `miniapp.config.ts`
- `app/layout.tsx`
- `app/page.tsx`
