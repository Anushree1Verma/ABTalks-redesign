import CTAButton from "./CTAButton";

// Wordmark logo — 2×2 pixel grid with brand colors, a recognizable "stamp".
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="ABTalks home">
      <span
        className="pixel-crisp relative h-7 w-7 shrink-0 border border-[var(--color-border-bright)]/60 transition-transform group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #1a0f40, #2a1865)",
          clipPath: "polygon(0 4px,4px 4px,4px 0,calc(100%-4px) 0,calc(100%-4px) 4px,100% 4px,100% calc(100%-4px),calc(100%-4px) calc(100%-4px),calc(100%-4px) 100%,4px 100%,4px calc(100%-4px),0 calc(100%-4px))",
        }}
        aria-hidden="true"
      >
        {/* 4-square pixel icon */}
        <span className="absolute top-[4px] left-[4px] h-[10px] w-[10px] bg-[var(--color-coral)]" />
        <span className="absolute top-[4px] right-[4px] h-[10px] w-[10px] bg-[var(--color-violet)]" />
        <span className="absolute bottom-[4px] left-[4px] h-[10px] w-[10px] bg-[var(--color-teal)]" />
        <span className="absolute bottom-[4px] right-[4px] h-[10px] w-[10px] bg-[var(--color-amber)]" />
      </span>
      <span
        className="text-lg font-bold tracking-tight text-[var(--color-cream)] leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        AB<span style={{ color: "var(--color-coral-bright)" }}>Talks</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: "rgba(12,6,30,0.82)",
        borderBottom: "1px solid rgba(90,68,160,0.35)",
      }}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <Logo />

        <div className="flex items-center gap-3">
          <a
            href="#how-it-works"
            className="hidden text-sm text-[var(--color-slate)] hover:text-[var(--color-cream)] transition-colors sm:block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How it works
          </a>
          <CTAButton as="a" href="#start" variant="primary" className="!px-5 !py-2.5 !text-sm">
            Start Quest
          </CTAButton>
        </div>
      </nav>
    </header>
  );
}
