import { FC } from 'react';
import { LeaderBoardProps } from './interfaces';
import { UserRole } from '@/types/quriesModels/UserRole';
import { useMutation } from '@tanstack/react-query';
import { goToNextQuestionQuery } from '@containers/QuizGame/LeaderBoard/queries/goToNextQuestionQuery';
import { useParams } from 'react-router-dom';
import { LeadersTable } from '@containers/QuizGame/shared/LeadersTable';

export const LeaderBoard: FC<LeaderBoardProps> = ({
  players,
  currentQuestion,
  role,
}) => {
  const { id: lobbyId } = useParams<{ id: string }>();
  const { mutate } = useMutation({
    mutationKey: ['goToNextQuestion'],
    mutationFn: goToNextQuestionQuery,
  });

  const onNextQuestion = () => {
    mutate({ lobbyId: lobbyId! });
  };

  const rightAnswer = currentQuestion?.answers.find(
    (answer) => answer.isRightAnswer,
  );

  if (role === UserRole.Player) {
    return (
      <div className="h-full flex items-center justify-center">
        <h1 className="text-3xl font-bold">Look at the desk!</h1>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-wrap">
      <div className="h-full flex-col w-1/2 flex items-center justify-center">
        <div className="ml-16 flex flex-col items-start gap-4">
          <h1 className="text-xl">
            Question: <span className="font-bold">{currentQuestion?.text}</span>
          </h1>
          <h2 className="text-3xl font-bold mt-4">
            Correct answer:
            <span className="text-green-400 ml-4">{rightAnswer?.text}</span>
          </h2>
          <div>
            <button onClick={onNextQuestion} className="btn btn-solid-error">
              Go to next question
            </button>
          </div>
        </div>
      </div>
      <div className="h-full flex-col w-1/2 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Leader Board</h1>
        <LeadersTable players={players} />
      </div>
    </div>
  );
};
