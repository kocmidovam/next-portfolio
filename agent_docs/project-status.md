# Project Status — next-portfolio

Last updated: 2026-06-03

## Done

- [x] Base project setup (Next.js 16, TypeScript, Tailwind)
- [x] Sections: Hero, About, Projects, Email/Contact, Footer
- [x] i18n (CS/EN) via next-intl with cookie-based switching
- [x] Contact form connected to Resend
- [x] Google Analytics 4
- [x] Decorative HexBackground (static SVG, no JS runtime)
- [x] Hero redesign (profile photo, CTA buttons, CV download)
- [x] About rewrite with translated paragraph copy and skills tag block
- [x] Work project cards with concise highlights
- [x] Case study modal for project details
- [x] Work project case studies for Prospector, Case Management Platform, Sherwood Digital, Socialbakers Website and Socialbakers Careers
- [x] SEO metadata with OpenGraph/Twitter social preview image
- [x] Centralized colors in tailwind.config.ts

## Known issues / possible improvements

- `npm run lint` is currently broken because the package script still uses removed `next lint` in Next.js 16; migrate to ESLint CLI config
- No tests (unit or e2e)
- `src/app/api/send/route.js` is `.js` while the rest of the project is TypeScript
- `TabButton.tsx` is currently unused after removing About tabs

## Next steps (unconfirmed)

- Add `robots.ts`, `sitemap.ts`, canonical URL and optional JSON-LD structured data for SEO
- Decide whether to remove unused `TabButton.tsx`
- Consider migrating `src/app/api/send/route.js` to TypeScript
