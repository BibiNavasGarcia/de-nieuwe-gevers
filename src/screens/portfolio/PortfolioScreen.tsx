import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
// eslint-disable-next-line no-unused-vars
import { NavigationScreenProp } from 'react-navigation';

// eslint-disable-next-line no-unused-vars
import { IProject } from '../../types/project';
// eslint-disable-next-line no-unused-vars
import { IUser } from '../../types/user';

import * as Styled from './PortfolioScreen.styled';

import { projectsSelector } from '../../global/selectors/projects';
import { usersSelector } from '../../global/selectors/users';

import { Heading } from '../../shared/components/heading/Heading';
import { HeaderContainer } from '../../shared/components/screen-header/container/HeaderContainer';
import { Logo } from '../../shared/components/logo/Logo';
import { NoCurrentProject } from '../../shared/components/no-current-project/NoCurrentProject';
import { PortfolioProject } from '../../components/portfolio-project/PortfolioProject';
import { ProjectContainer } from '../../shared/components/project-container/ProjectContainer';
import { ScreenContainer } from '../../shared/components/screen-container/ScreenContainer';
import { ScrollContainer } from '../../shared/components/scroll-container/ScrollContainer';
import { StoreContext } from '../../global/store-provider/StoreProvider';
import { Subtitle } from '../../shared/components/screen-header/subtitle/Subtitle';
import { Title } from '../../shared/components/screen-header/title/Title';

interface PortfolioScreenProps {
  navigation: NavigationScreenProp<any>;
}

export function PortfolioScreen({ navigation }: PortfolioScreenProps) {
  const state = useContext(StoreContext);

  const projects = projectsSelector(state);
  const users = usersSelector(state);

  const currentUser = users.find((user: IUser) => {
    return user;
  });

  const userId = currentUser.professionalId;

  const myProjects = projects.filter((project: IProject) => {
    return project.professionalId === userId;
  });

  const myPendingProjects = projects.filter((project: IProject) => {
    return project.live && project.professionalId === userId;
  });

  const myCurrentProjects = projects.filter((project: IProject) => {
    return (
      project.matched && !project.completed && project.professionalId === userId
    );
  });

  const myCompletedProjects = projects.filter((project: IProject) => {
    return project.completed && project.professionalId === userId;
  });

  return (
    <>
      <HeaderContainer>
        <Logo />
        <Title>Mijn projecten.</Title>
        <Subtitle>Iets waar je trots op kan zijn.</Subtitle>
      </HeaderContainer>
      <ScreenContainer>
        <ScrollContainer>
          {myProjects.length === 0 ? (
            <>
              <NoCurrentProject navigation={navigation}>
                Huidige Projecten
              </NoCurrentProject>
              <Heading>Afgeronde projecten</Heading>
              <Styled.GreyText>
                Je hebt nog geen afgeronde projecten
              </Styled.GreyText>
            </>
          ) : (
            <>
              {myPendingProjects.length === 0 &&
              myCurrentProjects.length === 0 ? (
                <NoCurrentProject navigation={navigation}>
                  Huidige Projecten
                </NoCurrentProject>
              ) : (
                <>
                  {myPendingProjects.length > 0 ? (
                    <>
                      <Heading>Lopende aanvragen</Heading>
                      <ProjectContainer>
                        <ScrollView horizontal>
                          {myPendingProjects.map(
                            (myPendingProject: IProject) => (
                              <TouchableOpacity>
                                <PortfolioProject
                                  project={myPendingProject}
                                  key={myPendingProject.id}
                                />
                              </TouchableOpacity>
                            )
                          )}
                        </ScrollView>
                      </ProjectContainer>
                    </>
                  ) : null}
                  {myCurrentProjects.length > 0 ? (
                    <>
                      <Heading>Huidige projecten</Heading>
                      <ProjectContainer>
                        <ScrollView horizontal>
                          {myCurrentProjects.map(
                            (myCurrentProject: IProject) => (
                              <TouchableOpacity>
                                <PortfolioProject
                                  project={myCurrentProject}
                                  key={myCurrentProject.id}
                                />
                              </TouchableOpacity>
                            )
                          )}
                        </ScrollView>
                      </ProjectContainer>
                    </>
                  ) : null}
                </>
              )}
              <>
                {myCompletedProjects.length > 0 ? (
                  <>
                    <Heading>Afgeronde projecten</Heading>
                    <ProjectContainer>
                      <ScrollView horizontal>
                        {myCompletedProjects.map(
                          (myCompletedProject: IProject) => (
                            <TouchableOpacity>
                              <PortfolioProject
                                project={myCompletedProject}
                                key={myCompletedProject.id}
                              />
                            </TouchableOpacity>
                          )
                        )}
                      </ScrollView>
                    </ProjectContainer>
                  </>
                ) : null}
              </>
            </>
          )}
        </ScrollContainer>
      </ScreenContainer>
    </>
  );
}
