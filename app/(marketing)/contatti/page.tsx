import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { contactInfo } from "@/lib/data/contact";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">Contatti</p>
            <h1 className="mt-5 font-heading text-5xl text-aurea-highlight md:text-7xl">Una richiesta chiara riceve una risposta utile.</h1>
            <p className="mt-6 text-lg leading-8 text-aurea-muted">
              Scrivici se devi scegliere un corso, progettare formazione aziendale o verificare una certificazione. Rispondiamo nei giorni lavorativi, di solito entro 24 ore.
            </p>

            <div className="mt-10 grid gap-4">
              <a className="flex gap-4 border border-aurea-border bg-aurea-card p-5 transition hover:border-aurea-primary" href={`mailto:${contactInfo.email}`}>
                <Mail className="shrink-0 text-aurea-primary" />
                <span><strong className="block text-aurea-highlight">Email</strong><span className="text-aurea-muted">{contactInfo.email}</span></span>
              </a>
              <a className="flex gap-4 border border-aurea-border bg-aurea-card p-5 transition hover:border-aurea-primary" href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}>
                <Phone className="shrink-0 text-aurea-primary" />
                <span><strong className="block text-aurea-highlight">Telefono</strong><span className="text-aurea-muted">{contactInfo.phone}</span></span>
              </a>
              <div className="flex gap-4 border border-aurea-border bg-aurea-card p-5">
                <Clock className="shrink-0 text-aurea-primary" />
                <span><strong className="block text-aurea-highlight">Orari</strong><span className="text-aurea-muted">{contactInfo.hours}</span></span>
              </div>
            </div>
          </div>

          <form className="grid gap-5 border border-aurea-border bg-aurea-card p-6 md:p-8">
            <div>
              <h2 className="font-heading text-3xl text-aurea-highlight">Manda il messaggio</h2>
              <p className="mt-2 text-sm leading-6 text-aurea-muted">I campi aiutano il tutor giusto a risponderti senza passaggi inutili.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Nome" aria-label="Nome" />
              <Input placeholder="Cognome" aria-label="Cognome" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input type="email" placeholder="Email" aria-label="Email" />
              <Input type="tel" placeholder="Telefono" aria-label="Telefono" />
            </div>
            <Select defaultValue="" aria-label="Oggetto">
              <option value="" disabled>Oggetto</option>
              <option>Corsi e iscrizioni</option>
              <option>Formazione aziendale</option>
              <option>Certificazioni</option>
              <option>Supporto tecnico</option>
              <option>Privacy e dati personali</option>
            </Select>
            <Textarea placeholder="Messaggio" aria-label="Messaggio" />
            <label className="flex gap-3 text-sm leading-6 text-aurea-muted">
              <input type="checkbox" className="mt-1 accent-[var(--color-primary)]" />
              Acconsento al trattamento dei dati secondo la Privacy Policy.
            </label>
            <Button type="submit">Manda il messaggio</Button>
          </form>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_.8fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {contactInfo.offices.map((office) => (
              <article key={office.label} className="border border-aurea-border bg-aurea-card p-6">
                <MapPin className="text-aurea-primary" />
                <h3 className="mt-5 font-heading text-2xl text-aurea-highlight">{office.label}</h3>
                <p className="mt-3 text-sm leading-6 text-aurea-muted">{office.address}</p>
              </article>
            ))}
          </div>
          <div className="relative min-h-80 overflow-hidden border border-aurea-border bg-aurea-surface p-6">
            <div className="absolute right-4 top-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-aurea-muted">
              <ShieldCheck size={16} className="text-aurea-primary" /> Dati protetti GDPR
            </div>
            <svg viewBox="0 0 240 300" className="mx-auto mt-8 h-72 w-full max-w-sm text-aurea-primary" aria-label="Mappa Italia decorativa">
              <path d="M122 8c-18 22-7 40-22 58-12 15-42 15-47 36-4 17 21 21 28 37 8 18-11 34-2 52 8 17 33 17 43 34 10 18-4 36 8 52 8 11 22 17 35 15-8-20-6-32 7-45 16-16 19-31 5-48-14-18-8-34 10-45 18-12 28-29 18-48-11-20-35-16-43-33-9-18 12-36 5-54-5-13-20-19-45-59Z" fill="none" stroke="currentColor" strokeWidth="3" />
              {[[92, 80], [116, 144], [138, 226]].map(([x, y]) => (
                <g key={`${x}-${y}`}>
                  <circle cx={x} cy={y} r="18" fill="currentColor" opacity=".08" />
                  <circle cx={x} cy={y} r="7" fill="currentColor" opacity=".9" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
