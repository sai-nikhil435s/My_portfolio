"use client";

import { cn } from "@/lib/utils";

// ─── Section wrapper ──────────────────────────────────────────────────────────

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
      "relative z-10 mx-auto w-full max-w-7xl px-4 py-8 md:py-10 lg:py-12 sm:px-6 lg:px-8",
      className
    )}
    >
      {children}
    </section>
  );
}

// ─── Filter pill ──────────────────────────────────────────────────────────────

export function Pill({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
        active
          ? "border-brand-500 bg-brand-500 text-white shadow-glow"
          : "border-slate-200 bg-white/70 text-slate-700 hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-200"
      )}
    >
      {children}
    </button>
  );
}

// ─── Button / link ────────────────────────────────────────────────────────────

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a
      href={href}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition",
        variant === "primary" &&
          "bg-slate-950 text-white shadow-card hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200",
        variant === "secondary" &&
          "border border-slate-200 bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white",
        variant === "ghost" &&
          "text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
      )}
    >
      {children}
    </a>
  );
}
