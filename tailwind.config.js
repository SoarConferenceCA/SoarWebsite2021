const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: '#a4beb8',
        'pale-pink': '#e6a195',
        'weird-grey': '#f7f6f4',
        'odd-green': '#a4beb8'
      },
      backgroundImage: {
        'unknown': "url('/assets/unknown.png')"
      },
      width: {
        'w360': '360px'
      },
      height: {
        'ab10': '480px',
        'ab4': '360px',
        'lb4': 'auto',
        '320': '320px'
      },
      margin: {
        '-100': '-100%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
