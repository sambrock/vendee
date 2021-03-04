import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #4A4FF6;
    --black: #010300;
    --white: #F2F2F2;
    --font-sans: 'Arial', sans-serif;
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 34px;
    --easing: cubic-bezier(0.43, 0.13, 0.23, 0.96);
    --transition: all 0.25s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scrollbar-width: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--black);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
    background: var(--priumar);
  }
`;

export default GlobalStyle;