import styled from 'styled-components/native';

import { color, font, titleSize, spacing } from '../../theme/theme';


export const Heading = styled.Text`
  color: ${color.secondary.dark};
  font-family: ${font.semiBold};
  font-size: ${titleSize.xSmall};
`

export const HeadingContainer = styled.View`
  margin: 35px 0 20px;
`

export const Line = styled.View`
  border-top-width: 1px;
  border-top-color: ${color.grey.light};
  position: absolute;
  margin-top: 16px;
  width: 100%;
`

export const HeadingTextContainer = styled.View`
  align-self: center;
  align-items: center;
  background-color: ${color.secondary.light}
  padding: ${spacing}px;
  z-index: 1000;
`
