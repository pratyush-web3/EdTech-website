import Link from "next/link";
import { Search } from "lucide-react";
import { courses } from "@/lib/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";

const filters = ["Tutti", "Lingua Italiana", "Business", "Design", "Tecnologia & AI", "Marketing", "Base", "Intermedio", "Avanzato"];

export default function CoursesPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <div className="max-w-4xl">
          <Badge>Catalogo corsi</Badge>
          <h1 className="mt-6 font-heading text-5xl text-aurea-highlight md:text-7xl">Cosa manca davvero al tuo profilo?</h1>
          <p className="mt-6 text-lg leading-8 text-aurea-muted">Hai mandato dieci curricula e ricevuto due risposte tiepide. Qui scegli un corso per aggiungere prove concrete, non righe decorative.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-aurea-muted" size={18} />
            <Input className="pl-11" placeholder="Cerca per corso, docente, categoria" />
          </label>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => <span key={filter} className="rounded-full border border-aurea-border px-4 py-3 text-xs uppercase tracking-[0.14em] text-aurea-muted">{filter}</span>)}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <Link key={course.slug} href={`/corsi/${course.slug}`} className="group overflow-hidden rounded-2xl border border-aurea-border bg-aurea-card transition hover:-translate-y-1 hover:border-aurea-primary">
              <img src={course.image} alt="" className="h-56 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-aurea-primary">{course.category}</p>
                <h2 className="mt-3 font-heading text-2xl text-aurea-highlight">{course.title}</h2>
                <p className="mt-3 text-sm text-aurea-muted">{course.hours} · {course.level} · {course.price} · {course.teacher}</p>
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-aurea-muted">{course.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
