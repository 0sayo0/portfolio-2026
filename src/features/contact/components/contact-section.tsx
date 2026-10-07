import type { ContactProfile } from "@/features/contact/schemas/contact-profile-schema";

interface ContactSectionProps {
  profile: ContactProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 pt-24 md:px-10 md:pt-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* About → Contact handoff */}
        <div className="border-border-subtle grid gap-5 border-b pb-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center md:pb-10">
          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              05 / About
            </p>

            <p className="text-technical-300 mt-2 text-sm">About reveals the person.</p>
          </div>

          <div aria-hidden="true" className="hidden items-center gap-3 sm:flex">
            <span className="bg-border-subtle h-px w-12 md:w-20" />

            <span className="text-burgundy-signal font-mono text-[0.625rem]">→</span>

            <span className="bg-border-subtle h-px w-12 md:w-20" />
          </div>

          <div className="sm:text-right">
            <p className="text-burgundy-signal font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              06 / Contact
            </p>

            <p className="text-technical-100 mt-2 text-sm">Contact opens what comes next.</p>
          </div>
        </div>

        {/* Final heading */}
        <header className="border-border-subtle grid gap-10 border-b py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="bg-burgundy-signal size-1.5 rounded-full" />

              <p className="text-burgundy-signal font-mono text-xs tracking-[0.18em] uppercase">
                Channel open
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display max-w-6xl text-[clamp(5rem,10vw,10rem)] leading-[0.78] tracking-[-0.055em]">
              Open
              <br />
              channel.
            </h2>
          </div>
        </header>

        {/* Primary contact statement */}
        <div className="border-border-subtle grid gap-12 border-b py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-3">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Next system
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <p className="font-display text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
              {profile.statement}
            </p>

            <p className="text-technical-300 mt-10 max-w-3xl text-base leading-8">
              {profile.secondaryStatement}
            </p>
          </div>
        </div>

        {/* Primary email action */}
        <div className="border-border-subtle border-b py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Direct channel
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <a
                href="mailto:jonathansme01@gmail.com"
                className="group/contact inline-block max-w-full outline-none"
              >
                <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Start a conversation
                </span>

                <span className="border-border-subtle group-hover/contact:border-burgundy-signal group-focus-visible/contact:border-burgundy-signal mt-5 flex max-w-full items-end justify-between gap-6 border-b pb-5 transition-colors duration-300 motion-reduce:transition-none">
                  <span className="text-foreground text-xl tracking-tight break-all sm:text-2xl md:text-4xl">
                    jonathansme01@gmail.com
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-burgundy-signal shrink-0 font-mono text-lg transition-transform duration-300 group-hover/contact:translate-x-1 group-focus-visible/contact:translate-x-1 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="border-border-subtle grid border-b md:grid-cols-3">
          {profile.channels.map((channel, index) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noreferrer" : undefined}
              aria-label={
                channel.external
                  ? `Open ${channel.label} in a new tab`
                  : `Contact by ${channel.label}`
              }
              className="group/channel border-border-subtle relative border-b py-8 outline-none last:border-b-0 md:border-r md:border-b-0 md:px-8 md:last:border-r-0"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-technical-500 font-mono text-[0.5625rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-burgundy-signal mt-5 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                    {channel.label}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-technical-500 group-hover/channel:text-burgundy-signal group-focus-visible/channel:text-burgundy-signal font-mono transition-colors duration-200 motion-reduce:transition-none"
                >
                  ↗
                </span>
              </div>

              <p className="text-technical-100 mt-8 text-sm wrap-break-word">{channel.value}</p>

              <span
                aria-hidden="true"
                className="bg-burgundy-signal absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover/channel:scale-x-100 group-focus-visible/channel:scale-x-100 motion-reduce:transition-none"
              />
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="border-border-subtle grid gap-8 border-b py-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Availability
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="bg-burgundy-signal size-1.5 rounded-full" />

              <p className="text-technical-100 text-sm">{profile.availability}</p>
            </div>
          </div>

          <div>
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Based
            </p>

            <p className="text-technical-100 mt-3 text-sm">{profile.location}</p>
          </div>

          <div className="sm:col-span-2 md:col-span-1 md:text-right">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              System
            </p>

            <p className="text-technical-100 mt-3 font-mono text-sm">06 / END</p>
          </div>
        </div>

        {/* Final record */}
        <footer className="grid min-h-72 items-end gap-12 py-12 md:min-h-96 md:grid-cols-12 md:py-16">
          <div className="md:col-span-4">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] uppercase">JM.</p>

            <p className="text-technical-500 mt-4 font-mono text-[0.625rem] tracking-[0.14em] uppercase">
              Full Stack Software Developer
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="font-display text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Built with intent.
              <br />
              Still evolving.
            </p>
          </div>

          <div className="md:col-span-3 md:text-right">
            <p className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.14em] uppercase">
              Jonathan Morales
              <br />© 2026
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
