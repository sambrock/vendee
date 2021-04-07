import { createGlobalStyle } from 'styled-components';

import BarlowWoff2 from '../fonts/Barlow-Regular.woff2';
import BarlowSemiBoldWoff2 from '../fonts/Barlow-SemiBold.woff2';
import BarlowBoldWoff2 from '../fonts/Barlow-Bold.woff2';

import BarlowEot from '../fonts/Barlow-Regular.eot';
import BarlowSemiBoldEot from '../fonts/Barlow-SemiBold.eot';
import BarlowBoldEot from '../fonts/Barlow-Bold.eot';

import BarlowWoff from '../fonts/Barlow-Regular.woff';
import BarlowSemiBoldWoff from '../fonts/Barlow-SemiBold.woff';
import BarlowBoldWoff from '../fonts/Barlow-Bold.woff';

import BarlowOtf from '../fonts/Barlow-Regular.otf';
import BarlowSemiBoldOtf from '../fonts/Barlow-SemiBold.otf';
import BarlowBoldOtf from '../fonts/Barlow-Bold.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Barlow';
    src: url(${BarlowEot}) format('eot');
    src: url(${BarlowWoff2}) format('woff2'),
         url(${BarlowOtf}) format('otf'),
         url(${BarlowWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Barlow';
    src: url(${BarlowSemiBoldEot}) format('eot');
    src: url(${BarlowSemiBoldWoff2}) format('woff2'),
         url(${BarlowSemiBoldOtf}) format('otf'),
         url(${BarlowSemiBoldWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Barlow';
    src: url(${BarlowBoldEot}) format('eot');
    src: url(${BarlowBoldWoff2}) format('woff2'),
         url(${BarlowBoldOtf}) format('otf'),
         url(${BarlowBoldWoff}) format('woff');
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
    --default-black: rgba(0, 0, 0, 0.87);
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
    color: var(--default-black);
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    font-weight: 400;
    letter-spacing: 0.01071em;
    line-height: 1.3;
    background: var(--off-white);
  }

  a {
    text-decoration: none;
    color: var(--blue);
    font-weight: 600;
    transition: all 0.15s var(--easing);
  }

  .page-container {
    margin-left: 320px;
  }

  .login-container {
    background: var(--blue);
  }

  input, button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: var(--font-sans);

    &:focus {
      background: var(--black-opacity-2);
      border: none;
      outline: none;
    }
  }

  .default-border-input {
    border: 3px transparent solid;
  }

  .border-red {
    border: 3px var(--red) solid;
  }

  .apex-chart *{
    font-family: var(--font-sans) !important;
    font-weight: 500;
    color: var(--black-opacity2) !important;
    font-size: var(--fz-md) !important;
  }

  .smooth-hide {
    transition: opacity .3s ease;
  }

  .MuiDataGrid-root {
    border: none !important;
    font-family: var(--font-sans) !important;
    font-size: var(--fz-md) !important;
  }

  .MuiInputBase-root {
    font-family: var(--font-sans) !important;
    font-size: var(--fz-md) !important;
    font-weight: 500 !important;
  }

  .MuiDataGrid-root .MuiDataGrid-row.Mui-selected {
    background-color: var(--blue-opacity) !important;
  }

  .default-border {
    border: 1px solid var(--grey); 
  }

  .table-border {
    border-bottom: 1px solid var(--grey);
  }

  .inset-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .search-btn {
    background: var(--blue-opacity);
    color: var(--blue);
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: 600;
    margin-left: 12px;

    &:focus {
      background: var(--blue-opacity);
    }
  }
`;

export default GlobalStyle;