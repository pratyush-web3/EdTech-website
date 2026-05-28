"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { getGsap } from "@/lib/gsap";

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const { gsap } = getGsap();
    gsap.fromTo(
      node,
      { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.2 },
      { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 82%" } }
    );
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
