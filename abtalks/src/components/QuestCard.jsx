export default function QuestCard({ n, title, desc }) {
  return (
    <div className="relative border border-[var(--color-border)] bg-[var(--color-panel)]/60 p-5 transition-colors hover:border-[var(--color-violet)]">
      <span
        className="text-xs tracking-[0.2em]"
        style={{ fontFamily: "var(--font-pixel)", color: "var(--color-violet)" }}
      >
        {n}
      </span>
      <h3
        className="mt-3 text-lg font-semibold text-[var(--color-cream)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">{desc}</p>
      {/* pixel corner tick, subtle */}
      <span
        className="pixel-crisp absolute right-0 top-0 h-2 w-2"
        style={{ background: "var(--color-violet)" }}
        aria-hidden="true"
      />
    </div>
  );
}
