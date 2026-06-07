import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");
const POSTS_DIR = path.join(CONTENT_DIR, "posts");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  categories: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface Project extends ProjectMeta {
  content: string;
}

function readMdxFiles(dir: string): { slug: string; raw: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
      raw: fs.readFileSync(path.join(dir, file), "utf8"),
    }));
}

// ---------------------------------------------------------------------------
// Posts
// ---------------------------------------------------------------------------

export function getAllPosts(): Post[] {
  return readMdxFiles(POSTS_DIR)
    .map(({ slug, raw }) => {
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        tags: data.tags ?? [],
        description: data.description ?? "",
        readingTime: readingTime(content).text,
        content,
      } satisfies Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostMeta(): PostMeta[] {
  // Strip the heavy `content` field for list views.
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return readMdxFiles(POSTS_DIR).map(({ slug }) => slug);
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export function getAllProjects(): Project[] {
  return readMdxFiles(PROJECTS_DIR)
    .map(({ slug, raw }) => {
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        categories: data.categories ?? [],
        github: data.github ?? "",
        demo: data.demo ?? "",
        featured: Boolean(data.featured),
        content,
      } satisfies Project;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
