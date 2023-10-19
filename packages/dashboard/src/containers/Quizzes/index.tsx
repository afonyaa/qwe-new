import React, { FC } from 'react';
import { QuizList } from '@containers/Quizzes/QuizList';

export const Quizzes: FC = () => {
  return (
    <div className="flex flex-wrap h-full overflow-hidden">
      <div className="flex-grow h-full w-1/2  p-2">
        <QuizList />
      </div>
      <div className="flex-grow h-full w-1/2 p-2"></div>
    </div>
  );
};
