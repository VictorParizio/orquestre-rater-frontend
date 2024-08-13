import { FormEvent, useState } from "react";
import { InputForm } from "../InputForm";
import {
  Blur,
  CloseModal,
  Container,
  CriarConta,
  Form,
  FormContainer,
  ModalContainer,
  SendButton,
} from "../../styles/ModalForm";
import { useModalStore } from "src/store/modalStore";
import { postAPI } from "src/http";

interface ApiResponse {
  token: string;
}

export const Login: React.FC = () => {
  const { isLoginOpen, openSignup, closeModals } = useModalStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const inputList = [
    {
      textLabel: "E-mail",
      type: "email",
      name: "email",
      placeholder: "Digite seu e-mail",
      value: formData.email,
      onChange: handleChange,
    },
    {
      textLabel: "Senha",
      type: "password",
      name: "password",
      placeholder: "Digite sua senha",
      value: formData.password,
      onChange: handleChange,
    },
  ];

  if (!isLoginOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = (await postAPI("user/session", formData)) as ApiResponse;
      console.log(response);
      sessionStorage.setItem("token", response.token);
      closeModals();
      setFormData({
        email: "",
        password: "",
      });
    } catch (error: unknown) {
      console.log("Erro interno do servidor ", error);
    }
  };

  return (
    <>
      <Blur />
      <Container>
        <ModalContainer>
          <FormContainer>
            <CloseModal onClick={closeModals}>X</CloseModal>
            <h2>Acesse sua conta</h2>
            <p>Bem vindo de volta! Entre com seus dados.</p>
            <Form onSubmit={handleSubmit}>
              {inputList.map((input, index) => (
                <InputForm key={index} {...input} />
              ))}
              <SendButton>Fazer login</SendButton>
              <p>
                Não tem conta ainda?{" "}
                <CriarConta onClick={openSignup}>Criar conta</CriarConta>
              </p>
            </Form>
          </FormContainer>
        </ModalContainer>
      </Container>
    </>
  );
};
