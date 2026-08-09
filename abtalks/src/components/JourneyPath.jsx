import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flag, Swords, Flame, TrendingUp, Trophy } from "lucide-react";

const ICONS = {
  Start: Flag,
  "First Boss": Swords,
  Builder: Flame,
  Momentum: TrendingUp,
  "Ship It": Trophy,
};

const COLORS = {
  Start: { border: "#40dfc6", bg: "rgba(64,223,198,0.12)", icon: "#40dfc6", glow: "#40dfc680", label: "var(--color-teal)" },
  "First Boss": { border: "#f07850", bg: "rgba(240,120,80,0.14)", icon: "#ff9060", glow: "#f0785080", label: "var(--color-coral-bright)" },
  Builder: { border: "#8e7ff5", bg: "rgba(142,127,245,0.14)", icon: "#a993ff", glow: "#8e7ff580", label: "var(--color-violet-bright)" },
  Momentum: { border: "#ffb340", bg: "rgba(255,179,64,0.14)", icon: "#ffb340", glow: "#ffb34080", label: "var(--color-amber)" },
  "Ship It": { border: "#f07850", bg: "rgba(255,144,96,0.20)", icon: "#ff9060", glow: "#ff906080", label: "var(--color-coral-bright)" },
};

function Checkpoint({ milestone, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const c = COLORS[milestone.label] ?? COLORS.Start;
  const Icon = ICONS[milestone.label] ?? Flag;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      {/* Trail segment */}
      {index < 4 && (
        <div
          aria-hidden="true"
          className="pixel-crisp absolute left-[23px] top-[52px] z-0"
          style={{
            width: 3,
            height: "calc(100% - 10px)",
            background: `repeating-linear-gradient(to bottom, ${c.border}60 0, ${c.border}60 6px, transparent 6px, transparent 14px)`,
          }}
        />
      )}

      {/* Checkpoint badge */}
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.05, type: "spring", stiffness: 220 }}
        className="pixel-corner-clip relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2"
        style={{
          borderColor: c.border,
          background: c.bg,
          boxShadow: `0 0 16px ${c.glow}`,
        }}
      >
        <Icon size={20} strokeWidth={2} color={c.icon} aria-hidden="true" />
      </motion.div>

      {/* Content */}
      <div className="pt-1">
        <p
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-pixel)", color: "var(--color-slate)" }}
        >
          {milestone.tag}
        </p>
        <h3
          className="mt-1.5 text-xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-display)", color: c.label }}
        >
          {milestone.label}
        </h3>
        <p className="mt-1.5 text-base leading-relaxed text-[var(--color-cream-dim)]">
          {milestone.desc}
        </p>
      </div>
    </motion.li>
  );
}

export default function JourneyPath({ milestones }) {
  return (
    <ol className="relative mx-auto max-w-lg">
      {milestones.map((m, i) => (
        <Checkpoint key={m.day} milestone={m} index={i} />
      ))}
    </ol>
  );
}
