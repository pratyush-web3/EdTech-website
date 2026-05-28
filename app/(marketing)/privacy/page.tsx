import { contactInfo } from "@/lib/data/contact";

const rows = [
  ["Dati identificativi", "nome, cognome, codice fiscale o dati di fatturazione quando richiesti", "contratto, obbligo legale"],
  ["Dati di contatto", "email, telefono, messaggi inviati tramite form", "contratto, legittimo interesse"],
  ["Dati didattici", "corsi acquistati, lezioni completate, esercitazioni, certificazioni", "contratto"],
  ["Dati tecnici", "indirizzo IP, log di accesso, dispositivo, browser", "sicurezza, legittimo interesse"],
  ["Dati marketing", "preferenze e consenso newsletter", "consenso revocabile"]
];

export default function PrivacyPage() {
  return (
    <section className="section-aurea legal page-shell">
      <div className="container-aurea max-w-5xl">
        <p className="text-sm uppercase tracking-[0.18em] text-aurea-primary">Ultimo aggiornamento: 15 gennaio 2025</p>
        <h1 className="mt-5 font-heading text-5xl text-aurea-highlight md:text-7xl">Privacy Policy</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-aurea-muted">
          La presente informativa descrive le modalita con cui {contactInfo.legalName} tratta i dati personali degli utenti della piattaforma, ai sensi del Regolamento (UE) 2016/679.
        </p>

        <div className="mt-12 border border-aurea-border bg-aurea-card p-6">
          <h2>Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento e {contactInfo.legalName}, con sede legale in Via Monte Napoleone 8, 20121 Milano (MI), P.IVA {contactInfo.vat}. Per comunicazioni relative alla protezione dei dati personali e possibile scrivere a {contactInfo.privacyEmail}. Il Responsabile della protezione dei dati e contattabile all'indirizzo {contactInfo.dpoEmail}.
          </p>
        </div>

        <div className="mt-10 overflow-hidden border border-aurea-border">
          <div className="grid bg-aurea-surface p-4 text-xs uppercase tracking-[0.16em] text-aurea-primary md:grid-cols-3">
            <span>Categoria</span><span>Dati trattati</span><span>Base giuridica</span>
          </div>
          {rows.map(([category, data, basis]) => (
            <div key={category} className="grid gap-2 border-t border-aurea-border p-4 md:grid-cols-3">
              <strong className="text-aurea-highlight">{category}</strong>
              <span className="text-aurea-muted">{data}</span>
              <span className="text-aurea-muted">{basis}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-9">
          <section>
            <h2>Finalita del trattamento</h2>
            <p>I dati vengono trattati per consentire la registrazione dell'account, l'erogazione dei corsi, la gestione dei pagamenti, il rilascio delle certificazioni, l'assistenza tecnica, l'adempimento di obblighi fiscali e contabili, la sicurezza della piattaforma e, previo consenso, l'invio di comunicazioni informative.</p>
          </section>
          <section>
            <h2>Cookie e strumenti di tracciamento</h2>
            <p>Il sito utilizza cookie tecnici necessari al funzionamento della piattaforma, cookie analitici in forma aggregata e, solo previo consenso espresso, cookie di profilazione. L'utente puo modificare le preferenze in qualsiasi momento mediante il pannello cookie disponibile sul sito.</p>
          </section>
          <section>
            <h2>Comunicazione dei dati</h2>
            <p>I dati possono essere comunicati a fornitori tecnici, piattaforme di pagamento, consulenti fiscali, docenti incaricati, servizi di hosting e soggetti autorizzati al trattamento. Tali soggetti agiscono, ove necessario, quali responsabili del trattamento ai sensi dell'art. 28 GDPR.</p>
          </section>
          <section>
            <h2>Trasferimenti extra-UE</h2>
            <p>Eventuali trasferimenti di dati verso Paesi non appartenenti allo Spazio Economico Europeo avvengono esclusivamente in presenza di decisioni di adeguatezza, clausole contrattuali standard o altre garanzie previste dagli artt. 44 e seguenti del GDPR.</p>
          </section>
          <section>
            <h2>Periodo di conservazione</h2>
            <p>I dati relativi all'account sono conservati per tutta la durata del rapporto contrattuale. I dati fiscali sono conservati per dieci anni. I log tecnici sono conservati per il tempo strettamente necessario alla sicurezza. I dati trattati per marketing sono conservati fino a revoca del consenso o opposizione dell'interessato.</p>
          </section>
          <section>
            <h2>Diritti dell'interessato</h2>
            <p>L'interessato puo esercitare i diritti previsti dagli artt. 15-22 GDPR, inclusi accesso, rettifica, cancellazione, limitazione, portabilita, opposizione e revoca del consenso. Le richieste devono essere inviate a {contactInfo.privacyEmail}. Resta fermo il diritto di proporre reclamo al Garante per la protezione dei dati personali.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
