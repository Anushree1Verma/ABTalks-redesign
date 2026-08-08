export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className="mb-3 text-[10px] tracking-[0.2em] text-teal-tone uppercase"
          style={{ fontFamily: "var(--font-pixel)", color: "var(--color-teal)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[var(--color-cream)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed text-[var(--color-slate)] ${
            align === "center" ? "mx-auto max-w-md" : "max-w-md"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
