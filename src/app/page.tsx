import { SiteHeader } from "@/components/navigation/site-header";

import { EngineeringSection } from "../features/engineering/components/engineering-section";
import { engineeringDomains } from "@/features/engineering/content/engineering-domains";
import { EntranceSection } from "@/features/entrance/components/entrance-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <SiteHeader />

      <EntranceSection />

      <EngineeringSection domains={engineeringDomains} />
    </main>
  );
}
