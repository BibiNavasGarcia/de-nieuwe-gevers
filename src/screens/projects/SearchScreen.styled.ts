import styled from 'styled-components/native';

import { color, font, textSize, shadow, spacing } from '../../shared/theme/theme';

export const FilterButton = styled.View`
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
  box-shadow: ${shadow.secondary};
  background-color: ${color.terciary.dark};
  border-radius: 50px;
  padding: ${spacing * 2}px ${spacing * 3}px;
`;

export const ScrollContainer = styled.View`
  margin-top: ${spacing * 2}px
`

export const Text = styled.Text`
  color: ${color.white};
  font-family: ${font.bold};
  font-size: ${textSize.medium};
  margin-right: 6px;
`;