import type { Experience } from "@/features/experience/schemas/experience-schema";
import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";

export interface ExperienceKnowledgeRecord {
  experienceId: Experience["id"];
  nodes: KnowledgeNode[];
  crossDomainNodes: KnowledgeNode[];
  domainCount: number;
}

export function createExperienceKnowledgeRecord(
  experience: Experience,
  knowledgeNodes: KnowledgeNode[],
): ExperienceKnowledgeRecord {
  const knowledgeNodeMap = new Map(knowledgeNodes.map((node) => [node.id, node]));

  const nodes = experience.knowledgeNodeIds.map((nodeId) => {
    const node = knowledgeNodeMap.get(nodeId);

    if (!node) {
      throw new Error(
        `Experience "${experience.id}" references unknown Knowledge Node "${nodeId}".`,
      );
    }

    return node;
  });

  const crossDomainNodes = nodes.filter((node) => node.domains.length > 1);

  const coveredDomains = new Set(nodes.flatMap((node) => node.domains));

  return {
    experienceId: experience.id,
    nodes,
    crossDomainNodes,
    domainCount: coveredDomains.size,
  };
}

export function createExperienceKnowledgeRecords(
  experiences: Experience[],
  knowledgeNodes: KnowledgeNode[],
) {
  return new Map(
    experiences.map((experience) => [
      experience.id,
      createExperienceKnowledgeRecord(experience, knowledgeNodes),
    ]),
  );
}
