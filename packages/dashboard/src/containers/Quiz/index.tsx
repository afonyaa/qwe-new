import { FC } from 'react';
import { QuizProps } from './interfaces';
import { useQuery } from '@tanstack/react-query';
import { getQuizQuery } from './queries/getQuizQuery';
import { Question } from '@containers/Quiz/Question';

export const Quiz: FC<QuizProps> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['quiz', id],
    queryFn: () => getQuizQuery(id),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <h1 className="text-xl text-slate-400 font-medium mb-4">
            {data?.name}
          </h1>
          <div className="flex flex-col gap-4 w-2/3 h-full overflow-y-auto">
            {data?.questions.map((question) => (
              <Question data={question} key={question.questionId} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
