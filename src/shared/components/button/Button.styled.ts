import styled, { css } from 'styled-components/native';
import { border, borderRadius, buttonHeight, color, font, textSize, spacing } from "../../theme/theme";

interface ButtonProps {
  type: string;
};

export const CssButton = css<ButtonProps>`
  align-items: center;
  background-color: ${({ type }) => type === 'primary' || type === 'small' ? color.primary.dark : type === 'secondary' ? color.secondary.light : 'null'};
  border: ${({ type }) => type === 'basic' ? 'none' : border.primary};
  border-radius: ${borderRadius};
  box-shadow: ${({ type }) => type === 'basic' ? 'none' : '0px 1px 1px rgba(0, 0, 0, 0.2)'};
  height: ${buttonHeight.primary};
  justify-content: center;
  margin-top: ${spacing*4};
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${CssButton}
  align-self: ${({ type }) => type === 'primary' ? 'null' : 'center'};
`;

export const ButtonRight = styled.TouchableOpacity<ButtonProps>`
  ${CssButton}
  align-self: ${({ type }) => type === 'basic' ? 'flex-end' : 'null'};
`;

export const ButtonText = styled.Text`
  color: ${color.secondary.dark};
  font-size: ${textSize.medium};
  font-family: ${font.bold};
  margin: 0 ${spacing*2}px;
`;

