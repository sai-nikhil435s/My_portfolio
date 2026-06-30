import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        brand: {
          50: "#eef8ff",
          100: "#d7edff",
          300: "#8bd1ff",
          500: "#2ea8ff",
          600: "#0e80df",
          900: "#08395f"
        }
      },
      boxShadow: {
        glow: "0 0 80px rgba(46, 168, 255, 0.25)",
        card: "0 20px 80px rgba(2, 6, 23, 0.14)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(148,163,184,.22) 1px, transparent 0)",
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(46,168,255,.28), transparent 28%), radial-gradient(circle at 80% 0%, rgba(168,85,247,.24), transparent 26%), radial-gradient(circle at 50% 70%, rgba(34,197,94,.12), transparent 32%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 32s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;
