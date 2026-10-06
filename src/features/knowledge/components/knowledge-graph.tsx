"use client";

import { useMemo, useRef, useState } from "react";

import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";
import { createKnowledgeGraphLayout } from "@/features/knowledge/lib/knowledge-graph-layout";

interface KnowledgeGraphProps {
  domains: EngineeringDomain[];
  nodes: KnowledgeNode[];
}

type NavigationDirection = "left" | "right" | "up" | "down";

function getNodeClassification(domainCount: number) {
  if (domainCount === 1) {
    return "Single-domain";
  }

  if (domainCount === 2) {
    return "Cross-domain";
  }

  return "Multi-domain";
}

function findDirectionalNode(
  currentNodeId: string,
  direction: NavigationDirection,
  graphNodes: ReturnType<typeof createKnowledgeGraphLayout>["nodes"],
) {
  const currentNode = graphNodes.find((node) => node.id === currentNodeId);

  if (!currentNode) {
    return null;
  }

  const candidates = graphNodes.filter((node) => {
    if (node.id === currentNode.id) {
      return false;
    }

    switch (direction) {
      case "left":
        return node.x < currentNode.x;

      case "right":
        return node.x > currentNode.x;

      case "up":
        return node.y < currentNode.y;

      case "down":
        return node.y > currentNode.y;
    }
  });

  if (candidates.length === 0) {
    return null;
  }

  const directionalWeight = 1.8;

  return candidates.reduce((closest, candidate) => {
    const candidateDeltaX = candidate.x - currentNode.x;

    const candidateDeltaY = candidate.y - currentNode.y;

    const closestDeltaX = closest.x - currentNode.x;

    const closestDeltaY = closest.y - currentNode.y;

    function getScore(deltaX: number, deltaY: number) {
      const horizontal = Math.abs(deltaX);
      const vertical = Math.abs(deltaY);

      switch (direction) {
        case "left":
        case "right":
          return horizontal + vertical * directionalWeight;

        case "up":
        case "down":
          return vertical + horizontal * directionalWeight;
      }
    }

    return getScore(candidateDeltaX, candidateDeltaY) < getScore(closestDeltaX, closestDeltaY)
      ? candidate
      : closest;
  });
}

export function KnowledgeGraph({ domains, nodes }: KnowledgeGraphProps) {
  const graph = useMemo(() => createKnowledgeGraphLayout(domains, nodes), [domains, nodes]);

  const [previewNodeId, setPreviewNodeId] = useState<string | null>(null);

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const [focusNodeId, setFocusNodeId] = useState(graph.nodes[0]?.id ?? "");

  const nodeButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const inspectedNodeId = selectedNodeId ?? previewNodeId;

  const inspectedNode = nodes.find((node) => node.id === inspectedNodeId) ?? null;

  const inspectedDomains = inspectedNode
    ? inspectedNode.domains
        .map((domainId) => domains.find((domain) => domain.id === domainId))
        .filter((domain): domain is EngineeringDomain => domain !== undefined)
    : [];

  function handleNodeSelect(nodeId: string) {
    setSelectedNodeId((current) => (current === nodeId ? null : nodeId));
  }

  function handleClearSelection() {
    setSelectedNodeId(null);
    setPreviewNodeId(null);
  }

  function focusNode(nodeId: string) {
    setFocusNodeId(nodeId);
    nodeButtonRefs.current.get(nodeId)?.focus();
  }

  function handleDirectionalNavigation(currentNodeId: string, direction: NavigationDirection) {
    const targetNode = findDirectionalNode(currentNodeId, direction, graph.nodes);

    if (!targetNode) {
      return;
    }

    focusNode(targetNode.id);
  }

  return (
    <section
      aria-labelledby="knowledge-topology-title"
      className="border-border-subtle border-b py-10 md:py-14"
    >
      {/* Heading */}
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

      {/* Keyboard instructions */}
      <p id="knowledge-graph-keyboard-help" className="sr-only">
        Use the arrow keys to navigate between technology nodes. Press Enter or Space to lock a
        selection. Press Escape to clear the current selection. Press Home or End to move to the
        first or last node.
      </p>

      {/* Desktop graph */}
      <div className="mt-10 hidden lg:block">
        <div className="relative">
          <svg
            viewBox={`0 0 ${graph.width} ${graph.height}`}
            role="img"
            aria-labelledby="knowledge-graph-svg-title knowledge-graph-svg-description"
            className="h-auto w-full overflow-visible"
          >
            <title id="knowledge-graph-svg-title">Engineering knowledge relationship graph</title>

            <desc id="knowledge-graph-svg-description">
              Engineering domains connected to their associated technologies. Shared technologies
              appear between the domains they connect.
            </desc>

            {/* Structural guide */}
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
              {graph.edges.map((edge) => {
                const isInspectedEdge =
                  inspectedNodeId !== null && edge.id.endsWith(`-${inspectedNodeId}`);

                const hasInspection = inspectedNodeId !== null;

                return (
                  <line
                    key={edge.id}
                    x1={edge.x1}
                    y1={edge.y1}
                    x2={edge.x2}
                    y2={edge.y2}
                    opacity={!hasInspection ? 1 : isInspectedEdge ? 1 : 0.1}
                    className={`transition-opacity duration-200 motion-reduce:transition-none ${
                      isInspectedEdge
                        ? "stroke-burgundy-signal"
                        : edge.isCrossDomain
                          ? "stroke-burgundy-signal/32"
                          : "stroke-border-subtle"
                    }`}
                    strokeWidth={isInspectedEdge ? 1.8 : edge.isCrossDomain ? 1 : 0.9}
                  />
                );
              })}
            </g>

            {/* Knowledge nodes */}
            <g aria-hidden="true">
              {graph.nodes.map((node) => {
                const isInspected = node.id === inspectedNodeId;

                const sharesInspectedDomain =
                  inspectedNode !== null &&
                  node.domains.some((domainId) => inspectedNode.domains.includes(domainId));

                const hasInspection = inspectedNode !== null;

                const nodeOpacity = !hasInspection
                  ? 1
                  : isInspected
                    ? 1
                    : sharesInspectedDomain
                      ? 0.42
                      : 0.12;

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
                  <g
                    key={node.id}
                    opacity={nodeOpacity}
                    className="transition-opacity duration-200 motion-reduce:transition-none"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isInspected ? 6 : node.isCrossDomain ? 5 : 3}
                      className={
                        isInspected || node.isCrossDomain
                          ? "fill-burgundy-signal"
                          : "fill-technical-500"
                      }
                    />

                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={textAnchor}
                      paintOrder="stroke"
                      strokeWidth={3}
                      strokeLinejoin="round"
                      className={
                        isInspected
                          ? "fill-foreground stroke-background font-sans text-[12px]"
                          : node.isCrossDomain
                            ? "fill-foreground stroke-background font-sans text-[11px]"
                            : "fill-technical-300 stroke-background font-sans text-[10px]"
                      }
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Domain anchors */}
            <g aria-hidden="true">
              {graph.domains.map((domain) => {
                const isConnected = inspectedNode?.domains.includes(domain.id) ?? false;

                const hasInspection = inspectedNode !== null;

                const domainOpacity = !hasInspection ? 1 : isConnected ? 1 : 0.2;

                return (
                  <g
                    key={domain.id}
                    opacity={domainOpacity}
                    className="transition-opacity duration-200 motion-reduce:transition-none"
                  >
                    <circle
                      cx={domain.x}
                      cy={domain.y}
                      r="20"
                      className={
                        isConnected
                          ? "fill-background stroke-burgundy-signal"
                          : "fill-background stroke-burgundy-signal/70"
                      }
                      strokeWidth={isConnected ? 1.75 : 1.25}
                    />

                    <circle
                      cx={domain.x}
                      cy={domain.y}
                      r={isConnected ? 5 : 4}
                      className="fill-burgundy"
                    />

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
                );
              })}
            </g>
          </svg>

          {/* Accessible interactive layer */}
          <div className="pointer-events-none absolute inset-0">
            {graph.nodes.map((node) => {
              const relatedDomainNames = node.domains
                .map((domainId) => domains.find((domain) => domain.id === domainId)?.name)
                .filter(Boolean)
                .join(", ");

              const isSelected = node.id === selectedNodeId;

              return (
                <button
                  key={node.id}
                  type="button"
                  ref={(element) => {
                    if (element) {
                      nodeButtonRefs.current.set(node.id, element);

                      return;
                    }

                    nodeButtonRefs.current.delete(node.id);
                  }}
                  tabIndex={focusNodeId === node.id ? 0 : -1}
                  aria-label={`Inspect ${node.label}. Connected to ${relatedDomainNames}.`}
                  aria-describedby="knowledge-graph-keyboard-help"
                  aria-pressed={isSelected}
                  onPointerEnter={() => setPreviewNodeId(node.id)}
                  onPointerLeave={() => setPreviewNodeId(null)}
                  onFocus={() => {
                    setFocusNodeId(node.id);
                    setPreviewNodeId(node.id);
                  }}
                  onBlur={() => setPreviewNodeId(null)}
                  onClick={() => handleNodeSelect(node.id)}
                  onKeyDown={(event) => {
                    switch (event.key) {
                      case "ArrowLeft":
                        event.preventDefault();

                        handleDirectionalNavigation(node.id, "left");

                        break;

                      case "ArrowRight":
                        event.preventDefault();

                        handleDirectionalNavigation(node.id, "right");

                        break;

                      case "ArrowUp":
                        event.preventDefault();

                        handleDirectionalNavigation(node.id, "up");

                        break;

                      case "ArrowDown":
                        event.preventDefault();

                        handleDirectionalNavigation(node.id, "down");

                        break;

                      case "Home":
                        event.preventDefault();

                        if (graph.nodes[0]) {
                          focusNode(graph.nodes[0].id);
                        }

                        break;

                      case "End": {
                        event.preventDefault();

                        const lastNode = graph.nodes[graph.nodes.length - 1];

                        if (lastNode) {
                          focusNode(lastNode.id);
                        }

                        break;
                      }

                      case "Escape":
                        handleClearSelection();
                        break;
                    }
                  }}
                  className={`pointer-events-auto absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-shadow duration-200 outline-none motion-reduce:transition-none ${
                    isSelected
                      ? "ring-burgundy-signal/70 ring-offset-background ring-1 ring-offset-2"
                      : "focus-visible:ring-burgundy-signal focus-visible:ring-offset-background focus-visible:ring-1 focus-visible:ring-offset-2"
                  }`}
                  style={{
                    left: `${(node.x / graph.width) * 100}%`,
                    top: `${(node.y / graph.height) * 100}%`,
                  }}
                >
                  <span className="sr-only">{node.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Compact tablet / mobile representation */}
      <div className="mt-10 lg:hidden">
        {/* Domain summary */}
        <div className="divide-border-subtle border-border-subtle divide-y border-y">
          {domains.map((domain) => {
            const domainNodes = nodes.filter((node) => node.domains.includes(domain.id));

            const isConnected = inspectedNode?.domains.includes(domain.id) ?? false;

            return (
              <div
                key={domain.id}
                className={`flex items-center justify-between gap-6 py-4 transition-opacity duration-200 motion-reduce:transition-none ${
                  inspectedNode && !isConnected ? "opacity-35" : ""
                }`}
              >
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

        {/* Complete knowledge node registry */}
        <div className="mt-8">
          <div className="flex items-end justify-between gap-6">
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Knowledge Nodes
            </p>

            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              {String(nodes.length).padStart(2, "0")} Total
            </p>
          </div>

          <div className="divide-border-subtle border-border-subtle mt-4 divide-y border-y">
            {nodes.map((node) => {
              const relatedDomains = node.domains
                .map((domainId) => domains.find((domain) => domain.id === domainId)?.code)
                .filter(Boolean)
                .join(" ↔ ");

              const isSelected = selectedNodeId === node.id;

              const isInspected = inspectedNodeId === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`Inspect ${node.label}. Connected domains: ${relatedDomains}.`}
                  onFocus={() => setPreviewNodeId(node.id)}
                  onBlur={() => setPreviewNodeId(null)}
                  onClick={() => handleNodeSelect(node.id)}
                  className="focus-visible:ring-burgundy-signal flex min-h-12 w-full items-center justify-between gap-6 py-3 text-left outline-none focus-visible:ring-1 focus-visible:ring-inset"
                >
                  <span
                    className={
                      isInspected ? "text-foreground text-sm" : "text-technical-300 text-sm"
                    }
                  >
                    {node.label}
                  </span>

                  <span
                    className={`shrink-0 font-mono text-[0.625rem] tracking-[0.16em] ${
                      node.domains.length > 1 ? "text-burgundy-signal" : "text-technical-500"
                    }`}
                  >
                    {relatedDomains}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Node inspector */}
      <div className="border-border-subtle min-h-44 border-y">
        <div className="grid gap-8 py-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-3">
            <p className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Node Inspection
            </p>

            <p className="text-burgundy-signal mt-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              {selectedNodeId ? "Selection locked" : inspectedNode ? "Preview" : "Standby"}
            </p>
          </div>

          {inspectedNode ? (
            <>
              <div className="md:col-span-3">
                <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Knowledge Node
                </p>

                <h4 className="font-display mt-3 text-2xl tracking-[-0.035em]">
                  {inspectedNode.label}
                </h4>

                <p className="text-technical-300 mt-3 text-sm">
                  {getNodeClassification(inspectedNode.domains.length)}
                </p>
              </div>

              <div className="md:col-span-3">
                <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Connected Domains
                </p>

                <div className="mt-4 space-y-2">
                  {inspectedDomains.map((domain) => (
                    <div key={domain.id} className="flex items-baseline gap-3">
                      <span className="text-burgundy-signal font-mono text-xs tracking-[0.18em]">
                        {domain.code}
                      </span>

                      <span className="text-technical-100 text-sm">{domain.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3">
                <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Relationships
                </p>

                <p className="text-technical-100 mt-3 font-mono text-xl">
                  {String(inspectedNode.domains.length).padStart(2, "0")}
                </p>

                {selectedNodeId && (
                  <button
                    type="button"
                    onClick={handleClearSelection}
                    className="border-burgundy-signal/60 text-burgundy-signal hover:text-foreground focus-visible:text-foreground mt-6 border-b pb-1 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors duration-200 outline-none motion-reduce:transition-none"
                  >
                    Clear selection
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="md:col-span-9">
              <p className="text-technical-300 max-w-xl text-sm leading-7">
                Hover or focus a technology node to preview its relationships. Select a node to keep
                its engineering context visible.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
