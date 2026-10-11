import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const WORLDVAULT_LOGO_PATH = "/worldvault-mark.png";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display", className)}>
      <span className="text-foreground">WORLD</span>
      <span className="text-primary">VAULT</span>
    </span>
  );
}

export function VaultBadge({ className }: { className?: string }) {
  return (
    <img
      src={WORLDVAULT_LOGO_PATH}
      alt=""
      aria-hidden="true"
      className={cn("shrink-0 rounded-[22%]", className)}
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
  const [open, setOpen] = useState(false);

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
          : "border-b border-foreground/10 bg-background/25 backdrop-blur-sm",
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
        <div className="flex items-center gap-2">
        <Button asChild className="press text-xs font-semibold"><a href="#download">
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Download</span>
        </a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-b border-border bg-background px-5 pb-5 md:hidden"><ul className="grid grid-cols-2 gap-1">{links.map(link => <li key={link.href}><Button asChild variant="ghost" className="w-full justify-start text-sm"><a href={link.href} onClick={()=>setOpen(false)}>{link.label}</a></Button></li>)}</ul></nav>}
    </header>
  );
}
