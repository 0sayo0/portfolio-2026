import { projectCaseStudiesSchema } from "@/features/work/schemas/project-case-study-schema";

const projectCaseStudiesData = [
  {
    projectSlug: "flowboard",

    context:
      "FlowBoard is an active full-stack consolidation project designed to move beyond isolated frontend concerns and model a larger application across client, API, persistence, authentication, quality and delivery boundaries.",

    architectureSummary:
      "The project uses an npm-workspaces monorepo with two independently structured applications: a React SPA in apps/web and an Express REST API in apps/api. Each layer has explicit responsibilities while remaining part of one development system.",

    runtimeFlow: [
      {
        label: "React Client",
        description:
          "The web application owns presentation, interaction and client-side application composition.",
      },
      {
        label: "Router",
        description:
          "React Router Data APIs provide explicit application routing and route-level behavior.",
      },
      {
        label: "Server State",
        description: "TanStack Query separates remote server state from local interface state.",
      },
      {
        label: "REST API",
        description:
          "The frontend communicates with a separately structured Express API through explicit HTTP contracts.",
      },
      {
        label: "Authentication",
        description:
          "JWT and refresh-token flows form the authentication boundary between client and server.",
      },
      {
        label: "Persistence",
        description:
          "MongoDB and Mongoose provide the initial persistence layer for application data.",
      },
    ],

    decisions: [
      {
        title: "Use a monorepo without merging application boundaries",
        rationale:
          "The web client and API share one repository for development coordination while remaining independently structured applications that can be deployed separately.",
      },
      {
        title: "Separate server, client and form state",
        rationale:
          "TanStack Query, Zustand and React Hook Form solve different state problems and are intentionally not collapsed into a single global state mechanism.",
      },
      {
        title: "Use React Router Data APIs",
        rationale:
          "The project deliberately practices modern standalone React routing instead of relying on framework-provided routing.",
      },
      {
        title: "Introduce backend responsibilities explicitly",
        rationale:
          "Authentication, persistence, request validation and API boundaries are modeled as backend concerns rather than hidden behind frontend abstractions.",
      },
    ],

    quality: {
      summary:
        "Quality infrastructure is introduced as part of the system from the beginning rather than being added only after feature implementation.",

      metrics: [
        {
          label: "Repository",
          value: "Monorepo",
        },
        {
          label: "Applications",
          value: "02",
        },
        {
          label: "Web",
          value: "React SPA",
        },
        {
          label: "API",
          value: "Express REST",
        },
      ],

      signals: [
        "TypeScript strict mode",
        "Vitest + React Testing Library",
        "ESLint and Prettier",
        "Husky and lint-staged",
        "GitHub Actions",
        "Explicit feature and application boundaries",
      ],
    },

    outcome:
      "FlowBoard is being used as a progressive full-stack engineering system in which frontend architecture, backend services, persistence, authentication, quality automation and delivery practices can be consolidated inside one coherent project.",

    currentState:
      "Active development. The repository foundation and initial engineering phases are complete while the application continues evolving through the remaining full-stack feature phases.",
  },
  {
    projectSlug: "stephany-manzano",

    context:
      "Stephany Manzano Home Collection is a digital catalog created for an artisan home collection brand. The project needed to present products through a refined visual experience while allowing catalog and editorial content to evolve independently from the application code.",

    architectureSummary:
      "The system uses Next.js as the presentation layer and Sanity as a headless content source. Structured content, portable editorial data and managed imagery flow from the CMS into a responsive product-oriented interface.",

    runtimeFlow: [
      {
        label: "Content",
        description:
          "Product and editorial information is maintained as structured content in Sanity.",
      },
      {
        label: "Content Model",
        description: "Sanity schemas define the structure of catalog and editorial records.",
      },
      {
        label: "Query",
        description: "The application retrieves the content required by each catalog experience.",
      },
      {
        label: "Next.js",
        description:
          "Next.js composes content and application structure into the public-facing site.",
      },
      {
        label: "Media",
        description: "Sanity image tooling provides the product imagery consumed by the interface.",
      },
      {
        label: "Catalog",
        description:
          "The final interface presents brand, editorial and product content as one cohesive experience.",
      },
    ],

    decisions: [
      {
        title: "Separate content from presentation",
        rationale:
          "Using a headless CMS allows catalog content to change without requiring every editorial update to become an application-code change.",
      },
      {
        title: "Use structured content",
        rationale:
          "Products and editorial sections benefit from explicit content models instead of being embedded directly inside React components.",
      },
      {
        title: "Keep the frontend product-oriented",
        rationale:
          "The application layer focuses on presentation, navigation and product experience while Sanity remains responsible for content management.",
      },
      {
        title: "Preserve brand hierarchy",
        rationale:
          "The interface uses restrained typography, imagery and spacing so the product photography remains the primary visual signal.",
      },
    ],

    quality: {
      summary:
        "The project uses a typed Next.js application structure with dedicated content tooling and a production-oriented separation between interface and CMS responsibilities.",

      metrics: [
        {
          label: "Framework",
          value: "Next.js 16",
        },
        {
          label: "Frontend",
          value: "React 19",
        },
        {
          label: "CMS",
          value: "Sanity",
        },
        {
          label: "Styling",
          value: "Tailwind 4",
        },
      ],

      signals: [
        "TypeScript application code",
        "Headless CMS architecture",
        "Portable Text rendering",
        "Managed image pipeline through Sanity tooling",
        "Responsive product presentation",
        "Motion-based interface refinement",
      ],
    },

    outcome:
      "The result is a production catalog where the brand experience and the content-management system remain intentionally separated: product and editorial information can evolve through Sanity while the Next.js application remains focused on presentation and interaction.",

    currentState: null,
  },
  {
    projectSlug: "aeris",

    context:
      "Aeris was built as a focused frontend engineering project around a deceptively simple problem: external weather data should never flow directly into the interface without an explicit validation and transformation boundary.",

    architectureSummary:
      "The application separates user input, external API access, runtime validation, adaptation, remote state and presentation. The UI consumes predictable application data instead of depending directly on third-party response shapes.",

    runtimeFlow: [
      {
        label: "Search",
        description: "The user submits a location through a validated search form.",
      },
      {
        label: "Geocoding",
        description:
          "The application resolves the location into coordinates through the external geocoding API.",
      },
      {
        label: "Validation",
        description:
          "External API responses are validated at runtime before becoming trusted application data.",
      },
      {
        label: "Adapter",
        description:
          "Validated external data is transformed into an application-oriented representation.",
      },
      {
        label: "Query",
        description:
          "TanStack Query manages asynchronous server state, caching and request lifecycle.",
      },
      {
        label: "Interface",
        description:
          "The final weather model is rendered through responsive and explicit UI states.",
      },
    ],

    decisions: [
      {
        title: "Validate external boundaries",
        rationale:
          "TypeScript only guarantees compile-time assumptions. Zod provides runtime validation at the exact boundary where untrusted API responses enter the application.",
      },
      {
        title: "Separate transport data from UI data",
        rationale:
          "Adapters prevent external response structures from leaking through the entire component tree and reduce coupling to the API provider.",
      },
      {
        title: "Use TanStack Query for server state",
        rationale:
          "Remote weather data has a lifecycle fundamentally different from local UI state. Query state, caching and request status belong to a dedicated server-state abstraction.",
      },
      {
        title: "Keep network access explicit",
        rationale:
          "The application uses the native Fetch API and isolates requests inside feature-level API functions instead of mixing network concerns with presentation.",
      },
    ],

    quality: {
      summary:
        "Aeris was completed with automated component and behavior verification, repository quality tooling and a production deployment review.",

      metrics: [
        {
          label: "Tests",
          value: "17",
        },
        {
          label: "Test files",
          value: "05",
        },
        {
          label: "Deployment",
          value: "Vercel",
        },
        {
          label: "Lighthouse",
          value: "All green",
        },
      ],

      signals: [
        "Vitest + React Testing Library coverage for critical behavior",
        "Runtime validation through Zod",
        "ESLint and Prettier quality gates",
        "Husky and lint-staged pre-commit automation",
        "Production build and deployment validation",
        "Responsive and loading-state verification",
      ],
    },

    outcome:
      "The final result is a deployed weather application whose main value is not only its interface, but the explicit data pipeline underneath it: external information is fetched, validated, transformed and consumed through predictable application boundaries.",

    currentState: null,
  },
  {
    projectSlug: "users-crud",

    context:
      "UsersCRUD is a full-stack user-management application built as two separate projects: a React and TypeScript client and an Express and TypeScript API. The project focuses on coordinating forms, client state, HTTP communication, REST operations and persistent user records.",

    architectureSummary:
      "The frontend organizes user behavior around feature-level components, schemas, services and Zustand state. Axios communicates with an Express REST API whose routes delegate to controllers and services before data is persisted through Mongoose in MongoDB.",

    runtimeFlow: [
      {
        label: "Interface",
        description:
          "The React client presents user records and the create, inspect, edit and delete interactions.",
      },
      {
        label: "Validation",
        description:
          "React Hook Form and Zod manage form input and validation before user data is submitted.",
      },
      {
        label: "Client State",
        description:
          "Zustand coordinates user-oriented application state and asynchronous operations.",
      },
      {
        label: "HTTP",
        description: "An Axios instance sends requests to the dedicated /api/users REST boundary.",
      },
      {
        label: "API",
        description:
          "Express routes delegate CRUD requests through controller and service responsibilities.",
      },
      {
        label: "Persistence",
        description: "Mongoose models user records and persists them in MongoDB.",
      },
    ],

    decisions: [
      {
        title: "Separate frontend and backend repositories",
        rationale:
          "The client and API remain independently structured applications, making their responsibilities and deployment boundaries explicit.",
      },
      {
        title: "Organize frontend behavior by feature",
        rationale:
          "User-specific components, services, schemas, types and state are grouped around the users domain instead of being distributed arbitrarily across the application.",
      },
      {
        title: "Separate API responsibilities",
        rationale:
          "Routes, controllers, services and models prevent HTTP routing, application behavior and persistence logic from collapsing into one layer.",
      },
      {
        title: "Validate forms explicitly",
        rationale:
          "React Hook Form and Zod keep input collection and validation separate from the rest of the user-management workflow.",
      },
    ],

    quality: {
      summary:
        "The project emphasizes explicit frontend and backend boundaries, typed application code and separated responsibilities across the complete CRUD flow.",

      metrics: [
        {
          label: "Repositories",
          value: "02",
        },
        {
          label: "Client",
          value: "React 19",
        },
        {
          label: "API",
          value: "Express",
        },
        {
          label: "Persistence",
          value: "MongoDB",
        },
      ],

      signals: [
        "TypeScript on frontend and backend",
        "Feature-oriented frontend structure",
        "Zod form schemas",
        "React Hook Form integration",
        "Zustand client-state layer",
        "Dedicated Axios API boundary",
        "Route → controller → service → model backend separation",
        "Mongoose persistence model",
      ],
    },

    outcome:
      "The result is a complete CRUD system in which user operations travel through explicit layers from the React interface to validation and state, across an HTTP API and finally into persistent MongoDB records.",

    currentState: null,
  },
  {
    projectSlug: "veterinary-patients",

    context:
      "Veterinary Patients is an earlier React project focused on a straightforward patient-management workflow. It captures veterinary patient information through a controlled form and keeps the patient list synchronized with browser storage.",

    architectureSummary:
      "The application uses local React state for patient records and the currently selected patient. Formulario manages creation and editing, ListadoPacientes renders the collection, Paciente exposes record actions and localStorage provides persistence across browser sessions.",

    runtimeFlow: [
      {
        label: "Input",
        description:
          "The user enters patient, owner, contact, date and symptom information through the form.",
      },
      {
        label: "Validation",
        description:
          "The form verifies that required fields are present before creating or updating a patient record.",
      },
      {
        label: "State",
        description:
          "React state owns the patient collection and the patient currently selected for editing.",
      },
      {
        label: "Record",
        description:
          "New patients receive an identifier and existing records can be replaced through the editing flow.",
      },
      {
        label: "Persistence",
        description:
          "The patient collection is serialized into localStorage whenever application state changes.",
      },
      {
        label: "Management",
        description:
          "Records can be reviewed, edited or deleted through the patient list interface.",
      },
    ],

    decisions: [
      {
        title: "Keep the application client-side",
        rationale:
          "The scope of the project is intentionally small, so React state and localStorage provide enough infrastructure without introducing a backend.",
      },
      {
        title: "Use controlled form state",
        rationale:
          "Each patient field is represented explicitly in component state, making creation and editing behavior straightforward to follow.",
      },
      {
        title: "Reuse the same form for editing",
        rationale:
          "Selecting an existing patient repopulates the form and allows the same workflow to handle both creation and updates.",
      },
      {
        title: "Persist browser state",
        rationale:
          "Synchronizing the patients array with localStorage allows records to survive page reloads without requiring a server.",
      },
    ],

    quality: {
      summary:
        "This project represents an earlier stage of the frontend progression and focuses on clear React fundamentals rather than a larger infrastructure or testing system.",

      metrics: [
        {
          label: "Frontend",
          value: "React 18",
        },
        {
          label: "Build",
          value: "Vite 4",
        },
        {
          label: "Persistence",
          value: "LocalStorage",
        },
        {
          label: "Styling",
          value: "Tailwind 3",
        },
      ],

      signals: [
        "Controlled React forms",
        "Required-field validation",
        "Create and edit flows",
        "Patient deletion",
        "localStorage synchronization",
        "Responsive patient-management layout",
      ],
    },

    outcome:
      "The final application provides a complete client-side patient workflow covering creation, validation, persistent storage, editing, listing and deletion while demonstrating the React fundamentals that preceded the more architecturally complex projects in the portfolio.",

    currentState: null,
  },
] as const;

export const projectCaseStudies = projectCaseStudiesSchema.parse(projectCaseStudiesData);

export function getProjectCaseStudyBySlug(slug: string) {
  return projectCaseStudies.find((caseStudy) => caseStudy.projectSlug === slug) ?? null;
}
