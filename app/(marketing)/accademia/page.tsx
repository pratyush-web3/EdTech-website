export default function AcademyPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea grid gap-12 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">Accademia</p>
          <h1 className="mt-5 font-heading text-5xl text-aurea-highlight md:text-7xl">Studiare da soli e possibile. Crescere con metodo e diverso.</h1>
        </div>
        <div className="prose-aurea text-lg">
          <p>A Milano, ogni settimana, vediamo persone con talento bloccate da corsi troppo generici. Accademia Aurea mette insieme lezioni, tutor, verifica e certificazione in un ambiente unico.</p>
          <p>Non ti chiediamo fiducia cieca. Ti chiediamo lavoro: consegne, revisioni, prove, colloqui simulati. Alla fine resta qualcosa che puoi mostrare.</p>
        </div>
      </div>
    </section>
  );
}
