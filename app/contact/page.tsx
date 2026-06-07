import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const links = [
  { label: "GitHub", value: "@github", href: site.github, external: true },
  {
    label: "LinkedIn",
    value: "in/michael",
    href: site.linkedin,
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="max-w-prose leading-relaxed text-slate-ink/80">
          I&apos;m open to internship opportunities, collaboration, or just a
          conversation. The fastest way to reach me is by email.
        </p>
      </header>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="group flex flex-col gap-1 rounded-lg border border-line px-5 py-4 transition-colors duration-150 hover:border-accent/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-lg font-medium text-slate-ink group-hover:text-accent">
                {link.label}
              </span>
              <span className="break-all font-mono text-sm text-slate-ink/50 group-hover:text-accent sm:break-normal sm:text-right">
                {link.value} →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
