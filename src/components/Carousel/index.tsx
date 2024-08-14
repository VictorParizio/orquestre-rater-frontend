import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SectionTitle } from "src/components/SectionTitle";
import {
  Arrow,
  CarouselItem,
  CarouselList,
  Container,
  Controls,
  Header,
} from "./styled";

type CarouselProps = {
  children: React.ReactNode;
  title: string;
};

export const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);
  const maxIndex = Math.ceil(totalItems) - 3;

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
