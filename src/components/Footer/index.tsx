import { colors } from "src/theme/colors";
import styled from "styled-components";

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.7rem;
  color: ${colors.tertiaryText};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Rader. All rights reserved</p>
    </FooterContainer>
  );
};
