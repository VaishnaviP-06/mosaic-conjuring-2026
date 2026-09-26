"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Clock3, MapPin, Users, Shield } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#090909] text-[#F5F1E8]">
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A96A]">
            MOSAIC 2026
          </p>

          <h1 className="font-cinzel mt-4 text-5xl md:text-7xl">
            THE CONJURING
          </h1>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
            Paranormal Investigation
          </p>
        </div>

        {/* Parchment Card */}
        <div className="mt-14 rounded-[28px] border border-[#C8A96A]/30 bg-[#E8D9BF] p-8 text-[#2B2118] shadow-2xl md:p-12">

          <h2 className="font-cinzel text-4xl">
            Mission Brief
          </h2>

          <p className="mt-6 text-[17px] leading-9 text-[#4B3C2F]">
            A cursed mansion has remained sealed for decades. Strange whispers,
            unexplained disappearances and supernatural entities have been
            reported within its walls.
          </p>

          <p className="mt-5 text-[17px] leading-9 text-[#4B3C2F]">
            Your team has been chosen as elite paranormal investigators.
            Search every room, solve the hidden clues and escape before the
            darkness consumes everyone inside.
          </p>

          {/* Info Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-[#C8A96A]/40 bg-white/40 p-5">
              <Users className="mb-3 text-[#7A0C14]" size={28}/>
              <p className="text-sm text-[#6A5B4B]">Team Size</p>
              <h3 className="mt-1 text-xl font-semibold">4 Members</h3>
            </div>

            <div className="rounded-2xl border border-[#C8A96A]/40 bg-white/40 p-5">
              <Clock3 className="mb-3 text-[#7A0C14]" size={28}/>
              <p className="text-sm text-[#6A5B4B]">Duration</p>
              <h3 className="mt-1 text-xl font-semibold">30 Minutes</h3>
            </div>

            <div className="rounded-2xl border border-[#C8A96A]/40 bg-white/40 p-5">
              <MapPin className="mb-3 text-[#7A0C14]" size={28}/>
              <p className="text-sm text-[#6A5B4B]">Venue</p>
              <h3 className="mt-1 text-xl font-semibold">SFIT Campus</h3>
            </div>

            <div className="rounded-2xl border border-[#C8A96A]/40 bg-white/40 p-5">
              <Shield className="mb-3 text-[#7A0C14]" size={28}/>
              <p className="text-sm text-[#6A5B4B]">Eligibility</p>
              <h3 className="mt-1 text-xl font-semibold">SFIT Only</h3>
            </div>

          </div>

          {/* Rules */}
          <div className="mt-12">
            <h3 className="font-cinzel text-3xl">
              Investigation Rules
            </h3>

            <ul className="mt-6 space-y-4 text-[#4B3C2F] leading-7">
              <li>• Exactly four members per team.</li>
              <li>• All participants must carry a valid SFIT ID.</li>
              <li>• Mobile phones cannot be used inside the investigation zone.</li>
              <li>• Your QR ticket is mandatory during check-in.</li>
              <li>• Follow the game master's instructions at all times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => router.push("/register/team")}
              className="flex items-center gap-3 rounded-md border border-[#7A0C14] bg-[#7A0C14] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#93131E]"
            >
              Register Team
              <ArrowRight size={18}/>
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}