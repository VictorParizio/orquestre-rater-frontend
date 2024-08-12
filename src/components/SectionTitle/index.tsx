import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  border-left: 3px solid white;
  padding-left: 8px;
  margin-bottom: 12px;
`;

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};
