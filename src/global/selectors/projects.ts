import { createSelector } from 'reselect';

const getProjects = (state: { projects: { items: any[] } }) =>
  state.projects.items[0];

export const projectsSelector = createSelector(getProjects, (projects) => {
  return projects;
});
