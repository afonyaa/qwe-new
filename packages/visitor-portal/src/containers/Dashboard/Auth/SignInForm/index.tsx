import { FC } from 'react';
import Label from '../../../../components/Label/Label';
import { Input } from '../../../../components/Input';
import { SignInFormProps } from './interfaces';

export const SignInForm: FC<SignInFormProps> = ({ onSwitchToSignUp }) => {
  return (
    <form
      className="mb-4 w-3/4 sm:w-80 bg-white pt-7 pb-6 px-6 rounded-md shadow-md flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Sign up</h1>
      <div className="w-full">
        <Label htmlFor="sign-in-username">Username</Label>
        <Input type="text" id="sign-in-username" name="username" />
      </div>
      <div className="w-full">
        <Label htmlFor="sign-in-password">Password</Label>
        <Input type="password" id="sign-in-password" name="password" />
      </div>
      <button
        type="button"
        className="mt-6 bg-indigo-900 text-white opacity-75 text-xs p-2 hover:bg-indigo-600 transition-colors rounded-md"
      >
        Sign in
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
