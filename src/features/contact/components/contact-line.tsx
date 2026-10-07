"use client";

import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

interface ContactLineProps {
  delay?: number;
}

export function ContactLine({ delay = 0 }: ContactLineProps) {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <motion.span
      aria-hidden="true"
      className="bg-burgundy-signal block h-px w-full origin-left"
      initial={{
        scaleX: 0,
      }}
      whileInView={{
        scaleX: 1,
      }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
