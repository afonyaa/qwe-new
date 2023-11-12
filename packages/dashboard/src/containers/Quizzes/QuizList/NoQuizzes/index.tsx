import { FC } from 'react';
import emptyTrash from './assets/empty-trash.svg';

export const NoQuizzes: FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
      <img alt="quiz-logo" src={emptyTrash} width={128} />
      <h2 className="text-gray-500">You don't have any quizzes</h2>
    </div>
  );
};
