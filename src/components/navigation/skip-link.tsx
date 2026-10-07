"use client";

import type { MouseEvent } from "react";

export function SkipLink() {
  function handleSkip(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("main-content");

    if (!target) {
      return;
    }

    event.preventDefault();

    target.focus({
      preventScroll: true,
    });

    target.scrollIntoView({
      block: "start",
    });

    window.history.replaceState(null, "", "#main-content");
  }

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="bg-foreground text-background fixed top-4 left-4 z-100 -translate-y-24 px-4 py-3 font-mono text-xs tracking-[0.12em] uppercase transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
