import styled from 'styled-components/native';

import {color, font, textSize, spacing } from '../../shared/theme/theme';

interface StyledPortfolioProjectProps {
  isSingle?: boolean;
}

export const MainContainer = styled.View<StyledPortfolioProjectProps>`
  margin-right: ${spacing}
  width: 290;
`

export const InformationContainer = styled.View`
  align-self: flex-end;
  margin: ${spacing*2}px 0;
`

export const Title = styled.Text`
 color: ${color.secondary.dark};
 font-family: ${font.semiBold};
 font-size: ${textSize.large};
 margin-bottom: ${spacing/2};
 text-align: right;
`

export const Subtitle = styled.Text`
 color: ${color.terciary.dark};
 font-family: ${font.semiBold};
 font-size: ${textSize.medium};
 text-align: right;
`

