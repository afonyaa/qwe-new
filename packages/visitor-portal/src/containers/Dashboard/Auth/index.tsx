import { SignUpForm } from './SignUpForm';
import { FC, useState } from 'react';
import { AuthStateAction } from './interfaces';
import { SignInForm } from './SignInForm';

export const Auth: FC = () => {
  const [authStateAction, setAuthStateAction] = useState(
    AuthStateAction.SigningIn,
  );

  const handleSwitchToSignIn = () => {
    setAuthStateAction(AuthStateAction.SigningIn);
  };
  const handleSwitchToSignUp = () => {
    setAuthStateAction(AuthStateAction.SigningUp);
  };

  const handleSignUpFormSubmit = () => {};
  const handleSignInFormSubmit = () => {};

  return authStateAction === AuthStateAction.SigningUp ? (
    <SignUpForm
      onSwitchToSignIn={handleSwitchToSignIn}
      onSubmit={handleSignUpFormSubmit}
    />
  ) : (
    <SignInForm
      onSwitchToSignUp={handleSwitchToSignUp}
      onSubmit={handleSignInFormSubmit}
    />
  );
};
