import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Gamepad2,
  Grid2X2,
  Info,
  LifeBuoy,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
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
  { href: "#how-it-works", label: "How it works", detail: "A simple backup flow", Icon: Workflow },
  { href: "#features", label: "Features", detail: "Made for your worlds", Icon: Grid2X2 },
  { href: "#screenshots", label: "Screens", detail: "See it in action", Icon: Gamepad2 },
  { href: "#privacy", label: "Privacy", detail: "Your files stay yours", Icon: ShieldCheck },
  { href: "#about", label: "About", detail: "The story behind Vault", Icon: Info },
  { href: "#support", label: "Support", detail: "Get help when needed", Icon: LifeBuoy },
];

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 24);
      if (window.scrollY > 80) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 cursor-default bg-black/55 backdrop-blur-[3px] transition-opacity duration-200 md:hidden"
          onClick={closeMenu}
        />
      )}
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
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="relative py-2 transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild className="press h-9 gap-2 rounded-md px-3 text-xs font-semibold shadow-[0_0_24px_-12px_var(--primary)] sm:h-10 sm:px-4 sm:text-sm">
              <a href="#download" onClick={closeMenu}>
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download</span>
                <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" aria-hidden="true" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={cn(
                "h-9 w-9 rounded-md border-border/80 bg-background/60 transition-all duration-200 md:hidden",
                open && "border-primary/50 bg-primary/10 text-primary",
              )}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((isOpen) => !isOpen)}
            >
              {open ? (
                <X className="h-[18px] w-[18px]" aria-hidden="true" />
              ) : (
                <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-x-3 top-[calc(100%+0.65rem)] mx-auto max-w-md overflow-hidden rounded-xl border border-border/90 bg-[oklch(0.17_0.016_158)] shadow-2xl shadow-black/50 ring-1 ring-white/[0.04] animate-in fade-in slide-in-from-top-2 duration-200 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-border/80 px-4 py-3.5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  WorldVault menu
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Your worlds, one safe place.
                </p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-1 p-2 sm:grid-cols-2">
              {links.map(({ href, label, detail, Icon }, index) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="group flex min-h-[62px] items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-[background-color,border-color,transform] duration-200 hover:border-primary/20 hover:bg-white/[0.045] active:scale-[0.99] focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/80 bg-white/[0.035] text-muted-foreground transition-colors duration-200 group-hover:border-primary/25 group-hover:bg-primary/10 group-hover:text-primary">
                      <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-semibold text-foreground">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">
                        {detail}
                      </span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 border-t border-border/80 bg-black/10 px-4 py-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] text-muted-foreground">
                Free. No ads. No subscription.
              </span>
              <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-primary">
                Explore
              </span>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
