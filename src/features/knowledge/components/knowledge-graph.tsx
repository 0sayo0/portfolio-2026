import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";
import { createKnowledgeGraphLayout } from "@/features/knowledge/lib/knowledge-graph-layout";

interface KnowledgeGraphProps {
  domains: EngineeringDomain[];
  nodes: KnowledgeNode[];
}

export function KnowledgeGraph({ domains, nodes }: KnowledgeGraphProps) {
  const graph = createKnowledgeGraphLayout(domains, nodes);

  const crossDomainNodes = nodes.filter((node) => node.domains.length > 1);

  return (
    <section
      aria-labelledby="knowledge-topology-title"
      className="border-border-subtle border-b py-10 md:py-14"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Relationship Graph
          </p>

          <h3
            id="knowledge-topology-title"
            className="font-display mt-3 text-3xl tracking-[-0.035em] md:text-4xl"
          >
            Knowledge topology
          </h3>
        </div>

        <p className="text-technical-300 hidden max-w-sm text-right text-sm leading-6 sm:block">
          Domain-to-technology relationships derived from the validated engineering registry.
        </p>
      </div>

      {/* Desktop / tablet graph */}
      <div className="mt-10 hidden md:block">
        <svg
          viewBox={`0 0 ${graph.width} ${graph.height}`}
          role="img"
          aria-labelledby="knowledge-graph-svg-title knowledge-graph-svg-description"
          className="h-auto w-full overflow-visible"
        >
          <title id="knowledge-graph-svg-title">Engineering knowledge relationship graph</title>

          <desc id="knowledge-graph-svg-description">
            Engineering domains connected to the technologies associated with each domain.
            Technologies shared by multiple domains appear near the center of the graph.
          </desc>

          {/* Structural guides */}

          <line
            x1="0"
            y1={graph.height / 2}
            x2={graph.width}
            y2={graph.height / 2}
            className="stroke-border-subtle"
            strokeWidth="1"
          />

          {/* Relationships */}
          <g aria-hidden="true">
            {graph.edges.map((edge) => (
              <line
                key={edge.id}
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                className={
                  edge.isCrossDomain ? "stroke-burgundy-signal/32" : "stroke-border-subtle"
                }
                strokeWidth={edge.isCrossDomain ? 1 : 0.9}
              />
            ))}
          </g>

          {/* Knowledge nodes */}
          {graph.nodes.map((node) => {
            const textAnchor =
              node.isCrossDomain || node.anchorX === undefined
                ? "middle"
                : node.x < node.anchorX - 12
                  ? "end"
                  : node.x > node.anchorX + 12
                    ? "start"
                    : "middle";

            const labelX =
              textAnchor === "start" ? node.x + 8 : textAnchor === "end" ? node.x - 8 : node.x;

            const labelY = textAnchor === "middle" ? node.y - 10 : node.y + 4;

            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.isCrossDomain ? 5 : 3}
                  className={node.isCrossDomain ? "fill-burgundy-signal" : "fill-technical-500"}
                />

                <text
                  x={labelX}
                  y={labelY}
                  textAnchor={textAnchor}
                  paintOrder="stroke"
                  strokeWidth={3}
                  strokeLinejoin="round"
                  className={
                    node.isCrossDomain
                      ? "fill-foreground stroke-background font-sans text-[11px]"
                      : "fill-technical-300 stroke-background font-sans text-[10px]"
                  }
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Domain anchors */}
          {graph.domains.map((domain) => (
            <g key={domain.id}>
              <circle
                cx={domain.x}
                cy={domain.y}
                r="20"
                className="fill-background stroke-burgundy-signal"
                strokeWidth="1.25"
              />

              <circle cx={domain.x} cy={domain.y} r="4" className="fill-burgundy" />

              <text
                x={domain.x}
                y={domain.y - 30}
                textAnchor="middle"
                className="fill-burgundy-signal font-mono text-[11px] tracking-[0.18em]"
              >
                {domain.code}
              </text>

              <text
                x={domain.x}
                y={domain.y + 39}
                textAnchor="middle"
                className="fill-technical-100 font-sans text-[12px]"
              >
                {domain.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Mobile relationship representation */}
      <div className="mt-10 md:hidden">
        <div className="divide-border-subtle border-border-subtle divide-y border-y">
          {domains.map((domain) => {
            const domainNodes = nodes.filter((node) => node.domains.includes(domain.id));

            return (
              <div key={domain.id} className="flex items-center justify-between gap-6 py-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-burgundy-signal font-mono text-xs tracking-[0.18em]">
                    {domain.code}
                  </span>

                  <span className="text-technical-100 text-sm">{domain.name}</span>
                </div>

                <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
                  {String(domainNodes.length).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

        {crossDomainNodes.length > 0 && (
          <div className="mt-8">
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Cross-domain
            </p>

            <div className="mt-4 space-y-3">
              {crossDomainNodes.map((node) => {
                const relatedDomains = node.domains
                  .map((domainId) => domains.find((domain) => domain.id === domainId)?.code)
                  .filter(Boolean)
                  .join(" ↔ ");

                return (
                  <div key={node.id} className="flex items-center justify-between gap-6">
                    <span className="text-foreground text-sm">{node.label}</span>

                    <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em]">
                      {relatedDomains}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
