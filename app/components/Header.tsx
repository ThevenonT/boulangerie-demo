"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#a-propos", label: "À propos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_1px_0_var(--color-line)]"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20"
      >
        <a
          href="#"
          className="font-display text-xl sm:text-2xl font-extrabold text-night tracking-wide"
        >
          Centre Auto <span className="text-red">Louhans</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-muted hover:text-red transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-4 rounded-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center min-h-11 px-5 rounded-md bg-red text-white text-sm font-bold hover:bg-red-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2"
        >
          Prendre RDV
        </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-night hover:bg-light cursor-pointer focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-line">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-semibold text-muted hover:bg-light hover:text-red transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center min-h-12 rounded-md bg-red px-4 text-white font-bold hover:bg-red-dark transition-colors"
            >
              Prendre RDV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
