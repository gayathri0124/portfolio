"use client";

import { useEffect } from "react";

export default function GlobalParallax() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setVars = (x, y) => {
      const tiltX = `${(x * 1.4).toFixed(2)}deg`;
      const tiltY = `${(-y * 1.4).toFixed(2)}deg`;
      root.style.setProperty("--page-tilt-x", tiltX);
      root.style.setProperty("--page-tilt-y", tiltY);
      root.style.setProperty("--shift-sm-x", `${(x * 6).toFixed(1)}px`);
      root.style.setProperty("--shift-sm-y", `${(y * 6).toFixed(1)}px`);
      root.style.setProperty("--shift-md-x", `${(x * 12).toFixed(1)}px`);
      root.style.setProperty("--shift-md-y", `${(y * 12).toFixed(1)}px`);
      root.style.setProperty("--glare-x", `${(x * 50 + 50).toFixed(1)}%`);
      root.style.setProperty("--glare-y", `${(-y * 50 + 50).toFixed(1)}%`);
    };

    if (media.matches) {
      setVars(0, 0);
      return () => {};
    }

    let raf = 0;
    const handleMove = (event) => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 - 1;
        setVars(x, y);
        raf = 0;
      });
    };

    const handleLeave = () => setVars(0, 0);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
