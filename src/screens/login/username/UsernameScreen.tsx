import React, { useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// eslint-disable-next-line no-unused-vars
import { NavigationScreenProp } from 'react-navigation';

import * as Styled from './UsernameScreen.styled';
import { Input } from '../../../shared/components/input/Input';
import { Button } from '../../../shared/components/button/Button';

interface UsernameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export function UsernameScreen({ navigation }: UsernameScreenProps) {
  const [emailAddress, setEmailAddress] = useState('');

  function navigate() {
    navigation.navigate('PasswordScreen');
  }

  async function onSubmit() {
    try {
      await login(emailAddress);

      // console.log('sessionId 1:', sessionId);
      // await AsyncStorage.setItem('verificationToken', verificationToken);
      // await AsyncStorage.setItem('sessionId', sessionId);
    } catch (error) {
      console.log(error);
    }
    navigate();
  }

  return (
    <>
      <Styled.Container>
        <Styled.Title>Inloggen</Styled.Title>
        <Styled.Subtitle>Jouw plek voor goed doen.</Styled.Subtitle>
        <Input
          onChangeText={(text: string) => setEmailAddress(text)}
          placeholder="E-mailadres"
          value={emailAddress}
        />
        <Button type="primary" onPress={onSubmit}>
          Volgende
        </Button>
        <Button
          type="basic"
          onPress={() => {
            Linking.openURL(
              'https://denieuwegevers.nl/aanmelden?type=professional'
            );
          }}
        >
          Account maken
        </Button>
      </Styled.Container>
    </>
  );
}
