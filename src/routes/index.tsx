import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  HardDrive,
  Cloud,
  CalendarClock,
  Package,
  Images,
  Gauge,
  Search,
  ShieldCheck,
  Download,
  Smartphone,
  MessageCircle,
  Mail,
  Send,
  RotateCcw,
  MousePointerClick,
  Flame,
  Database,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Creature } from "@/components/site/Creature";
import { LogoLockup, SiteHeader } from "@/components/site/SiteHeader";
import {
  PhoneFrame,
  ScreenHome,
  ScreenWorld,
  ScreenProgress,
  ScreenSettings,
} from "@/components/site/PhoneFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorldVault — Backup & restore your Minecraft Bedrock worlds" },
      {
        name: "description",
        content:
          "WorldVault backs up your Minecraft Bedrock worlds, addons and screenshots to your device or your own Google Drive. One tap to save, restore anytime. Free for Android.",
      },
      {
        property: "og:title",
        content: "WorldVault — Never lose a Minecraft Bedrock world again",
      },
      {
        property: "og:description",
        content:
          "Local .mcworld exports, scheduled backups, and cloud backups that stay in your own Google Drive. Free Android app.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://pixel-perfect-match-8315.lovable.app/",
      },
      {
        property: "og:image",
        content: "https://pixel-perfect-match-8315.lovable.app/worldvault-social.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://pixel-perfect-match-8315.lovable.app/worldvault-social.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-perfect-match-8315.lovable.app/" },
    ],
  }),
  component: Landing,
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return y;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">
      {children}
    </p>
  );
}

const steps = [
  {
    icon: Search,
    title: "Discover worlds",
    body: "WorldVault scans your Bedrock folder and lists every world with its real size and last-played time.",
  },
  {
    icon: HardDrive,
    title: "Choose local or cloud",
    body: "Save a .mcworld file to your phone, or send it to your own Google Drive — per world, your call.",
  },
  {
    icon: MousePointerClick,
    title: "One-tap backup",
    body: "Compression and upload run in the background with live speed and time remaining.",
  },
  {
    icon: RotateCcw,
    title: "Restore anytime",
    body: "Pick any saved version and drop it straight back into Minecraft, on this phone or a new one.",
  },
];

const features = [
  {
    icon: HardDrive,
    title: "Local backup",
    body: "Exports a standard .mcworld or .zip you can share, sideload, or archive yourself.",
  },
  {
    icon: Cloud,
    title: "Your own Google Drive",
    body: "Worlds stay in YOUR Drive — we never see or store your files.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled backups",
    body: "Daily or weekly automatic runs, switched on per world instead of all-or-nothing.",
  },
  {
    icon: Package,
    title: "Addons & resource packs",
    body: "Behavior and resource packs are captured with the world so restores aren't broken.",
  },
  {
    icon: Images,
    title: "Screenshot organizer",
    body: "Groups your Bedrock screenshots by world and date so builds are easy to find again.",
  },
  {
    icon: Gauge,
    title: "Real-time progress",
    body: "Live transfer speed, bytes done, and time remaining for every backup and restore.",
  },
];

const shots = [
  {
    screen: <ScreenHome />,
    label: "WorldVault home dashboard listing detected worlds",
    caption: "Home — every world found on your device, with backup status.",
  },
  {
    screen: <ScreenWorld />,
    label: "World detail screen with backup options",
    caption: "World detail — pick local, cloud, addons, and screenshots.",
  },
  {
    screen: <ScreenProgress />,
    label: "Backup progress screen with transfer speed",
    caption: "Backup progress — live speed and time remaining.",
  },
  {
    screen: <ScreenSettings />,
    label: "Settings screen with automatic backup schedule",
    caption: "Settings — schedules, Drive account, and version limits.",
  },
];

function Landing() {
  const y = useParallax();

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
          <HeroBackdrop offset={y} />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <Reveal>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Backup · Save · Never Lose
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                  A corrupted save shouldn&apos;t cost you{" "}
                  <span className="text-primary">300 hours</span> of building.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                  WorldVault copies your Minecraft Bedrock worlds, addons and
                  screenshots off your phone — to local files or your own Google
                  Drive — so a crash, a factory reset, or a mis-tapped delete is
                  an inconvenience, not a loss.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#download"
                    className="press inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download for Android
                  </a>
                  <a
                    href="#how-it-works"
                    className="press inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary"
                  >
                    See how it works
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-4 text-xs text-muted-foreground">
                  Free · Android 8.0+ · No account required for local backups
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="flex justify-center md:justify-end">
              <div className="relative">
                <PhoneFrame label="WorldVault dashboard showing backed up Minecraft Bedrock worlds">
                  <ScreenHome />
                </PhoneFrame>
                <Creature
                  variant="sprout"
                  className="absolute -left-8 bottom-6 hidden sm:block"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="pixel-grid border-y border-border py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
                Bedrock worlds live in one folder, on one device, with no undo.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  stat: "One tap",
                  body: "is all it takes to delete a world in-game. There is no recycle bin and no confirmation you can take back.",
                },
                {
                  stat: "Corrupt",
                  body: "is what a save becomes after a crash mid-chunk-write. The world still shows up — it just won't open.",
                },
                {
                  stat: "New phone",
                  body: "and your worlds stay behind. Bedrock's own sync doesn't cover local worlds, addons, or screenshots.",
                },
              ].map((c, i) => (
                <Reveal key={c.stat} delay={i * 100}>
                  <div className="h-full rounded-xl border border-border bg-card p-6">
                    <p className="font-display text-xl text-primary">{c.stat}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionLabel>How it works</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Four steps, then it runs on its own.
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-5 md:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 110}>
                  <div className="h-full rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center bg-secondary text-primary">
                        <s.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm text-border">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="pixel-grid border-y border-border py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex items-end justify-between gap-6">
              <div>
                <Reveal>
                  <SectionLabel>Features</SectionLabel>
                </Reveal>
                <Reveal delay={60}>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">
                    Everything a world needs to survive.
                  </h2>
                </Reveal>
              </div>
              <Creature
                variant="glow"
                delay={0.6}
                className="hidden shrink-0 md:block"
              />
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 100}>
                  <div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <span className="grid h-10 w-10 place-items-center bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <f.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section id="screenshots" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionLabel>Inside the app</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Four screens, no clutter.
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 overflow-x-auto pb-4">
            <ul className="mx-auto flex w-max gap-6 px-5 md:px-[max(1.25rem,calc((100vw-72rem)/2))]">
              {shots.map((s, i) => (
                <Reveal as="li" key={s.caption} delay={i * 90}>
                  <figure className="w-[260px]">
                    <PhoneFrame label={s.label}>{s.screen}</PhoneFrame>
                    <figcaption className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      {s.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PRIVACY */}
        <section
          id="privacy"
          className="pixel-grid border-y border-border py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div>
              <Reveal>
                <SectionLabel>Where your files live</SectionLabel>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  A backup tool shouldn&apos;t become another place your data
                  leaks from.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  WorldVault is local-first. Every backup is created on your
                  device, and cloud storage is optional. When you turn it on, the
                  app signs you into your own Google Drive and writes the files
                  there — the same way you would upload them yourself.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-foreground">
                    Our servers store metadata only — backup names, timestamps
                    and sizes. Never the contents of your worlds.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ul className="space-y-4">
                {[
                  {
                    t: "On your device",
                    b: "Worlds are read and compressed locally. Local-only backups never touch the internet.",
                  },
                  {
                    t: "In your Drive",
                    b: "Cloud backups are uploaded with your own Google account into a WorldVault folder you own and can delete anytime.",
                  },
                  {
                    t: "On our side",
                    b: "Only a small metadata record so the app can list versions across devices. No file contents, no world data.",
                  },
                ].map((r) => (
                  <li
                    key={r.t}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="font-display text-sm text-primary">{r.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.b}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-border py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <Reveal>
                <SectionLabel>About the developer</SectionLabel>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
                  Built by one Bedrock player who wanted backups to feel dependable.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  WorldVault is built and maintained by a solo developer who plays
                  Bedrock and got tired of losing worlds to corrupted saves and
                  device resets. It is intentionally focused: make a complete copy,
                  show exactly where it goes, and make restoring it straightforward.
                </p>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="border-l-2 border-primary bg-surface-2 p-6">
                <p className="font-display text-xs uppercase text-primary">Built with</p>
                <ul className="mt-5 space-y-5">
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center bg-secondary text-primary">
                      <Flame className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">Firebase</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Keeps the small records needed to identify backup versions — not the contents of your worlds.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center bg-secondary text-primary">
                      <Database className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">Google Drive API</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Sends cloud backups directly to a WorldVault folder in the Google Drive account you control.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SUPPORT */}
        <section id="support" className="pixel-grid border-b border-border py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionLabel>Contact & support</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Talk directly to the developer.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Questions, bug reports, or feature requests — reach out directly.
              </p>
            </Reveal>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Telegram", detail: "@Mirmajid01", href: "https://t.me/Mirmajid01", icon: Send, external: true },
                { label: "WhatsApp", detail: "+91 78899 41591", href: "https://wa.me/917889941591", icon: MessageCircle, external: true },
                { label: "Email", detail: "WorldVault@gmail.com", href: "mailto:WorldVault@gmail.com", icon: Mail, external: false },
              ].map((contact, i) => (
                <Reveal key={contact.label} delay={i * 90}>
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <contact.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{contact.label}</span>
                      <span className="block break-all text-xs text-muted-foreground">{contact.detail}</span>
                    </span>
                    <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section id="download" className="relative overflow-hidden py-28">
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <Reveal className="flex justify-center">
              <Creature variant="pebble" delay={0.2} />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
                Back up your worlds before you need to.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Cloud backup costs nothing — it uses the free storage in your own
                Google Drive, so there&apos;s no subscription and no upload limit
                beyond your own space.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a
                href="#download"
                className="press mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download for Android
              </a>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                Android 8.0 and newer · APK, ~18 MB · Free, no ads
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <LogoLockup className="text-lg" badgeClassName="h-11 w-11" />
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Backup · Save · Never Lose
              </p>
            </div>
            <nav aria-label="Footer">
              <h2 className="text-sm font-semibold">Product</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#how-it-works" className="hover:text-foreground">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-foreground">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <h2 className="text-sm font-semibold">Support</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Send className="h-4 w-4 text-primary" aria-hidden="true" />
                   <a href="https://t.me/Mirmajid01" target="_blank" rel="noreferrer" className="hover:text-foreground">
                    Telegram
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                   <a href="https://wa.me/917889941591" target="_blank" rel="noreferrer" className="hover:text-foreground">
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                   <a href="mailto:WorldVault@gmail.com" className="hover:text-foreground">
                    Email support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            <p>
              WorldVault is an independent app and is not affiliated with,
              endorsed by, or sponsored by Mojang Studios or Microsoft.
              Minecraft is a trademark of Mojang Synergies AB.
            </p>
            <p className="mt-3">© {new Date().getFullYear()} WorldVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
