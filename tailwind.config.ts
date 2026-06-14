import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        clay: {
          purple: "#C4A8E8",
          lavender: "#E2D4F7",
          pink: "#F5C6D9",
          peach: "#FDDCCA",
          cream: "#FDF6EC",
          beige: "#F5EFE6",
          rose: "#F2B8CC",
          lilac: "#D4B8F0",
          mint: "#C8EAD8",
          sky: "#C4DCF5",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        clay: "0 8px 32px rgba(196, 168, 232, 0.25), 0 2px 8px rgba(196, 168, 232, 0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        "clay-lg": "0 16px 48px rgba(196, 168, 232, 0.3), 0 4px 16px rgba(196, 168, 232, 0.2), inset 0 1px 0 rgba(255,255,255,0.7)",
        "clay-pink": "0 8px 32px rgba(245, 198, 217, 0.35), 0 2px 8px rgba(245, 198, 217, 0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
        "clay-peach": "0 8px 32px rgba(253, 220, 202, 0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
        "clay-inset": "inset 0 2px 8px rgba(196, 168, 232, 0.15), inset 0 -1px 0 rgba(255,255,255,0.5)",
        glossy: "0 4px 24px rgba(196, 168, 232, 0.2), inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -1px 1px rgba(196, 168, 232, 0.1)",
      },
      backgroundImage: {
        "clay-gradient": "linear-gradient(135deg, #F8F0FF 0%, #F5EFE6 50%, #FDF6EC 100%)",
        "hero-gradient": "linear-gradient(135deg, #D4B8F0 0%, #C4A8E8 40%, #E8C4D8 100%)",
        "card-glossy": "linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)",
        "purple-glow": "radial-gradient(ellipse at top, rgba(196, 168, 232, 0.4) 0%, transparent 60%)",
        "sidebar-gradient": "linear-gradient(180deg, #F8F0FF 0%, #F5EFE6 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse_soft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(0.98)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 10px) scale(0.97)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulse_soft: "pulse_soft 2s ease-in-out infinite",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
