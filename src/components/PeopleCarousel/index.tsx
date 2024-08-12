import { Carousel } from "../Carousel";
import { PeopleCard } from "../PeopleCard";

export const PeopleCarousel = () => {
  return (
    <Carousel title="Celebridades">
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </Carousel>
  );
};
