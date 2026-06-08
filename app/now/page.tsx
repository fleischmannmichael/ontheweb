import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm currently focused on.",
};

// Update this page manually. Bump the date whenever you change it.
const LAST_UPDATED = "June 7, 2026";

export default function NowPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Now</h1>
        <p className="font-mono text-xs text-slate-ink/50">
          Last updated: {LAST_UPDATED}
        </p>
        <p className="max-w-prose text-slate-ink/70">
          A snapshot of what I&apos;m focused on right now.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What I&apos;m studying</h2>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          Working through MIT OpenCourseWare{" "}
          <span className="font-mono text-sm">18.01</span> (Single Variable
          Calculus) and <span className="font-mono text-sm">18.06</span> (Linear
          Algebra) to get ahead of my upcoming university coursework.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What I&apos;m building</h2>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          A homelab mini-rack for self-hosting — running my own services,
          including a self-hosted password manager, and experimenting with
          networking and security along the way.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          What I&apos;m reading / watching
        </h2>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          Currently reading <em>Dopamine Nation</em> by Dr. Anna Lembke —
          a fascinating look at how the brain&apos;s reward system shapes habits
          and behaviour.
        </p>
      </section>
    </div>
  );
}
