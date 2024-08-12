import { useEffect, useRef } from "react";
import styled from "styled-components";
import { InputForm } from "../InputForm";
import { ButtonDark } from "../Button";
import { colors } from "src/theme/colors";

const ModalContainer = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
`;

const FormContainer = styled.dialog`
  background: ${colors.primaryBackground};
  margin: 0 auto;
  padding: 4.8rem;
  border: 3px solid ${colors.primaryInteractive};
  border-radius: 2.4rem;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 38.1rem;
  margin-top: 2.4rem;

  p {
    color: ${colors.tertiaryText};
    a {
      color: ${colors.secondaryText};
    }
  }
`;

const SendButton = styled(ButtonDark)`
  height: 4.8rem;
  width: 10.1rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 600;
`;

type InputField = {
  textLabel: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type ModalFormProps = {
  inputList: InputField[];
  btnAction: string;
  legendLink: string;
  linkRedirect: string;
  onClose: () => void;
};

export const ModalForm: React.FC<ModalFormProps> = ({
  inputList,
  btnAction,
  legendLink,
  linkRedirect,
  onClose,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <ModalContainer>
      <FormContainer ref={modalRef} open>
        <h2>Crie sua conta</h2>
        <p>Insira seus dados para completar o cadastro.</p>
        <Form>
          {inputList.map((input, index) => (
            <InputForm key={index} {...input} />
          ))}
          <SendButton>{btnAction}</SendButton>
          <p>
            {legendLink} <a href="">{linkRedirect}</a>
          </p>
        </Form>
      </FormContainer>
    </ModalContainer>
  );
};
