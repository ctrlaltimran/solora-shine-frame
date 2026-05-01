import { createFileRoute } from "@tanstack/react-router";
import { Callout } from "@/components/Callout";
import { QuickWins } from "@/components/QuickWins";
import { QuickWinsList } from "@/components/QuickWinsList";
import { QuickWinsBento } from "@/components/QuickWinsBento";
import { QuickWinsTrack } from "@/components/QuickWinsTrack";
import { Trophy, Star, MessageSquareQuote, CalendarCheck } from "lucide-react";

import { ReviewsEditorial } from "@/components/ReviewsEditorial";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Solora — Component Options" },
      {
        name: "description",
        content: "Design options for Quick Wins, Callouts, and Google Reviews.",
      },
    ],
  }),
});

const winsData = [
  { value: "#1", label: 'Ranked #1 on Google for "Facial Dearborn"', icon: Trophy },
  { value: "5.0", suffix: "/ 5.0", label: "Perfect Google star rating", icon: Star },
  { value: "100+", label: "New Google reviews in 40 days", icon: MessageSquareQuote },
  { value: "13", label: "Past patients rebooked", icon: CalendarCheck },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <header className="mt-20 mb-8 first:mt-0">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mb-2">
        Section
      </p>
      <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 h-px w-full bg-border" />
    </header>
  );
}

function Index() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
        Solora · Component Library
      </p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-10">
        Design Options
      </h1>

      {/* ============ Quick Wins ============ */}
      <SectionHeader title="Quick Wins Options" />

      <QuickWins clientName="Glow That Face Up" wins={winsData} />
      <QuickWinsList clientName="Glow That Face Up" wins={winsData} />
      <QuickWinsBento clientName="Glow That Face Up" wins={winsData} />
      <QuickWinsTrack clientName="Glow That Face Up" wins={winsData} />

      {/* ============ Callouts ============ */}
      <SectionHeader title="Call Out Options" />

      <Callout label="Solora Insight">
        Good design doesn't shout. It glows quietly, and lets the work speak for itself.
      </Callout>

      <Callout variant="light" label="Solora Insight">
        The same idea, lifted into daylight — softer surface, same shimmer when you pass over it.
      </Callout>

      <Callout variant="outline" label="Solora Insight">
        Just a gradient rim around quiet space — the frame carries the brand.
      </Callout>

      {/* ============ Google Reviews ============ */}
      <SectionHeader title="Google Review Options" />

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
    </article>
  );
}
