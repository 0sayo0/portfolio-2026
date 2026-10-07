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
import { AboutSection } from "@/features/about/components/about-section";
import { aboutProfile } from "@/features/about/content/about-profile";
import { ContactSection } from "@/features/contact/components/contact-section";
import { contactProfile } from "@/features/contact/content/contact-profile";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <div id="main-content" tabIndex={-1} className="outline-none">
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

        <AboutSection profile={aboutProfile} />

        <ContactSection profile={contactProfile} />
      </div>
    </main>
  );
}
