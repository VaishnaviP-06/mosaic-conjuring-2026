"use client";

import { Menu, Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Game", "Register"];

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo */}
        <div className="select-none">
          <h1 className="font-cinzel text-xl md:text-2xl leading-none text-white">
            THE CONJURING
          </h1>
          <p className="mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-[#C8A96A]">
            Paranormal Investigation
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-neutral-200 transition hover:text-[#C8A96A]"
            >
              {item}
            </a>
          ))}

          <button className="rounded-full border border-white/20 p-2 text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]">
            <Moon size={16} />
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mx-5 rounded-xl border border-white/10 bg-black/90 p-4 backdrop-blur md:hidden">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-3 text-neutral-200 hover:text-[#C8A96A]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}