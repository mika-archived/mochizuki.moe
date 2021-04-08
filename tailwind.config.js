const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,tx,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lilac: "#C99DC9",
        "wild-sand": "#F4F5F7",
      }
    },
  },
  variants: {
    extend: {
      textColor: ["first-letter"]
    },
  },
  plugins: [
    plugin(function({addVariant, e}) {
      addVariant("first-letter", ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          return `.${e(`first-letter${separator}${className}`)}:first-letter`
        })
      })
    }),
  ],
}
