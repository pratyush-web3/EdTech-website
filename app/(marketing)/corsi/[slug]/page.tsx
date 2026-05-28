import { notFound } from "next/navigation";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea grid gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">{course.category}</p>
          <h1 className="mt-5 font-heading text-5xl text-aurea-highlight md:text-7xl">{course.title}</h1>
          <p className="mt-6 text-xl leading-9 text-aurea-muted">{course.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-aurea-muted">
            <span>{course.hours}</span><span>·</span><span>{course.level}</span><span>·</span><span>{course.price}</span><span>·</span><span>{course.teacher}</span>
          </div>
          <div className="mt-10"><Button href="/contatti">Parla con un tutor</Button></div>
        </div>
        <img src={course.image} alt="" className="h-[560px] w-full rounded-2xl border border-aurea-border object-cover" />
      </div>
      <div className="container-aurea mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl text-aurea-highlight">Alla fine sai fare questo</h2>
          <ul className="mt-6 grid gap-4">
            {course.outcomes.map((outcome) => <li key={outcome} className="border-t border-aurea-border pt-4 text-aurea-muted">{outcome}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-3xl text-aurea-highlight">Moduli</h2>
          <ul className="mt-6 grid gap-4">
            {course.modules.map((module, index) => <li key={module} className="border-t border-aurea-border pt-4 text-aurea-muted">{String(index + 1).padStart(2, "0")} · {module}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
