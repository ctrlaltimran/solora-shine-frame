import type { ReactNode } from "react";
import { Quote } from "lucide-react";

interface CalloutTicketProps {
  children: ReactNode;
  label?: string;
  attribution?: string;
}

export function CalloutTicket({
  children,
  label = "Solora Insight",
  attribution,
}: CalloutTicketProps) {
  return (
    <aside className="solora-ticket my-8 md:my-10">
      {/* Left perforated accent strip */}
      <div className="solora-ticket__strip" aria-hidden="true">
        <span className="solora-ticket__strip-label">{label}</span>
      </div>

      {/* Body */}
      <div className="solora-ticket__body">
        <Quote
          className="solora-ticket__glyph"
          aria-hidden="true"
          strokeWidth={1.25}
        />
        <p className="solora-ticket__text">{children}</p>
        {attribution && (
          <footer className="solora-ticket__attribution">— {attribution}</footer>
        )}
      </div>
    </aside>
  );
}
