"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

interface CaseStudyRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  amount?: number;
}

const caseStudyEase = [0.22, 1, 0.36, 1] as const;

export function CaseStudyReveal({
  children,
  className,
  delay = 0,
  distance = 20,
  amount = 0.18,
}: CaseStudyRevealProps) {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: caseStudyEase,
      }}
    >
      {children}
    </motion.div>
  );
}
