import styled from 'styled-components/native';

import { color, font, textSize, spacing } from '../../theme/theme';

export const TextBold = styled.Text`
  align-self: center;
  color: ${color.secondary.dark};
  font-family: ${font.bold};
  font-size: ${textSize.large};
  text-align: center;
`

export const Text = styled.Text`
  align-self: center;
  color: ${color.secondary.dark};
  font-family: ${font.medium};
  font-size: ${textSize.small};
  margin: ${spacing*4}px 0 ${spacing*2}px ;
`

export const TextContainer = styled.View`
  margin: ${spacing*5}px;
`