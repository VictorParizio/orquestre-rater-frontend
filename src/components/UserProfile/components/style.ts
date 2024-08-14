import { ButtonDark, ButtonLight } from "../../Button";
import styled from "styled-components";
import { colors } from "src/theme/colors";

export const Blur = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const Container = styled.section`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;

  p {
    width: 35.2rem;
    margin: 2.4rem 0;
    font-size: 1.4rem;
    color: ${colors.tertiaryText}
  }
`;

export const BtnCancel = styled(ButtonDark)`
  width: 17rem;
  height: 4.8rem;
  margin-right: 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const BtnConfirm = styled(ButtonLight)`
  width: 17rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`;