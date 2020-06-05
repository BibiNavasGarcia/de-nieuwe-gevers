import styled from 'styled-components/native';

import {
  border,
  borderRadius,
  color,
  font,
  shadow,
  spacing,
  textSize
} from '../../shared/theme/theme';

export const AccountText = styled.Text`
  color: ${color.secondary.dark};
  font-family: ${font.bold};
  font-size: ${textSize.small};
`;

export const AccountContainer = styled.View`
  flex-direction: row;
`;

export const ForText = styled.Text`
  color: ${color.secondary.dark};
  font-family: ${font.medium};
  font-size: ${textSize.small};
`;

export const InformationContainer = styled.View`
  flex: 0.5;
  justify-content: space-between;
  padding: ${spacing * 2.5}px ${spacing * 2}px;
`;

export const MainContainer = styled.View`
  background-color: ${color.white};
  border: ${border.terciary};
  border-radius: ${borderRadius};
  box-shadow: ${shadow.secondary};
  height: 400px;
  margin-top: ${spacing * 3};
  width: 100%;
`;

export const TagGroupContainer = styled.View`
  flex-direction: row;
`;

export const TagContainer = styled.View`
  align-self: flex-start;
  background-color: ${color.secondary.light};
  border: ${border.terciary};
  border-radius: 50px;
  margin-right: ${spacing};
  padding: ${spacing / 2}px ${spacing * 2}px;
`;

export const TagText = styled.Text`
  color: ${color.secondary.dark};
  font-family: ${font.medium};
  font-size: ${textSize.small};
`;

export const Text = styled.Text`
  color: ${color.secondary.dark};
  font-family: ${font.medium};
  font-size: ${textSize.small};
`;

export const Title = styled.Text`
  color: ${color.secondary.dark};
  font-family: ${font.bold};
  font-size: ${textSize.large};
`;
