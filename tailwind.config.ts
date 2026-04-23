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
        navy: { DEFAULT: "#0B1221", deep: "#0F172A" },
        gold: { DEFAULT: "#C5A073", muted: "#B8956A" },
      },
      fontFamily: {
        sans: [
          "var(--font-pretendard)",
          "Pretendard",
          "Pretendard Variable",
          "system-ui",
          "sans-serif",
        ],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
