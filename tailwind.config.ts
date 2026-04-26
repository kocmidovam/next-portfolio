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
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
      },
      colors: {
        background: "#07080e",
        foreground: "#f0f0f8",
        card: "#181818",

        brand: {
          DEFAULT: "#22d3ee",
          dark: "#164e63",
          teal: "#2dd4bf",
          "teal-light": "#99f6e4",
        },

        subtle: {
          DEFAULT: "#ADB7BE",
          light: "#dbe2f8",
          dim: "#454560",
        },

        divider: "#33353F",
      },
    },
  },
  plugins: [],
}
