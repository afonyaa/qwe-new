import { AuthField, SignInFields, SignUpFields } from './interfaces';

export const SIGN_UP_DEFAULT_VALUES: SignUpFields = {
  [AuthField.Firstname]: '',
  [AuthField.Lastname]: '',
  [AuthField.Email]: '',
  [AuthField.Username]: '',
  [AuthField.Password]: '',
  [AuthField.ConfirmPassword]: '',
};

export const SIGN_IN_DEFAULT_VALUES: SignInFields = {
  [AuthField.Username]: '',
  [AuthField.Password]: '',
};
