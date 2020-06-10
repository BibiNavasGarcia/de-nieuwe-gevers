import React from 'react';
import { Image, StyleSheet } from 'react-native';

// eslint-disable-next-line no-unused-vars
import { IProject } from '../../types/project';

import * as Styled from './PortfolioProject.styled';

const orangeBabies = require('../../assets/images/faces.jpg');
const vc = require('../../assets/images/hands.jpg');
const suk = require('../../assets/images/bellenblaas.jpg');
const aidsFonds = require('../../assets/images/aids-fonds.jpg');
const vivanti = require('../../assets/images/vivanti.jpg');
const gfb = require('../../assets/images/gfb.jpg');

interface PortfolioProjectProps {
  project: IProject;
}

export function PortfolioProject({ project }: PortfolioProjectProps) {

  function getImage () {
    if (project.pictureUrl === "OrangeBabies") {
      return orangeBabies;
    }
    if (project.pictureUrl === "VC") {
      return vc;
    }
    if (project.pictureUrl === "SUK") {
      return suk;
    }
    if (project.pictureUrl === "AidsFonds") {
      return aidsFonds;
    }
    if (project.pictureUrl === "Vivanti") {
      return vivanti;
    }
    if (project.pictureUrl === "GFB") {
      return gfb;
    }
    return null;
  }

  const styles = StyleSheet.create({
    stretch: {
      height: 190,
      alignSelf: 'stretch',
      borderRadius: 4
    },
    normal: {
      height: 190,
      width: 290,
      borderRadius: 4
    }
  })

  // function imageStyle() {
  //   if (isSingle) {
  //     return styles.stretch
  //   }
  //   return styles.normal
  // }

  return (
    <Styled.MainContainer>
      <Image
        source={getImage()}
        style={styles.normal}
      />
      <Styled.InformationContainer>
        <Styled.Title>{project.title}</Styled.Title>
        <Styled.Subtitle>{project.account}</Styled.Subtitle>
      </Styled.InformationContainer>
    </Styled.MainContainer>
  );
}
