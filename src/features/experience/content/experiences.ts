import { experiencesSchema } from "@/features/experience/schemas/experience-schema";

const experiencesData = [
  {
    id: "stephany-manzano-home-collection",

    index: "01",

    company: "Stephany Manzano Home Collection",

    role: "Software Developer",

    type: "employment",

    period: {
      start: "Oct 2025",
      end: null,
      current: true,
    },

    location: "Remote",

    mode: "remote",

    summary:
      "Development of a digital product catalog for a growing home-collection brand, combining frontend architecture, content management and production-oriented web implementation.",

    responsibilities: [
      "Built the digital catalog using Next.js, React and TypeScript",
      "Structured reusable frontend components and strict application types",
      "Integrated Sanity CMS content models and content queries",
      "Worked on rendering, SEO and mobile performance",
      "Connected structured content with the production-facing catalog experience",
    ],

    domains: ["frontend", "data", "delivery", "tooling"],

    knowledgeNodeIds: [
      "react",
      "next-js",
      "typescript",
      "tailwind-css",
      "sanity-cms",
      "git",
      "github",
      "vercel",
    ],
  },

  {
    id: "travel-viajes-group",

    index: "02",

    company: "Travel Viajes Group",

    role: "Full Stack Software Developer",

    type: "employment",

    period: {
      start: "Sep 2024",
      end: "Sep 2025",
      current: false,
    },

    location: "Mexico City",

    mode: "onsite",

    summary:
      "End-to-end development of internal reservation and operations systems across frontend, backend and relational-data responsibilities.",

    responsibilities: [
      "Built internal application interfaces with React and TypeScript",
      "Developed backend services with Node.js and Express",
      "Worked with PostgreSQL relational data access",
      "Implemented REST API flows, validation and error handling",
      "Developed asynchronous frontend workflows connected to backend services",
      "Maintained and adapted legacy PHP modules when required",
    ],

    domains: ["frontend", "backend", "data", "tooling"],

    knowledgeNodeIds: [
      "react",
      "typescript",
      "node-js",
      "express",
      "postgresql",
      "javascript-es6",
      "git",
      "github",
    ],
  },

  {
    id: "ipn-nanotechnology-center",

    index: "03",

    company: "IPN – Centro de Nanotecnología",

    role: "Technical Software Consultant",

    type: "consulting",

    period: {
      start: "Nov 2023",
      end: "Feb 2024",
      current: false,
    },

    location: "Mexico City",

    mode: "onsite",

    summary:
      "Technical software consulting focused on React-based visualization of hardware-generated data and modernization of existing frontend code.",

    responsibilities: [
      "Implemented React interfaces for real-time hardware-data visualization",
      "Handled frontend state, incoming data and error states",
      "Refactored legacy frontend code",
      "Reorganized components to improve maintainability",
    ],

    domains: ["frontend", "data", "tooling"],

    knowledgeNodeIds: ["react", "javascript-es6", "git"],
  },

  {
    id: "azurreo",

    index: "04",

    company: "Azurreo",

    role: "IT Infrastructure Specialist",

    type: "employment",

    period: {
      start: "Jul 2022",
      end: "Jul 2023",
      current: false,
    },

    location: "Mexico City",

    mode: "onsite",

    summary:
      "Infrastructure and first-line technology support work involving workstation deployment, network configuration and operational IT support.",

    responsibilities: [
      "Deployed and configured office technology",
      "Configured workstations and network connectivity",
      "Supported Level 1 technical incidents",
      "Assisted with operational IT infrastructure processes",
    ],

    domains: ["tooling"],

    knowledgeNodeIds: [],
  },
] as const;

export const experiences = experiencesSchema.parse(experiencesData);
