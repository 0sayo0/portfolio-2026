"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

interface AboutRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

const aboutEase = [0.22, 1, 0.36, 1] as const;

export function AboutReveal({ children, className, delay = 0, amount = 0.2 }: AboutRevealProps) {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 10,
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
        duration: shouldReduceMotion ? 0 : 0.9,
        delay: shouldReduceMotion ? 0 : delay,
        ease: aboutEase,
      }}
    >
      {children}
    </motion.div>
  );
}
