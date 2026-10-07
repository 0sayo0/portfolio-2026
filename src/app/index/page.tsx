import Link from "next/link";

import { contactProfile } from "@/features/contact/content/contact-profile";
import { engineeringDomains } from "@/features/engineering/content/engineering-domains";
import { experiences } from "@/features/experience/content/experiences";
import { projects } from "@/features/work/content/projects";
import { siteConfig } from "@/lib/site-config";

function formatPeriod(period: (typeof experiences)[number]["period"]) {
  return `${period.start} — ${period.current ? "Present" : period.end}`;
}

export default function IndexPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto min-h-dvh w-full max-w-400 px-6 py-8 outline-none md:px-10 md:py-10 lg:px-[clamp(3rem,4vw,4.5rem)]"
    >
      {/* Navigation */}
      <header className="border-border-subtle flex items-center justify-between border-b pb-8">
        <Link
          href="/"
          className="group relative font-mono text-xs font-semibold tracking-[0.18em] uppercase outline-none"
        >
          JM.
          <span
            aria-hidden="true"
            className="bg-burgundy absolute -bottom-2 left-0 h-px w-0 transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full"
          />
        </Link>

        <span className="text-technical-300 font-mono text-[0.6875rem] tracking-[0.18em] uppercase">
          Index / 00
        </span>

        <Link
          href="/"
          className="text-technical-300 hover:text-foreground focus-visible:text-foreground font-mono text-[0.6875rem] tracking-[0.18em] uppercase transition-colors outline-none"
        >
          Portfolio
        </Link>
      </header>

      {/* Identity */}
      <section className="border-border-subtle grid gap-12 border-b py-16 md:grid-cols-12 md:items-end md:py-24">
        <div className="md:col-span-8">
          <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
            Professional index
          </p>

          <h1 className="font-display mt-7 text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-[-0.055em]">
            Jonathan
            <br />
            Morales
          </h1>

          <p className="text-technical-100 mt-8 text-lg">{siteConfig.role}</p>
        </div>

        <div className="grid gap-6 md:col-span-4">
          <div className="border-border-subtle border-t pt-4">
            <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
              Based
            </p>

            <p className="text-technical-100 mt-2 text-sm">{contactProfile.location}</p>
          </div>

          <div className="border-border-subtle border-t pt-4">
            <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
              Availability
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="bg-burgundy-signal size-1.5 rounded-full" />

              <p className="text-technical-100 text-sm">{contactProfile.availability}</p>
            </div>
          </div>

          <div className="border-border-subtle border-t pt-4">
            <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
              System
            </p>

            <p className="text-technical-100 mt-2 font-mono text-sm">Portfolio / 2026</p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="index-work" className="border-border-subtle border-b py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
              01 / Selected Work
            </p>

            <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-5xl">
              Project evidence.
            </h2>
          </div>

          <span className="text-technical-500 hidden font-mono text-[0.625rem] tracking-[0.16em] uppercase sm:block">
            {String(projects.length).padStart(2, "0")} records
          </span>
        </div>

        <div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group border-border-subtle grid gap-4 border-t py-6 outline-none sm:grid-cols-[4rem_1fr_auto] sm:items-center"
            >
              <span className="text-technical-500 font-mono text-[0.625rem]">{project.index}</span>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                    {project.name}
                  </h3>

                  <span
                    className={`font-mono text-[0.5625rem] tracking-[0.14em] uppercase ${
                      project.status === "completed" ? "text-technical-500" : "text-burgundy-signal"
                    }`}
                  >
                    {project.status === "completed" ? "Completed" : "In progress"}
                  </span>
                </div>

                <p className="text-technical-500 mt-2 font-mono text-[0.5625rem] tracking-[0.12em] uppercase">
                  {project.domains.join(" / ")}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-burgundy-signal font-mono transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/#work"
          className="text-technical-300 hover:text-foreground focus-visible:text-foreground border-border-subtle mt-8 inline-flex border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase outline-none"
        >
          Explore work system →
        </Link>
      </section>

      {/* Engineering */}
      <section className="border-border-subtle border-b py-16 md:py-20">
        <div className="mb-10">
          <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
            02 / Engineering
          </p>

          <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-5xl">
            Domain coverage.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {engineeringDomains.map((domain) => (
            <div key={domain.id} className="border-border-subtle border-t py-7 md:pr-8">
              <div className="flex items-center gap-3">
                <span className="text-burgundy-signal font-mono text-[0.625rem]">
                  {domain.code}
                </span>

                <span className="text-technical-500 font-mono text-[0.5625rem]">
                  {domain.index}
                </span>
              </div>

              <h3 className="font-display mt-5 text-3xl tracking-[-0.035em]">{domain.name}</h3>

              <p className="text-technical-300 mt-4 max-w-sm text-sm leading-7">
                {domain.statement}
              </p>

              <p className="text-technical-500 mt-6 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                {String(domain.technologies.length).padStart(2, "0")} technologies
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/#engineering"
          className="text-technical-300 hover:text-foreground focus-visible:text-foreground border-border-subtle mt-8 inline-flex border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase outline-none"
        >
          Inspect engineering →
        </Link>
      </section>

      {/* Experience */}
      <section className="border-border-subtle border-b py-16 md:py-20">
        <div className="mb-10">
          <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
            03 / Experience
          </p>

          <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-5xl">
            Professional sequence.
          </h2>
        </div>

        <div>
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="border-border-subtle grid gap-5 border-t py-7 md:grid-cols-[4rem_1.1fr_1fr_auto] md:items-start"
            >
              <span className="text-technical-500 font-mono text-[0.625rem]">
                {experience.index}
              </span>

              <div>
                <h3 className="font-display text-3xl tracking-[-0.035em]">{experience.company}</h3>

                <p className="text-technical-100 mt-2 text-sm">{experience.role}</p>
              </div>

              <p className="text-technical-300 max-w-lg text-sm leading-7">{experience.summary}</p>

              <div className="md:text-right">
                <p className="text-technical-300 font-mono text-[0.625rem]">
                  {formatPeriod(experience.period)}
                </p>

                <p className="text-burgundy-signal mt-2 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
                  {experience.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/#experience"
          className="text-technical-300 hover:text-foreground focus-visible:text-foreground border-border-subtle mt-8 inline-flex border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase outline-none"
        >
          Inspect experience →
        </Link>
      </section>

      {/* Profile */}
      <section className="border-border-subtle grid gap-12 border-b py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
            04 / Direction
          </p>
        </div>

        <div className="md:col-span-8">
          <p className="font-display text-4xl leading-none tracking-[-0.04em] md:text-6xl">
            Frontend depth.
            <br />
            Backend expansion.
            <br />
            Complete systems.
          </p>

          <Link
            href="/#about"
            className="text-technical-300 hover:text-foreground focus-visible:text-foreground border-border-subtle mt-10 inline-flex border-b pb-2 font-mono text-[0.625rem] tracking-[0.16em] uppercase outline-none"
          >
            About the person →
          </Link>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 md:py-20">
        <div className="mb-10">
          <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
            05 / Channels
          </p>

          <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-5xl">
            Open channel.
          </h2>
        </div>

        <div className="grid md:grid-cols-3">
          {contactProfile.channels.map((channel, index) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noreferrer" : undefined}
              className="group border-border-subtle border-t py-7 outline-none md:pr-8"
            >
              <div className="flex items-center justify-between gap-6">
                <span className="text-technical-500 font-mono text-[0.5625rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  aria-hidden="true"
                  className="text-burgundy-signal transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                >
                  ↗
                </span>
              </div>

              <p className="text-burgundy-signal mt-5 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                {channel.label}
              </p>

              <p className="text-technical-100 mt-3 text-sm wrap-break-word">{channel.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* End */}
      <footer className="border-border-subtle flex flex-col gap-8 border-t py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.18em] uppercase">JM.</p>

          <p className="text-technical-500 mt-3 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
            Index / End
          </p>
        </div>

        <Link
          href="/"
          className="font-display text-3xl tracking-[-0.035em] transition-transform duration-300 outline-none hover:-translate-x-1 focus-visible:-translate-x-1 motion-reduce:transition-none"
        >
          Return to portfolio ←
        </Link>
      </footer>
    </main>
  );
}
