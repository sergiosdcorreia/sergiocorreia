const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-orange-1": "#FF824A",
        "brand-orange-2": "#DC573D",
        "brand-white": "#E0D9DA",
        "brand-light-grey": "#AAAAAA",
        "brand-dark-grey": "#282B30",
        "brand-black": "#191A1C",
      },
    },
  },
  plugins: [],
};
