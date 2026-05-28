import type { ReactNode } from "react";
import clsx from "clsx";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-2xl border border-aurea-border bg-aurea-card p-6 shadow-2xl shadow-black/20", className)}>
      {children}
    </div>
  );
}
