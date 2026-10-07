import { z } from "zod";

const runtimeFlowStepSchema = z.object({
  label: z.string().min(1),
  description: z.string().min(1),
});

const engineeringDecisionSchema = z.object({
  title: z.string().min(1),
  rationale: z.string().min(1),
});

const qualityMetricSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const projectCaseStudySchema = z.object({
  projectSlug: z.string().min(1),

  context: z.string().min(1),

  architectureSummary: z.string().min(1),

  runtimeFlow: z.array(runtimeFlowStepSchema).min(2),

  decisions: z.array(engineeringDecisionSchema).min(1),

  quality: z.object({
    summary: z.string().min(1),

    metrics: z.array(qualityMetricSchema),

    signals: z.array(z.string().min(1)).min(1),
  }),

  outcome: z.string().min(1),

  currentState: z.string().min(1).nullable(),
});

export const projectCaseStudiesSchema = z.array(projectCaseStudySchema);

export type ProjectCaseStudy = z.infer<typeof projectCaseStudySchema>;
