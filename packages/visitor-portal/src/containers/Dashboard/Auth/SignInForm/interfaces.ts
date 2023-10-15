import { AuthStateSwitcher, SignInSubmitCB } from '../interfaces';

export interface SignInFormProps {
  onSwitchToSignUp: AuthStateSwitcher;
  onSubmit: SignInSubmitCB;
  loading: boolean;
}
