import styled from "styled-components";
import { colors } from "src/theme/colors";
import { ButtonDark } from "../components/Button";

export const Container = styled.section`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const Blur = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  background: ${colors.primaryBackground};
  margin: 0 auto;
  padding: 4.8rem;
  border: 3px solid ${colors.primaryInteractive};
  border-radius: 2.4rem;
  position: relative;

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    color: ${colors.secondaryText};
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    color: ${colors.tertiaryText};
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 38.1rem;
  margin-top: 2.4rem;
`;

export const SendButton = styled(ButtonDark)`
  height: 4.8rem;
  padding: 1.2rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const CloseModal = styled(ButtonDark)`
  padding: 0.6rem 1rem;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;

export const CriarConta = styled.button`
  color: ${colors.secondaryText};
  background: none;
  border: none;
  cursor: pointer;
`;
