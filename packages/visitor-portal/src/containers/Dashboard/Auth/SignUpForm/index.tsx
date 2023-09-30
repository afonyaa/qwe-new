import { FC } from 'react';
import { Input } from '../../../../components/Input';
import Label from '../../../../components/Label/Label';
import { SignUpFormProps } from './interfaces';

export const SignUpForm: FC<SignUpFormProps> = ({ onSwitchToSignIn }) => {
  return (
    <form
      className="mb-4 w-3/4 sm:w-80 bg-white pt-7 pb-6 px-6 rounded-md shadow-md flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Sign up</h1>
      <div className="w-full">
        <Label htmlFor="sign-up-username">Username</Label>
        <Input type="text" id="sign-up-username" name="username" />
      </div>
      <div className="w-full">
        <Label htmlFor="sign-up-email">Email</Label>
        <Input type="email" id="sign-up-email" name="email" />
      </div>
      <div className="w-full">
        <Label htmlFor="sign-up-password">Password</Label>
        <Input type="password" id="sign-up-password" name="password" />
      </div>
      <div className="w-full">
        <Label htmlFor="sign-up-confirmPassword"> Confirm Password</Label>
        <Input
          type="password"
          id="sign-up-confirmPassword"
          name="confirmPassword"
        />
      </div>
      <button className="mt-6 bg-indigo-900 text-white opacity-75 text-xs p-2 hover:bg-indigo-600 transition-colors rounded-md">
        Sign up
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
