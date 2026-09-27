import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { LogoLockup } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — WorldVault" },
      { name: "description", content: "How WorldVault handles Minecraft world files, Google Drive access, account data, and backup metadata." },
      { property: "og:title", content: "Privacy Policy — WorldVault" },
      { property: "og:description", content: "How WorldVault handles world files, Google Drive access, and backup metadata." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://pixel-perfect-match-8315.lovable.app/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-match-8315.lovable.app/privacy" }],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    title: "Files on your device",
    body: "WorldVault requests access to the folders you choose so it can find, package, back up, and restore Minecraft Bedrock worlds, addons, resource packs, and screenshots. Local backups are created on your device and do not need to be uploaded.",
  },
  {
    title: "Google account and Drive",
    body: "If you choose cloud backup, WorldVault asks you to sign in with Google and uses the Google Drive API to create and manage backup files in a WorldVault folder in your own Drive. Your world files go to Google Drive, not to storage operated by WorldVault. You can disconnect access from your Google account settings.",
  },
  {
    title: "Backup metadata",
    body: "WorldVault may keep limited records needed to list and manage backup versions, such as a backup name, world identifier, timestamp, file size, and status. World contents are not stored in this metadata.",
  },
  {
    title: "Sharing and sale of data",
    body: "WorldVault does not sell personal information or world data. Information is shared only with services needed to provide features you choose, such as Google for Drive backups and Firebase for limited app records, or when legally required.",
  },
  {
    title: "Retention and deletion",
    body: "Local files remain until you remove them. Google Drive backups remain in your account until you delete them. You can request deletion of WorldVault-held metadata by contacting the developer; identity verification may be required to protect your account.",
  },
  {
    title: "Children and changes",
    body: "WorldVault is not intended to collect personal information from children. This policy may change as the app changes; material updates will be reflected here with a revised effective date.",
  },
];

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/90">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <Link to="/" aria-label="WorldVault home"><LogoLockup className="text-sm sm:text-base" /></Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="flex items-center gap-3 text-primary">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          <p className="font-display text-xs uppercase">Privacy policy</p>
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight">Your worlds stay yours.</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          This policy explains what WorldVault accesses when you back up Minecraft Bedrock data, where that data goes, and the choices you control.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">Effective September 27, 2026</p>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-3 py-7 md:grid-cols-[14rem_1fr] md:gap-10">
              <h2 className="text-base font-semibold">{section.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
        <section className="mt-10 border-l-2 border-primary bg-surface-2 p-6">
          <h2 className="text-base font-semibold">Privacy questions or deletion requests</h2>
          <a href="mailto:WorldVault@gmail.com" className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Mail className="h-4 w-4" aria-hidden="true" /> WorldVault@gmail.com
          </a>
        </section>
      </article>
    </main>
  );
}