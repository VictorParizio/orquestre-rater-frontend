import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";

import { ButtonMedium } from "src/components/Button";
import { colors } from "src/theme/colors";
import { BtnTrailer } from "src/components/BtnTrailer";
import { Thumbnail } from "src/components/Thumbnail";
import { Movie } from "../..";

const SpotlightContainer = styled.figure`
  position: relative;
  width: 100rem;
`;

const Caption = styled.figcaption`
  position: absolute;
  bottom: 4.8rem;
  left: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Avaliation = styled(ButtonMedium)`
  height: 3.6rem;
  width: 16.7rem;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.4rem;
  }
`;

const InforContainer = styled.header`
  display: flex;
  align-items: center;

  div {
    display: flex;
    gap: 1.2rem;

    p,
    span {
      color: ${colors.tertiaryText};
    }
  }
`;

const Raters = styled.p`
  svg {
    font-size: 2.4rem;
    color: #eab308;
    margin-right: 8px;
  }

  font-size: 2rem;
  font-weight: 500;
  margin-right: 2.4rem;

  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 1.4rem;
    color: ${colors.tertiaryText};
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: center;

  p:not(:first-child)::before {
    content: "•";
    margin-right: 8px;
    font-size: 2rem;
  }
`;

const Description = styled.p`
  max-width: 57%;
  line-height: 22.4px;
  margin-bottom: 3.6rem;
`;

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
            <Title>{movie.title}</Title>
            <InforContainer>
              <Raters>
                <FaStar />
                {movie.vote_average.toFixed(1)}{" "}
                <span>| {Math.round(movie.popularity / 1000)} {""} mi </span>
              </Raters>
              <Infos>
                <p>2h 8m</p>
                <p>Comedy, Action, Adventure, Superhero...</p>
                <p>{movie.release_date.split("-")[0]}</p>
              </Infos>
            </InforContainer>
            <Description>{movie.overview}</Description>
            <BtnTrailer href="" type={"large"} />
          </Caption>
        </SpotlightContainer>
      ))}
    </>
  );
};
