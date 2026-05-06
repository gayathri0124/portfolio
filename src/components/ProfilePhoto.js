"use client";

import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <div className="profile-photo-container">
      <motion.div 
        className="profile-photo-glass"
        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
      >
        <div className="profile-photo-frame">
          <img src="/photo.jpg" alt="Gayathri Kalthi Reddy" className="profile-img" />
        </div>
        <div className="glass-reflection" />
      </motion.div>
      <div className="profile-shadow" />
    </div>
  );
}
