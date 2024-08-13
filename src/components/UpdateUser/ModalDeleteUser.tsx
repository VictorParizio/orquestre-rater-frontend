import { ModalContainer } from "src/styles/ModalForm";
import { FormContainer } from "./style";
import styled from "styled-components";
import { ButtonDark, ButtonLight } from "../Button";
import { useModalStore } from "src/store/modalStore";

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
  if (!isDeleteUser) return null;

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
              <BtnConfirm onClick={closeModals}>Confirmar</BtnConfirm>
            </div>
          </FormContainer>
        </ModalContainer>
      </Container>
    </>
  );
};
