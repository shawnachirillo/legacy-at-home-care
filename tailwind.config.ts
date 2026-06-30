import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#FFFDF6",
        cream: "#FFFDF6",
        lime: "#9CCB3B",
        lemon: "#F4D55B",
        honey: "#C8891D",
        sky: "#4D97E8",
        wicker: "#8F5C36",
        evergreen: "#2F4A35",
        ink: "#26382B",
        muted: "#5F675D",
        border: "#E8E0D0",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(38, 56, 43, 0.12)",
      },
      borderRadius: {
        soft: "2rem",
      },
    },
  },
  plugins: [],
};

export default config;