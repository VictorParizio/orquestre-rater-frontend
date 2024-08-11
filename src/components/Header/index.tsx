import styled from "styled-components";
import logo from "../../assets/Logo.svg";

import { colors } from "../../theme/colors";
import { ButtonDark } from "../Button";
import { Search } from "./components/Search";

export const HeaderContainer = styled.header`
  background-color: ${colors.primaryBackground};
  width: 144rem;
  max-width: 100vw;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div + button {
    height: 4rem;
    width: 12.8rem;
    font-weight: 600;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo da Ratio" />
      <Search />
      <ButtonDark>Login</ButtonDark>
    </HeaderContainer>
  );
};
