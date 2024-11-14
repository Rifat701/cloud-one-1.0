/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      screens: {
        '2xl': '1290px',
      },
    },
    extend: {
      margin: {
        10: '10px',
      },
      padding: {
        10: '10px',
      },
      colors: {
        primary: '#fff',
      },
    },
    fontSize: {
      xs: '12px',
    },

    extend: {
      keyframes: {
        fillBarsOne: {
          '0%': { maxWidth: '0%' },
          '100%': { maxWidth: '65%' },
        },
        fillBarsTwo: {
          '0%': { maxWidth: '0%' },
          '100%': { maxWidth: '75%' },
        },
      },
      animation: {
        fillBarsOne: 'fillBarsOne 2.5s forwards',
        fillBarsTwo: 'fillBarsTwo 2.5s forwards',
      },
    },
  },
  plugins: [require('daisyui')],
};
