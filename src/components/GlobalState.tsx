import { createContext } from 'react';

export const initialValues = {
  globalValue: true
};

export const GlobalContext = createContext(initialValues);