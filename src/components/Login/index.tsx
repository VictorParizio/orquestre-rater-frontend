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
import { useUserStore } from "src/store/userStore";
import { validateLogin, ValidationErrors } from "src/util/schemaValidateLogin";

interface ApiResponse {
  token: string;
  user: {
    id: string;
    fullName: string;
    userName: string;
    email: string;
  };
}

export const Login: React.FC = () => {
  const { isLoginOpen, openSignup, closeModals } = useModalStore();
  const { setToken, setUserData } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
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
      errorMessage: errors.email,
    },
    {
      textLabel: "Senha",
      type: "password",
      name: "password",
      placeholder: "Digite sua senha",
      value: formData.password,
      onChange: handleChange,
      errorMessage: errors.password,
    },
  ];

  if (!isLoginOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const validationErrors = validateLogin(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const response = (await postAPI("user/session", formData)) as ApiResponse;

      sessionStorage.setItem("token", response.token);
      setToken(response.token);
      setUserData(response.user);
      closeModals();
      setFormData({
        email: "",
        password: "",
      });
    } catch (error: unknown) {
      const validationErrors = {
        email: "E-mail não cadastrado",
        password: "Senha Incorreta",
      };

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setLoading(false);
        return;
      }
      console.log("Erro interno do servidor ", error);
    } finally {
      setLoading(false);
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

            <Form onSubmit={handleSubmit} noValidate>
              {inputList.map((input, index) => (
                <InputForm key={index} {...input} />
              ))}
              <SendButton>{loading ? "Enviando..." : "Fazer login"}</SendButton>

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
