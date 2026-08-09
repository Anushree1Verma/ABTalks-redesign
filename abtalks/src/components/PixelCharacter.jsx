// A tiny 12×16 px pixel developer character — pure SVG rectangles.
// Represents the "student builder" at the start of their quest.
// Floats gently to feel alive; no external images.

export default function PixelCharacter({ className = "" }) {
  const SKIN   = "#e8a870";
  const HAIR   = "#2a1a0a";
  const SHIRT  = "#5c44d0";
  const PANTS  = "#1a2050";
  const SHOES  = "#1a1010";
  const SCREEN = "#40dfc6";
  const LAPTOP = "#282838";

  return (
    <svg
      className={`pixel-crisp ${className}`}
      style={{ animation: "float-slow 4s ease-in-out infinite", imageRendering: "pixelated" }}
      width="48"
      height="64"
      viewBox="0 0 12 16"
      aria-hidden="true"
    >
      {/* Hair */}
      <rect x="3" y="0" width="6" height="2" fill={HAIR} />
      <rect x="2" y="1" width="8" height="2" fill={HAIR} />
      {/* Head */}
      <rect x="2" y="2" width="8" height="5" fill={SKIN} />
      {/* Eyes */}
      <rect x="3" y="4" width="2" height="1" fill={HAIR} />
      <rect x="7" y="4" width="2" height="1" fill={HAIR} />
      {/* Body / shirt */}
      <rect x="1" y="7" width="10" height="4" fill={SHIRT} />
      {/* Arms */}
      <rect x="0" y="7" width="1" height="3" fill={SHIRT} />
      <rect x="11" y="7" width="1" height="3" fill={SHIRT} />
      {/* Laptop in arms */}
      <rect x="1" y="9" width="10" height="2" fill={LAPTOP} />
      <rect x="2" y="9" width="8" height="1" fill={SCREEN} />
      {/* Pants */}
      <rect x="2" y="11" width="3" height="3" fill={PANTS} />
      <rect x="7" y="11" width="3" height="3" fill={PANTS} />
      {/* Shoes */}
      <rect x="1" y="14" width="4" height="2" fill={SHOES} />
      <rect x="7" y="14" width="4" height="2" fill={SHOES} />
    </svg>
  );
}
