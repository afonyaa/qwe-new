import { RedirectionContext } from './RedirectionContext';
import { FC } from 'react';
import { RedirectionProviderProps } from './interfaces';
import { COOKIE_DOMAIN, SECURE_FLAG } from './constants';

export const RedirectionProvider: FC<RedirectionProviderProps> = ({
  children,
}) => {
  const contextValue = {
    setCookie: (cookie: string) => {
      document.cookie = `Authorization=${cookie}; domain=${COOKIE_DOMAIN}; SameSite=None; ${SECURE_FLAG}`;
    },
  };

  return (
    <RedirectionContext.Provider value={contextValue}>
      {children}
    </RedirectionContext.Provider>
  );
};
