import styled from 'styled-components/native';
import { border, borderRadius, color, font, spacing, shadow } from '../../theme/theme';

interface StyledTextInputProps {
  secureTextEntry?: boolean;
}

export const TogglePassword = styled.TouchableOpacity<
  StyledTextInputProps
>`
  display: ${({ secureTextEntry }) => (secureTextEntry ? `flex` : `none`)};
  height: 18px;
  justify-content: center;
  width: 18px;
`;

export const InputContainer = styled.View`
  background-color: ${color.white};
  box-shadow: ${shadow.primary};
  border: ${border.secondary};
  border-radius: ${borderRadius};
  font-family: ${font.bold};
  height: 48px;
  margin-top: ${spacing * 7}px;
  padding: 14px;
  width: 100%;
`;