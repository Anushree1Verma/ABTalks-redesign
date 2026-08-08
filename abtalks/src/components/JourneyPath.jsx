import { Flag, Swords, Flame, TrendingUp, Trophy } from "lucide-react";

const ICONS = {
  Start: Flag,
  "First Boss": Swords,
  Builder: Flame,
  Momentum: TrendingUp,
  "Ship It": Trophy,
};

export default function JourneyPath({ milestones }) {
  return (
    <ol className="relative mx-auto max-w-md">
      {/* the trail: a dashed pixel line running down the center of the icon column */}
      <div
        className="pixel-crisp absolute left-[19px] top-2 bottom-2 w-[3px] sm:left-[23px]"
        style={{
          background:
            "repeating-linear-gradient(to bottom, var(--color-border) 0, var(--color-border) 6px, transparent 6px, transparent 12px)",
        }}
        aria-hidden="true"
      />

      {milestones.map((m, i) => {
        const Icon = ICONS[m.label] ?? Flag;
        const isLast = i === milestones.length - 1;
        return (
          <li key={m.day} className="relative flex gap-4 pb-9 last:pb-0 sm:gap-5">
            <div
              className={`pixel-crisp relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border-2 sm:h-12 sm:w-12 ${
                isLast
                  ? "border-[var(--color-coral)] bg-[var(--color-coral)]/15"
                  : "border-[var(--color-teal)] bg-[var(--color-teal)]/10"
              }`}
              style={{ clipPath: "polygon(0 8px,8px 8px,8px 0,calc(100% - 8px) 0,calc(100% - 8px) 8px,100% 8px,100% calc(100% - 8px),calc(100% - 8px) calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,8px calc(100% - 8px),0 calc(100% - 8px))" }}
            >
              <Icon
                size={18}
                strokeWidth={2}
                color={isLast ? "var(--color-coral)" : "var(--color-teal)"}
                aria-hidden="true"
              />
            </div>

            <div className="pt-1">
              <p
                className="text-[10px] tracking-[0.18em]"
                style={{ fontFamily: "var(--font-pixel)", color: "var(--color-slate)" }}
              >
                {m.tag}
              </p>
              <p
                className="mt-1 text-base font-semibold text-[var(--color-cream)] sm:text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-slate)]">{m.desc}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
