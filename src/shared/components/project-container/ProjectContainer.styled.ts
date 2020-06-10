import styled from 'styled-components/native';

import { border, borderRadius, color, shadow, spacing } from '../../theme/theme';

export const Container = styled.View`
  background-color: ${color.white};
  border: ${border.terciary};
  border-radius: ${borderRadius};
  box-shadow: ${shadow.secondary};
  padding: ${spacing*2}px;
  width: 100%;
`