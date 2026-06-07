"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/80 backdrop-blur transition-colors duration-150 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-slate-ink hover:text-accent"
        >
          <span className="text-accent">$</span> {site.name.toLowerCase()}
        </Link>
        <ul className="flex items-center gap-4 text-sm sm:gap-5">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors duration-150 hover:text-accent ${
                      active ? "text-accent" : "text-slate-ink/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
}
