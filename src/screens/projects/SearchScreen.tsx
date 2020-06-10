import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { IProject } from "../../types/project";

import * as projectApi from '../../services/projects';
import * as Styled from './SearchScreen.styled';

import { Logo } from '../../shared/components/logo/Logo';

import { HeaderContainer } from '../../shared/components/screen-header/container/HeaderContainer';
import { Project } from '../../components/project/Project';
import { ScreenContainer } from '../../shared/components/screen-container/ScreenContainer';
import { ScrollContainer } from '../../shared/components/scroll-container/ScrollContainer';
import { Subtitle } from '../../shared/components/screen-header/subtitle/Subtitle';
import { Title } from '../../shared/components/screen-header/title/Title';

import FilterIcon from '../../assets/icons/filter.svg';

export function SearchScreen () {
  const [projects, setProjects] = useState<IProject>([]);

  async function getProjects() {
    setProjects(await projectApi.getAll());
  }

  useEffect(() => {
    getProjects();
  }, []);

   return (
     <>
       <HeaderContainer>
         <Logo />
         <Title>Draag je steentje bij.</Title>
         <Subtitle>Projecten met impact.</Subtitle>
       </HeaderContainer>
       <ScreenContainer>
         <TouchableOpacity>
           <Styled.FilterButton>
             <Styled.Text>Filter</Styled.Text>
             <FilterIcon />
           </Styled.FilterButton>
         </TouchableOpacity>
         <ScrollContainer>
           {projects.map((project: IProject) => { 
             if (project.matched === false) { 
               return (<Project project={project} key={project.id} />)}
              return null})}
         </ScrollContainer>
       </ScreenContainer>
     </>
     )
}