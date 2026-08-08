import { motion } from "framer-motion";
import { Terminal, Briefcase, ArrowRight, ChevronDown, GitCommitHorizontal, Repeat } from "lucide-react";
import Navbar from "../components/Navbar";
import PixelStars from "../components/PixelStars";
import PixelCloud from "../components/PixelCloud";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";
import JourneyPath from "../components/JourneyPath";
import QuestCard from "../components/QuestCard";
import { journeyMilestones, loopSteps, howItWorks, benefits, stats, faqs } from "../data/landing";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HERO_TRAIL = [
  { label: "Day 01", kind: "day" },
  { label: "Quest", kind: "quest" },
  { label: "Day 10", kind: "day" },
  { label: "Boss", kind: "boss" },
  { label: "Day 30", kind: "day" },
  { label: "Boss", kind: "boss" },
  { label: "Day 60", kind: "day" },
  { label: "Builder", kind: "builder" },
];

const loopIcons = {
  build: GitCommitHorizontal,
  push: Terminal,
  share: Briefcase,
  repeat: Repeat,
};

export default function Landing() {
  return (
    <div id="top" className="min-h-screen bg-[var(--color-midnight)]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]/70">
        {/* sunset atmosphere */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 60% at 50% -10%, rgba(133,119,232,0.22) 0%, rgba(240,120,90,0.10) 38%, rgba(10,15,30,0) 70%)",
          }}
          aria-hidden="true"
        />
        <PixelStars className="h-[70%]" />
        <PixelCloud className="left-[6%] top-[14%]" tone="cream" opacity={0.35} speed="22s" />
        <PixelCloud className="right-[8%] top-[24%]" tone="violet" opacity={0.3} speed="26s" />

        <div className="relative mx-auto max-w-3xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 md:pb-20 md:pt-24">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-[11px] tracking-[0.22em]"
            style={{ fontFamily: "var(--font-pixel)", color: "var(--color-coral)" }}
          >
            60&nbsp;DAY CODING CHALLENGE
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.05 }}
            className="mt-4 text-[2.35rem] leading-[1.08] font-semibold text-[var(--color-cream)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            60 Days.
            <br />
            60 Builds.
            <br />
            <span style={{ color: "var(--color-coral)" }}>One Stronger You.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-slate)] sm:text-lg"
          >
            Turn daily coding into public proof of what you can build — one commit, one post, every single day.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton as="a" href="#start" variant="primary" id="start">
              Start Your Quest
              <ArrowRight size={16} aria-hidden="true" />
            </CTAButton>
            <CTAButton as="a" href="#how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </motion.div>

          {/* compact horizontal trail teaser */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-12 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
          >
            <div className="flex w-max items-center gap-0 sm:w-full sm:justify-between">
              {HERO_TRAIL.map((node, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center gap-2 px-2.5">
                    <span
                      className={`pixel-crisp h-2.5 w-2.5 shrink-0 ${
                        node.kind === "boss" || node.kind === "builder"
                          ? "bg-[var(--color-coral)]"
                          : "bg-[var(--color-teal)]"
                      }`}
                    />
                    <span
                      className="whitespace-nowrap text-[9px] tracking-widest text-[var(--color-slate)]"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >
                      {node.label}
                    </span>
                  </div>
                  {i < HERO_TRAIL.length - 1 && (
                    <span
                      className="h-[2px] w-6 sm:w-full"
                      style={{
                        background:
                          "repeating-linear-gradient(to right, var(--color-border) 0, var(--color-border) 4px, transparent 4px, transparent 8px)",
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <a
          href="#what-is-abtalks"
          className="relative mx-auto mb-6 flex w-fit items-center gap-1 text-xs text-[var(--color-slate-dim)] transition-colors hover:text-[var(--color-teal)]"
          aria-label="Scroll to learn what ABTalks is"
        >
          <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* ================= WHAT IS ABTALKS ================= */}
      <section id="what-is-abtalks" className="border-b border-[var(--color-border)]/70 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What is ABTalks?"
            title="Not another coding course."
            subtitle="ABTalks is a 60-day build challenge designed to help students turn consistency into visible proof of work."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {loopSteps.map((step, i) => {
              const Icon = loopIcons[step.key];
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-3 border border-[var(--color-border)] bg-[var(--color-panel)]/50 px-3 py-6 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] bg-[var(--color-midnight-soft)]">
                    <Icon size={18} color="var(--color-teal)" aria-hidden="true" />
                  </span>
                  <span
                    className="text-xs font-semibold tracking-wide text-[var(--color-cream)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </span>
                  <span className="text-[11px] leading-snug text-[var(--color-slate)]">{step.desc}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-[var(--color-slate-dim)]">
            <div className="flex items-center gap-1.5 text-xs">
              <Terminal size={14} aria-hidden="true" /> GitHub commit
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <Briefcase size={14} aria-hidden="true" /> LinkedIn post
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW THE QUEST WORKS ================= */}
      <section id="how-it-works" className="border-b border-[var(--color-border)]/70 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The process" title="How the quest works" />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {howItWorks.map((card, i) => (
              <motion.div
                key={card.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <QuestCard n={card.n} title={card.title} desc={card.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 60 DAY JOURNEY ================= */}
      <section className="border-b border-[var(--color-border)]/70 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="The 60-day journey"
            title="From empty canvas to 60 days of proof."
            subtitle="Every milestone marks a real shift in how the challenge feels — and how your public log looks to someone scrolling through it."
          />
          <div className="mt-10">
            <JourneyPath milestones={journeyMilestones} />
          </div>
        </div>
      </section>

      {/* ================= WHY COMPLETE 60 DAYS ================= */}
      <section className="border-b border-[var(--color-border)]/70 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Why finish" title="Why complete 60 days?" />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-[var(--color-border)] bg-[var(--color-panel)]/50 p-5"
              >
                <h3
                  className="text-base font-semibold text-[var(--color-teal)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[var(--color-border)]/70 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-2xl font-semibold text-[var(--color-cream)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-1 text-[10px] tracking-[0.18em] text-[var(--color-slate-dim)]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  {s.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-b border-[var(--color-border)]/70 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Before you start" title="Good to know" />
          <div className="mt-8 divide-y divide-[var(--color-border)]/70 border-y border-[var(--color-border)]/70">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[var(--color-cream)] sm:text-base">
                  {f.q}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-[var(--color-slate)] transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 50% 110%, rgba(240,120,90,0.16) 0%, rgba(133,119,232,0.10) 45%, rgba(10,15,30,0) 75%)",
          }}
          aria-hidden="true"
        />
        <PixelStars className="h-full" />
        {/* small pixel campfire */}
        <div className="pixel-crisp relative mx-auto mb-6 h-8 w-6" aria-hidden="true">
          <span className="absolute bottom-0 left-1/2 h-3 w-1 -translate-x-1/2 bg-[var(--color-coral)]" />
          <span className="absolute bottom-2 left-1/2 h-3 w-1.5 -translate-x-1/2 bg-[var(--color-coral)] opacity-80" />
          <span className="absolute bottom-4 left-1/2 h-2.5 w-1 -translate-x-1/2 bg-[var(--color-cream)] opacity-70" />
        </div>

        <div className="relative mx-auto max-w-md text-center">
          <h2
            className="text-2xl font-semibold text-[var(--color-cream)] sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your first quest is waiting.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)] sm:text-base">
            60 days from now, you'll wish you had started today.
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton as="a" href="#top" variant="primary">
              Start Your Quest
              <ArrowRight size={16} aria-hidden="true" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[var(--color-border)]/70 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <span
            className="text-sm font-semibold text-[var(--color-cream)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AB<span style={{ color: "var(--color-coral)" }}>Talks</span>
          </span>
          <p className="text-xs text-[var(--color-slate-dim)]">
            Built for students who'd rather ship than scroll.
          </p>
        </div>
      </footer>
    </div>
  );
}
