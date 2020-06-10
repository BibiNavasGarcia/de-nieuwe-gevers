import styled from 'styled-components/native';

import { color, font, textSize, titleSize, spacing } from '../../shared/theme/theme';

export const GreyText = styled.Text`
  align-self: center;
  color: ${color.grey.dark};
  font-family: ${font.medium};
  font-size: ${textSize.large};
  margin-top: ${spacing*4}px;
`

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
