"use client";

import { motion, useReducedMotion } from "motion/react";

import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";

interface EngineeringSectionProps {
  domains: EngineeringDomain[];
}

export function EngineeringSection({ domains }: EngineeringSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="engineering" className="border-border-subtle relative border-t">
      <div className="mx-auto w-full max-w-400 px-6 py-24 md:px-10 md:py-32 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Section heading */}
        <header className="border-border-subtle grid gap-10 border-b pb-16 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-4">
            <p className="text-burgundy font-mono text-[0.6875rem] tracking-[0.18em] uppercase">
              01 / Engineering
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-tighter">
              I build
              <br />
              web systems.
            </h2>
          </div>
        </header>

        {/* Core → Domain expansion */}
        <div className="border-border-subtle border-b py-10 md:py-12">
          <div className="flex items-end justify-between gap-6">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Core / Domain Expansion
            </p>

            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              06 Domains
            </p>
          </div>

          <div className="relative mt-8 md:mt-10">
            {/* Connection line */}
            <motion.div
              className="bg-border-subtle absolute top-1 left-0 hidden h-px w-full origin-left sm:block"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scaleX: 0,
                    }
              }
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6">
              {domains.map((domain, index) => (
                <motion.div
                  key={domain.id}
                  className="relative"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.6,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="bg-burgundy relative z-10 mb-4 block size-2 rounded-full" />

                  <div className="flex items-baseline gap-2">
                    <span className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em]">
                      {domain.index}
                    </span>

                    <span className="text-burgundy font-mono text-xs tracking-[0.18em]">
                      {domain.code}
                    </span>
                  </div>

                  <p className="text-technical-100 mt-2 text-sm">{domain.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Domain records */}
        <div className="divide-border-subtle divide-y">
          {domains.map((domain, index) => (
            <motion.article
              key={domain.id}
              className="grid gap-8 py-10 md:grid-cols-12 md:gap-6 md:py-14"
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
                amount: 0.25,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-start gap-5 md:col-span-2">
                <span className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em]">
                  {domain.index}
                </span>

                <span className="text-burgundy font-mono text-xs tracking-[0.18em]">
                  {domain.code}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="font-display text-4xl tracking-[-0.035em] md:text-5xl">
                  {domain.name}
                </h3>
              </div>

              <div className="md:col-span-4">
                <p className="text-technical-300 max-w-xl text-sm leading-7 md:text-base">
                  {domain.statement}
                </p>
              </div>

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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
