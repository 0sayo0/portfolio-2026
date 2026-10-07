import { z } from "zod";

import { engineeringDomainIdSchema } from "@/features/engineering/schemas/engineering-domain-schema";

export const projectStatusSchema = z.enum(["completed", "in-progress"]);

export const projectVisualKindSchema = z.enum([
  "workspace-system",
  "catalog-system",
  "weather-system",
  "crud-system",
  "health-system",
]);

export const projectSchema = z.object({
  slug: z.string().min(1),
  index: z.string().regex(/^\d{2}$/),
  name: z.string().min(1),
  shortName: z.string().min(1),

  tagline: z.string().min(1),
  summary: z.string().min(1),

  problem: z.string().min(1),
  outcome: z.string().min(1),

  status: projectStatusSchema,

  domains: z.array(engineeringDomainIdSchema).min(1),

  knowledgeNodeIds: z.array(z.string().min(1)).min(1),

  highlights: z.array(z.string().min(1)).min(1),

  architecture: z.object({
    label: z.string().min(1),
    flow: z.array(z.string().min(1)).min(2),
  }),

  preview: z.object({
    kind: projectVisualKindSchema,
    src: z.string().min(1).nullable(),
    alt: z.string().min(1),
  }),

  links: z.object({
    live: z.url().nullable(),
    repository: z.url().nullable(),
  }),
});

export const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;

export type ProjectStatus = z.infer<typeof projectStatusSchema>;
