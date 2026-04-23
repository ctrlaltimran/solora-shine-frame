import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  label?: string;
  icon?: ReactNode;
}

export function Callout({ children, label = "Solora Insight", icon }: CalloutProps) {
  return (
    <aside className="solora-callout my-12 px-7 py-7 md:px-10 md:py-9">
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, var(--solora-cyan), var(--solora-violet) 60%, var(--solora-magenta))",
            boxShadow: "0 0 18px color-mix(in oklch, var(--solora-violet) 60%, transparent)",
          }}
        >
          {icon ?? <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />}
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.22em] font-medium text-white/60">
          {label}
        </span>
      </div>
      <p className="text-base md:text-lg leading-relaxed font-light text-white/90">
        {children}
      </p>
    </aside>
  );
}
