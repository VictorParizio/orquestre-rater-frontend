import { MovieCard } from "src/components/MovieCard";
import { SectionTitle } from "src/components/SectionTitle";
import styled from "styled-components";

const Container = styled.section`
  min-width: 38rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const SpotlightList = () => {
  return (
    <Container>
      <SectionTitle>Destaques também</SectionTitle>
      <ul>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
    </Container>
  );
};
