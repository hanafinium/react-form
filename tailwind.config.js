const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      blue: colors.sky,
      gray: colors.blueGray,
      green: colors.green,
      yellow: colors.amber,
      fontDark: "#2F4858",
      white: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
