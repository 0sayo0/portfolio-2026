"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

interface ExperienceRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

const experienceEase = [0.22, 1, 0.36, 1] as const;

export function ExperienceReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: ExperienceRevealProps) {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: shouldReduceMotion ? 0 : -14,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.72,
        delay: shouldReduceMotion ? 0 : delay,
        ease: experienceEase,
      }}
    >
      {children}
    </motion.div>
  );
}
