// Pixel-art mountain silhouette — used in the hero background.
// Built from SVG rectangles; no external assets.

export default function PixelMountains({ className = "" }) {
  const MOUNTAIN_COLOR = "#1e1045";
  const MID_COLOR = "#28165a";
  const PEAK_COLOR = "#3a2070";

  return (
    <svg
      className={`pixel-crisp absolute w-full ${className}`}
      viewBox="0 0 390 120"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* Back range */}
      <polygon points="0,120 60,80 90,90 130,60 170,75 220,45 260,60 300,50 340,70 390,55 390,120" fill={MOUNTAIN_COLOR} />
      {/* Mid range */}
      <polygon points="0,120 30,100 70,85 110,95 150,75 190,88 230,72 270,84 310,68 360,82 390,70 390,120" fill={MID_COLOR} />
      {/* Peaks */}
      <rect x="218" y="43" width="4" height="4" fill={PEAK_COLOR} />
      <rect x="222" y="45" width="4" height="4" fill={PEAK_COLOR} />
      <rect x="298" y="48" width="4" height="4" fill={PEAK_COLOR} />
      <rect x="302" y="50" width="4" height="4" fill={PEAK_COLOR} />
      {/* Snow caps */}
      <rect x="218" y="43" width="4" height="2" fill="rgba(248,242,232,0.6)" />
      <rect x="298" y="48" width="4" height="2" fill="rgba(248,242,232,0.5)" />
    </svg>
  );
}
