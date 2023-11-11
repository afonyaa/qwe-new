import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { joinQuizQuery } from './queries/joinQuizQuery';

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
    <div className="card w-96 bg-base-200/250 shadow-md">
      <div className="card-body">
        <h2 className="card-title">Join the quiz</h2>
        <p>Enter the pin below and join to quiz session</p>
        <div className="flex gap-6 mt-4">
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            placeholder="PIN"
            className="input input-bordered input-secondary w-full max-w-xs focus:outline-none"
          />
          <button
            className="btn btn-secondary"
            disabled={!pinCode || isLoading}
            onClick={onClickJoin}
          >
            Join!
          </button>
        </div>
      </div>
    </div>
  );
};
