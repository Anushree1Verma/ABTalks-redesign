# ABTalks — Quest (redesign, Phase 1)

A mobile-first redesign of ABTalks' landing experience: "Duolingo-level gamification +
modern SaaS + subtle pixel/RPG accents," aimed at Indian college students doing a
60-day daily coding + LinkedIn challenge.

**This phase ships only the landing page (`/`).** `/dashboard` and `/day/12` are
intentionally not built yet — we're working phase by phase.

## Route map

```text
/
```

(`/dashboard` and `/day/12` will be added in later phases.)

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build
npm run preview   # serves the production build
```

## Stack

React 19 + Vite + Tailwind CSS v4 + React Router + Lucide React + Framer Motion.
No backend, no auth, no database — this phase is pure UI.

## Design direction

- **Concept:** "ABTalks Quest" — the 60-day challenge framed as a journey (Day 1 →
  milestones → Day 60), not a childish game. ~90% modern product UI, ~10% pixel/RPG accents.
- **Palette:** deep midnight navy background, muted violet, warm coral, soft cream text,
  and an electric teal accent (a "terminal" note that keeps this from reading as a generic
  purple/orange gaming palette).
- **Type:** Space Grotesk for display/headings, Inter for body copy, Silkscreen (used
  sparingly) for pixel-style eyebrow labels and milestone tags.
- **Signature element:** the "Quest Path" — a dashed pixel trail with clipped-corner
  milestone badges, appearing as a compact horizontal teaser in the hero and as the full
  vertical trail in the "60-Day Journey" section.
- All pixel motifs (stars, clouds, trail, badges) are hand-built with CSS/SVG — no image
  assets, so the build stays light and deploys reliably.

## Structure

```text
src/
  components/   Navbar, PixelStars, PixelCloud, JourneyPath, QuestCard, SectionHeading, CTAButton
  pages/        Landing.jsx
  data/         landing.js (mock copy/content, no backend)
  App.jsx       routes ("/" only, this phase)
```
