import { projectsSchema } from "@/features/work/schemas/project-schema";

const projectsData = [
  {
    slug: "flowboard",
    index: "01",
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

      repositories: [
        {
          label: "Development",
          url: "https://github.com/0sayo0/flowboard",
        },
      ],
    },
  },
  {
    slug: "stephany-manzano",

    index: "02",

    name: "Stephany Manzano Home Collection",

    shortName: "SMHC",

    tagline: "A content-driven digital catalog for an artisan home collection brand.",

    summary:
      "A production-oriented catalog built with Next.js and Sanity, separating the product experience from structured content management.",

    problem:
      "The brand needed a maintainable digital catalog where product and editorial content could evolve without coupling every content change to application code.",

    outcome:
      "A responsive headless catalog architecture combining a typed Next.js frontend with structured content, portable editorial data and managed product imagery.",

    status: "completed",

    domains: ["frontend", "data", "delivery", "tooling"],

    knowledgeNodeIds: [
      "react",
      "next-js",
      "typescript",
      "tailwind-css",
      "sanity-cms",
      "motion-framer-motion",
      "git",
      "github",
      "vercel",
    ],

    highlights: [
      "Headless content architecture",
      "Structured catalog content",
      "Portable editorial content",
      "Managed product image pipeline",
      "Responsive production interface",
    ],

    architecture: {
      label: "Content → application → catalog",
      flow: ["Sanity CMS", "Content Models", "Content Queries", "Next.js", "Interface", "Catalog"],
    },

    preview: {
      kind: "catalog-system",
      src: "/projects/stephany-manzano/preview.webp",
      alt: "Stephany Manzano Home Collection digital catalog preview",
    },

    links: {
      live: "https://stephanymanzano.com/",

      repositories: [
        {
          label: "Source",
          url: "https://github.com/0sayo0/smhc-web",
        },
      ],
    },
  },
  {
    slug: "aeris",
    index: "03",
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
      src: "/projects/aeris/preview.webp",
      alt: "Aeris weather application interface preview",
    },

    links: {
      live: "https://aeris-rouge-eight.vercel.app/",

      repositories: [
        {
          label: "Source",
          url: "https://github.com/0sayo0/Aeris",
        },
      ],
    },
  },

  {
    slug: "users-crud",

    index: "04",

    name: "UsersCRUD",

    shortName: "UsersCRUD",

    tagline:
      "A full-stack user management system with explicit client, API and persistence layers.",

    summary:
      "A full-stack CRUD application built with a React and TypeScript client connected to an Express API and MongoDB persistence through Mongoose.",

    problem:
      "The system needed to coordinate user management across form validation, client state, asynchronous requests, REST endpoints and persistent document storage.",

    outcome:
      "A separated frontend and backend architecture covering typed forms, client-side state, asynchronous API communication and MongoDB persistence.",

    status: "completed",

    domains: ["frontend", "backend", "data", "tooling"],

    knowledgeNodeIds: [
      "react",
      "typescript",
      "vite",
      "tailwind-css",
      "react-hook-form",
      "zod",
      "zustand",
      "node-js",
      "express",
      "mongodb",
      "mongoose",
      "git",
      "github",
    ],

    highlights: [
      "Separated frontend and backend applications",
      "Typed form validation",
      "Client-state orchestration",
      "REST API communication",
      "MongoDB persistence through Mongoose",
    ],

    architecture: {
      label: "Client → API → persistence",
      flow: [
        "React Client",
        "Form Validation",
        "Client State",
        "Axios",
        "Express API",
        "Mongoose",
        "MongoDB",
      ],
    },

    preview: {
      kind: "crud-system",
      src: null,
      alt: "UsersCRUD full-stack user management interface preview",
    },

    links: {
      live: null,

      repositories: [
        {
          label: "Frontend",
          url: "https://github.com/0sayo0/usercrud-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/0sayo0/usercrud-backend",
        },
      ],
    },
  },
  {
    slug: "veterinary-patients",

    index: "05",

    name: "Veterinary Patients",

    shortName: "Veterinary Patients",

    tagline: "A focused React interface for veterinary patient management.",

    summary:
      "A frontend application for managing veterinary patient information, built with React and a lightweight Vite and Tailwind CSS stack.",

    problem:
      "Veterinary patient information needed to be captured and presented through a simple, usable client-side interface.",

    outcome:
      "A focused React application that organizes patient-management interactions through a responsive frontend experience.",

    status: "completed",

    domains: ["frontend", "tooling"],

    knowledgeNodeIds: ["react", "vite", "tailwind-css"],

    highlights: [
      "React-based patient interface",
      "Responsive frontend composition",
      "Reusable interface structure",
      "Lightweight Vite build setup",
    ],

    architecture: {
      label: "Client-side patient workflow",
      flow: ["Patient Form", "React Client", "Application State", "Patient Records", "Interface"],
    },

    preview: {
      kind: "health-system",
      src: "/projects/veterinary-patients/preview.webp",
      alt: "Veterinary Patients management interface preview",
    },

    links: {
      live: "https://dogtoranimalistic.netlify.app/",

      repositories: [
        {
          label: "Source",
          url: "https://github.com/0sayo0/citas_react_vite",
        },
      ],
    },
  },
] as const;

export const projects = projectsSchema.parse(projectsData);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
