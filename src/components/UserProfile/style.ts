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
    }
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

  input {
    width: 37rem;
  }
`;

export const FieldEmail = styled.div`
  input::placeholder {
    color: ${colors.primarySolid};
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
`;
