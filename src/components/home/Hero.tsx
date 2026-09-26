"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import desktopBg from "@/assets/images/haunted-desktop.png";
import mobileBg from "@/assets/images/haunted-mobile.png";

export default function Hero() {
  const router = useRouter();
  const [bookOpen, setBookOpen] = useState(false);
  const [jump, setJump] = useState(false);
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-[#F5F1E8]">

      {/* Desktop */}
      <Image
        src={desktopBg}
        alt="Haunted Mansion"
        fill
        priority
        className="hidden md:block object-cover object-center"
      />

      {/* Mobile */}
      <Image
        src={mobileBg}
        alt="Haunted Mansion"
        fill
        priority
        className="block md:hidden object-cover object-center"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black via-black/20 to-black/60" />

      {/* Floating fog */}
      <motion.div
        animate={{ x: [0, 70, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
        className="absolute -left-24 bottom-0 h-64 w-[420px] rounded-full bg-white/5 blur-3xl"
      />

      <motion.div
        animate={{ x: [50, -40, 50] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute right-0 bottom-10 h-60 w-[380px] rounded-full bg-white/5 blur-[110px]"
      />

      {/* Spider */}
      <motion.div
        initial={{ y: -120 }}
        animate={{ y: 140 }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 4 }}
        className="absolute right-[18%] top-0 hidden md:block"
      >
        <div className="mx-auto h-28 w-px bg-gray-400/40" />
        <div className="h-3 w-3 rounded-full bg-black" />
      </motion.div>

      {/* Content */}
      <section className="relative z-20 flex h-full items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-12">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96A]"
            >
              IETE SFIT • MOSAIC 2026
            </motion.p>

            <h1 className="font-cinzel text-6xl md:text-7xl leading-none">
              THE
              <span className="block text-[#F5F1E8]">CONJURING</span>
            </h1>

            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
              Paranormal Investigation
            </p>

            <h2 className="mt-8 text-3xl md:text-5xl leading-tight">
              Are you ready to face what others cannot see?
            </h2>

            <p className="mt-5 max-w-md leading-7 text-neutral-300">
              Step into the unknown. Solve the clues, uncover the truth and survive
              the haunted investigation with your team.
            </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push("/register")}
                className="group mt-10 flex items-center gap-3 rounded-full border border-[#C8A96A] bg-[#7A0C14]/90 px-7 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#8E1019]"
              >
                Enter The House
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </motion.button>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </main>
  );
}