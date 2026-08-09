import { useEffect, useRef } from "react";

// Desktop-only custom pixel cursor with short trail.
// Uses requestAnimationFrame for smooth 60fps tracking, not React state updates.
// Disabled automatically on touch devices and when prefers-reduced-motion is set.

const TRAIL_LENGTH = 5;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const pos = useRef({ x: -100, y: -100 });
  const trailPos = useRef(Array(TRAIL_LENGTH).fill({ x: -100, y: -100 }));
  const isHovering = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Don't activate on touch-primary devices or reduced-motion
    const mq = window.matchMedia("(pointer: coarse)");
    const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || rmq.matches) return;

    // Hide native cursor
    document.body.style.cursor = "none";

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e) => {
      if (e.target.closest("a,button")) {
        isHovering.current = true;
        if (cursorRef.current) cursorRef.current.setAttribute("data-hover", "1");
      }
    };
    const onLeave = (e) => {
      if (e.target.closest("a,button")) {
        isHovering.current = false;
        if (cursorRef.current) cursorRef.current.removeAttribute("data-hover");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter, { passive: true });
    document.addEventListener("mouseout", onLeave, { passive: true });

    const lerp = (a, b, t) => a + (b - a) * t;

    let prev = { x: -100, y: -100 };
    const tick = () => {
      // Smooth follow
      prev.x = lerp(prev.x, pos.current.x, 0.28);
      prev.y = lerp(prev.y, pos.current.y, 0.28);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${prev.x - 4}px, ${prev.y - 4}px)`;
      }

      // Trail — shift old positions
      const trail = trailPos.current;
      for (let i = TRAIL_LENGTH - 1; i > 0; i--) {
        trail[i] = { ...trail[i - 1] };
      }
      trail[0] = { ...prev };

      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = trail[i];
        const alpha = 1 - (i + 1) / (TRAIL_LENGTH + 1);
        el.style.transform = `translate(${t.x - 2}px, ${t.y - 2}px)`;
        el.style.opacity = alpha * 0.6;
      });

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <span
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="custom-cursor pixel-crisp"
          style={{
            width: Math.max(2, 4 - i),
            height: Math.max(2, 4 - i),
            background: `hsl(${265 + i * 12}, 80%, 75%)`,
            borderRadius: 0,
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9998,
            mixBlendMode: "screen",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main cursor — pixel arrow shape as a tiny SVG */}
      <svg
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          pointerEvents: "none",
          zIndex: 9999,
          overflow: "visible",
        }}
        viewBox="0 0 8 8"
        aria-hidden="true"
      >
        {/* Pixel arrow pointer */}
        <rect x="0" y="0" width="2" height="8" fill="var(--color-coral-bright)" />
        <rect x="2" y="0" width="2" height="6" fill="var(--color-coral-bright)" />
        <rect x="4" y="0" width="2" height="4" fill="var(--color-coral-bright)" />
        <rect x="6" y="0" width="2" height="2" fill="var(--color-coral-bright)" />
        {/* Shadow */}
        <rect x="1" y="1" width="2" height="8" fill="#00000040" />
        <rect x="3" y="1" width="2" height="6" fill="#00000040" />
      </svg>
    </>
  );
}
