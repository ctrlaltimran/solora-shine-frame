import { Star } from "lucide-react";

export interface CardReview {
  author: string;
  rating: number;
  date?: string;
  text: string;
}

interface ReviewsCardsProps {
  clientName: string;
  intro?: string;
  reviews: CardReview[];
}

const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33 30 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6-6C34.6 5.5 29.6 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5c11.4 0 20.5-8.2 20.5-20.5 0-1.4-.1-2.7-.4-4z" />
    <path fill="#34A853" d="M6.3 14.1l6.6 4.8C14.7 15.2 19 12 24 12c3 0 5.7 1.1 7.8 2.9l6-6C34.6 5.5 29.6 3.5 24 3.5 16.1 3.5 9.3 8 6.3 14.1z" />
    <path fill="#FBBC05" d="M24 44.5c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 35.3 27 36 24 36c-6 0-10.7-3-12.7-7.5l-6.5 5C7.7 39.9 15.2 44.5 24 44.5z" />
    <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.6 1.7-1.7 3.2-3.1 4.5l6.6 5.4C42.9 35 44.5 30 44.5 24c0-1.4-.1-2.7-.4-4z" />
  </svg>
);

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i < Math.round(rating)
            ? "fill-[#FBBC05] text-[#FBBC05]"
            : "fill-foreground/10 text-foreground/20"
        }`}
      />
    ))}
  </div>
);

// Deterministic pastel from initials
const AVATAR_HUES = [220, 280, 330, 200, 260, 300, 180, 340];
function avatarStyle(name: string): React.CSSProperties {
  const seed = name.charCodeAt(0) + (name.charCodeAt(1) || 0);
  const hue = AVATAR_HUES[seed % AVATAR_HUES.length];
  return {
    background: `linear-gradient(135deg, oklch(0.92 0.06 ${hue}), oklch(0.85 0.09 ${
      (hue + 40) % 360
    }))`,
    color: `oklch(0.35 0.1 ${hue})`,
  };
}
function initials(name: string) {
  return name.replace(/\./g, "").trim().split(/\s+/).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

export function ReviewsCards({ clientName, intro, reviews }: ReviewsCardsProps) {
  const avg =
    reviews.reduce((s, r) => s + r.rating, 0) / Math.max(reviews.length, 1);

  return (
    <section className="my-12">
      {/* Header bar with Google + summary */}
      <div className="solora-reviewcards__header flex items-center justify-between gap-4 mb-6 px-4 py-3 rounded-lg border border-border/70 bg-card/50">
        <div className="flex items-center gap-3 min-w-0">
          <GoogleG className="h-5 w-5 shrink-0" />
          <div className="min-w-0">
            <p className="text-[0.62rem] uppercase tracking-[0.25em] text-muted-foreground">
              Google Reviews
            </p>
            <p className="text-sm font-medium text-foreground/85 truncate">
              {intro ?? clientName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-base md:text-lg font-light tabular-nums text-foreground">
            {avg.toFixed(1)}
          </span>
          <Stars rating={avg} />
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="solora-reviewcard group relative rounded-xl border border-border/70 bg-card/60 px-5 py-5 flex flex-col gap-3"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {/* Top row: avatar, name, google */}
            <header className="flex items-center gap-3">
              <span
                className="solora-reviewcard__avatar flex items-center justify-center h-9 w-9 rounded-full text-xs font-medium shrink-0"
                style={avatarStyle(r.author)}
              >
                {initials(r.author)}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground/85 leading-tight truncate">
                  {r.author}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Stars rating={r.rating} />
                  {r.date && (
                    <>
                      <span className="text-foreground/30 text-xs">·</span>
                      <span className="text-[0.7rem] text-muted-foreground">{r.date}</span>
                    </>
                  )}
                </div>
              </div>
              <GoogleG className="h-4 w-4 opacity-60 shrink-0" />
            </header>

            {/* Quote text */}
            <p className="text-sm leading-relaxed text-foreground/75 font-light">
              {r.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
