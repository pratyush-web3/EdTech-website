import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "quiet";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ children, href, variant = "primary", className, ...props }: ButtonProps) {
  const classes = clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border px-5 py-3 text-sm font-semibold transition",
    variant === "primary" && "border-aurea-primary bg-aurea-primary text-aurea-bg hover:bg-transparent hover:text-aurea-primary",
    variant === "ghost" && "border-aurea-primary bg-transparent text-aurea-primary hover:bg-aurea-primary hover:text-aurea-bg",
    variant === "quiet" && "border-aurea-border bg-aurea-card text-aurea-text hover:border-aurea-primary",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
