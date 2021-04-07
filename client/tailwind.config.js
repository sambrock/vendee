module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: 'var(--blue)',
      white: 'var(--white)',
      offwhite: 'var(--off-white)',
      black: 'var(--default-black)',
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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 500,
      bold: 500,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}