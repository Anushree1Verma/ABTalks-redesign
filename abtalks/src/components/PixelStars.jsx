// A handful of tiny pixel stars scattered across a region.
// Pure CSS/SVG, no assets — kept lightweight so it never blocks first paint.

const STARS = [
  { top: "8%", left: "12%", size: 3, delay: "0s", color: "var(--color-cream)" },
  { top: "18%", left: "82%", size: 2, delay: "0.6s", color: "var(--color-teal)" },
  { top: "6%", left: "48%", size: 2, delay: "1.1s", color: "var(--color-cream)" },
  { top: "32%", left: "6%", size: 2, delay: "1.6s", color: "var(--color-coral)" },
  { top: "40%", left: "92%", size: 3, delay: "0.3s", color: "var(--color-cream)" },
  { top: "14%", left: "68%", size: 2, delay: "2s", color: "var(--color-violet)" },
  { top: "50%", left: "30%", size: 2, delay: "0.9s", color: "var(--color-cream)" },
  { top: "24%", left: "38%", size: 2, delay: "1.4s", color: "var(--color-teal)" },
];

export default function PixelStars({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="pixel-crisp absolute rounded-[1px]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            animation: `twinkle 2.6s ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
