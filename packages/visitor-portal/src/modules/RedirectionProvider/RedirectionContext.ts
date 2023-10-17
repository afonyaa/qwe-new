import { createContext } from 'react';
import { RedirectionContextType } from './interfaces';

export const RedirectionContext = createContext<RedirectionContextType>({
  setCookie: () => {},
});
