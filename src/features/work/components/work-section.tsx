import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import { ProjectSystemRecord } from "@/features/work/components/project-system-record";
import type { Project } from "@/features/work/schemas/project-schema";
import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";
import { createProjectKnowledgeRecords } from "@/features/work/lib/project-knowledge";

interface WorkSectionProps {
  domains: EngineeringDomain[];
  knowledgeNodes: KnowledgeNode[];
  projects: Project[];
}

export function WorkSection({ domains, knowledgeNodes, projects }: WorkSectionProps) {
  const completedProjects = projects.filter((project) => project.status === "completed").length;

  const activeProjects = projects.filter((project) => project.status === "in-progress").length;

  const projectKnowledgeRecords = createProjectKnowledgeRecords(projects, knowledgeNodes);

  return (
    <section id="work" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 py-24 md:px-10 md:py-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Knowledge → Work handoff */}
        <div className="border-border-subtle grid gap-5 border-b pb-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center md:pb-10">
          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              02 / Knowledge
            </p>

            <p className="text-technical-300 mt-2 text-sm">Knowledge defines capability.</p>
          </div>

          <div aria-hidden="true" className="hidden items-center gap-3 sm:flex">
            <span className="bg-border-subtle h-px w-12 md:w-20" />

            <span className="text-burgundy-signal font-mono text-[0.625rem]">→</span>

            <span className="bg-border-subtle h-px w-12 md:w-20" />
          </div>

          <div className="sm:text-right">
            <p className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              03 / Work
            </p>

            <p className="text-technical-100 mt-2 text-sm">Work turns capability into evidence.</p>
          </div>
        </div>

        {/* Section heading */}
        <header className="border-border-subtle grid gap-10 border-b py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-4">
            <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
              03 / Work
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display max-w-6xl text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-tighter">
              Selected
              <br />
              systems.
            </h2>
          </div>
        </header>

        {/* Work metadata */}
        <div className="border-border-subtle grid gap-8 border-b py-8 sm:grid-cols-3 md:py-10">
          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Selected Work
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Completed
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">
              {String(completedProjects).padStart(2, "0")}
            </p>
          </div>

          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              In Progress
            </p>

            <p className="text-burgundy-signal mt-2 font-mono text-sm">
              {String(activeProjects).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Project systems */}
        <div>
          {projects.map((project, index) => (
            <ProjectSystemRecord
              key={project.slug}
              project={project}
              domains={domains}
              knowledge={projectKnowledgeRecords.get(project.slug)!}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
