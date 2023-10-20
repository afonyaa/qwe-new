import { SignUpForm } from './SignUpForm';
import { FC, useContext, useState } from 'react';
import { AuthStateAction, SignInFields, SignUpFields } from './interfaces';
import { SignInForm } from './SignInForm';
import { useAuth } from './hooks/useAuth';
import { RedirectionContext } from '../../../modules/RedirectionProvider/RedirectionContext';

export const Auth: FC = () => {
  const [authStateAction, setAuthStateAction] = useState(
    AuthStateAction.SigningIn,
  );
  const { setCookie } = useContext(RedirectionContext);

  const { signIn, signUp, loading } = useAuth();

  const handleSwitchToSignInForm = () => {
    setAuthStateAction(AuthStateAction.SigningIn);
  };
  const handleSwitchToSignUpForm = () => {
    setAuthStateAction(AuthStateAction.SigningUp);
  };

  const handleSignUpFormSubmit = (payload: SignUpFields) => {
    signUp(payload, handleSwitchToSignInForm);
  };
  const handleSignInFormSubmit = (payload: SignInFields) => {
    signIn<string>(payload, setCookie);
  };

  return authStateAction === AuthStateAction.SigningUp ? (
    <SignUpForm
      onSwitchToSignIn={handleSwitchToSignInForm}
      onSubmit={handleSignUpFormSubmit}
      loading={loading}
    />
  ) : (
    <SignInForm
      onSwitchToSignUp={handleSwitchToSignUpForm}
      onSubmit={handleSignInFormSubmit}
      loading={loading}
    />
  );
};
