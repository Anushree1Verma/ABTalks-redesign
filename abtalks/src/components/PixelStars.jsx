import { useEffect, useRef } from "react";

const STAR_DEFS = [
  { top: "6%",  left: "8%",  size: 4, delay: 0,    color: "#f8f2e8", dur: 2.8 },
  { top: "12%", left: "73%", size: 3, delay: 0.6,  color: "#40dfc6", dur: 3.2 },
  { top: "4%",  left: "44%", size: 2, delay: 1.1,  color: "#f8f2e8", dur: 2.5 },
  { top: "28%", left: "5%",  size: 3, delay: 1.6,  color: "#f07850", dur: 3.8 },
  { top: "18%", left: "88%", size: 4, delay: 0.3,  color: "#f8f2e8", dur: 2.2 },
  { top: "9%",  left: "61%", size: 2, delay: 2.0,  color: "#8e7ff5", dur: 4.0 },
  { top: "35%", left: "28%", size: 2, delay: 0.9,  color: "#f8f2e8", dur: 3.1 },
  { top: "22%", left: "50%", size: 3, delay: 1.4,  color: "#40dfc6", dur: 2.9 },
  { top: "42%", left: "92%", size: 2, delay: 0.5,  color: "#ffb340", dur: 3.5 },
  { top: "15%", left: "19%", size: 2, delay: 2.2,  color: "#f8f2e8", dur: 2.7 },
  { top: "50%", left: "12%", size: 2, delay: 1.8,  color: "#8e7ff5", dur: 3.3 },
  { top: "8%",  left: "33%", size: 3, delay: 0.7,  color: "#f8f2e8", dur: 4.2 },
];

export default function PixelStars({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {STAR_DEFS.map((s, i) => (
        <span
          key={i}
          className="pixel-crisp absolute"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}80`,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
