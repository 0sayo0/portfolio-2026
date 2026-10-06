"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";
import { entranceEase, entranceTiming } from "@/features/entrance/lib/entrance-motion";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

const navigationSections = [
  {
    id: "entrance",
    label: "00 / Entrance",
  },
  {
    id: "engineering",
    label: "01 / Engineering",
  },
  {
    id: "knowledge",
    label: "02 / Knowledge",
  },
] as const;

type NavigationSectionId = (typeof navigationSections)[number]["id"];

export function SiteHeader() {
  const shouldReduceMotion = useReducedMotionPreference();

  const [activeSectionId, setActiveSectionId] = useState<NavigationSectionId>("entrance");

  const activeSection =
    navigationSections.find((section) => section.id === activeSectionId) ?? navigationSections[0];

  useEffect(() => {
    const sectionElements = navigationSections
      .map((section) => {
        const element = document.getElementById(section.id);

        return element
          ? {
              id: section.id,
              element,
            }
          : null;
      })
      .filter(
        (
          section,
        ): section is {
          id: NavigationSectionId;
          element: HTMLElement;
        } => section !== null,
      );

    if (sectionElements.length === 0) return;

    function resolveInitialSection() {
      const activationPoint = window.innerHeight * 0.4;

      const currentSection = sectionElements.find(({ element }) => {
        const bounds = element.getBoundingClientRect();

        return bounds.top <= activationPoint && bounds.bottom > activationPoint;
      });

      if (currentSection) {
        setActiveSectionId(currentSection.id);
      }
    }

    resolveInitialSection();

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);

        if (!activeEntry) return;

        const sectionId = activeEntry.target.id as NavigationSectionId;

        setActiveSectionId(sectionId);
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach(({ element }) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      initial={{
        opacity: 0,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : entranceTiming.navigation,
        ease: entranceEase,
      }}
    >
      <div className="mx-auto grid w-full max-w-400 grid-cols-2 items-center px-6 py-6 md:grid-cols-3 md:px-10 md:py-8 lg:px-[clamp(3rem,4vw,4.5rem)]">
        {/* Identity */}
        <Link
          href="/"
          aria-label="Jonathan Morales — Home"
          className="group pointer-events-auto relative justify-self-start font-mono text-xs font-medium tracking-[0.18em] uppercase"
        >
          <span>JM.</span>

          <span
            aria-hidden="true"
            className="bg-burgundy absolute -bottom-2 left-0 h-px w-0 transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full"
          />
        </Link>

        {/* Current section */}
        <div
          className="text-technical-300 hidden min-h-4 justify-self-center overflow-hidden font-mono text-[0.6875rem] tracking-[0.18em] uppercase md:block"
          aria-label={`Current section: ${activeSection.label}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activeSection.id}
              className="block"
              initial={{
                opacity: 0,
                y: 7,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: -7,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.24,
                ease: entranceEase,
              }}
            >
              {activeSection.label}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Index */}
        <Link
          href="/index"
          className="group text-technical-300 hover:text-foreground focus-visible:text-foreground pointer-events-auto relative justify-self-end font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300"
        >
          <span>Index</span>

          <span
            aria-hidden="true"
            className="bg-burgundy absolute right-0 -bottom-2 h-px w-0 transition-[width] duration-300 group-hover:w-full group-focus-visible:w-full"
          />
        </Link>
      </div>
    </motion.header>
  );
}
