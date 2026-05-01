import type { LucideIcon } from "lucide-react";
import { Trophy, Star, MessageSquareQuote, CalendarCheck, ArrowUpRight } from "lucide-react";
import type { QuickWin } from "./QuickWins";

interface QuickWinsBentoProps {
  clientName?: string;
  eyebrow?: string;
  wins: QuickWin[];
}

const DEFAULT_ICONS: LucideIcon[] = [Trophy, Star, MessageSquareQuote, CalendarCheck];

export function QuickWinsBento({ clientName, eyebrow, wins }: QuickWinsBentoProps) {
  if (!wins.length) return null;

  // Bento span pattern across 6 cols: 4-2 / 2-4
  const spans = [
    "md:col-span-4",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-4",
  ];

  return (
    <section className="my-8 md:my-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground font-medium">
          {eyebrow ?? "Quick Wins"}
          {clientName && (
            <span className="text-foreground/50"> · {clientName}</span>
          )}
        </span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 md:gap-3">
        {wins.slice(0, 4).map((w, i) => {
          const Icon = w.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
          return (
            <article
              key={i}
              className={`solora-bento group ${spans[i] ?? "md:col-span-3"} relative overflow-hidden rounded-xl px-5 py-5 md:px-6 md:py-6 flex flex-col justify-between min-h-[140px] md:min-h-[160px]`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* animated gradient ring */}
              <span className="solora-bento__ring" aria-hidden />
              {/* inner surface */}
              <span className="solora-bento__surface" aria-hidden />
              {/* corner glow */}
              <span className="solora-bento__glow" aria-hidden />

              {/* Top: icon + arrow */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="solora-bento__icon flex items-center justify-center h-9 w-9 rounded-lg">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  className="solora-bento__arrow h-4 w-4 text-foreground/30"
                  strokeWidth={1.75}
                />
              </div>

              {/* Bottom: stat + label */}
              <div className="relative z-10 mt-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="solora-bento__num text-3xl md:text-4xl font-light tracking-tight leading-none text-foreground">
                    {w.value}
                  </span>
                  {w.suffix && (
                    <span className="text-xs md:text-sm font-light text-foreground/55">
                      {w.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs md:text-[0.82rem] leading-snug text-foreground/70 font-light">
                  {w.label}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
