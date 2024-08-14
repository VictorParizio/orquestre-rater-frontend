import styled from "styled-components";
import { Carousel } from "../Carousel";
import { ButtonMedium } from "../Button";
import { LuClapperboard } from "react-icons/lu";
import { colors } from "src/theme/colors";
import { useModalStore } from "src/store/modalStore";

const Empyt = styled.div`
  height: 20.4rem;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${colors.secondaryText};

  svg {
    font-size: 4.8rem;
  }

  h3,
  p {
    font-size: 2.4rem;
    text-align: center;
  }
`;

const Login = styled(ButtonMedium)`
  font-weight: 500;
  padding: 1.2rem 2.4rem;
`;

export const WatchCarousel = () => {
  const { openLogin } = useModalStore();

  return (
    <Carousel title="Filmes assistidos">
      <Empyt>
        <LuClapperboard />
        <div>
          <h3>Ops, nenhum filme avaliado ainda.</h3>
          <p>Que tal adicionar um?</p>
        </div>
        <Login onClick={openLogin}>Fazer login</Login>
      </Empyt>
    </Carousel>
  );
};
