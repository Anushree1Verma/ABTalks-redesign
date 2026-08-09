// Mini 12-day heatmap streak calendar.
// Each cell is color-coded: submitted / missed / pending / locked.

import { motion } from "framer-motion";

const STATUS_STYLES = {
  submitted: { bg: "#40dfc6", border: "#40dfc680", glow: "0 0 10px #40dfc650" },
  missed:    { bg: "#f07850", border: "#f0785080", glow: "0 0 10px #f0785050" },
  pending:   { bg: "#ffb340", border: "#ffb34080", glow: "0 0 8px #ffb34040" },
  locked:    { bg: "#1e1a35", border: "#2e2860",   glow: "none" },
};

export default function StreakCalendar({ days, currentDay }) {
  // Show first 12 days in the calendar
  const visible = days.slice(0, 12);

  return (
    <div>
      <p
        className="mb-3 text-[10px] tracking-[0.2em] text-[var(--color-slate)]"
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        DAY HISTORY
      </p>
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
        {visible.map((d, i) => {
          const s = STATUS_STYLES[d.status] ?? STATUS_STYLES.locked;
          const isCurrent = d.day === currentDay;
          return (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
              className="pixel-crisp flex flex-col items-center gap-1"
              title={`Day ${d.day}: ${d.title} (${d.status})`}
            >
              <div
                className="h-7 w-full"
                style={{
                  background: s.bg,
                  border: `2px solid ${s.border}`,
                  boxShadow: isCurrent ? `0 0 14px #ffb34090` : s.glow,
                  outline: isCurrent ? "2px solid #ffb340" : "none",
                  outlineOffset: "2px",
                  opacity: d.status === "locked" ? 0.35 : 1,
                }}
                aria-label={`Day ${d.day}: ${d.status}`}
              />
              <span
                className="text-[8px] text-[var(--color-slate-dim)]"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {d.day}
              </span>
            </motion.div>
          );
        })}
      </div>
      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-[var(--color-slate)]">
        {[
          { status: "submitted", label: "Done" },
          { status: "pending",   label: "Today" },
          { status: "missed",    label: "Missed" },
          { status: "locked",    label: "Upcoming" },
        ].map(({ status, label }) => {
          const s = STATUS_STYLES[status];
          return (
            <span key={status} className="flex items-center gap-1.5">
              <span className="pixel-crisp h-3 w-3" style={{ background: s.bg, border: `1px solid ${s.border}` }} />
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
