import styled from "styled-components";
import logo from "@assets/Logo.svg";

import { Search } from "./components/Search";
import { ButtonDark } from "../Button";
import { useModalStore } from "src/store/modalStore";
import { useUserStore } from "src/store/userStore";
import { AccordionProfile } from "../AccordionProfile";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  gap: 1rem;

  div + button {
    height: 4rem;
    width: 12.8rem;
    font-weight: 600;
  }

  @media (max-width: 578px) {
    flex-direction: column;
    padding: 2.4rem 1.6rem;
    align-items: start;

    div + button {
      position: absolute;
      top: 2.4rem;
      right: 1.6rem;
    }
  }
`;

export const Header = () => {
  const { openLogin } = useModalStore();
  const { userData } = useUserStore();

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo da Ratio" />
      <Search />
      {userData ? (
        <AccordionProfile></AccordionProfile>
      ) : (
        <ButtonDark onClick={openLogin}>Login</ButtonDark>
      )}
    </HeaderContainer>
  );
};
