import { ModalContainer } from "src/styles/ModalForm";
import { useModalStore } from "src/store/modalStore";
import { useUserStore } from "src/store/userStore";
import { FormEvent } from "react";
import { deleteByIdAPI } from "src/http/users";
import { Blur, BtnCancel, BtnConfirm, Container, FormContainer } from "./style";

export const ModalDeleteUser = () => {
  const { isDeleteUser, closeModals, closeModalConfirm } = useModalStore();
  const { userData, clearUserData } = useUserStore();

  if (!isDeleteUser) return null;

  const handleDeleteUser = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await deleteByIdAPI("user", userData!.id);
      closeModals();
      clearUserData();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message || "Ocorreu um erro ao atualizar os dados.");
      } else {
        console.log("Ocorreu um erro desconhecido.");
      }
    }
  };

  return (
    <>
      <Blur />
      <Container>
        <ModalContainer>
          <FormContainer>
            <h3>Encerramento da conta</h3>
            <p>
              Tem certeza de que deseja deletar sua conta? Esta ação é
              irreversível e todos os seus dados serão permanentemente
              excluídos.
            </p>
            <div>
              <BtnCancel onClick={closeModalConfirm}>Cancelar</BtnCancel>
              <BtnConfirm onClick={handleDeleteUser}>Confirmar</BtnConfirm>
            </div>
          </FormContainer>
        </ModalContainer>
      </Container>
    </>
  );
};
