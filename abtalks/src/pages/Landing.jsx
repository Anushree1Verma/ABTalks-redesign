import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ChevronDown, GitCommitHorizontal, Terminal,
  Share2, Repeat, Zap, Shield, Eye, CheckCircle, ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import PixelStars from "../components/PixelStars";
import PixelCloud from "../components/PixelCloud";
import PixelMountains from "../components/PixelMountains";
import PixelCharacter from "../components/PixelCharacter";
import CustomCursor from "../components/CustomCursor";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";
import JourneyPath from "../components/JourneyPath";
import { journeyMilestones, loopSteps, howItWorks, benefits, stats, faqs } from "../data/landing";

/* ─── Hero quest path nodes ─── */
const QUEST_NODES = [
  { label: "START",    day: "01", color: "#40dfc6", glowColor: "#40dfc660", kind: "start" },
  { label: "QUEST",    day: "—",  color: "#8e7ff5", glowColor: "#8e7ff560", kind: "quest" },
  { label: "BOSS",     day: "10", color: "#f07850", glowColor: "#f0785060", kind: "boss" },
  { label: "BUILDER",  day: "30", color: "#8e7ff5", glowColor: "#8e7ff560", kind: "quest" },
  { label: "BOSS",     day: "40", color: "#f07850", glowColor: "#f0785060", kind: "boss" },
  { label: "SHIP IT",  day: "60", color: "#ffb340", glowColor: "#ffb34060", kind: "final" },
];

const loopIcons = {
  build: GitCommitHorizontal,
  push: Terminal,
  share: Share2,
  repeat: Repeat,
};

const loopColors = {
  build: { color: "#40dfc6", bg: "rgba(64,223,198,0.10)", border: "rgba(64,223,198,0.3)" },
  push: { color: "#8e7ff5", bg: "rgba(142,127,245,0.10)", border: "rgba(142,127,245,0.3)" },
  share: { color: "#f07850", bg: "rgba(240,120,80,0.10)", border: "rgba(240,120,80,0.3)" },
  repeat: { color: "#ffb340", bg: "rgba(255,179,64,0.10)", border: "rgba(255,179,64,0.3)" },
};

/* ─── Scroll reveal variant ─── */
const scrollReveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Pixel diagonal divider ─── */
function PixelDivider({ flip = false }) {
  return (
    <div
      className="pointer-events-none h-[32px] w-full overflow-hidden"
      aria-hidden="true"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <svg viewBox="0 0 390 32" preserveAspectRatio="none" width="100%" height="32" className="pixel-crisp">
        <polygon points="0,32 390,0 390,32" fill="rgba(14,8,26,0.9)" />
        <polygon points="0,32 390,4 390,32" fill="rgba(24,14,50,0.5)" />
      </svg>
    </div>
  );
}

/* ─── Terminal-style block ─── */
function TerminalCard({ title, content, color = "#40dfc6" }) {
  return (
    <div
      className="overflow-hidden rounded-none border"
      style={{
        background: "rgba(10,6,20,0.85)",
        borderColor: `${color}40`,
        boxShadow: `0 0 24px ${color}18, inset 0 1px 0 ${color}25`,
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 border-b px-4 py-2"
        style={{ borderColor: `${color}30`, background: `${color}12` }}
      >
        <span className="pixel-crisp h-2 w-2" style={{ background: "#f07850" }} />
        <span className="pixel-crisp h-2 w-2" style={{ background: "#ffb340" }} />
        <span className="pixel-crisp h-2 w-2" style={{ background: "#40dfc6" }} />
        <span className="ml-2 text-[11px] tracking-widest" style={{ fontFamily: "var(--font-pixel)", color }}>
          {title}
        </span>
      </div>
      <div className="px-4 py-4 text-base leading-relaxed text-[var(--color-cream-dim)]">
        {content}
      </div>
    </div>
  );
}

/* ─── Benefit badge ─── */
function BenefitBadge({ icon: Icon, title, desc, color, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={scrollReveal}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col gap-4"
    >
      <div
        className="flex h-14 w-14 items-center justify-center border"
        style={{
          background: `${color}14`,
          borderColor: `${color}45`,
          boxShadow: `0 0 20px ${color}28`,
          clipPath: "polygon(0 8px,8px 8px,8px 0,calc(100%-8px) 0,calc(100%-8px) 8px,100% 8px,100% calc(100%-8px),calc(100%-8px) calc(100%-8px),calc(100%-8px) 100%,8px 100%,8px calc(100%-8px),0 calc(100%-8px))",
        }}
      >
        <Icon size={22} color={color} aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-[var(--color-slate)]">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Pixel fire icon for final CTA ─── */
function PixelFire() {
  return (
    <svg
      className="pixel-crisp mx-auto mb-6"
      style={{ animation: "float-y 2s ease-in-out infinite" }}
      width="40"
      height="48"
      viewBox="0 0 10 12"
      aria-hidden="true"
    >
      <rect x="4" y="0"  width="2" height="2" fill="#ffb340" />
      <rect x="3" y="1"  width="4" height="2" fill="#ffb340" />
      <rect x="2" y="2"  width="6" height="2" fill="#f07850" />
      <rect x="1" y="4"  width="8" height="2" fill="#f07850" />
      <rect x="1" y="6"  width="8" height="3" fill="#e04020" />
      <rect x="2" y="9"  width="6" height="2" fill="#c02810" />
      <rect x="3" y="11" width="4" height="1" fill="#901808" />
      {/* Inner flame */}
      <rect x="4" y="3"  width="2" height="2" fill="#fff080" />
      <rect x="3" y="4"  width="4" height="2" fill="#ffdb60" />
    </svg>
  );
}

/* ════════════════════════════════════════
   MAIN LANDING COMPONENT
════════════════════════════════════════ */
export default function Landing() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div id="top" className="min-h-screen" style={{ background: "var(--color-hero-bg)" }}>
      <CustomCursor />
      <Navbar />

      {/* ════════ HERO ════════ */}
      <section
        ref={heroRef}
        className="hero-bg relative overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        <PixelStars />

        {/* Clouds — multiple layers */}
        <motion.div style={{ y: parallaxY }} className="pointer-events-none">
          <PixelCloud className="left-[3%] top-[18%]" tone="cream" opacity={0.45} speed="24s" />
          <PixelCloud className="right-[5%] top-[12%]" tone="violet" opacity={0.40} speed="28s" dir="l" />
          <PixelCloud className="left-[40%] top-[8%]" tone="coral" opacity={0.25} speed="20s" scale={0.7} />
          <PixelCloud className="right-[30%] top-[25%]" tone="cream" opacity={0.30} speed="32s" dir="l" scale={0.65} />
        </motion.div>

        {/* Mountains — bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0">
          <PixelMountains className="opacity-80" />
        </div>

        {/* Subtle color halo */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 80% 70%, rgba(240,100,60,0.12) 0%, transparent 60%), " +
              "radial-gradient(ellipse 50% 30% at 20% 60%, rgba(100,80,220,0.10) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col px-4 pb-28 pt-14 sm:px-6 sm:pt-20 md:pt-28">
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.28em]"
            style={{ fontFamily: "var(--font-pixel)", color: "var(--color-coral-bright)" }}
          >
            ⚡ 60 DAY CODING CHALLENGE
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-sm text-[3rem] font-bold leading-[1.02] sm:max-w-xl sm:text-[3.8rem] md:text-[4.8rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            60 Days.
            <br />
            60 Builds.
            <br />
            <span className="shimmer-text">One Stronger You.</span>
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-cream-dim)] sm:text-xl"
          >
            Turn daily coding into public proof of what you can build — one commit, one post, every single day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton as="a" href="#start" variant="primary" id="start">
              Start Your Quest
              <ArrowRight size={18} aria-hidden="true" />
            </CTAButton>
            <CTAButton as="a" href="#how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </motion.div>

          {/* Pixel character + Quest path */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-14"
          >
            {/* Quest path track */}
            <div
              className="relative overflow-x-auto rounded-none border py-5 px-3"
              style={{
                background: "rgba(14,8,32,0.65)",
                borderColor: "rgba(90,70,160,0.45)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p
                className="mb-4 text-center text-[10px] tracking-[0.25em]"
                style={{ fontFamily: "var(--font-pixel)", color: "var(--color-slate)" }}
              >
                YOUR JOURNEY
              </p>
              {/* Character at left */}
              <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 sm:block">
                <PixelCharacter />
              </div>

              <div className="flex min-w-max items-center gap-0 sm:min-w-0 sm:justify-around">
                {QUEST_NODES.map((node, i) => (
                  <div key={i} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.38 + i * 0.09, type: "spring", stiffness: 200 }}
                      className="flex flex-col items-center gap-2 px-3"
                    >
                      {/* Node dot */}
                      <div
                        className="pixel-crisp relative flex h-8 w-8 items-center justify-center"
                        style={{
                          background: node.kind === "boss" || node.kind === "final"
                            ? `${node.color}22`
                            : `${node.color}15`,
                          border: `2px solid ${node.color}`,
                          boxShadow: `0 0 12px ${node.glowColor}`,
                        }}
                      >
                        <span
                          className="pixel-crisp h-2 w-2"
                          style={{ background: node.color }}
                        />
                      </div>
                      {/* Day label */}
                      <span
                        className="whitespace-nowrap text-[9px] tracking-widest"
                        style={{
                          fontFamily: "var(--font-pixel)",
                          color: node.kind === "boss" || node.kind === "final"
                            ? node.color
                            : "var(--color-slate)",
                        }}
                      >
                        {node.label}
                      </span>
                      <span
                        className="text-[8px] tracking-wider text-[var(--color-slate-dim)]"
                        style={{ fontFamily: "var(--font-pixel)" }}
                      >
                        {node.day !== "—" ? `DAY ${node.day}` : ""}
                      </span>
                    </motion.div>

                    {/* Path segment */}
                    {i < QUEST_NODES.length - 1 && (
                      <div
                        className="pixel-crisp h-[2px] w-6 sm:w-10"
                        style={{
                          background: `repeating-linear-gradient(to right, ${node.color}80 0, ${node.color}80 4px, transparent 4px, transparent 9px)`,
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#what-is-abtalks"
          style={{ opacity: parallaxOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-slate-dim)] transition-colors hover:text-[var(--color-teal)]"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-widest" style={{ fontFamily: "var(--font-pixel)" }}>
            SCROLL
          </span>
          <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
        </motion.a>
      </section>

      {/* ════════ WHAT IS ABTALKS ════════ */}
      <section
        id="what-is-abtalks"
        className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
        style={{ background: "linear-gradient(180deg, #100a22 0%, #0c1518 60%, #0a1210 100%)" }}
      >
        {/* Corner glow */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-30"
          style={{ background: "radial-gradient(circle, #40dfc630 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="What is ABTalks?"
            title="Not another coding course."
            subtitle="ABTalks is a 60-day build challenge that turns consistency into a public trail of real work — proof a recruiter can actually scroll through."
          />

          {/* Daily loop — 4 terminal-style cards */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {loopSteps.map((step, i) => {
              const Icon = loopIcons[step.key];
              const c = loopColors[step.key];
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                >
                  <div
                    className="relative flex h-full flex-col gap-4 border p-5"
                    style={{
                      background: c.bg,
                      borderColor: c.border,
                      boxShadow: `0 0 20px ${c.color}10`,
                    }}
                  >
                    {/* Step number */}
                    <span
                      className="absolute right-4 top-4 text-[10px] opacity-40 tracking-widest"
                      style={{ fontFamily: "var(--font-pixel)", color: c.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="flex h-12 w-12 items-center justify-center border"
                      style={{
                        background: `${c.color}18`,
                        borderColor: c.border,
                        boxShadow: `0 0 14px ${c.color}22`,
                        clipPath: "polygon(0 6px,6px 6px,6px 0,calc(100%-6px) 0,calc(100%-6px) 6px,100% 6px,100% calc(100%-6px),calc(100%-6px) calc(100%-6px),calc(100%-6px) 100%,6px 100%,6px calc(100%-6px),0 calc(100%-6px))",
                      }}
                    >
                      <Icon size={20} color={c.color} aria-hidden="true" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-[var(--color-cream)]"
                        style={{ fontFamily: "var(--font-display)", color: c.color }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-[var(--color-slate)]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Proof of work callout */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-2 border border-[var(--color-teal)]/25 p-4"
            style={{ background: "rgba(64,223,198,0.06)" }}
          >
            <CheckCircle size={16} color="var(--color-teal)" aria-hidden="true" />
            <p className="text-base text-[var(--color-cream-dim)]">
              Every day: <strong className="text-[var(--color-teal)]">1 GitHub commit</strong>
              {" + "}
              <strong className="text-[var(--color-violet-bright)]">1 LinkedIn post</strong>
              {" "}— public, dated, real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS — terminal style ════════ */}
      <section
        id="how-it-works"
        className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
        style={{ background: "linear-gradient(180deg, #0a1210 0%, #10141e 50%, #0c0d20 100%)" }}
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="The process" title="How the quest works" />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {howItWorks.map((card, i) => {
              const termColors = ["#40dfc6", "#8e7ff5", "#f07850", "#ffb340"];
              return (
                <motion.div
                  key={card.n}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TerminalCard
                    title={`STEP ${card.n}`}
                    color={termColors[i]}
                    content={
                      <div>
                        <p className="mb-1 text-lg font-bold text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)" }}>
                          {card.title}
                        </p>
                        <p className="text-base text-[var(--color-slate)]">{card.desc}</p>
                      </div>
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ 60 DAY JOURNEY ════════ */}
      <section
        className="journey-bg relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
      >
        {/* Stars in this section */}
        <PixelStars className="h-full opacity-60" />
        {/* Subtle planet/circle motif */}
        <div
          className="pointer-events-none absolute left-[calc(50%-160px)] top-[-80px] h-80 w-80 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #8e7ff5 0%, transparent 70%)", border: "1px solid #8e7ff530" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="The 60-day journey"
                title="From empty canvas to 60 days of proof."
                subtitle="Each milestone is a real shift in how the challenge feels — and how your public log reads to someone discovering you."
              />

              {/* Stat bubbles */}
              <div className="mt-10 flex flex-wrap gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center border px-6 py-4"
                    style={{
                      background: "rgba(30,16,70,0.6)",
                      borderColor: "rgba(142,127,245,0.35)",
                      boxShadow: "0 0 18px rgba(142,127,245,0.12)",
                      clipPath: "polygon(0 6px,6px 6px,6px 0,calc(100%-6px) 0,calc(100%-6px) 6px,100% 6px,100% calc(100%-6px),calc(100%-6px) calc(100%-6px),calc(100%-6px) 100%,6px 100%,6px calc(100%-6px),0 calc(100%-6px))",
                    }}
                  >
                    <span
                      className="text-3xl font-bold text-[var(--color-cream)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="mt-1 text-[10px] tracking-[0.2em] text-[var(--color-slate-dim)]"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >
                      {s.label.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <JourneyPath milestones={journeyMilestones} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY COMPLETE 60 DAYS ════════ */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
        style={{ background: "linear-gradient(180deg, #14080a 0%, #1a0c10 50%, #180e20 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-25"
          style={{ background: "radial-gradient(circle, #f0785040 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Why finish" title="Why complete 60 days?" />

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <BenefitBadge
              icon={Repeat}
              title="Consistency"
              desc="You stop planning to code someday and start shipping every day. The habit outlasts the challenge."
              color="#40dfc6"
              index={0}
            />
            <BenefitBadge
              icon={Shield}
              title="Proof of work"
              desc="Not a certificate. A public log of 60 things you actually built, dated and verifiable on GitHub."
              color="#8e7ff5"
              index={1}
            />
            <BenefitBadge
              icon={Eye}
              title="Visibility"
              desc="Your progress shows up where recruiters already look — GitHub activity and LinkedIn, in public."
              color="#ffb340"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section
        className="relative px-4 py-20 sm:px-6 md:py-24"
        style={{ background: "linear-gradient(180deg, #180e20 0%, #120820 100%)" }}
      >
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Before you start" title="Good to know" />
          <div
            className="mt-10 divide-y"
            style={{ borderColor: "rgba(90,68,160,0.3)" }}
          >
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group"
                style={{ borderTopColor: "rgba(90,68,160,0.3)" }}
              >
                <summary
                  className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-lg font-semibold text-[var(--color-cream)] transition-colors hover:text-[var(--color-violet-bright)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.q}
                  <ChevronRight
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--color-slate)] transition-transform duration-200 group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 text-base leading-relaxed text-[var(--color-slate)]">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="cta-bg relative overflow-hidden px-4 py-24 sm:px-6 md:py-32">
        <PixelStars />
        {/* Horizon glow line */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px opacity-40"
          style={{ background: "linear-gradient(90deg, transparent, #f07850, #8e7ff5, #40dfc6, transparent)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-xl text-center">
          <PixelFire />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
          >
            Your first quest
            <br />
            <span className="shimmer-text">is waiting.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-[var(--color-cream-dim)] sm:text-xl"
          >
            60 days from now, you'll wish you had started today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18, type: "spring", stiffness: 180 }}
            className="mt-8 flex justify-center"
          >
            <CTAButton as="a" href="#top" variant="primary" className="!text-lg !px-9 !py-5">
              Start Your Quest
              <Zap size={20} aria-hidden="true" />
            </CTAButton>
          </motion.div>

          <p
            className="mt-6 text-[11px] tracking-[0.2em] text-[var(--color-slate-dim)]"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            FREE · NO SIGN-UP REQUIRED TO BROWSE
          </p>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer
        className="border-t px-4 py-8 sm:px-6"
        style={{ borderColor: "rgba(90,68,160,0.25)", background: "#0a0618" }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-base font-bold text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)" }}>
            AB<span style={{ color: "var(--color-coral-bright)" }}>Talks</span>
          </span>
          <p className="text-sm text-[var(--color-slate-dim)]">
            Built for students who'd rather ship than scroll.
          </p>
        </div>
      </footer>
    </div>
  );
}
