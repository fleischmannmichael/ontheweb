import { Tag } from "@/components/Tag";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white/40 p-5 transition-colors duration-150 hover:border-accent/50">
      <h3 className="text-base font-semibold text-slate-ink">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-ink/70">
        {project.description}
      </p>

      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-4 font-mono text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="link-accent"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="link-accent"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}
