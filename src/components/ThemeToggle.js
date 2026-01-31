"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme-preference";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [resolved, setResolved] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
      return;
    }
    applyTheme("system");
    const media = window.matchMedia("(prefers-color-scheme: light)");
    setResolved(media.matches ? "light" : "dark");
    const handler = (event) => setResolved(event.matches ? "light" : "dark");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (theme !== "system") {
      setResolved(theme);
    }
  }, [theme]);

  const applyTheme = (value) => {
    const root = document.documentElement;
    if (value === "system") {
      root.removeAttribute("data-theme");
      return;
    }
    root.setAttribute("data-theme", value);
  };

  const toggleTheme = () => {
    const current = theme === "system" ? resolved : theme;
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {resolved === "dark" && theme !== "light" ? "Light mode" : "Dark mode"}
    </button>
  );
}
