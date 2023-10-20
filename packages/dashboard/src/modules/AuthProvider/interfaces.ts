import React from 'react';
import { User } from '@coreTypes/quriesModels/User';
import { Maybe } from '@/types/coreTypes';

export interface AuthProviderProps {
  children: React.ReactElement;
}

export interface AuthContextProps {
  user: Maybe<User>;
}
