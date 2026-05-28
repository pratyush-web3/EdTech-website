"use client";

import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getGsap } from "@/lib/gsap";

const links = [
  ["Home", "/"],
  ["Corsi", "/corsi"],
  ["Chi siamo", "/chi-siamo"],
  ["Formazione", "/formazione"],
  ["Certificazioni", "/certificazioni"],
  ["Blog", "/blog"],
  ["Contatti", "/contatti"],
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const { gsap } = getGsap();
    
    // Show the overlay immediately
    gsap.set(menuRef.current, { display: "flex" });

    // Animate the overlay background
    gsap.fromTo(
      menuRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    // Animate menu items
    if (menuLinksRef.current) {
      const items = menuLinksRef.current.querySelectorAll("[data-menu-item]");
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.15 }
      );
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close animation
  useEffect(() => {
    if (isOpen || !menuRef.current) return;

    const { gsap } = getGsap();
    gsap.to(menuRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(menuRef.current, { display: "none" });
      }
    });
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="container-aurea relative overflow-visible rounded-[28px] border border-aurea-border/70 bg-[linear-gradient(180deg,rgba(24,23,20,0.88)_0%,rgba(16,16,15,0.9)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:rounded-[34px]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurea-primary/60 to-transparent" />
          <div className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 lg:px-6">
            <a href="/" className="group flex min-w-0 items-center gap-3" aria-label="Accademia Aurea">
              <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-[18px] border border-aurea-primary/30 bg-[radial-gradient(circle_at_30%_30%,rgba(211,173,79,0.32),transparent_58%),linear-gradient(180deg,rgba(31,30,26,1),rgba(18,18,16,1))] shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition duration-300 group-hover:scale-[1.03]">
                <span className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/5" />
                <span className="absolute left-[10px] top-[10px] h-1.5 w-1.5 rounded-full bg-aurea-primary shadow-[0_0_16px_rgba(211,173,79,0.85)]" />
                <span className="absolute bottom-[-2px] left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-full border-t border-aurea-primary/35 bg-aurea-bg/10" />
                <span className="relative text-[15px] font-bold tracking-[0.18em] text-aurea-primary">A</span>
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative ml-auto shrink-0 flex items-center gap-2 rounded-full border border-aurea-border bg-aurea-card/45 px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-aurea-highlight transition hover:border-aurea-primary lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className={`transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`} size={18} />
              <X className={`absolute transition-all duration-300 ${isOpen ? "scale-100" : "scale-0"}`} size={18} />
              <span className="hidden sm:inline">Menu</span>
            </button>

            <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-medium text-aurea-muted transition duration-200 hover:border-aurea-border hover:bg-aurea-card/70 hover:text-aurea-highlight"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="ml-auto hidden items-center gap-1.5 sm:gap-2 md:flex">
              <a
                href="/dashboard"
                className="rounded-full border border-aurea-border/90 bg-transparent px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-aurea-muted transition hover:border-aurea-primary hover:text-aurea-highlight active:bg-aurea-primary/10"
              >
                Area studenti
              </a>
              <a
                href="/contatti"
                className="rounded-full bg-aurea-primary px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-aurea-bg shadow-[0_10px_24px_rgba(211,173,79,0.22)] transition hover:bg-aurea-highlight active:opacity-90"
              >
                Consulenza
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay - Outside header */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 lg:hidden bg-aurea-bg/95 hidden"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="flex h-full flex-col items-center justify-center px-6 w-full">
          <div ref={menuLinksRef} className="w-full max-w-3xl space-y-6 text-center">
            {/* Navigation Links */}
            <nav className="space-y-6 flex flex-col items-center">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  data-menu-item
                  className="block text-4xl sm:text-5xl font-heading text-aurea-highlight transition hover:text-aurea-primary text-center w-full"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div data-menu-item className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-aurea-border/90 bg-transparent px-6 py-3 font-semibold text-aurea-highlight transition hover:border-aurea-primary hover:text-aurea-primary"
              >
                Area studenti
              </a>
              <a
                href="/contatti"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-aurea-primary px-6 py-3 font-semibold text-aurea-bg transition hover:bg-aurea-highlight"
              >
                Consulenza
              </a>
            </div>

            {/* Courses CTA */}
            <div data-menu-item className="mt-8 pt-6 border-t border-aurea-border/50">
              <a
                href="/corsi"
                onClick={() => setIsOpen(false)}
                className="inline-block rounded-full bg-aurea-primary px-8 py-3 text-lg font-semibold text-aurea-bg transition hover:bg-aurea-highlight"
              >
                Esplora i corsi
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
