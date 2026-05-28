"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section className="section-aurea bg-aurea-surface">
      <div className="container-aurea relative">
        <svg className="absolute -top-10 left-0 h-28 w-28 text-aurea-primary opacity-25" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M28 25C17 34 12 46 12 61c0 13 8 22 19 22 10 0 17-7 17-17 0-9-6-15-14-16 2-8 8-14 17-20L42 17C37 19 32 22 28 25Zm45 0C62 34 57 46 57 61c0 13 8 22 19 22 10 0 17-7 17-17 0-9-6-15-14-16 2-8 8-14 17-20L87 17c-5 2-10 5-14 8Z" fill="currentColor" />
        </svg>
        <div className="mx-auto max-w-4xl">
          <p className="font-heading text-3xl leading-snug text-aurea-highlight md:text-5xl">"{item.quote}"</p>
          <p className="mt-8 font-semibold text-aurea-primary">— {item.author}</p>
          <p className="mt-1 text-aurea-muted">{item.detail}</p>
        </div>
      </div>
    </section>
  );
}
