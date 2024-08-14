import styled from "styled-components";
import { ButtonMedium } from "src/components/Button";

export const ListItem = styled.li`
  display: flex;
  flex: 1;
  min-width: 32.8rem;
`;

export const Card = styled.figure`
  width: 100%;
  height: 25.4rem;
  position: relative;

  figcaption {
    position: absolute;
    top: 0;
    height: 100%;
    padding: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 12px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
`;

export const RaterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Raters = styled.div`
  display: flex;
  background: #eeeeee33;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.4rem 0.6rem;
  border-radius: 8px;

  & > svg {
    font-size: 2rem;
    color: #eab308;
    margin-right: 4px;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const Favorite = styled(ButtonMedium)`
  height: 3.2rem;
  width: 3.2rem;
  padding-top: 2px;
  border-radius: 8px;

  &:hover {
    filter: none;
  }

  svg {
    font-size: 2.4rem;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #eab308;
    }
  }
`;
