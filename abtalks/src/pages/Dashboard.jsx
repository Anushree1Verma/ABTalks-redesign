import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Flame, Trophy, Calendar, ChevronRight, TrendingUp,
  ArrowRight, AlertTriangle, Star, Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import PixelStars from "../components/PixelStars";
import PixelAvatar from "../components/PixelAvatar";
import StreakCalendar from "../components/StreakCalendar";
import XPBar from "../components/XPBar";
import CustomCursor from "../components/CustomCursor";
import { mockUser, mockDays, mockDay12 } from "../data/mockUser";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Missed-day warning banner ─── */
function MissedDayBanner({ days }) {
  const missed = days.filter((d) => d.status === "missed");
  if (!missed.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 flex items-start gap-3 border px-4 py-3"
      style={{
        background: "rgba(240,120,80,0.08)",
        borderColor: "rgba(240,120,80,0.35)",
      }}
    >
      <AlertTriangle size={16} color="#f07850" className="mt-0.5 shrink-0" />
      <p className="text-sm text-[var(--color-slate)]">
        You missed <strong className="text-[var(--color-coral-bright)]">Day {missed.map((d) => d.day).join(", ")}</strong>.
        {" "}Your streak reset, but your build log stays — keep shipping.
      </p>
    </motion.div>
  );
}

/* ─── Stat chip ─── */
function StatChip({ icon: Icon, value, label, color, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center gap-2 border p-4 text-center"
      style={{
        background: `${color}0d`,
        borderColor: `${color}35`,
        boxShadow: `0 0 18px ${color}15`,
        clipPath: "polygon(0 6px,6px 6px,6px 0,calc(100%-6px) 0,calc(100%-6px) 6px,100% 6px,100% calc(100%-6px),calc(100%-6px) calc(100%-6px),calc(100%-6px) 100%,6px 100%,6px calc(100%-6px),0 calc(100%-6px))",
      }}
    >
      <Icon size={18} color={color} aria-hidden="true" />
      <span className="text-2xl font-bold text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)" }}>
        {value}
      </span>
      <span className="text-[10px] tracking-[0.15em] text-[var(--color-slate)]" style={{ fontFamily: "var(--font-pixel)" }}>
        {label.toUpperCase()}
      </span>
    </motion.div>
  );
}

/* ─── Badge grid ─── */
function BadgeGrid({ badges }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {badges.map((b, i) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.06, type: "spring", stiffness: 180 }}
          className="flex flex-col items-center gap-2 border px-2 py-3 text-center"
          style={{
            background: b.earned ? "rgba(142,127,245,0.10)" : "rgba(20,16,40,0.6)",
            borderColor: b.earned ? "rgba(142,127,245,0.45)" : "rgba(46,34,96,0.5)",
            boxShadow: b.earned ? "0 0 14px rgba(142,127,245,0.15)" : "none",
            opacity: b.earned ? 1 : 0.45,
          }}
          title={b.desc}
        >
          <span className="text-2xl" aria-hidden="true">
            {b.earned ? b.icon : "🔒"}
          </span>
          <span
            className="text-[10px] leading-snug text-[var(--color-slate)]"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {b.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Today's task card ─── */
function TodayCard({ day }) {
  const isFirst = day.day === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12 }}
      className="relative overflow-hidden border"
      style={{
        background: "linear-gradient(135deg, rgba(30,18,70,0.9) 0%, rgba(20,12,45,0.95) 100%)",
        borderColor: "rgba(142,127,245,0.45)",
        boxShadow: "0 0 32px rgba(142,127,245,0.14)",
      }}
    >
      {/* Glow corner */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-30"
        style={{ background: "radial-gradient(circle, #8e7ff5 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <p
            className="text-[10px] tracking-[0.22em] text-[var(--color-violet-bright)]"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            TODAY · DAY {day.day}
          </p>
          <span
            className="border px-2 py-0.5 text-[10px] tracking-wider text-[var(--color-amber)]"
            style={{ fontFamily: "var(--font-pixel)", borderColor: "rgba(255,179,64,0.35)", background: "rgba(255,179,64,0.08)" }}
          >
            +{mockDay12.xp} XP
          </span>
        </div>

        <h2
          className="mt-2 text-2xl font-bold leading-snug text-[var(--color-cream)] sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {mockDay12.title}
        </h2>

        <p className="mt-2 text-base leading-relaxed text-[var(--color-slate)]">
          {mockDay12.objective.slice(0, 100)}…
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-[var(--color-slate)]">
          <span className="flex items-center gap-1.5 border border-[var(--color-border)] px-2.5 py-1">
            <Calendar size={13} aria-hidden="true" /> {mockDay12.estimatedTime}
          </span>
          <span className="flex items-center gap-1.5 border border-[var(--color-border)] px-2.5 py-1">
            <Star size={13} color="#ffb340" aria-hidden="true" /> {mockDay12.difficulty}
          </span>
        </div>

        <Link
          to="/day/12"
          className="mt-5 flex w-full items-center justify-center gap-2 py-3.5 font-bold transition-all hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, var(--color-coral-bright), var(--color-coral))",
            color: "#100820",
            fontFamily: "var(--font-display)",
            clipPath: "polygon(0 6px,6px 6px,6px 0,calc(100%-6px) 0,calc(100%-6px) 6px,100% 6px,100% calc(100%-6px),calc(100%-6px) calc(100%-6px),calc(100%-6px) 100%,6px 100%,6px calc(100%-6px),0 calc(100%-6px))",
          }}
        >
          Open Today's Challenge
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Overall progress bar ─── */
function ProgressSection({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <p
          className="text-[10px] tracking-[0.2em] text-[var(--color-slate)]"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          CHALLENGE PROGRESS
        </p>
        <span className="text-sm font-bold text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)" }}>
          {current}/{total} days
        </span>
      </div>
      <div
        className="pixel-crisp h-4 w-full overflow-hidden"
        style={{ background: "rgba(20,14,44,0.8)", border: "1px solid rgba(90,70,160,0.4)" }}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${current} of ${total} days complete`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full"
          style={{ background: "linear-gradient(90deg, #40dfc6 0%, #8e7ff5 50%, #f07850 100%)" }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-[var(--color-slate-dim)]" style={{ fontFamily: "var(--font-pixel)" }}>
        <span>START</span>
        <span>DAY 30</span>
        <span>DAY 60</span>
      </div>
    </div>
  );
}

/* ════════════════ DASHBOARD PAGE ════════════════ */
export default function Dashboard() {
  const u = mockUser;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0e0822 0%, #0a1018 100%)" }}>
      <CustomCursor />
      <Navbar />

      {/* Stars in background */}
      <PixelStars className="fixed inset-0 pointer-events-none opacity-50" />

      <main className="relative mx-auto max-w-2xl px-4 pb-20 pt-6 sm:px-6">
        <MissedDayBanner days={mockDays} />

        {/* ── Profile header ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-4"
        >
          <PixelAvatar name={u.name} size={52} />
          <div className="min-w-0">
            <h1
              className="truncate text-xl font-bold text-[var(--color-cream)] sm:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {u.name}
            </h1>
            <p className="flex flex-wrap items-center gap-x-2 text-sm text-[var(--color-slate)]">
              <span>@{u.handle}</span>
              <span aria-hidden="true">·</span>
              <span>{u.college}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--color-violet-bright)]">{u.trackShort}</span>
            </p>
          </div>
        </motion.div>

        {/* ── Stat row ── */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <StatChip icon={Flame}     value={u.streakCurrent} label="Streak"  color="#f07850" index={0} />
          <StatChip icon={TrendingUp} value={`#${u.rank}`}   label="Rank"    color="#8e7ff5" index={1} />
          <StatChip icon={Trophy}    value={u.xp}            label="XP"      color="#ffb340" index={2} />
        </div>

        {/* ── XP bar ── */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 border p-4"
          style={{ background: "rgba(14,10,32,0.8)", borderColor: "rgba(46,34,96,0.7)" }}
        >
          <XPBar xp={u.xp} />
        </motion.div>

        {/* ── Overall progress ── */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 border p-4"
          style={{ background: "rgba(14,10,32,0.8)", borderColor: "rgba(46,34,96,0.7)" }}
        >
          <ProgressSection current={u.daysCurrent} total={u.totalDays} />
        </motion.div>

        {/* ── Today's task ── */}
        <div className="mb-6">
          <TodayCard day={mockDays.find((d) => d.status === "pending")} />
        </div>

        {/* ── Streak calendar ── */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 border p-4"
          style={{ background: "rgba(14,10,32,0.8)", borderColor: "rgba(46,34,96,0.7)" }}
        >
          <StreakCalendar days={mockDays} currentDay={u.daysCurrent} />
        </motion.div>

        {/* ── Badges ── */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 border p-4"
          style={{ background: "rgba(14,10,32,0.8)", borderColor: "rgba(46,34,96,0.7)" }}
        >
          <p
            className="mb-4 text-[10px] tracking-[0.2em] text-[var(--color-slate)]"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            BADGES
          </p>
          <BadgeGrid badges={u.badges} />
        </motion.div>

        {/* ── Quick standing ── */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="border p-4 text-center"
          style={{
            background: "rgba(64,223,198,0.06)",
            borderColor: "rgba(64,223,198,0.25)",
          }}
        >
          <p className="text-sm text-[var(--color-slate)]">
            You're ranked <strong className="text-[var(--color-teal)]">#{u.rank}</strong> out of{" "}
            <strong className="text-[var(--color-cream)]">{u.totalStudents}</strong> students.
            Keep your streak to climb.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
