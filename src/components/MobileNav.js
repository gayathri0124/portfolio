"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#top",       label: "Home" },
  { href: "#work",      label: "Work" },
  { href: "#projects",  label: "Projects" },
  { href: "#skills",    label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact",   label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const btnRef = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  /* Prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      {/* Hamburger button — visible only at ≤600px via CSS */}
      <button
        ref={btnRef}
        type="button"
        className={`hamburger${open ? " hamburger--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-down drawer */}
      <nav
        id="mobile-nav-drawer"
        ref={drawerRef}
        className={`mobile-nav-drawer${open ? " mobile-nav-drawer--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="mobile-nav-list" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} role="listitem">
              <a
                href={href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
                tabIndex={open ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-footer">
          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={handleLinkClick}
            tabIndex={open ? 0 : -1}
          >
            Let&apos;s build →
          </a>
        </div>
      </nav>
    </>
  );
}
