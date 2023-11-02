import { FC } from 'react';
import { StartingProps } from './interfaces';
import { UserRole } from '@/types/quriesModels/UserRole';
import { useMutation } from '@tanstack/react-query';
import { launchQuizQuery } from './queries/launchQuizQuery';
import { useParams } from 'react-router-dom';

export const Starting: FC<StartingProps> = ({
  pinCode,
  role,
  players,
  playerName,
}) => {
  const { id: lobbyId } = useParams<{ id: string }>();
  const { mutate } = useMutation({
    mutationKey: ['startQuiz'],
    mutationFn: launchQuizQuery,
  });

  const onStart = () => mutate({ lobbyId: lobbyId! });

  if (role === UserRole.Player) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="card">
          <div className="card-body">
            <h2 className="card-header">Hello, {playerName} !</h2>
            <p className="text-content2">Wait till the quiz will be started</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-96 flex">
        <div className="card rounded-none bg-base-100 rounded-l-xl">
          <div className="card-body">
            <h2 className="card-title text-primary-content">
              The quiz has not been started yet
            </h2>
            <p className="text-content2 mt-4">
              Please, copy the PIN code below and share it with others
            </p>
            <div className="card-footer mt-8 flex justify-center">
              <span className="p-2 bg-primary-focus text-primary-content text-2xl rounded-md px-4 mt-8">
                {pinCode}
              </span>
            </div>
          </div>
        </div>
        <div className="card rounded-none rounded-r-xl bg-neutral">
          <div className="card-body">
            <h2 className="card-title text-primary-content">
              Peoples in Room
              <span
                className={`badge ${
                  players.length > 0 ? 'badge-success' : 'badge-error'
                }`}
              >
                {players.length}
              </span>
            </h2>
            <div className="overflow-y-auto h-48">
              <ul>
                {players.map((player) => (
                  <li key={player.name}>{player.name}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer mt-8 flex justify-center">
              <button className="btn btn-secondary btn-sm" onClick={onStart}>
                Launch Quiz!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
