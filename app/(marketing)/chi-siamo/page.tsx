import { Award, Building2, GraduationCap, ShieldCheck } from "lucide-react";
import { instructors } from "@/lib/data/instructors";

const timeline = [
  ["2019", "Fondazione a Milano, primi 200 studenti e tre corsi pilota."],
  ["2020", "Partnership didattica con professionisti del Politecnico di Milano."],
  ["2021", "Lancio della piattaforma con tracciamento ore e percorsi adattivi."],
  ["2022", "5.000 persone certificate, prime academy aziendali."],
  ["2023", "Apertura dei poli operativi a Roma e Napoli."],
  ["2024", "14.200+ studenti, 340+ corsi e revisione completa dei programmi AI."],
  ["2025", "Accreditamento europeo EQF Level 5 per le certificazioni principali."]
];

const principles = [
  ["Docenti attivi", "Chi insegna deve lavorare ancora nel settore. Non basta averlo fatto dieci anni fa."],
  ["Prove verificabili", "Ogni certificato ha codice di verifica, ore tracciate e progetto finale valutato."],
  ["Italiano serio", "Scriviamo e parliamo come si lavora davvero in Italia: chiaro, preciso, senza scena."],
  ["Tutor umano", "Quando ti blocchi, risponde una persona. L'AI aiuta, ma non sostituisce il giudizio."]
];

export default function AboutPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">Chi siamo</p>
            <h1 className="mt-5 font-heading text-5xl leading-tight text-aurea-highlight md:text-7xl">
              Accademia Aurea nasce da una domanda semplice: perche in Italia e cosi difficile imparare qualcosa di utile in modo serio?
            </h1>
          </div>
          <div className="self-end border-l border-aurea-border pl-7">
            <p className="text-xl leading-9 text-aurea-secondary">
              Non volevamo un altro catalogo di video. Volevamo una scuola digitale con standard, tutor, revisione e certificazioni che un'azienda potesse leggere con fiducia.
            </p>
            <p className="mt-6 leading-8 text-aurea-muted">
              Non avevamo una risposta pronta. Cosi abbiamo costruito quello che avremmo voluto trovare: serio come un istituto, veloce come una piattaforma, concreto come un buon lavoro consegnato.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {[
            [GraduationCap, "14.200+", "studenti dal 2019"],
            [Award, "340+", "corsi revisionati"],
            [ShieldCheck, "EQF 5", "certificazioni tracciate"],
            [Building2, "3 sedi", "Milano, Roma, Napoli"]
          ].map(([Icon, value, label]) => (
            <div key={String(label)} className="border border-aurea-border bg-aurea-card p-6">
              <Icon className="text-aurea-primary" />
              <p className="mt-5 font-mono text-3xl text-aurea-highlight">{String(value)}</p>
              <p className="mt-2 text-sm text-aurea-muted">{String(label)}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[.45fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">Metodo e responsabilita</p>
            <h2 className="mt-4 font-heading text-4xl text-aurea-highlight">Quello che promettiamo, lo dobbiamo dimostrare.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map(([title, text]) => (
              <article key={title} className="border border-aurea-border bg-aurea-card p-6">
                <h3 className="font-heading text-2xl text-aurea-highlight">{title}</h3>
                <p className="mt-4 leading-7 text-aurea-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[.45fr_1fr]">
          <h2 className="font-heading text-4xl text-aurea-highlight">La strada</h2>
          <div className="grid gap-0 border-l border-aurea-border">
            {timeline.map(([year, text]) => (
              <div key={year} className="relative grid gap-2 border-b border-aurea-border py-6 pl-8">
                <span className="absolute -left-2 top-8 h-4 w-4 rounded-full bg-aurea-primary" />
                <p className="font-mono text-aurea-primary">{year}</p>
                <p className="text-aurea-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">Direzione didattica</p>
              <h2 className="mt-4 font-heading text-4xl text-aurea-highlight">Le persone dietro</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-aurea-muted">Ogni profilo qui ha una responsabilita precisa: contenuti, qualita didattica, prodotto, certificazioni, tutoraggio.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {instructors.slice(0, 6).map((person) => (
              <article key={person.name} className="overflow-hidden border border-aurea-border bg-aurea-card">
                <img src={person.image} alt="" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-aurea-highlight">{person.name}</h3>
                  <p className="text-sm text-aurea-primary">{person.role}</p>
                  <p className="mt-4 text-sm leading-6 text-aurea-muted">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
