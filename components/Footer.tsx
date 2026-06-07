import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-ink/60 sm:flex-row sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <span className="text-line">·</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <span className="text-line">·</span>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
        <p className="font-mono text-xs">© {year} {site.name}</p>
      </div>
    </footer>
  );
}
