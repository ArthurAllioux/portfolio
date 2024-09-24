import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      padding: {
        wide: "15vw",
        tight: "5vw",
      },
      boxShadow: {
        "elevate-center": "0 4px 0 2px var(--tw-shadow-color)",
        elevate: "0 4px 0 2px var(--tw-shadow-color)",
        "elevate-left": "-2px 4px 0 0px var(--tw-shadow-color)",
        "elevate-right": "2px 4px 0 0px var(--tw-shadow-color)",
        "big-inner": "inset 0px 0px 15px var(--tw-shadow-color)",
      },
      fontFamily: {
        headings: ["var(--font-headings)"],
        p: ["var(--font-p)"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-rgb))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-rgb))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb))",
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground-rgb))",
          revert: "rgb(var(--background-rgb))",
        },
        background: {
          DEFAULT: "rgb(var(--background-rgb))",
        },
      },
      spacing: {
        "128": "32rem",
        "256": "64rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 6s infinite",
        shimmer: "shimmer 10s linear infinite ",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "0% 0",
          },
          "15%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
        blob: {
          // "0%": {
          //   borderRadius: "70% 20% 80% 10% / 80% 10% 70% 20%",
          // },
          // "50%": {
          //   borderRadius: "20% 80% 10% 90% / 10% 90% 20% 80%",
          // },
          // "100%": {
          //   borderRadius: "70% 20% 80% 10% / 80% 10% 70% 20%",
          // },
          "0%": {
            borderRadius: "50% 40% 60% 50% / 55% 50% 45% 60%",
          },
          "50%": {
            borderRadius: "60% 50% 40% 55% / 40% 45% 60% 50%",
          },
          "100%": {
            borderRadius: "50% 40% 60% 50% / 55% 50% 45% 60%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
