import styled from 'styled-components/native';

import { color, font, titleSize, shadow, spacing } from '../../../theme/theme';

export const Text = styled.Text`
box-shadow: ${shadow.none};
  color: ${color.secondary.dark};
  font-family: ${font.bold};
  font-size: ${titleSize.large};
  margin-bottom: ${spacing};
`