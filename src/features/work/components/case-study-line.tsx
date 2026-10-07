"use client";

import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

interface CaseStudyLineProps {
  delay?: number;
}

export function CaseStudyLine({ delay = 0 }: CaseStudyLineProps) {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <motion.span
      aria-hidden="true"
      className="bg-border-subtle block h-px w-full origin-left"
      initial={{
        scaleX: 0,
      }}
      whileInView={{
        scaleX: 1,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
