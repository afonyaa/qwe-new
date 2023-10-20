import { FC } from 'react';

import { QuizCard } from './QuizCard';
import { QuizListProps } from './interfaces';
import { Skeleton } from './Skeleton';

export const QuizList: FC<QuizListProps> = ({ quizList, isLoading }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col h-full gap-y-2 overflow-y-auto pr-4">
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
