import CTAButton from "./CTAButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/70 bg-[var(--color-midnight)]/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2">
          <span
            className="pixel-crisp grid h-6 w-6 grid-cols-2 grid-rows-2 gap-[2px]"
            aria-hidden="true"
          >
            <span className="bg-[var(--color-coral)]" />
            <span className="bg-[var(--color-violet)]" />
            <span className="bg-[var(--color-teal)]" />
            <span className="bg-[var(--color-cream)]" />
          </span>
          <span
            className="text-base font-semibold tracking-tight text-[var(--color-cream)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AB<span style={{ color: "var(--color-coral)" }}>Talks</span>
          </span>
        </a>

        <CTAButton as="a" href="#start" variant="primary" className="!px-4 !py-2 !text-xs">
          Start Quest
        </CTAButton>
      </nav>
    </header>
  );
}
