"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { getGsap } from "@/lib/gsap";

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.2 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 82%" } }
      );
    }, node);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
