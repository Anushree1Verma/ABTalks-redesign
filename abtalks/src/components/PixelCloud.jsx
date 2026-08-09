// Pixel cloud as an inline SVG component.
// tone prop selects a color variant.
// dir controls drift direction.

const PALETTE = {
  cream:  { fill: "#e8e0d0", glow: "rgba(248,242,232,0.12)" },
  violet: { fill: "#7060d0", glow: "rgba(142,127,245,0.18)" },
  coral:  { fill: "#d06040", glow: "rgba(240,120,80,0.18)" },
  pink:   { fill: "#c050a0", glow: "rgba(224,96,192,0.18)" },
};

export default function PixelCloud({
  className = "",
  tone = "cream",
  opacity = 0.55,
  speed = "20s",
  dir = "r",
  scale = 1,
}) {
  const { fill, glow } = PALETTE[tone] ?? PALETTE.cream;
  const anim = dir === "l" ? "drift-l" : "drift-r";
  return (
    <svg
      className={`pixel-crisp absolute ${className}`}
      style={{
        opacity,
        animation: `${anim} ${speed} ease-in-out infinite alternate`,
        filter: `drop-shadow(0 0 8px ${glow})`,
        transform: `scale(${scale})`,
        transformOrigin: "center",
      }}
      width="56"
      height="24"
      viewBox="0 0 56 24"
      aria-hidden="true"
    >
      <rect x="10" y="10" width="36" height="10" fill={fill} />
      <rect x="4"  y="14" width="48" height="6"  fill={fill} />
      <rect x="14" y="4"  width="10" height="6"  fill={fill} />
      <rect x="26" y="2"  width="10" height="6"  fill={fill} />
      <rect x="36" y="6"  width="8"  height="6"  fill={fill} />
    </svg>
  );
}
