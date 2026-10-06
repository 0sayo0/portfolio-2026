import { z } from "zod";

export const engineeringDomainIdSchema = z.enum([
  "frontend",
  "backend",
  "data",
  "quality",
  "delivery",
  "tooling",
]);

export const engineeringDomainCodeSchema = z.enum(["FE", "BE", "DA", "QA", "DL", "TL"]);

export const engineeringDomainSchema = z.object({
  id: engineeringDomainIdSchema,
  index: z.string().regex(/^\d{2}$/),
  code: engineeringDomainCodeSchema,
  name: z.string().min(1),
  statement: z.string().min(1),
  capabilities: z.array(z.string().min(1)).min(1),
  technologies: z.array(z.string().min(1)).min(1),
});

export const engineeringDomainsSchema = z.array(engineeringDomainSchema);

export type EngineeringDomain = z.infer<typeof engineeringDomainSchema>;
