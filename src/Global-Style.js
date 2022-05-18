import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #e5e5e5;
    --black: #1a1a1a;
    --primary: #008fcc;
    --second: #f0a500;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--black);
    /* padding: 10px 50px; */
  }
`;
