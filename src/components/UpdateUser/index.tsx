import { useState } from "react";
import { Blur, Container, ModalContainer } from "../../styles/ModalForm";
import { InputForm } from "../InputForm";
import { useModalStore } from "src/store/modalStore";
import {
  CloseModal,
  DeleteUser,
  FieldEmail,
  FormContainer,
  SaveUpdate,
  UpdateField,
} from "./style";
import { ModalDeleteUser } from "./ModalDeleteUser";

export const UpdateUser: React.FC = () => {
  const { isUpdateUser, openDeleteUser, closeModals } = useModalStore();

  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isUpdateUser) return null;

  return (
    <>
      <Blur />
      <Container>
        <ModalContainer>
          <FormContainer>
            <header>
              <h2>Preferências da conta</h2>
              <CloseModal onClick={closeModals}>x</CloseModal>
            </header>

            <div>
              <div>
                <h3>Usuário</h3>
                <p>Faça a edição do seu nome de usuário e de seu nome.</p>
              </div>
              <UpdateField>
                <InputForm
                  name="userName"
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  textLabel="Nome de usuário"
                  type="text"
                  value={formData.userName}
                />

                <InputForm
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  textLabel="Nome Completo"
                  type="text"
                  value={formData.fullName}
                />
              </UpdateField>
            </div>

            <FieldEmail>
              <div>
                <h3>E-mail</h3>
                <p>O e-mail não pode ser editado, apenas visualizado.</p>
              </div>
              <InputForm
                name="email"
                onChange={handleChange}
                placeholder={"username@email.com"}
                textLabel="E-mail"
                type="email"
                value={formData.email}
                disabled={true}
              />
            </FieldEmail>

            <div>
              <div>
                <h3>Encerramento da conta</h3>
                <p>
                  Ao deletar sua conta, todos os seus dados serão
                  permanentemente excluídos. Esta ação é irreversível.
                </p>
              </div>
              <DeleteUser onClick={openDeleteUser}>Deletar conta</DeleteUser>
            </div>

            <SaveUpdate onClick={closeModals}>Salvar alterações</SaveUpdate>
          </FormContainer>
        </ModalContainer>
      </Container>
      <ModalDeleteUser />
    </>
  );
};
