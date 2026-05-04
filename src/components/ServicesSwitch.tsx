import { Link } from "@tanstack/react-router";
import { useState } from "react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  number: string;
  name: string;
  kicker: string;
  body: string;
  stat: { value: string; label: string };
  link: ServiceLink;
}

const services: Service[] = [
  {
    number: "S/01",
    name: "Patient Magnet",
    kicker: "Acquisition",
    body: "Hyper-targeted local campaigns that put your practice in front of the patients already searching — and turn clicks into booked chairs.",
    stat: { value: "+38%", label: "avg. new patients / mo" },
    link: { to: "/services/patient-magnet" },
  },
  {
    number: "S/02",
    name: "Reputation Booster",
    kicker: "Trust",
    body: "An automated review engine that asks happy patients at the perfect moment, then funnels them straight to Google.",
    stat: { value: "5.0★", label: "avg. client rating" },
    link: { to: "/services/reputation-booster" },
  },
  {
    number: "S/03",
    name: "Patient Re-Activator",
    kicker: "Retention",
    body: "Wake up your dormant patient list with smart messaging that fills cancellations and quiet weeks.",
    stat: { value: "13×", label: "avg. rebookings / wave" },
    link: { to: "/services/patient-reactivator" },
  },
];

export function ServicesSwitch() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="my-12 md:my-16">
      <div className="solora-switch overflow-hidden rounded-3xl">
        {/* Header bar */}
        <div className="solora-switch__bar flex items-center justify-between px-5 md:px-7 py-3.5 text-[0.6rem] uppercase tracking-[0.3em] font-medium">
          <span className="flex items-center gap-2">
            <span className="solora-switch__dot" />
            Services / Live
          </span>
          <span className="tabular-nums opacity-60">
            {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr]">
          {/* Tabs */}
          <ul className="solora-switch__tabs">
            {services.map((s, i) => (
              <li key={s.number}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-active={i === active}
                  className="solora-switch__tab w-full text-left flex items-baseline gap-4 px-5 md:px-7 py-5 md:py-6"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.28em] font-medium opacity-50 tabular-nums shrink-0 w-12">
                    {s.number}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-base md:text-lg font-light tracking-tight">
                      {s.name}
                    </span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.22em] font-medium opacity-50 mt-0.5">
                      {s.kicker}
                    </span>
                  </span>
                  <span className="solora-switch__caret text-sm opacity-60" aria-hidden>
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Detail panel */}
          <div key={active} className="solora-switch__panel relative px-6 md:px-10 py-8 md:py-10 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-[0.32em] font-medium opacity-60 mb-3">
              {current.kicker}
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.02] mb-4">
              {current.name}
            </h3>
            <p className="text-sm md:text-base font-light leading-relaxed opacity-75 max-w-md mb-8">
              {current.body}
            </p>

            <div className="solora-switch__stat mt-auto flex items-end justify-between gap-6 pt-6 border-t border-current/15">
              <div>
                <div className="text-3xl md:text-4xl font-light tabular-nums tracking-tight">
                  {current.stat.value}
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.24em] font-medium opacity-60 mt-1">
                  {current.stat.label}
                </div>
              </div>

              <Link
                {...current.link}
                className="solora-switch__cta inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium"
              >
                Explore
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
