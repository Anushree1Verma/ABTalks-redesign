// A tiny 8-bit-style cloud built from stacked rectangles, drifting slowly.
// Kept as a single small SVG — no external image assets.

export default function PixelCloud({ className = "", tone = "cream", opacity = 0.5, speed = "18s" }) {
  const fill =
    tone === "coral" ? "var(--color-coral)" : tone === "violet" ? "var(--color-violet)" : "var(--color-cream)";

  return (
    <svg
      className={`pixel-crisp absolute ${className}`}
      style={{ opacity, animation: `drift ${speed} ease-in-out infinite alternate` }}
      width="44"
      height="20"
      viewBox="0 0 44 20"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="28" height="8" fill={fill} />
      <rect x="4" y="12" width="36" height="4" fill={fill} />
      <rect x="12" y="4" width="8" height="4" fill={fill} />
      <rect x="22" y="2" width="8" height="4" fill={fill} />
      <rect x="28" y="6" width="6" height="4" fill={fill} />
    </svg>
  );
}
