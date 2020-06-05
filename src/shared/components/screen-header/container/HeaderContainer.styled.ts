import styled from 'styled-components/native';

import { border, color, padding, shadow } from '../../../theme/theme';

 export const TopBar = styled.View`
  background-color: ${color.secondary.light}
  height: 40px;
 `;

export const Container = styled.View`
  background-color: ${color.white}
  border: ${border.terciary};
  box-shadow: ${shadow.primary};
  height: 97px;
  padding: ${padding.primary};
  width: 100%;
`;