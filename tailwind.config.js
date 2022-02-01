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

        'si-grey': '#414141',
        'si-maroon': '#611D1D',
        'si-dyellow': '#DFC156',
        'si-worange': '#CC975A',
        'si-beige': '#DFD7CA',
        'si-lime': '#8CA985',
        'si-lpink': '#F38282',
        'si-green': '#284F2A',
        'si-beiger': '#CCC1B2',

        'si-purple': '#D6DAFF',
        'si-lpurple': '#E7EFFF',
        'si-dpurple': '#B6C1D7',
        'si-dmaroon': '#611D1D',

        'si-lgreen': '#A8BAA1',
        'si-npurple': '#BDA9C3',
        'si-pink': '#E38A90',
        'si-blue': '#BBD3D0',
        'si-yellow': '#F5DC80',

        'si-myellow': '#EFDD81',
        'si-dpink': '#DC5F67',
        'si-cyan': '#C0E1DC',
        'si-mgreen': '#A5BF9C',
        'si-bgrey': '#333333',

        'si-tpink': '#EDAFAF',

        'opaquish': '#44434255',
        'si-oblue': '#002c30',
      },
      dropShadow: {
        'pink-tl': '-15px -15px 1px #F38282',
        'pink-tr': '15px -15px 0px #F38282',
        'pink-bl': '-15px 15px 0px #F38282',
        'pink-br': '15px 15px 0px #F38282',
        'green-tl': '-15px -15px 0px #234B1F',
        'green-tr': '15px -15px 0px #234B1F',
        'green-bl': '-15px 15px 0px #234B1F',
        'green-br': '15px 15px 0px #234B1F',
        'black-br': '7px 7px 5px #1e1e1e',
      },
      scale: {
        '170': '1.7',
        '250': '2.5'
      },
      backgroundImage: {
        'unknown': "url('/assets/unknown.png')",
        'troll': "url('/assets/troll.jpg')",
        'superfun': "url('/assets/previews/2019_picture_16.jpg')",
      },
      width: {
        'w360': '360px',
        'w110per': '110%',
        'w95': '95%',
        '100vw': '100vw',
        '3/4vw': '75vw',
        '1/4vw': '25vw',
        '1/2vw': '50vw',
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
        'w280': '280px',
        'w420': '420px',
      },
      maxHeight: {
        'h320': '300px',
        'h440': '500px'
      },
      inset: {
        '35': '35px'
      },
      fontFamily: {
        serif: [
          'Taviraj'
        ],
        nun: [ 'Nunito' ],
        ara: [ 'Arapey '],
        spar: [ 'Spartan' ],
        int: [ 'Inter' ],
        libre: [ 'Libre Baskerville' ],
        tavi: [ 'Taviraj' ],
        fat: [ 'Abril Fatface', 'Arapey' ],
        lato: [ 'Lato', 'Spartan' ]
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
