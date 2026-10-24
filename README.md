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
``

Import the repo at [vercel.com/new](https://vercel.com/new); it auto-detects
Next.js. On Vercel you don't need the base path — leave `NEXT_PUBLIC_BASE_PATH`
unset and it serves from the domain root.
```
