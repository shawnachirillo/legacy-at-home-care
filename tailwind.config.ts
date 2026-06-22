import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EB",
        linen: "#EFE7D8",
        sunlight: "#E6D19A",
        sage: "#A6B09B",
        wood: "#8C6A4A",
        evergreen: "#4B5A4B",
        ink: "#344033",
        muted: "#5F675D"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(52, 64, 51, 0.14)"
      },
      borderRadius: {
        soft: "2rem"
      }
    }
  },
  plugins: []
};

export default config;