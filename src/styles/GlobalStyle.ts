import { createGlobalStyle } from "styled-components";
import { colors } from "src/theme/colors";

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
    background: ${colors.primaryBackground};
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    color: ${colors.primaryText};
  }
  
  #root {
    width: 144rem;
    max-width: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  svg {
    font-size: 2rem;
    color: ${colors.primaryText}
  }
`;
