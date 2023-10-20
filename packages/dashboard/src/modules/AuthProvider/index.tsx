import { AuthContext } from './AuthContext';
import { FC, useCallback } from 'react';
import { AuthProviderProps } from './interfaces';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserQuery } from './queries/getCurrentUserQuery';
import { removeAuthCookie } from './utils/removeAuthCookie';
import { Pending } from './Pending';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const {
    data = null,
    refetch,
    isLoading,
    isRefetchError,
  } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUserQuery,
    retry: false,
    refetchOnWindowFocus: false,
  });

  if ((!data && !isLoading) || isRefetchError) {
    window.location.href = import.meta.env.VITE_VISITOR_PORTAL_HOST_PORT;
  }
  const shouldShowApp = !isLoading && data && !isRefetchError;

  const logout = useCallback(() => {
    removeAuthCookie();
    refetch();
  }, [refetch]);

  const contextValue = {
    user: data,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {shouldShowApp ? children : <Pending />}
    </AuthContext.Provider>
  );
};
