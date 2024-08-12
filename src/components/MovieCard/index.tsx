import styled from "styled-components";
import thumbnail from "@assets/thumbnail.jpg";

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BtnTrailer } from "src/components/BtnTrailer";
import { ButtonMedium } from "src/components/Button";
import { Thumbnail } from "src/components/Thumbnail";

const RaterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Raters = styled.div`
  display: flex;
  background: #eeeeee33;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.4rem 0.6rem;
  border-radius: 8px;

  & > svg {
    font-size: 2rem;
    color: #eab308;
    margin-right: 4px;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Favorite = styled(ButtonMedium)`
  height: 3.2rem;
  width: 3.2rem;
  padding-top: 2px;
  border-radius: 8px;
  
  &:hover {
    filter: none;
  }

  svg {
    font-size: 2.4rem;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #eab308;
    }
  }
`;

export const MovieCard = () => {
  return (
    <li>
      <figure>
        <Thumbnail src={thumbnail} />
        <figcaption>
          <RaterInfo>
            <Raters>
              <FaStar />
              <p>7.8</p>
            </Raters>
            <Favorite>
              <CiStar />
            </Favorite>
          </RaterInfo>
          <div>
            <h3>Divertidamente 2</h3>
            <BtnTrailer href="" />
          </div>
        </figcaption>
      </figure>
    </li>
  );
};
