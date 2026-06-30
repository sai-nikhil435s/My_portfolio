"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui";

export function Header({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (value: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 py-3 sm:py-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 shadow-lg shadow-slate-950/5">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-xl">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">
            SN
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black">Sai Nikhil</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">AI/ML Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#top" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="focus-ring rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-700 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <div className="hidden sm:block">
          <ButtonLink href="#contact" variant="primary">
            Contact
          </ButtonLink>
         </div>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            className="focus-ring rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-700 lg:hidden dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 p-4 backdrop-blur-sm lg:hidden">
          <div className="glass ml-auto h-full w-full max-w-sm rounded-3xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-black">Navigation</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="focus-ring rounded-full p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={
                  item === "Home"
                    ? "#top"
                    : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                        }
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-2xl px-4 py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
