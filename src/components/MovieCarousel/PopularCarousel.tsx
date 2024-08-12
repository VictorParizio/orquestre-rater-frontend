import { MovieCard } from "src/components/MovieCard";
import { Carousel } from "../Carousel";

export const PopularCarousel = () => {
  return (
    <Carousel title="Ultimos lançamentos">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Carousel>
  );
};
