import React from 'react';

import * as Styled from './Title.styled';

interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <Styled.Text>{children}</Styled.Text>
    </>   
  )
}