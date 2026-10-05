"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

const nodes = [
  { id: "frontend", cx: 50, cy: 11, r: 1.35, label: "FE" },
  { id: "backend", cx: 79, cy: 29, r: 1.05, label: "BE" },
  { id: "data", cx: 84, cy: 65, r: 1.2, label: "DA" },
  { id: "quality", cx: 50, cy: 87, r: 1.45, label: "QA" },
  { id: "delivery", cx: 16, cy: 65, r: 1.05, label: "DL" },
  { id: "tooling", cx: 21, cy: 29, r: 1.15, label: "TL" },
] as const;

export function CoreSystem() {
  const shouldReduceMotion = useReducedMotion();

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
    if (shouldReduceMotion) return;

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
      className="relative aspect-square w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-124"
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
        <path
          d="M50 11L79 29L84 65L50 87L16 65L21 29L50 11Z"
          className="stroke-border-subtle"
          strokeWidth="0.3"
        />

        <path
          d="M50 11V87M21 29L84 65M79 29L16 65"
          className="stroke-border-subtle"
          strokeWidth="0.25"
        />

        {nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.cx} cy={node.cy} r={node.r} className="fill-technical-300" />

            <text
              x={node.cx}
              y={node.cy - 3.5}
              textAnchor="middle"
              className="fill-technical-500 font-mono text-[2.2px] tracking-[0.12em]"
            >
              {node.label}
            </text>
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
      >
        <div className="border-burgundy/60 absolute inset-0 rounded-full border" />

        <div className="bg-burgundy absolute inset-[28%] rounded-full" />

        <div className="bg-foreground absolute top-1/2 left-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </motion.div>

      {/* Core identifier */}
      <motion.span
        className="text-technical-500 absolute top-1/2 left-1/2 mt-8 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.18em] uppercase"
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: coreX,
                y: coreY,
              }
        }
      >
        System / 00
      </motion.span>

      {/* Technical coordinates */}
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
      <div className="absolute top-[12%] right-[12%] flex items-center gap-2">
        <span className="bg-burgundy size-1.5 rounded-full" />

        <span className="text-technical-500 font-mono text-[0.5rem] tracking-[0.16em] uppercase">
          Active
        </span>
      </div>
    </motion.div>
  );
}
