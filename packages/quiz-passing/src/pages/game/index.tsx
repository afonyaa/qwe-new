import { FC } from 'react';
import { QuizGame } from '@containers/QuizGame';
import { useParams } from 'react-router-dom';

export const GamePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return <QuizGame lobbyId={id!} />;
};
