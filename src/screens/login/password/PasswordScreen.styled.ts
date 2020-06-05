import styled from 'styled-components/native';
import { color, font, titleSize, spacing } from '../../../shared/theme/theme';

export const Container = styled.View`
  background-color: ${color.secondary.light}
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  box-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.1);
  color: ${color.secondary.dark};
  margin-top: ${spacing * 40}px;
  font-family: ${font.bold};
  font-size: ${titleSize.xLarge};
  text-align: center;
`;

export const Subtitle = styled.Text`
  box-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.1);
  color: ${color.terciary.dark};
  font-family: ${font.bold};
  margin-top: ${spacing}px;
  font-size: ${titleSize.large};
  text-align: center;
`;
