/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export-friendly defaults. next-mdx-remote handles MDX at
  // build time via generateStaticParams, so no extra MDX config is needed here.
  reactStrictMode: true,
};

export default nextConfig;
