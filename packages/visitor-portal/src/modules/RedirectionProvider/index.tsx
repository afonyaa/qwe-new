import { RedirectionContext } from './RedirectionContext';
import { FC, useEffect } from 'react';
import { RedirectionProviderProps } from './interfaces';
import { COOKIE_DOMAIN, SECURE_FLAG } from './constants';
import axios from './axios';

export const RedirectionProvider: FC<RedirectionProviderProps> = ({
  children,
}) => {
  const contextValue = {
    setCookie: (cookie: string) => {
      document.cookie = `Authorization=${cookie}; domain=${COOKIE_DOMAIN}; SameSite=None; ${SECURE_FLAG}`;
    },
  };
  useEffect(() => {
    axios
      .get('api/user/')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <RedirectionContext.Provider value={contextValue}>
      {children}
    </RedirectionContext.Provider>
  );
};
