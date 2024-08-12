import styled from "styled-components";
import { Spotlight } from "./components/Spotlight";
import { SpotlightList } from "./components/SpotlightList";
import { PeopleCarousel } from "src/components/PeopleCarousel";
import { PopularCarousel } from "src/components/MovieCarousel/PopularCarousel";
import { WatchCarousel } from "src/components/MovieCarousel/WatchCarousel";
import { RecommendationsCarousel } from "src/components/MovieCarousel/RecommendationsCarousel";

const MainContainer = styled.main`
  max-width: 100vw;
`;

const SpotlightContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 2.4rem 2.4rem 2.4rem;
`;

export const Home = () => {
  return (
    <MainContainer>
      <SpotlightContainer>
        <Spotlight />
        <SpotlightList />
      </SpotlightContainer>
      <PopularCarousel />
      <WatchCarousel />
      <RecommendationsCarousel />
      <PeopleCarousel />
    </MainContainer>
  );
};
