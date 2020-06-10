import * as React from 'react';

// eslint-disable-next-line no-unused-vars
import { IProject } from '../../types/project';

export function createStore() {
  return {
    items: React.useState<IProject[]>([])
  };
}