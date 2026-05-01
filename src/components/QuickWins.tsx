import type { LucideIcon } from "lucide-react";
import { Trophy, Star, MessageSquareQuote, CalendarCheck } from "lucide-react";

export interface QuickWin {
  value: string;
  label: string;
  icon?: LucideIcon;
  /** Optional small qualifier shown after the number, e.g. "/ 5.0" or "in 40 days" */
  suffix?: string;
}

interface QuickWinsProps {
  clientName?: string;
  /** Eyebrow above the strip. Defaults to "Quick Wins". */
  eyebrow?: string;
  wins: QuickWin[];
}

const DEFAULT_ICONS: LucideIcon[] = [Trophy, Star, MessageSquareQuote, CalendarCheck];

export function QuickWins({ clientName, eyebrow, wins }: QuickWinsProps) {
  if (!wins.length) return null;

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

      {/* Tile row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
        {wins.slice(0, 4).map((w, i) => {
          const Icon = w.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
          return (
            <article
              key={i}
              className="solora-quickwin px-4 py-4 md:px-5 md:py-5 flex flex-col gap-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <Icon
                className="solora-quickwin__icon h-4 w-4"
                strokeWidth={1.75}
              />

              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl md:text-[1.75rem] font-light tracking-tight leading-none text-foreground">
                  {w.value}
                </span>
                {w.suffix && (
                  <span className="text-xs md:text-sm font-light text-foreground/55">
                    {w.suffix}
                  </span>
                )}
              </div>

              <p className="text-xs md:text-[0.8rem] leading-snug text-foreground/75 font-light">
                {w.label}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
