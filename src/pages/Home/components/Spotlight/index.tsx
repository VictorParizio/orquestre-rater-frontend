import { FaStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";

import { BtnTrailer } from "src/components/BtnTrailer";
import { Thumbnail } from "src/components/Thumbnail";
import { Movie } from "../..";
import {
  Avaliation,
  Caption,
  Description,
  InforContainer,
  Infos,
  Raters,
  SpotlightContainer,
  Title,
} from "./style";

interface MoviesProps {
  movies: Movie[];
}

export const Spotlight: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <SpotlightContainer>
          <Thumbnail
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          />
          <Caption>
            <Avaliation>
              <LuFlame />
              <p>Em destaque</p>
            </Avaliation>
            <div>
              <Title>{movie.title}</Title>
              <InforContainer>
                <Raters>
                  <FaStar />
                  {movie.vote_average.toFixed(1)}{" "}
                  <span>
                    | {Math.round(movie.popularity / 1000)} {""} mi{" "}
                  </span>
                </Raters>
                <Infos>
                  <p>2h 8m</p>
                  <p>{movie.release_date.split("-")[0]}</p>
                  <p>Comedy, Action, Adventure, Superhero...</p>
                </Infos>
              </InforContainer>
              <Description>{movie.overview}</Description>
              <BtnTrailer href="" type={"large"} />
            </div>
          </Caption>
        </SpotlightContainer>
      ))}
    </>
  );
};
