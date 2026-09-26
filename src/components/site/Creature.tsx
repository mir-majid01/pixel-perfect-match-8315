import { cn } from "@/lib/utils";

type Variant = "sprout" | "pebble" | "glow";

const palette: Record<Variant, { body: string; eye: string; trim: string }> = {
  sprout: {
    body: "bg-primary/85",
    eye: "bg-background",
    trim: "bg-primary/40",
  },
  pebble: {
    body: "bg-secondary",
    eye: "bg-primary",
    trim: "bg-border",
  },
  glow: {
    body: "bg-card",
    eye: "bg-primary",
    trim: "bg-primary/30",
  },
};

/**
 * Original blocky creature accents. Decorative only — never a product claim.
 */
export function Creature({
  variant = "sprout",
  className,
  delay = 0,
}: {
  variant?: Variant;
  className?: string;
  delay?: number;
}) {
  const c = palette[variant];
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <div
        data-motion="bob"
        className="relative"
        style={{ animation: `wv-bob ${3.4 + delay * 0.4}s ease-in-out ${delay}s infinite` }}
      >
        {/* head */}
        <div className={cn("relative h-10 w-10", c.body)}>
          <span className={cn("absolute left-1.5 top-3 h-2 w-2", c.eye)} />
          <span className={cn("absolute right-1.5 top-3 h-2 w-2", c.eye)} />
          <span className={cn("absolute inset-x-2 bottom-1 h-1", c.trim)} />
        </div>
        {/* body */}
        <div className={cn("mx-1 h-6 w-8", c.trim)} />
        {/* feet */}
        <div className="mx-1 flex gap-2">
          <span className={cn("h-2 w-3", c.body)} />
          <span className={cn("h-2 w-3", c.body)} />
        </div>
        {/* block-break particles */}
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            data-motion="burst"
            className="absolute -right-1 top-2 h-1.5 w-1.5 bg-primary"
            style={{
              ["--bx" as string]: `${8 + i * 7}px`,
              ["--by" as string]: `${-10 - i * 6}px`,
              animation: `wv-burst 4.5s ease-out ${delay + i * 0.35}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
