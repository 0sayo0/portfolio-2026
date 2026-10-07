"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

import type { Project } from "@/features/work/schemas/project-schema";

interface ProjectSystemVisualProps {
  project: Project;
}

interface SystemFallbackProps {
  kind: Project["preview"]["kind"];
}

/* -------------------------------------------------------------------------- */
/*                               WEATHER / AERIS                              */
/* -------------------------------------------------------------------------- */

function WeatherSystemVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-10 md:inset-16">
      <div className="border-border-subtle relative size-full border">
        <div className="bg-border-subtle absolute top-1/2 left-0 h-px w-full" />
        <div className="bg-border-subtle absolute top-0 left-1/2 h-full w-px" />

        <div className="absolute inset-8 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Weather / Interface
            </span>

            <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              System / 01
            </span>
          </div>

          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              External data
            </p>

            <p className="font-display mt-3 text-5xl tracking-tighter md:text-7xl">Aeris</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Search", "Validate", "Present"].map((item, index) => (
              <div key={item} className="border-border-subtle border-t pt-3">
                <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="text-technical-100 mt-2 text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-burgundy-signal/50 absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border">
          <div className="bg-burgundy absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             WORKSPACE / FLOWBOARD                          */
/* -------------------------------------------------------------------------- */

function WorkspaceSystemVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-10 md:inset-16">
      <div className="border-border-subtle flex size-full flex-col border">
        <div className="border-border-subtle flex items-center justify-between border-b px-5 py-4">
          <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Workspace / System
          </span>

          <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Active development
          </span>
        </div>

        <div className="bg-border-subtle grid flex-1 grid-cols-3 gap-px">
          {["Backlog", "Active", "Done"].map((column, columnIndex) => (
            <div key={column} className="bg-background p-4">
              <div className="flex items-center justify-between">
                <span className="text-technical-300 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                  {column}
                </span>

                <span className="text-technical-500 font-mono text-[0.5625rem]">
                  0{columnIndex + 2}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {Array.from({
                  length: columnIndex + 2,
                }).map((_, cardIndex) => (
                  <div key={cardIndex} className="border-border-subtle min-h-14 border p-3">
                    <div className="bg-technical-700 h-px w-2/3" />
                    <div className="bg-border-subtle mt-3 h-px w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-border-subtle grid grid-cols-3 border-t">
          {["WEB", "API", "DATA"].map((layer, index) => (
            <div
              key={layer}
              className="border-border-subtle flex items-center justify-between border-r px-4 py-3 last:border-r-0"
            >
              <span className="text-burgundy-signal font-mono text-[0.625rem]">{layer}</span>

              <span className="text-technical-500 font-mono text-[0.5625rem]">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               CATALOG / SMHC                               */
/* -------------------------------------------------------------------------- */

function CatalogSystemVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-10 md:inset-16">
      <div className="border-border-subtle flex size-full flex-col border">
        <div className="border-border-subtle flex items-center justify-between border-b px-5 py-4">
          <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Catalog / Content
          </span>

          <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Headless system
          </span>
        </div>

        <div className="grid flex-1 grid-cols-[0.8fr_1.2fr]">
          <div className="border-border-subtle flex flex-col justify-between border-r p-5">
            <div>
              <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                Content source
              </p>

              <p className="font-display mt-4 text-3xl tracking-[-0.04em] md:text-5xl">Sanity</p>
            </div>

            <div className="space-y-3">
              {["Product data", "Editorial", "Imagery"].map((item, index) => (
                <div
                  key={item}
                  className="border-border-subtle flex items-center justify-between border-t pt-3"
                >
                  <span className="text-technical-300 text-xs">{item}</span>

                  <span className="text-technical-500 font-mono text-[0.5625rem]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                Catalog interface
              </span>

              <span className="text-burgundy-signal size-1.5 rounded-full" />
            </div>

            <div className="mt-6 grid h-[calc(100%-2rem)] grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border-border-subtle flex flex-col justify-between border p-3"
                >
                  <div className="bg-technical-700/40 aspect-4/3 w-full" />

                  <div className="mt-4">
                    <div className="bg-technical-700 h-px w-2/3" />
                    <div className="bg-border-subtle mt-3 h-px w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border-subtle grid grid-cols-3 border-t">
          {["CMS", "NEXT", "CATALOG"].map((layer, index) => (
            <div
              key={layer}
              className="border-border-subtle flex items-center justify-between border-r px-4 py-3 last:border-r-0"
            >
              <span className="text-burgundy-signal font-mono text-[0.625rem]">{layer}</span>

              <span className="text-technical-500 font-mono text-[0.5625rem]">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             CRUD / USERSCRUD                               */
/* -------------------------------------------------------------------------- */

function CrudSystemVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-10 md:inset-16">
      <div className="border-border-subtle flex size-full flex-col border">
        <div className="border-border-subtle flex items-center justify-between border-b px-5 py-4">
          <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            User / Registry
          </span>

          <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            CRUD system
          </span>
        </div>

        <div className="grid flex-1 grid-cols-[1fr_0.55fr]">
          <div className="border-border-subtle border-r p-5">
            <div className="flex items-center justify-between">
              <span className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                User records
              </span>

              <span className="text-technical-500 font-mono text-[0.5625rem]">04</span>
            </div>

            <div className="mt-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border-border-subtle grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-t py-4"
                >
                  <span className="border-border-subtle size-5 rounded-full border" />

                  <div>
                    <div className="bg-technical-700 h-px w-1/2" />
                    <div className="bg-border-subtle mt-3 h-px w-1/3" />
                  </div>

                  <span className="text-burgundy-signal font-mono text-[0.5625rem]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between p-5">
            <div>
              <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                Operation
              </p>

              <div className="mt-5 space-y-3">
                {["Create", "Read", "Update", "Delete"].map((operation, index) => (
                  <div
                    key={operation}
                    className="border-border-subtle flex items-center justify-between border-b pb-3"
                  >
                    <span className="text-technical-300 text-xs">{operation}</span>

                    <span className="text-burgundy-signal font-mono text-[0.5625rem]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-3xl tracking-[-0.04em] md:text-4xl">Users</p>

              <p className="text-technical-500 mt-2 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                Managed records
              </p>
            </div>
          </div>
        </div>

        <div className="border-border-subtle grid grid-cols-3 border-t">
          {["CLIENT", "API", "DB"].map((layer, index) => (
            <div
              key={layer}
              className="border-border-subtle flex items-center justify-between border-r px-4 py-3 last:border-r-0"
            >
              <span className="text-burgundy-signal font-mono text-[0.625rem]">{layer}</span>

              <span className="text-technical-500 font-mono text-[0.5625rem]">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         HEALTH / VETERINARY PATIENTS                       */
/* -------------------------------------------------------------------------- */

function HealthSystemVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-10 md:inset-16">
      <div className="border-border-subtle flex size-full flex-col border">
        <div className="border-border-subtle flex items-center justify-between border-b px-5 py-4">
          <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Patients / Interface
          </span>

          <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Client system
          </span>
        </div>

        <div className="grid flex-1 grid-cols-[0.75fr_1.25fr]">
          <div className="border-border-subtle border-r p-5">
            <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
              Patient input
            </p>

            <div className="mt-6 space-y-5">
              {["Patient", "Owner", "Contact", "Notes"].map((field, index) => (
                <div key={field}>
                  <div className="flex items-center justify-between">
                    <span className="text-technical-300 text-xs">{field}</span>

                    <span className="text-technical-500 font-mono text-[0.5625rem]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="border-border-subtle mt-2 h-7 border" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                Patient records
              </p>

              <span className="text-burgundy-signal size-1.5 rounded-full" />
            </div>

            <div className="mt-6 space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="border-border-subtle grid grid-cols-[auto_1fr] gap-4 border p-4"
                >
                  <div className="border-burgundy-signal/40 flex size-10 items-center justify-center rounded-full border">
                    <span className="text-burgundy-signal font-mono text-[0.5625rem]">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="bg-technical-700 h-px w-1/2" />
                    <div className="bg-border-subtle mt-3 h-px w-2/3" />
                    <div className="bg-border-subtle mt-3 h-px w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border-subtle grid grid-cols-3 border-t">
          {["FORM", "STATE", "RECORDS"].map((layer, index) => (
            <div
              key={layer}
              className="border-border-subtle flex items-center justify-between border-r px-4 py-3 last:border-r-0"
            >
              <span className="text-burgundy-signal font-mono text-[0.625rem]">{layer}</span>

              <span className="text-technical-500 font-mono text-[0.5625rem]">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  DISPATCH                                  */
/* -------------------------------------------------------------------------- */

function SystemFallback({ kind }: SystemFallbackProps) {
  switch (kind) {
    case "weather-system":
      return <WeatherSystemVisual />;

    case "workspace-system":
      return <WorkspaceSystemVisual />;

    case "catalog-system":
      return <CatalogSystemVisual />;

    case "crud-system":
      return <CrudSystemVisual />;

    case "health-system":
      return <HealthSystemVisual />;
  }
}

/* -------------------------------------------------------------------------- */
/*                              PROJECT VISUAL                                */
/* -------------------------------------------------------------------------- */

export function ProjectSystemVisual({ project }: ProjectSystemVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, {
    stiffness: 110,
    damping: 24,
    mass: 0.5,
  });

  const springY = useSpring(pointerY, {
    stiffness: 110,
    damping: 24,
    mass: 0.5,
  });

  const rotateX = useTransform(springY, [-1, 1], [2.25, -2.25]);

  const rotateY = useTransform(springX, [-1, 1], [-2.25, 2.25]);

  const innerX = useTransform(springX, [-1, 1], [-6, 6]);

  const innerY = useTransform(springY, [-1, 1], [-6, 6]);

  const foregroundX = useTransform(springX, [-1, 1], [-3, 3]);

  const foregroundY = useTransform(springY, [-1, 1], [-3, 3]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width;

    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(x * 2 - 1);
    pointerY.set(y * 2 - 1);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
      }}
      className="border-border-subtle bg-background relative min-h-96 overflow-hidden border lg:min-h-128"
    >
      {/* Technical coordinates */}
      <motion.div
        style={{
          x: foregroundX,
          y: foregroundY,
        }}
        className="pointer-events-none absolute inset-x-5 top-5 z-20 flex items-center justify-between"
      >
        <span className="text-technical-700 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
          Visual / {project.index}
        </span>

        <span className="text-technical-700 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
          {project.preview.src ? "Product view" : "System view"}
        </span>
      </motion.div>

      {/* Product / system layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: innerX,
          y: innerY,
        }}
      >
        {project.preview.src ? (
          <div className="absolute inset-9 md:inset-14">
            <div className="border-border-subtle bg-background relative size-full overflow-hidden border">
              <Image
                src={project.preview.src}
                alt={project.preview.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />

              <div className="from-background/55 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />

              <div
                aria-hidden="true"
                className="border-border-subtle pointer-events-none absolute inset-3 border"
              />

              <div className="pointer-events-none absolute top-4 right-4 left-4 flex items-center justify-between">
                <span className="bg-background/80 text-technical-300 border-border-subtle border px-2 py-1 font-mono text-[0.5rem] tracking-[0.14em] uppercase backdrop-blur-sm">
                  Product / Interface
                </span>

                <span className="bg-background/80 text-burgundy-signal border-border-subtle border px-2 py-1 font-mono text-[0.5rem] tracking-[0.14em] uppercase backdrop-blur-sm">
                  Product view
                </span>
              </div>
            </div>
          </div>
        ) : (
          <SystemFallback kind={project.preview.kind} />
        )}
      </motion.div>

      {/* Fixed frame */}
      <div
        aria-hidden="true"
        className="border-border-subtle pointer-events-none absolute inset-4 z-10 border"
      />

      {/* Corners */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-4 z-10">
        <span className="bg-burgundy-signal absolute top-0 left-0 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full" />

        <span className="bg-border-subtle absolute top-0 right-0 size-1 translate-x-1/2 -translate-y-1/2 rounded-full" />

        <span className="bg-border-subtle absolute bottom-0 left-0 size-1 -translate-x-1/2 translate-y-1/2 rounded-full" />

        <span className="bg-burgundy-signal absolute right-0 bottom-0 size-1 translate-x-1/2 translate-y-1/2 rounded-full" />
      </div>

      {/* Project identity */}
      <motion.div
        style={{
          x: foregroundX,
          y: foregroundY,
        }}
        className="absolute right-5 bottom-5 left-5 z-20 flex items-end justify-between gap-6"
      >
        <div>
          <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Project system
          </p>

          <p className="font-display mt-2 text-2xl tracking-[-0.035em]">{project.shortName}</p>
        </div>

        <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
          {project.status === "completed" ? "Resolved" : "Active"}
        </span>
      </motion.div>
    </motion.div>
  );
}
