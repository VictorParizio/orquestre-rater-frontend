import { colors } from "src/theme/colors";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2.4rem;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Controls = styled.div`
  display: flex;
  gap: 24px;
`;

export const Arrow = styled.button`
  background: ${colors.primaryBackground};
  height: 2.4rem;
  width: 2.4rem;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    filter: brightness(2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CarouselList = styled.ul<{ currentIndex: number }>`
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 25}%)`};
`;

export const CarouselItem = styled.li`
  flex: 0 0 10%;
`;
