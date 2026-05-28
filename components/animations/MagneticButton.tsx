"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export function MagneticButton({ children, href }: { children: ReactNode; href: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(event) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.3}px, ${(event.clientY - rect.top - rect.height / 2) * 0.3}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
      }}
      className="inline-block transition-transform duration-300"
    >
      <Button href={href} variant="ghost">
        {children}
      </Button>
    </div>
  );
}
