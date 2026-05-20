import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFEF9",
          100: "#FFF8ED",
          200: "#FCEFD8",
          300: "#F5E0C0",
        },
        forest: {
          50: "#EEF6F1",
          100: "#D4EBDA",
          200: "#A8D6B5",
          300: "#6DB88A",
          400: "#3E9A63",
          500: "#2D7A50",
          600: "#1F5E3C",
          700: "#164429",
          800: "#0E2C1B",
          900: "#07160D",
        },
        amber: {
          50: "#FFF8ED",
          100: "#FEECC8",
          200: "#FDD58F",
          300: "#FBB847",
          400: "#F99D1C",
          500: "#E8820A",
          600: "#C96205",
          700: "#A04509",
          800: "#82380E",
          900: "#6B300F",
        },
        bark: {
          50: "#F7F4F0",
          100: "#EDE8E0",
          200: "#D9CFBF",
          300: "#C2B49A",
          400: "#A89474",
          500: "#8E7655",
          600: "#6E5C40",
          700: "#50422E",
          800: "#342B1E",
          900: "#1C1712",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.bark.900"),
            lineHeight: "1.85",
            fontSize: "1.0625rem",
            a: {
              color: theme("colors.forest.500"),
              textDecorationColor: theme("colors.forest.300"),
              "&:hover": { color: theme("colors.forest.700") },
            },
            "h1, h2, h3, h4": {
              fontFamily: "'Playfair Display', Georgia, serif",
              color: theme("colors.bark.900"),
              fontWeight: "700",
            },
            h2: { fontSize: "1.65rem", marginTop: "2.5rem", marginBottom: "1rem" },
            h3: { fontSize: "1.35rem", marginTop: "2rem", marginBottom: "0.75rem" },
            strong: { color: theme("colors.bark.800"), fontWeight: "600" },
            blockquote: {
              borderLeftColor: theme("colors.forest.300"),
              backgroundColor: theme("colors.forest.50"),
              padding: "1rem 1.5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontStyle: "italic",
              color: theme("colors.bark.700"),
              quotes: "none",
            },
            "ul > li::marker": { color: theme("colors.forest.400") },
            "ol > li::marker": { color: theme("colors.forest.400"), fontWeight: "600" },
            code: {
              backgroundColor: theme("colors.cream.200"),
              color: theme("colors.bark.800"),
              padding: "0.125rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      }),
      boxShadow: {
        card: "0 1px 3px rgba(28,23,18,0.06), 0 4px 12px rgba(28,23,18,0.08)",
        "card-hover": "0 4px 12px rgba(28,23,18,0.1), 0 12px 28px rgba(28,23,18,0.12)",
        warm: "0 2px 8px rgba(45,122,80,0.12), 0 8px 24px rgba(45,122,80,0.08)",
      },
      animation: {
        shimmer: "shimmer 1.8s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
