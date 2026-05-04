import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type ServiceLink =
  | { to: "/services/patient-magnet" }
  | { to: "/services/reputation-booster" }
  | { to: "/services/patient-reactivator" };

interface Service {
  id: string;
  name: string;
  module: string;
  status: string;
  metrics: { k: string; v: string }[];
  log: string[];
  link: ServiceLink;
}

const services: Service[] = [
  {
    id: "0x01",
    name: "patient_magnet",
    module: "ACQUISITION.MOD",
    status: "ONLINE",
    metrics: [
      { k: "channels", v: "META · GOOGLE · LOCAL" },
      { k: "lead_cost", v: "↓ 42%" },
      { k: "uptime", v: "99.97%" },
    ],
    log: [
      "> deploying targeted local ad campaigns",
      "> filtering high-intent patient signals",
      "> calendar.book() :: ok",
    ],
    link: { to: "/services/patient-magnet" },
  },
  {
    id: "0x02",
    name: "reputation_booster",
    module: "TRUST.MOD",
    status: "ONLINE",
    metrics: [
      { k: "rating", v: "5.00 ★" },
      { k: "reviews_30d", v: "+100" },
      { k: "response", v: "automated" },
    ],
    log: [
      "> sampling post-visit sentiment",
      "> routing happy patients → google",
      "> reputation.score++ :: ok",
    ],
    link: { to: "/services/reputation-booster" },
  },
  {
    id: "0x03",
    name: "patient_reactivator",
    module: "RETENTION.MOD",
    status: "ONLINE",
    metrics: [
      { k: "list_size", v: "your existing patients" },
      { k: "rebook_rate", v: "13× per wave" },
      { k: "channels", v: "SMS · EMAIL" },
    ],
    log: [
      "> scanning dormant patient list",
      "> dispatching re-engagement sequence",
      "> chair.fill() :: ok",
    ],
    link: { to: "/services/patient-reactivator" },
  },
];

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span aria-hidden style={{ opacity: on ? 1 : 0 }}>▍</span>;
}

function ClockReadout() {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setT(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);
  return <span className="tabular-nums">{t}</span>;
}

export function ServicesTerminal() {
  return (
    <section className="my-12 md:my-16">
      <div className="solora-term">
        {/* Window chrome */}
        <div className="solora-term__chrome">
          <div className="flex items-center gap-1.5">
            <span className="solora-term__dot" data-c="r" />
            <span className="solora-term__dot" data-c="y" />
            <span className="solora-term__dot" data-c="g" />
          </div>
          <span className="solora-term__title">solora — services.sh</span>
          <span className="solora-term__time">
            <ClockReadout />
          </span>
        </div>

        {/* Body */}
        <div className="solora-term__body">
          <div className="solora-term__line">
            <span className="solora-term__prompt">solora@core</span>
            <span className="opacity-50">:</span>
            <span className="solora-term__path">~/services</span>
            <span className="opacity-50">$</span>
            <span> ls --offerings</span>
            <Cursor />
          </div>

          <pre className="solora-term__ascii" aria-hidden>{`┌─────────────────────────────────────────────────────────┐
│  3 modules loaded · all systems nominal                 │
└─────────────────────────────────────────────────────────┘`}</pre>

          <div className="solora-term__grid">
            {services.map((s) => (
              <Link
                key={s.id}
                {...s.link}
                className="solora-term__card group"
              >
                <div className="solora-term__cardHead">
                  <span className="solora-term__id">{s.id}</span>
                  <span className="solora-term__module">{s.module}</span>
                  <span className="solora-term__status">
                    <span className="solora-term__pulse" /> {s.status}
                  </span>
                </div>

                <div className="solora-term__name">
                  <span className="opacity-50">$</span> ./{s.name}
                </div>

                <ul className="solora-term__metrics">
                  {s.metrics.map((m) => (
                    <li key={m.k}>
                      <span className="solora-term__k">{m.k.padEnd(12, " ")}</span>
                      <span className="opacity-40">::</span>
                      <span className="solora-term__v">{m.v}</span>
                    </li>
                  ))}
                </ul>

                <div className="solora-term__log">
                  {s.log.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>

                <div className="solora-term__cta">
                  <span>[ run --learn-more ]</span>
                  <span className="solora-term__arrow">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="solora-term__line mt-6">
            <span className="solora-term__prompt">solora@core</span>
            <span className="opacity-50">:</span>
            <span className="solora-term__path">~/services</span>
            <span className="opacity-50">$</span>
            <Cursor />
          </div>
        </div>
      </div>
    </section>
  );
}
