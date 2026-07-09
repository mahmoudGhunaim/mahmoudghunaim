"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass-card border-b" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          MG<span className="text-[#22d3ee]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-[#22d3ee]/60 hover:text-white transition-colors"
        >
          Let&apos;s talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/85 p-2"
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-card border-t border-white/10">
          <ul className="section-container py-4 flex flex-col gap-4 text-white/80">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
