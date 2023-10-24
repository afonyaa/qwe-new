import { FC } from 'react';
import { JoinQuiz } from './JoinQuiz';

export const Dashboard: FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <JoinQuiz />
    </div>
  );
};
