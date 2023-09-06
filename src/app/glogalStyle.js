'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
  body {
    font-family: 'Nunito', sans-serif;
  }

`;

export default GlobalCSS;
