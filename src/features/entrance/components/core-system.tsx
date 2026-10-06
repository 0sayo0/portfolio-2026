"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

import { entranceEase, entranceTiming } from "@/features/entrance/lib/entrance-motion";

import { engineeringCoreNodes } from "@/features/engineering/content/engineering-core-nodes";

export function CoreSystem() {
  const shouldReduceMotion = useReducedMotionPreference();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, {
    stiffness: 120,
    damping: 22,
    mass: 0.4,
  });

  const springY = useSpring(pointerY, {
    stiffness: 120,
    damping: 22,
    mass: 0.4,
  });

  const rotateX = useTransform(springY, [-1, 1], [4, -4]);
  const rotateY = useTransform(springX, [-1, 1], [-4, 4]);

  const outerX = useTransform(springX, [-1, 1], [-4, 4]);
  const outerY = useTransform(springY, [-1, 1], [-4, 4]);

  const middleX = useTransform(springX, [-1, 1], [-8, 8]);
  const middleY = useTransform(springY, [-1, 1], [-8, 8]);

  const innerX = useTransform(springX, [-1, 1], [-12, 12]);
  const innerY = useTransform(springY, [-1, 1], [-12, 12]);

  const coreX = useTransform(springX, [-1, 1], [-6, 6]);
  const coreY = useTransform(springY, [-1, 1], [-6, 6]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;

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
      className="relative aspect-square w-full max-w-80 sm:max-w-96 md:max-w-124"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 900,
            }
      }
      aria-hidden="true"
    >
      {/* Structural crosshair */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-border-subtle absolute top-1/2 left-0 h-px w-full" />

        <div className="bg-border-subtle absolute top-0 left-1/2 h-full w-px" />
      </div>

      {/* Outer layer */}
      <motion.div
        className="border-border-subtle absolute inset-0 rounded-full border"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: outerX,
                y: outerY,
              }
        }
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.88,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : entranceTiming.core,
          ease: entranceEase,
        }}
      />

      {/* Middle layer */}
      <motion.div
        className="border-border-subtle absolute inset-[17%] rounded-full border"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: middleX,
                y: middleY,
              }
        }
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.82,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.1,
          ease: entranceEase,
        }}
      />

      {/* Inner layer */}
      <motion.div
        className="border-border-subtle absolute inset-[34%] rounded-full border"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: innerX,
                y: innerY,
              }
        }
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.72,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.2,
          ease: entranceEase,
        }}
      />

      {/* Node system */}
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        className="absolute inset-0 size-full overflow-visible"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: middleX,
                y: middleY,
              }
        }
      >
        {/* External node polygon */}
        <motion.path
          d="M50 11L79 29L84 65L50 87L16 65L21 29L50 11Z"
          className="stroke-border-subtle"
          strokeWidth="0.3"
          initial={
            shouldReduceMotion
              ? false
              : {
                  pathLength: 0,
                  opacity: 0,
                }
          }
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            pathLength: {
              duration: shouldReduceMotion ? 0 : 1.1,
              delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.18,
              ease: entranceEase,
            },
            opacity: {
              duration: shouldReduceMotion ? 0 : 0.3,
              delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.18,
            },
          }}
        />

        {/* Internal connections */}
        <motion.path
          d="M50 11V87M21 29L84 65M79 29L16 65"
          className="stroke-border-subtle"
          strokeWidth="0.25"
          initial={
            shouldReduceMotion
              ? false
              : {
                  pathLength: 0,
                  opacity: 0,
                }
          }
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            pathLength: {
              duration: shouldReduceMotion ? 0 : 1,
              delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.28,
              ease: entranceEase,
            },
            opacity: {
              duration: shouldReduceMotion ? 0 : 0.3,
              delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.28,
            },
          }}
        />

        {/* Engineering domain nodes */}
        {engineeringCoreNodes.map((node, index) => (
          <g key={node.id}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              className="fill-technical-300"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scale: 0,
                      opacity: 0,
                    }
              }
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.38 + index * 0.055,
                ease: entranceEase,
              }}
            />

            <motion.text
              x={node.cx}
              y={node.cy - 3.5}
              textAnchor="middle"
              className="fill-technical-300 font-mono text-[2.8px] tracking-[0.12em] sm:text-[2.5px] md:text-[2.2px]"
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
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.46 + index * 0.055,
              }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </motion.svg>

      {/* Central core */}
      <motion.div
        className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: coreX,
                y: coreY,
              }
        }
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.65,
          delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.48,
          ease: entranceEase,
        }}
      >
        <div className="border-burgundy/60 absolute inset-0 rounded-full border" />

        <div className="bg-burgundy absolute inset-[28%] rounded-full" />

        <div className="bg-foreground absolute top-1/2 left-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </motion.div>

      {/* Core identifier */}
      <motion.span
        className="text-technical-300 absolute top-1/2 left-1/2 mt-8 -translate-x-1/2 font-mono text-[0.625rem] tracking-[0.18em] uppercase"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: coreX,
                y: coreY,
              }
        }
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 4,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.65,
          ease: entranceEase,
        }}
      >
        System / 00
      </motion.span>

      {/* Technical coordinates — intentionally static */}
      <span className="text-technical-700 absolute top-[7%] left-1/2 -translate-x-1/2 font-mono text-[0.5rem] tracking-[0.16em] uppercase">
        Y / 00
      </span>

      <span className="text-technical-700 absolute top-1/2 right-[5%] -translate-y-1/2 font-mono text-[0.5rem] tracking-[0.16em] uppercase">
        X / 01
      </span>

      <span className="text-technical-700 absolute bottom-[7%] left-1/2 -translate-x-1/2 font-mono text-[0.5rem] tracking-[0.16em] uppercase">
        Y / 02
      </span>

      <span className="text-technical-700 absolute top-1/2 left-[5%] -translate-y-1/2 font-mono text-[0.5rem] tracking-[0.16em] uppercase">
        X / 03
      </span>

      {/* System status */}
      <motion.div
        className="absolute top-[9%] right-[10%] flex items-center gap-2"
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
          duration: shouldReduceMotion ? 0 : 0.5,
          delay: shouldReduceMotion ? 0 : entranceTiming.core + 0.8,
        }}
      >
        <motion.span
          className="bg-burgundy size-2 rounded-full"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.3, 1, 0.3],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />

        <span className="text-technical-300 font-mono text-[0.625rem] tracking-[0.16em] uppercase sm:text-sm">
          Active
        </span>
      </motion.div>
    </motion.div>
  );
}
