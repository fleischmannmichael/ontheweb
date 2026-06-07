import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built — networking, security, and software.",
};

export default function ProjectsPage() {
  const projects = getAllProjects().map(({ content: _content, ...meta }) => meta);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="max-w-prose text-slate-ink/70">
          A selection of things I&apos;ve built and worked on. Filter by tag
          below.
        </p>
      </header>

      <ProjectFilter projects={projects} />
    </div>
  );
}
