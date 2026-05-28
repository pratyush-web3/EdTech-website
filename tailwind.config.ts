import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        accent: ["var(--font-accent)", "Cinzel", "serif"]
      },
      colors: {
        aurea: {
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          card: "var(--color-card)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          highlight: "var(--color-highlight)",
          text: "var(--color-text)",
          muted: "var(--color-muted)",
          border: "var(--color-border)"
        }
      },
      maxWidth: {
        aurea: "1280px"
      }
    }
  },
  plugins: []
};

export default config;
