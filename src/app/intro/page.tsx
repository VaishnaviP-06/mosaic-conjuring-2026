"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();

  const [bookOpen, setBookOpen] = useState(false);
  const [spider, setSpider] = useState(false);
  const [ghost, setGhost] = useState(false);
  const [button, setButton] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBookOpen(true), 500);
    const t2 = setTimeout(() => setSpider(true), 1700);
    const t3 = setTimeout(() => setGhost(true), 3200);
    const t4 = setTimeout(() => setGhost(false), 4300);
    const t5 = setTimeout(() => setButton(true), 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#090909]">


      {ghost && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/90">
          <img
            src="/ghost.png"
            alt=""
            className="h-[70vh] object-contain animate-pulse"
          />
        </div>
      )}

      {button && (
        <button
          onClick={() => router.push("/register")}
          className="absolute bottom-16 z-50 rounded-md border border-[#C8A96A] bg-[#7A0C14] px-8 py-4 uppercase tracking-[0.3em] text-white transition hover:bg-[#93131E]"
        >
          Go Ahead
        </button>
      )}
    </main>
  );
}