import { FC } from 'react';
import { FinishingProps } from './interfaces';
import { UserRole } from '@coreTypes/quriesModels/UserRole';
import { LeadersTable } from '@containers/QuizGame/shared/LeadersTable';
import Confetti from 'react-confetti';

export const Finishing: FC<FinishingProps> = ({ role, players }) => {
  if (role === UserRole.Player) {
    window.location.href = import.meta.env.VITE_DASHBOARD_HOST_PORT;
  }

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <Confetti numberOfPieces={30} gravity={0.2} />
      <div>
        <h1 className={'font-bold text-xl'}>Thank you for passing the quiz!</h1>
      </div>
      <div className="w-1/2">
        <LeadersTable players={players} />
      </div>
    </div>
  );
};
