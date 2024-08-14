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
import {
  validateSignup,
  ValidationErrors,
} from "src/util/schemaValidateSignup";
import { useUserStore } from "src/store/userStore";
import { postAPI } from "src/http/users";

interface ApiResponse {
  token: string;
  newUser: {
    id: string;
    fullName: string;
    userName: string;
    email: string;
  };
}

export const Signup: React.FC = () => {
  const { isSignupOpen, openLogin, closeModals } = useModalStore();
  const { setToken, setUserData } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
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
      errorMessage: errors.fullName,
    },
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
    {
      textLabel: "Confirmar senha",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirme sua senha",
      value: formData.confirmPassword,
      onChange: handleChange,
      errorMessage: errors.confirmPassword,
    },
  ];

  if (!isSignupOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const validationErrors = validateSignup(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const submissionData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = (await postAPI(
        "user/register",
        submissionData
      )) as ApiResponse;

      sessionStorage.setItem("token", response.token);
      setToken(response.token);
      setUserData(response.newUser);
      closeModals();
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
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
            <h2>Crie sua conta</h2>
            <p>Insira seus dados para completar o cadastro.</p>
            
            <Form onSubmit={handleSubmit} noValidate>
              {inputList.map((input, index) => (
                <InputForm key={index} {...input} />
              ))}
              <SendButton>{loading ? "Enviando..." : "Cadastrar"}</SendButton>

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
