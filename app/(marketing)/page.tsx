import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CoursesSection } from "@/components/sections/Courses";
import { Method } from "@/components/sections/Method";
import { InstructorsSection } from "@/components/sections/Instructors";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { blogPosts } from "@/lib/data/blog";

const categories = ["Lingua Italiana", "Business & Management", "Design Digitale", "Programmazione", "AI", "Marketing", "Data Analysis", "Cybersecurity", "UX/UI"];
const features = ["Certificazioni riconosciute in Europa", "Docenti che lavorano nel settore oggi", "Percorsi adattivi con supporto AI", "14.000+ persone che si sono gia fidate", "Materiali tuoi per sempre, senza scadenze", "Un tutor dedicato, non un chatbot"];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-aurea">
        <ScrollReveal className="container-aurea max-w-3xl text-center">
          <h2 className="font-heading text-4xl text-aurea-highlight md:text-6xl">Non insegniamo competenze. Costruiamo professionisti.</h2>
          <p className="mt-8 text-xl leading-9 text-aurea-muted">Studiare non basta piu. Lo sai gia. Per questo ogni corso parte da un obiettivo visibile: un portfolio, una certificazione, una candidatura, un lavoro fatto meglio lunedi mattina.</p>
          <div className="mx-auto mt-8 h-px w-64 bg-aurea-primary" />
        </ScrollReveal>
      </section>
      <Stats />
      <CoursesSection />
      <Method />
      <section className="section-aurea">
        <div className="container-aurea">
          <h2 className="font-heading text-4xl text-aurea-highlight md:text-6xl">Cosa vuoi imparare?</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {categories.map((category, index) => (
              <Link key={category} href="/corsi" className={`rounded-2xl border border-aurea-border bg-aurea-card p-6 transition hover:border-aurea-primary ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 2 ? "md:col-span-2" : ""}`}>
                <p className="font-heading text-2xl text-aurea-highlight">{category}</p>
                <p className="mt-4 text-sm text-aurea-muted">Casi reali, docenti attivi, esercizi che non finiscono nel cassetto.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-aurea bg-aurea-surface">
        <div className="container-aurea">
          <h2 className="font-heading text-4xl text-aurea-highlight md:text-6xl">Perche noi</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="border-t border-aurea-border pt-6">
                <p className="text-lg font-semibold text-aurea-highlight">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <InstructorsSection />
      <Testimonials />
      <section className="section-aurea">
        <div className="container-aurea grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-aurea-primary bg-[#efe0bc] p-10 text-[#1A1208] shadow-2xl">
            <p className="font-accent text-center text-2xl">Certificato di Completamento</p>
            <div className="mx-auto my-8 grid h-28 w-28 place-items-center rounded-full border-4 border-[#c9a84c] font-accent text-sm">AUREA</div>
            <p className="text-center font-heading text-3xl">Giulia Rossi</p>
            <p className="mt-6 text-center text-sm">ha completato con esito positivo il corso UX/UI Design.</p>
          </div>
          <div>
            <h2 className="font-heading text-4xl text-aurea-highlight">Un certificato che devi meritare.</h2>
            <p className="mt-5 text-lg leading-8 text-aurea-muted">Prima consegni, poi ricevi. Il sigillo Aurea arriva solo dopo verifica finale, revisione del progetto e tracciamento delle ore completate.</p>
          </div>
        </div>
      </section>
      <section className="section-aurea bg-aurea-surface">
        <div className="container-aurea">
          <h2 className="font-heading text-4xl text-aurea-highlight">Dal quaderno Aurea</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group border-t border-aurea-border pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-aurea-primary">{post.category}</p>
                <h3 className="mt-3 font-heading text-2xl text-aurea-highlight group-hover:text-aurea-primary">{post.title}</h3>
                <p className="mt-4 text-sm leading-6 text-aurea-muted">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-aurea-primary">Leggi <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
