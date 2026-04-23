import { Sun } from "lucide-react";
import type { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  label?: string;
  icon?: ReactNode;
}

export function Callout({ children, label = "Note", icon }: CalloutProps) {
  return (
    <aside className="solora-callout my-10 px-7 py-6 md:px-9 md:py-7">
      <div className="flex items-center gap-2 mb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--solora-glow)]/40 text-[var(--solora-ink)]">
          {icon ?? <Sun className="h-3.5 w-3.5" strokeWidth={2.25} />}
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">
          {label}
        </span>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-foreground font-light">
        {children}
      </p>
    </aside>
  );
}
