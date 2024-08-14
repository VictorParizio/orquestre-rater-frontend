import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SectionTitle } from "src/components/SectionTitle";
import { colors } from "src/theme/colors";
import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.section`
  width: 100%;
  padding: 2.4rem;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.button`
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

const Controls = styled.div`
  display: flex;
  gap: 24px;
`;

const CarouselList = styled.ul<{ currentIndex: number }>`
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 25}%)`};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CarouselItem = styled.li`
  flex: 0 0 25%;
`;

type CarouselProps = {
  children: React.ReactNode;
  title: string;
};

export const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);
  const maxIndex = Math.ceil(totalItems / 4) - 1;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container>
      <Header>
        <SectionTitle>{title}</SectionTitle>
        <Controls>
          <Arrow onClick={handlePrevClick} disabled={currentIndex === 0}>
            <IoIosArrowBack />
          </Arrow>
          <Arrow onClick={handleNextClick} disabled={currentIndex === maxIndex}>
            <IoIosArrowForward />
          </Arrow>
        </Controls>
      </Header>
      <CarouselList currentIndex={currentIndex}>
        {React.Children.map(children, (child) => (
          <CarouselItem>{child}</CarouselItem>
        ))}
      </CarouselList>
    </Container>
  );
};
