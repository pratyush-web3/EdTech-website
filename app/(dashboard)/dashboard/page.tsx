import { Award, BookOpen, CalendarDays, MessageSquare, Settings, Trophy } from "lucide-react";

const nav = ["Pannello", "I miei corsi", "Certificazioni", "Calendario", "Messaggi", "Risorse", "Impostazioni"];
const metrics = [["Corsi attivi", "3"], ["Ore di studio", "47h"], ["Certificazioni ottenute", "2"], ["Posizione nel gruppo", "#124 su 1.840"]];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-aurea-bg text-aurea-text">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-aurea-border bg-aurea-surface p-6 md:block">
        <p className="font-accent tracking-[0.2em] text-aurea-highlight">AUREA</p>
        <nav className="mt-10 grid gap-2">
          {nav.map((item, index) => (
            <a key={item} className={`rounded-[4px] px-4 py-3 text-sm ${index === 0 ? "bg-aurea-primary text-aurea-bg" : "text-aurea-muted hover:bg-aurea-card"}`} href="#">
              {item}
            </a>
          ))}
        </nav>
      </aside>
      <main className="p-5 md:ml-72 md:p-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="font-heading text-4xl text-aurea-highlight">Bentornata, Giulia.</h1>
            <p className="mt-2 text-aurea-muted">Hai 2 lezioni da completare questa settimana. Sei in anticipo rispetto alla media del tuo gruppo.</p>
          </div>
          <button className="rounded-[4px] border border-aurea-primary px-4 py-3 text-sm text-aurea-primary">Apri calendario</button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {metrics.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-aurea-border bg-aurea-card p-5">
              <p className="text-sm text-aurea-muted">{label}</p>
              <p className="mt-3 font-mono text-3xl text-aurea-highlight">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <section className="rounded-2xl border border-aurea-border bg-aurea-card p-6">
            <h2 className="font-heading text-2xl text-aurea-highlight">Corsi in corso</h2>
            {["UX/UI Design: Dal Wireframe al Prodotto", "Italiano Professionale - C1/C2", "AI per il Business"].map((course, index) => (
              <div key={course} className="mt-6 border-t border-aurea-border pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-aurea-highlight">{course}</p>
                  <BookOpen className="text-aurea-primary" size={18} />
                </div>
                <div className="mt-4 h-2 rounded-full bg-aurea-surface"><div className="h-2 rounded-full bg-aurea-primary" style={{ width: `${[72, 54, 31][index]}%` }} /></div>
              </div>
            ))}
          </section>
          <section className="grid gap-6">
            <div className="rounded-2xl border border-aurea-border bg-aurea-card p-6">
              <h2 className="font-heading text-2xl text-aurea-highlight">Badge</h2>
              <div className="mt-5 flex gap-4">
                {[Award, Trophy, MessageSquare].map((Icon, index) => <div key={index} className="grid h-14 w-14 place-items-center rounded-full border border-aurea-primary text-aurea-primary"><Icon /></div>)}
              </div>
            </div>
            <div className="rounded-2xl border border-aurea-border bg-aurea-card p-6">
              <h2 className="font-heading text-2xl text-aurea-highlight">Calendario</h2>
              <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs text-aurea-muted">
                {Array.from({ length: 28 }, (_, index) => <span key={index} className={`rounded-[4px] py-2 ${[4, 12, 19].includes(index) ? "bg-aurea-primary text-aurea-bg" : "bg-aurea-surface"}`}>{index + 1}</span>)}
              </div>
            </div>
          </section>
        </div>
        <div className="mt-6 rounded-2xl border border-aurea-border bg-aurea-card p-6">
          <h2 className="font-heading text-2xl text-aurea-highlight">Attivita recente</h2>
          <div className="mt-5 grid gap-4 text-sm text-aurea-muted">
            <p><CalendarDays className="mr-2 inline text-aurea-primary" size={16} />Hai completato "Wireframe responsive" ieri alle 18:42.</p>
            <p><Settings className="mr-2 inline text-aurea-primary" size={16} />Il tutor ha lasciato 6 note sul tuo prototipo.</p>
            <p><Award className="mr-2 inline text-aurea-primary" size={16} />Certificazione Italiano Professionale pronta per la verifica.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
