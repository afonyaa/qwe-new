import { RedirectionContext } from './RedirectionContext';
import { FC } from 'react';
import { RedirectionProviderProps } from './interfaces';
import { COOKIE_DOMAIN, SECURE_FLAG } from './constants';
import { useQuery } from '@tanstack/react-query';
import { checkIsAuthenticatedQuery } from './queries/checkIsAuthenticatedQuery';
import { Pending } from './Pending';
import { getSearchParamFromURL } from './utils/getSearchParamFromURL';

export const RedirectionProvider: FC<RedirectionProviderProps> = ({
  children,
}) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['checkAuthenticated'],
    queryFn: checkIsAuthenticatedQuery,
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (data) {
    window.location.href =
      getSearchParamFromURL('redirect') ??
      import.meta.env.VITE_DASHBOARD_HOST_PORT;
  }

  const shouldShowAuthForms = !isLoading && !data;
  const contextValue = {
    setCookie: (cookie: string) => {
      console.log(
        'set cookie',
        `Authorization=${cookie}; domain=${COOKIE_DOMAIN}; ${SECURE_FLAG}`,
      );
      document.cookie = `Authorization=${cookie}; domain=${COOKIE_DOMAIN}; ${SECURE_FLAG}`;
      refetch();
    },
  };

  return (
    <RedirectionContext.Provider value={contextValue}>
      {shouldShowAuthForms ? children : <Pending />}
    </RedirectionContext.Provider>
  );
};
