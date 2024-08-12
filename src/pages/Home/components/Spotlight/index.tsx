import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";

import { ButtonMedium } from "src/components/Button";
import { colors } from "src/theme/colors";
import { BtnTrailer } from "src/components/BtnTrailer";
import { Thumbnail } from "src/components/Thumbnail";

import thumbnail from "@assets/thumbnail.jpg";

const SpotlightContainer = styled.figure`
  position: relative;
  width: 100rem;
`;

const Caption = styled.figcaption`
  position: absolute;
  bottom: 4.8rem;
  left: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Avaliation = styled(ButtonMedium)`
  height: 3.6rem;
  width: 16.7rem;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.4rem;
  }
`;

const InforContainer = styled.header`
  display: flex;
  align-items: center;

  div {
    display: flex;
    gap: 1.2rem;

    p,
    span {
      color: ${colors.tertiaryText};
    }
  }
`;

const Raters = styled.p`
  svg {
    font-size: 2.4rem;
    color: #eab308;
    margin-right: 8px;
  }

  font-size: 2rem;
  font-weight: 500;
  margin-right: 2.4rem;

  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 1.4rem;
    color: ${colors.tertiaryText};
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: center;

  p:not(:first-child)::before {
    content: "•";
    margin-right: 8px;
    font-size: 2rem;
  }
`;

const Description = styled.p`
  max-width: 57%;
  line-height: 22.4px;
  margin-bottom: 3.6rem;
`;

export const Spotlight = () => {
  return (
    <SpotlightContainer>
      <Thumbnail src={thumbnail} />
      <Caption>
        <Avaliation>
          <LuFlame />
          <p>Em destaque</p>
        </Avaliation>
        <Title>Deadpool & Wolverine</Title>
        <InforContainer>
          <Raters>
            <FaStar />
            8.2 <span>| 120mil</span>
          </Raters>
          <Infos>
            <p>2h 8m</p>
            <p>Comedy, Action, Adventure, Superhero...</p>
            <p>2024</p>
          </Infos>
        </InforContainer>
        <Description>
          Deadpool recebe uma oferta da Autoridade de Variância Temporal para se
          juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta
          uma variante do Wolverine para salvar seu universo da extinção.
        </Description>
        <BtnTrailer href="" type={"large"} />
      </Caption>
    </SpotlightContainer>
  );
};
