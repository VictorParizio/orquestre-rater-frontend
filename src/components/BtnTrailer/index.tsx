import { FaPlay } from "react-icons/fa";
import { colors } from "src/theme/colors";
import styled from "styled-components";

type WatchTrailerProps = {
  type: "large" | "medium";
};

const WatchTrailer = styled.a<WatchTrailerProps>`
  width: ${(props) => (props.type === "large" ? "21.6rem" : "18.4rem")};
  height: ${(props) => (props.type === "large" ? "4.8rem" : "4rem")};
  font-size: ${(props) => (props.type === "large" ? "2rem" : "1.6rem")};
  font-weight: 500;
  padding: 1.2rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 12px;
  box-shadow: 0 0 8px ${colors.primaryBackground};
  background: #eeeeee33;
  color: ${colors.secondaryText};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px ${colors.secondaryText};
  }

  @media (max-width: 673px) {
    border-radius: 40px;
    height: 2.7rem;
    width: 14rem;
    font-size: 1.2rem;
    font-weight: 400;
    svg {
      font-size: 1.2rem;
    }
  }
`;

type BtnTrailerProps = {
  href: string;
  type?: "large" | "medium";
};

export const BtnTrailer: React.FC<BtnTrailerProps> = ({
  href,
  type = "medium",
}) => {
  return (
    <WatchTrailer href={href} type={type}>
      Assistir ao trailer <FaPlay />
    </WatchTrailer>
  );
};
