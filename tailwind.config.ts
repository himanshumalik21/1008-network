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
        background: "#090A0C",
        foreground: "#F4F4F6",
        surface: {
          50: "#1A1D24",
          100: "#14171E",
          200: "#101217",
          300: "#0C0E12",
          DEFAULT: "#111317",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
          DEFAULT: "rgba(255, 255, 255, 0.10)",
          hover: "rgba(255, 255, 255, 0.18)",
          strong: "rgba(255, 255, 255, 0.25)",
        },
        muted: {
          DEFAULT: "#9496A1",
          foreground: "#6E7180",
          dim: "#4B4D58",
        },
        accent: {
          amber: {
            light: "#FDE68A",
            DEFAULT: "#F59E0B",
            hover: "#D97706",
            dark: "#78350F",
          },
          cyan: {
            light: "#A5F3FC",
            DEFAULT: "#06B6D4",
            hover: "#0891B2",
            dark: "#164E63",
          },
          emerald: {
            DEFAULT: "#10B981",
            dark: "#064E3B",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 65%)",
        "radial-cyan": "radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 65%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        }
      },
    },
  },
  plugins: [],
};

export default config;
