import { z } from "zod";

const aboutPrincipleSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const aboutInterestSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
});

export const aboutProfileSchema = z.object({
  statement: z.string().min(1),

  secondaryStatement: z.string().min(1),

  direction: z.string().min(1),

  principles: z.array(aboutPrincipleSchema).min(1),

  interests: z.array(aboutInterestSchema).min(1),
});

export type AboutProfile = z.infer<typeof aboutProfileSchema>;
