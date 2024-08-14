import { FormEvent, useEffect, useState } from "react";
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
import { ModalDeleteUser } from "./components/ModalDeleteUser";
import { useUserStore } from "src/store/userStore";
import { updateByIdAPI } from "src/http/users";

interface ApiResponse {
  updatedUser: {
    id: string;
    fullName: string;
    userName: string;
    email: string;
  };
}

export const UserProfile: React.FC = () => {
  const { isUpdateUser, openDeleteUser, closeModals } = useModalStore();
  const { userData, setUserData } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
  });

  useEffect(() => {
    if (userData && !isInitialized) {
      setFormData({
        userName: userData.userName || "",
        fullName: userData.fullName || "",
        email: userData.email || "",
      });
      setIsInitialized(true);
    }
  }, [userData, isInitialized]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateUser = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const submissionData = {
      userName: formData.userName,
      fullName: formData.fullName,
    };

    try {
      const response = (await updateByIdAPI(
        "user",
        userData!.id,
        submissionData
      )) as ApiResponse;

      setUserData(response.updatedUser);
      closeModals();
    } catch (error) {
      console.error(
        error instanceof Error
          ? error.message || "Ocorreu um erro ao atualizar os dados."
          : "Ocorreu um erro desconhecido."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    openDeleteUser();
  };

  if (!isUpdateUser) return null;

  return (
    <>
      <Blur />
      <Container>
        <ModalContainer>
          <FormContainer>
            <form onSubmit={handleUpdateUser}>
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
                    placeholder="Digite seu nome de usuário"
                    textLabel="Nome de usuário"
                    type="text"
                    value={formData.userName}
                  />

                  <InputForm
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
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
                  placeholder={formData.email}
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
                <DeleteUser onClick={handleClickDelete}>
                  Deletar conta
                </DeleteUser>
              </div>

              <SaveUpdate type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar alterações"}
              </SaveUpdate>
            </form>
          </FormContainer>
        </ModalContainer>
      </Container>
      <ModalDeleteUser />
    </>
  );
};
