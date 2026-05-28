"use client";

import { useEffect, useState } from "react";
import { themes } from "@/lib/themes";
import type { ThemeName } from "@/types";

const storageKey = "accademia-aurea-theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeName>("oro");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as ThemeName | null;
    if (saved && themes.some((item) => item.id === saved)) {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
      return;
    }
    document.documentElement.dataset.theme = "oro";
  }, []);

  function chooseTheme(nextTheme: ThemeName) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex rounded-full border border-aurea-border bg-aurea-bg/90 p-1 shadow-2xl shadow-black/25 backdrop-blur-xl">
      {themes.map((item) => (
        <button
          key={item.id}
          type="button"
          title={item.label}
          aria-label={item.label}
          onClick={() => chooseTheme(item.id)}
          className={`flex h-9 items-center gap-2 rounded-full px-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${theme === item.id ? "bg-aurea-card text-aurea-highlight" : "text-aurea-muted hover:text-aurea-highlight"}`}
        >
          <span className="h-4 w-4 rounded-full border border-aurea-border" style={{ background: `linear-gradient(135deg, ${item.colors.join(", ")})` }} />
          <span className="hidden sm:inline">{item.shortLabel}</span>
        </button>
      ))}
    </div>
  );
}
