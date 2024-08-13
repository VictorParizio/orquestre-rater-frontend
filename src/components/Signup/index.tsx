import { FormEvent, useState } from "react";
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
import { InputForm } from "../InputForm";
import { useModalStore } from "src/store/modalStore";
import { postAPI } from "src/http";
import { validateInput } from "src/util/schemaValidate";

interface ApiResponse {
  token: string;
}

export const Signup: React.FC = () => {
  const { isSignupOpen, openLogin, closeModals } = useModalStore();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      textLabel: "Nome Completo",
      type: "text",
      name: "fullName",
      placeholder: "Digite seu nome",
      value: formData.fullName,
      onChange: handleChange,
    },
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
    {
      textLabel: "Confirmar senha",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirme sua senha",
      value: formData.confirmPassword,
      onChange: handleChange,
    },
  ];

  if (!isSignupOpen) return null;

  const { fullName, email, password } = formData;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("A senha e a confirmação da senha devem ser iguais.");
    }

    const submissionData = { fullName, email, password };

    try {
      validateInput(submissionData);

      const response = (await postAPI(
        "user/register",
        submissionData
      )) as ApiResponse;
      console.log(response);
      sessionStorage.setItem("token", response.token);
      closeModals();
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            <h2>Crie sua conta</h2>
            <p>Insira seus dados para completar o cadastro.</p>
            <Form onSubmit={handleSubmit}>
              {inputList.map((input, index) => (
                <InputForm key={index} {...input} />
              ))}
              <SendButton>Cadastrar</SendButton>
              <p>
                Já tem uma conta?{" "}
                <CriarConta onClick={openLogin}>Fazer login</CriarConta>
              </p>
            </Form>
          </FormContainer>
        </ModalContainer>
      </Container>
    </>
  );
};
