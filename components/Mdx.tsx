import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

// Custom element mapping so MDX content matches the site's editorial style.
const components = {
  a: ({
    href = "",
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className="link-accent" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="link-accent"
        {...props}
      >
        {children}
      </a>
    );
  },
};

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose prose-ink max-w-none break-words prose-headings:font-sans prose-headings:tracking-tight prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:border prose-pre:border-line prose-pre:bg-codebg prose-code:rounded prose-code:bg-codebg prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
