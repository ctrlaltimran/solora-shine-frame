import { Link } from "@tanstack/react-router";
import { Magnet, Sparkles, RotateCcw, ArrowUpRight, type LucideIcon } from "lucide-react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  link: ServiceLink;
}

const services: Service[] = [
  {
    number: "01",
    name: "Patient Magnet",
    tagline: "Attract new patients",
    description: "Targeted local campaigns that bring new patients to your door — consistently.",
    icon: Magnet,
    link: { to: "/services/patient-magnet" },
  },
  {
    number: "02",
    name: "Reputation Booster",
    tagline: "Build 5-star trust",
    description: "Turn happy patients into a steady stream of glowing Google reviews.",
    icon: Sparkles,
    link: { to: "/services/reputation-booster" },
  },
  {
    number: "03",
    name: "Patient Re-Activator",
    tagline: "Win back past patients",
    description: "Re-engage past patients and fill open slots on your calendar.",
    icon: RotateCcw,
    link: { to: "/services/patient-reactivator" },
  },
];

export function ServicesShowcase({ eyebrow = "What We Do" }: { eyebrow?: string }) {
  return (
    <section className="my-12 md:my-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground font-medium">
          {eyebrow}
        </span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-2">
        Three ways we grow your practice.
      </h2>
      <p className="text-sm md:text-base text-foreground/60 font-light mb-8 max-w-xl">
        Pick a service to see how it works.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.number}
              {...s.link}
              className="solora-service group relative flex flex-col p-5 md:p-6 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-5 md:mb-6">
                <span className="solora-service__icon flex items-center justify-center h-10 w-10 rounded-xl">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-foreground/35 font-medium tabular-nums">
                  {s.number}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground">
                {s.name}
              </h3>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/50 font-medium">
                {s.tagline}
              </p>

              <p className="mt-3 text-sm text-foreground/70 font-light leading-relaxed flex-1">
                {s.description}
              </p>

              <div className="solora-service__cta mt-5 flex items-center gap-1.5 text-xs font-medium text-foreground/80">
                <span>Learn more</span>
                <ArrowUpRight className="h-3.5 w-3.5 solora-service__arrow" strokeWidth={2} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
