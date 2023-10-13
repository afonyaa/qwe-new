import { AuthStateSwitcher, SignUpSubmitCB } from '../interfaces';

export interface SignUpFormProps {
  onSwitchToSignIn: AuthStateSwitcher;
  onSubmit: SignUpSubmitCB;
}
