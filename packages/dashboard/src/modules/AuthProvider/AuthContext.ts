import { createContext } from 'react';
import { AuthContextProps } from '@modules/AuthProvider/interfaces';

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  logout: () => {},
});
