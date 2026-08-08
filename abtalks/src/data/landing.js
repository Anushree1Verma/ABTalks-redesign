// Mock/static content for the ABTalks landing page.
// No backend — this is the single source of copy + structured content.

export const journeyMilestones = [
  { day: 1, label: "Start", tag: "DAY 01", desc: "Pick a track, ship your first commit." },
  { day: 10, label: "First Boss", tag: "DAY 10", desc: "Your habit gets tested. Most quit here." },
  { day: 25, label: "Builder", tag: "DAY 25", desc: "The streak becomes muscle memory." },
  { day: 40, label: "Momentum", tag: "DAY 40", desc: "Recruiters start noticing the pattern." },
  { day: 60, label: "Ship It", tag: "DAY 60", desc: "60 public builds. Undeniable proof." },
];

export const loopSteps = [
  { key: "build", title: "Build", desc: "Ship a small, real piece of your track's project." },
  { key: "push", title: "Push", desc: "Commit it to GitHub. Public, timestamped, real." },
  { key: "share", title: "Share", desc: "Post what you learned on LinkedIn." },
  { key: "repeat", title: "Repeat", desc: "Same time tomorrow. The streak compounds." },
];

export const howItWorks = [
  {
    n: "01",
    title: "Choose your track",
    desc: "Web dev, DSA, ML, or open source — pick the path that matches where you want to be in 60 days.",
  },
  {
    n: "02",
    title: "Build every day",
    desc: "One focused task a day. Small enough to finish after class, real enough to matter.",
  },
  {
    n: "03",
    title: "Prove your work",
    desc: "Submit a GitHub commit and a LinkedIn post. No screenshots, no honor system.",
  },
  {
    n: "04",
    title: "Build your portfolio",
    desc: "60 days later, you have a public trail of work a recruiter can actually scroll through.",
  },
];

export const benefits = [
  {
    key: "consistency",
    title: "Consistency",
    desc: "You stop planning to code someday and start shipping something every day. The habit outlasts the challenge.",
  },
  {
    key: "proof",
    title: "Proof of work",
    desc: "Not a certificate. A public log of 60 things you actually built, dated and verifiable.",
  },
  {
    key: "visibility",
    title: "Visibility",
    desc: "Your progress shows up where recruiters already look — GitHub activity and LinkedIn, in public.",
  },
];

export const stats = [
  { value: "60", label: "Days" },
  { value: "4", label: "Tracks" },
  { value: "2", label: "Proofs / day" },
];

export const faqs = [
  {
    q: "What if I miss a day?",
    a: "Your streak resets, not your progress. Every day you've already shipped stays on your public log — you just start a new streak the next day.",
  },
  {
    q: "How much time does this take daily?",
    a: "Most students spend 45–90 minutes a day. Tasks are scoped to be realistic after a full day of college.",
  },
  {
    q: "Do I need to be good at coding already?",
    a: "No. Tracks start from fundamentals. What matters is showing up daily, not showing up perfect.",
  },
  {
    q: "Is this free?",
    a: "Yes. ABTalks is free for students. All you spend is the time to build and share.",
  },
];
