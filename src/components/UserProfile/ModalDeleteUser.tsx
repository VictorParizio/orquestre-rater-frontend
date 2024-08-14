import { ModalContainer } from "src/styles/ModalForm";
import { FormContainer } from "./style";
import styled from "styled-components";
import { ButtonDark, ButtonLight } from "../Button";
import { useModalStore } from "src/store/modalStore";
import { deleteByIdAPI } from "src/http";
import { useUserStore } from "src/store/userStore";
import { FormEvent } from "react";
import { colors } from "src/theme/colors";

const Blur = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;

  p {
    width: 35.2rem;
    margin: 2.4rem 0;
    font-size: 1.4rem;
    color: ${colors.tertiaryText}
  }
`;

const BtnCancel = styled(ButtonDark)`
  width: 17rem;
  height: 4.8rem;
  margin-right: 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const BtnConfirm = styled(ButtonLight)`
  width: 17rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

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
