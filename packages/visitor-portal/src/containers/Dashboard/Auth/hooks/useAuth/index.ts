import { AuthStateAction, SignInFields, SignUpFields } from '../../interfaces';
import { useState } from 'react';

export const useAuth = () => {
  const [loading, setIsLoading] = useState(false);

  const signIn = (
    payload: SignInFields,
    onCompleted?: (token: string) => void,
  ) => {
    setIsLoading(true);
    requestAuth(payload, AuthStateAction.SigningIn)
      .then((token) => {
        onCompleted?.(token as string);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signUp = (payload: SignUpFields, onCompleted?: () => void) => {
    setIsLoading(true);
    requestAuth(payload, AuthStateAction.SigningUp)
      .then(() => onCompleted?.())
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { signIn, signUp, loading };
};

const requestAuth = (
  payload: SignInFields | SignUpFields,
  type: AuthStateAction,
) => {
  return new Promise((resolve, reject) => {
    const authTypeSegments = {
      [AuthStateAction.SigningUp]: 'signup',
      [AuthStateAction.SigningIn]: 'signin',
    };
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/${authTypeSegments[type]}`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then((res) => {
        if (!res.ok) {
          reject(`HTTP ${res.statusText} error occurred`);
        } else res.json().then((data) => resolve(data.token));
      })
      .catch((e) => {
        reject(`Unknown error, please try later ${e.message}`);
      });
  });
};
