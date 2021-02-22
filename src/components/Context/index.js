import { createContext, useContext } from 'react';

export const LangContext = createContext(null);

export function useLang() {
  return useContext(LangContext);
}
