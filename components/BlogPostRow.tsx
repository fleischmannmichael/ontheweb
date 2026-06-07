import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/content";

export function BlogPostRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
    >
      <span className="text-slate-ink transition-colors duration-150 group-hover:text-accent">
        {post.title}
      </span>
      <time className="shrink-0 font-mono text-xs text-slate-ink/50">
        {formatDate(post.date)}
      </time>
    </Link>
  );
}
