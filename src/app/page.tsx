import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <section className="mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col justify-between px-6 py-6 md:px-10 md:py-8 lg:px-[clamp(3rem,4vw,4.5rem)]">
        <header className="text-technical-300 flex items-center justify-between font-mono text-xs tracking-[0.18em] uppercase">
          <span>JM.</span>

          <span>00 / Entry</span>
        </header>

        <div>
          <p className="text-burgundy mb-5 font-mono text-xs tracking-[0.18em] uppercase">
            {siteConfig.role}
          </p>

          <h1 className="font-display text-[clamp(5rem,14vw,13rem)] leading-[0.72] tracking-[-0.04em]">
            Jonathan
            <br />
            Morales
          </h1>
        </div>

        <footer className="border-border-subtle text-technical-300 flex flex-col gap-2 border-t pt-5 font-mono text-xs tracking-[0.12em] uppercase md:flex-row md:items-center md:justify-between">
          <span>React / TypeScript / Node.js</span>

          <span>
            {siteConfig.location} — {siteConfig.year}
          </span>
        </footer>
      </section>
    </main>
  );
}
