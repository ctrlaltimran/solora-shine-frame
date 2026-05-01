import { createFileRoute } from "@tanstack/react-router";
import { Callout } from "@/components/Callout";
import { QuickWins } from "@/components/QuickWins";
import { QuickWinsList } from "@/components/QuickWinsList";
import { QuickWinsBento } from "@/components/QuickWinsBento";
import { Trophy, Star, MessageSquareQuote, CalendarCheck } from "lucide-react";

import { ReviewsEditorial } from "@/components/ReviewsEditorial";

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

      <QuickWins
        clientName="Glow That Face Up"
        wins={[
          { value: "#1", label: 'Ranked #1 on Google for "Facial Dearborn"', icon: Trophy },
          { value: "5.0", suffix: "/ 5.0", label: "Perfect Google star rating", icon: Star },
          { value: "100+", label: "New Google reviews in 40 days", icon: MessageSquareQuote },
          { value: "13", label: "Past patients rebooked", icon: CalendarCheck },
        ]}
      />

      <QuickWinsList
        clientName="Glow That Face Up"
        wins={[
          { value: "#1", label: 'Ranked #1 on Google for "Facial Dearborn"', icon: Trophy },
          { value: "5.0", suffix: "/ 5.0", label: "Perfect Google star rating", icon: Star },
          { value: "100+", label: "New Google reviews in 40 days", icon: MessageSquareQuote },
          { value: "13", label: "Past patients rebooked", icon: CalendarCheck },
        ]}
      />

      <QuickWinsBento
        clientName="Glow That Face Up"
        wins={[
          { value: "#1", label: 'Ranked #1 on Google for "Facial Dearborn"', icon: Trophy },
          { value: "5.0", suffix: "/ 5.0", label: "Perfect Google star rating", icon: Star },
          { value: "100+", label: "New Google reviews in 40 days", icon: MessageSquareQuote },
          { value: "13", label: "Past patients rebooked", icon: CalendarCheck },
        ]}
      />
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
        Just a gradient rim around quiet space — the frame carries the brand.
      </Callout>


      <ReviewsEditorial
        clientName="Glow That Face Up"
        reviews={[
          {
            author: "M.R.",
            rating: 5,
            date: "2 weeks ago",
            text: "My skin is glowing! First-time facial ever and I am hooked. Vivian is an absolute pro.",
          },
          {
            author: "S.K.",
            rating: 5,
            date: "1 month ago",
            text: "Hawraa is the first person I ever trust with my face. She helped transform my face. The absolute best person to go for a facial.",
          },
          {
            author: "J.L.",
            rating: 5,
            date: "1 month ago",
            text: "Honestly the BEST facial experience I've ever had. From the moment I walked into Glow That Face Up, everything felt clean, calm, and super welcoming. Aaliyah was incredibly sweet and professional.",
          },
          {
            author: "A.T.",
            rating: 5,
            date: "2 months ago",
            text: "I absolutely love coming here. Dalia is extremely knowledgeable and truly takes the time to understand your skin before doing anything.",
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
