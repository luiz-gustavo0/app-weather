import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #323232;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }



`;
