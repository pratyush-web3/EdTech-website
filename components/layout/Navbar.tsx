import { Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Corsi", "/corsi"],
  ["Chi siamo", "/chi-siamo"],
  ["Formazione", "/formazione"],
  ["Certificazioni", "/certificazioni"],
  ["Blog", "/blog"],
  ["Contatti", "/contatti"],
  // ["Termini", "/termini"]
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="container-aurea relative overflow-visible rounded-[28px] border border-aurea-border/70 bg-[linear-gradient(180deg,rgba(24,23,20,0.88)_0%,rgba(16,16,15,0.9)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:rounded-[34px]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurea-primary/60 to-transparent" />
        <div className="flex items-center gap-3 px-4 py-3 sm:px-5 lg:px-6">
          <a href="/" className="group flex min-w-0 items-center gap-3" aria-label="Accademia Aurea">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-[18px] border border-aurea-primary/30 bg-[radial-gradient(circle_at_30%_30%,rgba(211,173,79,0.32),transparent_58%),linear-gradient(180deg,rgba(31,30,26,1),rgba(18,18,16,1))] shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition duration-300 group-hover:scale-[1.03]">
              <span className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/5" />
              <span className="absolute left-[10px] top-[10px] h-1.5 w-1.5 rounded-full bg-aurea-primary shadow-[0_0_16px_rgba(211,173,79,0.85)]" />
              <span className="absolute bottom-[-2px] left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-full border-t border-aurea-primary/35 bg-aurea-bg/10" />
              <span className="relative text-[15px] font-bold tracking-[0.18em] text-aurea-primary">A</span>
            </span>

         
          </a>

          <details className="group relative ml-auto shrink-0 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-aurea-border bg-aurea-card/45 px-4 py-2 text-sm font-semibold text-aurea-highlight transition hover:border-aurea-primary">
              <Menu className="group-open:hidden" size={18} />
              <X className="hidden group-open:block" size={18} />
              Menu
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 w-[min(100vw-1.5rem,22rem)] rounded-[24px] border border-aurea-border/70 bg-[linear-gradient(180deg,rgba(24,23,20,0.98)_0%,rgba(16,16,15,0.98)_100%)] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-xl group-open:block lg:hidden">
              <nav className="grid grid-cols-2 gap-2">
                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-full border border-aurea-border/70 bg-aurea-card/50 px-3 py-2 text-center text-xs font-medium text-aurea-muted transition hover:border-aurea-primary hover:text-aurea-highlight"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="/dashboard"
                  className="rounded-full border border-aurea-border/80 bg-transparent px-3 py-2 text-center text-xs font-medium text-aurea-muted transition hover:border-aurea-primary hover:text-aurea-highlight"
                >
                  Area studenti
                </a>
                <a
                  href="/contatti"
                  className="rounded-full bg-aurea-primary px-3 py-2 text-center text-xs font-semibold text-aurea-bg transition hover:bg-aurea-highlight"
                >
                  Consulenza
                </a>
                <a
                  href="/corsi"
                  className="col-span-2 rounded-full border border-aurea-border/80 bg-aurea-card/40 px-3 py-2 text-center text-xs font-medium text-aurea-muted transition hover:border-aurea-primary hover:text-aurea-highlight"
                >
                  Corsi
                </a>
              </div>
            </div>
          </details>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-medium text-aurea-muted transition duration-200 hover:border-aurea-border hover:bg-aurea-card/70 hover:text-aurea-highlight"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <a
              href="/dashboard"
              className="rounded-full border border-aurea-border/90 bg-transparent px-4 py-2 text-sm font-medium text-aurea-muted transition hover:border-aurea-primary hover:text-aurea-highlight"
            >
              Area studenti
            </a>
            <a
              href="/contatti"
              className="rounded-full bg-aurea-primary px-4 py-2 text-sm font-semibold text-aurea-bg shadow-[0_10px_24px_rgba(211,173,79,0.22)] transition hover:bg-aurea-highlight"
            >
              Consulenza
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
