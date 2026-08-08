import { forwardRef } from "react";

const PIXEL_CORNER =
  "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))";

const CTAButton = forwardRef(function CTAButton(
  { children, variant = "primary", as = "button", className = "", ...props },
  ref
) {
  const Comp = as;
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:outline-2";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-coral)] text-[var(--color-midnight)] hover:bg-[#f68969] shadow-[0_0_0_1px_rgba(240,120,90,0.4)]"
      : "bg-transparent text-[var(--color-cream)] border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]";

  return (
    <Comp
      ref={ref}
      className={`${base} ${styles} ${className}`}
      style={{ clipPath: PIXEL_CORNER, fontFamily: "var(--font-display)" }}
      {...props}
    >
      {children}
    </Comp>
  );
});

export default CTAButton;
