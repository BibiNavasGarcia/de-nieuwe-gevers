import React from 'react';

import * as Styled from './Heading.styled';

interface HeadingProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <Styled.HeadingContainer>
        <Styled.HeadingTextContainer>
          <Styled.Heading>{children}</Styled.Heading>
        </Styled.HeadingTextContainer>
        <Styled.Line />
      </Styled.HeadingContainer>
    </>
  )}
