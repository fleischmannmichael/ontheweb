/** @type {import('next').NextConfig} */

// On GitHub Pages a project site is served from /<repo> (e.g. /ontheweb).
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>"; locally it's
// empty so `npm run dev` / `npm run build` work at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  // Emit a fully static site into ./out for GitHub Pages.
  output: "export",
  // Pages serves directories, so /about -> /about/index.html.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for static hosting.
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
};

export default nextConfig;
