import { MovieCard } from "src/components/MovieCard";
import { SectionTitle } from "src/components/SectionTitle";
import styled from "styled-components";
import { Movie } from "../..";

const Container = styled.section`
  min-width: 38rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

interface SpotlightListProps {
  movies: Movie[];
}

export const SpotlightList: React.FC<SpotlightListProps> = ({ movies }) => {
  return (
    <Container>
      <SectionTitle>Destaques também</SectionTitle>
      <ul>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id} 
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            vote_average={movie.vote_average.toFixed(1)}
          />
        ))}
      </ul>
    </Container>
  );
};
