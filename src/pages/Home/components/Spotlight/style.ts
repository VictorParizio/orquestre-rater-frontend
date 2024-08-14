import styled from "styled-components";
import { colors } from "src/theme/colors";
import { ButtonMedium } from "src/components/Button";

export const SpotlightContainer = styled.figure`
  position: relative;
  height: 82.6rem;
  max-height: 100%;
  width: 100rem;
  max-width: 100%;

  @media (max-width: 1060px) {
    height: 60rem;
    max-height: 100%;
  }

  @media (max-width: 800px) {
    height: 40rem;
    max-height: 100%;
  }
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 4.8rem;
  left: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 800px) {
    top: 0;
    left: 0;
    padding: 1.2rem;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
  @media (max-width: 673px) {
    font-size: 1.6rem;
  }
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

  @media (max-width: 800px) {
    height: 3.6rem;
    width: 3.6rem;

    p {
      display: none;
    }

    svg {
      margin-right: 0;
    }
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

  @media (max-width: 1060px) {
    align-items: start;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    div {
      display: none;
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

  @media (max-width: 800px) {
    position: absolute;
    top: 1.2rem;
    left: 5.4rem;

    background: #eeeeee33;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 8px ${colors.primaryBackground};
    border-radius: 8px;
    padding: 0.6rem 0.8rem;

    svg {
      font-size: 2rem;
      margin-right: 0px;
    }

    span {
      display: none;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  max-width: 60%;
  flex-wrap: wrap;
  line-height: 1rem;
  margin: 1.8rem 0;

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

  @media (max-width: 800px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 90%;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 673px) {
    font-size: 1.2rem;
    line-height: 16.8px;
    color: ${colors.tertiaryText};
    margin: 0.6rem 0;
  }
`;
