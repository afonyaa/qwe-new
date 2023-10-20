import { AuthContext } from './AuthContext';
import { FC } from 'react';
import { AuthProviderProps } from './interfaces';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserQuery } from './queries/getCurrentUserQuery';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { data = null } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUserQuery,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const contextValue = {
    user: data,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
