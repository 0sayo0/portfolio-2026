import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import type { Experience } from "@/features/experience/schemas/experience-schema";

interface ExperienceRecordProps {
  experience: Experience;
  domains: EngineeringDomain[];
}

function getPeriodLabel(experience: Experience) {
  const end = experience.period.current ? "Present" : experience.period.end;

  return `${experience.period.start} — ${end}`;
}

function getTypeLabel(type: Experience["type"]) {
  return type === "consulting" ? "Consulting" : "Employment";
}

function getModeLabel(mode: Experience["mode"]) {
  switch (mode) {
    case "remote":
      return "Remote";

    case "hybrid":
      return "Hybrid";

    case "onsite":
      return "On-site";
  }
}

export function ExperienceRecord({ experience, domains }: ExperienceRecordProps) {
  return (
    <article className="border-border-subtle relative border-b py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        {/* Sequence / period */}
        <div className="md:col-span-2">
          <div className="flex items-start justify-between gap-6 md:block">
            <div>
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Record / {experience.index}
              </p>

              <p className="text-technical-300 mt-4 font-mono text-[0.625rem] leading-5 tracking-[0.12em] uppercase">
                {getPeriodLabel(experience)}
              </p>
            </div>

            <div className="flex items-center gap-2 md:mt-6">
              <span
                className={`size-1.5 rounded-full ${
                  experience.period.current ? "bg-burgundy-signal" : "bg-technical-500"
                }`}
              />

              <span
                className={`font-mono text-[0.625rem] tracking-[0.16em] uppercase ${
                  experience.period.current ? "text-burgundy-signal" : "text-technical-500"
                }`}
              >
                {experience.period.current ? "Current" : "Resolved"}
              </span>
            </div>
          </div>
        </div>

        {/* Professional identity */}
        <div className="md:col-span-4">
          <p className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            {getTypeLabel(experience.type)}
          </p>

          <h3 className="font-display mt-5 text-4xl leading-[0.95] tracking-[-0.04em] md:text-5xl">
            {experience.company}
          </h3>

          <p className="text-technical-100 mt-5 text-base">{experience.role}</p>

          <div className="text-technical-500 mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.625rem] tracking-[0.12em] uppercase">
            <span>{experience.location}</span>

            <span aria-hidden="true">/</span>

            <span>{getModeLabel(experience.mode)}</span>
          </div>

          <p className="text-technical-300 mt-8 max-w-xl text-sm leading-7">{experience.summary}</p>
        </div>

        {/* Responsibilities */}
        <div className="md:col-span-4">
          <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Professional signals
          </p>

          <div className="mt-5">
            {experience.responsibilities.map((responsibility, index) => (
              <div
                key={responsibility}
                className="border-border-subtle grid grid-cols-[2.5rem_1fr] gap-3 border-t py-4"
              >
                <span className="text-burgundy-signal font-mono text-[0.625rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-technical-300 text-sm leading-6">{responsibility}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering coverage */}
        <div className="md:col-span-2">
          <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Domain signal
          </p>

          <div className="border-border-subtle mt-5 border-y">
            {domains.map((domain) => {
              const isActive = experience.domains.includes(domain.id);

              return (
                <div
                  key={domain.id}
                  className="border-border-subtle flex items-center justify-between border-b py-3 last:border-b-0"
                >
                  <span
                    className={`font-mono text-xs tracking-[0.18em] ${
                      isActive ? "text-burgundy-signal" : "text-technical-700"
                    }`}
                  >
                    {domain.code}
                  </span>

                  <span
                    className={`size-1.5 rounded-full ${
                      isActive ? "bg-burgundy-signal" : "bg-border-subtle"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <div className="border-border-subtle mt-6 flex items-center justify-between border-t pt-4">
            <span className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
              Knowledge
            </span>

            <span className="text-technical-300 font-mono text-[0.625rem]">
              {String(experience.knowledgeNodeIds.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
