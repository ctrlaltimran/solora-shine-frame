import { createFileRoute } from "@tanstack/react-router";
import { Callout } from "@/components/Callout";
import { GoogleReviews } from "@/components/GoogleReviews";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Solora Blog — Callout Demo" },
      {
        name: "description",
        content: "A minimal, reusable Solora callout with a hover gloss sweep.",
      },
    ],
  }),
});

function Index() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
        Solora · Journal
      </p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
        Designing for daylight
      </h1>
      <p className="text-base leading-relaxed text-muted-foreground mb-6">
        At Solora, we believe interfaces should feel as effortless as morning light spilling
        across a quiet room. Every component we ship is shaped around restraint — fewer
        edges, softer transitions, and a little warmth where it counts.
      </p>
      <p className="text-base leading-relaxed text-muted-foreground mb-6">
        We spend a lot of time in the in-between moments: the way a button settles after a
        click, the breath before a modal appears. These are the details that turn a product
        from functional into felt.
      </p>

      <Callout label="Solora Insight">
        Good design doesn't shout. It glows quietly, and lets the work speak for itself.
      </Callout>

      <Callout variant="light" label="Solora Insight">
        The same idea, lifted into daylight — softer surface, same shimmer when you pass over it.
      </Callout>

      <Callout variant="outline" label="Solora Insight">
        Just a gradient rim around quiet space. The frame carries the brand; the message stays the focus.
      </Callout>

      <GoogleReviews
        clientName="Northwind Dental Studio"
        overallRating={4.9}
        totalReviews={184}
        reviews={[
          {
            author: "Sarah M.",
            rating: 5,
            date: "2 weeks ago",
            text: "Absolutely the best dental experience I've ever had. The team is warm, professional, and the office feels more like a spa than a clinic.",
          },
          {
            author: "James T.",
            rating: 5,
            date: "1 month ago",
            text: "Dr. Patel walked me through every step of my treatment. No pressure, just honest advice. Highly recommend to anyone nervous about the dentist.",
          },
          {
            author: "Priya R.",
            rating: 5,
            date: "1 month ago",
            text: "Booked a last-minute cleaning and they fit me in the same day. Front desk was lovely and the hygienist did a phenomenal job.",
          },
          {
            author: "Daniel K.",
            rating: 4,
            date: "2 months ago",
            text: "Great care and modern equipment. Only wish parking was a little easier, but the experience inside more than makes up for it.",
          },
        ]}
      />

      <p className="text-base leading-relaxed text-muted-foreground mb-6">
        That principle shows up in our type stack, our spacing rhythm, and especially in
        how we treat color — never decorative for its own sake, always doing a small but
        deliberate job. Hover over the panel above to see what we mean.
      </p>
      <p className="text-base leading-relaxed text-muted-foreground">
        Drop the <code className="text-foreground">&lt;Callout&gt;</code> component anywhere
        in a post to break up dense passages with a single, considered idea.
      </p>
    </article>
  );
}
