import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Index",
};

export default function IndexPage() {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-[clamp(3rem,4vw,4.5rem)]">
      <header className="border-border-subtle border-b pb-8">
        <p className="text-burgundy font-mono text-xs tracking-[0.18em] uppercase">Index / 00</p>

        <h1 className="font-display mt-5 text-6xl tracking-[-0.03em] md:text-8xl">
          {siteConfig.name}
        </h1>

        <p className="text-technical-300 mt-4">{siteConfig.role}</p>
      </header>
    </main>
  );
}
