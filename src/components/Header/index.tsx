import styled from "styled-components";
import logo from "@assets/Logo.svg";

import { colors } from "src/theme/colors";
import { Search } from "./components/Search";
import { ButtonDark } from "../Button";
import { useModalStore } from "src/store/modalStore";

const HeaderContainer = styled.header`
  background-color: ${colors.primaryBackground};
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
  const openLogin = useModalStore((state) => state.openLogin);

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo da Ratio" />
      <Search />
      <ButtonDark onClick={openLogin}>Login</ButtonDark>
    </HeaderContainer>
  );
};
