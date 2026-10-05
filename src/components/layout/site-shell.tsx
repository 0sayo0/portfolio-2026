import { SkipLink } from "@/components/navigation/skip-link";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      <SkipLink />

      {children}
    </div>
  );
}
