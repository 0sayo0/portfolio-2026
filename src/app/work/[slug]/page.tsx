import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { engineeringDomains } from "@/features/engineering/content/engineering-domains";
import { knowledgeNodes } from "@/features/knowledge/content/knowledge-nodes";
import { ProjectCaseStudy } from "@/features/work/components/project-case-study";
import { getProjectCaseStudyBySlug } from "@/features/work/content/project-case-studies";
import { getProjectBySlug, projects } from "@/features/work/content/projects";
import { createProjectKnowledgeRecord } from "@/features/work/lib/project-knowledge";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} — Jonathan Morales`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  const caseStudy = getProjectCaseStudyBySlug(slug);

  if (!project || !caseStudy) {
    notFound();
  }

  const knowledge = createProjectKnowledgeRecord(project, knowledgeNodes);

  return (
    <ProjectCaseStudy
      project={project}
      caseStudy={caseStudy}
      domains={engineeringDomains}
      knowledge={knowledge}
    />
  );
}
