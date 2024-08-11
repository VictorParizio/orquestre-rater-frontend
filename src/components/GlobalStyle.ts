import { createGlobalStyle } from "styled-components";
import { colors } from "../theme/colors";

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
    font-family: "Inter", sans-serif;
    background: ${colors.secondaryBackground};
    background: white;
    color: ${colors.primaryText};
    font-size: 1.6rem;
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
