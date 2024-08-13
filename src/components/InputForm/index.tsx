import styled from "styled-components";
import { colors } from "src/theme/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.secondaryText};
  margin-bottom: 4px;

  span {
    color: red;
  }
`;

const BaseInput = styled.input`
  background: ${colors.primaryInteractive};
  width: 100%;
  height: 4.8rem;
  padding: 1.2rem;
  max-width: 100%;
  border: none;
  border-radius: 1.2rem;
  color: ${colors.primaryText};

  &::placeholder {
    color: ${colors.tertiaryText};
  }
`;

type InputProps = {
  textLabel: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const InputForm: React.FC<InputProps> = ({
  textLabel,
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>
        {textLabel} <span>*</span>
      </Label>
      <BaseInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Container>
  );
};
