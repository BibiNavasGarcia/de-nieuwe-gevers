import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

// eslint-disable-next-line no-unused-vars
import { IProject } from '../../types/project';
// eslint-disable-next-line no-unused-vars
import { ITag } from '../../types/tag';

import * as Styled from './Project.styled';

const orangeBabies = require('../../assets/images/faces.jpg');
const vc = require('../../assets/images/hands.jpg');
const suk = require('../../assets/images/bellenblaas.jpg');
const aidsFonds = require('../../assets/images/aids-fonds.jpg');
const vivanti = require('../../assets/images/vivanti.jpg');
const gfb = require('../../assets/images/gfb.jpg');

interface ProjectProps {
  project: IProject;
}

export function Project({ project }: ProjectProps) {

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

  return (
    <TouchableOpacity>
      <Styled.MainContainer>
        <Image
          source={getImage()}
          style={{
            flex: 0.5,
            height: undefined,
            width: undefined,
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4
          }}
        />
        <Styled.InformationContainer>
          <Styled.Title>{project.title}</Styled.Title>
          <Styled.Text>{project.projectInfo}</Styled.Text>
          <Styled.AccountContainer>
            <Styled.ForText>voor </Styled.ForText>
            <Styled.AccountText>{project.account}</Styled.AccountText>
          </Styled.AccountContainer>
          <Styled.TagGroupContainer>
            {project.skillTags.map((tag: ITag) => (
              <Styled.TagContainer>
                <Styled.TagText key={tag.tagId}>{tag.tagName}</Styled.TagText>
              </Styled.TagContainer>
            ))}
          </Styled.TagGroupContainer>
        </Styled.InformationContainer>
      </Styled.MainContainer>
    </TouchableOpacity>
  );
}
