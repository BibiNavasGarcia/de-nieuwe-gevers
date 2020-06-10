import React, { useContext, useEffect } from 'react';

import * as projectApi from './src/services/projects';
import * as userApi from './src/services/users';

import { StoreContext } from './src/global/store-provider/StoreProvider';
import { Navigation } from './src/global/navigation/Navigation';

export default function App() {
  const state = useContext(StoreContext);

  const [, setProjects] = state.projects.items;
  const [, setUsers] = state.users.items;

  async function getData() {
    const [users_, projects_] = await Promise.all([
      await userApi.getAll(),
      await projectApi.getAll()
    ]);
    setProjects(projects_);
    setUsers(users_);
  }

  useEffect(() => {
    getData();
  }, []);

  return <Navigation />;
}
