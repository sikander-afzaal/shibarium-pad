/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        yellowGr: "linear-gradient(90deg, #FFC301 0%, #FF9B01 105.95%)",
        heroImg: 'url("/hero-bg.png")',
        heroRight:
          "linear-gradient(180deg, #FFC101 31.21%, rgba(255, 195, 1, 0) 99.06%)",
        rotatedCard: "linear-gradient(180deg, #192952 0%, #04102E 100%)",
        whiteBg:
          "linear-gradient(190.15deg, rgba(255,255,255,0.9) 62.68%, rgba(255, 255, 255, 0) 160.95%)",
        yellowStripe:
          "linear-gradient(180deg, #FFBC03 0%, #FFBC03 0.01%, rgba(255, 188, 3, 0) 100%)",
      },
      colors: {
        "primary-bg": "#041435",
        text: "#192A53",
        dark: "#121212",
        yellow: "#FFC201",
      },
    },
  },
  plugins: [],
};
