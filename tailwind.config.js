const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['PT Sans', 'sans-serif'],
      serif: ['PT Serif', 'serif'],
      mono: ['PT Mono', 'mono'],
    },
    extend: {
      colors: {
        violet: colors.violet,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
