const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: '#a4beb8',
        'pale-pink': '#e6a195'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
