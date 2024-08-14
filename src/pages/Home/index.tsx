import styled from "styled-components";
import { Spotlight } from "./components/Spotlight";
import { SpotlightList } from "./components/SpotlightList";
import { PeopleCarousel } from "src/components/PeopleCarousel";
import { PopularCarousel } from "src/components/MovieCarousel/PopularCarousel";
import { WatchCarousel } from "src/components/MovieCarousel/WatchCarousel";
import { RecommendationsCarousel } from "src/components/MovieCarousel/RecommendationsCarousel";
import { useEffect, useState } from "react";
import { getAPI } from "src/http/movies";

const MainContainer = styled.main`
  max-width: 100vw;
`;

const SpotlightContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 2.4rem 2.4rem 2.4rem;
`;

export interface Movie {
  id: number;
  backdrop_path: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface ApiResponseMovies {
  results: Movie[];
}

export interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  vote_average: number;
  overview: string;
  popularity: number;
  release_date: string;
}

export interface ApiResponseMovies {
  results: Movie[];
}

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response: ApiResponseMovies = await getAPI("popular");
        setMovies(response.results);
      } catch (error: unknown) {
        console.error("Erro ao carregar lista de lançamentos", error);
      }
    })();
  }, []);

  return (
    <MainContainer>
      <SpotlightContainer>
        <Spotlight movies={movies.slice(0, 1)} />
        <SpotlightList movies={movies.slice(1, 4)} />
      </SpotlightContainer>
      <PopularCarousel />
      <WatchCarousel />
      <RecommendationsCarousel />
      <PeopleCarousel />
    </MainContainer>
  );
};
