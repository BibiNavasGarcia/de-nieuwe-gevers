import React, { useState } from 'react';
import { Linking } from 'react-native';

// eslint-disable-next-line no-unused-vars
import { NavigationScreenProp } from 'react-navigation';

import * as Styled from './PasswordScreen.styled';
import { Input } from '../../../shared/components/input/Input';
import { Button, ButtonRight } from '../../../shared/components/button/Button';
// import { login } from '../../services/authentication';

interface PasswordScreenProps {
  navigation: NavigationScreenProp<any>;
}

export function PasswordScreen({ navigation }: PasswordScreenProps) {
  const [password, setPassword] = useState<string>();

  function navigate() {
    navigation.navigate('Home', { screen: 'SearchScreen' });
  }
  
  function onSubmit() {
    navigate()
  }

  function navigateBack() {
    navigation.navigate('UsernameScreen');
  }

  return (
    <Styled.Container>
      <Styled.Title>Inloggen</Styled.Title>
      <Styled.Subtitle>Onze voordeur, jouw sleutel.</Styled.Subtitle>
      <Input
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Wachtwoord"
        secureTextEntry
        value={password}
      />
      <Button type="primary" onPress={onSubmit}>Volgende</Button>
      <Button type="basic" onPress={navigateBack}>
        {'< Terug'}
      </Button>
      <ButtonRight
        type="basic"
        onPress={() => {
          Linking.openURL(
            `https://denieuwegevers.nl/inloggen/wachtwoord-vergeten?u=${emailAdress}`
          );
        }}
      >
        Wachtwoord vergeten
      </ButtonRight>
    </Styled.Container>
  );
}
