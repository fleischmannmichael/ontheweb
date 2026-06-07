export function Tag({
  children,
  active = false,
  as = "span",
}: {
  children: React.ReactNode;
  active?: boolean;
  as?: "span" | "button";
}) {
  const className = `inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs transition-colors duration-150 ${
    active
      ? "border-accent bg-accent/10 text-accent"
      : "border-line bg-transparent text-slate-ink/70"
  }`;

  if (as === "button") {
    return <span className={className}>{children}</span>;
  }
  return <span className={className}>{children}</span>;
}
