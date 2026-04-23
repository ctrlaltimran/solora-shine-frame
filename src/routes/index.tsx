import { createFileRoute } from "@tanstack/react-router";
import { Callout } from "@/components/Callout";

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
