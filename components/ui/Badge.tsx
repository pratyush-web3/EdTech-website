import type { ReactNode } from "react";
import clsx from "clsx";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-flex rounded-full border border-aurea-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-aurea-secondary", className)}>
      {children}
    </span>
  );
}
