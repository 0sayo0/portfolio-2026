import Link from "next/link";

interface SiteHeaderProps {
  section?: string;
}

export function SiteHeader({ section = "00 / Entrance" }: SiteHeaderProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto grid w-full max-w-400 grid-cols-2 items-center px-6 py-6 md:grid-cols-3 md:px-10 md:py-8 lg:px-[clamp(3rem,4vw,4.5rem)]">
        <Link
          href="/"
          aria-label="Jonathan Morales — Home"
          className="group pointer-events-auto relative justify-self-start font-mono text-xs font-medium tracking-[0.18em] uppercase"
        >
          <span>JM.</span>

          <span
            aria-hidden="true"
            className="bg-burgundy absolute -bottom-2 left-0 h-px w-0 transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full"
          />
        </Link>

        <span className="text-technical-300 hidden justify-self-center font-mono text-[0.6875rem] tracking-[0.18em] uppercase md:block">
          {section}
        </span>

        <Link
          href="/index"
          className="group text-technical-300 hover:text-foreground focus-visible:text-foreground pointer-events-auto relative justify-self-end font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300"
        >
          <span>Index</span>

          <span
            aria-hidden="true"
            className="bg-burgundy absolute right-0 -bottom-2 h-px w-0 transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full"
          />
        </Link>
      </div>
    </header>
  );
}
