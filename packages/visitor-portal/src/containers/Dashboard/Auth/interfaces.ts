export enum AuthStateAction {
  SigningIn = 'SigningIn',
  SigningUp = 'SigningUp',
}

export type AuthStateSwitcher = () => void;

export enum AuthField {
  Firstname = 'firstname',
  Lastname = 'lastname',
  Email = 'email',
  Username = 'username',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export interface SignUpFields {
  [AuthField.Firstname]: string;
  [AuthField.Lastname]: string;
  [AuthField.Email]: string;
  [AuthField.Username]: string;
  [AuthField.Password]: string;
  [AuthField.ConfirmPassword]: string;
}

export interface SignInFields {
  [AuthField.Username]: string;
  [AuthField.Password]: string;
}

export type SignUpSubmitCB = (fields: SignUpFields) => void;
export type SignInSubmitCB = (fields: SignInFields) => void;
