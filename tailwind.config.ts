import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3892",
        gold: "#D4AF37",
        secondary: "#f8f9fa",
      },
      fontFamily: {
        sans: ["Nunito", "Helvetica", "Arial", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        georgia: ["'Georgia Pro'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
