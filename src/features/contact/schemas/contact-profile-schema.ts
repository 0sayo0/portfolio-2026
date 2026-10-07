import { z } from "zod";

export const contactChannelSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  value: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean(),
});

export const contactProfileSchema = z.object({
  availability: z.string().min(1),

  statement: z.string().min(1),

  secondaryStatement: z.string().min(1),

  location: z.string().min(1),

  channels: z.array(contactChannelSchema).min(1),
});

export type ContactProfile = z.infer<typeof contactProfileSchema>;
