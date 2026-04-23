import { Star, Quote } from "lucide-react";

export interface EditorialReview {
  author: string;
  rating: number;
  date?: string;
  text: string;
}

interface ReviewsEditorialProps {
  clientName: string;
  intro?: string;
  reviews: EditorialReview[];
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
        className={`h-3 w-3 ${
          i < Math.round(rating)
            ? "fill-[#FBBC05] text-[#FBBC05]"
            : "fill-foreground/10 text-foreground/20"
        }`}
      />
    ))}
  </div>
);

export function ReviewsEditorial({ clientName, intro, reviews }: ReviewsEditorialProps) {
  return (
    <section className="my-12">
      {/* Editorial heading */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px flex-1 bg-border/70" />
        <div className="flex items-center gap-2">
          <GoogleG className="h-3.5 w-3.5" />
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            What people are saying on Google
          </span>
        </div>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      <p className="text-center text-sm text-muted-foreground mb-8">
        {intro ?? <>Recent reviews left for <span className="text-foreground/80 font-medium">{clientName}</span></>}
      </p>

      {/* Stacked editorial quotes */}
      <div className="space-y-7">
        {reviews.map((r, i) => (
          <figure
            key={i}
            className="solora-review group relative pl-6 md:pl-8 py-2 -my-2 pr-4 rounded-r-md cursor-default"
          >
            {/* animated left rule */}
            <span
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-px bg-foreground/10"
            />
            <span
              aria-hidden
              className="solora-review__rule absolute left-0 top-0 w-px bg-gradient-to-b from-[var(--solora-cyan)] via-[var(--solora-violet)] to-[var(--solora-magenta)]"
            />
            {/* soft wash */}
            <span
              aria-hidden
              className="solora-review__wash pointer-events-none absolute inset-0 rounded-r-md opacity-0 transition-opacity duration-500"
            />
            <Quote
              className="solora-review__quote absolute -left-[9px] top-2 h-4 w-4 text-[var(--solora-violet)] bg-background transition-all duration-500 group-hover:text-[var(--solora-magenta)] group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
            <blockquote className="relative font-light italic text-foreground/85 text-base md:text-[1.05rem] leading-relaxed transition-colors duration-500 group-hover:text-foreground">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="relative mt-2.5 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/70 not-italic transition-colors duration-500 group-hover:text-foreground">
                — {r.author}
              </span>
              <span className="text-foreground/30">·</span>
              <Stars rating={r.rating} />
              {r.date && (
                <>
                  <span className="text-foreground/30">·</span>
                  <span>{r.date}</span>
                </>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
