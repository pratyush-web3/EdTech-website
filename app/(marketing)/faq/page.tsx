import { faqSections } from "@/lib/data/faq";

export default function FaqPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <h1 className="max-w-4xl font-heading text-5xl text-aurea-highlight md:text-7xl">Prima domanda: cosa vuoi sapere davvero?</h1>
        <div className="mt-14 grid gap-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-3xl text-aurea-highlight">{section.title}</h2>
              <div className="mt-6 grid gap-3">
                {section.items.map(([question, answer]) => (
                  <details key={question} className="rounded-2xl border border-aurea-border bg-aurea-card p-5">
                    <summary className="cursor-pointer font-semibold text-aurea-highlight">{question}</summary>
                    <p className="mt-4 leading-7 text-aurea-muted">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
