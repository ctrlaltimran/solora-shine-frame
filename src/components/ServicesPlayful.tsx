import { Link } from "@tanstack/react-router";
import { useState } from "react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  emoji: string;
  name: string;
  promise: string;
  bg: string;
  fg: string;
  marquee: string[];
  link: ServiceLink;
}

const services: Service[] = [
  {
    emoji: "🧲",
    name: "Patient Magnet",
    promise: "New patients, on tap.",
    bg: "oklch(0.82 0.16 60)",
    fg: "oklch(0.2 0.04 50)",
    marquee: ["NEW PATIENTS", "BOOKED CHAIRS", "LOCAL ADS", "✦"],
    link: { to: "/services/patient-magnet" },
  },
  {
    emoji: "✨",
    name: "Reputation Booster",
    promise: "Five-star proof, on autopilot.",
    bg: "oklch(0.78 0.14 145)",
    fg: "oklch(0.18 0.04 145)",
    marquee: ["5-STAR REVIEWS", "GOOGLE GLOW UP", "TRUST ENGINE", "✦"],
    link: { to: "/services/reputation-booster" },
  },
  {
    emoji: "🔁",
    name: "Patient Re-Activator",
    promise: "Old patients, new bookings.",
    bg: "oklch(0.78 0.13 320)",
    fg: "oklch(0.2 0.05 320)",
    marquee: ["RE-BOOKED", "WAKE THE LIST", "FILL THE GAPS", "✦"],
    link: { to: "/services/patient-reactivator" },
  },
];

export function ServicesPlayful() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="my-12 md:my-16">
      <div className="solora-play__head">
        <span className="solora-play__sticker" data-rot="-6">
          ✦ services
        </span>
        <h2 className="solora-play__title">
          Pick your <span className="solora-play__wiggle">flavor</span>.
        </h2>
        <span className="solora-play__sticker" data-rot="5">
          three of&apos;em
        </span>
      </div>

      <div className="solora-play__stack">
        {services.map((s, i) => (
          <Link
            key={s.name}
            {...s.link}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            data-active={hovered === i}
            data-dim={hovered !== null && hovered !== i}
            className="solora-play__row group"
            style={
              {
                "--bg": s.bg,
                "--fg": s.fg,
              } as React.CSSProperties
            }
          >
            <div className="solora-play__rowInner">
              <span className="solora-play__num">{String(i + 1).padStart(2, "0")}</span>

              <span className="solora-play__emoji" aria-hidden>
                {s.emoji}
              </span>

              <span className="solora-play__name">{s.name}</span>

              <span className="solora-play__promise">{s.promise}</span>

              <span className="solora-play__pill">
                Open
                <span className="solora-play__pillArrow">→</span>
              </span>
            </div>

            {/* Marquee that slides in on hover */}
            <div className="solora-play__marquee" aria-hidden>
              <div className="solora-play__marqueeTrack">
                {[...Array(3)].flatMap((_, r) =>
                  s.marquee.map((w, j) => (
                    <span key={`${r}-${j}`} className="solora-play__word">
                      {w}
                    </span>
                  )),
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
