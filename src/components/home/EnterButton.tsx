"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EnterButton() {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => router.push("/register")}
      className="group flex items-center gap-3 rounded-full border border-[#C8A96A] bg-[#7A0C14]/90 px-7 py-4 text-sm font-medium tracking-widest uppercase transition hover:bg-[#8F101A]"
    >
      Enter The House

      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
      />
    </motion.button>
  );
}