import React, { useState } from 'react';

import { TextInput } from 'react-native';

import * as Styled from './Input.styled';

interface InputProps {
  autoFocus?: boolean;
  onChangeText?: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
}

export function Input ({ onChangeText, placeholder, secureTextEntry, value }: InputProps) {
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <>
      <Styled.InputContainer>
        <TextInput
          autoCapitalize="none"
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isHidden}
          value={value}
        />
      </Styled.InputContainer>
    </>
  );
};

