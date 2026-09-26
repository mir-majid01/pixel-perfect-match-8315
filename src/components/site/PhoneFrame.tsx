import type { ReactNode } from "react";
import {
  Cloud,
  Check,
  Folder,
  HardDrive,
  Image as ImageIcon,
  Settings2,
  Shield,
  Boxes,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative w-[260px] shrink-0 rounded-[2rem] border border-border bg-surface-2 p-2 shadow-block",
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-background/80" />
      <div className="h-[520px] overflow-hidden rounded-[1.6rem] bg-background">
        <div className="flex items-center justify-between px-4 pb-1 pt-4 text-[10px] text-muted-foreground">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 82%
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function Bar({ w, dim = false }: { w: string; dim?: boolean }) {
  return (
    <span
      className={cn("block h-2 rounded-sm", dim ? "bg-border" : "bg-secondary")}
      style={{ width: w }}
    />
  );
}

function WorldRow({
  name,
  size,
  synced,
}: {
  name: string;
  size: string;
  synced?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
      <div className="grid h-9 w-9 place-items-center bg-secondary text-primary">
        <Boxes className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-foreground">{name}</p>
        <p className="text-[10px] text-muted-foreground">{size}</p>
      </div>
      {synced ? (
        <Check className="h-4 w-4 text-primary" aria-hidden="true" />
      ) : (
        <Cloud className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      )}
    </div>
  );
}

export function ScreenHome() {
  return (
    <div className="space-y-3 px-4 pt-2">
      <div>
        <p className="font-display text-sm">
          <span className="text-foreground">WORLD</span>
          <span className="text-primary">VAULT</span>
        </p>
        <p className="text-[10px] text-muted-foreground">6 worlds detected</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-lg font-semibold text-primary">14</p>
          <p className="text-[10px] text-muted-foreground">Backups</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-lg font-semibold text-foreground">2.4 GB</p>
          <p className="text-[10px] text-muted-foreground">Protected</p>
        </div>
      </div>
      <button className="w-full rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground">
        Back up all worlds
      </button>
      <div className="space-y-2">
        <WorldRow name="Survival Island" size="820 MB · 2h ago" synced />
        <WorldRow name="Redstone Lab" size="310 MB · yesterday" synced />
        <WorldRow name="Creative Sandbox" size="1.2 GB · not backed up" />
      </div>
    </div>
  );
}

export function ScreenWorld() {
  return (
    <div className="space-y-3 px-4 pt-2">
      <p className="text-xs text-muted-foreground">World detail</p>
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-sm font-semibold">Survival Island</p>
        <p className="text-[10px] text-muted-foreground">
          Last played 2h ago · 820 MB · Bedrock 1.21
        </p>
      </div>
      {[
        { icon: HardDrive, t: "Local export", s: ".mcworld · device storage" },
        { icon: Cloud, t: "Cloud backup", s: "Your Google Drive" },
        { icon: Folder, t: "Addons & packs", s: "3 behavior, 2 resource" },
        { icon: ImageIcon, t: "Screenshots", s: "48 images grouped" },
      ].map(({ icon: Icon, t, s }) => (
        <div
          key={t}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
        >
          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-xs">{t}</p>
            <p className="text-[10px] text-muted-foreground">{s}</p>
          </div>
          <span className="h-4 w-7 rounded-full bg-primary/30 p-0.5">
            <span className="block h-3 w-3 translate-x-3 rounded-full bg-primary" />
          </span>
        </div>
      ))}
    </div>
  );
}

export function ScreenProgress() {
  return (
    <div className="space-y-4 px-4 pt-6">
      <p className="text-xs text-muted-foreground">Backing up</p>
      <p className="text-sm font-semibold">Redstone Lab → Google Drive</p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <span
          data-motion="progress"
          className="block h-full rounded-full bg-primary"
          style={{ animation: "wv-progress 3.5s ease-in-out infinite alternate" }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>184 MB / 310 MB</span>
        <span>6.4 MB/s · 19s left</span>
      </div>
      <div className="space-y-2 pt-2">
        {["Scanning world files", "Compressing region data", "Uploading chunks"].map(
          (s, i) => (
            <div
              key={s}
              className="flex items-center gap-2 rounded-lg border border-border bg-card p-2.5"
            >
              {i < 2 ? (
                <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              ) : (
                <span className="h-3.5 w-3.5 animate-pulse rounded-full bg-primary/50" />
              )}
              <span className="text-[11px]">{s}</span>
            </div>
          ),
        )}
      </div>
      <div className="space-y-1.5 pt-2">
        <Bar w="70%" />
        <Bar w="45%" dim />
      </div>
    </div>
  );
}

export function ScreenSettings() {
  return (
    <div className="space-y-3 px-4 pt-2">
      <p className="text-xs text-muted-foreground">Settings</p>
      {[
        { icon: Settings2, t: "Auto backup", s: "Daily at 02:00" },
        { icon: Cloud, t: "Drive account", s: "you@gmail.com" },
        { icon: Shield, t: "Storage limit", s: "Keep last 5 versions" },
        { icon: HardDrive, t: "Local folder", s: "Downloads/WorldVault" },
      ].map(({ icon: Icon, t, s }) => (
        <div
          key={t}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
        >
          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-xs">{t}</p>
            <p className="text-[10px] text-muted-foreground">{s}</p>
          </div>
        </div>
      ))}
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-[11px] text-foreground">Per-world schedule</p>
        <div className="mt-2 space-y-1.5">
          <Bar w="80%" />
          <Bar w="55%" dim />
          <Bar w="65%" dim />
        </div>
      </div>
    </div>
  );
}
