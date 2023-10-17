import { RedirectionContext } from './RedirectionContext';
import { FC } from 'react';
import { RedirectionProviderProps } from './interfaces';
import { COOKIE_DOMAIN } from './constants';

export const RedirectionProvider: FC<RedirectionProviderProps> = ({
  children,
}) => {
  const contextValue = {
    setCookie: (cookie: string) => {
      document.cookie = `Authorization=${cookie}; domain=${COOKIE_DOMAIN}`;
    },
  };

  return (
    <RedirectionContext.Provider value={contextValue}>
      {children}
    </RedirectionContext.Provider>
  );
};
