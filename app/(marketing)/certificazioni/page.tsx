export default function CertificationsPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-aurea-primary">Certificazioni</p>
          <h1 className="mt-5 font-heading text-5xl text-aurea-highlight md:text-7xl">Un certificato vale quando dietro c'e una prova.</h1>
          <p className="mt-6 text-lg leading-8 text-aurea-muted">Le certificazioni Aurea seguono il riferimento EQF Level 5 e includono codice di verifica, ore tracciate, progetto finale e valutazione docente.</p>
        </div>
        <div className="rounded-2xl border border-aurea-primary bg-[#efe0bc] p-10 text-[#1A1208]">
          <p className="font-accent text-center text-2xl">Diploma Aurea</p>
          <div className="my-10 h-px bg-[#c9a84c]" />
          <p className="text-center text-sm">Rilasciato dopo verifica finale e validabile online.</p>
        </div>
      </div>
    </section>
  );
}
