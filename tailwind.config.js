const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            color: colors.zinc[100],
            a: { color: colors.cyan[400], '&:hover': { color: colors.cyan[300] } },
            h1: { color: colors.zinc[100] },
            h2: { color: colors.zinc[100] },
            h3: { color: colors.zinc[200] },
            blockquote: { color: colors.zinc[300] },
            code: { color: colors.pink[400] },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
