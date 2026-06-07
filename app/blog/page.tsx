import type { Metadata } from "next";
import { BlogPostRow } from "@/components/BlogPostRow";
import { getAllPostMeta, type PostMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on networking, security, and engineering.",
};

export default function BlogPage() {
  const posts = getAllPostMeta();

  // Group posts by year (descending), preserving date-sorted order within.
  const byYear = posts.reduce<Record<string, PostMeta[]>>((acc, post) => {
    const year = post.date ? post.date.slice(0, 4) : "Undated";
    (acc[year] ??= []).push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => (a < b ? 1 : -1));

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="max-w-prose text-slate-ink/70">
          Notes, write-ups, and the occasional terminal dump.
        </p>
      </header>

      {posts.length === 0 && (
        <p className="text-sm text-slate-ink/60">No posts yet.</p>
      )}

      {years.map((year) => (
        <section key={year} className="space-y-1">
          <h2 className="font-mono text-sm text-slate-ink/40">{year}</h2>
          <div className="divide-y divide-line">
            {byYear[year].map((post) => (
              <BlogPostRow key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
