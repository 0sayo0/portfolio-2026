import { projectsSchema } from "@/features/work/schemas/project-schema";

const projectsData = [
  {
    slug: "aeris",
    index: "01",
    name: "Aeris Weather App",
    shortName: "Aeris",

    tagline:
      "A weather interface built around validated external data, explicit transformation and resilient UI states.",

    summary:
      "A responsive weather application that transforms external API data into a validated, predictable frontend data flow using React and TypeScript.",

    problem:
      "Weather APIs expose external data that cannot be trusted blindly. The project focused on building a clear boundary between remote data, validation, transformation and presentation while maintaining a polished responsive experience.",

    outcome:
      "A production-deployed frontend with validated API boundaries, predictable server-state handling, automated tests and a fully optimized quality baseline.",

    status: "completed",

    domains: ["frontend", "data", "quality", "delivery", "tooling"],

    knowledgeNodeIds: [
      "react",
      "typescript",
      "vite",
      "tailwind-css",
      "shadcn-ui",
      "tanstack-query",
      "react-hook-form",
      "zod",
      "vitest",
      "react-testing-library",
      "eslint",
      "prettier",
      "husky",
      "lint-staged",
      "git",
      "github",
      "vercel",
      "lighthouse",
    ],

    highlights: [
      "Validated external API responses before entering application state",
      "Separated API access, schemas, adapters and presentation responsibilities",
      "Managed remote state through TanStack Query",
      "Covered critical behavior with Vitest and React Testing Library",
      "Completed production deployment and quality verification",
    ],

    architecture: {
      label: "External data pipeline",
      flow: ["Search", "Geocoding", "Validation", "Adapter", "Query", "Interface"],
    },

    preview: {
      kind: "weather-system",
      src: null,
      alt: "Aeris Weather App interface preview",
    },

    links: {
      live: null,
      repository: null,
    },
  },

  {
    slug: "flowboard",
    index: "02",
    name: "FlowBoard",
    shortName: "FlowBoard",

    tagline:
      "A full-stack workspace designed as a modular engineering system across client, API, data and delivery layers.",

    summary:
      "A full-stack application being built as a monorepo with an independent React client and Express API, focusing on explicit boundaries between frontend, backend, data and infrastructure concerns.",

    problem:
      "The project explores how a larger application can remain understandable as responsibilities expand across routing, server state, authentication, persistence, testing and deployment.",

    outcome:
      "An evolving full-stack system used to consolidate modern React application architecture while expanding backend, persistence and delivery practices.",

    status: "in-progress",

    domains: ["frontend", "backend", "data", "quality", "delivery", "tooling"],

    knowledgeNodeIds: [
      "react",
      "typescript",
      "vite",
      "react-router",
      "tanstack-query",
      "zustand",
      "react-hook-form",
      "zod",
      "tailwind-css",
      "shadcn-ui",
      "motion-framer-motion",
      "node-js",
      "express",
      "mongodb",
      "mongoose",
      "jwt",
      "vitest",
      "react-testing-library",
      "eslint",
      "prettier",
      "github-actions",
      "git",
      "github",
      "npm",
      "husky",
      "lint-staged",
    ],

    highlights: [
      "Structured as an npm-workspaces monorepo with separate web and API applications",
      "Uses React Router Data APIs for explicit client-side routing",
      "Separates server state, client state and form state by responsibility",
      "Introduces full-stack authentication and persistence architecture",
      "Uses automated quality gates and repository tooling from the beginning",
    ],

    architecture: {
      label: "Client → API → persistence",
      flow: ["React Client", "Router", "REST API", "Express", "Auth", "MongoDB"],
    },

    preview: {
      kind: "workspace-system",
      src: null,
      alt: "FlowBoard workspace interface preview",
    },

    links: {
      live: null,
      repository: null,
    },
  },
] as const;

export const projects = projectsSchema.parse(projectsData);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
