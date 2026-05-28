import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Newsletter() {
  return (
    <section className="section-aurea">
      <div className="container-aurea grid gap-8 border-y border-aurea-border py-16 md:grid-cols-[1fr_.8fr]">
        <div>
          <h2 className="font-heading text-4xl text-aurea-highlight">Ogni settimana, una risorsa utile.</h2>
          <p className="mt-4 text-lg text-aurea-muted">Niente spam. Solo contenuti che valgono il tuo tempo.</p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row">
          <Input type="email" placeholder="La tua email" aria-label="Email" />
          <Button type="submit">Ricevi la risorsa</Button>
        </form>
      </div>
    </section>
  );
}
