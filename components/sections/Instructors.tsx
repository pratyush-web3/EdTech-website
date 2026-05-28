import { instructors } from "@/lib/data/instructors";

export function InstructorsSection() {
  return (
    <section className="section-aurea overflow-hidden">
      <div className="container-aurea">
        <h2 className="max-w-3xl font-heading text-4xl text-aurea-highlight md:text-6xl">Impara da chi quel lavoro lo fa davvero.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {instructors.map((person) => (
            <article key={person.name} className="group relative min-h-[440px] overflow-hidden rounded-2xl border border-aurea-border bg-aurea-card transition hover:-translate-y-2">
              <img src={person.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-20 p-6 transition duration-500 group-hover:translate-y-0">
                <p className="font-heading text-2xl text-white">{person.name}</p>
                <p className="text-sm text-aurea-primary">{person.role} · {person.city}</p>
                <p className="mt-4 text-sm leading-6 text-white/78">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
