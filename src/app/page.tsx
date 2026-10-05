import { SiteHeader } from "@/components/navigation/site-header";
import { EntranceSection } from "@/features/entrance/components/entrance-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <SiteHeader />
      <EntranceSection />
    </main>
  );
}
