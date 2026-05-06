/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1445px",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        jura: ["var(--font-jura)", "sans-serif"],
        exo2: ["var(--font-exo2)", "sans-serif"],
      },
      colors: {
        background: "#07080e",
        foreground: "#c4d0e0",
        card: "#181818",

        brand: {
          DEFAULT: "#22d3ee",
          dark: "#164e63",
          teal: "#2dd4bf",
          "teal-light": "#99f6e4",
        },

        subtle: {
          DEFAULT: "#8898b0",
          light: "#a8b8cc",
          dim: "#454560",
        },

        divider: "#33353F",
      },
    },
  
  },
  plugins: [],
}
