"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Clock3, MapPin, Users } from "lucide-react";

export default function RegisterInfo() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#090909] text-[#F5F1E8]">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C8A96A]">
          MOSAIC 2026
        </p>

        <h1 className="font-cinzel mt-4 text-5xl md:text-6xl">
          THE CONJURING
        </h1>

        <p className="mt-2 text-[#C8A96A] uppercase tracking-[0.3em]">
          Paranormal Investigation
        </p>

        <div className="mt-10 rounded-3xl border border-[#C8A96A]/20 bg-white/5 p-8 backdrop-blur">

          <h2 className="font-cinzel text-3xl text-[#E8D9BF]">
            Mission Brief
          </h2>

          <p className="mt-5 leading-8 text-neutral-300">
            A cursed mansion has remained sealed for decades. Strange whispers,
            unexplained disappearances, and supernatural activity have been
            reported. Your team has been selected as paranormal investigators.
            Search the mansion, solve the clues, and escape before the curse
            claims everyone inside.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl border border-white/10 p-5">
              <Users className="mb-3 text-[#C8A96A]" />
              <p className="text-sm text-neutral-400">Team Size</p>
              <h3 className="mt-1 text-xl font-semibold">4 Members</h3>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <Clock3 className="mb-3 text-[#C8A96A]" />
              <p className="text-sm text-neutral-400">Duration</p>
              <h3 className="mt-1 text-xl font-semibold">30 Minutes</h3>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <MapPin className="mb-3 text-[#C8A96A]" />
              <p className="text-sm text-neutral-400">Venue</p>
              <h3 className="mt-1 text-xl font-semibold">SFIT Campus</h3>
            </div>

          </div>

          <div className="mt-10">
            <h3 className="mb-4 font-cinzel text-2xl">Rules</h3>

            <ul className="space-y-3 text-neutral-300">
              <li>• Only SFIT students are allowed.</li>
              <li>• Exactly 4 members per team.</li>
              <li>• Carry your college ID.</li>
              <li>• QR ticket is mandatory for entry.</li>
            </ul>
          </div>

          <button
            onClick={() => router.push("/register/team")}
            className="mt-12 flex items-center gap-3 rounded-md border border-[#C8A96A] bg-[#7A0C14] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition hover:bg-[#93131E]"
          >
            Register
            <ArrowRight size={18} />
          </button>

        </div>

      </section>
    </main>
  );
}