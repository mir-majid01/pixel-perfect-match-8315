import { useEffect, useState } from "react";

/**
 * Ambient hero backdrop: celestial arc (sun/moon), drifting blocky clouds,
 * jagged pixel mountain silhouettes. Purely decorative.
 */

function Cloud({
  top,
  scale,
  duration,
  delay,
  opacity,
}: {
  top: string;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
}) {
  return (
    <div
      data-motion="drift"
      className="absolute left-0"
      style={{
        top,
        opacity,
        transform: `scale(${scale})`,
        animation: `wv-drift ${duration}s linear ${delay}s infinite`,
      }}
      aria-hidden="true"
    >
      <div className="flex items-end">
        <div className="h-4 w-10 bg-foreground/70" />
        <div className="-ml-4 h-7 w-16 bg-foreground/70" />
        <div className="-ml-3 h-5 w-12 bg-foreground/70" />
      </div>
      <div className="ml-6 h-4 w-20 bg-foreground/70" />
    </div>
  );
}

export function HeroBackdrop({ offset = 0 }: { offset?: number }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);

  const p = reduced ? 0 : offset;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* sky wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,var(--sky-day)_0%,transparent_55%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_80%_10%,var(--sky-night)_0%,transparent_60%)] opacity-60" />

      {/* celestial arc: sun and moon on a slow rotating axis */}
      <div
        className="absolute left-1/2 top-[58%] h-[130vw] w-[130vw] -translate-x-1/2 -translate-y-1/2 md:h-[90vw] md:w-[90vw]"
        style={{ transform: `translate(-50%, calc(-50% + ${p * 0.15}px))` }}
      >
        <div
          data-motion="celestial"
          className="h-full w-full"
          style={{ animation: "wv-celestial 240s linear infinite" }}
        >
          <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 bg-primary/80 shadow-glow" />
          <div className="absolute bottom-0 left-1/2 h-10 w-10 -translate-x-1/2 bg-foreground/70" />
        </div>
      </div>

      {/* clouds */}
      <div
        className="absolute inset-x-0 top-0 h-2/3 text-foreground"
        style={{ transform: `translateY(${p * 0.08}px)` }}
      >
        <Cloud top="12%" scale={1.1} duration={110} delay={0} opacity={0.1} />
        <Cloud top="26%" scale={0.8} duration={160} delay={-40} opacity={0.07} />
        <Cloud top="42%" scale={1.4} duration={200} delay={-90} opacity={0.05} />
      </div>

      {/* far mountains */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full"
        style={{ transform: `translateY(${p * 0.06}px)` }}
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        height="220"
      >
        <path
          d="M0 220V150h40v-20h40v-25h40v-20h40v-15h40v20h40v25h40v-35h40v-25h40v30h40v25h40v-15h40v25h40v-35h40v20h40v30h40v-20h40v25h40v20h40v-25h40v30h40v25h40v20H0Z"
          fill="oklch(0.225 0.014 158)"
          opacity="0.85"
        />
      </svg>
      {/* near mountains */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full"
        style={{ transform: `translateY(${p * 0.02}px)` }}
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        height="160"
      >
        <path
          d="M0 160V110h50v-25h50v-20h50v25h50v-35h50v20h50v30h50v-20h50v-30h50v35h50v20h50v-25h50v30h50v-15h50v25h50v-35h50v30h50v25h50v20H0Z"
          fill="oklch(0.192 0.014 158)"
        />
        <path
          d="M0 160V125h1200v35H0Z"
          fill="oklch(0.152 0.014 158)"
          opacity="0.9"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,var(--background))]" />
    </div>
  );
}
