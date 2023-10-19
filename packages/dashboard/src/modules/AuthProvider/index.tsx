import { AuthContext } from './AuthContext';
import { FC } from 'react';
import { AuthProviderProps } from './interfaces';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
