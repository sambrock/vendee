import { createGlobalStyle } from 'styled-components';

import Barlow from '../fonts/Barlow-Regular.woff2';
import BarlowSemiBold from '../fonts/Barlow-SemiBold.woff2';
import BarlowBold from '../fonts/Barlow-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Barlow';
    src: url(${Barlow}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Barlow';
    src: url(${BarlowSemiBold}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Barlow';
    src: url(${BarlowBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  
  :root {
    --blue: #4A4FF6;
    --blue2: #9598fA;
    --black: #010300;
    --white: #FFFFFF;
    --off-white: #F2F2F2;
    --grey: #e3e3e3;
    --green: #00B300;
    --red: #FF3333;
    --black-opacity: rgba(0,0,0,.65);
    --black-opacity-2: rgba(0,0,0,.05);
    --blue-opacity: rgba(74,79,246,.15);
    --blue-opacity-2: rgba(74,79,246,.55);
    --white-opacity: rgba(255,255,255,.65);
    --green-opacity: rgba(0,179,0,.15);
    --red-opacity: rgba(255,51,51,.15);
    --font-sans: 'Barlow', sans-serif;
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 34px;
    --fz-main: 48px;
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
    font-size: var(--fz-lg);
    line-height: 1.3;
    background: var(--off-white);
  }

  a {
    text-decoration: none;
    color: var(--blue);
    font-weight: 600;
    transition: all 0.15s var(--easing);
  }

  .App {
    display: grid;
    grid-template-columns: 320px auto;
    grid-template-rows: 100px auto;
  }

  .border-red {
    border: 1px red solid;
  }

  .apex-chart *{
    font-family: var(--font-sans) !important;
    font-weight: 500;
    color: var(--black-opacity2) !important;
    font-size: var(--fz-md) !important;
  }

  .smooth-hide {
    transition: opacity .8s ease-out;
  }

  .MuiDataGrid-root {
    border: none !important;
  }

  .MuiDataGrid-root .MuiDataGrid-row.Mui-selected {
    background-color: var(--blue-opacity) !important;
  }
`;

export default GlobalStyle;