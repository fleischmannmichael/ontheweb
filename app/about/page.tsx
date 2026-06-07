import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "ECE student at TU Munich with a background in AI research and an interest in networking and security.",
};

const skills = [
  "Python",
  "C",
  "C++",
  "Networking basics",
  "Linux",
  "Git",
  "Computer vision",
  "Embedded systems",
];

const timeline = [
  {
    period: "2026 — present",
    title: "B.Sc. Electrical & Computer Engineering, TU Munich",
    detail: "[PLACEHOLDER — focus areas, relevant coursework.]",
  },
  {
    period: "2024 — 2025",
    title: "AI / Computer Vision Research Intern, Goethe University Frankfurt",
    detail: "[PLACEHOLDER — what you worked on, tools, outcomes.]",
  },
  {
    period: "— 2025",
    title: "International Baccalaureate (IB)",
    detail: "[PLACEHOLDER — HL subjects, relevant achievements.]",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">About</h1>
        <div className="max-w-prose space-y-4 leading-relaxed text-slate-ink/80">
          <p>
            I&apos;m Michael, an incoming Electrical &amp; Computer Engineering
            student at TU Munich. Before that I worked as an AI / computer vision
            research intern at Goethe University Frankfurt.
          </p>
          <p>
            My interests sit at the intersection of networking, cybersecurity,
            and embedded systems — understanding how things talk to each other,
            and how to make that communication robust and secure.
          </p>
          <p>[PLACEHOLDER — a few sentences in your own voice.]</p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Skills &amp; tools</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-slate-ink/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <ol className="space-y-6 border-l border-line pl-6">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[1.84rem] top-1.5 h-2 w-2 rounded-full bg-accent" />
              <p className="font-mono text-xs text-slate-ink/50">
                {item.period}
              </p>
              <p className="font-medium text-slate-ink">{item.title}</p>
              <p className="text-sm text-slate-ink/70">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
