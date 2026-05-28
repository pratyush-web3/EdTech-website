"use client";

import { useLayoutEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

const stats = [
  ["14200", "14.200+", "Persone formate dal 2019"],
  ["98", "98 su 100", "Ci dicono che rifarebbero la scelta"],
  ["340", "340+", "Corsi progettati con professionisti attivi"],
  ["89", "89%", "Lavora nel ruolo desiderato entro 12 mesi"]
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const { gsap } = getGsap();
    const nodes = ref.current?.querySelectorAll("[data-count]");
    const nodeList = nodes ? Array.from(nodes) : [];
    const ctx = gsap.context(() => {
      nodeList.forEach((node) => {
        const target = Number((node as HTMLElement).dataset.count);
        const value = { n: 0 };
        gsap.to(value, {
          n: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 85%" },
          onUpdate: () => {
            const el = node as HTMLElement;
            if (target === 14200) el.textContent = `${Math.round(value.n).toLocaleString("it-IT")}+`;
            if (target === 98) el.textContent = `${Math.round(value.n)} su 100`;
            if (target === 340) el.textContent = `${Math.round(value.n)}+`;
            if (target === 89) el.textContent = `${Math.round(value.n)}%`;
          }
        });
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={ref} className="section-aurea border-y border-aurea-border">
      <div className="container-aurea">
        <p className="text-sm uppercase tracking-[0.25em] text-aurea-primary">I Numeri Parlano</p>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {stats.map(([target, fallback, label]) => (
            <div key={label}>
              <p data-count={target} className="font-display text-6xl text-aurea-highlight md:text-7xl">{fallback}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-aurea-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
