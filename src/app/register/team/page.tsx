"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import desktopBg from "@/assets/images/form-desktop.png";
import mobileBg from "@/assets/images/form-mobile.png";

export default function TeamRegistrationPage() {
  const [teamName, setTeamName] = useState("");
  const [leader, setLeader] = useState("");
  const [participant, setParticipant] = useState("SFIT");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120B08]">
      {/* BaOtherround */}
      <Image
        src={desktopBg}
        alt="Parchment"
        fill
        priority
        className="hidden md:block object-cover"
      />

      <Image
        src={mobileBg}
        alt="Parchment"
        fill
        priority
        className="block md:hidden object-cover"
      />

      {/* Very light dark tint */}
      <div className="absolute inset-0 bg-black/10" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-8 md:px-8">
        <div className="w-full rounded-[28px] border border-[#C8A96A]/25 bg-white/5 p-5 backdrop-blur-[2px] md:p-10">
          {/* Header */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#7A0C14]">
              MOSAIC 2026
            </p>

            <h1 className="mt-2 font-serif text-3xl font-bold tracking-wide text-[#2B2118] md:text-5xl">
              THE CONJURING
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#7A0C14]">
              PARANORMAL INVESTIGATION
            </p>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-xs text-[#6B4F3A]">
              <span>Team 1/5</span>
              <span>Step 1 of 6</span>
            </div>

            <div className="flex items-center">
              {[1, 2, 3, 4, 5, 6].map((n, i) => (
                <div key={n} className="flex flex-1 items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      i === 0
                        ? "bg-[#7A0C14] text-white"
                        : "border border-[#A68A67] bg-white/10 text-[#7C6348]"
                    }`}
                  >
                    {n}
                  </div>

                  {i !== 5 && (
                    <div
                      className={`h-[2px] flex-1 ${
                        i === 0 ? "bg-[#7A0C14]" : "bg-[#C7AF8A]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl font-semibold text-[#2B2118] md:text-3xl">
              TEAM DETAILS
            </h2>
          </div>

          {/* Form */}
          <div className="mt-8 space-y-6">
            {/* Team Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                Team Name *
              </label>

              <input
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
                className="w-full rounded-xl border border-[#B89563]/50 bg-white/10 px-4 py-3 text-[#2B2118] placeholder:text-[#816A53] backdrop-blur-[3px] outline-none transition focus:border-[#7A0C14] focus:bg-white/20"
              />
            </div>

            {/* Leader */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                Team Leader Name *
              </label>

              <input
                value={leader}
                onChange={(e) => setLeader(e.target.value)}
                placeholder="Enter leader name"
                className="w-full rounded-xl border border-[#B89563]/50 bg-white/10 px-4 py-3 text-[#2B2118] placeholder:text-[#816A53] backdrop-blur-[3px] outline-none transition focus:border-[#7A0C14] focus:bg-white/20"
              />
            </div>

            {/* Participant */}
            <div>
              <label className="mb-3 block text-sm font-medium text-[#4B3726]">
                Participant Type *
              </label>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setParticipant("SFIT")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    participant === "SFIT"
                      ? "bg-[#7A0C14] text-white"
                      : "border border-[#A68A67] bg-white/10 text-[#4B3726]"
                  }`}
                >
                  SFIT
                </button>

                <button
                  type="button"
                  onClick={() => setParticipant("Other")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    participant === "Other"
                      ? "bg-[#7A0C14] text-white"
                      : "border border-[#A68A67] bg-white/10 text-[#4B3726]"
                  }`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 flex items-center justify-end">
            <button className="flex items-center gap-2 rounded-lg bg-[#7A0C14] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#93131E]">
              Next
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}