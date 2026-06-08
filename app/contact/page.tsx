import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.71.08-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.65.24 2.87.12 3.17.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.83.57A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </svg>
  );
}

const channels = [
  {
    label: "GitHub",
    handle: `@${site.githubHandle}`,
    href: site.github,
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    handle: `in/${site.linkedinHandle}`,
    href: site.linkedin,
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
    icon: <MailIcon />,
    external: false,
  },
  {
    label: "Résumé",
    handle: "View CV",
    href: site.cv,
    icon: <DocIcon />,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Let&apos;s work together
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">Let&apos;s connect.</h1>
        <p className="max-w-prose text-lg leading-relaxed text-slate-ink/80">
          Whether it&apos;s an internship, a project to collaborate on, or just a
          conversation about networking, security, or building things — I&apos;d
          love to hear from you. Email is the fastest way to reach me.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            {...(channel.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className="group flex flex-col gap-4 rounded-xl border border-line bg-white/40 p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-150 group-hover:bg-accent group-hover:text-cream">
              {channel.icon}
            </span>
            <span>
              <span className="block font-medium text-slate-ink group-hover:text-accent">
                {channel.label}
              </span>
              <span className="mt-0.5 block break-all font-mono text-xs text-slate-ink/50">
                {channel.handle}
              </span>
            </span>
            <span className="mt-auto font-mono text-xs text-slate-ink/40 transition-colors duration-150 group-hover:text-accent">
              Reach out →
            </span>
          </a>
        ))}
      </div>

      <p className="font-mono text-sm text-slate-ink/50">
        <span className="text-accent">❯</span> based in Munich · usually reply
        within a day
      </p>
    </div>
  );
}
