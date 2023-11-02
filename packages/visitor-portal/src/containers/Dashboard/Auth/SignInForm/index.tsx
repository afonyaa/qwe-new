import React, { FC, useEffect, useRef } from 'react';
import Label from '../../../../components/Label/Label';
import { Input } from '../../../../components/Input';
import { SignInFormProps } from './interfaces';
import { SIGN_IN_DEFAULT_VALUES } from '../constants';
import { AuthField, SignInFields } from '../interfaces';
import { useFormFields } from '../hooks/useFormFields';

export const SignInForm: FC<SignInFormProps> = ({
  onSwitchToSignUp,
  onSubmit,
  loading,
}) => {
  const { fields, isValid, onFieldChange } = useFormFields<SignInFields>({
    defaultValues: SIGN_IN_DEFAULT_VALUES,
  });

  const onClickSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(fields);
  };

  const onEnter = () => {
    if (isValid) {
      onSubmit(fields);
    }
  };

  const userNameInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    userNameInput.current?.focus();
  }, []);

  return (
    <form
      className="mb-4 w-3/4 sm:w-80 bg-white pt-7 pb-6 px-6 rounded-md shadow-md flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onEnter();
        }
      }}
    >
      <h1>Sign up</h1>
      <div className="w-full">
        <Label htmlFor="sign-in-username">Username</Label>
        <Input
          ref={userNameInput}
          type="text"
          id="sign-in-username"
          name={AuthField.Username}
          value={fields[AuthField.Username]}
          onChange={(e) => {
            onFieldChange(AuthField.Username, e.target.value);
          }}
        />
      </div>
      <div className="w-full">
        <Label htmlFor="sign-in-password">Password</Label>
        <Input
          type="password"
          id="sign-in-password"
          name={AuthField.Password}
          value={fields[AuthField.Password]}
          onChange={(e) => {
            onFieldChange(AuthField.Password, e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        onClick={onClickSubmitButton}
        disabled={!isValid || loading}
        className="mt-6 bg-indigo-900 disabled:bg-slate-500 text-white opacity-75 text-xs p-2 hover:bg-indigo-600 transition-colors rounded-md"
      >
        {loading ? 'Loading...' : 'Sign In'}
      </button>
      <button className="relative inline-flex items-center justify-center p-[1px] overflow-hidden text-gray-900 rounded-md group  bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500">
        <span className="w-[100%] relative hover:text-white transition-all py-1 px-1 text-xs ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Or with Innopolis University SSO
        </span>
      </button>
      <div>
        <span className="text-xs">Do not have an account?</span>
        <button
          onClick={onSwitchToSignUp}
          className="opacity-75 text-indigo-900 text-xs p-2 hover:text-indigo-600 transition-colors rounded-md"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
