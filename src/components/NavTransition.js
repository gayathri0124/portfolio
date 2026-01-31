"use client";

import { useEffect } from "react";

export default function NavTransition() {
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest("a[href^='#']");
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      const scroller = document.querySelector(".snap-container");
      if (!target || !scroller) return;

      event.preventDefault();
      document.body.classList.add("nav-transition");

      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);

      window.setTimeout(() => {
        document.body.classList.remove("nav-transition");
      }, 900);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
