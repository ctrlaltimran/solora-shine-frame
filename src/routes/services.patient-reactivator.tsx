import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/patient-reactivator")({
  component: PatientReactivatorPage,
  head: () => ({
    meta: [
      { title: "Patient Re-Activator — Solora" },
      { name: "description", content: "Solora's Patient Re-Activator wins back past patients and fills your calendar." },
    ],
  }),
});

function PatientReactivatorPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">← Back</Link>
      <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-tight">Patient Re-Activator</h1>
      <p className="mt-4 text-foreground/70 font-light">Service detail coming soon.</p>
    </article>
  );
}
