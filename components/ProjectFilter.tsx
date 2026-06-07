"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { ProjectMeta } from "@/lib/content";

export function ProjectFilter({ projects }: { projects: ProjectMeta[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const all = projects.flatMap((p) => p.categories);
    return Array.from(new Set(all)).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filtered = activeCategory
    ? projects.filter((p) => p.categories.includes(activeCategory))
    : projects;

  const chip = (label: string, value: string | null) => {
    const active = activeCategory === value;
    return (
      <button
        key={label}
        type="button"
        onClick={() => setActiveCategory(value)}
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
        {categories.map((category) => chip(category, category))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-slate-ink/60">
          No projects in that category yet.
        </p>
      )}
    </div>
  );
}
