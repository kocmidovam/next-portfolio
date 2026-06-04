# Conventions — next-portfolio

## Components

- All components in `src/components/`, files PascalCase
- Client components have `"use client"` directive on the first line
- Return type: `ReactNode` (either `React.ReactNode` with import, or `import { ReactNode }`)
- Named exports preferred for utilities, default exports for components

## Translations

- No hardcoded text in components — always use `useTranslations("SectionName")`
- Keys in translation files mirror section structure (e.g. `Hero.tag`, `About.title`)
- Both files (`cs.json` and `en.json`) must always stay in sync
- Project card highlights, tech stacks, case study labels and case study copy live in translation files
- Czech project copy should avoid awkward Czech/English hybrids unless the English term is a product or technology name

## Styles

- Tailwind utility classes — no inline styles except for dynamic values (`style={{ ... }}`)
- Colors exclusively via semantic tokens from `tailwind.config.ts` (`text-brand`, `bg-background`...)
- Breakpoints: `md:` for tablet, `lg:` for desktop, `2xl:` for large screens
- Clamp for responsive typography: `text-[clamp(42px,4.5vw,85px)]`

## Decorative / visual components

- Prefer static CSS or SVG data URI solutions over JS-based generation
- Example: `HexBackground` builds the SVG tile as a string constant, not at runtime

## Animations

- framer-motion for UI animations
- Simple hover/transition effects directly in Tailwind (`transition-opacity`, `hover:opacity-90`)

## TypeScript

- Shared types in `src/types/index.ts`
- Prefer `interface` for props, `type` for unions and utility types

## Verification

- Use `npm run build` for full production verification
- Use `npx tsc --noEmit` for fast checks after content/component edits
- `npm run lint` currently needs migration because the script still calls removed `next lint` in Next.js 16
