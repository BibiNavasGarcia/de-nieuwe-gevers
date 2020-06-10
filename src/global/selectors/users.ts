import { createSelector } from 'reselect';

const getUsers = (state: { users: { items: any[] } }) => state.users.items[0];

export const usersSelector = createSelector(getUsers, (users) => {
  return users;
});
