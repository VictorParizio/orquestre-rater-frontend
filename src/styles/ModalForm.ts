import styled, { keyframes } from "styled-components";
import { colors } from "src/theme/colors";
import { ButtonDark } from "../components/Button";

const slideUp = keyframes`
  from {
    transform: translateY(100%); 
  }
  to {
    transform: translateY(0); 
  }
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

export const Container = styled.section`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 450px) {
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
    height: auto;
    animation: ${slideUp} 0.4s ease-out forwards;
  }
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

  @media (max-width: 550px) {
    width: 100%;
    padding: 2.4rem;

    h2 {
      font-size: 2.4rem;
    }

    p,
    label {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 450px) {
    border-radius: 2.4rem 2.4rem 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 38.1rem;
  margin-top: 2.4rem;

  @media (max-width: 450px) {
    max-width: 100%;
    flex-grow: 1;
  }
`;

export const SendButton = styled(ButtonDark)`
  height: 4.8rem;
  width: 10.9rem;
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
