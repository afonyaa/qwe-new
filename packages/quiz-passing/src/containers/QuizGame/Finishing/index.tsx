import { FC } from 'react';
import { FinishingProps } from './interfaces';
import { UserRole } from '@coreTypes/quriesModels/UserRole';
import { LeadersTable } from '@containers/QuizGame/shared/LeadersTable';
import Confetti from 'react-confetti';
import { QuestionResult } from '@containers/QuizGame/shared/QuestionResult';

export const Finishing: FC<FinishingProps> = ({
  role,
  players,
  currentQuestion,
}) => {
  const goToDashboard = () => {
    window.location.href = import.meta.env.VITE_DASHBOARD_HOST_PORT;
  };
  if (role === UserRole.Player) {
    goToDashboard();
  }
  return (
    <>
      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className="w-1/2 mx-8">
          <h1 className="font-bold text-xl text-primary-content">
            Thank you for passing the quiz!
          </h1>
          <QuestionResult currentQuestion={currentQuestion} />
          <button
            onClick={goToDashboard}
            className="btn btn-active btn-secondary"
          >
            Go to Dashboard
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
