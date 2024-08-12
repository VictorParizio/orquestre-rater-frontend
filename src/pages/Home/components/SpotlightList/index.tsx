import { MovieCard } from "src/components/MovieCard";
import styled from "styled-components";

const Container = styled.section`
  h2 {
    border-left: 3px solid white;
    padding-left: 8px;
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }


`;

export const SpotlightList = () => {
  return (
    <Container>
      <h2>Destaques também</h2>
      <ul>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
    </Container>
  );
};
