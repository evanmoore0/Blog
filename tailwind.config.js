/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        anta: ['"Anta"', ...defaultTheme.fontFamily.sans],
        exo: ["Exo 2", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  plugins: [require('@tailwindcss/typography'), daisyui],

  daisyui: {
    themes: [
      "cupcake",
      "bumblebee",
      "emerald",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      "luxury"
    ],
  },

};
