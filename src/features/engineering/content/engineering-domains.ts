import { engineeringDomainsSchema } from "@/features/engineering/schemas/engineering-domain-schema";

const engineeringDomainsData = [
  {
    id: "frontend",
    index: "01",
    code: "FE",
    name: "Frontend",
    statement:
      "Engineering responsive, accessible and high-performance interfaces as structured application systems.",
    capabilities: [
      "Component architecture",
      "State and data orchestration",
      "Responsive systems",
      "Accessibility",
      "Interaction and motion",
      "Performance optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Motion",
    ],
  },
  {
    id: "backend",
    index: "02",
    code: "BE",
    name: "Backend",
    statement:
      "Designing application services, APIs and server-side systems with explicit contracts and separation of responsibilities.",
    capabilities: [
      "REST API design",
      "Authentication flows",
      "Authorization",
      "Validation",
      "Error handling",
      "Service architecture",
    ],
    technologies: ["Node.js", "Express", "NestJS", "Java", "Spring Boot", "JWT"],
  },
  {
    id: "data",
    index: "03",
    code: "DA",
    name: "Data",
    statement:
      "Modeling, querying and connecting persistent data to application behavior through predictable data flows.",
    capabilities: [
      "Data modeling",
      "Relational design",
      "Document modeling",
      "Query design",
      "Schema validation",
      "Client-server synchronization",
    ],
    technologies: ["PostgreSQL", "MongoDB", "Mongoose", "Drizzle", "SQL"],
  },
  {
    id: "quality",
    index: "04",
    code: "QA",
    name: "Quality",
    statement:
      "Protecting system behavior through automated verification, static analysis and reproducible quality gates.",
    capabilities: [
      "Unit testing",
      "Component testing",
      "Integration testing",
      "Static analysis",
      "Type safety",
      "Quality gates",
    ],
    technologies: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Playwright",
      "ESLint",
      "TypeScript",
      "SonarQube",
    ],
  },
  {
    id: "delivery",
    index: "05",
    code: "DL",
    name: "Delivery",
    statement:
      "Moving software from repository to production through controlled automation and repeatable delivery workflows.",
    capabilities: [
      "Continuous integration",
      "Continuous delivery",
      "Build validation",
      "Deployment workflows",
      "Environment configuration",
      "Release discipline",
    ],
    technologies: ["GitHub Actions", "Jenkins", "Docker", "Vercel", "AWS"],
  },
  {
    id: "tooling",
    index: "06",
    code: "TL",
    name: "Tooling",
    statement:
      "Building disciplined development environments through automation, conventions and reliable engineering workflows.",
    capabilities: [
      "Git workflows",
      "Repository architecture",
      "Pre-commit automation",
      "Code formatting",
      "Dependency management",
      "Developer experience",
    ],
    technologies: ["Git", "GitHub", "npm", "Husky", "lint-staged", "Prettier", "Vite", "Turbopack"],
  },
] as const;

export const engineeringDomains = engineeringDomainsSchema.parse(engineeringDomainsData);
