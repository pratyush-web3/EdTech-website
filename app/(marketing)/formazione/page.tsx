import { Button } from "@/components/ui/Button";

const blocks = ["Academy aziendali per onboarding", "Moduli AI per team marketing e operations", "Italiano professionale per manager internazionali", "Workshop UX/UI per prodotto e design"];

export default function TrainingPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <h1 className="max-w-4xl font-heading text-5xl text-aurea-highlight md:text-7xl">Un team di venti persone non impara con un catalogo.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-aurea-muted">Serve una diagnosi, un obiettivo e un calendario che rispetti il lavoro vero. Per aziende come Enel, Lavazza o Fastweb, la formazione deve entrare nei processi senza rallentarli.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {blocks.map((block) => <div key={block} className="rounded-2xl border border-aurea-border bg-aurea-card p-6 text-aurea-highlight">{block}</div>)}
        </div>
        <div className="mt-10"><Button href="/contatti">Progetta un piano aziendale</Button></div>
      </div>
    </section>
  );
}
