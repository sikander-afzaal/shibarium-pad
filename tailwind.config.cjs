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
      },
      colors: {
        "primary-bg": "#041435",
        dark: "#121212",
      },
    },
  },
  plugins: [],
};
