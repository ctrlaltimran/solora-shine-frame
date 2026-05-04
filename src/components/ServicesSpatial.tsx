import { Link } from "@tanstack/react-router";
import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Magnet, Sparkles, BellRing, ArrowUpRight, type LucideIcon } from "lucide-react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  number: string;
  name: string;
  kicker: string;
  blurb: string;
  cta: string;
  icon: LucideIcon;
  hue: string;
  link: ServiceLink;
}

const services: Service[] = [
  {
    number: "01",
    name: "Patient Magnet",
    kicker: "Acquisition",
    blurb: "Local ad campaigns engineered to fill your calendar with the right new patients.",
    cta: "Boost my ranking",
    icon: Magnet,
    hue: "oklch(0.62 0.28 320)",
    link: { to: "/services/patient-magnet" },
  },
  {
    number: "02",
    name: "Reputation Booster",
    kicker: "Trust",
    blurb: "An automated review engine that turns happy patients into proof for the next.",
    cta: "Get me reviews",
    icon: Sparkles,
    hue: "oklch(0.78 0.13 215)",
    link: { to: "/services/reputation-booster" },
  },
  {
    number: "03",
    name: "Patient Re-Activator",
    kicker: "Retention",
    blurb: "Wake your dormant list with smart messaging that fills cancellations and quiet weeks.",
    cta: "Fill my calendar",
    icon: BellRing,
    hue: "oklch(0.65 0.22 270)",
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
        <div className="solora-spatial__glare" aria-hidden />
        <div className="solora-spatial__grid" aria-hidden />

        <div className="solora-spatial__stage" data-hover={hover}>
          <span className="solora-spatial__halo" aria-hidden />
          <span className="solora-spatial__ring" aria-hidden />
          <span className="solora-spatial__ring solora-spatial__ring--2" aria-hidden />
          <span className="solora-spatial__icon">
            <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
          </span>
          <span className="solora-spatial__ghost-num md:hidden" aria-hidden>
            {s.number}
          </span>
        </div>

        <div className="solora-spatial__meta">
          <div className="flex items-center mb-2">
            <span className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.3em] font-medium text-foreground/55">
              {s.kicker}
            </span>
          </div>
          <h3 className="solora-spatial__title text-xl md:text-[1.5rem] font-light tracking-tight text-foreground leading-[1.1]">
            {s.name}
          </h3>
          <p className="mt-2 text-[0.78rem] md:text-[0.825rem] text-foreground/65 font-light leading-relaxed">
            {s.blurb}
          </p>

          <div className="solora-spatial__cta mt-4 inline-flex items-center gap-2 text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.22em] font-medium">
            <span>{s.cta}</span>
            <ArrowUpRight className="solora-spatial__cta-arrow h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSpatial() {
  return (
    <section className="solora-spatial my-12 md:my-16">

      <div className="solora-spatial__track">
        {services.map((s) => (
          <SpatialCard key={s.number} s={s} />
        ))}
      </div>
    </section>
  );
}
