import type { AboutProfile } from "@/features/about/schemas/about-profile-schema";

interface AboutSectionProps {
  profile: AboutProfile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 py-24 md:px-10 md:py-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Experience → About handoff */}
        <div className="border-border-subtle grid gap-5 border-b pb-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center md:pb-10">
          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              04 / Experience
            </p>

            <p className="text-technical-300 mt-2 text-sm">Experience records the progression.</p>
          </div>

          <div aria-hidden="true" className="hidden items-center gap-3 sm:flex">
            <span className="bg-border-subtle h-px w-12 md:w-20" />

            <span className="text-burgundy-signal font-mono text-[0.625rem]">→</span>

            <span className="bg-border-subtle h-px w-12 md:w-20" />
          </div>

          <div className="sm:text-right">
            <p className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              05 / About
            </p>

            <p className="text-technical-100 mt-2 text-sm">About reveals the person behind it.</p>
          </div>
        </div>

        {/* Heading */}
        <header className="border-border-subtle grid gap-10 border-b py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-4">
            <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
              05 / About
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display max-w-6xl text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-tighter">
              Behind the
              <br />
              system.
            </h2>
          </div>
        </header>

        {/* Main statement */}
        <div className="border-border-subtle grid gap-12 border-b py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-3">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Personal record
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <p className="font-display text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
              {profile.statement}
            </p>

            <p className="text-technical-300 mt-10 max-w-3xl text-base leading-8 md:text-lg">
              {profile.secondaryStatement}
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="border-border-subtle border-b py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Operating principles
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              {profile.principles.map((principle, index) => (
                <article
                  key={principle.id}
                  className="border-border-subtle grid gap-6 border-t py-8 sm:grid-cols-[4rem_1fr]"
                >
                  <span className="text-burgundy-signal font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.035em] md:text-4xl">
                      {principle.title}
                    </h3>

                    <p className="text-technical-300 mt-5 max-w-2xl text-sm leading-7">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Direction */}
        <div className="border-border-subtle grid gap-12 border-b py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-3">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Direction
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <p className="font-display text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
              Frontend depth.
              <br />
              Backend expansion.
              <br />
              Complete systems.
            </p>

            <p className="text-technical-300 mt-10 max-w-3xl text-base leading-8">
              {profile.direction}
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="grid gap-12 pt-16 md:grid-cols-12 md:pt-24">
          <div className="md:col-span-3">
            <p className="text-technical-500 font-mono text-sm tracking-[0.16em] uppercase">
              Outside the stack
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {profile.interests.map((interest, index) => (
                <div key={interest.id} className="border-border-subtle border-t py-5 sm:pr-6">
                  <span className="text-technical-500 font-mono text-[0.5625rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-technical-100 mt-3 text-sm">{interest.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
