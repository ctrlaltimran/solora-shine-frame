import type { LucideIcon } from "lucide-react";
import { Trophy, Star, MessageSquareQuote, CalendarCheck } from "lucide-react";
import type { QuickWin } from "./QuickWins";

interface QuickWinsListProps {
  clientName?: string;
  eyebrow?: string;
  wins: QuickWin[];
}

const DEFAULT_ICONS: LucideIcon[] = [Trophy, Star, MessageSquareQuote, CalendarCheck];

export function QuickWinsList({ clientName, eyebrow, wins }: QuickWinsListProps) {
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

      <ol className="solora-winlist border-y border-border/70">
        {wins.map((w, i) => {
          const Icon = w.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
          return (
            <li
              key={i}
              className="solora-winlist__row group relative flex items-center gap-4 md:gap-6 py-4 md:py-5"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* hover wash */}
              <span className="solora-winlist__wash" aria-hidden />

              {/* index */}
              <span className="relative z-10 w-6 text-[0.65rem] uppercase tracking-[0.22em] text-foreground/35 font-medium tabular-nums">
                0{i + 1}
              </span>

              {/* big number */}
              <div className="relative z-10 flex items-baseline gap-1.5 min-w-[5.5rem] md:min-w-[7rem]">
                <span className="solora-winlist__num text-3xl md:text-4xl font-light tracking-tight leading-none text-foreground">
                  {w.value}
                </span>
                {w.suffix && (
                  <span className="text-xs md:text-sm font-light text-foreground/50">
                    {w.suffix}
                  </span>
                )}
              </div>

              {/* label */}
              <p className="relative z-10 flex-1 text-sm md:text-[0.95rem] leading-snug text-foreground/80 font-light">
                {w.label}
              </p>

              {/* icon (right aligned, subtle) */}
              <span className="solora-winlist__icon relative z-10 hidden sm:flex items-center justify-center h-8 w-8 rounded-full border border-border/70">
                <Icon
                  className="h-3.5 w-3.5"
                  strokeWidth={1.75}
                />
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
