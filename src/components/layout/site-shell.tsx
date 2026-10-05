interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return <div className="bg-background text-foreground min-h-dvh">{children}</div>;
}
