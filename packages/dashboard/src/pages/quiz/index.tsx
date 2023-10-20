import { FC } from 'react';
import { Quiz } from '@containers/Quiz';
import { useParams } from 'react-router-dom';

export const QuizPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return <Quiz id={id!} />;
};
