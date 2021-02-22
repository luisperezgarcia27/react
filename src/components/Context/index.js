import { createContext, useContext } from 'react';

export const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}
