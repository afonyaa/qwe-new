import { FC } from 'react';
import logo from './assets/study-svgrepo-com.svg';

export const BrandDescription: FC = () => {
  return (
    <div>
      <img alt="quiz-logo" src={logo} className="hidden sm:block" width={256} />
      <div className="px-10 sm:px-0">
        <h1 className="text-5xl font-bold mt-8">Quiz web engine</h1>
        <h2 className=" border-l-8 pl-2 dark:border-gray-400 text-xl font-light text-slate-400 mt-4">
          Craft engaging quizzes and seamlessly share them with others
        </h2>
      </div>
    </div>
  );
};
