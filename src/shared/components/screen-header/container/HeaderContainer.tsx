import React from 'react';

import * as Styled from './HeaderContainer.styled';

interface HeaderContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <>
      <Styled.TopBar />
      <Styled.Container>{children}</Styled.Container>
    </>   
  )
}