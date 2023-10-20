import { AuthStateAction, SignInFields, SignUpFields } from '../../interfaces';
import { useState } from 'react';
import { authQuery } from './queries/authQuery';

export const useAuth = () => {
  const [loading, setIsLoading] = useState(false);
  const signIn = <T>(
    payload: SignInFields,
    onCompleted?: (data: T) => void,
  ) => {
    setIsLoading(true);
    authQuery(payload, AuthStateAction.SigningIn)
      .then((data) => {
        onCompleted?.(data as T);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signUp = (payload: SignUpFields, onCompleted?: () => void) => {
    setIsLoading(true);
    authQuery(payload, AuthStateAction.SigningUp)
      .then(() => onCompleted?.())
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { signIn, signUp, loading };
};
