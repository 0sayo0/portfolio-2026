import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";
import type { Project } from "@/features/work/schemas/project-schema";

export interface ProjectKnowledgeRecord {
  projectId: Project["slug"];
  nodes: KnowledgeNode[];
  crossDomainNodes: KnowledgeNode[];
  domainCount: number;
}

export function createProjectKnowledgeRecord(
  project: Project,
  knowledgeNodes: KnowledgeNode[],
): ProjectKnowledgeRecord {
  const knowledgeNodeMap = new Map(knowledgeNodes.map((node) => [node.id, node]));

  const nodes = project.knowledgeNodeIds.map((nodeId) => {
    const node = knowledgeNodeMap.get(nodeId);

    if (!node) {
      throw new Error(`Project "${project.slug}" references unknown Knowledge Node "${nodeId}".`);
    }

    return node;
  });

  const crossDomainNodes = nodes.filter((node) => node.domains.length > 1);

  const coveredDomains = new Set(nodes.flatMap((node) => node.domains));

  return {
    projectId: project.slug,
    nodes,
    crossDomainNodes,
    domainCount: coveredDomains.size,
  };
}

export function createProjectKnowledgeRecords(
  projects: Project[],
  knowledgeNodes: KnowledgeNode[],
) {
  return new Map(
    projects.map((project) => [
      project.slug,
      createProjectKnowledgeRecord(project, knowledgeNodes),
    ]),
  );
}
