import type { LucideIcon } from "lucide-react";
import { Trophy, Star, MessageSquareQuote, CalendarCheck } from "lucide-react";

export interface QuickWin {
  value: string;
  label: string;
  icon?: LucideIcon;
  /** Optional small qualifier shown after the number, e.g. "/ 5.0" or "days" */
  suffix?: string;
}

interface QuickWinsProps {
  clientName?: string;
  /** Eyebrow above the heading. Defaults to "Case Study · Quick Wins". */
  eyebrow?: string;
  /** First win is rendered as the hero tile. Pass 4 wins for the intended layout. */
  wins: QuickWin[];
}

/** Default icon set if the consumer doesn't pass one — picks based on position. */
const DEFAULT_ICONS: LucideIcon[] = [Trophy, Star, MessageSquareQuote, CalendarCheck];

export function QuickWins({ clientName, eyebrow, wins }: QuickWinsProps) {
  if (!wins.length) return null;
  const [hero, ...rest] = wins;
  const HeroIcon = hero.icon ?? DEFAULT_ICONS[0];

  return (
    <section className="my-10 md:my-14">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-border/70" />
        <span className="whitespace-nowrap text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow ?? "Case Study · Quick Wins"}
          {clientName && <span className="text-foreground/60"> · {clientName}</span>}
        </span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      {/* Asymmetric grid: hero left (spans 2 rows on md), three stacked on right */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
        {/* Hero tile */}
        <div className="md:col-span-3 md:row-span-2">
          <WinTile win={hero} Icon={HeroIcon} hero />
        </div>

        {/* Smaller tiles */}
        {rest.slice(0, 3).map((w, i) => {
          const Icon = w.icon ?? DEFAULT_ICONS[(i + 1) % DEFAULT_ICONS.length];
          return (
            <div key={i} className="md:col-span-2">
              <WinTile win={w} Icon={Icon} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WinTile({
  win,
  Icon,
  hero = false,
}: {
  win: QuickWin;
  Icon: LucideIcon;
  hero?: boolean;
}) {
  return (
    <article
      className={`solora-callout h-full flex flex-col justify-between ${
        hero ? "px-6 py-7 md:px-9 md:py-10" : "px-5 py-5 md:px-7 md:py-6"
      }`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Top row: icon */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <span
          className={`flex items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/70 ${
            hero ? "h-10 w-10 md:h-12 md:w-12" : "h-8 w-8 md:h-9 md:w-9"
          }`}
          style={{
            filter:
              "drop-shadow(0 0 12px color-mix(in oklch, var(--solora-violet) 35%, transparent))",
          }}
        >
          <Icon
            className={hero ? "h-5 w-5 md:h-6 md:w-6" : "h-4 w-4 md:h-[18px] md:w-[18px]"}
            strokeWidth={1.75}
            style={{ color: "var(--solora-violet)" }}
          />
        </span>
        <span className="text-[0.55rem] md:text-[0.62rem] uppercase tracking-[0.25em] font-medium text-foreground/45">
          Win
        </span>
      </div>

      {/* Big number */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`solora-quickwin-number font-light tracking-tight leading-none ${
              hero
                ? "text-5xl md:text-7xl"
                : "text-3xl md:text-4xl"
            }`}
          >
            {win.value}
          </span>
          {win.suffix && (
            <span
              className={`font-light text-foreground/55 ${
                hero ? "text-lg md:text-2xl" : "text-sm md:text-base"
              }`}
            >
              {win.suffix}
            </span>
          )}
        </div>
        <p
          className={`mt-2 md:mt-3 font-light leading-snug text-foreground/75 ${
            hero ? "text-base md:text-lg max-w-[28ch]" : "text-xs md:text-sm"
          }`}
        >
          {win.label}
        </p>
      </div>
    </article>
  );
}
