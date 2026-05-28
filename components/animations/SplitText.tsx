"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

export function SplitText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const { gsap } = getGsap();
    const chars = node.querySelectorAll("span[data-char]");
    gsap.fromTo(chars, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.04, ease: "power3.out" });
  }, []);

  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {text.split("\n").map((line, lineIndex) => (
        <span className="block overflow-hidden" key={`${line}-${lineIndex}`}>
          {line.split("").map((char, index) => (
            <span data-char className="inline-block" key={`${char}-${index}`}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
