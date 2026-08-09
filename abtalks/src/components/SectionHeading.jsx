// Redesigned SectionHeading — larger text, richer eyebrow style.
// align="center" for centered sections.

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className="mb-3 text-[11px] tracking-[0.25em] uppercase"
          style={{
            fontFamily: "var(--font-pixel)",
            color: "var(--color-teal)",
            textShadow: "0 0 12px rgba(64,223,198,0.5)",
          }}
        >
          // {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl font-bold leading-tight sm:text-4xl"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed text-[var(--color-slate)] ${
            align === "center" ? "mx-auto max-w-lg" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
