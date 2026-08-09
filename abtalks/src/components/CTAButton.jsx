import { forwardRef, useState, useRef } from "react";

// Pixel-clipped CTA button with:
//  - press microinteraction
//  - on-click particle burst
//  - animated glow on primary

const PIXEL_CLIP =
  "polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))";

function Particles({ active }) {
  if (!active) return null;
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * 360;
        const dist = 28 + Math.random() * 14;
        const x = Math.cos((angle * Math.PI) / 180) * dist;
        const y = Math.sin((angle * Math.PI) / 180) * dist;
        return (
          <span
            key={i}
            className="pixel-crisp absolute left-1/2 top-1/2"
            style={{
              width: 4,
              height: 4,
              background: i % 2 === 0 ? "var(--color-amber)" : "var(--color-coral-bright)",
              animation: "particle-up 0.55s ease-out forwards",
              transform: `translate(${x}px, ${y}px)`,
              transformOrigin: "center",
            }}
          />
        );
      })}
    </span>
  );
}

const CTAButton = forwardRef(function CTAButton(
  { children, variant = "primary", as = "button", className = "", onClick, ...props },
  ref
) {
  const [particles, setParticles] = useState(false);
  const timer = useRef(null);

  const handleClick = (e) => {
    if (variant === "primary") {
      setParticles(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setParticles(false), 600);
    }
    onClick?.(e);
  };

  const Comp = as;

  if (variant === "primary") {
    return (
      <Comp
        ref={ref}
        className={`relative inline-flex items-center justify-center gap-2 overflow-visible px-7 py-4 text-base font-bold transition-all duration-150 active:scale-95 hover:scale-[1.03] ${className}`}
        style={{
          clipPath: PIXEL_CLIP,
          fontFamily: "var(--font-display)",
          background: "linear-gradient(135deg, var(--color-coral-bright) 0%, var(--color-coral) 60%, #e05028 100%)",
          color: "#100820",
          boxShadow: "0 0 0 2px rgba(240,120,80,0.35), 0 4px 24px rgba(240,100,60,0.4)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
        onClick={handleClick}
        {...props}
      >
        <Particles active={particles} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Comp>
    );
  }

  return (
    <Comp
      ref={ref}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden border border-[var(--color-border-bright)] px-7 py-4 text-base font-semibold text-[var(--color-cream)] transition-all duration-150 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] active:scale-95 ${className}`}
      style={{
        clipPath: PIXEL_CLIP,
        fontFamily: "var(--font-display)",
        background: "rgba(30,20,70,0.5)",
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Comp>
  );
});

export default CTAButton;
