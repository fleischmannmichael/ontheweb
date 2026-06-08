import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogPostRow } from "@/components/BlogPostRow";
import { getFeaturedProjects, getAllPostMeta } from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const recentPosts = getAllPostMeta().slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-5">
        <h1 className="text-4xl font-bold sm:text-5xl">Hi, I&apos;m Michael.</h1>
        <p className="max-w-prose text-lg leading-relaxed text-slate-ink/80">
          I&apos;m an incoming Electrical &amp; Computer Engineering student,
          interested in networking, cybersecurity, and building things that work
          end to end. Previously I did AI research at Goethe University Frankfurt.
        </p>
        <p className="font-mono text-sm text-slate-ink/60">
          📍 Frankfurt · Incoming ECE student · Currently:{" "}
          <Link href="/now" className="link-accent">
            /now
          </Link>
        </p>

        {/* Call to action */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-cream shadow-sm transition-colors duration-150 hover:bg-accent-hover"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-slate-ink transition-colors duration-150 hover:border-accent/50 hover:text-accent"
          >
            See my work
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="text-xl font-semibold">Featured projects</h2>
            <Link
              href="/projects"
              className="font-mono text-xs text-slate-ink/60 hover:text-accent"
            >
              → View all projects
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="text-xl font-semibold">Recent posts</h2>
            <Link
              href="/blog"
              className="font-mono text-xs text-slate-ink/60 hover:text-accent"
            >
              → All posts
            </Link>
          </div>
          <div className="divide-y divide-line">
            {recentPosts.map((post) => (
              <BlogPostRow key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
