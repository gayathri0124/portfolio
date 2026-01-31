"use client";

import { useEffect, useRef } from "react";

export default function PhotoParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(
        x * 8
      ).toFixed(2)}deg) scale(1.02)`;
    };

    const handleLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div className="photo-card" ref={ref}>
      <img src="/photo.jpg" alt="Gayathri Kalthi Reddy" />
    </div>
  );
}
