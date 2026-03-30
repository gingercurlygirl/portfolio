import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        muted: "#a1a1a1",
        accent: "#ff2d78",
        card: "#141414",
        border: "#262626",
      },
    },
  },
  plugins: [],
};

export default config;
