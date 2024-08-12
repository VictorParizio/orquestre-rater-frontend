import styled from "styled-components";
import { Spotlight } from "./components/Spotlight";
import { SpotlightList } from "./components/SpotlightList";

const MainContainer = styled.main`
  max-width: 100vw;
  padding: 0 2.4rem 2.4rem 2.4rem;
  display: flex;
  gap: 12px;
`;

export const Home = () => {
  return (
    <MainContainer>
      <Spotlight />
      <SpotlightList />
    </MainContainer>
  );
};
