import { engineeringDomains } from "@/features/engineering/content/engineering-domains";
import { knowledgeNodesSchema } from "@/features/knowledge/schemas/knowledge-node-schema";

function createKnowledgeNodeId(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const knowledgeNodeMap = new Map<
  string,
  {
    id: string;
    label: string;
    domains: Set<(typeof engineeringDomains)[number]["id"]>;
  }
>();

for (const domain of engineeringDomains) {
  for (const technology of domain.technologies) {
    const id = createKnowledgeNodeId(technology);

    const existingNode = knowledgeNodeMap.get(id);

    if (existingNode) {
      existingNode.domains.add(domain.id);
      continue;
    }

    knowledgeNodeMap.set(id, {
      id,
      label: technology,
      domains: new Set([domain.id]),
    });
  }
}

const knowledgeNodesData = Array.from(knowledgeNodeMap.values()).map((node) => ({
  id: node.id,
  label: node.label,
  domains: Array.from(node.domains),
}));

export const knowledgeNodes = knowledgeNodesSchema.parse(knowledgeNodesData);

export const knowledgeStats = {
  nodes: knowledgeNodes.length,
  domains: engineeringDomains.length,
  crossDomainNodes: knowledgeNodes.filter((node) => node.domains.length > 1).length,
} as const;
