import React from 'react';

import * as Styled from './Subtitle.styled';

interface SubtitleProps {
  children: string;
}

export function Subtitle({ children }: SubtitleProps) {
  return (
    <>
      <Styled.Text>{children}</Styled.Text>
    </>   
  )
}