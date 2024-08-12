import styled from "styled-components";
import thumbnail from "@assets/thumbnail.jpg";

import { Thumbnail } from "src/components/Thumbnail";
import { colors } from "src/theme/colors";

const ListItem = styled.li`
  display: flex;
  flex: 1;
  min-width: 20rem;
`;

const Card = styled.figure`
  width: 100%;
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

export const PeopleCard = () => {
  return (
    <ListItem>
      <Card>
        <Thumbnail src={thumbnail} />
        <figcaption>
          <h3>Celebridade</h3>
          <p>35</p>
        </figcaption>
      </Card>
    </ListItem>
  );
};
