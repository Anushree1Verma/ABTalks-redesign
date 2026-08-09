import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronLeft, ChevronRight, CheckCircle, Circle, ExternalLink,
  Lightbulb, Target, Clock, Star, Zap,
  AlertCircle, ArrowRight, BookOpen, Lock,
  Terminal, Briefcase,
} from "lucide-react";
import Navbar from "../components/Navbar";
import PixelStars from "../components/PixelStars";
import CustomCursor from "../components/CustomCursor";
import { mockDay12 } from "../data/mockUser";

/* ─── Difficulty color map ─── */
const DIFFICULTY = {
  Easy:   { color: "#40dfc6", label: "EASY" },
  Medium: { color: "#ffb340", label: "MEDIUM" },
  Hard:   { color: "#f07850", label: "HARD" },
};

/* ─── Section wrapper ─── */
function Panel({ children, color = "#2e2260", className = "" }) {
  return (
    <div
      className={`border p-5 ${className}`}
      style={{ background: "rgba(12,8,26,0.85)", borderColor: color }}
    >
      {children}
    </div>
  );
}

/* ─── Deliverable checklist ─── */
function Deliverables({ items }) {
  const [checked, setChecked] = useState({});
  const toggle = (i) => setChecked((s) => ({ ...s, [i]: !s[i] }));
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i}>
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-start gap-3 text-left transition-opacity hover:opacity-80"
          >
            <span className="mt-0.5 shrink-0">
              {checked[i]
                ? <CheckCircle size={18} color="#40dfc6" aria-label="Done" />
                : <Circle size={18} color="var(--color-slate)" aria-label="Not done" />}
            </span>
            <span
              className={`text-base leading-relaxed transition-colors ${
                checked[i] ? "text-[var(--color-teal)] line-through decoration-[var(--color-teal)]/40" : "text-[var(--color-cream-dim)]"
              }`}
            >
              {item}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

/* ─── Submission field ─── */
function SubmitField({ icon: Icon, label, placeholder, color, value, onChange, hint }) {
  return (
    <div>
      <label
        className="mb-2 flex items-center gap-2 text-sm font-semibold"
        style={{ color, fontFamily: "var(--font-display)" }}
      >
        <Icon size={15} aria-hidden="true" />
        {label}
      </label>
      <input
        type="url"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border bg-transparent px-4 py-3 text-base text-[var(--color-cream)] placeholder-[var(--color-slate-dim)] outline-none transition-colors focus:border-opacity-80"
        style={{
          borderColor: `${color}50`,
          fontFamily: "var(--font-body)",
          background: `${color}08`,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = color)}
        onBlur={(e) => (e.currentTarget.style.borderColor = `${color}50`)}
      />
      {hint && <p className="mt-1.5 text-sm text-[var(--color-slate)]">{hint}</p>}
    </div>
  );
}

/* ─── Submission status banner ─── */
function SubmitStatus({ submitted }) {
  if (!submitted) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-3 border p-6 text-center"
      style={{
        background: "rgba(64,223,198,0.08)",
        borderColor: "rgba(64,223,198,0.4)",
        boxShadow: "0 0 30px rgba(64,223,198,0.12)",
      }}
    >
      <CheckCircle size={36} color="#40dfc6" />
      <div>
        <p className="text-xl font-bold text-[var(--color-teal)]" style={{ fontFamily: "var(--font-display)" }}>
          Day 12 Submitted! +120 XP
        </p>
        <p className="mt-1 text-base text-[var(--color-slate)]">
          Your streak continues. See you tomorrow for Day 13.
        </p>
      </div>
      <Link
        to="/dashboard"
        className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-teal)] hover:underline"
      >
        Back to Dashboard <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

/* ════════════════ CHALLENGE DAY PAGE ════════════════ */
export default function ChallengeDay() {
  const day = mockDay12;
  const diff = DIFFICULTY[day.difficulty] ?? DIFFICULTY.Medium;

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = github.trim().length > 0 && linkedin.trim().length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) {
      setError("Please add both your GitHub repo link and LinkedIn post URL before submitting.");
      return;
    }
    setError("");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0c0820 0%, #0a1015 60%, #0e0a20 100%)" }}>
      <CustomCursor />
      <Navbar />
      <PixelStars className="fixed inset-0 pointer-events-none opacity-40" />

      <main className="relative mx-auto max-w-2xl px-4 pb-24 pt-5 sm:px-6">

        {/* ── Breadcrumb nav ── */}
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex items-center gap-2 text-sm text-[var(--color-slate)]"
          aria-label="Breadcrumb"
        >
          <Link to="/dashboard" className="flex items-center gap-1 hover:text-[var(--color-cream)] transition-colors">
            <ChevronLeft size={14} aria-hidden="true" /> Dashboard
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-[var(--color-cream)]">Day {day.day}</span>
        </motion.nav>

        {/* ── Day header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 border p-5"
          style={{
            background: "linear-gradient(135deg, rgba(22,14,55,0.95) 0%, rgba(14,8,35,0.98) 100%)",
            borderColor: "rgba(142,127,245,0.5)",
            boxShadow: "0 0 36px rgba(142,127,245,0.12)",
          }}
        >
          <div className="flex flex-wrap items-start gap-3 justify-between">
            <div>
              <p
                className="text-[10px] tracking-[0.25em] text-[var(--color-violet-bright)]"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {day.track.toUpperCase()} · DAY {day.day}
              </p>
              <h1
                className="mt-2 text-2xl font-bold leading-tight text-[var(--color-cream)] sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {day.title}
              </h1>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span
                className="border px-2.5 py-1 text-[10px] tracking-widest"
                style={{ fontFamily: "var(--font-pixel)", color: diff.color, borderColor: `${diff.color}45`, background: `${diff.color}10` }}
              >
                {diff.label}
              </span>
              <span
                className="flex items-center gap-1 text-[10px] tracking-wide text-[var(--color-amber)]"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                <Zap size={11} aria-hidden="true" /> +{day.xp} XP
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-[var(--color-slate)]">
            <span className="flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" /> {day.estimatedTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Target size={13} color="#f07850" aria-hidden="true" /> {day.deliverables.length} deliverables
            </span>
          </div>
        </motion.div>

        {/* Submitted state — show banner and hide the rest */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <SubmitStatus submitted={submitted} />
            </motion.div>
          )}
        </AnimatePresence>

        {!submitted && (
          <>
            {/* ── Objective ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07 }}
              className="mb-5"
            >
              <Panel color="rgba(64,223,198,0.3)">
                <p
                  className="mb-3 flex items-center gap-2 text-[10px] tracking-[0.2em] text-[var(--color-teal)]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  <Target size={12} aria-hidden="true" /> OBJECTIVE
                </p>
                <p className="text-base leading-relaxed text-[var(--color-cream-dim)]">
                  {day.objective}
                </p>
              </Panel>
            </motion.div>

            {/* ── Why it matters ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.10 }}
              className="mb-5"
            >
              <Panel color="rgba(142,127,245,0.3)">
                <p
                  className="mb-3 flex items-center gap-2 text-[10px] tracking-[0.2em] text-[var(--color-violet-bright)]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  <BookOpen size={12} aria-hidden="true" /> WHY IT MATTERS
                </p>
                <p className="text-base leading-relaxed text-[var(--color-cream-dim)]">
                  {day.whyItMatters}
                </p>
              </Panel>
            </motion.div>

            {/* ── Deliverables checklist ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.13 }}
              className="mb-5"
            >
              <Panel color="rgba(240,120,80,0.3)">
                <p
                  className="mb-4 flex items-center gap-2 text-[10px] tracking-[0.2em] text-[var(--color-coral-bright)]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  <CheckCircle size={12} aria-hidden="true" /> WHAT TO SHIP
                </p>
                <Deliverables items={day.deliverables} />
              </Panel>
            </motion.div>

            {/* ── Hints (collapsible) ── */}
            <motion.details
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mb-5 border"
              style={{ borderColor: "rgba(255,179,64,0.3)", background: "rgba(10,6,22,0.85)" }}
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-3 p-4 text-base font-semibold text-[var(--color-amber)] transition-opacity hover:opacity-80"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="flex items-center gap-2">
                  <Lightbulb size={16} aria-hidden="true" /> Hints
                </span>
                <ChevronRight size={16} className="transition-transform group-open:rotate-90 text-[var(--color-slate)]" />
              </summary>
              <ul className="space-y-3 border-t px-5 py-4" style={{ borderColor: "rgba(255,179,64,0.2)" }}>
                {day.hints.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-[var(--color-cream-dim)]">
                    <span
                      className="mt-1 shrink-0 text-[10px] text-[var(--color-amber)]"
                      style={{ fontFamily: "var(--font-pixel)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.details>

            {/* ── Resources ── */}
            {day.resources?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="mb-5"
              >
                <Panel color="rgba(46,34,96,0.8)">
                  <p
                    className="mb-3 text-[10px] tracking-[0.2em] text-[var(--color-slate)]"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    RESOURCES
                  </p>
                  <div className="flex flex-col gap-2">
                    {day.resources.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-[var(--color-violet-bright)] hover:underline"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        {r.label}
                      </a>
                    ))}
                  </div>
                </Panel>
              </motion.div>
            )}

            {/* ── Submission form ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.21 }}
              className="border p-5"
              style={{
                background: "rgba(10,6,22,0.92)",
                borderColor: "rgba(240,120,80,0.45)",
                boxShadow: "0 0 28px rgba(240,120,80,0.08)",
              }}
            >
              <p
                className="mb-5 text-[10px] tracking-[0.25em] text-[var(--color-coral-bright)]"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                ⚡ SUBMIT PROOF OF WORK
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <SubmitField
                  icon={Terminal}
                  label="GitHub Repository / Commit URL"
                  placeholder="https://github.com/you/repo/commit/abc123"
                  color="#40dfc6"
                  value={github}
                  onChange={setGithub}
                  hint="Link to the specific commit or repo for today's build."
                />
                <SubmitField
                  icon={Briefcase}
                  label="LinkedIn Post URL"
                  placeholder="https://linkedin.com/posts/you/..."
                  color="#8e7ff5"
                  value={linkedin}
                  onChange={setLinkedin}
                  hint="Share what you built and what you learned. Public post only."
                />

                {error && (
                  <div className="flex items-start gap-2 text-sm text-[var(--color-coral)]">
                    <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full py-4 text-base font-bold transition-all duration-150 hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
                  style={{
                    background: canSubmit
                      ? "linear-gradient(135deg, var(--color-coral-bright), var(--color-coral))"
                      : "rgba(40,30,70,0.7)",
                    color: canSubmit ? "#100820" : "var(--color-slate)",
                    fontFamily: "var(--font-display)",
                    clipPath: "polygon(0 6px,6px 6px,6px 0,calc(100%-6px) 0,calc(100%-6px) 6px,100% 6px,100% calc(100%-6px),calc(100%-6px) calc(100%-6px),calc(100%-6px) 100%,6px 100%,6px calc(100%-6px),0 calc(100%-6px))",
                  }}
                >
                  {canSubmit ? "Submit Day 12 →" : "Add both links to submit"}
                </button>
              </form>
            </motion.div>
          </>
        )}

        {/* ── Day navigation ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          className="mt-6 flex items-center justify-between gap-4"
        >
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-sm text-[var(--color-slate)] hover:text-[var(--color-cream)] transition-colors"
          >
            <ChevronLeft size={15} aria-hidden="true" />
            Day {day.prevDay.day}: {day.prevDay.title}
          </Link>
          <span
            className="flex items-center gap-1.5 text-sm text-[var(--color-slate-dim)]"
            title="Day 13 is locked"
          >
            <Lock size={13} aria-hidden="true" />
            Day 13
            <ChevronRight size={15} aria-hidden="true" />
          </span>
        </motion.div>

      </main>
    </div>
  );
}
