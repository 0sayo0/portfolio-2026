import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const displayFont = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
