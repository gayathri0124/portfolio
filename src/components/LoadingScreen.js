"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onLoadingComplete }) {
  const [loading, setLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // We reveal the site after the iframe is ready or 5 seconds pass
    if (iframeLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
        if (onLoadingComplete) onLoadingComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [iframeLoaded, onLoadingComplete]);

  useEffect(() => {
    const fallback = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) onLoadingComplete();
    }, 6000);
    return () => clearTimeout(fallback);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="loading-screen"
        >
          <div className="spline-iframe-wrapper">
            <iframe 
              src="https://my.spline.design/loadinggif-dz3kNBWPQAicMISNlMrfoE7t/" 
              frameBorder="0" 
              width="100%" 
              height="100%"
              onLoad={() => setIframeLoaded(true)}
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="loading-text"
          >
            <p className="loading-label">INITIALIZING UNIVERSE</p>
            <div className="loading-bar-wrap">
              <motion.div 
                className="loading-bar"
                initial={{ width: "0%" }}
                animate={{ width: iframeLoaded ? "100%" : "80%" }}
                transition={{ duration: iframeLoaded ? 0.5 : 4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
