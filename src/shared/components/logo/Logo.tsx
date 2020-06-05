import React from 'react';
import { Image } from 'react-native'

import * as Styled from './Logo.styled';

const LogoIcon = require('../../../assets/images/logo.png');

export function Logo() {
  return (
    <>
      <Styled.Container><Image source={LogoIcon} style={{flex: 1, height: undefined, width: undefined}} /></Styled.Container>
    </>   
  )
}