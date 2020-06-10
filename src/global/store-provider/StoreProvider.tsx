import * as React from 'react';

import { createStore as usersStore } from '../stores/UsersStore';
import { createStore as projectsStore } from '../stores/ProjectsStore';

interface StoreProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const StoreContext = React.createContext<any>(null);

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    projects: projectsStore(),
    users: usersStore()
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}