<div align="center">

# JONATHAN MORALES

### Personal Portfolio · 2026

**Software engineering, presented as a system.**

A distinctive developer portfolio exploring the relationships
between technical knowledge, engineering disciplines,
professional experience, and real-world projects.

**Next.js · React · TypeScript · Tailwind CSS · Motion**

[**Explore Portfolio**](https://jonathanmoralesdev.com) ·
[**Professional Index**](https://jonathanmoralesdev.com/professional-index) ·
[**LinkedIn**](https://www.linkedin.com/in/jonathan-morales-dev/)

</div>

---

## Overview

**Portfolio 2026** is a personal developer portfolio built
to present software engineering experience beyond a
conventional collection of project cards.

The application approaches a professional portfolio as
an interconnected information system.

Rather than displaying technologies, projects, and
experience as isolated lists, it organizes them into
structured relationships that communicate engineering
capabilities and the practical work behind them.

The experience combines:

- Editorial typography and minimalist visual design.
- Interactive engineering-oriented visualizations.
- Structured technical knowledge.
- Detailed project case studies.
- Professional experience records.
- Responsive layouts and purposeful animations.

The project is developed with **Next.js App Router,
React, TypeScript, Tailwind CSS, and Motion**.

---

## Project Preview

### Main Experience

A minimal visual language built around typography,
structural grids, restrained motion, and technical identity.

<div align="center">

<img
  src="./docs/screenshots/home-desktop.png"
  alt="Portfolio 2026 — Main desktop experience"
  width="900"
/>

</div>

### Project Case Studies

Individual project pages provide a more detailed
representation of the engineering work behind
each application.

<div align="center">

<img
  src="./docs/screenshots/project-case-study.png"
  alt="Portfolio 2026 — Project case study"
  width="900"
/>

</div>

[**Explore the live experience →**](https://jonathanmoralesdev.com)

---

## Key Features

### 01. Interactive Entrance

The homepage introduces the developer's professional
identity through a custom animated visual composition.

The entrance combines typography, geometric elements,
scroll-driven transformations, and motion interactions.

The animation system also considers the user's
reduced-motion preferences.

### 02. Engineering Domains

Technical capabilities are organized into six
engineering disciplines:

| Domain   | Focus                                                       |
| -------- | ----------------------------------------------------------- |
| Frontend | Interfaces, state management, interaction and rendering     |
| Backend  | APIs, application services and server-side responsibilities |
| Data     | Data modeling, persistence and content integration          |
| Quality  | Testing, validation and code quality                        |
| Delivery | Version control, deployment and delivery workflows          |
| Tooling  | Development environments and engineering automation         |

Each domain contains descriptions, capabilities,
and associated technologies.

### 03. Knowledge Graph

An interactive visualization represents relationships
between technologies and engineering domains.

The knowledge system is derived from structured
domain definitions.

Technologies shared by multiple disciplines can
be represented as cross-domain connections.

The graph includes dedicated layout logic for
positioning nodes and relationships.

### 04. Selected Work

Projects are presented as structured engineering records
rather than conventional portfolio cards.

Each record communicates information such as:

- Project context and purpose.
- Problem addressed.
- Engineering disciplines involved.
- Associated technologies.
- Architecture and data flow.
- Technical highlights.
- Development status.
- Links to the source code and deployed application,
  when available.

### 05. Detailed Project Case Studies

Individual projects have dedicated pages using
Next.js dynamic routes.

Case studies provide additional information about:

- Technical context.
- Architecture.
- Runtime or data flow.
- Engineering decisions and their rationale.
- Quality-related information.
- Project outcomes.
- Current development state, when applicable.

Project metadata is generated from the corresponding
structured project information.

### 06. Professional Experience

The experience section presents a professional
timeline and connects previous work to relevant
technical domains.

### 07. Professional Index

A dedicated alternative view provides a more direct,
text-oriented overview of projects, engineering
disciplines, and professional experience.

### 08. Responsive Experience

The interface is designed to adapt across desktop,
tablet, and mobile screen sizes.

---

## Technology Stack

| Category               | Technologies                             |
| ---------------------- | ---------------------------------------- |
| Framework              | Next.js 16 — App Router                  |
| UI Library             | React 19                                 |
| Language               | TypeScript                               |
| Styling                | Tailwind CSS v4                          |
| Animations             | Motion                                   |
| Data Validation        | Zod                                      |
| Typography             | Instrument Serif, Manrope, IBM Plex Mono |
| Static Analysis        | ESLint                                   |
| Formatting             | Prettier                                 |
| Git Hooks              | Husky                                    |
| Staged File Automation | lint-staged                              |
| Package Manager        | npm                                      |
| Deployment             | Vercel                                   |

The project also enables React Compiler through
its Next.js configuration.

---

## Architecture

The application follows a **feature-oriented
organization**, separating shared infrastructure
from domain-specific presentation and content.

```text
portfolio-2026/
│
├── public/
│   └── projects/
│       ├── aeris/
│       ├── stephany-manzano/
│       └── veterinary-patients/
│
├── src/
│   ├── app/
│   │   ├── professional-index/
│   │   │   └── page.tsx
│   │   │
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   └── navigation/
│   │
│   ├── features/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── engineering/
│   │   ├── entrance/
│   │   ├── experience/
│   │   ├── knowledge/
│   │   └── work/
│   │
│   ├── hooks/
│   │   └── use-reduced-motion-preference.ts
│   │
│   └── lib/
│       └── site-config.ts
│
├── .husky/
├── eslint.config.mjs
├── lint-staged.config.mjs
├── next.config.ts
├── prettier.config.mjs
├── package.json
└── tsconfig.json
```

### Architectural Responsibilities

**`src/app/`**

Defines application routes, shared layouts,
global styles, and page composition.

**`src/components/`**

Contains reusable layout and navigation components
shared across the application.

**`src/features/`**

Groups application functionality by responsibility.

Each feature contains the components, content,
schemas, and supporting logic required by its domain.

**`src/hooks/`**

Contains reusable React hooks, including the
reduced-motion preference hook.

**`src/lib/`**

Stores shared application configuration.

**`public/projects/`**

Contains visual assets associated with selected projects.

---

## Information Architecture

The portfolio's content is defined through structured
TypeScript modules and validated using Zod schemas.

The application separates three important concepts:

### Engineering Domains

Represent the major technical disciplines used
to organize engineering responsibilities.

### Knowledge Nodes

Represent individual technologies associated with
one or more engineering domains.

Shared technologies establish relationships
between different areas of knowledge.

### Project Records

Represent selected projects through structured
information about their purpose, architecture,
technical capabilities, and outcomes.

Project records reference existing knowledge nodes,
allowing the application to associate specific work
with relevant technologies and engineering domains.

### Relationship Model

```text
Engineering Domains
        │
        ▼
   Technologies
        │
        ▼
  Knowledge Nodes
        │
        ├───────────────┐
        ▼               ▼
  Project Records   Experience Records
        │
        ▼
  Project Case Studies
        │
        ▼
   Rendered Interface
```

This structure helps maintain consistency between
the portfolio's technical knowledge, projects,
and professional experience.

---

## Engineering Decisions

### Feature-Oriented Architecture

The application organizes related components,
content, validation schemas, and supporting logic
within dedicated feature directories.

This reduces coupling between unrelated sections
and makes the application easier to navigate.

### Structured Content with TypeScript

Professional information and project records are
maintained as structured data rather than being
embedded entirely within presentation components.

This separation allows content to evolve without
requiring equivalent changes to every interface.

### Schema Validation with Zod

Zod validates the structure of engineering domains,
knowledge nodes, projects, and case-study records.

This provides runtime validation in addition
to TypeScript's static type checking.

### Dynamic Project Routing

Next.js App Router provides project-specific pages
through the `/work/[slug]` route.

The application derives project paths from
structured project records and generates
project-specific metadata.

### Purposeful Motion

Motion is used for entrance transitions,
scroll-based interactions, and visual feedback.

Animations are integrated into the presentation
without becoming the primary source of information.

### Reduced-Motion Support

A custom React hook observes the
`prefers-reduced-motion` media query.

Relevant animated components use this preference
to adapt their behavior.

### Development Automation

Husky and lint-staged are configured to run
code-quality tools on staged files before commits.

ESLint and Prettier help maintain consistent
code style throughout the repository.

---

## Design System

The portfolio follows a distinctive
**minimalist editorial and technical aesthetic**.

Its visual identity combines dark surfaces,
restrained burgundy accents, structured spacing,
and expressive typography.

### Color Palette

| Role           | Color     |
| -------------- | --------- |
| Background     | `#080808` |
| Foreground     | `#ECEAE5` |
| Burgundy       | `#6B1F30` |
| Signal Accent  | `#B85A70` |
| Secondary Text | `#99958F` |
| Muted Text     | `#66625D` |

### Typography

| Role             | Font             |
| ---------------- | ---------------- |
| Display          | Instrument Serif |
| Body             | Manrope          |
| Technical Labels | IBM Plex Mono    |

The visual system is implemented through
CSS variables and Tailwind CSS v4 theme tokens.

---

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16.
- npm.

### 1. Clone the Repository

```bash
git clone https://github.com/0sayo0/portfolio-2026.git
cd portfolio-2026
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local address displayed by Next.js,
typically:

`http://localhost:3000`

### 4. Create a Production Build

```bash
npm run build
```

### 5. Start the Production Server

```bash
npm run start
```

The portfolio's current content is maintained
within the repository and does not require
a database or external CMS to run locally.

---

## Available Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the Next.js development server |
| `npm run build`        | Create a production build            |
| `npm run start`        | Run the production server            |
| `npm run lint`         | Run ESLint                           |
| `npm run format`       | Format files with Prettier           |
| `npm run format:check` | Check formatting                     |
| `npm run typecheck`    | Run TypeScript checks                |

### Local Verification

The available code-quality checks can be executed with:

```bash
npm run lint
npm run format:check
npm run typecheck
npm run build
```

---

## Project Scope

This repository contains the source code of
the developer portfolio itself.

Technologies displayed inside the portfolio's
engineering and knowledge sections represent
the developer's broader technical profile.

They should not be confused with dependencies
used to implement this particular website.

---

## Live Website

The portfolio is available at:

### [jonathanmoralesdev.com](https://jonathanmoralesdev.com)

---

## Author

**Jonathan Saúl Morales Espinosa**

Full Stack Software Developer  
Mexico City, Mexico

[Portfolio](https://jonathanmoralesdev.com) ·
[GitHub](https://github.com/0sayo0) ·
[LinkedIn](https://www.linkedin.com/in/jonathan-morales-dev/)

---

<div align="center">

**PORTFOLIO / 2026**

_Engineering knowledge. Professional experience. Evidence through projects._

[**Explore the Portfolio →**](https://jonathanmoralesdev.com)

</div>
