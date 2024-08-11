import styled from "styled-components";
import { colors } from "../../theme/colors";

const BaselInput = styled.input`
  background: ${colors.secondaryBackground};
  width: 31.7rem;
  height: 4.8rem;
  padding-left: 5.2rem;
  max-width: 100%;
  border: none;
  border-radius: 2.4rem;

  &::placeholder {
    color: ${colors.tertiaryInteractive};
  }
`;

type InputProps = {
  type: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return <BaselInput type={type} placeholder={placeholder} />;
};
