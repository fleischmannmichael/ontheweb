import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        slate: {
          ink: "#1E2A3A",
        },
        accent: {
          DEFAULT: "#4A7C9E",
          hover: "#3C6884",
        },
        line: "#E5E0D8",
        codebg: "#F2EEE6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "720px",
        prose: "680px",
      },
      typography: () => ({
        ink: {
          css: {
            "--tw-prose-body": "#1E2A3A",
            "--tw-prose-headings": "#1E2A3A",
            "--tw-prose-links": "#4A7C9E",
            "--tw-prose-bold": "#1E2A3A",
            "--tw-prose-counters": "#4A7C9E",
            "--tw-prose-bullets": "#4A7C9E",
            "--tw-prose-hr": "#E5E0D8",
            "--tw-prose-quotes": "#1E2A3A",
            "--tw-prose-quote-borders": "#4A7C9E",
            "--tw-prose-code": "#1E2A3A",
            "--tw-prose-pre-bg": "#F2EEE6",
            "--tw-prose-pre-code": "#1E2A3A",
            "--tw-prose-th-borders": "#E5E0D8",
            "--tw-prose-td-borders": "#E5E0D8",
          },
        },
      }),
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
