import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";

interface EngineeringSectionProps {
  domains: EngineeringDomain[];
}

export function EngineeringSection({ domains }: EngineeringSectionProps) {
  return (
    <section id="engineering" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 py-24 md:px-10 md:py-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        <header className="border-border-subtle grid gap-10 border-b pb-16 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-4">
            <p className="text-burgundy font-mono text-[0.6875rem] tracking-[0.18em] uppercase">
              01 / Engineering
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-tighter">
              I build
              <br />
              web systems.
            </h2>
          </div>
        </header>

        <div className="divide-border-subtle divide-y">
          {domains.map((domain) => (
            <article key={domain.id} className="grid gap-8 py-10 md:grid-cols-12 md:gap-6 md:py-14">
              <div className="flex items-start gap-5 md:col-span-2">
                <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
                  {domain.index}
                </span>

                <span className="text-burgundy font-mono text-xs tracking-[0.18em]">
                  {domain.code}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="font-display text-4xl tracking-[-0.035em] md:text-5xl">
                  {domain.name}
                </h3>
              </div>

              <div className="md:col-span-4">
                <p className="text-technical-300 max-w-xl text-sm leading-7 md:text-base">
                  {domain.statement}
                </p>
              </div>

              <div className="md:col-span-3">
                <p className="text-technical-500 mb-3 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
                  Capabilities
                </p>

                <ul className="space-y-1.5">
                  {domain.capabilities.slice(0, 4).map((capability) => (
                    <li key={capability} className="text-technical-100 text-sm">
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
