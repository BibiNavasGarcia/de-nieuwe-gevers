import React from 'react';

import App from './App';
import { StoreProvider } from './src/global/store-provider/StoreProvider';

export default function Root(){
  return(
    <StoreProvider>
      <App />
    </StoreProvider>
  )
}