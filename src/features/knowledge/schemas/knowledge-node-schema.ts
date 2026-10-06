import { z } from "zod";

import { engineeringDomainIdSchema } from "@/features/engineering/schemas/engineering-domain-schema";

export const knowledgeNodeSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  domains: z.array(engineeringDomainIdSchema).min(1),
});

export const knowledgeNodesSchema = z.array(knowledgeNodeSchema);

export type KnowledgeNode = z.infer<typeof knowledgeNodeSchema>;
