"use client";

import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

export default function IntroPage() {
  const router = useRouter();

  return (
    <main className="flex h-screen items-center justify-center bg-[#090909] text-[#F5F1E8]">
      <div className="w-full max-w-3xl px-6 text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/10">
          <Play size={42} className="ml-1 text-[#C8A96A]" />
        </div>

        <h1 className="font-cinzel text-5xl text-[#E8D9BF]">
          CINEMATIC INTRO
        </h1>

        <p className="mt-6 leading-8 text-neutral-400">
          The haunted book opening video will be placed here.
          After the video finishes, it will automatically continue to the
          event information page.
        </p>

        <button
          onClick={() => router.push("/register")}
          className="mt-12 rounded-md border border-[#C8A96A] bg-[#7A0C14] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition hover:bg-[#93131E]"
        >
          Continue
        </button>
      </div>
    </main>
  );
}