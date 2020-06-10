import React from 'react';
import { ScrollView } from 'react-native';

import * as Styled from './ScrollContainer.styled';

interface ScrollContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <>
      <Styled.Container style={{flex: 1}}>
        <ScrollView>{children}</ScrollView>
      </Styled.Container>
    </>   
  )
}