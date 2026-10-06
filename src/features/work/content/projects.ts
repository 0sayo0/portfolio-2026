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

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Vitest",
      "React Testing Library",
      "GitHub",
      "Vercel",
    ],

    highlights: [
      "Validated external API responses before entering application state",
      "Separated API access, schemas, adapters and presentation responsibilities",
      "Managed remote state through TanStack Query",
      "Covered critical behavior with Vitest and React Testing Library",
      "Completed production deployment and quality verification",
    ],

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

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion / Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Vitest",
      "React Testing Library",
      "GitHub Actions",
      "Git",
      "GitHub",
      "npm",
      "Husky",
      "lint-staged",
      "Prettier",
    ],

    highlights: [
      "Structured as an npm-workspaces monorepo with separate web and API applications",
      "Uses React Router Data APIs for explicit client-side routing",
      "Separates server state, client state and form state by responsibility",
      "Introduces full-stack authentication and persistence architecture",
      "Uses automated quality gates and repository tooling from the beginning",
    ],

    links: {
      live: null,
      repository: null,
    },
  },
] as const;

export const projects = projectsSchema.parse(projectsData);
