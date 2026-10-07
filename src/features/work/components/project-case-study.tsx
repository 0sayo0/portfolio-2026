import Link from "next/link";

import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import type { ProjectKnowledgeRecord } from "@/features/work/lib/project-knowledge";
import { ProjectSystemVisual } from "@/features/work/components/project-system-visual";
import type { ProjectCaseStudy } from "@/features/work/schemas/project-case-study-schema";
import type { Project } from "@/features/work/schemas/project-schema";
import { CaseStudyLine } from "@/features/work/components/case-study-line";
import { CaseStudyReveal } from "@/features/work/components/case-study-reveal";

interface ProjectCaseStudyProps {
  project: Project;
  caseStudy: ProjectCaseStudy;
  domains: EngineeringDomain[];
  knowledge: ProjectKnowledgeRecord;
}

function getStatusLabel(status: Project["status"]) {
  return status === "completed" ? "Completed" : "In progress";
}

export function ProjectCaseStudy({
  project,
  caseStudy,
  domains,
  knowledge,
}: ProjectCaseStudyProps) {
  const projectDomains = domains.filter((domain) => project.domains.includes(domain.id));

  return (
    <main className="bg-background text-foreground min-h-dvh">
      {/* Case study navigation */}
      <header className="border-border-subtle bg-background/90 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-400 items-center justify-between px-6 md:px-10 lg:px-[clamp(3rem,4vw,4.5rem)]">
          <Link
            href="/"
            className="focus-visible:text-burgundy-signal font-mono text-xs font-semibold tracking-[0.18em] uppercase outline-none"
          >
            JM.
          </Link>

          <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.18em] uppercase">
            Project / {project.index}
          </span>

          <Link
            href="/#work"
            className="hover:text-burgundy-signal focus-visible:text-burgundy-signal font-mono text-[0.625rem] tracking-[0.18em] uppercase transition-colors outline-none motion-reduce:transition-none"
          >
            Work
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-400 px-6 md:px-10 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Hero */}
        <section className="border-border-subtle border-b py-16 md:py-24">
          <CaseStudyReveal amount={0.4} className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4">
                <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                  Project / {project.index}
                </p>

                <span className="bg-border-subtle h-px w-8" />

                <div className="flex items-center gap-2">
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

              <h1 className="font-display mt-10 text-[clamp(5rem,11vw,11rem)] leading-[0.75] tracking-[-0.055em]">
                {project.shortName}
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="text-technical-100 max-w-lg text-lg leading-8">{project.tagline}</p>

              <p className="text-technical-300 mt-6 max-w-lg text-sm leading-7">
                {project.summary}
              </p>
            </div>
          </CaseStudyReveal>

          <CaseStudyReveal delay={0.1} amount={0.12} distance={28} className="mt-16">
            <ProjectSystemVisual project={project} />
          </CaseStudyReveal>
        </section>

        {/* System metadata */}
        <section className="border-border-subtle border-b py-8">
          <CaseStudyReveal amount={0.5} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Status
              </p>

              <p className="text-technical-100 mt-2 text-sm">{getStatusLabel(project.status)}</p>
            </div>

            <div>
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Domains
              </p>

              <p className="text-technical-100 mt-2 font-mono text-sm">
                {String(projectDomains.length).padStart(2, "0")}
              </p>
            </div>

            <div>
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Knowledge Nodes
              </p>

              <p className="text-technical-100 mt-2 font-mono text-sm">
                {String(knowledge.nodes.length).padStart(2, "0")}
              </p>
            </div>

            <div>
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Cross-domain
              </p>

              <p className="text-burgundy-signal mt-2 font-mono text-sm">
                {String(knowledge.crossDomainNodes.length).padStart(2, "0")}
              </p>
            </div>
          </CaseStudyReveal>
        </section>

        {/* 01 — Context */}
        <section className="border-border-subtle border-b py-20 md:py-28">
          <CaseStudyReveal amount={0.2} className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                01 / System Context
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                Why this
                <br />
                system exists.
              </h2>

              <p className="text-technical-300 mt-10 text-base leading-8 md:text-lg">
                {caseStudy.context}
              </p>

              <div className="border-border-subtle mt-10 border-l pl-6">
                <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Problem
                </p>

                <p className="text-technical-100 mt-3 text-sm leading-7">{project.problem}</p>
              </div>
            </div>
          </CaseStudyReveal>
        </section>

        {/* 02 — Architecture */}
        <section className="border-border-subtle border-b py-20 md:py-28">
          <CaseStudyReveal amount={0.25} className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                02 / Architecture
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                System
                <br />
                structure.
              </h2>

              <p className="text-technical-300 mt-10 max-w-3xl text-base leading-8">
                {caseStudy.architectureSummary}
              </p>
            </div>
          </CaseStudyReveal>

          <div className="border-border-subtle mt-16 border-y">
            {project.architecture.flow.map((step, index) => (
              <CaseStudyReveal key={step} delay={index * 0.045} amount={0.35}>
                <div className="grid gap-4 py-5 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
                  <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-technical-100 text-sm">{step}</span>

                  {index < project.architecture.flow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-burgundy-signal hidden font-mono text-xs sm:block"
                    >
                      ↓
                    </span>
                  )}
                </div>

                {index < project.architecture.flow.length - 1 && (
                  <CaseStudyLine delay={index * 0.045} />
                )}
              </CaseStudyReveal>
            ))}
          </div>
        </section>

        {/* 03 — Runtime */}
        <section className="border-border-subtle border-b py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                03 / Runtime Flow
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                From input
                <br />
                to outcome.
              </h2>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3">
            {caseStudy.runtimeFlow.map((step, index) => (
              <CaseStudyReveal key={step.label} delay={(index % 3) * 0.06} amount={0.25}>
                <article
                  key={step.label}
                  className="border-border-subtle border-b py-8 md:border-r md:px-8 xl:nth-[3n]:border-r-0"
                >
                  <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display mt-6 text-3xl tracking-[-0.035em]">{step.label}</h3>

                  <p className="text-technical-300 mt-5 text-sm leading-7">{step.description}</p>
                </article>
              </CaseStudyReveal>
            ))}
          </div>
        </section>

        {/* 04 — Decisions */}
        <section className="border-border-subtle border-b py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                04 / Decisions
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                Decisions,
                <br />
                not defaults.
              </h2>
            </div>
          </div>

          <div className="mt-16">
            {caseStudy.decisions.map((decision, index) => (
              <CaseStudyReveal key={decision.title} amount={0.3}>
                <article
                  key={decision.title}
                  className="border-border-subtle grid gap-6 border-t py-8 md:grid-cols-12"
                >
                  <div className="md:col-span-2">
                    <span className="text-burgundy-signal font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl tracking-[-0.035em]">{decision.title}</h3>
                  </div>

                  <div className="md:col-span-5 md:col-start-8">
                    <p className="text-technical-300 text-sm leading-7">{decision.rationale}</p>
                  </div>
                </article>
              </CaseStudyReveal>
            ))}
          </div>
        </section>

        {/* 05 — Knowledge Evidence */}
        <section className="border-border-subtle border-b py-20 md:py-28">
          <CaseStudyReveal amount={0.25} className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                05 / Knowledge Evidence
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                Knowledge,
                <br />
                applied.
              </h2>
            </div>
          </CaseStudyReveal>

          <CaseStudyReveal delay={0.08} amount={0.2} className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Engineering Domains
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

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="flex items-end justify-between gap-6">
                <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Validated Knowledge Nodes
                </p>

                <span className="text-technical-300 font-mono text-xs">
                  {String(knowledge.nodes.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-4">
                {knowledge.nodes.map((node) => (
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
            </div>
          </CaseStudyReveal>
        </section>

        {/* 06 — Quality */}
        <section className="border-border-subtle border-b py-20 md:py-28">
          <CaseStudyReveal amount={0.25} className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                06 / Quality
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                Built to
                <br />
                hold up.
              </h2>

              <p className="text-technical-300 mt-10 max-w-3xl text-base leading-8">
                {caseStudy.quality.summary}
              </p>
            </div>
          </CaseStudyReveal>

          <CaseStudyReveal
            delay={0.08}
            amount={0.25}
            className="bg-border-subtle mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
          >
            {caseStudy.quality.metrics.map((metric) => (
              <div key={metric.label} className="bg-background p-6">
                <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  {metric.label}
                </p>

                <p className="font-display mt-5 text-3xl tracking-[-0.035em]">{metric.value}</p>
              </div>
            ))}
          </CaseStudyReveal>

          <CaseStudyReveal
            delay={0.12}
            amount={0.2}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {caseStudy.quality.signals.map((signal, index) => (
              <div key={signal} className="border-border-subtle border-t pt-4">
                <span className="text-burgundy-signal font-mono text-[0.625rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-technical-300 mt-3 text-sm leading-6">{signal}</p>
              </div>
            ))}
          </CaseStudyReveal>
        </section>

        {/* 07 — Outcome */}
        <section className="py-20 md:py-28">
          <CaseStudyReveal amount={0.25} className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                07 / Outcome
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                System
                <br />
                result.
              </h2>

              <p className="text-technical-100 mt-10 text-lg leading-9">{caseStudy.outcome}</p>

              {caseStudy.currentState && (
                <div className="border-border-subtle mt-10 border-l pl-6">
                  <p className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                    Current state
                  </p>

                  <p className="text-technical-300 mt-3 text-sm leading-7">
                    {caseStudy.currentState}
                  </p>
                </div>
              )}

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} live product in a new tab`}
                    className="border-burgundy-signal/60 hover:border-foreground focus-visible:border-foreground inline-flex items-center gap-3 border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors"
                  >
                    Live product
                    <span className="text-burgundy-signal">↗</span>
                  </a>
                )}

                {project.links.repositories.map((repository) => (
                  <a
                    key={repository.url}
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} ${repository.label} repository in a new tab`}
                    className="border-border-subtle text-technical-300 hover:text-foreground inline-flex items-center gap-3 border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors"
                  >
                    {project.status === "in-progress" ? "View development" : repository.label}

                    <span className="text-burgundy-signal">↗</span>
                  </a>
                ))}

                <Link
                  href="/#work"
                  className="border-border-subtle text-technical-300 hover:text-foreground inline-flex items-center gap-3 border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors"
                >
                  Back to work
                  <span className="text-burgundy-signal">←</span>
                </Link>
              </div>
            </div>
          </CaseStudyReveal>
        </section>
      </div>
    </main>
  );
}
