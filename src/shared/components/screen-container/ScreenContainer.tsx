import React from 'react';

import * as Styled from './ScreenContainer.styled';

interface ScreenContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export function ScreenContainer({ children }: ScreenContainerProps) {
  return (
    <>
      <Styled.Container>{children}</Styled.Container>
    </>   
  )
}