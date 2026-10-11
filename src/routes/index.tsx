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
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  TriangleAlert,
  FolderOpen,
  Heart,
} from "lucide-react";
import landscape from "@/assets/worldvault-landscape.jpg";
import { Button } from "@/components/ui/button";
import { AppShowcase } from "@/components/site/AppShowcase";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Creature } from "@/components/site/Creature";
import { LogoLockup, SiteHeader } from "@/components/site/SiteHeader";


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
    <p className="section-label text-xs font-semibold uppercase text-primary">
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

function Landing() {
  const y = useParallax();

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="world-hero relative isolate overflow-hidden">
          <HeroBackdrop offset={y} />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 text-center md:pt-40">
            <Reveal>
              <p className="hero-eyebrow inline-flex items-center gap-2 border border-foreground/20 bg-background/40 px-3 py-2 text-xs text-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 bg-primary" /> FOR THE WORLDS YOU CAN’T REPLACE
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">WorldVault<span className="text-primary">.</span></h1>
              <p className="mt-5 text-2xl font-medium leading-snug md:text-3xl">You built a world. <span className="text-primary">Keep it.</span></p>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-hero-muted md:text-base">
                The first house. The impossible redstone build. That survival world you always come back to. Back up your Bedrock worlds — and keep every bit of them yours.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="press h-12 px-6 font-semibold"><a href="/worldvault.apk" download="WorldVault.apk"><Download /> Download for Android <ArrowUpRight /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-12 border-foreground/25 bg-background/40 px-6 backdrop-blur-sm"><a href="#how-it-works">Take a closer look <ArrowRight /></a></Button>
              </div>
              <p className="mt-4 text-xs text-hero-muted">Free. No ads. No subscription. Just your worlds, safe.</p>
            </Reveal>
            <div className="mt-24 flex items-end justify-between text-left md:mt-28">
              <span className="text-xs text-hero-muted"><span className="mb-1 block font-medium text-foreground">Every block tells a story.</span>Make sure yours has a backup.</span>
              <a href="#how-it-works" aria-label="Explore WorldVault" className="scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground"><ChevronDown className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <div className="border-y border-border bg-surface-2">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-5 px-5 py-6 text-xs text-muted-foreground md:grid-cols-4">
            {[[ShieldCheck, "Your worlds. Your storage."], [Cloud, "Local + Google Drive"], [Package, "Worlds, packs & screenshots"], [Smartphone, "Made for Android"]].map(([Icon, text]) => {
              const ItemIcon = Icon as typeof ShieldCheck;
              return <div key={String(text)} className="flex items-center gap-2.5"><ItemIcon className="h-4 w-4 shrink-0 text-primary" /><span>{String(text)}</span></div>;
            })}
          </div>
        </div>

        {/* PROBLEM */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
              <Reveal><SectionLabel>01 / Why it matters</SectionLabel><h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Hundreds of hours.<br />One fragile save file.</h2></Reveal>
              <Reveal delay={100}><p className="pt-1 text-base leading-relaxed text-muted-foreground">A Bedrock world lives on one device. A crash, a reset, or an accidental delete can take everything with it. Your next backup should happen before your next “what if.”</p></Reveal>
            </div>
            <div className="mt-12 grid gap-8 border-y border-border py-8 md:grid-cols-3">
              {[{icon: TriangleAlert, title: "The save that won’t open", body: "A crash during a save can corrupt the world you were playing just a moment ago."}, {icon: Smartphone, title: "The phone you leave behind", body: "A new device shouldn’t mean starting over. Keep a copy you can bring with you."}, {icon: RotateCcw, title: "The tap you can’t undo", body: "Deleted worlds don’t have a recycle bin. A saved version gives you a way back."}].map((item,i)=><Reveal key={item.title} delay={i*80}><div className="flex items-center gap-3"><item.icon className="h-5 w-5 text-muted-foreground" /><h3 className="text-sm font-semibold">{item.title}</h3></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p></Reveal>)}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="border-y border-border bg-surface-2 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal><SectionLabel>02 / A little peace of mind</SectionLabel><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Less worrying. More building.</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">A straightforward path from the world on your phone to a copy you can count on.</p></Reveal>
            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {steps.map((step,i)=><Reveal as="li" key={step.title} delay={i*100} className="workflow-step"><div className="mb-7 flex items-center gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center border border-primary/30 bg-primary/5 text-primary"><step.icon className="h-5 w-5" /></span><span className="workflow-line h-px flex-1 bg-border" /></div><span className="text-xs text-primary">0{i+1}</span><h3 className="mt-2 text-base font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p></Reveal>)}
            </ol>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal><SectionLabel>03 / More than a save file</SectionLabel><h2 className="mt-4 text-3xl font-semibold md:text-4xl">The whole world. Not just the blocks.</h2></Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
              <Reveal className="feature-world relative isolate min-h-[410px] overflow-hidden rounded-lg border border-border">
                <img src={landscape} alt="An original block-built riverside world with a mountain cabin" width={1920} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="feature-image-shade absolute inset-0" />
                <div className="relative flex h-full min-h-[410px] flex-col justify-end p-7"><Package className="mb-4 h-6 w-6 text-primary" /><h3 className="text-2xl font-semibold">Bring the details with you.</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-hero-muted">Your behavior packs, resource packs, and screenshots are part of the story. Keep them alongside your world.</p><span className="mt-6 flex items-center gap-2 text-xs text-primary"><Check className="h-4 w-4" /> More than terrain. Everything that makes it yours.</span></div>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {features.filter(f=>f.title!=="Addons & resource packs").map((f,i)=><Reveal key={f.title} delay={(i%2)*90} className="feature-detail border-b border-border py-6 first:pt-0"><f.icon className="h-5 w-5 text-primary" /><h3 className="mt-4 text-sm font-semibold">{f.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.body}</p></Reveal>)}
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section id="screenshots" className="border-y border-border bg-surface-2 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5"><AppShowcase /></div>
        </section>

        {/* PRIVACY */}
        <section
          id="privacy"
          className="pixel-grid border-y border-border py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div>
              <Reveal>
                <SectionLabel>05 / Yours, by design</SectionLabel>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-3 text-3xl font-bold tracking-normal">
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
                <div className="mt-6 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4">
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
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <p className="text-sm font-semibold text-primary">{r.t}</p>
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
                <SectionLabel>06 / A person, not a studio</SectionLabel>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-normal">
                  Built by a player. For the world you’ve built.
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
                <p className="text-xs font-semibold uppercase text-primary">Built with</p>
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
              <SectionLabel>07 / An open conversation</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-normal">Talk directly to the developer.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Questions, bug reports, or feature requests — reach out directly.
              </p>
            </Reveal>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Telegram", detail: "@Mirmajid01", href: "https://t.me/Mirmajid01", icon: Send, external: true },
                { label: "WhatsApp", detail: "+91 78899 41591", href: "https://wa.me/917889941591", icon: MessageCircle, external: true },
                { label: "Email", detail: "WworldVault@gmail.com", href: "mailto:WworldVault@gmail.com", icon: Mail, external: false },
              ].map((contact, i) => (
                <Reveal key={contact.label} delay={i * 90}>
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="group flex h-full items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary"
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

        <section className="border-b border-border py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal><SectionLabel>The small print, made simple</SectionLabel><h2 className="mt-4 text-3xl font-semibold">Good questions.<br />Straight answers.</h2><p className="mt-4 text-sm text-muted-foreground">Anything else? <a href="#support" className="text-primary underline underline-offset-4">Ask the developer.</a></p></Reveal>
            <Reveal delay={100}><Accordion type="single" collapsible>
              {[
                {q:"Do I need a Google account?",a:"Not for local backups. You only need to sign in with Google if you choose to save backups to your own Google Drive."},
                {q:"Where do my cloud backups go?",a:"Into a WorldVault folder in your own Google Drive. You control that folder and can delete your files whenever you want. WorldVault stores backup metadata, not the contents of your worlds."},
                {q:"Can I move a world to a new phone?",a:"Yes. Export a local .mcworld file or use your saved Google Drive backup, then restore it on your new device."},
                {q:"Is there a subscription?",a:"No. WorldVault is free and has no ads. Cloud backups use your own Google Drive space, so the available storage depends on your Google account."},
              ].map((f,i)=><AccordionItem key={f.q} value={String(i)}><AccordionTrigger className="py-6 text-sm">{f.q}</AccordionTrigger><AccordionContent className="pr-8 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}
            </Accordion></Reveal>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section id="download" className="relative overflow-hidden py-28">
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <Reveal className="flex justify-center">
              <div className="flex items-end gap-6"><Creature variant="sprout" delay={0.2} /><img src="/worldvault-mark.png" alt="WorldVault app icon" width={72} height={72} className="h-18 w-18 rounded-lg" /><Creature variant="pebble" delay={0.6} /></div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl font-bold tracking-normal md:text-4xl">
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
              <Button asChild size="lg" className="press mt-8 h-12 px-7 font-semibold"><a href="/worldvault.apk" download="WorldVault.apk"><Download aria-hidden="true" />Download for Android<ArrowUpRight /></a></Button>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                Android 8.0 and newer · APK, ~30 MB · Free, no ads
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
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                   <a href="mailto:WworldVault@gmail.com" className="hover:text-foreground">
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
