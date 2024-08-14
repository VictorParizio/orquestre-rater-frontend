import styled from "styled-components";
import { ButtonDark } from "../Button";
import { useUserStore } from "src/store/userStore";
import { useState } from "react";
import { colors } from "src/theme/colors";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useModalStore } from "src/store/modalStore";

const AccordionContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  z-index: 1;
  width: 15.8rem;
  height: 9.6rem;
  border-radius: 1.6rem;
  padding: 4px;
  background: ${colors.primaryInteractive};
`;

const BtnUpdateUser = styled(ButtonDark)`
  width: 15rem;
  height: 4rem;
  padding: 8px;
  text-align: left;
  box-shadow: none;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const BetLogout = styled(BtnUpdateUser)`
  margin-top: 8px;
`;

const BtnProfile = styled(BtnUpdateUser)`
  width: 15.8rem;
  height: 4rem;
  padding: 0 1.2rem;
  text-align: left;
  box-shadow: none;
  justify-content: space-between;
`;

export const AccordionProfile = () => {
  const { openUpdateUser } = useModalStore();
  const { userData, clearUserData } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickUpdate = () => {
    openUpdateUser();
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    clearUserData();
    sessionStorage.removeItem("token");
  };

  return (
    <AccordionContainer>
      <BtnProfile onClick={handleClick}>
        {userData!.userName} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BtnProfile>

      {isOpen && (
        <Container>
          <BtnUpdateUser onClick={handleClickUpdate}>
            <LuUser2 /> Perfil
          </BtnUpdateUser>
          <BetLogout onClick={handleLogout}>
            <LuLogOut /> Desconectar
          </BetLogout>
        </Container>
      )}
    </AccordionContainer>
  );
};
