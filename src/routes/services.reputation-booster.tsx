import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/reputation-booster")({
  component: ReputationBoosterPage,
  head: () => ({
    meta: [
      { title: "Reputation Booster — Solora" },
      { name: "description", content: "Solora's Reputation Booster turns happy patients into a steady stream of 5-star reviews." },
    ],
  }),
});

function ReputationBoosterPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">← Back</Link>
      <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-tight">Reputation Booster</h1>
      <p className="mt-4 text-foreground/70 font-light">Service detail coming soon.</p>
    </article>
  );
}
