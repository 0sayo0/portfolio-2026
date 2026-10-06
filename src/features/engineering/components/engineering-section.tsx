"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { EngineeringDomainRecord } from "@/features/engineering/components/engineering-domain-record";
import type { EngineeringDomain } from "@/features/engineering/schemas/engineering-domain-schema";

interface EngineeringSectionProps {
  domains: EngineeringDomain[];
}

export function EngineeringSection({ domains }: EngineeringSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const [activeDomainId, setActiveDomainId] = useState<EngineeringDomain["id"] | null>(
    domains[0]?.id ?? null,
  );

  const [pendingScrollDomainId, setPendingScrollDomainId] = useState<
    EngineeringDomain["id"] | null
  >(null);

  function handleDomainToggle(domainId: EngineeringDomain["id"]) {
    setActiveDomainId((current) => (current === domainId ? null : domainId));
  }

  function handleRailSelect(domainId: EngineeringDomain["id"]) {
    setActiveDomainId(domainId);
    setPendingScrollDomainId(domainId);
  }

  useEffect(() => {
    if (!pendingScrollDomainId) return;

    const timeoutId = window.setTimeout(
      () => {
        const domainElement = document.getElementById(`domain-${pendingScrollDomainId}`);

        domainElement?.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "center",
        });

        setPendingScrollDomainId(null);
      },
      shouldReduceMotion ? 0 : 580,
    );

    return () => window.clearTimeout(timeoutId);
  }, [pendingScrollDomainId, shouldReduceMotion]);

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
              {domains.map((domain, index) => {
                const isActive = domain.id === activeDomainId;

                return (
                  <motion.button
                    key={domain.id}
                    type="button"
                    onClick={() => handleRailSelect(domain.id)}
                    aria-label={`Open ${domain.name} engineering domain`}
                    aria-pressed={isActive}
                    className="group focus-visible:ring-burgundy/70 focus-visible:ring-offset-background relative rounded-sm text-left focus-visible:ring-1 focus-visible:ring-offset-4 focus-visible:outline-none"
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
                    <motion.span
                      aria-hidden="true"
                      className={`relative z-10 mb-4 block rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-burgundy size-2.5"
                          : "bg-technical-500 group-hover:bg-burgundy group-focus-visible:bg-burgundy size-2"
                      }`}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: isActive ? 1.15 : 1,
                            }
                      }
                      transition={{
                        duration: 0.25,
                      }}
                    />

                    <div className="flex items-baseline gap-2">
                      <span className="text-technical-500 font-mono text-[0.5625rem] tracking-[0.16em]">
                        {domain.index}
                      </span>

                      <span
                        className={`font-mono text-xs tracking-[0.18em] transition-colors duration-300 ${
                          isActive
                            ? "text-burgundy"
                            : "text-technical-300 group-hover:text-burgundy group-focus-visible:text-burgundy"
                        }`}
                      >
                        {domain.code}
                      </span>
                    </div>

                    <p
                      className={`mt-2 text-sm transition-colors duration-300 ${
                        isActive
                          ? "text-foreground"
                          : "text-technical-300 group-hover:text-foreground group-focus-visible:text-foreground"
                      }`}
                    >
                      {domain.name}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Domain records */}
        <div className="divide-border-subtle divide-y">
          {domains.map((domain) => (
            <EngineeringDomainRecord
              key={domain.id}
              domain={domain}
              isActive={domain.id === activeDomainId}
              onToggle={() => handleDomainToggle(domain.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
