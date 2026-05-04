import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  number: string;
  name: string;
  outcome: string;
  detail: string;
  link: ServiceLink;
}

const services: Service[] = [
  {
    number: "01",
    name: "Patient Magnet",
    outcome: "More new patients",
    detail: "Local ad campaigns engineered to fill your calendar with the right patients.",
    link: { to: "/services/patient-magnet" },
  },
  {
    number: "02",
    name: "Reputation Booster",
    outcome: "More 5-star reviews",
    detail: "An automated review engine that turns happy patients into proof for the next.",
    link: { to: "/services/reputation-booster" },
  },
  {
    number: "03",
    name: "Patient Re-Activator",
    outcome: "More returning patients",
    detail: "Reach back into your existing list and re-book the patients you already earned.",
    link: { to: "/services/patient-reactivator" },
  },
];

export function ServicesEditorial({ eyebrow = "Services" }: { eyebrow?: string }) {
  return (
    <section className="my-12 md:my-16">
      <div className="flex items-baseline justify-between mb-10 md:mb-12">
        <span className="text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground font-medium">
          {eyebrow}
        </span>
        <span className="text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground/70 font-medium tabular-nums">
          03 / Offerings
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground leading-[1.05] mb-12 md:mb-16 max-w-xl">
        Built around three<br />
        <em className="solora-editorial__em not-italic font-normal">measurable outcomes.</em>
      </h2>

      <ul className="solora-editorial__list">
        {services.map((s) => (
          <li key={s.number}>
            <Link
              {...s.link}
              className="solora-editorial__row group grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 py-6 md:py-8"
            >
              <span className="text-xs md:text-sm font-medium text-foreground/40 tabular-nums tracking-wider">
                {s.number}
              </span>

              <div className="min-w-0">
                <h3 className="text-xl md:text-3xl font-light tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-1">
                  {s.name}
                </h3>
                <p className="hidden md:block mt-1.5 text-sm text-foreground/55 font-light max-w-md">
                  {s.detail}
                </p>
                <p className="md:hidden mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/45 font-medium">
                  {s.outcome}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden md:inline text-[0.7rem] uppercase tracking-[0.22em] text-foreground/55 font-medium">
                  {s.outcome}
                </span>
                <span className="solora-editorial__arrow flex items-center justify-center h-9 w-9 rounded-full border border-border/70 text-foreground/70">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
