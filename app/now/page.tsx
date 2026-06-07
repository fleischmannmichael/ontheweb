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
          A snapshot of what I&apos;m focused on right now. Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="link-accent"
          >
            nownownow.com
          </a>
          .
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What I&apos;m studying</h2>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          [PLACEHOLDER — e.g. starting the ECE program at TUM, brushing up on
          signals &amp; systems, working through a networking course.]
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What I&apos;m building</h2>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          [PLACEHOLDER — current side projects, e.g. the drone-swarm project,
          home lab / networking experiments.]
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          What I&apos;m reading / watching
        </h2>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          [PLACEHOLDER — books, papers, talks, courses.]
        </p>
      </section>
    </div>
  );
}
