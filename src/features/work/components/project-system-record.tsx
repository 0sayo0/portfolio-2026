import Link from "next/link";

import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import { ProjectSystemVisual } from "@/features/work/components/project-system-visual";
import type { Project } from "@/features/work/schemas/project-schema";
import type { ProjectKnowledgeRecord } from "@/features/work/lib/project-knowledge";

interface ProjectSystemRecordProps {
  domains: EngineeringDomain[];
  project: Project;
  knowledge: ProjectKnowledgeRecord;
  reverse?: boolean;
}

function getStatusLabel(status: Project["status"]) {
  return status === "completed" ? "Completed" : "In progress";
}

export function ProjectSystemRecord({
  domains,
  project,
  knowledge,
  reverse = false,
}: ProjectSystemRecordProps) {
  // const projectDomains = project.domains
  //   .map((domainId) => domains.find((domain) => domain.id === domainId))
  //   .filter((domain): domain is EngineeringDomain => domain !== undefined);

  const featuredKnowledgeNodes = knowledge.nodes.slice(0, 7);

  return (
    <article className="border-border-subtle border-b py-16 md:py-24">
      {/* Record header */}
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-2">
          <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Project / {project.index}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span
              className={`size-1.5 rounded-full ${
                project.status === "completed" ? "bg-technical-300" : "bg-burgundy-signal"
              }`}
            />

            <span className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              {getStatusLabel(project.status)}
            </span>
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="font-display text-6xl leading-[0.85] tracking-tighter md:text-8xl">
            {project.shortName}
          </h3>
        </div>

        <div className="md:col-span-3 md:text-right">
          <p className="text-technical-300 text-sm leading-7">{project.tagline}</p>
        </div>
      </div>

      {/* Main system composition */}
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className={reverse ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
          <ProjectSystemVisual project={project} />
        </div>

        <div className={reverse ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
          {/* Engineering fingerprint */}
          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Engineering fingerprint
            </p>

            <div className="border-border-subtle mt-5 border-y">
              {domains.map((domain) => {
                const isActive = project.domains.includes(domain.id);

                return (
                  <div
                    key={domain.id}
                    className="border-border-subtle flex items-center justify-between border-b py-3 last:border-b-0"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-xs tracking-[0.18em] ${
                          isActive ? "text-burgundy-signal" : "text-technical-700"
                        }`}
                      >
                        {domain.code}
                      </span>

                      <span
                        className={`text-sm ${
                          isActive ? "text-technical-100" : "text-technical-700"
                        }`}
                      >
                        {domain.name}
                      </span>
                    </div>

                    <span
                      className={`size-1.5 rounded-full ${
                        isActive ? "bg-burgundy-signal" : "bg-border-subtle"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Architecture */}
          <div className="mt-10">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Architecture
            </p>

            <p className="text-technical-100 mt-3 text-sm">{project.architecture.label}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
              {project.architecture.flow.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-technical-300 font-mono text-[0.625rem] tracking-[0.12em] uppercase">
                    {step}
                  </span>

                  {index < project.architecture.flow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-burgundy-signal font-mono text-[0.625rem]"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge */}
          <div className="mt-10">
            <div className="flex items-end justify-between gap-6">
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Knowledge nodes
              </p>

              <span className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em]">
                {String(knowledge.nodes.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
              {featuredKnowledgeNodes.map((node) => (
                <span
                  key={node.id}
                  className={`border-b pb-1 text-sm ${
                    node.domains.length > 1
                      ? "border-burgundy/60 text-foreground"
                      : "border-border-subtle text-technical-300"
                  }`}
                >
                  {node.label}
                </span>
              ))}
            </div>

            <div className="border-border-subtle mt-6 flex items-center justify-between border-t pt-4">
              <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Cross-domain nodes
              </span>

              <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em]">
                {String(knowledge.crossDomainNodes.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering signals */}
      <div className="border-border-subtle mt-12 grid gap-8 border-t pt-10 md:grid-cols-12">
        <div className="md:col-span-2">
          <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Engineering signals
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:col-span-7">
          {project.highlights.slice(0, 4).map((highlight, index) => (
            <div key={highlight} className="border-border-subtle border-t pt-4">
              <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.14em]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-technical-300 mt-3 text-sm leading-6">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col items-start gap-4 md:col-span-3 md:items-end">
          <Link
            href={`/work/${project.slug}`}
            className="group/link border-burgundy-signal/60 text-foreground hover:border-foreground focus-visible:border-foreground inline-flex items-center gap-3 border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors duration-200 outline-none motion-reduce:transition-none"
          >
            Inspect system
            <span
              aria-hidden="true"
              className="text-burgundy-signal transition-transform duration-200 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
            >
              ↗
            </span>
          </Link>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="group/link border-border-subtle text-technical-300 hover:text-foreground focus-visible:text-foreground inline-flex items-center gap-3 border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors duration-200 outline-none motion-reduce:transition-none"
            >
              Live product
              <span aria-hidden="true" className="text-burgundy-signal">
                ↗
              </span>
            </a>
          )}

          {project.links.repository && (
            <a
              href={project.links.repository}
              target="_blank"
              rel="noreferrer"
              className="group/link border-border-subtle text-technical-300 hover:text-foreground focus-visible:text-foreground inline-flex items-center gap-3 border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors duration-200 outline-none motion-reduce:transition-none"
            >
              {project.status === "in-progress" ? "View development" : "Source"}

              <span aria-hidden="true" className="text-burgundy-signal">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
