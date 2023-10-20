import { FC } from 'react';

import { QuizCard } from './QuizCard';
import { QuizListProps } from './interfaces';
import { Skeleton } from './Skeleton';
import { NoQuizzes } from './NoQuizzes';

export const QuizList: FC<QuizListProps> = ({ quizList, isLoading }) => {
  if (isLoading) {
    return <Skeleton />;
  }
  quizList = [];

  if (quizList?.length === 0) {
    return <NoQuizzes />;
  }

  return (
    <div className="flex flex-col w-1/2 h-full gap-y-2 overflow-y-auto pr-4">
      {quizList?.map((quiz) => (
        <QuizCard
          quizName={quiz.name}
          key={quiz.quizId}
          id={quiz.quizId}
          questionsAmount={quiz.questions.length}
        />
      ))}
    </div>
  );
};
