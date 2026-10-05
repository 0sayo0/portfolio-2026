import { CoreSystem } from "@/features/entrance/components/core-system";
import { siteConfig } from "@/lib/site-config";

export function EntranceSection() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="border-border-subtle mx-auto h-full w-full max-w-[1600px] border-x" />

        <div className="border-border-subtle absolute inset-x-0 top-[22%] border-t" />
        <div className="border-border-subtle absolute inset-x-0 bottom-[16%] border-t" />
      </div>

      <div className="relative mx-auto grid min-h-dvh w-full max-w-[1600px] grid-cols-4 grid-rows-[auto_1fr_auto] px-6 pt-28 pb-6 md:grid-cols-12 md:px-10 md:pt-32 md:pb-8 lg:px-[clamp(3rem,4vw,4.5rem)]">
        <div className="col-span-4 md:col-span-7">
          <p className="text-burgundy font-mono text-[0.6875rem] tracking-[0.18em] uppercase">
            {siteConfig.role}
          </p>
        </div>

        <div className="col-span-4 grid self-center md:col-span-12 md:grid-cols-12 md:items-center">
          <div className="relative z-10 md:col-span-8">
            <p className="text-technical-500 mb-4 font-mono text-[0.625rem] tracking-[0.2em] uppercase">
              Software / Systems / Interfaces
            </p>

            <h1 className="font-display text-[clamp(5rem,13vw,13rem)] leading-[0.68] tracking-[-0.055em]">
              Jonathan
              <br />
              <span className="ml-[0.08em]">Morales</span>
            </h1>
          </div>

          <div className="relative mt-12 flex items-center justify-center md:col-span-4 md:mt-0">
            <CoreSystem />
          </div>
        </div>

        <div className="border-border-subtle col-span-4 grid gap-6 border-t pt-5 md:col-span-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Primary Stack
            </p>

            <p className="text-technical-100 mt-2 text-sm">React / TypeScript / Node.js</p>
          </div>

          <div className="md:col-span-4 md:text-center">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Based
            </p>

            <p className="text-technical-100 mt-2 text-sm">{siteConfig.location}</p>
          </div>

          <div className="md:col-span-4 md:text-right">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Scroll to inspect
            </p>

            <p className="text-technical-100 mt-2 font-mono text-xs">↓ 001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
