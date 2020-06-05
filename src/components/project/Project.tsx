import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

// eslint-disable-next-line no-unused-vars
import { IProject } from '../../types/project';
// eslint-disable-next-line no-unused-vars
import { ITag } from '../../types/tag';

import * as Styled from './Project.styled';

const OrangeBabies = require('../../assets/images/faces.jpg');
const VC = require('../../assets/images/hands.jpg');
const SUK = require('../../assets/images/bellenblaas.jpg');

interface ProjectProps {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  console.log(project.pictureUrl);

 function getImage () {
   if (project.pictureUrl === "OrangeBabies") {
     return OrangeBabies;
   }
   if (project.pictureUrl === "VC") {
    return VC;
   }
   if (project.pictureUrl === "SUK") {
    return SUK;
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
                <Styled.TagText>{tag.tagName}</Styled.TagText>
              </Styled.TagContainer>
            ))}
          </Styled.TagGroupContainer>
        </Styled.InformationContainer>
      </Styled.MainContainer>
    </TouchableOpacity>
  );
}
