import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { joinQuizQuery } from '@containers/Dashboard/queries/joinQuizQuery';

export const JoinQuiz: FC = () => {
  const [pinCode, setPinCode] = useState<string>('');

  const { mutate, isLoading } = useMutation({
    mutationKey: ['joinQuiz'],
    mutationFn: joinQuizQuery,
  });

  const redirectToLobbyById = (lobbyId: string) => {
    window.location.href = `${
      import.meta.env.VITE_QUIZ_PASSING_HOST_PORT
    }/game/${lobbyId}`;
  };

  const onClickJoin = () => {
    mutate(
      { pinCode: pinCode! },
      {
        onSuccess: redirectToLobbyById,
      },
    );
  };

  return (
    <div className="card bg-gray-100">
      <div className="card-body">
        <h2 className="card-header text-slate-500">Join quiz</h2>
        <div className="card-footer flex gap-2 mt-4">
          <input
            className="input input-secondary bg-gray-100 text-gray-500 w-64"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            placeholder="Enter PIN"
          />
          <button
            disabled={!pinCode}
            onClick={onClickJoin}
            className={`btn-secondary btn ${isLoading && 'btn-loading'}`}
          >
            Play!
          </button>
        </div>
      </div>
    </div>
  );
};
