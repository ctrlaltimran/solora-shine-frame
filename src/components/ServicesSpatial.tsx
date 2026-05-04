import { Link } from "@tanstack/react-router";
import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Magnet, Sparkles, RotateCcw, ArrowUpRight, type LucideIcon } from "lucide-react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  number: string;
  name: string;
  kicker: string;
  blurb: string;
  icon: LucideIcon;
  hue: string; // accent color via oklch
  link: ServiceLink;
}

const services: Service[] = [
  {
    number: "01",
    name: "Patient Magnet",
    kicker: "Acquisition",
    blurb: "Local ad campaigns engineered to fill your calendar with the right new patients.",
    icon: Magnet,
    hue: "oklch(0.62 0.28 320)", // Solora magenta
    link: { to: "/services/patient-magnet" },
  },
  {
    number: "02",
    name: "Reputation Booster",
    kicker: "Trust",
    blurb: "An automated review engine that turns happy patients into proof for the next.",
    icon: Sparkles,
    hue: "oklch(0.78 0.13 215)", // Solora cyan
    link: { to: "/services/reputation-booster" },
  },
  {
    number: "03",
    name: "Patient Re-Activator",
    kicker: "Retention",
    blurb: "Wake your dormant list with smart messaging that fills cancellations and quiet weeks.",
    icon: RotateCcw,
    hue: "oklch(0.65 0.22 270)", // Solora blue/violet
    link: { to: "/services/patient-reactivator" },
  },
];

function SpatialCard({ s }: { s: Service }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const [hover, setHover] = useState(false);
  const Icon = s.icon;

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({
      ry: (x - 0.5) * 18,
      rx: -(y - 0.5) * 14,
      mx: x * 100,
      my: y * 100,
    });
  }
  function onLeave() {
    setHover(false);
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });
  }

  return (
    <Link
      ref={ref}
      {...s.link}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      className="solora-spatial__card group"
      style={
        {
          "--rx": `${tilt.rx}deg`,
          "--ry": `${tilt.ry}deg`,
          "--mx": `${tilt.mx}%`,
          "--my": `${tilt.my}%`,
          "--hue": s.hue,
        } as CSSProperties
      }
    >
      <div className="solora-spatial__inner">
        {/* glare */}
        <div className="solora-spatial__glare" aria-hidden />
        {/* grid floor */}
        <div className="solora-spatial__grid" aria-hidden />

        {/* Layered icon stack — back glow, mid ring, front icon */}
        <div className="solora-spatial__stage" data-hover={hover}>
          <span className="solora-spatial__halo" aria-hidden />
          <span className="solora-spatial__ring" aria-hidden />
          <span className="solora-spatial__ring solora-spatial__ring--2" aria-hidden />
          <span className="solora-spatial__icon">
            <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.5} />
          </span>
          <span className="solora-spatial__ghost-num" aria-hidden>
            {s.number}
          </span>
        </div>

        <div className="solora-spatial__meta">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] font-medium text-foreground/55">
              {s.kicker}
            </span>
            <span className="text-[0.6rem] tabular-nums tracking-[0.2em] text-foreground/40">
              S/{s.number}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-foreground leading-[1.05]">
            {s.name}
          </h3>
          <p className="mt-3 text-sm text-foreground/65 font-light leading-relaxed">
            {s.blurb}
          </p>

          <div className="solora-spatial__cta mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-foreground/85">
            <span>Explore service</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSpatial() {
  const trackRef = useRef<HTMLDivElement>(null);

  function nudge(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".solora-spatial__card");
    const w = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  return (
    <section className="my-12 md:my-16">
      <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground font-medium mb-3">
            ⌖ Spatial / Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Three offerings, in&nbsp;orbit.
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous"
            className="solora-spatial__nav h-10 w-10 rounded-full grid place-items-center"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next"
            className="solora-spatial__nav h-10 w-10 rounded-full grid place-items-center"
          >
            →
          </button>
        </div>
      </div>

      <div ref={trackRef} className="solora-spatial__track">
        {services.map((s) => (
          <SpatialCard key={s.number} s={s} />
        ))}
        <div className="solora-spatial__pad" aria-hidden />
      </div>

    </section>
  );
}
