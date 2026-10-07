"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface WorkRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  amount?: number;
}

const revealEase = [0.22, 1, 0.36, 1] as const;

export function WorkReveal({
  children,
  className,
  delay = 0,
  distance = 18,
  amount = 0.2,
}: WorkRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: distance,
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
        duration: shouldReduceMotion ? 0 : 0.75,
        delay: shouldReduceMotion ? 0 : delay,
        ease: revealEase,
      }}
    >
      {children}
    </motion.div>
  );
}
