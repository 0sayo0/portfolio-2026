import { SiteHeader } from "@/components/navigation/site-header";
import { EngineeringPrelude } from "@/features/engineering/components/engineering-prelude";
import { EntranceSection } from "@/features/entrance/components/entrance-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <SiteHeader />
      <EntranceSection />

      <EngineeringPrelude />
    </main>
  );
}
