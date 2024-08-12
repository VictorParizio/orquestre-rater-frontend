import styled from "styled-components";

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2.4rem;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: auto;
    transform: translate(-50%, -50%);
  }
`;

type ThumbnailProps = {
  src: string;
  alt?: string;
};

export const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  return (
    <ThumbnailContainer>
      <img src={src} alt={alt} />
    </ThumbnailContainer>
  );
};
