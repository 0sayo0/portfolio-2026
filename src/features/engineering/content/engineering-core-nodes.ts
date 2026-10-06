import { engineeringDomains } from "@/features/engineering/content/engineering-domains";
import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";

interface CoreNodeGeometry {
  cx: number;
  cy: number;
  r: number;
}

const nodeGeometry = {
  frontend: {
    cx: 50,
    cy: 11,
    r: 1.35,
  },
  backend: {
    cx: 79,
    cy: 29,
    r: 1.05,
  },
  data: {
    cx: 84,
    cy: 65,
    r: 1.2,
  },
  quality: {
    cx: 50,
    cy: 87,
    r: 1.45,
  },
  delivery: {
    cx: 16,
    cy: 65,
    r: 1.05,
  },
  tooling: {
    cx: 21,
    cy: 29,
    r: 1.15,
  },
} satisfies Record<EngineeringDomain["id"], CoreNodeGeometry>;

export const engineeringCoreNodes = engineeringDomains.map((domain) => ({
  id: domain.id,
  label: domain.code,
  ...nodeGeometry[domain.id],
}));
