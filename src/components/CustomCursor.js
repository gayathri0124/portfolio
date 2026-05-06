"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 1000, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 40 });
  const ringX = useSpring(0, { stiffness: 150, damping: 30 });
  const ringY = useSpring(0, { stiffness: 150, damping: 30 });
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    const updateTargets = () => {
      const targets = document.querySelectorAll("a, button, .proj-card, .glass-card, input, textarea");
      targets.forEach(target => {
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateTargets();
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!mounted) return null;

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s" }}>
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2 : 1
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.4 : 1,
          borderWidth: isHovering ? "1px" : "1.5px"
        }}
      />
    </div>
  );
}
