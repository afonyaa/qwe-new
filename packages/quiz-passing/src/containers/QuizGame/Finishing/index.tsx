import { FC } from 'react';
import { FinishingProps } from './interfaces';
import { UserRole } from '@coreTypes/quriesModels/UserRole';
import { LeadersTable } from '@containers/QuizGame/shared/LeadersTable';
import Confetti from 'react-confetti';
import { useMutation } from '@tanstack/react-query';
import { stopQuizQuery } from '@containers/QuizGame/Finishing/queries/stopQuizQuery';
import { useParams } from 'react-router-dom';

export const Finishing: FC<FinishingProps> = ({ role, players }) => {
  const { id: lobbyId } = useParams<{ id: string }>();

  const goToDashboard = () => {
    window.location.href = import.meta.env.VITE_DASHBOARD_HOST_PORT;
  };

  const { mutate: stopQuizMutation, isLoading: stopQuizLoading } = useMutation({
    mutationKey: ['stopQuizMutation'],
    mutationFn: stopQuizQuery,
    onSuccess() {
      goToDashboard();
    },
  });

  const handleStopQuiz = () => {
    stopQuizMutation({ lobbyId: lobbyId! });
  };

  if (role === UserRole.Player) {
    goToDashboard();
  }

  return (
    <>
      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className="w-1/2 mx-16">
          <h1 className="font-bold text-xl text-primary-content">
            Thank you for passing the quiz!
          </h1>
          <button
            onClick={handleStopQuiz}
            className="btn btn-active btn-secondary mt-4"
          >
            {stopQuizLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              'Go to Dashboard'
            )}
          </button>
        </div>
        <div className="w-1/2 mr-8">
          <LeadersTable players={players} />
        </div>
      </div>
      <Confetti numberOfPieces={30} gravity={0.2} />
    </>
  );
};
