import styled from "styled-components";

import { Thumbnail } from "src/components/Thumbnail";
import { colors } from "src/theme/colors";
import { People } from "../PeopleCarousel";

const ListItem = styled.li`
  display: flex;
  width: 16rem;
`;

const Card = styled.figure`
  width: 16rem;
  height: 25.4rem;
  position: relative;

  figcaption {
    position: absolute;
    bottom: 0;
    padding: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    h3 {
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      font-size: 1.4rem;
      color: ${colors.tertiaryText};
    }
  }
`;

export const PeopleCard: React.FC<People> = ({ profile_path, name }) => {
  return (
    <ListItem>
      <Card>
        <Thumbnail src={`https://image.tmdb.org/t/p/original${profile_path}`} />
        <figcaption>
          <h3>{name}</h3>
        </figcaption>
      </Card>
    </ListItem>
  );
};
