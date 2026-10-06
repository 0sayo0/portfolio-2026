import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";
import type { KnowledgeNode } from "@/features/knowledge/schemas/knowledge-node-schema";

interface DomainGeometry {
  x: number;
  y: number;
  fanStart: number;
  fanEnd: number;
}

interface Point {
  x: number;
  y: number;
}

const graphWidth = 1200;
const graphHeight = 720;

const graphCenter: Point = {
  x: graphWidth / 2,
  y: graphHeight / 2,
};

const domainGeometry = {
  frontend: {
    x: 190,
    y: 180,
    fanStart: 150,
    fanEnd: 255,
  },
  backend: {
    x: 600,
    y: 150,
    fanStart: 215,
    fanEnd: 325,
  },
  data: {
    x: 1010,
    y: 180,
    fanStart: 285,
    fanEnd: 390,
  },
  quality: {
    x: 190,
    y: 540,
    fanStart: 105,
    fanEnd: 210,
  },
  delivery: {
    x: 600,
    y: 570,
    fanStart: 35,
    fanEnd: 145,
  },
  tooling: {
    x: 1010,
    y: 540,
    fanStart: -30,
    fanEnd: 75,
  },
} satisfies Record<EngineeringDomain["id"], DomainGeometry>;

export interface KnowledgeGraphDomainPoint {
  id: EngineeringDomain["id"];
  code: EngineeringDomain["code"];
  name: string;
  x: number;
  y: number;
}

export interface KnowledgeGraphKnowledgePoint {
  id: string;
  label: string;
  domains: EngineeringDomain["id"][];
  x: number;
  y: number;
  anchorX?: number;
  anchorY?: number;
  isCrossDomain: boolean;
}

export interface KnowledgeGraphEdge {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isCrossDomain: boolean;
}

export interface KnowledgeGraphLayout {
  width: number;
  height: number;
  domains: KnowledgeGraphDomainPoint[];
  nodes: KnowledgeGraphKnowledgePoint[];
  edges: KnowledgeGraphEdge[];
}

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function getDistance(pointA: Point, pointB: Point) {
  return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
}

function normalizeVector(x: number, y: number): Point {
  const length = Math.hypot(x, y);

  if (length === 0) {
    return {
      x: 0,
      y: 0,
    };
  }

  return {
    x: x / length,
    y: y / length,
  };
}

function getCenteredOffsets(count: number, spacing: number) {
  if (count <= 1) {
    return [0];
  }

  const center = (count - 1) / 2;

  return Array.from({ length: count }, (_, index) => (index - center) * spacing);
}

function getDomainPoint(domainId: EngineeringDomain["id"]): Point {
  const geometry = domainGeometry[domainId];

  return {
    x: geometry.x,
    y: geometry.y,
  };
}

function getCentroid(domainIds: EngineeringDomain["id"][]): Point {
  const points = domainIds.map(getDomainPoint);

  const total = points.reduce(
    (accumulator, point) => ({
      x: accumulator.x + point.x,
      y: accumulator.y + point.y,
    }),
    {
      x: 0,
      y: 0,
    },
  );

  return {
    x: total.x / points.length,
    y: total.y / points.length,
  };
}

function nudgeAwayFromUnrelatedDomain(
  point: Point,
  relatedDomains: EngineeringDomain["id"][],
): Point {
  const unrelatedDomains = (Object.keys(domainGeometry) as EngineeringDomain["id"][]).filter(
    (domainId) => !relatedDomains.includes(domainId),
  );

  const isTooClose = unrelatedDomains.some((domainId) => {
    const unrelatedPoint = getDomainPoint(domainId);

    return getDistance(point, unrelatedPoint) < 105;
  });

  if (!isTooClose) {
    return point;
  }

  const towardCenter = normalizeVector(graphCenter.x - point.x, graphCenter.y - point.y);

  return {
    x: point.x + towardCenter.x * 105,
    y: point.y + towardCenter.y * 105,
  };
}

function createRelationshipKey(domains: EngineeringDomain["id"][]) {
  return [...domains].sort().join("--");
}

function positionSingleDomainNodes(domains: EngineeringDomain[], nodes: KnowledgeNode[]) {
  const points: KnowledgeGraphKnowledgePoint[] = [];

  for (const domain of domains) {
    const geometry = domainGeometry[domain.id];

    const domainNodes = nodes.filter(
      (node) => node.domains.length === 1 && node.domains[0] === domain.id,
    );

    domainNodes.forEach((node, index) => {
      const progress = domainNodes.length === 1 ? 0.5 : index / (domainNodes.length - 1);

      const angle = geometry.fanStart + (geometry.fanEnd - geometry.fanStart) * progress;

      const radians = degreesToRadians(angle);
      const radius = 128;

      points.push({
        id: node.id,
        label: node.label,
        domains: node.domains,
        x: geometry.x + Math.cos(radians) * radius,
        y: geometry.y + Math.sin(radians) * radius,
        anchorX: geometry.x,
        anchorY: geometry.y,
        isCrossDomain: false,
      });
    });
  }

  return points;
}

function positionDualDomainGroup(nodes: KnowledgeNode[]): KnowledgeGraphKnowledgePoint[] {
  if (nodes.length === 0) {
    return [];
  }

  const relatedDomains = nodes[0].domains;

  const firstDomain = getDomainPoint(relatedDomains[0]);

  const secondDomain = getDomainPoint(relatedDomains[1]);

  let basePoint = getCentroid(relatedDomains);

  basePoint = nudgeAwayFromUnrelatedDomain(basePoint, relatedDomains);

  const relationshipVector = normalizeVector(
    secondDomain.x - firstDomain.x,
    secondDomain.y - firstDomain.y,
  );

  const perpendicularVector = {
    x: -relationshipVector.y,
    y: relationshipVector.x,
  };

  const offsets = getCenteredOffsets(nodes.length, 32);

  return nodes.map((node, index) => ({
    id: node.id,
    label: node.label,
    domains: node.domains,
    x: basePoint.x + perpendicularVector.x * offsets[index],
    y: basePoint.y + perpendicularVector.y * offsets[index],
    isCrossDomain: true,
  }));
}

function positionMultiDomainGroup(nodes: KnowledgeNode[]): KnowledgeGraphKnowledgePoint[] {
  if (nodes.length === 0) {
    return [];
  }

  const basePoint = getCentroid(nodes[0].domains);

  if (nodes.length === 1) {
    return [
      {
        id: nodes[0].id,
        label: nodes[0].label,
        domains: nodes[0].domains,
        x: basePoint.x,
        y: basePoint.y,
        isCrossDomain: true,
      },
    ];
  }

  const radius = 30;

  return nodes.map((node, index) => {
    const angle = -Math.PI / 2 + (index / nodes.length) * Math.PI * 2;

    return {
      id: node.id,
      label: node.label,
      domains: node.domains,
      x: basePoint.x + Math.cos(angle) * radius,
      y: basePoint.y + Math.sin(angle) * radius,
      isCrossDomain: true,
    };
  });
}

function positionCrossDomainNodes(nodes: KnowledgeNode[]) {
  const crossDomainNodes = nodes.filter((node) => node.domains.length > 1);

  const relationshipGroups = new Map<string, KnowledgeNode[]>();

  for (const node of crossDomainNodes) {
    const relationshipKey = createRelationshipKey(node.domains);

    const group = relationshipGroups.get(relationshipKey);

    if (group) {
      group.push(node);
      continue;
    }

    relationshipGroups.set(relationshipKey, [node]);
  }

  const points: KnowledgeGraphKnowledgePoint[] = [];

  for (const group of relationshipGroups.values()) {
    const domainCount = group[0].domains.length;

    if (domainCount === 2) {
      points.push(...positionDualDomainGroup(group));

      continue;
    }

    points.push(...positionMultiDomainGroup(group));
  }

  return points;
}

export function createKnowledgeGraphLayout(
  domains: EngineeringDomain[],
  nodes: KnowledgeNode[],
): KnowledgeGraphLayout {
  const domainPoints: KnowledgeGraphDomainPoint[] = domains.map((domain) => {
    const geometry = domainGeometry[domain.id];

    return {
      id: domain.id,
      code: domain.code,
      name: domain.name,
      x: geometry.x,
      y: geometry.y,
    };
  });

  const singleDomainPoints = positionSingleDomainNodes(domains, nodes);

  const crossDomainPoints = positionCrossDomainNodes(nodes);

  const knowledgePoints = [...singleDomainPoints, ...crossDomainPoints];

  const edges: KnowledgeGraphEdge[] = [];

  for (const node of knowledgePoints) {
    for (const domainId of node.domains) {
      const domainPoint = domainPoints.find((domain) => domain.id === domainId);

      if (!domainPoint) {
        continue;
      }

      edges.push({
        id: `${domainId}-${node.id}`,
        x1: domainPoint.x,
        y1: domainPoint.y,
        x2: node.x,
        y2: node.y,
        isCrossDomain: node.isCrossDomain,
      });
    }
  }

  return {
    width: graphWidth,
    height: graphHeight,
    domains: domainPoints,
    nodes: knowledgePoints,
    edges,
  };
}
