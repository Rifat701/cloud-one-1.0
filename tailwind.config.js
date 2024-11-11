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
  },
  plugins: [require('daisyui')],
};
