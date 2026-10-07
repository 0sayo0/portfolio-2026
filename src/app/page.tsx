import { SiteHeader } from "@/components/navigation/site-header";

import { EngineeringSection } from "../features/engineering/components/engineering-section";
import { engineeringDomains } from "@/features/engineering/content/engineering-domains";
import { EntranceSection } from "@/features/entrance/components/entrance-section";

import { KnowledgeSection } from "@/features/knowledge/components/knowledge-section";
import { knowledgeNodes, knowledgeStats } from "@/features/knowledge/content/knowledge-nodes";

import { WorkSection } from "@/features/work/components/work-section";
import { projects } from "@/features/work/content/projects";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { experiences } from "@/features/experience/content/experiences";

export default function HomePage() {
  return (
    <main id="main-content">
      <SiteHeader />

      <EntranceSection />

      <EngineeringSection domains={engineeringDomains} />

      <KnowledgeSection
        domains={engineeringDomains}
        nodes={knowledgeNodes}
        stats={knowledgeStats}
      />

      <WorkSection
        domains={engineeringDomains}
        knowledgeNodes={knowledgeNodes}
        projects={projects}
      />

      <ExperienceSection
        domains={engineeringDomains}
        experiences={experiences}
        knowledgeNodes={knowledgeNodes}
      />
    </main>
  );
}
