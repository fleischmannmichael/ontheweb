"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { ProjectMeta } from "@/lib/content";

export function ProjectFilter({ projects }: { projects: ProjectMeta[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const all = projects.flatMap((p) => p.tags);
    return Array.from(new Set(all)).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  const chip = (label: string, value: string | null) => {
    const active = activeTag === value;
    return (
      <button
        key={label}
        type="button"
        onClick={() => setActiveTag(value)}
        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-150 ${
          active
            ? "border-accent bg-accent/10 text-accent"
            : "border-line text-slate-ink/60 hover:border-accent/50 hover:text-accent"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {chip("All", null)}
        {tags.map((tag) => chip(tag, tag))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-slate-ink/60">No projects match that tag.</p>
      )}
    </div>
  );
}
