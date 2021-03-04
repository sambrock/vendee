module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--primary)',
      white: 'var(--white)',
      black: 'var(--black)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}