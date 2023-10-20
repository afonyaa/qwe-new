import React from 'react';

export interface RedirectionProviderProps {
  children: React.ReactElement;
}

export interface RedirectionContextType {
  setCookie: (cookie: string) => void;
}
