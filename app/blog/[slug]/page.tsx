import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import { Tag } from "@/components/Tag";
import {
  getAllPosts,
  getPostSlugs,
  formatDate,
} from "@/lib/content";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Posts are sorted newest-first; use that order for prev/next.
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const post = posts[index];
  const newer = posts[index - 1]; // appears earlier in the newest-first list
  const older = posts[index + 1];

  return (
    <article className="mx-auto max-w-prose">
      <header className="space-y-3 border-b border-line pb-6">
        <h1 className="text-3xl font-bold leading-tight">{post.title}</h1>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-ink/50">
          <time>{formatDate(post.date)}</time>
          <span className="text-line">·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="mt-8">
        <Mdx source={post.content} />
      </div>

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      <nav className="mt-12 flex justify-between gap-4 border-t border-line pt-6 font-mono text-xs">
        <div className="flex-1">
          {older && (
            <Link
              href={`/blog/${older.slug}`}
              className="text-slate-ink/60 hover:text-accent"
            >
              ← {older.title}
            </Link>
          )}
        </div>
        <div className="flex-1 text-right">
          {newer && (
            <Link
              href={`/blog/${newer.slug}`}
              className="text-slate-ink/60 hover:text-accent"
            >
              {newer.title} →
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
