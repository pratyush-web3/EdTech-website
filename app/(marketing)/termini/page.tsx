import { contactInfo } from "@/lib/data/contact";

const sections = [
  ["Definizioni", "Si intende per \"Piattaforma\" l'ambiente digitale gestito da Accademia Aurea S.r.l.; per \"Utente\" chiunque acceda alla piattaforma; per \"Corso\" ciascun contenuto didattico, live o on demand, acquistato o fruito dall'Utente."],
  ["Accettazione", "L'accesso, la registrazione e l'utilizzo dei servizi comportano l'accettazione integrale dei presenti termini. Qualora l'Utente non intenda accettarli, dovra astenersi dall'utilizzo della piattaforma."],
  ["Registrazione account", "L'Utente si impegna a fornire informazioni veritiere, aggiornate e complete. Le credenziali sono personali, riservate e non cedibili. Ogni attivita svolta tramite l'account si presume riferibile al relativo titolare."],
  ["Utilizzo della piattaforma", "E fatto divieto agli utenti di copiare, registrare, distribuire, rivendere, cedere o mettere a disposizione di terzi contenuti didattici, materiali, video, esercitazioni e certificazioni senza autorizzazione scritta."],
  ["Proprieta intellettuale", "Tutti i contenuti, marchi, testi, video, layout, materiali e certificazioni restano di titolarita di Accademia Aurea S.r.l. o dei rispettivi aventi diritto. Nessuna licenza e concessa salvo quanto necessario alla fruizione personale del corso acquistato."],
  ["Pagamenti", "I prezzi sono indicati nelle pagine dei singoli corsi e possono includere IVA ove applicabile. Il pagamento deve essere effettuato mediante gli strumenti disponibili al momento dell'acquisto. Per clienti aziendali possono essere previste condizioni dedicate."],
  ["Diritto di recesso", "Ai sensi del Codice del Consumo italiano, il consumatore dispone di 14 giorni per esercitare il diritto di recesso, salvo le eccezioni previste per contenuti digitali gia fruiti previo consenso espresso e accettazione della perdita del diritto di recesso."],
  ["Rimborsi", "I rimborsi, ove dovuti, sono eseguiti con lo stesso metodo di pagamento utilizzato dall'Utente, salvo diverso accordo. Accademia Aurea puo trattenere importi proporzionati ai contenuti gia fruiti, nei limiti consentiti dalla legge."],
  ["Comportamenti vietati", "Sono vietati accessi abusivi, scraping, condivisione delle credenziali, tentativi di compromissione tecnica, molestie verso docenti o utenti, caricamento di contenuti illeciti e ogni condotta contraria alla legge o al decoro professionale."],
  ["Limitazione di responsabilita", "Accademia Aurea S.r.l. non garantisce specifici esiti occupazionali, promozioni, ammissioni universitarie o risultati economici derivanti dalla fruizione dei corsi. La piattaforma e fornita secondo criteri di diligenza professionale."],
  ["Sospensione del servizio", "La piattaforma puo essere temporaneamente sospesa per manutenzione, sicurezza, aggiornamenti tecnici o cause di forza maggiore. Ove possibile, gli utenti saranno informati con congruo preavviso."],
  ["Legge applicabile e foro competente", "I presenti termini sono regolati dal diritto italiano. Per ogni controversia sara competente in via esclusiva il Tribunale di Milano, salvo diverso foro inderogabile previsto dalla legge."]
];

export default function TermsPage() {
  return (
    <section className="section-aurea legal page-shell">
      <div className="container-aurea max-w-5xl">
        <p className="text-sm uppercase tracking-[0.18em] text-aurea-primary">Condizioni contrattuali</p>
        <h1 className="mt-5 font-heading text-5xl text-aurea-highlight md:text-7xl">Termini di utilizzo</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-aurea-muted">
          I presenti termini disciplinano l'accesso e l'utilizzo della piattaforma Accademia Aurea, gestita da {contactInfo.legalName}, P.IVA {contactInfo.vat}.
        </p>
        <div className="mt-12 grid gap-5">
          {sections.map(([title, text], index) => (
            <section key={title} className="grid gap-5 border border-aurea-border bg-aurea-card p-6 md:grid-cols-[90px_1fr]">
              <p className="font-mono text-2xl text-aurea-primary">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
