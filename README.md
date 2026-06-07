# Michael — Personal Website

A clean, editorial personal site for an ECE student / networking & security
hobbyist. Built with **Next.js 14 (App Router)**, **Tailwind CSS**,
**TypeScript**, and **MDX** for blog posts and projects.

## Stack

- [Next.js 14](https://nextjs.org/) — App Router, fully static output
- [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography`
- [TypeScript](https://www.typescriptlang.org/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) — renders MDX
  at build time
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — frontmatter
  parsing
- [reading-time](https://github.com/ngryman/reading-time) — estimated read time
- Fonts loaded via `next/font` (Inter for UI/body, JetBrains Mono for code &
  accents)

## Getting started

You need **Node.js 18.17+** (Node 20 LTS recommended).

```bash
# install dependencies
npm install

# run the dev server (http://localhost:3000)
npm run dev

# production build
npm run build
npm run start
```

## Project structure

```
app/                  # App Router pages
  page.tsx            # / (home)
  projects/           # /projects
  blog/               # /blog and /blog/[slug]
  now/                # /now
  about/              # /about
  contact/            # /contact
  layout.tsx          # root layout (nav, footer, fonts)
  globals.css         # Tailwind + base styles
components/            # NavBar, Footer, ProjectCard, BlogPostRow, Tag, ...
lib/
  content.ts          # MDX loading + frontmatter helpers
  site.ts             # site-wide constants (name, links, nav)
content/
  posts/*.mdx         # blog posts
  projects/*.mdx      # project entries
```

## Writing content

### Blog posts — `content/posts/*.mdx`

The filename (minus `.mdx`) becomes the URL slug, e.g.
`content/posts/hello-world.mdx` → `/blog/hello-world`.

Frontmatter:

```mdx
---
title: "Hello World"
date: "2026-06-07"        # YYYY-MM-DD — used for sorting & year grouping
tags: ["meta"]
description: "Short summary used for SEO and previews."
---

Your MDX body here. Standard Markdown plus JSX components work.
```

### Projects — `content/projects/*.mdx`

```mdx
---
title: "Personal Finance Tracker"
date: "2026-05-01"
description: "One-line description shown on the card."
tags: ["React", "Node.js", "SQLite", "Finance"]
github: "https://github.com/[USERNAME]/finance-tracker"
demo: ""                  # optional live URL; leave empty to hide
featured: true            # featured projects appear on the home page
---

Longer project write-up (currently unused by the grid, available for a future
project detail page).
```

## Obsidian workflow

The `content/` folder is plain, flat Markdown with YAML frontmatter only — no
Obsidian-specific syntax is required, so it doubles as an
[Obsidian](https://obsidian.md/) vault.

To write posts seamlessly in Obsidian:

1. Open Obsidian → **Open folder as vault** → select this repo's
   `content/posts` folder (or the whole `content/` folder).
2. Set a default template with the frontmatter fields above (optional, via the
   Templates core plugin).
3. Write `.md` or `.mdx` files. Both extensions are picked up by the loader.
4. Save → `git commit` → push. The site rebuilds with your new content.

Wiki-links (`[[...]]`) and other Obsidian-only syntax are **not** rendered by
the site, so stick to standard Markdown links if you want them to work on the
web.

## Customizing

- **Name, links, email, nav:** edit `lib/site.ts`. Replace
  `[EMAIL_PLACEHOLDER]`, `[USERNAME]` (GitHub/LinkedIn), and the `url`.
- **Colors & fonts:** `tailwind.config.ts`.
- **Now / About copy:** edit the `[PLACEHOLDER]` text directly in
  `app/now/page.tsx` and `app/about/page.tsx`.
- **`/now` last-updated date:** the `LAST_UPDATED` constant in
  `app/now/page.tsx`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js** — no extra configuration needed.
4. Deploy. Future pushes auto-deploy.

The site is fully static (`generateStaticParams` covers all dynamic routes), so
it also works on any static host via `next build`.
```
