import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display tracking-wide", className)}>
      <span className="text-foreground">WORLD</span>
      <span className="text-primary">VAULT</span>
    </span>
  );
}

export function VaultBadge({ className }: { className?: string }) {
  return (
    <img
      src="/worldvault-mark.svg"
      alt=""
      aria-hidden="true"
      className={cn("shrink-0", className)}
    />
  );
}

export function LogoLockup({
  className,
  badgeClassName,
}: {
  className?: string;
  badgeClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <VaultBadge className={cn("h-8 w-8", badgeClassName)} />
      <Wordmark />
    </span>
  );
}

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screens" },
  { href: "#privacy", label: "Privacy" },
  { href: "#about", label: "About" },
  { href: "#support", label: "Support" },
];

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const on = () => setStuck(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        stuck
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-300",
          stuck ? "h-14" : "h-16",
        )}
      >
        <a href="#top" className="text-sm sm:text-base" aria-label="WorldVault home">
          <LogoLockup badgeClassName="h-8 w-8" />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4 text-xs text-muted-foreground lg:gap-6 lg:text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#download"
          className="press inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </header>
  );
}
