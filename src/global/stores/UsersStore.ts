import * as React from 'react';

// eslint-disable-next-line no-unused-vars
import { IUser } from '../../types/user';

export function createStore() {
  return {
    items: React.useState<IUser[]>([])
  };
}