import type { ReactNode } from "react";
import soloraLogo from "@/assets/solora-logo.png";

type CalloutVariant = "dark" | "light" | "outline";

interface CalloutProps {
  children: ReactNode;
  label?: string;
  icon?: ReactNode;
  variant?: CalloutVariant;
}

export function Callout({
  children,
  label = "Solora Insight",
  icon,
  variant = "dark",
}: CalloutProps) {
  const variantClass =
    variant === "light"
      ? "solora-callout--light"
      : variant === "outline"
        ? "solora-callout--outline"
        : "";

  return (
    <aside className={`solora-callout ${variantClass} my-8 px-5 py-4 md:my-10 md:px-10 md:py-6`} style={{ WebkitTapHighlightColor: "transparent" }}>
      <div className="flex items-center gap-2 mb-2 md:gap-2.5 md:mb-3">
        <span
          className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center"
          style={{
            filter:
              "drop-shadow(0 0 10px color-mix(in oklch, var(--solora-violet) 45%, transparent))",
          }}
        >
          {icon ?? (
            <img src={soloraLogo} alt="Solora" className="h-7 w-7 md:h-10 md:w-10 object-contain" />
          )}
        </span>
        <span className="text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.22em] font-medium text-foreground/55">
          {label}
        </span>
      </div>
      <p className="text-sm md:text-lg leading-relaxed font-light text-foreground/85">
        {children}
      </p>
    </aside>
  );
}
