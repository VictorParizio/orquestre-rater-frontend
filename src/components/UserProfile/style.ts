import { colors } from "src/theme/colors";
import styled from "styled-components";
import { Button, ButtonLight } from "../Button";

export const FormContainer = styled.div`
  background: ${colors.primaryBackground};
  margin: 0 auto;
  padding: 2.4rem;
  border: 3px solid ${colors.primaryInteractive};
  border-radius: 2.4rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    header {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-size: 2.4rem;
      color: ${colors.secondaryText};
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 4px;
      color: ${colors.secondaryText};
    }

    p {
      font-size: 1.4rem;
      color: ${colors.tertiaryText};
    }

    label {
      margin-top: 1.2rem;
    }

    input {
      width: 37rem;
      max-width: 36vw;
    }
  }

  @media (max-width: 864px) {
    width: 80rem;
    max-width: 80vw;
    form {
      gap: 1.2rem;

      h2 {
        font-size: 2rem;
      }

      div > h3 {
        font-size: 1.8rem;
      }

      h3 + p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 450px) {
    border-radius: 2.4rem 2.4rem 0 0;
  }
`;

export const CloseModal = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  background: none;
  color: ${colors.secondaryText};
  font-size: 2rem;
  cursor: pointer;
`;

export const UpdateField = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 678px) {
    flex-direction: column;
    gap: 0;

    label + input {
      max-width: 100%;
    }
  }
`;

export const FieldEmail = styled.div`
  input::placeholder {
    color: ${colors.primarySolid};
  }

  @media (max-width: 678px) {
    label + input {
      max-width: 100%;
    }
  }
`;

export const DeleteUser = styled(Button)`
  margin-top: 1.2rem;
  height: 4.8rem;
  width: 12.9rem;
  background: #3d1015;
  color: #e11d48;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const SaveUpdate = styled(ButtonLight)`
  margin-top: 1.2rem;
  height: 4.8rem;
  width: 18.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: auto;

  @media (max-width: 678px) {
    margin-top: 0;
  }

  @media (max-width: 567px) {
    width: 100%;
  }
`;
