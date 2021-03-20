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
      green: 'var(--green)',
      red: 'var(--red)',
      blueOpacity: 'var(--blue-opacity)',
      blueOpacity2: 'var(--blue-opacity-2)',
      blackOpacity: 'var(--black-opacity)',
      blackOpacity2: 'var(--black-opacity-2)',
      whiteOpacity: 'var(--white-opacity)',
      greenOpacity: 'var(--green-opacity)',
      redOpacity: 'var(--red-opacity)',
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
      main: 'var(--fz-main)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}