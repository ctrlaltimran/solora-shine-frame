import { Link } from "@tanstack/react-router";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  issue: string;
  name: string;
  dek: string;
  pull: string;
  tone: "ivory" | "noir" | "blush";
  link: ServiceLink;
}

const services: Service[] = [
  {
    issue: "Vol. 01",
    name: "Patient Magnet",
    dek: "On the quiet science of being found.",
    pull: "Local ad campaigns engineered to fill your calendar with the right new patients — without the noise.",
    tone: "noir",
    link: { to: "/services/patient-magnet" },
  },
  {
    issue: "Vol. 02",
    name: "Reputation Booster",
    dek: "A study in earned trust.",
    pull: "An automated review engine that turns happy patients into proof for the next.",
    tone: "ivory",
    link: { to: "/services/reputation-booster" },
  },
  {
    issue: "Vol. 03",
    name: "Patient Re-Activator",
    dek: "Notes on returning.",
    pull: "Reach back into your existing list and re-book the patients you already earned.",
    tone: "blush",
    link: { to: "/services/patient-reactivator" },
  },
];

function Shape({ tone }: { tone: Service["tone"] }) {
  if (tone === "noir") {
    return (
      <svg viewBox="0 0 200 200" className="solora-mag__art" aria-hidden>
        <defs>
          <radialGradient id="n1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.02 80)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="oklch(0.95 0.02 80)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="70" fill="url(#n1)" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="oklch(0.92 0.04 80)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="44" fill="none" stroke="oklch(0.92 0.04 80)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="22" fill="none" stroke="oklch(0.92 0.04 80)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="3" fill="oklch(0.95 0.05 80)" />
      </svg>
    );
  }
  if (tone === "ivory") {
    return (
      <svg viewBox="0 0 200 200" className="solora-mag__art" aria-hidden>
        <g stroke="oklch(0.45 0.05 60)" strokeWidth="0.7" fill="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx={20 + i * 6}
              ry={50 + i * 2}
              transform={`rotate(${i * 12} 100 100)`}
              opacity={0.55 - i * 0.025}
            />
          ))}
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="solora-mag__art" aria-hidden>
      <defs>
        <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.12 25)" />
          <stop offset="100%" stopColor="oklch(0.4 0.1 15)" />
        </linearGradient>
      </defs>
      <path
        d="M100,20 C150,30 180,70 170,120 C160,170 110,185 70,170 C30,155 15,110 30,70 C45,30 70,15 100,20 Z"
        fill="url(#b1)"
        opacity="0.92"
      />
      <path
        d="M100,40 C140,50 160,80 152,120 C144,160 105,170 75,158 C45,146 35,110 48,80 C60,50 80,35 100,40 Z"
        fill="none"
        stroke="oklch(0.95 0.04 30)"
        strokeWidth="0.5"
        opacity="0.6"
      />
    </svg>
  );
}

export function ServicesMagazine() {
  return (
    <section className="my-12 md:my-20">
      {/* Masthead */}
      <div className="solora-mag__masthead">
        <div className="solora-mag__rule" />
        <div className="flex items-baseline justify-between gap-6 py-4 md:py-5">
          <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.4em] font-medium text-foreground/55">
            Solora Quarterly
          </span>
          <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.4em] font-medium text-foreground/45 tabular-nums">
            Issue №&nbsp;03 · The Services
          </span>
        </div>
        <div className="solora-mag__rule" />
      </div>

      <h2 className="solora-mag__title mt-8 md:mt-12">
        Three offerings,
        <br />
        <em className="solora-mag__em">printed in&nbsp;practice.</em>
      </h2>
      <p className="mt-5 md:mt-6 max-w-md text-sm md:text-base text-foreground/60 font-light italic">
        A short volume on growing a practice with intention — featuring acquisition, trust, and return.
      </p>

      {/* Bento mosaic */}
      <div className="solora-mag__grid mt-10 md:mt-14">
        {services.map((s, i) => (
          <Link
            key={s.issue}
            {...s.link}
            data-tone={s.tone}
            data-feature={i === 0 ? "true" : "false"}
            className="solora-mag__card group"
          >
            <div className="solora-mag__cardInner">
              <div className="solora-mag__art-wrap">
                <Shape tone={s.tone} />
              </div>

              <div className="solora-mag__content">
                <div className="solora-mag__meta">
                  <span>{s.issue}</span>
                  <span className="solora-mag__bullet">·</span>
                  <span>Feature</span>
                </div>

                <h3 className="solora-mag__name">{s.name}</h3>
                <p className="solora-mag__dek">{s.dek}</p>

                <p className="solora-mag__pull">"{s.pull}"</p>

                <div className="solora-mag__cta">
                  <span className="solora-mag__ctaLine" />
                  <span className="solora-mag__ctaLabel">Read the feature</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="solora-mag__rule mt-10 md:mt-14" />
      <div className="flex items-center justify-between py-4">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] font-medium text-foreground/45">
          End of section
        </span>
        <span className="text-[0.6rem] uppercase tracking-[0.4em] font-medium text-foreground/45 tabular-nums">
          p. 03
        </span>
      </div>
    </section>
  );
}
