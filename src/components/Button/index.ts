import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Button = styled.button`
  border: none;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 8px ${colors.primaryBackground};
`;

export const ButtonLight = styled(Button)`
  background: ${colors.secondaryText};
  color: ${colors.primaryBackground};
`;

export const ButtonDark = styled(Button)`
  background: ${colors.primaryInteractive};
  color: ${colors.secondaryText};
`;

export const ButtonMedium = styled(Button)`
  background: #eeeeee33;
  color: ${colors.secondaryText};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
