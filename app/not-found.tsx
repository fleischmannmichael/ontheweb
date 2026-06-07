import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 py-16 text-center">
      <p className="font-mono text-sm text-accent">$ cat 404</p>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-ink/70">
        That route doesn&apos;t exist (yet).
      </p>
      <Link href="/" className="link-accent font-mono text-sm">
        ← back home
      </Link>
    </div>
  );
}
