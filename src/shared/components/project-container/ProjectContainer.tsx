import React from 'react';

import * as Styled from './ProjectContainer.styled';

interface ProjectContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export function ProjectContainer({ children }: ProjectContainerProps) {
  return (
    <>
      <Styled.Container>{children}</Styled.Container>
    </>   
  )
}