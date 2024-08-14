import { useUserStore } from "src/store/userStore";
import { useState } from "react";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useModalStore } from "src/store/modalStore";
import { AccordionContainer, BetLogout, BtnProfile, BtnUpdateUser, Container } from "./style";

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
