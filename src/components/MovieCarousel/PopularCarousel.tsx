import { MovieCard } from "src/components/MovieCard";
import { Carousel } from "../Carousel";
import { useEffect, useState } from "react";
import { getAPI } from "src/http/movies";
import { Movie } from "src/pages/Home";

export interface ApiResponseMovies {
  results: Movie[];
}

export const PopularCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response: ApiResponseMovies = await getAPI("now_playing");
        setMovies(response.results);
      } catch (error: unknown) {
        console.error("Erro ao carregar lista de lançamentos", error);
      }
    })();
  }, []);

  return (
    <Carousel title="Últimos lançamentos">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          backdrop_path={movie.backdrop_path}
          title={movie.title}
          vote_average={movie.vote_average.toFixed(1)}
        />
      ))}
    </Carousel>
  );
};
