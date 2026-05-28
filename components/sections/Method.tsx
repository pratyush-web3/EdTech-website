"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

const steps = [
  ["01", "Diagnosi", "Prima di iniziare, capiamo dove sei."],
  ["02", "Progettazione", "Un percorso su misura, non un catalogo."],
  ["03", "Immersione", "Lezioni dense. Feedback reali. Nessun filler."],
  ["04", "Certificazione", "Un certificato che vale perche e guadagnato."]
];

export function Method() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const { gsap } = getGsap();
    gsap.fromTo(
      node.querySelectorAll("[data-step]"),
      { opacity: 0.15, y: 40 },
      { opacity: 1, y: 0, stagger: 0.35, scrollTrigger: { trigger: node, start: "top top", end: "+=900", scrub: true, pin: true } }
    );
  }, []);

  return (
    <section ref={ref} className="section-aurea bg-aurea-surface">
      <div className="container-aurea grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="font-mono text-aurea-primary">Il Metodo Aurea</p>
          <h2 className="mt-5 font-heading text-4xl text-aurea-highlight md:text-6xl">Quattro passaggi. Nessuna scorciatoia.</h2>
        </div>
        <div className="grid gap-8">
          {steps.map(([number, title, text]) => (
            <div data-step key={number} className="grid gap-4 border-t border-aurea-border pt-8 md:grid-cols-[120px_1fr]">
              <p className="font-display text-6xl text-aurea-primary">{number}</p>
              <div>
                <h3 className="font-heading text-3xl text-aurea-highlight">{title}</h3>
                <p className="mt-3 text-lg text-aurea-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
