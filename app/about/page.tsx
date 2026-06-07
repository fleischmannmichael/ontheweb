import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "ECE student at TU Munich with a background in AI research and an interest in networking and security.",
};

const skills = [
  "Python",
  "C",
  "C++",
  "Networking basics",
  "Linux",
  "Git",
  "Computer vision",
  "Embedded systems",
];

type Role = {
  title: string;
  meta?: string;
  date: string;
  length: string;
  location?: string;
  description: string;
  skills: string[];
};

const experience: {
  org: string;
  initials: string;
  duration?: string;
  roles: Role[];
}[] = [
  {
    org: "BBYO",
    initials: "BB",
    duration: "1 yr 6 mos",
    roles: [
      {
        title: "Talent Administrator",
        meta: "BBYO International Convention",
        date: "Sep 2024 – Feb 2025",
        length: "6 mos",
        description:
          "Coordinated talent booking and logistics with an international team for BBYO's International Convention, supporting talent operations for a large-budget event.",
        skills: ["Event Management", "Project Planning", "Talent Operations"],
      },
      {
        title: "National President",
        meta: "BBYO Germany · Civil Service Internship",
        date: "Sep 2023 – Sep 2024",
        length: "1 yr 1 mo",
        location: "Germany",
        description:
          "Led BBYO Germany, one of BBYO's largest international regions — driving chapter growth, leadership initiatives, and national projects.",
        skills: ["Leadership", "Team Management"],
      },
    ],
  },
  {
    org: "Goethe University Frankfurt",
    initials: "GU",
    roles: [
      {
        title: "Research Collaborator",
        meta: "Internship",
        date: "Jun 2024 – Sep 2024",
        length: "4 mos",
        description:
          "Contributed under Dr. Ramesh to the user-facing design of an AI student-service chatbot aimed at improving internal university processes.",
        skills: [
          "Artificial Intelligence (AI)",
          "UX Design",
          "Chatbot Design",
        ],
      },
    ],
  },
];

const education = [
  {
    school: "European School RheinMain (ESRM)",
    initials: "ES",
    program: "International Baccalaureate — Physics & Mathematics",
    date: "Sep 2014 – Jul 2026",
    activities: ["MUN President", "BAC Committee President", "Varsity Rugby"],
  },
];

function Monogram({ initials }: { initials: string }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-accent/10 font-mono text-xs font-medium text-accent">
      {initials}
    </span>
  );
}

function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-slate-ink/60">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">About</h1>
        <div className="max-w-prose space-y-4 leading-relaxed text-slate-ink/80">
          <p>
            I&apos;m Michael, an incoming Electrical &amp; Computer Engineering
            student at TU Munich. Before that I worked as a research collaborator
            on AI / user-experience design at Goethe University Frankfurt, and
            led BBYO Germany as National President.
          </p>
          <p>
            My interests sit at the intersection of networking, cybersecurity,
            and embedded systems — understanding how things talk to each other,
            and how to make that communication robust and secure.
          </p>
        </div>
      </header>

      {/* Experience | Education */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr]">
        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="space-y-8">
            {experience.map((company) => (
              <div key={company.org} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Monogram initials={company.initials} />
                  <div>
                    <p className="font-medium text-slate-ink">{company.org}</p>
                    {company.duration && (
                      <p className="font-mono text-xs text-slate-ink/50">
                        {company.duration}
                      </p>
                    )}
                  </div>
                </div>

                <ol
                  className={
                    company.roles.length > 1
                      ? "ml-4 space-y-5 border-l border-line pl-6"
                      : "ml-4 space-y-5 pl-6"
                  }
                >
                  {company.roles.map((role) => (
                    <li key={role.title} className="relative">
                      {company.roles.length > 1 && (
                        <span className="absolute -left-[1.84rem] top-1.5 h-2 w-2 rounded-full bg-accent" />
                      )}
                      <p className="font-medium text-slate-ink">{role.title}</p>
                      {role.meta && (
                        <p className="text-sm text-slate-ink/70">{role.meta}</p>
                      )}
                      <p className="font-mono text-xs text-slate-ink/50">
                        {role.date} · {role.length}
                        {role.location ? ` · ${role.location}` : ""}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-ink/80">
                        {role.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <SkillTag key={skill}>{skill}</SkillTag>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-3">
                <div className="flex items-center gap-3">
                  <Monogram initials={edu.initials} />
                  <p className="font-medium text-slate-ink">{edu.school}</p>
                </div>
                <div className="ml-4 space-y-1 pl-6">
                  <p className="text-sm text-slate-ink/80">{edu.program}</p>
                  <p className="font-mono text-xs text-slate-ink/50">
                    {edu.date}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.activities.map((activity) => (
                      <SkillTag key={activity}>{activity}</SkillTag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Skills &amp; tools</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-slate-ink/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
