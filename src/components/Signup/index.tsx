import { useState } from "react";
import styled from "styled-components";
import { ModalForm } from "../ModalForm";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

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
      name: "name",
      placeholder: "Digite seu nome",
      value: formData.name,
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
      textLabel: "Confirmar Senha",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirme sua senha",
      value: formData.confirmPassword,
      onChange: handleChange,
    },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      {isModalOpen && (
        <ModalForm
          inputList={inputList}
          btnAction="Cadastrar"
          legendLink="Já tem uma conta?"
          linkRedirect="Fazer login"
          onClose={closeModal}
        />
      )}
    </Container>
  );
};
