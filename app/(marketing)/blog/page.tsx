import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <section className="section-aurea page-shell">
      <div className="container-aurea">
        <h1 className="max-w-5xl font-heading text-5xl text-aurea-highlight md:text-7xl">Idee utili, scritte senza nebbia.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-aurea-muted">Ogni articolo nasce da una domanda concreta: cosa ti serve per studiare meglio, lavorare meglio, scegliere con piu lucidita?</p>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-aurea-border bg-aurea-card">
              <img src={post.image} alt="" className="h-56 w-full object-cover grayscale transition group-hover:grayscale-0" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-aurea-primary">{post.category} · {post.date}</p>
                <h2 className="mt-4 font-heading text-2xl text-aurea-highlight">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-aurea-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
