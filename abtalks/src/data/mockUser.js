// Complete mock data — all three routes pull from here.
// Simulates a real mid-challenge student (day 12, active streak).

export const mockUser = {
  name: "Priya Sharma",
  handle: "priyacodes",
  avatar: null, // intentionally empty — we show pixel initials fallback
  college: "BITS Pilani",
  track: "Web Development",
  trackShort: "Web Dev",
  joined: "2025-07-28",
  daysCurrent: 12,
  streakCurrent: 7,    // current streak (restarted after a miss)
  streakBest: 10,
  totalDays: 60,
  missedDays: [5],     // day 5 was missed — edge case handled
  xp: 1240,
  rank: 38,
  totalStudents: 214,
  badges: [
    { id: "first_ship", label: "First Ship",   icon: "🚀", desc: "Submitted day 1", earned: true  },
    { id: "week_one",   label: "Week 1",        icon: "⚡", desc: "7-day streak",    earned: true  },
    { id: "debugger",   label: "Debugger",      icon: "🐛", desc: "Fixed 5 errors",  earned: true  },
    { id: "tenacity",   label: "Tenacity",      icon: "🔥", desc: "10-day streak",   earned: false },
    { id: "half_way",   label: "Halfway",       icon: "🏁", desc: "Day 30",          earned: false },
    { id: "builder",    label: "Builder",       icon: "🏆", desc: "Day 60",          earned: false },
  ],
};

export const mockDays = [
  { day: 1,  title: "Hello, World 2.0",            status: "submitted", xp: 80  },
  { day: 2,  title: "CSS Grid Gallery",            status: "submitted", xp: 90  },
  { day: 3,  title: "Dark Mode Toggle",            status: "submitted", xp: 100 },
  { day: 4,  title: "Responsive Navbar",           status: "submitted", xp: 95  },
  { day: 5,  title: "Animated Card Hover",         status: "missed",    xp: 0   },
  { day: 6,  title: "Form Validation",             status: "submitted", xp: 85  },
  { day: 7,  title: "Custom Scroll Progress",      status: "submitted", xp: 100 },
  { day: 8,  title: "Theme Switcher",              status: "submitted", xp: 110 },
  { day: 9,  title: "Pixel Clock",                 status: "submitted", xp: 120 },
  { day: 10, title: "Parallax Section — BOSS DAY", status: "submitted", xp: 200 },
  { day: 11, title: "Skeleton Loader UI",          status: "submitted", xp: 100 },
  { day: 12, title: "Glassmorphism Card Stack",    status: "pending",   xp: 0   },
  // future days — status: "locked"
  ...Array.from({ length: 48 }, (_, i) => ({
    day: i + 13,
    title: "Locked",
    status: "locked",
    xp: 0,
  })),
];

export const mockDay12 = {
  day: 12,
  track: "Web Development",
  title: "Glassmorphism Card Stack",
  difficulty: "Medium",
  xp: 120,
  estimatedTime: "60–90 min",
  objective:
    "Build a layered card stack component using glassmorphism — frosted glass backgrounds, subtle borders, and depth shadows — and animate the top card sliding away on click to reveal the next one.",
  whyItMatters:
    "Glassmorphism is everywhere in modern UI. Building it from scratch forces you to understand backdrop-filter, rgba(), and z-index stacking — three things that trip up juniors in interviews.",
  deliverables: [
    "A card stack with at least 3 cards",
    "Frosted glass effect on each card (backdrop-filter + rgba)",
    "Click/tap interaction to dismiss the top card",
    "Smooth CSS or JS transition on dismiss",
    "Looks good on mobile (390px) without horizontal overflow",
  ],
  hints: [
    "backdrop-filter: blur(12px) with a rgba background is the core of glassmorphism.",
    "Use z-index + transform: scale() to create the stacked depth illusion.",
    "Test on a colorful background — glassmorphism only reads well against gradient/image backgrounds.",
  ],
  resources: [
    { label: "MDN: backdrop-filter", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter" },
    { label: "CSS Tricks: Glassmorphism",  url: "https://css-tricks.com/glassmorphism-and-the-problem-it-solves-for-design/" },
  ],
  bossDay: false,
  prevDay: { day: 11, title: "Skeleton Loader UI",    status: "submitted" },
  nextDay: { day: 13, title: "Infinite Scroll Feed",  status: "locked"    },
  submission: {
    github: "",
    linkedin: "",
  },
};
