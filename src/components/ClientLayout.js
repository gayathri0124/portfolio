"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import GlobalBackground from "./GlobalBackground";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && <GlobalBackground />}
      
      <CustomCursor />
      
      <nav className={`navbar ${isLoading ? 'hidden' : ''}`}>
        <Link href="/" className="nav-brand">GK<span>R</span></Link>
        <div className="nav-right">
          <div className="nav-links">
            <Link href="#work" className="nav-link">Experience</Link>
            <Link href="#projects" className="nav-link">Projects</Link>
            <Link href="#skills" className="nav-link">Skills</Link>
            <Link href="#education" className="nav-link">Education</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>
          <ThemeToggle />
          <a href="mailto:gayathrireddykalthireddy@gmail.com" className="btn-accent" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
            HIRE ME
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
