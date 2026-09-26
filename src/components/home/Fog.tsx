"use client";

import { motion } from "framer-motion";

export default function Fog() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute -left-40 bottom-0 h-64 w-[500px] rounded-full bg-white/5 blur-3xl"
      />

      <motion.div
        animate={{ x: [40, -60, 40] }}
        transition={{ duration: 24, repeat: Infinity }}
        className="absolute right-0 bottom-12 h-72 w-[420px] rounded-full bg-white/5 blur-[120px]"
      />
    </>
  );
}