const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.js'],
    options: {
      safelist: ['dark']
    }
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        orange: colors.orange,
        pink: colors.pink,
        red: colors.red,
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
