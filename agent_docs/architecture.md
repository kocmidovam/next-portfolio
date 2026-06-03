# Architecture — next-portfolio

## Project structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, NextIntlClientProvider, GoogleAnalytics
    page.tsx            # Single page — composes all sections
    api/send/route.js   # API route for sending emails via Resend
  components/
    Navbar.tsx          # Navigation with LanguageSwitcher
    Navlink.tsx         # Single navigation link
    LanguageSwitcher.tsx # CS/EN switcher (stores locale in cookie)
    Hero.tsx            # Intro section with photo, CTA buttons and CV download
    About.tsx           # About me — translated paragraphs and skills tag block
    TabButton.tsx       # Legacy tab button component, currently unused
    Projects.tsx        # Project grid with tag-based filtering
    ProjectCard.tsx     # Single project card and case study trigger
    CaseStudyModal.tsx  # Case study dialog content and modal behavior
    ProjectTag.tsx      # Tag for filtering projects
    Email.tsx           # Contact form (calls /api/send)
    Footer.tsx          # Footer with social links
    HexBackground.tsx   # Decorative background — static SVG data URI, no JS runtime
    Analytics.tsx       # Google Analytics 4 initialization
  globals.css           # Global styles
  gtagHelper.tsx        # Helper for GA events
  i18n/request.ts       # next-intl config — locale from cookie
  types/index.ts        # Shared TypeScript types

translations/
  cs.json               # Czech translations
  en.json               # English translations

public/
  images/               # Project covers + profile/about images
  og-image.png          # OpenGraph/Twitter social preview image
  CV-Kočmídová-CZ.pdf   # Downloadable Czech CV
  CV-Kocmidova-EN.pdf   # Downloadable English CV
  github-icon.svg
  linkedin-icon.svg
```

## How parts communicate

- **i18n**: Locale is read from the `locale` cookie. The server (`layout.tsx`) loads the correct translations and passes them to `NextIntlClientProvider`. Client components call `useTranslations()`.
- **Language switching**: `LanguageSwitcher` writes the cookie and refreshes the page — no client-side routing.
- **Projects content**: `Projects.tsx` reads project metadata from local config and translated content from `translations/*.json`. `ProjectCard.tsx` renders short highlights on cards and longer case studies inside a modal.
- **Contact form**: `Email.tsx` (client) → `POST /api/send` → Resend API → email to kocmidova.marta@gmail.com
- **Analytics**: `Analytics.tsx` initializes GA4 in `<head>`, `gtagHelper.tsx` exports helper functions for events.
- **SEO/social metadata**: `layout.tsx` defines metadata, OpenGraph and Twitter cards. Social preview image is `/og-image.png` from `public/`.

## Fonts (next/font/google)

Loaded in `layout.tsx` as CSS variables:

- `--font-syne` → body text (`font-sans`)
- `--font-space-mono` → `font-mono`
- `--font-exo2` → headings (`font-exo2`)
- `--font-jura` → `font-jura`

## Tailwind config

Colors are centralized in `tailwind.config.ts`. Semantic tokens in use: `brand`, `foreground`, `background`, `subtle`, `subtle-dim`.
