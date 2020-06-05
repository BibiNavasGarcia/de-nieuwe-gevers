import styled from 'styled-components/native';

import { color, font, shadow, titleSize } from '../../../theme/theme';

export const Text = styled.Text`
  box-shadow: ${shadow.none};
  color: ${color.terciary.dark};
  font-family: ${font.bold};
  font-size: ${titleSize.xSmall}
`