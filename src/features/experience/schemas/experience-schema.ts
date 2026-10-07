import { z } from "zod";

import { engineeringDomainIdSchema } from "@/features/engineering/schemas/engineering-domain-schema";

export const experienceTypeSchema = z.enum(["employment", "consulting"]);

export const workModeSchema = z.enum(["onsite", "remote", "hybrid"]);

export const experienceSchema = z.object({
  id: z.string().min(1),

  index: z.string().regex(/^\d{2}$/),

  company: z.string().min(1),

  role: z.string().min(1),

  type: experienceTypeSchema,

  period: z.object({
    start: z.string().min(1),
    end: z.string().min(1).nullable(),
    current: z.boolean(),
  }),

  location: z.string().min(1),

  mode: workModeSchema,

  summary: z.string().min(1),

  responsibilities: z.array(z.string().min(1)).min(1),

  domains: z.array(engineeringDomainIdSchema).min(1),

  knowledgeNodeIds: z.array(z.string().min(1)),
});

export const experiencesSchema = z.array(experienceSchema);

export type Experience = z.infer<typeof experienceSchema>;

export type ExperienceType = z.infer<typeof experienceTypeSchema>;

export type WorkMode = z.infer<typeof workModeSchema>;
