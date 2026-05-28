import { instructors } from "@/lib/data/instructors";

export default function InstructorsPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <h1 className="max-w-4xl font-heading text-5xl text-aurea-highlight md:text-7xl">Docenti che non hanno smesso di lavorare nel settore.</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {instructors.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-2xl border border-aurea-border bg-aurea-card">
              <img src={person.image} alt="" className="h-72 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-heading text-2xl text-aurea-highlight">{person.name}</h2>
                <p className="text-sm text-aurea-primary">{person.role} · {person.city}</p>
                <p className="mt-4 text-sm leading-6 text-aurea-muted">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
