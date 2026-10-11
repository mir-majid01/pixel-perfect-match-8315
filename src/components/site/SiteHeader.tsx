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
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        stuck || open
          ? "border-border/80 bg-background/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-foreground/10 bg-background/35 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-[height] duration-300 sm:px-5",
          stuck ? "h-14" : "h-16",
        )}
      >
        <a
          href="#top"
          className="rounded-sm text-sm outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary sm:text-base"
          aria-label="WorldVault home"
          onClick={closeMenu}
        >
          <LogoLockup badgeClassName="h-7 w-7 sm:h-8 sm:w-8" />
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-4 text-xs text-muted-foreground lg:gap-6 lg:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button asChild className="press h-9 gap-2 px-3 text-xs font-semibold sm:h-10 sm:px-4 sm:text-sm">
            <a href="#download" onClick={closeMenu}>
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((isOpen) => !isOpen)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation menu"
            className="fixed inset-0 top-14 -z-10 cursor-default bg-black/30 backdrop-blur-[2px] md:hidden"
            onClick={closeMenu}
          />
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full origin-top border-b border-border/80 bg-background/98 px-4 pb-5 pt-3 shadow-xl shadow-black/20 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 sm:px-5 md:hidden"
          >
            <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Explore WorldVault
            </p>
            <ul className="grid grid-cols-2 gap-1.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex min-h-11 items-center justify-between rounded-md border border-transparent px-3 text-sm text-muted-foreground transition-[color,background-color,border-color] duration-200 hover:border-border hover:bg-secondary/70 hover:text-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className="translate-x-[-3px] text-primary opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-t border-border/70 px-2 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
              <span className="text-xs text-muted-foreground">
                Your worlds. Safely backed up.
              </span>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
