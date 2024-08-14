import { useEffect, useState } from "react";
import { Carousel } from "../Carousel";
import { PeopleCard } from "../PeopleCard";
import { getAPI } from "src/http/people";

export interface People {
  id: number;
  name: string;
  profile_path: string;
}

export interface ApiResponsePeople {
  results: People[];
}

export const PeopleCarousel = () => {
  const [people, setPeople] = useState<People[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response: ApiResponsePeople = await getAPI("day");
        setPeople(response.results);
      } catch (error: unknown) {
        console.error("Erro ao carregar lista de lançamentos", error);
      }
    })();
  }, []);

  return (
    <Carousel title="Celebridades">
      {people.map((person) => (
        <PeopleCard
          id={0}
          key={person.id}
          profile_path={person.profile_path}
          name={person.name}
        />
      ))}
    </Carousel>
  );
};
