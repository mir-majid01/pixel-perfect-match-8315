import { ArrowRight, Check, Cloud, HardDrive, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneFrame, ScreenHome, ScreenWorld, ScreenProgress, ScreenSettings } from "@/components/site/PhoneFrame";
import { Reveal } from "@/components/site/Reveal";

const views = [
  { id: "worlds", tab: "Your worlds", title: "A home for every world.", text: "See what’s on your device, what’s already backed up, and what still needs a safe copy. All in one place.", points: ["World names and real file sizes", "Local and cloud backup status", "Back up individual worlds or all at once"], screen: <ScreenHome /> },
  { id: "details", tab: "The details", title: "Your backup. Your choices.", text: "Choose where each world goes and what comes with it. Local exports and Google Drive are options, not obligations.", points: ["Standard .mcworld exports", "Optional Google Drive backups", "Packs and screenshots alongside your world"], screen: <ScreenWorld /> },
  { id: "progress", tab: "Live progress", title: "No wondering if it’s working.", text: "Follow your backup from scanning to upload. See how much is done, how fast it’s moving, and what’s happening next.", points: ["Live transfer speed", "Bytes backed up and time remaining", "Clear scanning, compression, and upload stages"], screen: <ScreenProgress /> },
  { id: "settings", tab: "Your routine", title: "Set a rhythm. Get back to playing.", text: "Choose a schedule that fits your play sessions. Keep your storage and saved versions under your control.", points: ["Per-world backup schedules", "Your choice of local folder", "Control how many versions you keep"], screen: <ScreenSettings /> },
];

export function AppShowcase() {
  return <Reveal>
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div><p className="section-label text-xs font-semibold uppercase text-primary">04 / Inside WorldVault</p><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Thoughtful where it counts.</h2></div>
      <span className="text-xs text-muted-foreground">App screen previews</span>
    </div>
    <Tabs defaultValue="worlds">
      <TabsList aria-label="App screen previews" className="showcase-tabs mb-0 flex h-auto w-full justify-start overflow-x-auto rounded-none border-b border-border bg-transparent p-0">
        {views.map(v => <TabsTrigger key={v.id} value={v.id} className="showcase-tab shrink-0 rounded-none border-b-2 border-transparent bg-transparent px-4 py-4 text-xs data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-6 sm:text-sm">{v.tab}</TabsTrigger>)}
      </TabsList>
      {views.map(v => <TabsContent key={v.id} value={v.id} className="mt-0">
        <div className="grid items-center gap-10 pt-12 md:grid-cols-2 md:gap-20">
          <div className="md:py-12"><span className="inline-flex items-center gap-2 text-xs text-primary"><ShieldCheck className="h-4 w-4" /> Made for Minecraft Bedrock</span><h3 className="mt-6 max-w-md text-3xl font-semibold leading-tight md:text-4xl">{v.title}</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{v.text}</p><ul className="mt-8 space-y-4">{v.points.map(p=><li key={p} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{p}</li>)}</ul><a href="#download" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">Get WorldVault <ArrowRight className="h-4 w-4" /></a></div>
          <div className="phone-stage relative flex min-h-[570px] items-center justify-center overflow-hidden">
            <div className="stage-grid absolute inset-0" aria-hidden="true" />
            <PhoneFrame label={`${v.tab} — illustrative WorldVault app screen`} className="showcase-phone relative z-10">{v.screen}</PhoneFrame>
            <div className="showcase-note absolute bottom-14 left-0 z-20 flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-3 shadow-block sm:left-2"><span className="grid h-7 w-7 place-items-center bg-primary/10 text-primary"><HardDrive className="h-4 w-4" /></span><div><p className="text-xs font-medium">Local first.</p><p className="mt-0.5 text-[10px] text-muted-foreground">Always your choice.</p></div></div>
            <div className="showcase-note absolute right-0 top-14 z-20 flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 shadow-block sm:right-2"><Cloud className="h-4 w-4 text-primary" /><p className="text-xs">Your own Google Drive</p></div>
          </div>
        </div>
      </TabsContent>)}
    </Tabs>
  </Reveal>;
}