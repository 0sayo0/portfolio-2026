"use client";

import { motion, useReducedMotion } from "motion/react";

import { CoreSystem } from "@/features/entrance/components/core-system";
import { entranceEase, entranceTiming } from "@/features/entrance/lib/entrance-motion";
import { siteConfig } from "@/lib/site-config";

export function EntranceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-dvh overflow-hidden">
      {/* Structural grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="border-border-subtle mx-auto h-full w-full max-w-400 border-x"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : entranceTiming.grid,
            ease: entranceEase,
          }}
        />

        <motion.div
          className="border-border-subtle absolute inset-x-0 top-[22%] origin-left border-t"
          initial={
            shouldReduceMotion
              ? false
              : {
                  scaleX: 0,
                }
          }
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : entranceTiming.grid,
            ease: entranceEase,
          }}
        />

        <motion.div
          className="border-border-subtle absolute inset-x-0 bottom-[16%] origin-right border-t"
          initial={
            shouldReduceMotion
              ? false
              : {
                  scaleX: 0,
                }
          }
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : entranceTiming.grid + 0.08,
            ease: entranceEase,
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-dvh w-full max-w-400 grid-cols-4 grid-rows-[auto_1fr_auto] px-6 pt-28 pb-6 md:grid-cols-12 md:px-10 md:pt-32 md:pb-8 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Role */}
        <motion.div
          className="col-span-4 md:col-span-7"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : entranceTiming.role,
            ease: entranceEase,
          }}
        >
          <p className="text-burgundy font-mono text-[0.6875rem] tracking-[0.18em] uppercase">
            {siteConfig.role}
          </p>
        </motion.div>

        {/* Main composition */}
        <div className="col-span-4 grid self-center md:col-span-12 md:grid-cols-12 md:items-center">
          <div className="relative z-10 md:col-span-8">
            <motion.p
              className="text-technical-500 mb-4 font-mono text-[0.625rem] tracking-[0.2em] uppercase"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : entranceTiming.role + 0.08,
                ease: entranceEase,
              }}
            >
              Software / Systems / Interfaces
            </motion.p>

            <h1 className="font-display text-[clamp(5rem,13vw,13rem)] leading-[0.74] tracking-[-0.055em]">
              <span className="block overflow-visible">
                <motion.span
                  className="block"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          y: "22%",
                          clipPath: "polygon(-20% 120%, 120% 120%, 120% 120%, -20% 120%)",
                        }
                  }
                  animate={{
                    y: "0%",
                    clipPath: "polygon(-20% -20%, 120% -20%, 120% 120%, -20% 120%)",
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.95,
                    delay: shouldReduceMotion ? 0 : entranceTiming.title,
                    ease: entranceEase,
                  }}
                >
                  Jonathan
                </motion.span>
              </span>

              <span className="block overflow-visible">
                <motion.span
                  className="ml-[0.08em] block"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          y: "22%",
                          clipPath: "polygon(-20% 120%, 120% 120%, 120% 120%, -20% 120%)",
                        }
                  }
                  animate={{
                    y: "0%",
                    clipPath: "polygon(-20% -20%, 120% -20%, 120% 120%, -20% 120%)",
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.95,
                    delay: shouldReduceMotion ? 0 : entranceTiming.title + 0.09,
                    ease: entranceEase,
                  }}
                >
                  Morales
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Core */}
          <motion.div
            className="relative mt-12 flex items-center justify-center md:col-span-4 md:mt-0"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.92,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              delay: shouldReduceMotion ? 0 : entranceTiming.core,
              ease: entranceEase,
            }}
          >
            <CoreSystem />
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          className="border-border-subtle col-span-4 grid gap-6 border-t pt-5 md:col-span-12 md:grid-cols-12 md:items-end"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : entranceTiming.metadata,
            ease: entranceEase,
          }}
        >
          <div className="md:col-span-4">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Primary Stack
            </p>

            <p className="text-technical-100 mt-2 text-sm">React / TypeScript / Node.js</p>
          </div>

          <div className="md:col-span-4 md:text-center">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Based
            </p>

            <p className="text-technical-100 mt-2 text-sm">{siteConfig.location}</p>
          </div>

          <div className="md:col-span-4 md:text-right">
            <p className="text-technical-500 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Scroll to inspect
            </p>

            <p className="text-technical-100 mt-2 font-mono text-xs">↓ 001</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
