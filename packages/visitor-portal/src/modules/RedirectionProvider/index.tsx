import { RedirectionContext } from './RedirectionContext';
import { FC } from 'react';
import { RedirectionProviderProps } from './interfaces';
import { QWE_AUTH_TOKEN } from './constants';

export const RedirectionProvider: FC<RedirectionProviderProps> = ({
  children,
}) => {
  // const urlParams = new URLSearchParams(window.location.search);
  // const redirectUrl = urlParams.get('redirect');

  //todo take from env, fix types window.location
  if (localStorage.getItem(QWE_AUTH_TOKEN)) {
    // window.location = redirectUrl ?? 'http://localhost:3001';
  }

  const saveToken = (token: string) => {
    localStorage.setItem(QWE_AUTH_TOKEN, token);
    // window.location = redirectUrl ?? 'http://localhost:3001';
  };

  const contextValue = {
    saveToken,
  };

  return (
    <RedirectionContext.Provider value={contextValue}>
      {children}
    </RedirectionContext.Provider>
  );
};
