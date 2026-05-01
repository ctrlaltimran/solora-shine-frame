import type { LucideIcon } from "lucide-react";
import { Trophy, Star, MessageSquareQuote, CalendarCheck } from "lucide-react";
import type { QuickWin } from "./QuickWins";

interface QuickWinsTrackProps {
  clientName?: string;
  eyebrow?: string;
  wins: QuickWin[];
}

const DEFAULT_ICONS: LucideIcon[] = [Trophy, Star, MessageSquareQuote, CalendarCheck];

export function QuickWinsTrack({ clientName, eyebrow, wins }: QuickWinsTrackProps) {
  if (!wins.length) return null;

  return (
    <section className="my-8 md:my-12">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground font-medium">
          {eyebrow ?? "Quick Wins"}
          {clientName && (
            <span className="text-foreground/50"> · {clientName}</span>
          )}
        </span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      {/* Track */}
      <div className="solora-track relative px-1 md:px-4 py-6 md:py-8">
        {/* Horizontal rail at all breakpoints */}
        <span className="solora-track__rail" aria-hidden />

        <ol className="relative grid grid-cols-4 gap-2 md:gap-4">
          {wins.slice(0, 4).map((w, i) => {
            const Icon = w.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
            return (
              <li
                key={i}
                className="solora-track__node group relative flex flex-col items-center gap-2 md:gap-3 text-center"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {/* Node marker */}
                <span className="solora-track__marker relative z-10 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full shrink-0">
                  <Icon className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]" strokeWidth={1.75} />
                  <span className="solora-track__pulse" aria-hidden />
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center min-w-0">
                  <div className="flex items-baseline gap-1 md:gap-1.5 justify-center">
                    <span className="solora-track__num text-lg md:text-[1.7rem] font-light tracking-tight leading-none text-foreground">
                      {w.value}
                    </span>
                    {w.suffix && (
                      <span className="text-[0.65rem] md:text-sm font-light text-foreground/55">
                        {w.suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 md:mt-2 text-[0.65rem] md:text-[0.78rem] leading-snug text-foreground/70 font-light max-w-[14ch] md:max-w-[22ch]">
                    {w.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
