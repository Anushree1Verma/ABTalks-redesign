// Pixel-art initials avatar — fallback when no profile photo exists.
// Uses a deterministic color from the user's name.

const PALETTE = [
  ["#f07850", "#2d1a10"],
  ["#8e7ff5", "#1a1440"],
  ["#40dfc6", "#0a2020"],
  ["#ffb340", "#281800"],
  ["#e060c0", "#280820"],
];

function nameToIndex(name) {
  return name
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0) % PALETTE.length;
}

export default function PixelAvatar({ name, size = 48 }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const [bg, fg] = PALETTE[nameToIndex(name)];

  return (
    <div
      className="pixel-crisp flex shrink-0 items-center justify-center font-bold"
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        fontSize: size * 0.35,
        fontFamily: "var(--font-display)",
        border: `2px solid ${bg}`,
        boxShadow: `0 0 14px ${bg}60`,
        clipPath:
          "polygon(0 8px,8px 8px,8px 0,calc(100%-8px) 0,calc(100%-8px) 8px,100% 8px,100% calc(100%-8px),calc(100%-8px) calc(100%-8px),calc(100%-8px) 100%,8px 100%,8px calc(100%-8px),0 calc(100%-8px))",
      }}
      aria-label={`Avatar for ${name}`}
    >
      {initials}
    </div>
  );
}
