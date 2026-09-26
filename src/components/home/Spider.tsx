"use client";

import { motion } from "framer-motion";

export default function Spider() {
  return (
    <motion.div
      initial={{ y: -120 }}
      animate={{ y: 140 }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatDelay: 4,
      }}
      className="absolute right-[18%] top-0 z-10 hidden md:block"
    >
      <div className="mx-auto h-28 w-px bg-gray-400/40" />
      <div className="h-3 w-3 rounded-full bg-black shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
    </motion.div>
  );
}