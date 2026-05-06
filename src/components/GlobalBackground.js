"use client";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="global-bg-container">
      <div className="spline-bg-wrapper">
        <iframe 
          src="https://my.spline.design/particlenebula-8uNmBfoyoBBCScawPqKn3Dh8/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          style={{ pointerEvents: 'auto' }}
        ></iframe>
      </div>
      <div className="bg-overlay-gradient"></div>
    </div>
  );
}
