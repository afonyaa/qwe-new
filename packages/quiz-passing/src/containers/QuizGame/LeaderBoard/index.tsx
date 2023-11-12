import { FC } from 'react';
import { LeaderBoardProps } from './interfaces';
import { UserRole } from '@/types/quriesModels/UserRole';
import { useMutation } from '@tanstack/react-query';
import { goToNextQuestionQuery } from '@containers/QuizGame/LeaderBoard/queries/goToNextQuestionQuery';
import { useParams } from 'react-router-dom';
import { LeadersTable } from '@containers/QuizGame/shared/LeadersTable';
import { ScoreCount } from '@containers/QuizGame/shared/ScoreCount';
import { QuestionResult } from '@containers/QuizGame/shared/QuestionResult';

export const LeaderBoard: FC<LeaderBoardProps> = ({
  players,
  currentQuestion,
  role,
  playerScore,
}) => {
  const { id: lobbyId } = useParams<{ id: string }>();
  const { mutate } = useMutation({
    mutationKey: ['goToNextQuestion'],
    mutationFn: goToNextQuestionQuery,
  });

  const handleNextQuestion = () => {
    mutate({ lobbyId: lobbyId! });
  };

  if (role === UserRole.Player) {
    return (
      <div className="h-full flex items-center justify-center">
        <ScoreCount count={playerScore} />
        <h1 className="text-3xl font-bold text-accent-content">
          Look at the desk!
        </h1>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-wrap">
      <div className="h-full ml-16 flex-col w-1/2 flex items-center justify-center">
        <QuestionResult
          onNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
        />
      </div>
      <div className="h-full flex-col w-1/2 px-8 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-primary-content">
          Leader Board
        </h1>
        <LeadersTable players={players} />
      </div>
    </div>
  );
};
