import { MovieCard } from "src/components/MovieCard";
import { Carousel } from "../Carousel";

export const RecommendationsCarousel = () => {
  return (
    <Carousel title="Recomendações">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Carousel>
  );
};
