# AGENTS.md — next-portfolio

## What the project is

Personal portfolio of Marta Kočmídová — a single-page Next.js app with Hero, About, Projects, and Contact sections. Supports Czech and English.

## Tech stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS (config in `tailwind.config.ts`)
- next-intl — i18n (translations in `translations/cs.json` and `translations/en.json`)
- framer-motion — animations
- react-ga4 — Google Analytics
- @heroicons/react — icons

## Key commands

```bash
npm run dev       # dev server (http://localhost:3000)
npm run build     # production build
npm run lint      # currently broken: package script uses removed `next lint` in Next.js 16
```

> No tests are configured.

## How to verify work

1. `npm run build` — validates TypeScript and production build
2. `npx tsc --noEmit` — fast TypeScript check for content/component edits
3. `npm run dev` + visual check in browser for UI changes
4. `npm run lint` only after the lint script is migrated from `next lint` to ESLint CLI config

## Key rules

- Text belongs in `translations/cs.json` and `translations/en.json` — never hardcode strings in components
- Colors are centralized in `tailwind.config.ts` — don't use arbitrary hex values outside the config
- Prefer static CSS/SVG solutions over JS-based dynamic generation (see HexBackground)
- New content (projects, skills) belongs in translation files, not in code
- Components live in `src/components/`, pages in `src/app/`

## Current content structure

- About section uses translated paragraph arrays and a single skills/tag block; education and certificates tabs were removed.
- Project cards support short translated highlights and open a case study modal with longer translated content.
- Case study modal copy, labels, metadata, and tech stack content live in translations.
- SEO metadata and social preview image are configured in `src/app/layout.tsx`; OG image is served from `public/og-image.png`.

## Git workflow

- Branches: `feature/name`, `fix/name`, `chore/name`
- Commit format: `type: short description` (e.g. `feat: add dark mode toggle`)
- **Never commit directly to `main`** without approval

## Do NOT do without approval

- Install npm packages
- Commit or push changes
- Modify `.env` or add new env variables
- Deploy to Vercel or anywhere else
- Delete files from `public/` (CV, icons)

## Project documentation

| File                                                         | Contents                                            |
| ------------------------------------------------------------ | --------------------------------------------------- |
| [agent_docs/architecture.md](agent_docs/architecture.md)     | Project structure, components, data flow            |
| [agent_docs/conventions.md](agent_docs/conventions.md)       | Coding conventions and patterns used in the project |
| [agent_docs/project-status.md](agent_docs/project-status.md) | What's done, what's missing, next steps             |
