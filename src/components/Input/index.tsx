import { colors } from "src/theme/colors";
import styled from "styled-components";

const BaselInput = styled.input`
  background: ${colors.secondaryBackground};
  height: 4.8rem;
  width: 31.7rem;
  padding: 0 2rem 0 5.2rem;
  border: none;
  border-radius: 2.4rem;
  color: ${colors.primaryText};

  &::placeholder {
    color: ${colors.tertiaryInteractive};
  }

  @media (max-width: 678px) {
    width: 100%;
  }

  @media (max-width: 578px) {
    max-width: 50rem;
  }
`;

type InputProps = {
  type: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return <BaselInput type={type} placeholder={placeholder} />;
};
