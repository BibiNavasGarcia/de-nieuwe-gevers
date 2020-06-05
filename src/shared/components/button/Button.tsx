import React from 'react';

import * as Styled from './Button.styled';

interface ButtonProps {
  children: string;
  onPress: () => void;
  type: string;
}

export const Button = ({ children, onPress, type }: ButtonProps) => {
  return (
    <Styled.Button onPress={onPress} type={type}>
      <Styled.ButtonText>{children}</Styled.ButtonText>
    </Styled.Button>
  );
};

export const ButtonRight = ({ children, onPress, type }: ButtonProps) => {
  return (
    <Styled.ButtonRight onPress={onPress} type={type}>
      <Styled.ButtonText>{children}</Styled.ButtonText>
    </Styled.ButtonRight>
  );
};
