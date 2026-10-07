import { projectCaseStudiesSchema } from "@/features/work/schemas/project-case-study-schema";

const projectCaseStudiesData = [
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
] as const;

export const projectCaseStudies = projectCaseStudiesSchema.parse(projectCaseStudiesData);

export function getProjectCaseStudyBySlug(slug: string) {
  return projectCaseStudies.find((caseStudy) => caseStudy.projectSlug === slug) ?? null;
}
