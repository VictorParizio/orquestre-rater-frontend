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

  figure {
    width: 38rem;
    height: 25.4rem;
    position: relative;

    figcaption {
      position: absolute;
      top: 0;
      height: 25.4rem;
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
