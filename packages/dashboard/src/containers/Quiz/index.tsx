import { FC } from 'react';
import { QuizProps } from './interfaces';
import { useQuery } from '@tanstack/react-query';
import { getQuizQuery } from './queries/getQuizQuery';

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
          <div className="spinner-dot-intermittent [--spinner-color:var(--pink-8)]"></div>
        </div>
      ) : (
        <div>
          <h1 className="text-xl text-slate-400 font-medium">{data?.name}</h1>
        </div>
      )}
    </>
  );
};
