import { z } from "zod";

export const engineeringDomainSchema = z.object({
  id: z.string().min(1),
  index: z.string().regex(/^\d{2}$/),
  code: z.string().min(2).max(3),
  name: z.string().min(1),
  statement: z.string().min(1),
  capabilities: z.array(z.string().min(1)).min(1),
  technologies: z.array(z.string().min(1)).min(1),
});

export const engineeringDomainsSchema = z.array(engineeringDomainSchema);

export type EngineeringDomain = z.infer<typeof engineeringDomainSchema>;
