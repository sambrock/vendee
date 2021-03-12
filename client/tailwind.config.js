module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: 'var(--blue)',
      white: 'var(--white)',
      offwhite: 'var(--off-white)',
      black: 'var(--black)',
      grey: 'var(--grey)',
      blueOpacity: 'var(--blue-opacity)',
      blackOpacity: 'var(--black-opacity)',
      blackOpacity2: 'var(--black-opacity-2)',
      whiteOpacity: 'var(--white-opacity)',
    },
    fontSize: {
      xxs: 'var(--fz-xxs)',
      xs: 'var(--fz-xs)',
      sm: 'var(--fz-sm)',
      md: 'var(--fz-md)',
      lg: 'var(--fz-lg)',
      xl: 'var(--fz-xl)',
      xxl: 'var(--fz-xxl)',
      heading: 'var(--fz-heading)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}