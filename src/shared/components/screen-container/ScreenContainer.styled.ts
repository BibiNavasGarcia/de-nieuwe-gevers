import styled from 'styled-components/native';

import { color, padding } from '../../theme/theme';

export const Container = styled.View`
  background-color: ${color.secondary.light};
  height: 100%;
  flex: 1;
  padding: ${padding.primary};
  width: 100%;
  z-index: -1000;
`