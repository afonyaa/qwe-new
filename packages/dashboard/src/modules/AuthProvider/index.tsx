import { AuthContext } from './AuthContext';
import { FC } from 'react';
import { AuthProviderProps } from './interfaces';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserQuery } from './queries/getCurrentUserQuery';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  // const {} = useQuery({
  //   queryKey: ['currentUser'],
  //   queryFn: getCurrentUserQuery,
  //   retry: false,
  //   refetchOnWindowFocus: false,
  // });

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
