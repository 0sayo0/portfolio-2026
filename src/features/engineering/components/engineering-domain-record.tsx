"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";

interface EngineeringDomainRecordProps {
  domain: EngineeringDomain;
  isActive: boolean;
  onToggle: () => void;
}

export function EngineeringDomainRecord({
  domain,
  isActive,
  onToggle,
}: EngineeringDomainRecordProps) {
  const shouldReduceMotion = useReducedMotion();

  const detailsId = `domain-${domain.id}-details`;

  const titleId = `domain-${domain.id}-title`;

  return (
    <motion.article
      id={`domain-${domain.id}`}
      className="group scroll-mt-28"
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="grid gap-8 py-10 md:grid-cols-12 md:gap-6 md:py-14">
        {/* Index + code */}
        <div className="flex items-start gap-5 md:col-span-2">
          <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
            {domain.index}
          </span>

          <span
            className={`font-mono text-xs tracking-[0.18em] transition-colors duration-300 ${
              isActive ? "text-burgundy" : "text-technical-500"
            }`}
          >
            {domain.code}
          </span>
        </div>

        {/* Domain trigger */}
        <div className="md:col-span-3">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isActive}
            aria-controls={detailsId}
            className="group/button focus-visible:ring-burgundy/70 focus-visible:ring-offset-background flex w-full items-start justify-between gap-4 rounded-sm text-left focus-visible:ring-1 focus-visible:ring-offset-4 focus-visible:outline-none"
          >
            <h3
              id={titleId}
              className={`font-display text-4xl tracking-[-0.035em] transition-colors duration-300 md:text-5xl ${
                isActive
                  ? "text-foreground"
                  : "text-technical-100 group-hover/button:text-foreground"
              }`}
            >
              {domain.name}
            </h3>

            <span
              aria-hidden="true"
              className="text-technical-500 group-hover/button:text-burgundy group-focus-visible/button:text-burgundy mt-2 font-mono text-xs transition-colors"
            >
              {isActive ? "−" : "+"}
            </span>
          </button>
        </div>

        {/* Statement */}
        <div className="md:col-span-4">
          <p
            className={`max-w-xl text-sm leading-7 transition-colors duration-300 md:text-base ${
              isActive ? "text-technical-100" : "text-technical-300"
            }`}
          >
            {domain.statement}
          </p>
        </div>

        {/* Capabilities preview */}
        <div className="md:col-span-3">
          <p className="text-technical-500 mb-3 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Capabilities
          </p>

          <ul className="space-y-1.5">
            {domain.capabilities.slice(0, 4).map((capability) => (
              <li key={capability} className="text-technical-100 text-sm">
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expanded domain data */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            id={detailsId}
            role="region"
            aria-labelledby={titleId}
            key={domain.id}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="border-border-subtle grid gap-10 border-t py-8 md:grid-cols-12 md:gap-6 md:py-10">
              <div className="md:col-span-3 md:col-start-3">
                <p className="text-burgundy font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
                  Domain / {domain.code}
                </p>

                <p className="text-technical-300 mt-3 max-w-xs text-sm leading-6">
                  Expanded engineering record.
                </p>
              </div>

              <div className="md:col-span-3">
                <p className="text-technical-500 mb-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
                  Full Capabilities
                </p>

                <ul className="space-y-2">
                  {domain.capabilities.map((capability, index) => (
                    <li
                      key={capability}
                      className="text-technical-100 flex items-baseline gap-3 text-sm"
                    >
                      <span className="text-technical-500 font-mono text-[0.5rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4">
                <p className="text-technical-500 mb-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {domain.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border-border-subtle text-technical-100 border-b pb-1 text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
