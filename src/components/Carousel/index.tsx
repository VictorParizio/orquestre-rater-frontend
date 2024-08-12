import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SectionTitle } from "src/components/SectionTitle";
import { colors } from "src/theme/colors";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 2.4rem;

  ul {
    display: flex;
    gap: 12px;
  }
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
`;

const Controls = styled.div`
  display: flex;
  gap: 24px;
`;

type CarouselProps = {
  children: React.ReactNode;
  title: string;
};

export const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
  return (
    <Container>
      <Header>
        <SectionTitle>{title}</SectionTitle>
        <Controls>
          <Arrow>
            <IoIosArrowBack />
          </Arrow>
          <Arrow>
            <IoIosArrowForward />
          </Arrow>
        </Controls>
      </Header>
      <ul>{children}</ul>
    </Container>
  );
};
