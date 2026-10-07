import Image from "next/image";

import type { Project } from "@/features/work/schemas/project-schema";

interface ProjectSystemVisualProps {
  project: Project;
}

function WeatherSystemVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-10 md:inset-16">
      <div className="border-border-subtle relative size-full border">
        {/* Structural system */}
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

export function ProjectSystemVisual({ project }: ProjectSystemVisualProps) {
  return (
    <div className="border-border-subtle bg-background relative min-h-96 overflow-hidden border lg:min-h-128">
      {/* Technical coordinates */}
      <div className="pointer-events-none absolute inset-x-5 top-5 z-20 flex items-center justify-between">
        <span className="text-technical-700 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
          Visual / {project.index}
        </span>

        <span className="text-technical-700 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
          {project.preview.src ? "Product view" : "System view"}
        </span>
      </div>

      {project.preview.src ? (
        <>
          <Image
            src={project.preview.src}
            alt={project.preview.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />

          <div className="from-background/85 via-background/10 absolute inset-0 bg-linear-to-t to-transparent" />
        </>
      ) : project.preview.kind === "weather-system" ? (
        <WeatherSystemVisual />
      ) : (
        <WorkspaceSystemVisual />
      )}

      {/* Frame */}
      <div
        aria-hidden="true"
        className="border-border-subtle pointer-events-none absolute inset-4 border"
      />

      {/* Project identity */}
      <div className="absolute right-5 bottom-5 left-5 z-20 flex items-end justify-between gap-6">
        <div>
          <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Project system
          </p>

          <p className="font-display mt-2 text-2xl tracking-[-0.035em]">{project.shortName}</p>
        </div>

        <span className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
          {project.status === "completed" ? "Resolved" : "Active"}
        </span>
      </div>
    </div>
  );
}
