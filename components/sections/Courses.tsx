"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { featuredCourses } from "@/lib/data/courses";
import { getGsap } from "@/lib/gsap";

export function CoursesSection() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = wrap.current;
    const target = track.current;
    if (!container || !target) return;
    const { gsap } = getGsap();
    const distance = target.scrollWidth - container.offsetWidth;
    gsap.to(target, {
      x: -Math.max(distance, 0),
      ease: "none",
      scrollTrigger: { trigger: container, start: "top top", end: `+=${Math.max(distance, 600)}`, scrub: 1, pin: true }
    });
  }, []);

  return (
    <section ref={wrap} className="section-aurea overflow-hidden">
      <div className="container-aurea">
        <h2 className="font-heading text-4xl text-aurea-highlight md:text-6xl">Corsi in evidenza</h2>
        <div ref={track} className="mt-12 flex gap-8 will-change-transform">
          {featuredCourses.map((course) => (
            <Link key={course.slug} href={`/corsi/${course.slug}`} className="group relative h-[520px] w-[380px] shrink-0 overflow-hidden rounded-2xl border border-aurea-border bg-aurea-card">
              <img src={course.image} alt="" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-aurea-primary">{course.category}</p>
                <h3 className="mt-3 font-heading text-2xl text-white">{course.title}</h3>
                <p className="mt-3 text-sm text-white/72">{course.hours} · {course.level} · {course.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
