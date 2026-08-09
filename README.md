# ABTalks Quest — Redesign

A mobile-first redesign of the ABTalks 60-day coding challenge platform.  
Concept: *Retro-futuristic pixel adventure × modern product design × career/coding culture.*

## Route map

```text
/
/dashboard
/day/12
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173/
```

## Build

```bash
npm run build
npm run preview
```

## Stack

React 19 + Vite 8 + Tailwind CSS v4 + React Router v7 + Lucide React + Framer Motion.  
No backend, no auth, no database — mocked data only.

## Design decisions

**Color:** Each section has its own ambient background zone (deep-purple hero, forest-teal "What is", cosmos journey, ember "Why finish", violet-coral final CTA) — not one flat navy background throughout.

**Signature:** The Quest Path — a pixel-dotted trail with clipped-corner checkpoint badges. Appears compact/horizontal in the hero, full/vertical with spring-animated reveals in the Journey section.

**Typography:** Space Grotesk (bold display) + Inter (readable body, ~16–18px) + Silkscreen only for 10–11px eyebrow/pixel labels.

**Animation:** Twinkling stars, drifting clouds, parallax hero scroll, spring checkpoint pops, XP bar fill, shimmer headline, particle burst on CTA click, RAF-based custom pixel cursor (desktop only).

**Edge cases handled:**
- Missed day (Day 5) shows warning banner on dashboard; streak reset message.
- Empty avatar → pixel-art initials fallback (PixelAvatar).
- Day 13 locked → padlock icon + disabled nav.
- Submit button disabled until both URLs are entered.

## File structure

```text
src/
  components/
    CTAButton.jsx        — pixel-clipped button with particle burst
    CustomCursor.jsx     — RAF pixel cursor + trail (desktop only)
    JourneyPath.jsx      — animated vertical checkpoint trail
    Navbar.jsx           — sticky nav with pixel logo
    PixelAvatar.jsx      — initials fallback for empty profiles
    PixelCharacter.jsx   — 12×16 pixel developer avatar
    PixelCloud.jsx       — drifting pixel SVG cloud
    PixelMountains.jsx   — hero background silhouette
    PixelStars.jsx       — twinkling star field
    QuestCard.jsx        — terminal-style quest card
    SectionHeading.jsx   — eyebrow + large heading
    StreakCalendar.jsx   — 12-cell heatmap calendar
    XPBar.jsx            — animated RPG-style XP gauge
  pages/
    Landing.jsx          — / (hero + all sections)
    Dashboard.jsx        — /dashboard
    ChallengeDay.jsx     — /day/12
  data/
    landing.js           — landing page copy & content
    mockUser.js          — mocked student, days, day-12 task
  App.jsx
  main.jsx
  index.css              — Tailwind v4 theme tokens + keyframes
```

No external image assets — all pixel art is CSS/SVG.
