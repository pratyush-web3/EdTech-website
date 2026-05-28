"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getGsap } from "@/lib/gsap";

const proof = ["EQF Level 5", "14.200 studenti", "340 corsi", "Tutor umano"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const { gsap } = getGsap();

    const titleLines = section.querySelectorAll("[data-line]");
    const revealItems = section.querySelectorAll("[data-hero-reveal]");

    const tl = gsap.timeline({ delay: 0.3 });

    // ✨ HERO TITLE (cinematic edtech reveal)
    tl.fromTo(
      titleLines,
      {
        y: 70,
        opacity: 0,
        scale: 1.06,
        filter: "blur(12px)",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
      }
    );

    // ✨ CTA + PROOF ANIMATION
    tl.fromTo(
      revealItems,
      {
        y: 22,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => tl.kill();
  }, []);

  return (
    <section ref={ref} className="hero-screen relative overflow-hidden bg-aurea-bg">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="hero-cover" />
        <div className="noise" />
      </div>

      {/* Content */}
      <div className="container-aurea relative z-10 grid h-full items-center gap-8 py-8 lg:grid-cols-[1.06fr_.94fr]">
        <div className="min-w-0">

          {/* ✨ HERO TEXT */}
          <h1 className="font-display text-[clamp(3.5rem,8.5vw,7.2rem)] italic leading-[0.82] text-aurea-highlight">
            <span className="block" data-line>Il tuo prossimo</span>
            <span className="block" data-line>lavoro esiste già</span>
            <span className="mt-1 block" data-line>Manca solo il</span>
            <span className="block" data-line>percorso giusto.</span>
          </h1>

          {/* CTA */}
          <div data-hero-reveal className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/corsi"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-aurea-primary px-6 py-3 text-sm font-bold text-aurea-bg transition hover:bg-aurea-highlight"
            >
              Esplora i corsi <ArrowRight size={17} />
            </a>

            <a
              href="/contatti"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-aurea-border bg-aurea-bg/55 px-6 py-3 text-sm font-semibold text-aurea-highlight backdrop-blur transition hover:border-aurea-primary"
            >
              Parla con un tutor
            </a>
          </div>

          {/* PROOF */}
          <div data-hero-reveal className="mt-7 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {proof.map((item) => (
              <div
                key={item}
                className="rounded-[10px] border border-aurea-border bg-aurea-bg/55 px-3 py-3 backdrop-blur"
              >
                <CheckCircle2 className="mb-2 text-aurea-primary" size={16} />
                <p className="text-xs font-semibold text-aurea-highlight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}