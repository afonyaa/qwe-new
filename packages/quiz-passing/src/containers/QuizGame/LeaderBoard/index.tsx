import { FC } from 'react';
import { LeaderBoardProps } from './interfaces';
import { UserRole } from '@coreTypes/quriesModels/UserRole';
import { useMutation } from '@tanstack/react-query';
import { goToNextQuestionQuery } from '@containers/QuizGame/LeaderBoard/queries/goToNextQuestionQuery';
import { useParams } from 'react-router-dom';
import { LeadersTable } from '@containers/QuizGame/shared/LeadersTable';
import { ScoreCount } from '@containers/QuizGame/shared/ScoreCount';
import { QuestionResult } from '@containers/QuizGame/shared/QuestionResult';
import { goToFinalLeaderBoard } from '@containers/QuizGame/LeaderBoard/queries/goToFinalLeaderBoard';

export const LeaderBoard: FC<LeaderBoardProps> = ({
  players,
  currentQuestion,
  role,
  playerScore,
  totalQuestions,
}) => {
  const { id: lobbyId } = useParams<{ id: string }>();
  const { mutate: mutateGoToNextQuestion } = useMutation({
    mutationKey: ['goToNextQuestion'],
    mutationFn: goToNextQuestionQuery,
  });
  const { mutate: mutateGoToLeaderboard } = useMutation({
    mutationKey: ['goToLeaderboard'],
    mutationFn: goToFinalLeaderBoard,
  });

  const isLastQuestion = totalQuestions === currentQuestion.questionNumber + 1;

  const handleNextQuestion = () => {
    mutateGoToNextQuestion({ lobbyId: lobbyId! });
  };

  const handleGotoLeaderboard = () => {
    mutateGoToLeaderboard({ lobbyId: lobbyId! });
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
          onLeaderboard={handleGotoLeaderboard}
          currentQuestion={currentQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>
      <div className="h-full w-[512px] flex-col flex items-center justify-center">
        <h1 className="text-2xl font-bold text-primary-content">
          Leader Board
        </h1>
        <LeadersTable players={players} />
      </div>
    </div>
  );
};
