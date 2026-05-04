import { Link } from "@tanstack/react-router";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  number: string;
  name: string;
  verb: string;
  line: string;
  tone: "ink" | "cream" | "accent";
  link: ServiceLink;
}

const services: Service[] = [
  {
    number: "01",
    name: "Patient Magnet",
    verb: "Attract",
    line: "New patients, on tap.",
    tone: "ink",
    link: { to: "/services/patient-magnet" },
  },
  {
    number: "02",
    name: "Reputation Booster",
    verb: "Amplify",
    line: "Five-star proof, on autopilot.",
    tone: "accent",
    link: { to: "/services/reputation-booster" },
  },
  {
    number: "03",
    name: "Patient Re-Activator",
    verb: "Revive",
    line: "Old patients, new bookings.",
    tone: "cream",
    link: { to: "/services/patient-reactivator" },
  },
];

export function ServicesDeck() {
  return (
    <section className="my-12 md:my-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground font-medium mb-3">
            ◐ The Deck
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Pick a play.
          </h2>
        </div>
        <span className="hidden md:block text-xs text-muted-foreground font-light italic">
          tap a card →
        </span>
      </div>

      <div className="solora-deck">
        {services.map((s, i) => (
          <Link
            key={s.number}
            {...s.link}
            data-tone={s.tone}
            style={{ "--i": i } as React.CSSProperties}
            className="solora-deck__card group block relative overflow-hidden rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-start justify-between mb-10 md:mb-16">
              <span className="solora-deck__num text-[2.5rem] md:text-[3.25rem] leading-none font-light tracking-tight tabular-nums">
                {s.number}
              </span>
              <span className="solora-deck__chip text-[0.6rem] uppercase tracking-[0.28em] font-medium px-3 py-1.5 rounded-full">
                Solora
              </span>
            </div>

            <p className="solora-deck__verb text-xs uppercase tracking-[0.35em] font-medium opacity-70 mb-2">
              {s.verb}
            </p>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight leading-[1.05] mb-1">
              {s.name}
            </h3>
            <p className="text-sm md:text-base font-light opacity-75 mb-6 md:mb-8">
              {s.line}
            </p>

            <div className="solora-deck__cta inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium pb-1 border-b border-current">
              <span>Open service</span>
              <span aria-hidden>↗</span>
            </div>

            <span className="solora-deck__ghost" aria-hidden>{s.number}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
