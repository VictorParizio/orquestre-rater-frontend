import styled from "styled-components";
import { colors } from "src/theme/colors";
import { ButtonMedium } from "src/components/Button";

export const SpotlightContainer = styled.figure`
  position: relative;
  width: 100rem;
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 4.8rem;
  left: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const Avaliation = styled(ButtonMedium)`
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

export const InforContainer = styled.header`
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

export const Raters = styled.p`
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

export const Infos = styled.div`
  display: flex;
  align-items: center;

  p:not(:first-child)::before {
    content: "•";
    margin-right: 8px;
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  max-width: 57%;
  line-height: 22.4px;
  margin-bottom: 3.6rem;
`;