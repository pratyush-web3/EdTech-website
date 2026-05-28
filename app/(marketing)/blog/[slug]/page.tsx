import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-aurea page-shell">
      <div className="container-aurea max-w-4xl">
        <p className="text-xs uppercase tracking-[0.18em] text-aurea-primary">{post.category} · {post.date}</p>
        <h1 className="mt-5 font-heading text-5xl leading-tight text-aurea-highlight md:text-7xl">{post.title}</h1>
        <img src={post.image} alt="" className="mt-10 h-[460px] w-full rounded-2xl border border-aurea-border object-cover" />
        <div className="prose-aurea mt-10 grid gap-6 text-xl">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  );
}
