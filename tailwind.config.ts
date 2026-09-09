import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          50: "var(--surface-50)",
          100: "var(--surface-100)",
          200: "var(--surface-200)",
          300: "var(--surface-300)",
          DEFAULT: "var(--surface-100)",
        },
        border: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border)",
          hover: "var(--border-hover)",
          strong: "var(--border-strong)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
          dim: "var(--muted-dim)",
        },
        brand: {
          primary: "var(--brand-primary)",
          hover: "var(--brand-primary-hover)",
          dark: "var(--brand-dark)",
          cyan: "var(--brand-cyan)",
          amber: "var(--brand-amber)",
          indigo: "var(--brand-indigo)",
        },
        accent: {
          amber: {
            light: "#FFF4ED",
            DEFAULT: "#FF7043",
            hover: "#F4511E",
            dark: "#BF360C",
          },
          cyan: {
            light: "#E6FFFA",
            DEFAULT: "#00D4B2",
            hover: "#00B89A",
            dark: "#007A66",
          },
          indigo: {
            light: "#F0F0FF",
            DEFAULT: "#635BFF",
            hover: "#5851EA",
            dark: "#3B33B3",
          },
          emerald: {
            light: "#ECFDF5",
            DEFAULT: "#10B981",
            dark: "#047857",
          }
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      boxShadow: {
        stripe: "0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)",
        "stripe-card": "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        "stripe-card-hover": "0 20px 40px -15px rgba(10, 37, 64, 0.12), 0 0 0 1px rgba(99, 91, 255, 0.15)",
        "stripe-nav": "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)",
        "stripe-btn": "0 2px 4px rgba(45, 35, 66, 0.2), 0 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0 -1px 0 rgba(58, 65, 111, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
