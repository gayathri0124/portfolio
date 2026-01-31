"use client";

import { useEffect } from "react";

export default function ScrollDepth() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scroller =
      document.querySelector(".snap-container") || window;

    if (media.matches) {
      root.style.setProperty("--scroll-depth", "0");
      return () => {};
    }

    let raf = 0;
    const handleScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const y =
          scroller === window
            ? window.scrollY || document.documentElement.scrollTop
            : scroller.scrollTop;
        const depth = Math.max(-1, Math.min(1, y / 600));
        root.style.setProperty("--scroll-depth", depth.toFixed(3));
        raf = 0;
      });
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
