"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor || matchMedia("(pointer: coarse)").matches) return;

    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    const enter = () => cursor.classList.add("scale-150");
    const leave = () => cursor.classList.remove("scale-150");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-aurea-primary mix-blend-difference transition-transform duration-150 md:block" />;
}
