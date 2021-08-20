const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      gray: colors.blueGray,
      yellow: colors.amber,
      red: colors.red,
      fontDark: "#2F4858",
      white: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
