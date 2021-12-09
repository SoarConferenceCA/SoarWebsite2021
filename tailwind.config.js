const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: '#a4beb8',
        'pale-pink': '#dd7766',
        'weird-grey': '#e5e5e5',
        'odd-green': '#8fb0a9'
      },
      backgroundImage: {
        'unknown': "url('/assets/unknown.png')"
      },
      width: {
        'w360': '360px',
        'w110per': '110%'
      },
      height: {
        'ab10': '480px',
        'ab4': '360px',
        'lb4': 'auto',
        '320': '320px'
      },
      margin: {
        '-100': '-100%'
      },
      maxWidth: {
        'w370': '370px',
        'w280': '280px'
      },
      maxHeight: {
        'h320': '240px',
        'h440': '300px'
      },
      inset: {
        '35': '35px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
