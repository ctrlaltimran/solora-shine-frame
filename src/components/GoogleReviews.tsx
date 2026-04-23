import { Star } from "lucide-react";

export interface GoogleReview {
  author: string;
  rating: number; // 1-5
  date?: string;
  text: string;
  avatarUrl?: string;
}

interface GoogleReviewsProps {
  clientName: string;
  overallRating?: number;
  totalReviews?: number;
  reviews: GoogleReview[];
}

const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path
      fill="#4285F4"
      d="M44.5 20H24v8.5h11.7C34.7 33 30 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6-6C34.6 5.5 29.6 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5c11.4 0 20.5-8.2 20.5-20.5 0-1.4-.1-2.7-.4-4z"
    />
    <path
      fill="#34A853"
      d="M6.3 14.1l6.6 4.8C14.7 15.2 19 12 24 12c3 0 5.7 1.1 7.8 2.9l6-6C34.6 5.5 29.6 3.5 24 3.5 16.1 3.5 9.3 8 6.3 14.1z"
    />
    <path
      fill="#FBBC05"
      d="M24 44.5c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 35.3 27 36 24 36c-6 0-10.7-3-12.7-7.5l-6.5 5C7.7 39.9 15.2 44.5 24 44.5z"
    />
    <path
      fill="#EA4335"
      d="M44.5 20H24v8.5h11.7c-.6 1.7-1.7 3.2-3.1 4.5l6.6 5.4C42.9 35 44.5 30 44.5 24c0-1.4-.1-2.7-.4-4z"
    />
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

export function GoogleReviews({
  clientName,
  overallRating,
  totalReviews,
  reviews,
}: GoogleReviewsProps) {
  return (
    <section className="my-10 rounded-2xl border border-border/70 bg-card/60 p-5 md:p-6 backdrop-blur-sm">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-border/60">
        <div className="flex items-center gap-3 min-w-0">
          <GoogleG className="h-6 w-6 shrink-0" />
          <div className="min-w-0">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              Google Reviews
            </p>
            <h3 className="text-base md:text-lg font-medium text-foreground truncate">
              {clientName}
            </h3>
          </div>
        </div>
        {overallRating !== undefined && (
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-medium text-foreground tabular-nums">
              {overallRating.toFixed(1)}
            </span>
            <Stars rating={overallRating} />
            {totalReviews !== undefined && (
              <span className="text-xs text-muted-foreground hidden sm:inline">
                ({totalReviews})
              </span>
            )}
          </div>
        )}
      </header>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="rounded-xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-border"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground/70 overflow-hidden">
                {r.avatarUrl ? (
                  <img src={r.avatarUrl} alt={r.author} className="h-full w-full object-cover" />
                ) : (
                  r.author.charAt(0).toUpperCase()
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground truncate leading-tight">
                  {r.author}
                </p>
                <div className="flex items-center gap-1.5">
                  <Stars rating={r.rating} />
                  {r.date && (
                    <span className="text-[0.7rem] text-muted-foreground">· {r.date}</span>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80 line-clamp-5">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
