const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pale-pink': '#dd7766',
        'weird-grey': '#e5e5e5',
        'odd-green': '#8fb0a9',

        'primary-dull': '#920019ab',
        'primary': '#920019cc',
        'primary-no-alpha': '#920019',
        'accent': '#cc975acc',
        'accent-no-alpha': '#cc975a',
      },
      backgroundImage: {
        'unknown': "url('/assets/unknown.png')",
        'troll': "url('/assets/troll.jpg')"
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
        'h320': '300px',
        'h440': '500px'
      },
      inset: {
        '35': '35px'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover']
    },
  },
  plugins: [],
}
