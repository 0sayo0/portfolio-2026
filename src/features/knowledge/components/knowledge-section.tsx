import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";

interface KnowledgeSectionProps {
  domains: EngineeringDomain[];
  nodes: KnowledgeNode[];
  stats: {
    nodes: number;
    domains: number;
    crossDomainNodes: number;
  };
}

export function KnowledgeSection({ domains, nodes, stats }: KnowledgeSectionProps) {
  return (
    <section id="knowledge" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 py-24 md:px-10 md:py-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Section heading */}
        <header className="border-border-subtle grid gap-10 border-b pb-16 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-4">
            <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
              02 / Knowledge
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display max-w-6xl text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-tighter">
              Knowledge
              <br />
              is relational.
            </h2>
          </div>
        </header>

        {/* System metadata */}
        <div className="border-border-subtle grid gap-8 border-b py-8 sm:grid-cols-3 md:py-10">
          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Knowledge Nodes
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">
              {String(stats.nodes).padStart(2, "0")}
            </p>
          </div>

          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Engineering Domains
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">
              {String(stats.domains).padStart(2, "0")}
            </p>
          </div>

          <div>
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Cross-domain Nodes
            </p>

            <p className="text-burgundy-signal mt-2 font-mono text-sm">
              {String(stats.crossDomainNodes).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Knowledge clusters */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => {
            const domainNodes = nodes.filter((node) => node.domains.includes(domain.id));

            return (
              <article
                key={domain.id}
                className="border-border-subtle border-b py-10 md:px-8 md:py-12 md:odd:border-r xl:border-r xl:nth-[3n]:border-r-0"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
                      {domain.index}
                    </span>

                    <span className="text-burgundy-signal font-mono text-xs tracking-[0.18em]">
                      {domain.code}
                    </span>
                  </div>

                  <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
                    {String(domainNodes.length).padStart(2, "0")} NODES
                  </span>
                </div>

                <h3 className="font-display mt-8 text-4xl tracking-[-0.035em] md:text-5xl">
                  {domain.name}
                </h3>

                <div className="mt-10 flex flex-wrap gap-x-5 gap-y-4">
                  {domainNodes.map((node) => {
                    const isCrossDomain = node.domains.length > 1;

                    return (
                      <span
                        key={node.id}
                        className={`border-b pb-1 text-sm ${
                          isCrossDomain
                            ? "border-burgundy/60 text-foreground"
                            : "border-border-subtle text-technical-300"
                        }`}
                      >
                        {node.label}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
