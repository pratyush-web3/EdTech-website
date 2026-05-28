import Link from "next/link";
import { contactInfo } from "@/lib/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-aurea-border bg-aurea-surface">
      <div className="gold-line" />
      <div className="container-aurea grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-accent text-lg tracking-[0.2em] text-aurea-highlight">ACCADEMIA AUREA</p>
          <p className="mt-4 text-sm leading-7 text-aurea-muted">Dove la conoscenza incontra il futuro. Formazione d'eccellenza per la nuova generazione di professionisti italiani.</p>
        </div>
        <div>
          <h3 className="font-semibold text-aurea-highlight">Naviga</h3>
          <div className="mt-4 grid gap-3 text-sm text-aurea-muted">
            <Link href="/about">About Us</Link>
            <Link href="/chi-siamo">Chi siamo</Link>
            <Link href="/corsi">Corsi</Link>
            <Link href="/formazione">Formazione</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-aurea-highlight">Contatti</h3>
          <div className="mt-4 grid gap-3 text-sm text-aurea-muted">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}>{contactInfo.phone}</a>
            <span>{contactInfo.hours}</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-aurea-highlight">Legale</h3>
          <div className="mt-4 grid gap-3 text-sm text-aurea-muted">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/termini">Termini di utilizzo</Link>
            <span>P.IVA {contactInfo.vat}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
