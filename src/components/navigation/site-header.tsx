import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 items-center px-6 py-6 md:grid-cols-3 md:px-10 md:py-8 lg:px-[clamp(3rem,4vw,4.5rem)]">
        <Link
          href="/"
          className="justify-self-start font-mono text-xs font-medium tracking-[0.18em] uppercase"
        >
          JM.
        </Link>

        <span className="text-technical-300 hidden justify-self-center font-mono text-[0.6875rem] tracking-[0.18em] uppercase md:block">
          00 / Entrance
        </span>

        <Link
          href="/index"
          className="text-technical-300 hover:text-foreground justify-self-end font-mono text-xs tracking-[0.18em] uppercase transition-colors"
        >
          Index
        </Link>
      </div>
    </header>
  );
}
