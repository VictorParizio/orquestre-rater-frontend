import styled from "styled-components";
import { ButtonDark } from "../Button";
import { colors } from "src/theme/colors";

export const AccordionContainer = styled.div`
  position: relative;
`;

export const Container = styled.div`
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

export const BtnUpdateUser = styled(ButtonDark)`
  width: 15rem;
  height: 4rem;
  padding: 8px;
  text-align: left;
  box-shadow: none;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BetLogout = styled(BtnUpdateUser)`
  margin-top: 8px;
`;

export const BtnProfile = styled(BtnUpdateUser)`
  width: 15.8rem;
  height: 4rem;
  padding: 0 1.2rem;
  text-align: left;
  box-shadow: none;
  justify-content: space-between;
`;