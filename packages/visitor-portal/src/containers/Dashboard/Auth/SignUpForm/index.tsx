import React, { FC } from 'react';
import { Input } from '../../../../components/Input';
import Label from '../../../../components/Label/Label';
import { SignUpFormProps } from './interfaces';
import { SIGN_UP_DEFAULT_VALUES } from '../constants';
import { AuthField, SignUpFields } from '../interfaces';
import { useFormFields } from '../hooks/useFormFields';

export const SignUpForm: FC<SignUpFormProps> = ({
  onSwitchToSignIn,
  onSubmit,
  loading,
}) => {
  const { fields, isValid, onFieldChange } = useFormFields<SignUpFields>({
    defaultValues: SIGN_UP_DEFAULT_VALUES,
  });
  const onClickSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(fields);
  };

  return (
    <form
      className="mb-4 w-3/4 sm:w-80 bg-white pt-7 pb-6 px-6 rounded-md shadow-md flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Sign up</h1>
      <div className="w-full flex gap-x-2">
        <div className="w-full">
          <Label htmlFor="sign-up-username">Username</Label>
          <Input
            type="text"
            id="sign-up-username"
            name={AuthField.Username}
            value={fields[AuthField.Username]}
            onChange={(e) => {
              onFieldChange(AuthField.Username, e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <Label htmlFor="sign-up-email">Email</Label>
          <Input
            type="email"
            id="sign-up-email"
            name={AuthField.Email}
            value={fields[AuthField.Email]}
            onChange={(e) => {
              onFieldChange(AuthField.Email, e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full flex gap-x-2">
        <div>
          <Label htmlFor="sign-up-first-name">First Name</Label>
          <Input
            type="text"
            id="sign-up-first-name"
            name={AuthField.Firstname}
            value={fields[AuthField.Firstname]}
            onChange={(e) => {
              onFieldChange(AuthField.Firstname, e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="sign-up-last-name">Last Name</Label>
          <Input
            type="text"
            id="sign-up-last-name"
            name={AuthField.Lastname}
            value={fields[AuthField.Lastname]}
            onChange={(e) => {
              onFieldChange(AuthField.Lastname, e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="sign-up-password">Password</Label>
        <Input
          type="password"
          id="sign-up-password"
          name={AuthField.Password}
          value={fields[AuthField.Password]}
          onChange={(e) => {
            onFieldChange(AuthField.Password, e.target.value);
          }}
        />
      </div>
      <div className="w-full">
        <Label htmlFor="sign-up-confirmPassword"> Confirm Password</Label>
        <Input
          type="password"
          id="sign-up-confirmPassword"
          name={AuthField.ConfirmPassword}
          value={fields[AuthField.ConfirmPassword]}
          onChange={(e) => {
            onFieldChange(AuthField.ConfirmPassword, e.target.value);
          }}
        />
      </div>
      <button
        onClick={onClickSubmitButton}
        disabled={!isValid || loading}
        className="mt-6 bg-indigo-900 text-white opacity-75 text-xs p-2 hover:bg-indigo-600 disabled:bg-slate-500 transition-colors rounded-md"
      >
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
      <div>
        <span className="text-xs">Have an account?</span>
        <button
          onClick={onSwitchToSignIn}
          type="button"
          className="opacity-75 text-indigo-900 text-xs p-2 hover:text-indigo-600 transition-colors rounded-md"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
