import { FC } from 'react';
import { Quiz } from '@containers/Quiz';
import { useParams } from 'react-router-dom';

const QuizPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return <Quiz id={id!} />;
};

export default QuizPage;
