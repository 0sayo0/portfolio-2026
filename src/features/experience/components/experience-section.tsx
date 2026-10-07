import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import { ExperienceRecord } from "@/features/experience/components/experience-record";
import type { Experience } from "@/features/experience/schemas/experience-schema";

interface ExperienceSectionProps {
  domains: EngineeringDomain[];
  experiences: Experience[];
}

export function ExperienceSection({ domains, experiences }: ExperienceSectionProps) {
  const currentExperiences = experiences.filter((experience) => experience.period.current).length;

  const consultingExperiences = experiences.filter(
    (experience) => experience.type === "consulting",
  ).length;

  return (
    <section id="experience" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 py-24 md:px-10 md:py-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Work → Experience handoff */}
        <div className="border-border-subtle grid gap-5 border-b pb-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center md:pb-10">
          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              03 / Work
            </p>

            <p className="text-technical-300 mt-2 text-sm">Work proves the systems.</p>
          </div>

          <div aria-hidden="true" className="hidden items-center gap-3 sm:flex">
            <span className="bg-border-subtle h-px w-12 md:w-20" />

            <span className="text-burgundy-signal font-mono text-[0.625rem]">→</span>

            <span className="bg-border-subtle h-px w-12 md:w-20" />
          </div>

          <div className="sm:text-right">
            <p className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              04 / Experience
            </p>

            <p className="text-technical-100 mt-2 text-sm">Experience reveals the progression.</p>
          </div>
        </div>

        {/* Section heading */}
        <header className="border-border-subtle grid gap-10 border-b py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-4">
            <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
              04 / Experience
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display max-w-6xl text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-tighter">
              Professional
              <br />
              sequence.
            </h2>
          </div>
        </header>

        {/* Experience metadata */}
        <div className="border-border-subtle grid gap-8 border-b py-8 sm:grid-cols-3 md:py-10">
          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Professional Records
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">
              {String(experiences.length).padStart(2, "0")}
            </p>
          </div>

          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Current
            </p>

            <p className="text-burgundy-signal mt-2 font-mono text-sm">
              {String(currentExperiences).padStart(2, "0")}
            </p>
          </div>

          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Consulting Records
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">
              {String(consultingExperiences).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Professional sequence intro */}
        <div className="border-border-subtle grid gap-10 border-b py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-3">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Career trajectory
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <p className="font-display text-3xl leading-[1.05] tracking-[-0.035em] md:text-5xl">
              From technical infrastructure to software systems.
            </p>

            <p className="text-technical-300 mt-6 max-w-2xl text-sm leading-7">
              A professional progression across infrastructure, software consulting, full-stack
              development and product-oriented software work.
            </p>
          </div>
        </div>

        {/* Experience records */}
        <div>
          {experiences.map((experience) => (
            <ExperienceRecord key={experience.id} experience={experience} domains={domains} />
          ))}
        </div>
      </div>
    </section>
  );
}
