import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Thumbnail } from "src/components/Thumbnail";
import { BtnTrailer } from "src/components/BtnTrailer";
import { Card, Favorite, ListItem, Overlay, RaterInfo, Raters } from "./style";

interface MovieCardProps {
  backdrop_path: string;
  title: string;
  vote_average: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  backdrop_path,
  title,
  vote_average,
}) => {
  return (
    <ListItem>
      <Card>
        <Thumbnail
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
        <Overlay />
        <figcaption>
          <RaterInfo>
            <Raters>
              <FaStar />
              <p>{vote_average}</p>
            </Raters>
            <Favorite>
              <CiStar />
            </Favorite>
          </RaterInfo>
          <div>
            <h3>{title}</h3>
            <BtnTrailer href="" />
          </div>
        </figcaption>
      </Card>
    </ListItem>
  );
};
