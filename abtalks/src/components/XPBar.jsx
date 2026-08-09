// Animated XP progress bar — RPG-style level gauge.
import { motion } from "framer-motion";

export default function XPBar({ xp, maxXp = 1500, label = "XP" }) {
  const pct = Math.min(100, Math.round((xp / maxXp) * 100));
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <p
          className="text-[10px] tracking-[0.2em] text-[var(--color-slate)]"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          {label}
        </p>
        <span
          className="text-[10px] font-bold text-[var(--color-amber)]"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          {xp} / {maxXp}
        </span>
      </div>
      <div
        className="pixel-crisp h-3 w-full overflow-hidden"
        style={{ background: "rgba(30,22,60,0.8)", border: "1px solid rgba(90,70,160,0.5)" }}
        role="progressbar"
        aria-valuenow={xp}
        aria-valuemin={0}
        aria-valuemax={maxXp}
        aria-label={`${xp} of ${maxXp} XP`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="h-full"
          style={{
            background: "linear-gradient(90deg, #8e7ff5 0%, #f07850 60%, #ffb340 100%)",
            boxShadow: "2px 0 10px #ffb34060",
          }}
        />
      </div>
      <p className="mt-1 text-right text-[10px] text-[var(--color-slate-dim)]">{pct}% to next checkpoint</p>
    </div>
  );
}
