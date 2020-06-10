import React from 'react';
// eslint-disable-next-line no-unused-vars
import { NavigationScreenProp } from 'react-navigation';

import * as Styled from './NoCurrentProject.styled';

import { Button } from '../button/Button';
import { Heading } from '../heading/Heading';
import { ProjectContainer } from '../project-container/ProjectContainer';

interface NoCurrentProjectProps {
  navigation: NavigationScreenProp<any>;
  children: React.ReactNode | React.ReactNode[];
}

export function NoCurrentProject ( { children, navigation }: NoCurrentProjectProps ) {
  function navigate() {
    navigation.navigate('Home', { screen: 'SearchScreen' })
  }

  return (
    <>
      <Heading>{children}</Heading>
      <ProjectContainer>
        <Styled.TextContainer>
          <Styled.TextBold>Je hebt je nog op geen projecten ingeschreven.</Styled.TextBold>
          <Styled.Text>Maar je bent heeeeeel dichtbij.</Styled.Text>
          <Button onPress={navigate} type="small">Bekijk alle projecten</Button>
        </Styled.TextContainer>
      </ProjectContainer>
    </>
  )}