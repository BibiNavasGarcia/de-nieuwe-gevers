import styled from 'styled-components/native';

import { color, font, textSize, shadow, spacing } from '../../shared/theme/theme';

export const FilterButton = styled.View`
  align-self: flex-start;
  box-shadow: ${shadow.secondary};
  background-color: ${color.terciary.dark};
  border-radius: 50px;
  flex-direction: row;
  justify-content: center;
  margin-top: ${spacing*4.5};
  padding: ${spacing * 2}px ${spacing * 3}px;
`;

export const Text = styled.Text`
  color: ${color.white};
  font-family: ${font.bold};
  font-size: ${textSize.medium};
  margin-right: 6px;
`;